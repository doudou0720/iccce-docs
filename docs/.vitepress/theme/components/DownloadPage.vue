<template>
  <div class="download-container">
    <!-- 加载状态 -->
    <div class="loading" v-if="versionManager.isLoading.value">
      <div class="spinner"></div>
      <p>正在检测版本信息...</p>
    </div>

    <!-- 版本历史列表 -->
    <div v-else-if="versionManager.releasesHistory.value.length > 0">
      <VersionTimeline
        :releases="versionManager.releasesHistory.value"
        :expanded="versionManager.expandedVersions.value"
        :changelogs="versionManager.changelogs"
        :loading-changelogs="versionManager.loadingChangelogs"
        @download="handleDownload"
        @toggle="handleToggleVersion"
      />
    </div>

    <!-- 单版本显示 -->
    <div v-else>
      <div class="version-info">
        <h2>
          当前版本: <span>{{ versionManager.versionInfo.version }}</span>
        </h2>
        <p>{{ versionManager.versionInfo.description }}</p>

        <div class="download-button">
          <button @click="handleSimpleDownload" :disabled="!versionManager.versionInfo.downloadUrl">
            下载
          </button>
        </div>

        <div class="release-notes" v-if="versionManager.versionInfo.releaseNotes">
          <details open>
            <summary>更新说明</summary>
            <div v-html="versionManager.versionInfo.releaseNotes"></div>
          </details>
        </div>
      </div>
    </div>

    <!-- 下载弹窗 -->
    <LicenseModal
      v-if="downloadHandler.showDownloadModal.value"
      :pending-download="downloadHandler.pendingDownload"
      :modal-tab="downloadHandler.modalTab.value"
      :license-accepted="downloadHandler.licenseAccepted.value"
      :gpl-loading="downloadHandler.gplLoading.value"
      :gpl-error="downloadHandler.gplError.value"
      :gpl-html="downloadHandler.gplHtml.value"
      :show-mirror-dropdown="downloadHandler.showMirrorDropdown.value"
      :smart-teach-available="versionManager.smartTeachAvailable.value"
      :fastest-mirror="versionManager.fastestMirror.value"
      @update:license-accepted="downloadHandler.licenseAccepted.value = $event"
      @update:modal-tab="downloadHandler.modalTab.value = $event"
      @update:show-mirror-dropdown="downloadHandler.showMirrorDropdown.value = $event"
      @close="downloadHandler.closeDownloadModal"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { getUrlParam } from '../utils/downloadUtils';
import { isBetaVersion } from '../utils/markdownUtils';
import { useVersionManager } from '../composables/useVersionManager';
import { useDownloadHandler } from '../composables/useDownloadHandler';
import VersionTimeline from './VersionTimeline.vue';
import LicenseModal from './LicenseModal.vue';

const props = defineProps({
  version: {
    type: String,
    default: ''
  }
});

// Composables
const versionManager = useVersionManager();
const downloadHandler = useDownloadHandler();

// 计算实际版本号
const actualVersion = computed(() => {
  return props.version || String(getUrlParam('version') || '') || '';
});

// 处理版本下载
const handleDownload = (release: any) => {
  downloadHandler.initiateDownload(release);
};

// 处理简单下载（单版本模式）
const handleSimpleDownload = () => {
  if (versionManager.versionInfo.downloadUrl) {
    downloadHandler.initiateSimpleDownload(
      versionManager.versionInfo.version,
      versionManager.versionInfo.downloadUrl,
      isBetaVersion(versionManager.versionInfo.version)
    );
  }
};

// 处理版本展开/收起
const handleToggleVersion = async (versionTag: string) => {
  await versionManager.toggleVersion(versionTag);
};

// 初始化
onMounted(async () => {
  await versionManager.initialize();

  if (actualVersion.value) {
    await versionManager.fetchSpecificVersion(actualVersion.value);
  } else {
    await versionManager.fetchAllReleases();
  }
});

// 监听版本变化，自动展开并加载更新日志
watch(versionManager.releasesHistory, async (newReleases) => {
  if (actualVersion.value && newReleases.length > 0) {
    const targetRelease = newReleases.find((r: any) => r.tag_name === actualVersion.value);
    if (targetRelease) {
      await versionManager.expandVersion(targetRelease.tag_name);
    }
  }
});
</script>

<style scoped>
.download-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--vp-font-family-base, "Segoe UI", Arial, sans-serif);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: var(--vp-c-text-2, #666);
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--vp-c-brand, #0078d4);
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.version-info {
  margin-bottom: 30px;
  padding: 15px;
  background: var(--vp-c-bg-soft, var(--bg-soft-light));
  border-radius: 4px;
  border-left: 4px solid var(--vp-c-brand, #0078d4);
  color: var(--vp-c-text, var(--text-color-light));
}

.version-info h2 {
  margin: 0 0 10px 0;
}

.download-button button {
  padding: 10px 20px;
  background: var(--vp-c-brand, #0078d4);
  color: var(--vp-c-white, white);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.download-button button:hover:not(:disabled) {
  background: var(--vp-c-brand-dark, #005a9e);
}

.download-button button:disabled {
  background: var(--vp-c-gray, #ccc);
  cursor: not-allowed;
  opacity: 0.7;
}

.release-notes {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid var(--vp-c-border, var(--border-color-light));
}

.release-notes details {
  margin-top: 10px;
}

.release-notes summary {
  cursor: pointer;
  font-weight: bold;
  color: var(--vp-c-brand, #0078d4);
  padding: 8px 0;
  user-select: none;
}

.release-notes summary:hover {
  opacity: 0.8;
}

.release-notes summary + div {
  padding: 10px 0;
}

:deep(.release-notes h4) {
  margin: 10px 0 5px 0;
  font-size: 14px;
}

:deep(.release-notes ul) {
  margin: 5px 0;
  padding-left: 20px;
}

html.dark .version-info {
  color: var(--text-color-dark, #fff);
}

html.dark h2,
html.dark p {
  color: var(--text-color-dark, #fff);
}

html.dark .spinner {
  border-color: rgba(255, 255, 255, 0.1);
  border-top-color: var(--vp-c-brand, #0078d4);
}

html.dark .loading {
  color: var(--text-color-dark, #aaa);
}
</style>
