import { onMounted, watch, nextTick } from "vue";
import type { Theme } from "vitepress";
import { useRoute, inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./style/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import mediumZoom from "medium-zoom";
import BilibiliVideo from "./components/BilibiliVideo.vue";
import Linkcard from "./components/Linkcard.vue";
import ArticleMetadata from "./components/ArticleMetadata.vue";
import HomeUnderline from "./components/HomeUnderline.vue";
import DownloadPage from "./components/DownloadPage.vue";
import MyLayout from "./components/MyLayout.vue";
import VersionBadge from "./components/VersionBadge.vue";
import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router }) {
    app.component("BilibiliVideo", BilibiliVideo);
    app.component("Linkcard", Linkcard);
    app.component("ArticleMetadata", ArticleMetadata);
    app.component("HomeUnderline", HomeUnderline);
    app.component("DownloadPage", DownloadPage);
    app.component("VersionBadge", VersionBadge);

    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChange = () => {
        NProgress.done(); // 停止进度条
      };
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    const initSidebarTooltip = () => {
      document.querySelectorAll(".VPSidebarItem a").forEach((link) => {
        const text = link.querySelector(".text")?.textContent;
        if (text && !link.getAttribute("title")) {
          link.setAttribute("title", text);
        }
      });
    };
    onMounted(() => {
      initZoom();
      initSidebarTooltip();
    });
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom();
        initSidebarTooltip();
      }),
    );
  },
} as Theme;
