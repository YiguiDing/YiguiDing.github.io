import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/前端": "structure",
  "/后端": "structure",
  "/工具": "structure",
  "/随笔": "structure",
  "/理论": "structure",
  "/电子": "structure",
  "/算法": "structure",
  "/网站": "structure",
  "/草稿": "structure",
  "/计划": "structure",
  "/项目": "structure",
  // 兜底规则
  "/": "structure",
});
