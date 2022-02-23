---
layout: post
title: "git命令备忘笔记"
date: 2022-01-09 20:28:00 +0800
cover: /images/article/book1.jpg
tags: [笔记,git]
categories: 笔记
---

# git命令备忘笔记

### 撤销上一次的推送push
1. git log --oneline
2. git reset --mixed xxxx
3. git add .
4. git commit -m "xxxxxxx"
5. git push origin master --force
### 包含子仓库
1. git submodule add <url> <path>
    * git submodule add git@github.com:YiguiDing/js_russuaGame.git 或
    * git submodule add git@github.com:YiguiDing/js_russuaGame.git ./js_russuaGame
### 从远端克隆父仓库后子仓库为空，需执行以下操作
    * git submodule init
    * git submodule update
### 删除添加到暂存区的子仓库
    * git rm --cached html-js_russiaGame