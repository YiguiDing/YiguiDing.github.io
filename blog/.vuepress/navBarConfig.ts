import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
  { text: "主页", icon: "house-chimney", link: "/" },
  {
    text: "笔记",
    icon: "pen-to-square",
    children: [
      { text: "前端", icon: "code", link: "/前端/" },
      { text: "后端", icon: "server", link: "/后端/" },
      { text: "算法", icon: "diagram-project", link: "/算法/" },
      { text: "电子", icon: "bolt", link: "/电子/" },
      { text: "源码", icon: "code-fork", link: "/源码/" },
      { text: "理论", icon: "book-bookmark", link: "/理论/" },
      { text: "工具", icon: "screwdriver-wrench", link: "/工具/" },
    ],
  },
  { text: "随笔", icon: "note-sticky", link: "/随笔/" },
  // { text: "计划", icon: "list-check", link: "/计划/" },
  { text: "项目", icon: "box", link: "/项目/" },
  { text: "友链", icon: "user-group", link: "/网站/友链.md" },
  { text: "关于", icon: "address-card", link: "/网站/关于.md" },
]);
