<template>
  <div class="version-timeline">
    <div
      v-for="(release, index) in releases"
      :key="release.id"
      class="timeline-item"
      :class="{ expanded: expanded.has(release.tag_name), last: index === releases.length - 1 }"
    >
      <div class="timeline-marker">
        <span class="marker-dot"></span>
        <span class="marker-line"></span>
      </div>
      <div class="timeline-content">
        <div class="version-card-header" @click="handleToggle(release.tag_name)">
          <div class="version-info-left">
            <span class="version-tag">{{ release.tag_name }}</span>
            <span v-if="release.prerelease" class="beta-badge">测试版</span>
            <span class="release-date">{{ formatDate(release.published_at) }}</span>
          </div>
          <div class="version-info-right">
            <button
              class="download-btn"
              @click.stop="handleDownload(release)"
              :disabled="!hasDownloadUrl(release)"
            >
              <i class="fa-solid fa-download"></i> 下载
            </button>
            <button class="expand-btn">
              <i
                :class="expanded.has(release.tag_name) ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
              ></i>
            </button>
          </div>
        </div>

        <transition name="collapse">
          <div v-show="expanded.has(release.tag_name)" class="version-card-content">
            <div v-if="loadingChangelogs[release.tag_name]" class="changelog-loading">
              <div class="spinner-small"></div>
              <span>加载中...</span>
            </div>
            <div v-else-if="changelogs[release.tag_name]" class="changelog-content" v-html="changelogs[release.tag_name]"></div>
            <div v-else class="no-changelog">暂无更新说明</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '../utils/markdownUtils';
import { getDownloadUrl } from '../utils/downloadUtils';
import type { Release } from '../composables/useVersionManager';

interface Props {
  releases: Release[];
  expanded: Set<string>;
  changelogs: Record<string, string>;
  loadingChangelogs: Record<string, boolean>;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'download', release: Release): void;
  (e: 'toggle', versionTag: string): void;
}

const emit = defineEmits<Emits>();

const handleToggle = (versionTag: string) => {
  emit('toggle', versionTag);
};

const handleDownload = (release: Release) => {
  emit('download', release);
};

const hasDownloadUrl = (release: Release): boolean => {
  return !!getDownloadUrl(release);
};
</script>

<style scoped>
.version-timeline {
  margin: 20px 0;
}

.timeline-item {
  position: relative;
  display: flex;
}

.timeline-item.last .marker-line {
  display: none;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  padding-top: 10px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-brand, #0078d4);
  background: var(--vp-c-bg, white);
  flex-shrink: 0;
  z-index: 1;
}

.timeline-item.expanded .marker-dot {
  background: var(--vp-c-brand, #0078d4);
}

.marker-line {
  width: 2px;
  flex: 1;
  min-height: 30px;
  background: var(--vp-c-brand, #0078d4);
  opacity: 0.3;
  margin-top: 4px;
}

.timeline-content {
  flex: 1;
  padding-bottom: 20px;
}

.version-card {
  border: 1px solid var(--vp-c-border, var(--border-color-light));
  border-radius: 8px;
  background: var(--vp-c-bg-soft, var(--bg-soft-light));
  overflow: hidden;
  transition: all 0.3s ease;
}

.version-card.expanded {
  border-color: var(--vp-c-brand, #0078d4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.version-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
}

.version-card-header:hover {
  background: var(--vp-c-bg, var(--bg-light));
}

.version-info-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.version-tag {
  font-weight: bold;
  font-size: 16px;
  color: var(--vp-c-text-1, #333);
}

.beta-badge {
  background: #f0ad4e;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.release-date {
  color: var(--vp-c-text-2, #666);
  font-size: 14px;
}

.version-info-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.download-btn {
  padding: 6px 14px;
  background: var(--vp-c-brand, #0078d4);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.3s;
}

.download-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-dark, #005a9e);
}

.download-btn:disabled {
  background: var(--vp-c-gray, #ccc);
  cursor: not-allowed;
}

.expand-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--vp-c-border, var(--border-color-light));
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-2, #666);
  transition: all 0.2s;
}

.expand-btn:hover {
  background: var(--vp-c-bg-soft, #eee);
}

.version-card-content {
  padding: 0 16px 16px;
  border-top: 1px solid var(--vp-c-border, var(--border-color-light));
}

.changelog-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  color: var(--vp-c-text-2, #666);
}

.spinner-small {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 2px solid var(--vp-c-brand, #0078d4);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.changelog-content {
  padding: 15px 0;
  line-height: 1.6;
}

.changelog-content :deep(h4) {
  margin: 10px 0 5px 0;
  font-size: 14px;
}

.changelog-content :deep(ul) {
  margin: 5px 0;
  padding-left: 20px;
}

.no-changelog {
  padding: 15px 0;
  color: var(--vp-c-text-2, #666);
  font-style: italic;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
  max-height: 500px;
}

html.dark .version-tag,
html.dark .version-card-header,
html.dark .changelog-content {
  color: var(--vp-c-text-1-dark, #fff);
}

html.dark .version-card {
  background: var(--bg-soft-dark, #222);
  border-color: var(--border-color-dark, #444);
}

html.dark .version-card-header:hover {
  background: var(--vp-c-bg-dark, #333);
}

html.dark .marker-dot {
  background: var(--vp-c-bg-dark, #222);
}

html.dark .marker-line {
  background: var(--vp-c-brand, #0078d4);
}

html.dark .expand-btn {
  background: transparent;
  border-color: var(--border-color-dark, #444);
  color: var(--text-color-dark, #aaa);
}

html.dark .expand-btn:hover {
  background: var(--vp-c-bg-dark, #333);
}

html.dark .loading,
html.dark .release-date,
html.dark .no-changelog {
  color: var(--text-color-dark, #aaa);
}
</style>
