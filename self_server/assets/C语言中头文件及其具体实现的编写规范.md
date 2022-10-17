---
title: C语言中头文件及其具体实现的编写规范
top: 10
cover: /images/《数据结构与算法分析》学习笔记/cover.png
coverWidth: 813
coverHeight: 539
date: '2022-05-25 06:12:53 +08:00'
modified: '2022-05-26T18:09:20.016Z'
tags: [《数据结构与算法分析》,笔记]
hideAtIndex: true
categories: 笔记
id: 71
---


# C语言中头文件及其具体实现的编写规范
* c语言中约定函数的声明、类型的声明写在XXX.h文件中
* 其结构体、函数的具体实现写在XXX.c中
* 编译时有两种方式
  + 直接将库的源文件XXX.c和main.c一起编译 `gcc main.c XXX.c -o main.exe`
  + 先将库的源文件汇编成.o文件，隐藏具体实现原理 再将.o文件与main.c编译
    + `gcc -c XXX.c -o XXX.o`
    + `gcc main.c XXX.o -o main.exe`
* 结构体的定义写在.c文件还是.h文件？
  + 放c还是h取决于该结构是否要暴露给其他c,原则就是能放c绝不放h,但一般来说既然定义了结构,多半还是要暴露出来的.
