// `PostCSS-Preset-Env`可将现代CSS转换为大多数浏览器可以理解的内容，
// 并根据目标浏览器或运行时环境确定所需的 polyfill
import postcssPresetEnv from "postcss-preset-env";
import { viteBundler } from "@vuepress/bundler-vite";

export const viteBundlerConfig = viteBundler({
  viteOptions: {
    build: {
      target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    },
    css: {
      postcss: {
        plugins: [
          // 用于实现对 `scroll-behavior: smooth` 的支持
          // 使得在ios 14(Safari 14)上能够正常显示
          postcssPresetEnv(),
        ],
      },
    },
  },
  vuePluginOptions: {},
});
