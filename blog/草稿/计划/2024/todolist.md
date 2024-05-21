---
title: 2024-ToDoList
date: 2024-03-31T00:31:00+08:00
cover: ./cover/我要向前走.png
category: to-do-list
tag: [to-do-list]
---

# 2024 To Do List待办事项

## 目录

- [2024 To Do List待办事项](#2024-to-do-list待办事项)
  - [目录](#目录)
  - [⬜江科大stm32单片机教程学习日志](#江科大stm32单片机教程学习日志)
  - [⬜江科大0.96寸OLED显示屏教程学习日志](#江科大096寸oled显示屏教程学习日志)
  - [⬜结合ffmpeg和node-addon实现node-decoder](#结合ffmpeg和node-addon实现node-decoder)
    - [⬜学习使用ffmpeg实现对流媒体格式的解码、播放、拍照、录制](#学习使用ffmpeg实现对流媒体格式的解码播放拍照录制)
      - [⬜学习ffmpeg](#学习ffmpeg)
    - [⬜学习node-addon相关技术](#学习node-addon相关技术)
  - [⬜学习电机控制原理](#学习电机控制原理)
    - [⬜无感无刷直流电机驱动原理学习](#无感无刷直流电机驱动原理学习)
    - [⬜实现无感无刷直流电机驱动](#实现无感无刷直流电机驱动)
    - [⬜学习FOC算法原理](#学习foc算法原理)
  - [⬜总结在electron中实现播放rtsp流的几种方式](#总结在electron中实现播放rtsp流的几种方式)
  - [⬜总结使用threejs实现数字孪生的方法和注意事项](#总结使用threejs实现数字孪生的方法和注意事项)
  - [⬜总结使用makefile实现c/cpp混合编译和烧录的方法和注意事项](#总结使用makefile实现ccpp混合编译和烧录的方法和注意事项)
  - [⬜学习NW.js](#学习nwjs)
  - [⬜学习C++标准库常用函数](#学习c标准库常用函数)
  - [⬜学习汇编语言](#学习汇编语言)
  - [⬜阅读华中科技大学电子技术基础](#阅读华中科技大学电子技术基础)
  - [⬜学习清华大学电路原理课程剩余部分](#学习清华大学电路原理课程剩余部分)
  - [⬜建模与3D打印相关技术学习日志](#建模与3d打印相关技术学习日志)
    - [⬜复习/重学blender，只学建模，不学材质](#复习重学blender只学建模不学材质)
    - [⬜ 3D打印相关技术问题了解](#-3d打印相关技术问题了解)
  - [⬜ 尝试制作一个mini平衡车](#-尝试制作一个mini平衡车)
  - [⬜尝试制作一个穿越机](#尝试制作一个穿越机)
  - [⬜油管控制理论学习日志](#油管控制理论学习日志)
  - [⬜RTOS操作系统学习日志](#rtos操作系统学习日志)
  - [⬜汤家凤零基础高等数学教程剩余部分学习日志](#汤家凤零基础高等数学教程剩余部分学习日志)
  - [⬜《动手学深度》学习日志](#动手学深度学习日志)
  - [⬜《【斯坦福大学】CS229 机器学习 · 2018年》学习日志](#斯坦福大学cs229-机器学习--2018年学习日志)
  - [⬜清华大学-电子技术基础（数电+模电+实验）学习日志](#清华大学-电子技术基础数电模电实验学习日志)
  - [⬜【机器学习】【白板推导系列】【合集 1～33】学习日志](#机器学习白板推导系列合集-133学习日志)
  - [⬜ 《MIT 6.S191 | 深度学习导论(2018~2021·四年)》学习日志](#-mit-6s191--深度学习导论20182021四年学习日志)

<!-- ⬜✅ -->

## ⬜江科大stm32单片机教程学习日志

> <https://www.bilibili.com/video/BV1th411z7sn>

- `2024-03-30 23:32` 利用定时器实现输出PWM波，通过TB6612驱动直流电机转速。
- `2024-05-01 03:02` `2024-05-01 03:42` 复习定时器外设相关笔记  
- 

## ⬜江科大0.96寸OLED显示屏教程学习日志

> <https://www.bilibili.com/video/BV1EN41177Pc>

## ⬜结合ffmpeg和node-addon实现node-decoder

- `2024-04-14` 创建media-decoder的npm包和GitHub仓库

### ⬜学习使用ffmpeg实现对流媒体格式的解码、播放、拍照、录制

#### ⬜学习ffmpeg

> 2023C++名企领航班-FFmpeg与音视频编解码+OpenCV图像处理 <https://www.bilibili.com/video/BV1DB4y1o7XX>

- `2024-04-01` 学习ffmpeg开发环境的搭建，代码编写和编译，学习使用ffmpeg输出视频metadata
- `2024-04-02` 搭建ffmpeg开发环境，编写makefile，实现通过ffmpeg提供的接口打印输出日志、视频metadata、提取AAC音频流、提取H264视频流
- `2024-04-03` 提取AAC音频流(ADTS格式，VLC可播放)、提取H264视频流(annexb格式、VLC可播放)
- `2024-04-04` 实现对mp4中音视频流的提取,重新封装为flv
- `2024-04-07` 学习理解ffmpeg中时间戳、时间基的概念；编写代码实现；
- `2024-04-08` 学习使用ffmpeg截取视频的过程并编写代码实现；
- `2024-04-09` 了解RGB、YUV的各种格式
- `2024-04-13` 搞清YUV444、YUV422、YUV421三种格式的区别、实现解码YUV420
- `2024-04-14` 学习并编写代码实现修改视频分辨率、修改解码格式为RGB24、实现保存RGB24为位图文件。
- `2024-04-16` 学习并编写代码实现将yuv420编码为h264
- `2024-04-19` 学习并编写代码实现将AAC解码为PCM
- `2024-04-20` 学习并编写代码实现将PCM编码为AAC

<http://dranger.com/ffmpeg>

<https://ffmpeg.xianwaizhiyin.net/api-ffmpeg/>

### ⬜学习node-addon相关技术

> <https://nodejs.org/docs/latest/api/addons.html>
> <https://github.com/nodejs/node-addon-api>
> <https://github.com/nodejs/node-addon-examples>
> <https://nodejs.github.io/node-addon-examples>

- `2024-04-16` 了解、学习、总结`Node-API`、`nan`、`node-addon-api`的区别
- `2024-04-20`
  - 学习总结node-addons开发环境的安装和配置，创建和编写hello_world.cc插件项目并测试,
  - 编写编写案例代码
    - `4月 21 10:51 00.addon/`
    - `4月 21 00:48 01.function/`
- `2024-04-21` 编写案例代码
  - `4月 21 11:21 02.function_arguments/`
  - `4月 21 11:35 03.callback/`
  - `4月 21 11:52 04.factory_of_object/`
  - `4月 21 14:28 05.factory_of_function/`
  - `4月 21 16:40 06.objectWrap/`
  - `4月 21 21:44 07.factory_of_objectWrap/`
- `2024-04-22` 编写案例代码
  - `4月 22 16:26 08.passing_wrapped_obj_to_native/`
  - `4月 22 17:04 09.passing_array_buffer_to_native/`
  - `4月 22 21:45 10.passing_typed_array_to_native/`
- `2024-04-26` 修改、编写案例代码
  - 修改：`09.passing_array_buffer_to_native/`
  - 编写：`4月 26 21:17 11.context-awareness/`
- `2024-04-27`
  - 学习AsyncWorker
  - 编写案例代码
    - 编写：`4月 28 07:15 12.my-async-worker/`
- `2024-04-28`
  - 编写案例代码
    - `4月 28 18:12 13.async_worker_call_js_function/`
    - `4月 28 22:44 14.async_worker_promise/`
- `2024-04-29`
  - 学习Reference、function_reference、线程安全函数threadsafe_function
  - 编写案例代码
    - `4月 29 11:26 15.function_reference/`
    - `4月 29 20:46 16.thread_safe_function_demo/`
  - 补充笔记
    - function、Object、ArrayBuffer、TypedArray、AsyncWorker、threadsafe_function文档翻译

## ⬜学习电机控制原理

### ⬜无感无刷直流电机驱动原理学习

**直流无刷电机PWM驱动**

> <https://www.bilibili.com/video/BV1hv4y1g7s3>

- `2024-04-05` 无刷直流电机驱动控制原理:六步换相、反向电动势无感位置检测
- `2024-04-06` 无刷直流电机驱动控制原理:霍尔有感位置检测 了解开源驱动方案:EFM8BB21+FD6288+BLHeli_S

### ⬜实现无感无刷直流电机驱动

> <https://www.bilibili.com/video/BV1SQ4y117mq>
>
> <https://github.com/Ncerzzk/datasheet/blob/master/电气工程-电机与电器/无感无刷直流电机之电调设计全攻略.pdf>

### ⬜学习FOC算法原理

> <https://www.bilibili.com/video/BV1cj411M7Xu>

- `2024-04-30T16:43` 学习：1_起源，无刷电机概念与控制原理
- `2024-04-30T16:59` 学习：2_克拉克变换，建立简化电机数学模型
- `2024-04-30T18:12` 学习：3_等幅值变换与克拉克逆变换
- `2024-04-30T18:35` 学习：4_帕克变换
- `2024-04-30T19:02` 学习：5a_撰写开环速度代码的前置知识
- `2024-04-30T19:02` 学习：5b_开环速度代码编程+硬件调试教学
  - 尝试编写，发现STM32比较输出寄存器还没学......

## ⬜总结在electron中实现播放rtsp流的几种方式

## ⬜总结使用threejs实现数字孪生的方法和注意事项

## ⬜总结使用makefile实现c/cpp混合编译和烧录的方法和注意事项

## ⬜学习NW.js

## ⬜学习C++标准库常用函数

## ⬜学习汇编语言

## ⬜阅读华中科技大学电子技术基础

- `2024-04-07T03:40` 数字部分 第一章 读完

## ⬜学习清华大学电路原理课程剩余部分

## ⬜建模与3D打印相关技术学习日志

### ⬜复习/重学blender，只学建模，不学材质
>
> <https://www.bilibili.com/video/BV14u41147YH>

- `2024-04-29T23:06`-`2024-04-30T04:13` 复习基础建模知识、快捷键、建模尝试
  - `2024-04-08T00:09`学习：【基础篇】1.2 让手听话
    - 笔记新增内容：
    - [基础篇]
      - [创建模型]
      - [删除模型]
      - [选择工具]
      - [模型变换]
      - [视图操作]
      - [场景操作]
  - `2024-04-30T01:42`学习：【基础篇】1.3 认识界面
    - 笔记新增内容：
    - [基础篇]
      - [面板操作]
      - [工作区操作]
      - [游标]
      - [物体原点]
      - [轴心点]
      - [坐标]
      - [偏好设置]
  - `2024-04-30T04:13`学习：【建模篇】2.1 点线面的选择与控制
    - 笔记新增内容：
    - [建模篇]
      - [点线面的选择与控制]
        - [物体交互模式切换]
        - [点线面选择模式切换]
        - [点线面的选择]
        - [点、线、面的相连项]
        - [点、线、面的最短连接]
        - [点、线、面的循环选择]
        - [点、线、面的并排边选择]
        - [点、线、面的扩展/缩减选区]
  - `2024-04-30T14:15`-`14:58`学习：【建模篇】2.1 点线面的选择与控制
    - 笔记新增内容：
    - [点线面的控制]
      - [点线面的移动、缩放、旋转]
      - [点线面的删除操作]
      - [点线面的融并操作]
      - [法线方向]

### ⬜ 3D打印相关技术问题了解

> <https://www.bilibili.com/video/BV1qT411x7t8>
> <https://www.bilibili.com/video/BV1ko4y1y7if>
> <https://www.bilibili.com/video/BV1GL4y1B7PD>

- `2024-04-29T17:36`
  - 了解光固化和FDM的优缺点，了解光固化打印机的参数含义2k\4k\8k\12k
- `2024-04-30T03:07`
  - 了解尺寸问题、组装间隙问题、可动零件如何摆放的问题
  - 了解物体厚度与与法线方向的关系

## ⬜ 尝试制作一个mini平衡车

- `2024-04-30T23:42` - `2024-05-01T01:11`
  - 回顾EFM8BB21+FD6288的无刷电调方案，
  - 了解Stm32F103高级、通用定时器个数，查看FD6288数据手册
  - 准备用F103的两个通用定时器结合FD6288实现两路FOC无刷电机驱动

## ⬜尝试制作一个穿越机

## ⬜油管控制理论学习日志

> <https://www.bilibili.com/video/BV1ot4y1i76e>

## ⬜RTOS操作系统学习日志

## ⬜汤家凤零基础高等数学教程剩余部分学习日志

## ⬜《动手学深度》学习日志

> <https://zh.d2l.ai/>

## ⬜《【斯坦福大学】CS229 机器学习 · 2018年》学习日志

> <https://www.bilibili.com/video/BV1JE411w7Ub>

## ⬜清华大学-电子技术基础（数电+模电+实验）学习日志

> <https://www.bilibili.com/video/BV1XE411X7qU>

## ⬜【机器学习】【白板推导系列】【合集 1～33】学习日志

> <https://www.bilibili.com/video/BV1aE411o7qd>

## ⬜ 《MIT 6.S191 | 深度学习导论(2018~2021·四年)》学习日志

> <https://www.bilibili.com/video/BV1g34y1Q79p>
