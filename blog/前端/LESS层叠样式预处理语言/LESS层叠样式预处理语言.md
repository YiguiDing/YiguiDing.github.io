---
title: LESS层叠样式预处理语言
date: 2022-06-21T08:46:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [LESS,CSS,前端]
# ---article: false---
category: 笔记
---


# LESS层叠样式预处理语言

## 目录

- [LESS层叠样式预处理语言](#less层叠样式预处理语言)
  - [目录](#目录)
  - [概述](#概述)
  - [注释](#注释)
  - [运算语法](#运算语法)
  - [选择器嵌套语法](#选择器嵌套语法)
  - [变量](#变量)
  - [导入](#导入)
  - [导出位置修改](#导出位置修改)
    - [修改方法1](#修改方法1)
    - [修改方法2](#修改方法2)
  - [禁止导出](#禁止导出)

## 概述

- less是一个**css的预处理器**
- less文件后缀是.less
- 优点：
  - 它扩充了 CSS 语言，
  - 增加了诸如变量、混合（mixin）、函数等功能，
  - 让 CSS 更易维护,简化了 CSS 的编写

- vscode插件EasyLESS
  - 可以在保存的时候自动编译生成同名的.css文件

## 注释

- 单行注释：`//注释内容`
- 多行注释：`/* 注释内容 */` 多行注释会同步生成到css文件中

## 运算语法

- 加`+`
- 减`-`
- 乘`*`
- 除法需要添加`(小括号)`或`.`
  - `(1/1)`
  - `1./1`

    ```less
    div{
        // 加
        height:10+10px;
        // 减
        height:10-10px;
        // 乘
        height:10*10px;
        // 除
        height:(10/10px);
        height:10./10px;
    }
    ```

- 注意：less4.0之前可以直接写`1 / 1`

## 选择器嵌套语法

- css后代选择器的写法比较冗长，但为了保证其选择器的权重又不得不这样写
- less嵌套写法可以快速生成css语法的后代选择器
- 语法格式

    ```less
    父选择器{
        // 父级样式
        子选择器{
            // 子级样式
        }
    }
    ```

- 示例写法

    ```less
    .father{
        width:100px;
        .son{
            width:50px;
        }
    }
    ```

- 生成css代码

    ```css
    .father{
        width:100px;
    }
    .father .son{
            width:50px;
        }
    ```

- 注意： **`&`表示当前选择器，通常配合伪元素或伪类使用**

    ```less
    .father{
        width:100px;
        .son{
            width:50px;
        }
        &:hover{
            width:60px;
        }
    }
    ```

## 变量

- 定义变量：`@变量名:值;`
- 使用示例：

    ```less
    @bgcolor:#333;
    div{
        background-color:@bgcolor;
    }
    ```

## 导入

- 语法格式：`@import "path/to/fileName.less";`
- 省略后缀：`@import "path/to/fileName";`
- 注意: import之后后**一定**要有空格
- 和c语言include含义类似，实际上就是把另一个文件的内容复制到该位置

## 导出位置修改

- 默认生成的css文件导出在当前文件所在位置
- 一般less可以写在网站根目录的less文件夹
- 导出的文件目录在网站根目录的css文件夹

### 修改方法1

配置vscode的easyLess插件

- 注意：
  - `*/css/`表示存放在`css`**文件夹**
  - `*/css`表示存放为一个名为`css`的**文件**

setting.json

```json
{
    "less.compile":{
        "out":"../css/"
    }
}
```

### 修改方法2

控制单个文件的导出路径

- 语法：
  - **写在第一行:**
  - `//out: ./out/`

## 禁止导出

- 对于`base.less`、`common.less`等类似的公共样式文件，可以禁止其导出为css文件
- 语法：`//out: false`
- 如要调用这些被禁止导出的样式，可以使用`@import`导入
