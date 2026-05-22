/**
 * 版本管理 Composable
 * 负责版本数据的获取、状态管理和更新日志加载
 */

import { ref, reactive, computed } from 'vue';
import {
  fetchDataWithMirrors,
  buildApiUrls,
  convertDownloadUrl,
  testSmartTeachAvailability,
  detectFastestMirror,
  getDownloadUrl,
  DOWNLOAD_TEMPLATES,
  type DownloadSource
} from '../utils/downloadUtils';
import { parseMarkdown, formatDate } from '../utils/markdownUtils';

// API 配置
const API_CONFIG = {
  stable: {
    repo: "InkCanvasForClass/community",
    description: "这是稳定的正式发布版本，适合日常使用。"
  },
  beta: {
    repo: "InkCanvasForClass/community",
    description: "这是测试版本，包含最新功能，但可能不稳定。"
  }
};

export interface Release {
  id: number;
  tag_name: string;
  prerelease: boolean;
  published_at: string;
  body: string;
  assets?: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

export interface VersionInfo {
  version: string;
  description: string;
  releaseNotes: string;
  downloadUrl: string;
}

export function useVersionManager() {
  // 状态变量
  const currentChannel = ref<'stable' | 'beta'>('stable');
  const isLoading = ref(false);
  const releasesHistory = ref<Release[]>([]);
  const selectedVersionTag = ref("");
  const expandedVersions = ref<Set<string>>(new Set());
  const changelogs = reactive<Record<string, string>>({});
  const loadingChangelogs = reactive<Record<string, boolean>>({});
  const fastestMirror = ref<string | null>(null);
  const smartTeachAvailable = ref(false);

  const versionInfo = reactive<VersionInfo>({
    version: "检测中...",
    description: "",
    releaseNotes: "",
    downloadUrl: ""
  });

  // 计算属性
  const config = computed(() => API_CONFIG[currentChannel.value]);

  // 初始化
  const initialize = async () => {
    isLoading.value = true;

    // 并行检测可用性
    const [smartAvailable, fastest] = await Promise.all([
      testSmartTeachAvailability(),
      detectFastestMirror(API_CONFIG.stable.repo)
    ]);

    smartTeachAvailable.value = smartAvailable;
    if (!smartAvailable) {
      fastestMirror.value = fastest;
    }

    isLoading.value = false;
  };

  // 获取所有发布版本
  const fetchAllReleases = async () => {
    isLoading.value = true;

    try {
      const urls = buildApiUrls(`${config.value.repo}/releases`, fastestMirror.value);
      const allReleases = await fetchDataWithMirrors(urls, "未能获取版本列表");

      if (allReleases && allReleases.length > 0) {
        releasesHistory.value = allReleases;
        selectedVersionTag.value = allReleases[0].tag_name;
        updateVersionDetails();
      } else {
        throw new Error("未找到任何发布版本。");
      }
    } catch (error) {
      console.error("获取版本列表失败:", error);
      useFallbackData();
    } finally {
      isLoading.value = false;
    }
  };

  // 获取指定版本
  const fetchSpecificVersion = async (versionTag: string) => {
    isLoading.value = true;

    try {
      const urls = buildApiUrls(`${config.value.repo}/releases/tags/${versionTag}`, fastestMirror.value);
      const release = await fetchDataWithMirrors(urls, `未能获取版本 ${versionTag}`);

      if (release) {
        releasesHistory.value = [release];
        selectedVersionTag.value = release.tag_name;
        currentChannel.value = release.prerelease ? "beta" : "stable";
        updateVersionDetails();
      } else {
        throw new Error(`未找到版本 ${versionTag}。`);
      }
    } catch (error) {
      console.error("获取指定版本失败:", error);
      versionInfo.version = versionTag;
      versionInfo.description = "这是您指定的版本。";
      versionInfo.releaseNotes = "";
      versionInfo.downloadUrl = DOWNLOAD_TEMPLATES.stable.replace(/{version}/g, versionTag);
    } finally {
      isLoading.value = false;
    }
  };

  // 更新版本详情
  const updateVersionDetails = () => {
    const selectedRelease = releasesHistory.value.find(
      (release) => release.tag_name === selectedVersionTag.value
    );

    if (!selectedRelease) return;

    versionInfo.version = selectedRelease.tag_name;
    versionInfo.description = config.value.description;
    versionInfo.releaseNotes = selectedRelease.body ? parseMarkdown(selectedRelease.body) : "";

    const asset = selectedRelease.assets?.find(
      (asset) => asset.name.includes("InkCanvasForClass.CE") && asset.name.endsWith(".zip")
    );

    if (asset) {
      versionInfo.downloadUrl = convertDownloadUrl(
        asset.browser_download_url,
        currentChannel.value === "beta",
        fastestMirror.value,
        smartTeachAvailable.value
      );
    } else {
      const rawUrl = DOWNLOAD_TEMPLATES[currentChannel.value].replace(
        /{version}/g,
        selectedRelease.tag_name
      );
      versionInfo.downloadUrl = convertDownloadUrl(
        rawUrl,
        currentChannel.value === "beta",
        fastestMirror.value,
        smartTeachAvailable.value
      );
    }
  };

  // 使用备用数据
  const useFallbackData = () => {
    console.log("GitHub API 请求失败，使用备用数据...");
    releasesHistory.value = [];

    const fallbackData = {
      stable: { version: "1.7.3.0", desc: "这是稳定的正式发布版本，适合日常使用。" },
      beta: { version: "1.7.3.0", desc: "这是测试版本，包含最新功能，但可能不稳定。" }
    };

    const data = fallbackData[currentChannel.value];
    versionInfo.version = data.version;
    versionInfo.description = data.desc;
    versionInfo.releaseNotes = "";
    versionInfo.downloadUrl = DOWNLOAD_TEMPLATES[currentChannel.value].replace(/{version}/g, data.version);
  };

  // 切换版本展开状态
  const toggleVersion = async (versionTag: string) => {
    if (expandedVersions.value.has(versionTag)) {
      expandedVersions.value.delete(versionTag);
    } else {
      expandedVersions.value.add(versionTag);
      if (!changelogs[versionTag] && !loadingChangelogs[versionTag]) {
        await fetchChangelog(versionTag);
      }
    }
    expandedVersions.value = new Set(expandedVersions.value);
  };

  // 获取更新日志
  const fetchChangelog = async (versionTag: string) => {
    loadingChangelogs[versionTag] = true;

    try {
      const urls = buildApiUrls(`${config.value.repo}/releases/tags/${versionTag}`, fastestMirror.value);
      const release = await fetchDataWithMirrors(urls, `未能获取版本 ${versionTag} 的更新说明`);

      if (release && release.body) {
        changelogs[versionTag] = parseMarkdown(release.body);
      } else {
        changelogs[versionTag] = "";
      }
    } catch (error) {
      console.error(`获取版本 ${versionTag} 的更新说明失败:`, error);
      changelogs[versionTag] = "";
    } finally {
      loadingChangelogs[versionTag] = false;
    }
  };

  // 切换频道
  const selectChannel = (channel: 'stable' | 'beta') => {
    if (currentChannel.value !== channel) {
      currentChannel.value = channel;
      releasesHistory.value = [];
      selectedVersionTag.value = "";
      expandedVersions.value = new Set();
      Object.keys(changelogs).forEach((key) => delete changelogs[key]);
      Object.keys(loadingChangelogs).forEach((key) => delete loadingChangelogs[key]);
      fetchAllReleases();
    }
  };

  // 展开指定版本并加载更新日志
  const expandVersion = async (versionTag: string) => {
    if (!expandedVersions.value.has(versionTag)) {
      expandedVersions.value.add(versionTag);
      expandedVersions.value = new Set(expandedVersions.value);

      if (!changelogs[versionTag] && !loadingChangelogs[versionTag]) {
        await fetchChangelog(versionTag);
      }
    }
  };

  // 获取版本发布日期
  const getVersionDate = (release: Release): string => {
    return formatDate(release.published_at);
  };

  // 获取版本下载 URL
  const getVersionDownloadUrl = (release: Release): string => {
    return getDownloadUrl(release);
  };

  return {
    // 状态
    currentChannel,
    isLoading,
    releasesHistory,
    selectedVersionTag,
    versionInfo,
    expandedVersions,
    changelogs,
    loadingChangelogs,
    fastestMirror,
    smartTeachAvailable,
    config,

    // 方法
    initialize,
    fetchAllReleases,
    fetchSpecificVersion,
    updateVersionDetails,
    toggleVersion,
    fetchChangelog,
    selectChannel,
    expandVersion,
    getVersionDate,
    getVersionDownloadUrl
  };
}
