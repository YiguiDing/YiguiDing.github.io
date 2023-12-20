---
title: 实现简易编译器和解释器
date: 2023-12-15T08:05:45.758Z
cover: /cover/the-super-tiny-compiler.png
tag:
  - 编译器
  - 解释器
  - 编译原理
  - 词法分析
  - 文法分析
category:
  - 理论
---

# 学习并尝试使用ts重构实现简易编译器和解释器

![the-super-tiny-compiler.png](cover/the-super-tiny-compiler.png)

## 目录

- [学习并尝试使用ts重构实现简易编译器和解释器](#学习并尝试使用ts重构实现简易编译器和解释器)
  - [目录](#目录)
  - [最终效果](#最终效果)
    - [解释器测试](#解释器测试)
    - [编译器测试](#编译器测试)
  - [具体实现](#具体实现)
    - [词法分析器、语法分析器、转换器、代码生成器](#词法分析器语法分析器转换器代码生成器)
    - [编译器、解释器](#编译器解释器)
    - [终端工具](#终端工具)

## 最终效果

### 解释器测试

解释器测试:`test_intrepreter.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/test/test_intrepreter.ts)

测试结果:`test_intrepreter_output.txt`
@[code ts](./projects/the-super-tiny-compiler-ts/test_intrepreter_output.txt)

### 编译器测试

编译器测试:`test_compiler.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/test/test_compiler.ts)
测试结果:`test_compiler_output.txt`
@[code ts](./projects/the-super-tiny-compiler-ts/test_compiler_output.txt)

## 具体实现

### 词法分析器、语法分析器、转换器、代码生成器

:::code-tabs
@tab 词法分析器`tokenizer.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/tokenizer.ts)
@tab 语法分析器`parser.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/parser.ts)
@tab 转换器`transformer.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/transformer.ts)
@tab 代码生成器`codeGenerator.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/codeGenerator.ts)
:::

### 编译器、解释器

:::code-tabs
@tab 编译器:`compiler.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/compiler.ts)
@tab 解释器:`intrepreter.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/intrepreter.ts)
@tab `index.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/index.ts)
:::

### 终端工具

Terminal工具：编译器和解释器的实现

:::code-tabs
@tab 编译器终端工具:`cli_compiler.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/cli_compiler.ts)
@tab 解释器终端工具:`cli_intrepreter.ts`
@[code ts](./projects/the-super-tiny-compiler-ts/src/cli_intrepreter.ts)
:::
