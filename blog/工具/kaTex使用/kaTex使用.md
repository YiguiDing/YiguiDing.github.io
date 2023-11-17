---
title: kaTex使用
cover: ./cover/default_cover.jpg
date: 2022-05-31T19:06:10+08:00
tag: [kaTex]
# ---article: false---
---


# kaTex使用

- KaTeX排版系统核心库

```html
<!-- KaTeX requires the use of the HTML5 doctype. Without it, KaTeX may not render properly -->
<link rel="stylesheet" href="/libs/katex/v0.15.6/katex.min.css" >
<!-- The loading of KaTeX is deferred to speed up page rendering -->
<script defer src="/libs/katex/v0.15.6/katex.min.js" ></script>
```

- 用于自动渲染的KaTeX扩展库

```html
<!-- To automatically render math in text elements, include the auto-render extension: -->
<script defer src="/libs/katex/v0.15.6/contrib/auto-render.min.js" ></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          // customised options
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: true},
              {left: '\\[', right: '\\]', display: false}
          ],
          // • rendering keys, e.g.:
          throwOnError : true
        });
    });
</script>
```

- 允许复制tex公式时复制其源代码的扩展库

```html
<link href="/libs/katex/v0.15.6/contrib/copy-tex.css" rel="stylesheet" type="text/css">
<script src="/libs/katex/v0.15.6/contrib/copy-tex.min.js"></script>

```
