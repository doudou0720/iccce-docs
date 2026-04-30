import { onMounted, watch, nextTick } from "vue";
import type { Theme } from "vitepress";
import { useRoute, useData, inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { toRefs } from "vue";
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
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { NProgress } from "nprogress-v2/dist/index.js";
import "nprogress-v2/dist/index.css";
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
        NProgress.start();
      };
      router.onAfterRouteChange = () => {
        NProgress.done();
      };
    }
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = toRefs(useData());

    const isCommentEnabled = frontmatter.value.comment === true;

    giscusTalk(
      {
        repo: "doudou0720/iccce-docs",
        repoId: "R_kgDORFUsfg",
        category: "General",
        categoryId: "DIC_kwDORFUsfs4C8Dhd",
        mapping: "pathname",
        strict: "1",
        reactionsEnabled: "1",
        emitMetadata: "1",
        inputPosition: "top",
        lang: "zh-CN",
        loading: "lazy",
        homePageShowComment: false,
      },
      {
        frontmatter,
        route,
      },
      isCommentEnabled,
    );

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
      () =>
        nextTick(() => {
          initZoom();
          initSidebarTooltip();
        }),
    );
  },
} as Theme;
