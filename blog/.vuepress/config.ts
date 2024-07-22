import { defineUserConfig } from "vuepress";
import { themeConfig } from "./themeConfig";
import { pluginsConfig } from "./pluginsConfig";
import { viteBundlerConfig } from "./viteBdrConfig";

export default defineUserConfig({
  // 基本信息
  lang: "zh-CN",
  title: "YiguiDing的Blog小站",
  description: "欢迎来到我的Blog小站",
  // 包含和排除
  pagePatterns: [
    "**/*.md",
    "**/*.vue",
    "!**/.vuepress/**",
    "!**/node_modules/**",
    "!**/projs/**",
    "!**/assets/**",
    "!**/.*/**", // 忽略所有隐藏文件和文件夹
    "!**/_*/**", // 忽略_开头的文件夹
    "!**/_*",// 忽略_开头的文件
    "!草稿/**",
  ],
  // 插件配置
  plugins: pluginsConfig,
  // 主题配置
  theme: themeConfig,
  // 如果使用vuepress-plugin-pwa2插件，推荐在 VuePress 配置文件中设置 shouldPrefetch: false
  shouldPrefetch: false,
  // viteBundler配置
  bundler: viteBundlerConfig,
});
