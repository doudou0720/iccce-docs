/**
 * 下载处理 Composable
 * 负责下载流程、许可证管理和弹窗状态
 */

import { ref, reactive } from 'vue';
import { getDownloadUrl, getSmartTeachUrl, getMirrorDownloadUrls, convertToMirrorUrl } from '../utils/downloadUtils';
import { parseMarkdown } from '../utils/markdownUtils';
import type { Release } from './useVersionManager';

export interface PendingDownload {
  version: string;
  url: string;
  smartTeachUrl: string;
  isBeta: boolean;
}

export function useDownloadHandler() {
  // 弹窗状态
  const showDownloadModal = ref(false);
  const modalTab = ref<'license' | 'download'>('license');
  const licenseAccepted = ref(false);

  // 待下载信息
  const pendingDownload = reactive<PendingDownload>({
    version: "",
    url: "",
    smartTeachUrl: "",
    isBeta: false
  });

  // 许可证状态
  const gplText = ref("");
  const gplHtml = ref("");
  const gplLoading = ref(false);
  const gplError = ref(false);

  // 下拉菜单状态
  const showMirrorDropdown = ref(false);

  // 倒计时状态
  const countdown = ref(5);
  let countdownTimer: ReturnType<typeof setInterval> | null = null;

  // 初始化下载流程
  const initiateDownload = (release: Release) => {
    const url = getDownloadUrl(release);
    if (!url) return;

    pendingDownload.version = release.tag_name;
    pendingDownload.url = url;
    pendingDownload.smartTeachUrl = getSmartTeachUrl(release);
    pendingDownload.isBeta = release.prerelease;

    licenseAccepted.value = false;
    modalTab.value = "license";
    showDownloadModal.value = true;
    loadGplText();
  };

  // 初始化简单下载流程
  const initiateSimpleDownload = (version: string, url: string, isBeta: boolean = false) => {
    pendingDownload.version = version;
    pendingDownload.url = url;
    pendingDownload.smartTeachUrl = getSmartTeachUrl({ prerelease: isBeta } as Release);
    pendingDownload.isBeta = isBeta;

    licenseAccepted.value = false;
    modalTab.value = "license";
    showDownloadModal.value = true;
    loadGplText();
  };

  // 关闭下载弹窗
  const closeDownloadModal = () => {
    showDownloadModal.value = false;
    countdown.value = 0;
    stopCountdown();
    showMirrorDropdown.value = false;
  };

  // 接受许可证并切换到下载标签
  const acceptLicenseAndContinue = () => {
    if (licenseAccepted.value) {
      modalTab.value = "download";
    }
  };

  // 加载 GPL 许可证文本
  const loadGplText = async () => {
    if (gplText.value || gplLoading.value) return;

    gplLoading.value = true;
    gplError.value = false;

    try {
      const response = await fetch("./license.md");
      if (response.ok) {
        gplText.value = await response.text();
        gplHtml.value = parseMarkdown(gplText.value);
      } else {
        gplError.value = true;
      }
    } catch (error) {
      console.error("加载许可证文本失败:", error);
      gplError.value = true;
    } finally {
      gplLoading.value = false;
    }
  };

  // 开始倒计时下载
  const startDownload = () => {
    countdown.value = 5;
    startCountdown();
  };

  // 开始倒计时
  const startCountdown = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }

    countdownTimer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        stopCountdown();
        triggerDownload();
      }
    }, 1000);
  };

  // 停止倒计时
  const stopCountdown = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  };

  // 触发下载
  const triggerDownload = () => {
    try {
      const a = document.createElement("a");
      a.href = pendingDownload.url;
      a.download = "";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.error("自动下载触发失败:", e);
    }
  };

  // 切换镜像下拉菜单
  const toggleMirrorDropdown = () => {
    showMirrorDropdown.value = !showMirrorDropdown.value;
  };

  // 关闭镜像下拉菜单
  const closeMirrorDropdown = () => {
    showMirrorDropdown.value = false;
  };

  // 获取镜像下载选项
  const mirrorDownloadUrls = () => {
    return getMirrorDownloadUrls(pendingDownload.url);
  };

  // 转换 URL 为镜像 URL
  const convertToMirror = (url: string, mirror: string | null): string => {
    return convertToMirrorUrl(url, mirror);
  };

  return {
    // 状态
    showDownloadModal,
    modalTab,
    licenseAccepted,
    pendingDownload,
    gplText,
    gplHtml,
    gplLoading,
    gplError,
    showMirrorDropdown,
    countdown,

    // 方法
    initiateDownload,
    initiateSimpleDownload,
    closeDownloadModal,
    acceptLicenseAndContinue,
    loadGplText,
    startDownload,
    stopCountdown,
    toggleMirrorDropdown,
    closeMirrorDropdown,
    mirrorDownloadUrls,
    convertToMirror
  };
}
