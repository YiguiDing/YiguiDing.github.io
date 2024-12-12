import { defineClientConfig } from "vuepress/client";
import Live2D from "./components/Live2D.vue";
// import Spacecraft from "./components/Spacecraft.vue";
import Desmos from "./components/Desmos.vue";
// import "vuepress-theme-hope/presets/bounce-icon.scss";
// import "vuepress-theme-hope/presets/left-blog-info.scss";
// import "@shikijs/twoslash/style-classic.css";
// import "@shikijs/twoslash/style-rich.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Desmos", Desmos);
  },
  setup() {},
  layouts: {},
  rootComponents: [
    Live2D,
    // Spacecraft
  ],
});
