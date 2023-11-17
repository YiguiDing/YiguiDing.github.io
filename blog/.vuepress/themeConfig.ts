import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from "./navBarConfig";
import { sidebarConfig } from "./sidebarConfig";
import { encryptConfig } from "./encryptConfig";

export const themeConfig = hopeTheme({
  // 图标
  favicon: "/images/favicon_icon.jpg",
  // 默认作者
  author: {
    name: "丁毅桂",
    email: "2449695354@qq.com",
  },
  // https://fontawesome.com/
  iconAssets: "fontawesome-with-brands",
  // 侧边栏
  sidebar: sidebarConfig,
  // 导航条
  navbar: navbarConfig,
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },
  navbarAutoHide: "none",
  hideSiteNameOnMobile: true,
  // 加密配置
  encrypt: encryptConfig,
  // 版权信息
  displayFooter: true,
  copyright: "MIT Licensed | Copyright © 2019-present Yigui-Ding",
  // 博客主题配置
  blog: {
    // 用户信息，头像，格言
    name: "Yigui-Ding",
    avatar: "/images/author_icon.jpg",
    intro: "/网站/关于",
    timeline: "莫等闲，白了少年头，空悲切！",
    description: '"枉少年","生当作人杰";<br>"莫等闲","自古英雄多磨难";',
    // 社交
    medias: {
      GitHub: "https://github.com/YiguiDing",
      Gitee: "https://gitee.com/YiguiDing",
      Email: "mailto:2449695354@qq.com",
      Gmail: "mailto:opalrichards6833@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=2449695354&site=qq&menu=yes",
      BiliBili: "https://space.bilibili.com/73686452",
      Qzone: "https://2449695354.qzone.qq.com/",
      Zhihu: "https://www.zhihu.com/people/ding-yi-gui-90",
      Telegram: "https://t.me/Yigui_Ding",
      Steam: "https://steamcommunity.com/profiles/76561198860211659/",
      Wechat: "https://u.wechat.com/MH91sJy7fFJmV5WVsHOa7ho",
    },
    articlePerPage: 20,
  },
  // 其他
  themeColor: true,
  fullscreen: true,

  plugins: {
    // 自动目录页生成
    autoCatalog: true,
    // 启用博客主题
    blog: {
      // 摘要最大长度
      excerptLength: 20,
      hotReload: true,
    },
    // 代码块
    prismjs: {
      light: "atom-dark",
      dark: "coldark-dark",
    },
    // 代码复制
    copyCode: {
      showInMobile: true,
    },
    // 复制文字带有的版权信息
    copyright: {
      global: true,
      author: "丁毅桂",
      license: "MIT",
      triggerLength: 20,
    },
    // 评论系统
    comment: {
      provider: "Giscus",
      repo: "YiguiDing/blog-comment-repo",
      repoId: "R_kgDOKtsDVQ",
      category: "Announcements",
      categoryId: "DIC_kwDOKtsDVc4Ca96V",
    },
    pwa: {
      manifest: {
        name: "Yigui-Ding的Blog小站",
        short_name: "Yigui-Ding的Blog小站",
        description: "Yigui-Ding的Blog小站",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/images/favicon_icon.jpg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
    // markdown增强
    mdEnhance: {
      // 标准 GitHub Favor Markdown 支持
      gfm: true,
      // 文字高亮
      mark: true,
      // 任务列表
      tasklist: true,
      // 图片懒加载(设置为true时会和图片预览插件冲突)
      imgLazyload: false,
      // 允许在markdown中导入展示其他文件代码，格式： <!-- @include: filename{start-end} -->
      include: true,
      // 组件支持
      component: true,
      // 图表
      // chart: true,
      // echarts: true,
      // 流程图
      // flowchart: true, // 流程图
      // mermaid:true, // 流程图，类图，....
      // 代码演示
      playground: {
        presets: ["vue", "ts"],
      },
      vuePlayground: true,
      // demo: true,
      // 数学表达式支持
      katex: {
        copy: true,
        mhchem: true,
      },
      // mathjax: true,
    },
    // feed: {
    //   rss: true,
    //   rssOutputFilename: "rss.xml",
    // },
  },
  hotReload: true,
});
