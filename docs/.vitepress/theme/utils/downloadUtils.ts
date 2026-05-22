/**
 * 下载相关工具函数
 * 包含镜像处理、URL 构建、API 请求等功能
 */

// GitHub API 配置
export const GITHUB_API_BASE = "https://api.github.com/repos/";

// 智教云盘配置
export const SMART_TEACH_DOMAIN = "https://get.smart-teach.cn";
export const COMMUNITY_PATH = "/d/Ningbo-S3/shared/jiangling/community";
export const COMMUNITY_BETA_PATH = "/d/Ningbo-S3/shared/jiangling/community-beta";

// 镜像源列表
export const MIRROR_URLS = [
  "https://gh-proxy.com",
  "https://cdn.gh-proxy.com",
  "https://hk.gh-proxy.com",
  "https://ghfast.top",
  "https://gh.llkk.cc",
  "https://ghfile.geekertao.top",
  "https://gh.dpik.top",
  "https://github.dpik.top",
  "https://github.acmsz.top",
  "https://git.yylx.win"
];

// 下载模板
export const DOWNLOAD_TEMPLATES = {
  stable: "https://github.com/InkCanvasForClass/community/releases/download/{version}/InkCanvasForClass.CE.{version}.zip",
  beta: "https://github.com/InkCanvasForClass/community/releases/download/{version}/InkCanvasForClass.CE.{version}.zip"
};

const GITHUB_URL_PREFIX = "https://github.com/";

/**
 * 构建 GitHub API 请求 URL 列表
 * @param endpoint API 端点
 * @param fastestMirror 最快的镜像源
 */
export function buildApiUrls(endpoint: string, fastestMirror: string | null): string[] {
  const unique = new Set<string>();

  if (fastestMirror) {
    unique.add(`${fastestMirror}/${GITHUB_API_BASE}${endpoint}`);
  }

  unique.add(`${GITHUB_API_BASE}${endpoint}`);

  MIRROR_URLS.forEach((m) => {
    unique.add(`${m}/${GITHUB_API_BASE}${endpoint}`);
  });

  return Array.from(unique);
}

/**
 * 将 URL 转换为镜像 URL
 * @param url 原始 GitHub URL
 * @param mirror 镜像源
 */
export function convertToMirrorUrl(url: string, mirror: string | null): string {
  if (!url || !mirror) return url;

  if (url.startsWith(GITHUB_URL_PREFIX)) {
    return url.replace(GITHUB_URL_PREFIX, `${mirror}/${GITHUB_URL_PREFIX}`);
  }

  return url;
}

/**
 * 构建智教云盘下载 URL
 * @param url 原始下载 URL
 * @param isBeta 是否为测试版
 */
export function buildSmartTeachUrl(url: string, isBeta: boolean = false): string {
  const fileName = url.split("/").pop() || "";
  const basePath = isBeta ? COMMUNITY_BETA_PATH : COMMUNITY_PATH;
  return `${SMART_TEACH_DOMAIN}${basePath}/${fileName}`;
}

/**
 * 转换下载 URL
 * 根据条件选择最优下载渠道
 * @param url 原始下载 URL
 * @param isBeta 是否为测试版
 * @param mirror 最快的镜像源
 * @param smartTeachAvailable 智教云盘是否可用
 */
export function convertDownloadUrl(
  url: string,
  isBeta: boolean = false,
  mirror: string | null = null,
  smartTeachAvailable: boolean = false
): string {
  if (!url) return url;

  // EXE 文件优先使用镜像
  if (url.endsWith(".exe")) {
    return convertToMirrorUrl(url, mirror);
  }

  // 其他文件优先使用智教云盘
  if (smartTeachAvailable) {
    return buildSmartTeachUrl(url, isBeta);
  }

  // 最后使用镜像
  return convertToMirrorUrl(url, mirror);
}

/**
 * 从多个镜像获取数据
 * @param urls URL 列表
 * @param errorMessage 错误信息
 */
export async function fetchDataWithMirrors(
  urls: string[],
  errorMessage: string = "获取数据失败"
): Promise<any | null> {
  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        return await res.json();
      }
      console.log(`镜像尝试失败: ${url}, status: ${res.status}`);
    } catch (e: any) {
      console.log(`镜像尝试失败: ${url}, error: ${e.message}`);
    }
  }
  console.error(errorMessage);
  return null;
}

/**
 * 检测最快的镜像源
 * @param repo 仓库名称
 */
export async function detectFastestMirror(repo: string): Promise<string | null> {
  const endpoint = `${repo}/releases/latest`;
  const testUrls = [
    `${GITHUB_API_BASE}${endpoint}`,
    ...MIRROR_URLS.map((m) => `${m}/${GITHUB_API_BASE}${endpoint}`)
  ];

  const results = await Promise.all(
    testUrls.map(
      (u) =>
        new Promise<{ url: string; time: number }>((resolve) => {
          const start = performance.now();
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);

          fetch(u, { method: "HEAD", cache: "no-store", signal: controller.signal })
            .then(() => resolve({ url: u, time: performance.now() - start }))
            .catch(() => resolve({ url: u, time: Infinity }))
            .finally(() => clearTimeout(timeoutId));
        })
    )
  );

  const ok = results.filter((r) => r.time !== Infinity).sort((a, b) => a.time - b.time);
  return ok.length > 0 ? ok[0].url : null;
}

/**
 * 测试智教云盘可用性
 */
export async function testSmartTeachAvailability(): Promise<boolean> {
  try {
    const testUrl = `${SMART_TEACH_DOMAIN}${COMMUNITY_PATH}/test.txt`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(testUrl, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store"
    });

    clearTimeout(timeoutId);
    return res && (res.status === 200 || res.status < 400);
  } catch (e) {
    return false;
  }
}

/**
 * 获取下载 URL
 * @param release 发布信息
 */
export function getDownloadUrl(release: any): string {
  const asset = release.assets?.find(
    (asset: any) => asset.name.includes("InkCanvasForClass.CE") && asset.name.endsWith(".zip")
  );

  if (asset) {
    return asset.browser_download_url;
  }

  return DOWNLOAD_TEMPLATES.stable.replace(
    /{version}/g,
    release.tag_name
  );
}

/**
 * 获取智教云盘下载 URL
 * @param release 发布信息
 */
export function getSmartTeachUrl(release: any): string {
  const isBeta = release.prerelease;
  const url = getDownloadUrl(release);
  return buildSmartTeachUrl(url, isBeta);
}

/**
 * 构建镜像下载选项
 * @param baseUrl 基础下载 URL
 */
export function getMirrorDownloadUrls(baseUrl: string): Array<{ name: string; url: string | null }> {
  if (!baseUrl) return [];

  return MIRROR_URLS.map((mirror) => {
    const url = baseUrl.startsWith(GITHUB_URL_PREFIX)
      ? baseUrl.replace(GITHUB_URL_PREFIX, `${mirror}/${GITHUB_URL_PREFIX}`)
      : null;

    return {
      name: mirror.replace(/^https?:\/\//, ""),
      url: url
    };
  }).filter((m) => m.url);
}

/**
 * 获取 URL 参数
 * @param param 参数名
 */
export function getUrlParam(param: string): string | null {
  if (typeof window === "undefined") return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
