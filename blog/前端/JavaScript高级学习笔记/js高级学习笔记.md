---
title: js高级学习笔记
date: 2022-08-29T05:04:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [javascript,js,高级]
# ---article: false---
category: 笔记
---


# js高级学习笔记

## 目录

- [js高级学习笔记](#js高级学习笔记)
  - [目录](#目录)
  - [正则表达式](#正则表达式)
    - [基本语法格式](#基本语法格式)
    - [正则在search()和replace()中的使用](#正则在search和replace中的使用)
    - [RegExp 对象](#regexp-对象)

<!-- ## ES6模块化规范
**早期社区版的模块化解决方案**
* AMD CMD 用于浏览器的模块化规范
* commonJS 用于服务端的模块化规范

**当前ES6模块化规范**
* 官方的模块化规范
* 前端和后端共同的模块化规范 -->

## 正则表达式

### 基本语法格式

`/正则表达式主体/修饰符(可选)`

- 修饰符:
  - i 不区分大小写
  - g 全局匹配
  - m 多行匹配
- 范围查找:
  - `[abc]` 查找方括号之间的任何字符。
  - `[0-9]` 查找任何从 0 至 9 的数字。
  - `(x|y)` 查找任何以 | 分隔的选项。
- 特殊字符:
  - `\d`     查找数字。
  - `\s`     查找空白字符。
  - `\b`     匹配单词边界。
  - `\uxxxx` 查找以十六进制数 xxxx 规定的 Unicode 字符。
- 量词:
  - `n+` 匹配任何包含至少一个 n 的字符串。
  - `n*` 匹配任何包含零个或多个 n 的字符串。
  - `n?` 匹配任何包含零个或一个 n 的字符串。

### 正则在search()和replace()中的使用

- `str.search(字符串或正则表达式)` 返回查找到的第一个子字符串的下标
- `str.replace(字符串A或正则表达式A,字符串B)` 替换A为B

### RegExp 对象

在 JavaScript 中，RegExp 对象是一个预定义了属性和方法的正则表达式对象。

**创建对象**

```js
var patt=new RegExp(正则表达式主体,修饰符);
var rpatte = new RegExp("\\w+");
// 或者更简单的方式:
var patt=/正则表达式主体/修饰符;
```

**RegExp方法**

- `reg.exec(string)`    检索字符串中的正则表达式的匹配。返回该匹配值，否则返回null。
- `reg.test()`    检测一个字符串是否匹配某个模式。返回 true 或 false。
- `reg.toString()`    返回正则表达式的字符串值

**RegExp属性**

- `reg.constructor` 返回一个函数，该函数是一个创建 RegExp 对象的原型。
- `reg.global`  判断是否设置了 "g" 修饰符
- `reg.ignoreCase`  判断是否设置了 "i" 修饰符
- `reg.multiline`   判断是否设置了 "m" 修饰符
- `reg.lastIndex`   用于规定下次匹配的起始位置
- `reg.source`  返回正则表达式的匹配模式

**支持正则表达式的 String 对象的方法**

- `str.search(字符串或正则)` 检索与正则表达式相匹配的值
- `str.match()` 找到一个或多个正则表达式的匹配
- `str.replace()` 替换与正则表达式匹配的子串
- `str.split()` 把字符串分割为字符串数组

```js
var regOBJ = /正则表达方式/i
```
