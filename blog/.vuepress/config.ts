import { defineUserConfig } from "vuepress";
import { themeConfig } from "./themeConfig";
import { pluginsConfig } from "./pluginsConfig";

export default defineUserConfig({
  // 基本信息
  lang: "zh-CN",
  title: "Yigui-Ding的Blog小站",
  description: "欢迎来到我的Blog小站",
  // 包含和排除
  pagePatterns: [
    "**/*.md",
    "**/*.vue",
    "!**/.vuepress/**",
    "!node_modules",
    "!草稿/**",
  ],
  // 插件配置
  plugins: pluginsConfig,
  // 主题配置
  theme: themeConfig,
});
