// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import "uno.css";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
// @ts-expect-error
import ReloadPrompt from "../components/ReloadPrompt.vue";
// @ts-expect-error
import Button from "../components/Button.vue"

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      "layout-bottom": () => h(ReloadPrompt),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);
    app.component('Button', Button)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
};
