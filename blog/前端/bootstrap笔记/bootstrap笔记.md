---
title: bootstrap笔记
date: 2022-06-23T07:22:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [bootstrap,前端]
category: 笔记

# ---article: false---
---



# bootstrap笔记

## 目录

- [bootstrap笔记](#bootstrap笔记)
  - [目录](#目录)
  - [简介](#简介)
  - [dist](#dist)
  - [基本使用步骤](#基本使用步骤)
  - [栅格系统](#栅格系统)
    - [栅格化](#栅格化)
    - [代码书写方式](#代码书写方式)
    - [使用测试](#使用测试)
  - [一些类名](#一些类名)
    - [container](#container)
  - [官方文档](#官方文档)
    - [全局样式](#全局样式)
    - [组件](#组件)
    - [JavaScript插件](#javascript插件)

## 简介

用于开发**响应式**布局、**移动设备优先**的 WEB 项目。

## dist

- `bootstrap-3.4.1` 源码
- `bootstrap-3.4.1-dist` 用于生产环境的
- `-min`格式化到同一行的，一定程度上压缩了体积的代码

## 基本使用步骤

1. 引用booststrap的css代码

    ```html
    <link rel="stylesheet" href="./lib/bootstrap-3.4.1-dist/css/bootstrap.css">
    <link rel="stylesheet" href="./lib/bootstrap-3.4.1-dist/css/bootstrap.min.css">
    ```

2. 调用类

## 栅格系统

### 栅格化

栅格化是指将整个网页的宽度分成诺干份  
bootstrap3中默认将网页分成12等份
![](./images/bootstrap笔记/2022-06-23-04-35-08.png)
如有一个盒子要一行容纳四个子盒子，那么每个子盒子就要占父盒子宽度的三份

### 代码书写方式

bootstrap3把所有屏幕分成4类
![](./images/bootstrap笔记/2022-06-23-04-41-42.png)

- 语义解释
  - .col-xs- 超小屏幕 手机 (<=768px) (iPhone6、7、8 375px) (iPhone12Pro 390px)
  - .col-sm- 小屏幕 平板 (≥768px)
  - .col-md- 中等屏幕 桌面显示器 (≥992px)
  - .col-lg- 大屏幕 大桌面显示器 (≥1200px)
  - col-列；colum
  - xs-maxsmall，超小；sm-small，小；md-medium，中等；lg-large，大；
  - -*表示占列，即占自动每行row分12列栅格系统比；

### 使用测试

大屏一行排列4个；中屏一行排列2个

```html
<link rel="stylesheet" href="./lib/bootstrap-3.4.1-dist/css/bootstrap.css">
<style>
    .container div{
        height: 50px;
        background-color: skyblue;
        text-align: center;
    }
</style>
<div class="container">
    <div class="col-lg-3 col-md-6">1</div>
    <div class="col-lg-3 col-md-6">2</div>
    <div class="col-lg-3 col-md-6">3</div>
    <div class="col-lg-3 col-md-6">4</div>
</div>
```

## 一些类名

### container

- `container` 响应式布局版心,自带15px左右内边距
- `row` 自带-15px的左右外边距，用于抵消container的15px **用法**是:`container>row`

    ```html
    <div class="container">
        <div class="row">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    ```

- `container-fluid` 宽度为100%的容器，自带15px左右内边距

## 官方文档

一般直接查[官方文档](https://v3.bootcss.com/)

- **全局样式** 可以直接调用的类名
- **组件** 封装好的功能组件，下拉菜单，导航等
- **JavaScript插件** 一些现成的封装好的交互效果

- **定制** 根据需求修改框架原有的功能
![](./images/bootstrap笔记/2022-06-23-05-50-57.png)

### 全局样式

一般直接查[官方文档](https://v3.bootcss.com/)

### 组件

一般直接查[官方文档](https://v3.bootcss.com/)

### JavaScript插件

一般直接查[官方文档](https://v3.bootcss.com/)

JavaScript插件

- 需要先引入jquery
- 再引入bootstrap.js
- 位置一般写在body结束标签之前

Carousel是轮播图
