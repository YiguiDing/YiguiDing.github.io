---
title: Hexo文章中图片的点击放大fancyBox效果添加过程记录
cover: ./cover/default_cover.jpg
date: 2022-06-02T14:51:44+08:00
tag: [Hexo, fancybox]
# ---article: false---
category: 前端
---

# Hexo文章中图片的点击放大fancyBox效果添加过程记录

- 根据文档应该在post模板head中添加:

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<link href="/path/to/jquery.fancybox.min.css" rel="stylesheet" />
<script src="/path/to/jquery.fancybox.min.js"></script>
```

- 根据文档需要有以下代码才能使图片有点击放大查看的效果

```html
<a data-fancybox="gallery" href="big_1.jpg">
  <img src="small_1.jpg" />
</a>
```

- 于是找到`node_modules/hexo-renderer-marked/renderer.js`文件，修改代码
  - 该文件负责将Markdown转换为html标签
  - 如负责将`![text](/path/to/image.jpg)` 转换为 `<img src="/blog/path/to/image.jpg" alt="text">`

```js
// Prepend root to image path
  image(href, title, text) {
    const { hexo, options } = this;
    const { relative_link } = hexo.config;
    const { lazyload, prependRoot, postPath } = options;

    if (!/^(#|\/\/|http(s)?:)/.test(href) && !relative_link && prependRoot) {
      if (!href.startsWith('/') && !href.startsWith('\\') && postPath) {
        const PostAsset = hexo.model('PostAsset');
        // findById requires forward slash
        const asset = PostAsset.findById(join(postPath, href.replace(/\\/g, '/')));
        // asset.path is backward slash in Windows
        if (asset) href = asset.path.replace(/\\/g, '/');
      }
      href = url_for.call(hexo, href);
    }

    //原版代码
    // let out = `<img src="${encodeURL(href)}"`;
    // if (text) out += ` alt="${text}"`;
    // if (title) out += ` title="${title}"`;
    // if (lazyload) out += ' loading="lazy"';
    // out += '>';
    // return out;

    //为gallery效果而改的代码
    let out = `<a data-fancybox="gallery" href="${encodeURL(href)}"><img src="${encodeURL(href)}"`;
    if (text) out += ` alt="${text}"`;
    if (title) out += ` title="${title}"`;
    if (lazyload) out += ' loading="lazy"';
    out += '></a>';

    return out;

  }

```
