---
layout: post
title: "font-class图标使用"
date: 2022-02-23 10:31:00 +0800
cover: /images/article/font_class图标使用.png
tags: [font-class,笔记,前端]
categories: [前端]
reprint: true
---
## 阿里巴巴矢量图标库
https://www.iconfont.cn/

## font-class 引用
font-class使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。

使用步骤如下：

第一步：引入项目下面生成的 fontclass 代码：
```
<link rel="stylesheet" href="./iconfont.css">
```

第二步：挑选相应图标并获取类名，应用于页面：
```
<span class="iconfont icon-xxx"></span>
```
" iconfont" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。

