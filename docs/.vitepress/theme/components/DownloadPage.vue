<template>
  <div class="download-container">
    <div class="loading" v-if="isLoading">
      <div class="spinner"></div>
      <p>正在检测版本信息...</p>
    </div>

    <div v-else-if="releasesHistory.length > 0">
      <div class="version-timeline">
        <div
          v-for="(release, index) in releasesHistory"
          :key="release.id"
          class="timeline-item"
          :class="{ expanded: expandedVersions.has(release.tag_name), last: index === releasesHistory.length - 1 }"
        >
          <div class="timeline-marker">
            <span class="marker-dot"></span>
            <span class="marker-line"></span>
          </div>
          <div class="timeline-content">
            <div class="version-card-header" @click="toggleVersion(release.tag_name)">
              <div class="version-info-left">
                <span class="version-tag">{{ release.tag_name }}</span>
                <span v-if="release.prerelease" class="beta-badge">测试版</span>
                <span class="release-date">{{ formatDate(release.published_at) }}</span>
              </div>
              <div class="version-info-right">
                <button
                  class="download-btn"
                  @click.stop="downloadVersion(release)"
                  :disabled="!getDownloadUrl(release)"
                >
                  <i class="fa-solid fa-download"></i> 下载
                </button>
                <button class="expand-btn">
                  <i
                    :class="expandedVersions.has(release.tag_name) ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                  ></i>
                </button>
              </div>
            </div>

            <transition name="collapse">
              <div v-show="expandedVersions.has(release.tag_name)" class="version-card-content">
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
    </div>

    <div v-else>
      <div class="version-info">
        <h2>
          当前版本: <span>{{ versionInfo.version }}</span>
        </h2>
        <p>{{ versionInfo.description }}</p>

        <div class="download-button">
          <button @click="downloadFile" :disabled="!versionInfo.downloadUrl">下载</button>
        </div>

        <div class="release-notes" v-if="versionInfo.releaseNotes">
          <details open>
            <summary>更新说明</summary>
            <div v-html="versionInfo.releaseNotes"></div>
          </details>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="showDownloadModal" class="modal-overlay" @click.self="closeDownloadModal">
        <div class="modal-content download-modal">
          <button class="modal-close" @click="closeDownloadModal" aria-label="关闭弹窗">&times;</button>
          
          <div class="modal-tabs">
            <div class="tab-btn" :class="{ active: modalTab === 'license' }">
              许可协议
            </div>
            <div class="tab-btn" :class="{ active: modalTab === 'download' }">
              下载渠道
            </div>
          </div>

          <div class="modal-tab-content">
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
                    <input type="checkbox" v-model="licenseAccepted" />
                    <span>我已阅读并同意 GNU GPL v3.0 许可协议</span>
                  </label>
                </div>
                <button 
                  class="btn-primary" 
                  :disabled="!licenseAccepted"
                  @click="modalTab = 'download'"
                >
                  接受并继续
                </button>
              </div>
            </div>

            <div v-if="modalTab === 'download'" class="download-content">
              <h3>下载渠道</h3>
              <p class="download-version">版本: <strong>{{ pendingDownloadVersion }}</strong></p>
              
              <div class="download-channels">
                <a 
                  v-if="pendingDownloadUrl"
                  :href="pendingDownloadUrl" 
                  class="download-channel primary"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                  <span>GitHub 直链下载</span>
                </a>
                
                <a 
                  v-if="smartTeachAvailable && pendingDownloadUrl"
                  :href="pendingSmartTeachUrl" 
                  class="download-channel"
                  target="_blank"
                >
                  <i class="fa-solid fa-cloud"></i>
                  <span>智教云盘 (推荐)</span>
                </a>
                
                <a 
                  v-if="fastestMirror && pendingDownloadUrl"
                  :href="convertToMirrorUrl(pendingDownloadUrl)" 
                  class="download-channel"
                  target="_blank"
                >
                  <i class="fa-solid fa-mirror"></i>
                  <span>镜像加速下载</span>
                </a>
              </div>
              
              <div class="modal-actions">
                <button class="btn-secondary" @click="closeDownloadModal">关闭</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed, watch } from "vue";
import { marked } from "marked";

const props = defineProps({
  version: {
    type: String,
    default: "",
  },
});

const parseMarkdown = (content) => {
  if (!content) return "";
  let processed = content.replace(
    /^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n([\s\S]*?)(?=\n## |\n--- |\n\n[^>])/gm,
    (match, type, text) => {
      const typeClass = type.toLowerCase();
      const textContent = text.replace(/^> /gm, "").replace(/\n$/, "").trim();
      const innerHtml = marked.parseInline(textContent);
      return `<div class="markdown-alert markdown-alert-${typeClass}">\n<p class="markdown-alert-title">${type}</p>\n${innerHtml}\n</div>`;
    }
  );
  return marked.parse(processed);
};

const getUrlParam = (param) => {
  if (typeof window === "undefined") return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const actualVersion = computed(() => props.version || String(getUrlParam("version") || "") || "");

const currentChannel = ref("stable");
const isLoading = ref(true);
const releasesHistory = ref([]);
const selectedVersionTag = ref("");
const showDownloadModal = ref(false);
const modalTab = ref("license");
const licenseAccepted = ref(false);
const gplText = ref("");
const gplHtml = ref("");
const gplLoading = ref(false);
const gplError = ref(false);
const pendingDownloadVersion = ref("");
const pendingDownloadUrl = ref("");
const pendingSmartTeachUrl = ref("");
const pendingIsBeta = ref(false);
const expandedVersions = ref(new Set());
const changelogs = reactive({});
const loadingChangelogs = reactive({});

const versionInfo = reactive({
  version: "检测中...",
  description: "",
  releaseNotes: "",
  downloadUrl: "",
});

const apiConfig = {
  stable: {
    repo: "InkCanvasForClass/community",
    description: "这是稳定的正式发布版本，适合日常使用。",
  },
  beta: {
    repo: "InkCanvasForClass/community",
    description: "这是测试版本，包含最新功能，但可能不稳定。",
  },
};

const downloadTemplates = {
  stable:
    "https://github.com/InkCanvasForClass/community/releases/download/{version}/InkCanvasForClass.CE.{version}.zip",
  beta: "https://github.com/InkCanvasForClass/community/releases/download/{version}/InkCanvasForClass.CE.{version}.zip",
};

const SMART_TEACH_DOMAIN = "https://get.smart-teach.cn";
const COMMUNITY_PATH = "/d/Ningbo-S3/shared/jiangling/community";
const COMMUNITY_BETA_PATH = "/d/Ningbo-S3/shared/jiangling/community-beta";
const GITHUB_API_BASE = "https://api.github.com/repos/";
const MIRROR_URLS = [
  "https://gh.llkk.cc",
  "https://ghfile.geekertao.top",
  "https://gh.dpik.top",
  "https://github.dpik.top",
  "https://github.acmsz.top",
  "https://git.yylx.win",
];

let fastestMirror = null;
let smartTeachAvailable = false;

const selectChannel = (channel) => {
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

const fetchAllReleases = async () => {
  isLoading.value = true;
  const config = apiConfig.stable;

  try {
    const urls = buildApiUrls(`${config.repo}/releases`);
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
    useFallbackData("stable");
  } finally {
    isLoading.value = false;
  }
};

const fetchSpecificVersion = async (versionTag) => {
  isLoading.value = true;
  const config = apiConfig.stable;

  try {
    const urls = buildApiUrls(`${config.repo}/releases/tags/${versionTag}`);
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
    versionInfo.downloadUrl = downloadTemplates.stable.replace(/{version}/g, versionTag);
  } finally {
    isLoading.value = false;
  }
};

const updateVersionDetails = () => {
  const selectedRelease = releasesHistory.value.find(
    (release) => release.tag_name === selectedVersionTag.value,
  );

  if (!selectedRelease) return;

  const config = apiConfig[currentChannel.value];
  versionInfo.version = selectedRelease.tag_name;
  versionInfo.description = config.description;
  versionInfo.releaseNotes = selectedRelease.body ? parseMarkdown(selectedRelease.body) : "";

  const asset = selectedRelease.assets.find(
    (asset) => asset.name.includes("InkCanvasForClass.CE") && asset.name.endsWith(".zip"),
  );

  if (asset) {
    versionInfo.downloadUrl = convertDownloadUrl(
      asset.browser_download_url,
      currentChannel.value === "beta",
    );
  } else {
    const rawUrl = downloadTemplates[currentChannel.value].replace(
      /{version}/g,
      selectedRelease.tag_name,
    );
    versionInfo.downloadUrl = convertDownloadUrl(rawUrl, currentChannel.value === "beta");
  }
};

const useFallbackData = (channel) => {
  console.log("GitHub API 请求失败，使用备用数据...");
  releasesHistory.value = [];
  const fallbackData = {
    stable: { version: "1.7.3.0", desc: "这是稳定的正式发布版本，适合日常使用。" },
    beta: { version: "1.7.3.0", desc: "这是测试版本，包含最新功能，但可能不稳定。" },
  };

  const data = fallbackData[channel];
  versionInfo.version = data.version;
  versionInfo.description = data.desc;
  versionInfo.releaseNotes = "";
  versionInfo.downloadUrl = downloadTemplates[channel].replace(/{version}/g, data.version);
};

const getDownloadUrl = (release) => {
  const isBeta = release.prerelease;
  const asset = release.assets.find(
    (asset) => asset.name.includes("InkCanvasForClass.CE") && asset.name.endsWith(".zip"),
  );
  if (asset) {
    return asset.browser_download_url;
  }
  const rawUrl = downloadTemplates.stable.replace(
    /{version}/g,
    release.tag_name,
  );
  return rawUrl;
};

const getSmartTeachUrl = (release) => {
  const isBeta = release.prerelease;
  const asset = release.assets.find(
    (asset) => asset.name.includes("InkCanvasForClass.CE") && asset.name.endsWith(".zip"),
  );
  let url = "";
  if (asset) {
    url = asset.browser_download_url;
  } else {
    url = downloadTemplates.stable.replace(
      /{version}/g,
      release.tag_name,
    );
  }
  return buildSmartTeachUrl(url, isBeta);
};

const downloadVersion = (release) => {
  const url = getDownloadUrl(release);
  if (url) {
    pendingDownloadVersion.value = release.tag_name;
    pendingDownloadUrl.value = url;
    pendingSmartTeachUrl.value = getSmartTeachUrl(release);
    pendingIsBeta.value = release.prerelease;
    licenseAccepted.value = false;
    modalTab.value = "license";
    showDownloadModal.value = true;
    loadGplText();
  }
};

const closeDownloadModal = () => {
  showDownloadModal.value = false;
  countdown.value = 0;
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
};

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

const convertToMirrorUrl = (url) => {
  if (!url || !fastestMirror) return url;
  if (url.startsWith("https://github.com/")) {
    return url.replace("https://github.com/", `${fastestMirror}/https://github.com/`);
  }
  return url;
};

const startDownload = () => {
  countdown.value = 5;
  startCountdown();
};

const toggleVersion = async (versionTag) => {
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

const fetchChangelog = async (versionTag) => {
  loadingChangelogs[versionTag] = true;
  const config = apiConfig[currentChannel.value];

  try {
    const urls = buildApiUrls(`${config.repo}/releases/tags/${versionTag}`);
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

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const countdown = ref(5);
let countdownTimer = null;

const downloadFile = () => {
  if (versionInfo.downloadUrl) {
    pendingDownloadVersion.value = versionInfo.version;
    pendingDownloadUrl.value = versionInfo.downloadUrl;
    pendingSmartTeachUrl.value = buildSmartTeachUrl(versionInfo.downloadUrl, versionInfo.version.includes("beta") || versionInfo.version.includes("pre"));
    pendingIsBeta.value = versionInfo.version.includes("beta") || versionInfo.version.includes("pre");
    licenseAccepted.value = false;
    modalTab.value = "license";
    showDownloadModal.value = true;
    loadGplText();
  }
};

const startCountdown = () => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  countdownTimer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      try {
        const a = document.createElement("a");
        a.href = pendingDownloadUrl.value;
        a.download = "";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (e) {
        console.error("自动下载触发失败:", e);
      }
    }
  }, 1000);
};

const buildApiUrls = (endpoint) => {
  const unique = new Set();
  if (fastestMirror) unique.add(`${fastestMirror}/${GITHUB_API_BASE}${endpoint}`);
  unique.add(`${GITHUB_API_BASE}${endpoint}`);
  MIRROR_URLS.forEach((m) => unique.add(`${m}/${GITHUB_API_BASE}${endpoint}`));
  return Array.from(unique);
};

const testSmartTeachAvailability = async () => {
  try {
    const testUrl = `${SMART_TEACH_DOMAIN}${COMMUNITY_PATH}/test.txt`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(testUrl, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeoutId);
    return res && (res.status === 200 || res.status < 400);
  } catch (e) {
    return false;
  }
};

const buildSmartTeachUrl = (url, isBeta = false) => {
  const fileName = url.split("/").pop();
  const basePath = isBeta ? COMMUNITY_BETA_PATH : COMMUNITY_PATH;
  return `${SMART_TEACH_DOMAIN}${basePath}/${fileName}`;
};

const convertDownloadUrl = (url, isBeta = false) => {
  if (!url) return url;
  if (url.endsWith(".exe")) {
    if (fastestMirror && url.startsWith("https://github.com/")) {
      return url.replace("https://github.com/", `${fastestMirror}/https://github.com/`);
    }
    return url;
  }
  if (smartTeachAvailable) return buildSmartTeachUrl(url, isBeta);
  if (fastestMirror && url.startsWith("https://github.com/")) {
    return url.replace("https://github.com/", `${fastestMirror}/https://github.com/`);
  }
  return url;
};

const fetchDataWithMirrors = async (urls, errorMessage = "获取数据失败") => {
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) return await res.json();
      console.log(`镜像尝试失败: ${url}, status: ${res.status}`);
    } catch (e) {
      console.log(`镜像尝试失败: ${url}, error: ${e.message}`);
    }
  }
  console.error(errorMessage);
  return null;
};

const detectFastestMirror = async () => {
  const endpoint = `${apiConfig.stable.repo}/releases/latest`;
  const testUrls = [
    `${GITHUB_API_BASE}${endpoint}`,
    ...MIRROR_URLS.map((m) => `${m}/${GITHUB_API_BASE}${endpoint}`),
  ];
  const results = await Promise.all(
    testUrls.map(
      (u) =>
        new Promise((resolve) => {
          const start = performance.now();
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);
          fetch(u, { method: "HEAD", cache: "no-store", signal: controller.signal })
            .then(() => resolve({ url: u, time: performance.now() - start }))
            .catch(() => resolve({ url: u, time: Infinity }))
            .finally(() => clearTimeout(timeoutId));
        }),
    ),
  );
  const ok = results.filter((r) => r.time !== Infinity).sort((a, b) => a.time - b.time);
  return ok.length > 0 ? ok[0].url : null;
};

onMounted(async () => {
  smartTeachAvailable = await testSmartTeachAvailability();
  if (!smartTeachAvailable) {
    fastestMirror = await detectFastestMirror();
  }

  if (actualVersion.value) {
    await fetchSpecificVersion(actualVersion.value);
  } else {
    fetchAllReleases();
  }
});

watch(releasesHistory, async (newReleases) => {
  if (actualVersion.value && newReleases.length > 0) {
    const targetRelease = newReleases.find(r => r.tag_name === actualVersion.value);
    if (targetRelease) {
      expandedVersions.value.add(targetRelease.tag_name);
      expandedVersions.value = new Set(expandedVersions.value);
      if (!changelogs[targetRelease.tag_name] && !loadingChangelogs[targetRelease.tag_name]) {
        await fetchChangelog(targetRelease.tag_name);
      }
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

.version-selector {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}

.version-selector button {
  padding: 10px 20px;
  border: 1px solid var(--vp-c-border, var(--border-color-light));
  background: var(--vp-c-bg-soft, var(--bg-soft-light));
  color: var(--vp-c-text, var(--text-color-light));
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s;
}

.version-selector button.active {
  background: var(--vp-c-brand, #0078d4);
  color: var(--vp-c-white, white);
  border-color: var(--vp-c-brand, #0078d4);
}

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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.9);
}

html.dark .modal-content {
  background: var(--bg-soft-dark, #222);
  color: var(--text-color-dark, white);
}

.modal-content h2 {
  margin-top: 0;
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

html.dark .version-tag,
html.dark .version-card-header,
html.dark .changelog-content,
html.dark .version-info {
  color: var(--vp-c-text-1-dark, #fff);
}

html.dark .version-card {
  background: var(--bg-soft-dark, #222);
  border-color: var(--border-color-dark, #444);
}

html.dark .version-card-header:hover {
  background: var(--vp-c-bg-dark, #333);
}

html.dark .version-selector button,
html.dark .version-card,
html.dark .release-notes {
  background: var(--bg-soft-dark, #222);
  border-color: var(--border-color-dark, #444);
  color: var(--text-color-dark, #fff);
}

html.dark .spinner {
  border-color: rgba(255, 255, 255, 0.1);
  border-top-color: var(--vp-c-brand, #0078d4);
}

html.dark .loading,
html.dark .release-date,
html.dark .no-changelog {
  color: var(--text-color-dark, #aaa);
}

html.dark h2,
html.dark p {
  color: var(--text-color-dark, #fff);
}

html.dark .expand-btn {
  background: transparent;
  border-color: var(--border-color-dark, #444);
  color: var(--text-color-dark, #aaa);
}

html.dark .expand-btn:hover {
  background: var(--vp-c-bg-dark, #333);
}

html.dark .marker-dot {
  background: var(--vp-c-bg-dark, #222);
}

html.dark .marker-line {
  background: var(--vp-c-brand, #0078d4);
}

.download-modal {
  max-width: auto;
  width: auto;
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

.modal-tab-content {
  min-height: 300px;
}

.license-content h3,
.download-content h3 {
  margin: 0 0 15px 0;
  color: var(--vp-c-brand, #0078d4);
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

.countdown-tip {
  text-align: center;
  color: var(--vp-c-text-2, #666);
  margin-bottom: 20px;
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

html.dark .license-scroll,
html.dark .license-accept,
html.dark .download-channel {
  background: var(--vp-c-bg-dark, #333);
  border-color: var(--vp-c-border-dark, #444);
}

html.dark .license-scroll,
html.dark .license-scroll h4,
html.dark .license-scroll a,
html.dark .download-channel {
  color: var(--vp-c-text-1-dark, #fff);
}

html.dark .tab-btn {
  color: var(--vp-c-text-2-dark, #aaa);
}

html.dark .tab-btn:hover,
html.dark .tab-btn.active {
  color: var(--vp-c-brand, #0078d4);
}

html.dark .btn-secondary {
  color: var(--vp-c-text-1-dark, #fff);
  border-color: var(--vp-c-border-dark, #444);
}

html.dark .btn-secondary:hover {
  background: var(--vp-c-bg-dark, #333);
}
</style>
