<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click.self="handleClose">
      <div class="modal-content download-modal">
        <button class="modal-close" @click="handleClose" aria-label="关闭弹窗">&times;</button>

        <div class="modal-tabs">
          <div class="tab-btn" :class="{ active: modalTab === 'license' }">
            许可协议
          </div>
          <div class="tab-btn" :class="{ active: modalTab === 'download' }">
            下载渠道
          </div>
        </div>

        <div class="modal-tab-content">
          <!-- 许可证内容 -->
          <div v-if="modalTab === 'license'" class="license-content">
            <div class="license-container">
              <h3>GNU General Public License v3.0</h3>
              <div class="license-scroll">
                <div v-if="gplLoading" class="license-loading">
                  <div class="spinner-small"></div>
                  <span>正在加载许可证文本...</span>
                </div>
                <div v-else-if="gplError" class="license-error">
                  <p>无法加载许可证文本</p>
                  <p>请访问 <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GNU GPL v3.0 官方网站</a> 查看</p>
                </div>
                <div v-else-if="gplHtml" class="license-text" v-html="gplHtml"></div>
                <div v-else class="license-placeholder">
                  <p>版权所有 (C) 2007 Free Software Foundation, Inc.</p>
                  <p>本程序是自由软件，您可以按照自由软件基金会发布的 GNU 通用公共许可证条款重新发布它及其修改版本。</p>
                  <p>发布本程序的目的是希望它有用，但没有任何担保；甚至没有对适销性或特定用途适用性的隐含担保。</p>
                  <p>有关 GNU GPL 的详细信息，请参阅：<a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">https://www.gnu.org/licenses/gpl-3.0.html</a></p>
                </div>
              </div>
            </div>

            <div class="modal-actions">
              <div class="license-accept">
                <label>
                  <input type="checkbox" v-model="localLicenseAccepted" />
                  <span>我已阅读并同意 GNU GPL v3.0 许可协议</span>
                </label>
              </div>
              <button
                class="btn-primary"
                :disabled="!localLicenseAccepted"
                @click="handleAcceptLicense"
              >
                接受并继续
              </button>
            </div>
          </div>

          <!-- 下载渠道内容 -->
          <div v-if="modalTab === 'download'" class="download-content">
            <h3>下载渠道</h3>
            <p class="download-version">版本: <strong>{{ pendingDownload.version }}</strong></p>

            <div class="download-channels">
              <!-- GitHub 直链 -->
              <div v-if="pendingDownload.url" class="mirror-dropdown-container">
                <button
                  class="download-channel primary dropdown-toggle"
                  @click="handleToggleDropdown"
                >
                  <i class="fa-brands fa-github"></i>
                  <span>GitHub 直链下载</span>
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div v-if="showMirrorDropdown" class="mirror-dropdown">
                  <a
                    :href="pendingDownload.url"
                    class="mirror-link"
                    target="_blank"
                    @click="handleCloseDropdown"
                  >
                    <i class="fa-brands fa-github"></i>
                    GitHub 直链下载
                  </a>
                  <a
                    v-for="mirror in mirrorOptions"
                    :key="mirror.name"
                    :href="mirror.url"
                    class="mirror-link"
                    target="_blank"
                    @click="handleCloseDropdown"
                  >
                    {{ mirror.name }}
                  </a>
                </div>
              </div>

              <!-- 智教云盘 -->
              <a
                v-if="smartTeachAvailable && pendingDownload.url"
                :href="pendingDownload.smartTeachUrl"
                class="download-channel"
                target="_blank"
              >
                <i class="fa-solid fa-cloud"></i>
                <span>智教云盘 (推荐)</span>
              </a>

              <!-- 镜像加速 -->
              <a
                v-if="fastestMirror && pendingDownload.url"
                :href="convertToMirrorUrl(pendingDownload.url)"
                class="download-channel"
                target="_blank"
              >
                <i class="fa-solid fa-mirror"></i>
                <span>镜像加速下载</span>
              </a>
            </div>

            <div class="modal-actions">
              <button class="btn-secondary" @click="handleClose">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getMirrorDownloadUrls, convertToMirrorUrl as convertUrl } from '../utils/downloadUtils';
import type { PendingDownload } from '../composables/useDownloadHandler';

interface Props {
  pendingDownload: PendingDownload;
  modalTab: 'license' | 'download';
  licenseAccepted: boolean;
  gplLoading: boolean;
  gplError: boolean;
  gplHtml: string;
  showMirrorDropdown: boolean;
  smartTeachAvailable: boolean;
  fastestMirror: string | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'update:licenseAccepted', value: boolean): void;
  (e: 'update:modalTab', value: 'license' | 'download'): void;
  (e: 'update:showMirrorDropdown', value: boolean): void;
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const localLicenseAccepted = computed({
  get: () => props.licenseAccepted,
  set: (value) => emit('update:licenseAccepted', value)
});

const mirrorOptions = computed(() => {
  return getMirrorDownloadUrls(props.pendingDownload.url);
});

const handleAcceptLicense = () => {
  if (props.licenseAccepted) {
    emit('update:modalTab', 'download');
  }
};

const handleClose = () => {
  emit('close');
};

const handleToggleDropdown = () => {
  emit('update:showMirrorDropdown', !props.showMirrorDropdown);
};

const handleCloseDropdown = () => {
  emit('update:showMirrorDropdown', false);
};

const convertToMirrorUrl = (url: string): string => {
  return convertUrl(url, props.fastestMirror);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: var(--vp-c-bg-soft, white);
  color: var(--vp-c-text-1, black);
  padding: 30px 40px;
  border-radius: 8px;
  text-align: center;
  max-width: 90%;
  width: 500px;
  min-height: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, opacity 0.3s ease, min-height 0.3s ease;
  overflow: hidden;
}

.modal-tab-content {
  transition: max-height 0.3s ease;
  min-height: 300px;
  position: relative;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.9);
  opacity: 0;
}

.modal-fade-enter-to .modal-content,
.modal-fade-leave-from .modal-content {
  transform: scale(1);
  opacity: 1;
}

html.dark .modal-content {
  background: var(--bg-soft-dark, #222);
  color: var(--text-color-dark, white);
}

.modal-content h2 {
  margin-top: 0;
  color: var(--vp-c-brand, #0078d4);
}

.modal-content h3 {
  margin: 0 0 15px 0;
  color: var(--vp-c-brand, #0078d4);
}

.modal-content p {
  margin-bottom: 10px;
  line-height: 1.6;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2, #666);
  padding: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-tabs {
  display: flex;
  border-bottom: 1px solid var(--vp-c-border, #ddd);
  margin-bottom: 20px;
}

.tab-btn {
  flex: 1;
  padding: 12px 20px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 15px;
  color: var(--vp-c-text-2, #666);
  transition: all 0.3s;
}

.tab-btn:hover {
  color: var(--vp-c-text-1, #333);
}

.tab-btn.active {
  color: var(--vp-c-brand, #0078d4);
  border-bottom-color: var(--vp-c-brand, #0078d4);
  font-weight: bold;
}

html.dark .tab-btn {
  color: var(--vp-c-text-2-dark, #aaa);
}

html.dark .tab-btn:hover,
html.dark .tab-btn.active {
  color: var(--vp-c-brand, #0078d4);
}

.modal-tab-content > div {
  animation: tabFadeIn 0.35s ease;
}

@keyframes tabFadeIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.license-container {
  border: 1px solid var(--vp-c-border, #ddd);
  border-radius: 8px;
  overflow: hidden;
}

.license-scroll {
  padding: 15px;
  background: var(--vp-c-bg-soft, #f5f5f5);
  font-size: 14px;
  line-height: 1.6;
}

.license-scroll h4 {
  margin: 15px 0 10px 0;
  color: var(--vp-c-text-1, #333);
}

.license-scroll ul {
  padding-left: 20px;
}

.license-scroll a {
  color: var(--vp-c-brand, #0078d4);
}

html.dark .license-scroll {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
}

html.dark .license-scroll h4,
html.dark .license-scroll a {
  color: var(--vp-c-text-1-dark, #fff);
}

.license-loading,
.license-error,
.license-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: var(--vp-c-text-2, #666);
}

.license-loading {
  flex-direction: row;
  gap: 10px;
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

.license-text {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 1.5;
  max-height: 300px;
  overflow-y: auto;
  background: var(--vp-c-bg-soft, #f5f5f5);
  padding: 10px;
  border-radius: 4px;
}

.license-error a {
  color: var(--vp-c-brand, #0078d4);
}

.license-accept {
  display: flex;
  align-items: center;
}

.license-accept label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.license-accept input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

html.dark .license-accept {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
}

.download-version {
  margin-bottom: 20px;
  color: var(--vp-c-text-2, #666);
}

.download-channels {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.download-channel {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: var(--vp-c-bg-soft, #f5f5f5);
  border: 1px solid var(--vp-c-border, #ddd);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1, #333);
  transition: all 0.3s;
}

.download-channel:hover {
  border-color: var(--vp-c-brand, #0078d4);
  background: var(--vp-c-bg, #fff);
}

.download-channel.primary {
  background: var(--vp-c-brand, #0078d4);
  color: white;
  border-color: var(--vp-c-brand, #0078d4);
}

.download-channel.primary:hover {
  background: var(--vp-c-brand-dark, #005a9e);
}

.download-channel i {
  font-size: 20px;
}

html.dark .download-channel {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
  color: var(--vp-c-text-1-dark, #fff);
}

.mirror-dropdown-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 15px 20px;
  background: var(--vp-c-brand, #0078d4);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: all 0.3s;
}

.dropdown-toggle:hover {
  background: var(--vp-c-brand-dark, #005a9e);
}

.dropdown-toggle .fa-chevron-down {
  font-size: 12px;
  transition: transform 0.3s;
}

.dropdown-toggle:hover .fa-chevron-down {
  transform: translateY(2px);
}

html.dark .dropdown-toggle {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
  color: var(--vp-c-text-1-dark, #fff);
}

html.dark .dropdown-toggle:hover {
  background: var(--vp-c-bg-dark, #444);
}

.mirror-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: var(--vp-c-bg-soft, #fff);
  border: 1px solid var(--vp-c-border, #ddd);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
}

html.dark .mirror-dropdown {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
}

.mirror-link {
  display: block;
  padding: 12px 20px;
  color: var(--vp-c-text-1, #333);
  text-decoration: none;
  transition: background 0.2s;
  font-size: 14px;
}

.mirror-link:hover {
  background: var(--vp-c-bg-soft, #f5f5f5);
  color: var(--vp-c-brand, #0078d4);
}

.mirror-link + .mirror-link {
  border-top: 1px solid var(--vp-c-border, #eee);
}

html.dark .mirror-link {
  color: var(--vp-c-text-1-dark, #fff);
}

html.dark .mirror-link:hover {
  background: var(--vp-c-bg-dark, #444);
  color: var(--vp-c-brand, #0078d4);
}

html.dark .mirror-link + .mirror-link {
  border-top-color: var(--vp-c-border-dark, #444);
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.btn-primary,
.btn-secondary {
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--vp-c-brand, #0078d4);
  color: white;
  border: none;
}

.btn-primary:hover:not(:disabled) {
  background: var(--vp-c-brand-dark, #005a9e);
}

.btn-primary:disabled {
  background: var(--vp-c-gray, #ccc);
  cursor: not-allowed;
}

.btn-secondary {
  background: transparent;
  color: var(--vp-c-text-1, #333);
  border: 1px solid var(--vp-c-border, #ddd);
}

.btn-secondary:hover {
  background: var(--vp-c-bg-soft, #f5f5f5);
}

html.dark .btn-secondary {
  color: var(--vp-c-text-1-dark, #fff);
  border-color: var(--vp-c-border-dark, #444);
}

html.dark .btn-secondary:hover {
  background: var(--vp-c-bg-dark, #333);
}
</style>
