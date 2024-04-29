import { defineClientConfig } from "vuepress/client";
import Live2D from "./components/Live2D.vue";
// import Spacecraft from "./components/Spacecraft.vue";

// import "vuepress-theme-hope/presets/bounce-icon.scss";
// import "vuepress-theme-hope/presets/left-blog-info.scss";

export default defineClientConfig({
  enhance({ app, router, siteData }) { },
  setup() { },
  layouts: {},
  rootComponents: [
    Live2D,
    // Spacecraft
  ],
});
