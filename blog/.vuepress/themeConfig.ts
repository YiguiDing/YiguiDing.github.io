import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from "./navBarConfig";
import { sidebarConfig } from "./sidebarConfig";
import { encryptConfig } from "./encryptConfig";
import { transformerTwoslash } from "@shikijs/twoslash";

export const themeConfig = hopeTheme({
  hostname: "https://dingdingdang.online",
  // 图标
  favicon: "/images/favicon_icon.jpg",
  // 默认作者
  author: {
    name: "丁毅桂",
    email: "2449695354@qq.com",
  },
  // 侧边栏
  sidebar: sidebarConfig,
  // 优先按order排序，然后按时间降序排序
  sidebarSorter: ["order", "date-desc", "filename"],
  // 导航条
  navbar: navbarConfig,
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },
  lastUpdated: false,
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
    name: "YiguiDing",
    avatar: "/images/author_icon.jpg",
    // roundAvatar: true,
    intro: "/网站/关于.md",
    description: '"枉少年","生当作人杰";<br>"莫等闲","自古英雄多磨难";',
    // 时间线文字
    timeline: "莫等闲，白了少年头，空悲切！",
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
      Rss: "/rss.xml",
    },
    articlePerPage: 10,
  },
  // 其他
  themeColor: true,
  fullscreen: true,
  markdown: {
    // 标准 GitHub Favor Markdown 支持
    gfm: true,
    // 文字高亮
    mark: true,
    // 选项卡
    tabs: true,
    // 代码选项卡
    codeTabs: true,
    // 任务列表
    tasklist: true,
    // 图片懒加载(设置为true时会和图片预览插件冲突)
    imgLazyload: false,
    // 属性 支持
    attrs: true,
    // 允许在markdown中导入展示其他文件代码，格式： <!-- @include: filename{start-end} -->
    include: true,
    // 组件支持
    component: true,
    // 图表
    // chart: true,
    echarts: true,
    // 流程图
    // flowchart: true, // 流程图
    mermaid: true, // 流程图，类图，....
    // 代码演示
    demo: true,
    playground: {
      presets: ["vue", "ts"],
    },
    vuePlayground: true,
    // 数学表达式支持
    // 有bug!!!
    math: {
      copy: true,
      mhchem: true,
    },
    // mathjax: true,
    highlighter: {
      // 代码块
      // type: "prismjs",
      // themes: {
      //   light: "coldark-cold",
      //   dark: "coldark-dark",
      // },
      type: "shiki",
      themes: {
        light: "catppuccin-latte",
        dark: "slack-dark",
      },
      langs: [
        "cpp",
        "c",
        "js",
        "ts",
        "html",
        "css",
        "less",
        "vue",
        "jsx",
        "markdown",
        "xml",
        "properties",
        "yaml",
        "csharp",
        "java",
        "json",
        "bash",
        "makefile",
        "go",
      ],
      // https://shiki.style/packages/twoslash
      transformers: [
        transformerTwoslash({
          // 显式触发
          // https://shiki.style/packages/twoslash#explicit-trigger
          explicitTrigger: true,
          onTwoslashError(error, code, lang, options) {
            console.log(arguments);
          },
        }),
      ],
    }
  },
  plugins: {
    icon: {
      // https://fontawesome.com/
      assets: 'fontawesome-with-brands'
    },
    slimsearch: {
      indexContent: true,
    },
    // 自动目录页生成
    catalog: {
      level: 1,
    },
    // 启用博客主题
    blog: {
      // 摘要最大长度
      excerptLength: 0,
      hotReload: true,
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
    pwa: false && {
      // 提示用户他可能在阅读已过时的内容
      update: "hint",
      // cachePic: true,
      // cacheHTML: true,
      // maxSize: 10240,
      // maxPicSize: 10240,
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
    components: {
      components: ['BiliBili']
    },
    feed: {
      rss: true,
      rssOutputFilename: "rss.xml",
    },
    seo: {
      customHead: function (head, page, app) {
        head.push([
          "meta",
          {
            name: "baidu-site-verification",
            content: "codeva-PwE9Ts6nMl",
          },
        ]);
      },
    },
    sitemap: true,
  },
  hotReload: true,
});
