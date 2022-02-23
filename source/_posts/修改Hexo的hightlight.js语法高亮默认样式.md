layout: post
title: "修改Hexo的hightlight.js语法高亮默认样式"
date: 2022-02-24 01:06:00 +0800
cover: /images/article/hightlightjs2.png
tags: [笔记,Hexo,hightlight.js]
categories: 前端
---

### hightlight.js特性说明
1. hightlight.js一般的使用流程
```html
# 导入css主题（导入的css决定配色方案）
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.4.0/styles/a11y-dark.min.css">
# 导入js文件
<script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
# 调用函数
<script>hljs.highlightAll();</script>
# 指定为html，也可不指定
<pre>
    <code class="language-html">
        需要高亮的代码
    </code>
</pre>
```

### hexo代码高亮特性说明
1. **hexo**支持代码高亮，代码封装在**hexo-util**插件中，使用的是**hightlight.js**库
    * 但是**hightlight.js**本身是没有实现行号支持的，**hexo**对**hightlight.js**封装后使其支持了行号显示。
1. Hexo的_config.yml配置文件中关于代码高亮的配置说明:
```yml
# _config.yml
highlight:              # hightlight.js语法高亮
  enable: true          # true为在服务端渲染，false为在客户端渲染
  hljs: true            # 为代码的class 添加 hljs- 前缀 使其能够代码高亮
  auto_detect: true     # 自动检测代码块的语言
  line_number: true     # 行号显示
  wrap: true            # 须和和line_number一致
  tab_replace: '  '     # /t制表符替换成什么
# prismjs:                # 另一个语法高亮插件,主要是面向浏览器的。两语法高亮插件只需启用一个
#   enable: false         # 启用 PrimeJS 前应设置 highlight.enable 为 false
#   preprocess: true      # preprocess 与 line_number 均设为 true，需要引入 prism-line-numbers.css 即可启用行号显示。均设为 false，需将prism-line-numbers.css 和 prism-line-numbers.js 都引入
#   line_number: true    # 是否显示行号
#   tab_replace: '  '     # /t制表符替换成什么
```


### 我的修改
1. 在hexo主题的源文件中找到博客文章页面的布局文件，添加hightlight.js的css链接。
    * ```<link href="/css/base16_dracula.min.css" rel="stylesheet">```
    * ```<link href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.4.0/styles/base16/dracula.min.css" rel="stylesheet">```
1. _config.yml中配置为：
```
highlight:              # hightlight.js语法高亮
  enable: true          # true为在服务端渲染，false为在客户端渲染
  hljs: true            # 为代码的class 添加 hljs- 前缀 使其能够代码高亮
  auto_detect: true     # 自动检测代码块的语言
  line_number: false    # 行号显示
  wrap: false           # 须和和line_number一致
  tab_replace: '  '     # /t制表符替换成什么
```
1. 效果预览
风格名: base16/dracula
![](/images/article/hightlightjs2.png)