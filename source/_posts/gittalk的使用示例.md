
---
layout: post
title: "gittalk的使用示例"
date: 2022-02-23 20:38:00 +0800
cover: /images/article/gittalk.png
coverWidth: 1430
coverHeight: 577
tags: [笔记,gitalk]
categories: 前端
---

## 将UTF-8编码过的URL地址转换回中文
* decodeURI(window.location.pathname)

## 获取页面内容的简短描述
* document.getElementsByTagName("meta")["description"].content

## GitTalk 提示错误Error: Validation Failed. 
* 原因：提交的id过长（超出50）
* 解决办法：使用decodeURI(window.location.pathname)

## GitHub issue内容出现UTF-8编码的中文的解决
* body: decodeURI(location.href) + document.getElementsByTagName("meta")["description"].content

## 示例代码
```
//存放gitalk的div
<div id="gitalk"></div>

//实例化
<script type="text/javascript">
    var gitalk = new Gitalk({
        clientID: "必填",
        clientSecret: "必填",
        repo: "必填",
        owner: "必填",
        admin: "必填",
        
        id: decodeURI(window.location.pathname),//页面的唯一标识。长度必须小于50。
        title: document.title,//GitHub issue标题。
        body: decodeURI(location.href) + document.getElementsByTagName("meta")["description"].content,//GitHub issue内容 = 网站地址+网站文章描述

        pagerDirection: ,//评论排序方式
        createIssueManually: ,//admin用户手动创建issue
    })
    gitalk.render('gitalk') //渲染到指定的id中
</script>
```