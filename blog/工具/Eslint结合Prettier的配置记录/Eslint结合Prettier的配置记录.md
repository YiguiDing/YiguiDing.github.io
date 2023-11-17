---
title: Eslint结合Prettier的配置记录
date: 2023-01-06 02:12:00+08:00
cover: ./cover/default_cover.jpg
tag: [笔记]
category: 工具
# ---article: false--- # 在主页中隐藏
# id: #自定义文章id
# imageMin: true # 图像压缩
# requirejQuery: true
---

# Eslint 结合 Prettier 的配置记录

这篇笔记是在学习解决 ESLint 与 Prettier 的冲突的过程中，边学边总结写成的，笔记简要回顾了下 Prettier 和 ESLint 的安装和配置，重点记录了两个工具的冲突解决原理和配置方法。

## Prettier 和 ESLint 简介

> **精简版**  
> Prettier: 代码格式化的工具，美化代码，好看  
> ESLint：代码质量检测、编码风格约束，好用

**废话版**  
Prettier 只关注格式化，并不具有 ESLint 检查语法等能力。它通过解析代码并匹配自己的一套规则，来强制执行一致的代码展示格式。

ESLint 是一个在 JavaScript 代码中通过规则模式匹配作代码识别和报告的插件化的检测工具，它的目的是保证代码规范的一致性和及时发现代码问题、提前避免错误发生。
ESLint 的关注点是代码质量，检查代码风格并且会提示不符合风格规范的代码。除此之外 ESLint 也具有一部分代码格式化的功能。

## Prettier 安装和配置

**安装**  
这个东西其实没啥好讲的，以 VSCode 为例，总结起来就是，首先安装 prettier-vscode 插件 然后在 setting.json 中配置使得 prettier-vscode 插件为默认的代码格式化工具，这样在按下快捷键后，代码将自动格式化。

`值得注意的是`，根据插件的 readme 文件，尽管 prettier-vscode 插件捆绑了 prettier，但 prettier-vscode 插件推荐在项目使用 npm 安装 prettier 为项目的本地依赖，可能是考虑到 prettier 版本差异的会导致不同的格式化结果的原因。

> npm install prettier -D

当然插件也能使用安装在全局的 prettier,但需要配置，详细看该插件的 readme。

> This extension will use prettier from your project's local dependencies (recommended). When the prettier.resolveGlobalModules is set to true the extension can also attempt to resolve global modules. Should prettier not be installed locally with your project's dependencies or globally on the machine, the version of prettier that is bundled with the extension will be used.

**配置**  
首先要理清 prettier-vscode 和 prettier 的关系，prettier-vscode 是 vscode 的插件，在将 prettier-vscode 配置为 vscode 的默认的代码格式化工具后， 当在 vscode 中按下代码格式化的快捷键时，vscode 会找到 prettier-vscode 插件 使用该插件进行代码格式化 而 prettier-vscode 又会去找到 prettier , 让 prettier 来做代码格式化 而 prettier 在做代码格式化时，需要知道代码格式化的规则，项目根目录下的 .prettierrc 文件就是记录这个规则的文件。

**画了个图**

```txt
vscode
 | =找插件=> prettier-vscode
 |    | =找处理程序=> prettier
 |    |     | =找配置文件=> .prettierrc
 |    |     | => 处理程序得到格式化后的代码
 |    | => 插件得到格式化后的代码
 | => vscode得到格式化后的代码
```

在 vscode 的插件 prettier-vscode 的加持下，以下配置文件按优先级作用

1. Prettier 的配置文件
2. .editorconfig
3. vscode 的配置文件 (前两个文件存在，则忽略该文件)

**Prettier 配置文件**  
其配置文件名称为.prettierrc.js 后缀名可不同

示例及说明

```js
//.prettierrc.js
module.exports = {
  tabWidth: 2, // 使用 2 个缩进
  useTabs: true, // 使用Tab缩进符
  printWidth: 150, // 一行最多字符
  semi: true, // 行尾需要分号
  singleQuote: false, // 使用双引号
  quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
  trailingComma: "none", // 末尾不需要逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  endOfLine: "crlf", // 换行使用windows的换行符号
  arrowParens: "avoid", // 箭头函数，只有一个参数的时候，不需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
  proseWrap: "never", // 使用默认的折行标准
  // requirePragma: false, // 不需要写文件开头的 @prettier
  // insertPragma: false, // 不需要自动在文件开头插入 @prettier
  // jsxSingleQuote: false,// jsx 不使用单引号，而使用双引号
};
```

## ESLint 安装和配置

**安装**  
也是首先在 vscode 中安装 vscode-ESLint 插件,但与 prettier-vscode 插件不同的是， vscode-ESLint 插件自身不携带 ESLint 这个库,需要在项目中安装 eslint 依赖或是将其安装在全局

```bash
npm install eslint -D
npm install eslint -g
```

> The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running npm install eslint in the workspace folder for a local install or npm install -g eslint for a global install.

**配置**

可以使用命令行工具通过回答问题的方式生成配置文件

```bash
eslint --init # 全局安装eslint后执行该命令初始化
./node_modules/.bin/eslint --init # 本地安装则执行这个
```

以下是生成好的，配置了支持 typescript，换行符，行尾是否有分号，没啥好讲的，傻瓜式生成。

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

## 笔记重点：ESLint 与 Prettier 冲突的解决

在代码格式化时采用 Perttier 规则，而我们代码校验使用的是 ESLint，如果同一个规则配置不一致，往往就会出现冲突问题；

比如：字符串单、双引号的配置，eslint fix 后把字符串变成单引号，再次编辑文件后，保存（Prettier）自动格式化后却又变成双引号，导致代码校验异常。

解决方式一：要么修改 eslintrc，要么修改 prettierrc 配置，让它们配置保持一致；

解决方式二：

- 1. 使用 Prettier 格式化代码后 ESLint 报错，那么就禁用 ESLint 中所有与格式化相关的规则
  - (使用库：eslint-config-prettier)
- 2. 把 Prettier 的代码格式化配置 注册到 ESLint 中，这样 ESLint 就会识别报告代码中与 Prettier 配置格式不一致的错误，同时也能修复它
  - (使用库：eslint-plugin-prettier)
  - 该库的 readme 自述：`将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。`

### 安装、注册、配置插件：eslint-plugin-prettier

该插件用于将 Prettier 中配置的规则添加到 ESLint 中，这样不符合 Prettier 格式的代码 ESLint 就能识别报错和纠正

**安装**

```bash
npm install --save-dev eslint-plugin-prettier
```

**注册和配置插件**

```json
// ESLint的配置文件
// .eslintrc.json
{
  "plugins": ["prettier"], // 注册插件： eslint-plugin-prettier 这样Prettier中的规则就注册到了ESLint中
  "rules": {
    "prettier/prettier": "error" // 配置插件：报告代码中和Prettier规则不一致的错误
  }
}
```

### 安装、注册、配置插件：eslint-config-prettier

**安装**

```bash
npm install --save-dev eslint-config-prettier
```

**配置**

```json
// .eslintrc.json
{
  "extends": [
    "...其他配置放在之前",
    "plugin:prettier/recommended" // 这一行代码实际等效于下面的几行代码
  ]
}
```

**上面代码等效下列代码**

```json
{
  "extends": ["prettier"], // 启用来自 eslint-config-prettier 的配置文件，这将关闭一些导致冲突的规则
  "plugins": ["prettier"], // 注册来自 eslint-plugin-prettier 的插件 这将把prettier的配置添加到eslint中
  "rules": {
    "prettier/prettier": "error", // 提示插件检测出的错误
    "arrow-body-style": "off", // 关闭箭头函数的规则
    "prefer-arrow-callback": "off" // 关闭箭头函数的规则
  }
}
```

## 总结

第二个库的配置项包含了如何配置第一个库，所以只需要安装上述两个库，然后配置一行代码，或者直接使用上面的等效代码

**配置**

```json
// .eslintrc.json
{
  "extends": ["...其他配置放在之前", "plugin:prettier/recommended"]
}
```

## 当前使用的配置文件和依赖

**当前使用的配置文件**

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "prettier/prettier": "warn"
  }
}
```

**依赖**

```json
{
  "devDependencies": {
    "typescript": "^4.9.4", //ts
    "@typescript-eslint/eslint-plugin": "^5.48.0", //插件
    "@typescript-eslint/parser": "^5.48.0", //语法分析器
    "eslint": "^8.31.0", // eslint
    "eslint-config-prettier": "^8.6.0", // 配置，用于关闭eslint中和prettier的配置
    "eslint-plugin-prettier": "^4.2.1", // 插件，用于将prettier的配置附加到eslint中
    "prettier": "^2.8.1" // 代码格式化
  }
}
```

## 缺点

缺点很明显，因为始终是在使用 prettier 来做代码格式化，修改 ESLint 的配置文件并不能改变 prettier 的格式化规则，这是在让 ESLint 去迎合 prettier 的配置规则，这就导致在某些配置上，你可能需要让 ESLint 来检测某些错误，并自动修复它，但是当你按下保存时，prettier 又去自动格式化代码，格式化后的代码导致了 ESLint 报错，除非修改 prettier 的代码格式化规则，否则这是不可避免的。

<style>
    gold{
        color:black;
        background-color:gold;
    }
    green{
        color:white;
        background-color:green;
    }
    warn{
        color:white;
        background-color:red;
    }
</style>
