---
layout: post
title: "nodejs-npm备忘笔记"
date: 2022-01-09 20:28:00 +0800
cover: /images/article/nodejs2.webp
tags: [笔记,nodejs,npm]
categories: 笔记
---

# nodejs-npm备忘笔记

## npm工具的使用

### npm 镜像源的设置和删除
1. npm查看源：
    * npm config get registry 或
    * npm config list

2. 设置成淘宝源:
    * npm config set registry https://registry.npm.taobao.org/

3. 设置成npm官方源:
    * npm config set registry https://registry.npmjs.org/

4. npm删除源
   * npm config rm registry

### npm 安装模块
1. 安装给当前目录的项目：
   * npm install [模块名]
2. 安装到全局：
   * npm install -g [模块名]
3. 查看当前项目已安装的模块
    * npm list
4. 查看全局已安装的模块
    * npm list -g
5. 卸载【uninstall】已安装的模块 更新【update】 搜索【search】 
    * npm uninstall  XXX
    * npm uninstall  XXX -g
6. 运行node
    * npm run test