---
# layout: post

title: "Hexo设置文章展示优先级"
date: 2022-02-24 03:15:00+08:00
# cover: ./images/book1.jpg
tag: [笔记, Hexo]
# ---article: false---
category: 笔记
---

1.安装插件

```bash
npm install hexo-generator-index --save
```

2.设置文章优先级

```md
---
**top: 1**
# layout: post
title: "Hexo设置文章展示优先级"
date: 2022-02-24 03:15:00+08:00
---
```

1. 数值越大优先级越高
