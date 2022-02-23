---
layout: post
title: "nexmoe主题文章底部UTF-8链接转中文"
date: 2022-02-23 21:46:00 +0800
cover: /images/article/book1.jpg
tags: [笔记,nexmoe]
categories: 前端
---

## 原代码
```
<% if (page.hide_copyright !== true && theme.copyright || page.copyright) { %>
    <div class="nexmoe-post-copyright">
        <strong><%- __('copyright.author') %>：</strong><%= config.author %><br>
        <strong><%- __('copyright.permalink') %>：</strong>
        <%- link_to(page.permalink, page.permalink, {external: true}) %><br>
        <% if (page.copyright) { %>
            <%- page.copyright %>
        <% } else { %>
            <%- theme.copyright %>
        <% } %>
    </div>
<% } %>
```

## 修改后
```
<% if (page.hide_copyright !== true && theme.copyright || page.copyright) { %>
    
    <script type="text/javascript">
        var decodePageURI = decodeURI("<%- page.permalink %>")
        timer = null
        timer=setInterval(function(){
            do
            {
                document.getElementById("page_address").href=decodePageURI
                document.getElementById("page_address").title=decodePageURI
                document.getElementById("page_address").innerHTML=decodePageURI
            }while(document.getElementById("page_address").innerHTML!=decodePageURI)
            clearInterval(timer)
        },
        100
        )
    </script>

    <div class="nexmoe-post-copyright">
        <strong><%- __('copyright.author') %>：</strong><%= config.author %><br>
        <strong><%- __('copyright.permalink') %>：</strong>
        <!-- <%- link_to(page.permalink, page.permalink, {external: true}) %><br> -->
        <a id="page_address" href="" title="" target="_blank" rel="noopener"></a><br>
        <% if (page.copyright) { %>
            <%- page.copyright %>
        <% } else { %>
            <%- theme.copyright %>
        <% } %>
    </div>
<% } %>
```
## 效果
修改后效果为能根据page.permalink内容展示UTF-8解码后的中文URL
{% gallery %}
![修改前](/images/article/修改前.png)
![修改后](/images/article/修改后.png)
{% endgallery %}
<br>
<br>
<br>
<br>

