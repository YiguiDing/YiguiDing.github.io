---
title: wite构建工具学习
date: 2022-11-28T20:00:00+08:00
cover: ./cover/vite构建工具学习.png
tag: [笔记]
category: 笔记
# ---article: false--- # 在主页中隐藏
# id: #自定义文章id
# imageMin: true # 图像压缩
---

# wite构建工具学习

![](./cover/vite构建工具学习.png)

## 目录

- [wite构建工具学习](#wite构建工具学习)
  - [目录](#目录)
  - [脚手架`create-vite`与构建工具`vite`的区别](#脚手架create-vite与构建工具vite的区别)
  - [配置文件`vite.config.js`](#配置文件viteconfigjs)
    - [指定配置文件](#指定配置文件)
    - [编写配置文件](#编写配置文件)
    - [使配置文件支持语法提示](#使配置文件支持语法提示)
  - [选项式配置vite](#选项式配置vite)
  - [环境变量](#环境变量)
    - [`.env`文件](#env文件)
    - [`mode`模式](#mode模式)
    - [正确的使用](#正确的使用)
    - [`实际的dotenv`与`vite中的dotenv`](#实际的dotenv与vite中的dotenv)

## 脚手架`create-vite`与构建工具`vite`的区别

> 简单来说，脚手架就是一个模板，是一个写好的HelloWorld项目，该项目使用vite构建，有基本的约定俗成目录结构和一些基本的vite配置

**安装脚手架，并通过脚手架创建项目**

```bash
yarn create vite 
npm create vite
# 帮我们全局安装一个东西: create-vite (vite的脚手架)
# 直接运行这个create-vite bin目录的下的一个执行配置
```

**安装构建工具**

```bash
npm install vite -D # 在开发环境安装vite
```

## 配置文件`vite.config.js`

### 指定配置文件

```bash
# 通过--config指定vite配置文件的文件名
vite --config custom-config.js

# 默认配置文件为执行该命令目录下的vite.config.js
vite
```

### 编写配置文件

```js
// vite.config.js
export default {
  // 配置选项，直接默认导出一个配置对象即可
}
```

### 使配置文件支持语法提示

方法一：通过`jsdoc`注释配合`IDE`完成

原理：`UserConfig`是用`typeScript`定义的接口类,包含了支持的各个字段的名称和类型信息

```js
/** @type {import('vite').UserConfig} */
export default {
  // ...
}
```

方法二：使用 `defineConfig` 工具函数
原理：`defineConfig` 函数接收一个对象并返回这个对象本身，接收的对象类型是`UserConfigExport = UserConfig` 而`UserConfig`是在`ts`中定义的接口对象

```js

import { defineConfig } from 'vite'

export default defineConfig({
  // ...
})
```

## 选项式配置vite
>
> 根据不同的环境配置vite,
>
> - 如希望在开发环境启用sourceMap,用于方便定位报错所在行数，在生产环境关闭sorceMap
> - 如希望在开发环境开启代理服务器，访问本地服务器，而在生产环境则不用这样的配置

**三个配置文件（文件名任意）**

- `vite.base.config` 基本环境vite配置
- `vite.dev.config`  开发环境vite配置
- `vite.prod.config` 生产环境vite配置
- `vite.config` 用于根据环境启用上述三个配置文件

**编写配置文件**  
`vite.base.config.js`  
`vite.dev.config.js`  
`vite.prod.config.js`  

```js
import { defineConfig } from 'vite'

export default defineConfig({
  // ... 正常写的配置文件
})
```

`vite.config.js`

```js
import {defineConfig} from "vite";
import viteBaseConfig from "./vite.base.config";// 基本环境vite配置
import viteDevConfig  from "./vite.dev.config"; // 开发环境vite配置
import viteProdConfig from "./vite.prod.config";// 生产环境vite配置

// 策略模式
const envResolver = {
    "build":{ ...viteBaseConfig, ...viteProdConfig }, // 对象式写法,覆盖base中的配置
    "serve":{ ...viteBaseConfig, ...viteProdConfig },
    // "build": () => {
    //     console.log("当前在生产环境");
    //     return ({ ...viteBaseConfig, ...viteProdConfig }) // 函数式写法，返回对象
    // },
}
export default defineConfig(({ command, mode }) => {
    // 当执行命名： vite 或 vite dev 或 vite serve 时 command 的值为 serve
    // 当执行命名： vite build 时 command的值为 build
    // 根据源码，command只有两种可能的取值: 'build' | 'serve';
    return envResolver[command];
})
```

> 为什么可以传递一个函数到defineConfig？
> 根据下列源码可知， `defineConfig` 可以接收一个函数，该函数会接收三个参数： `command` `mode` `ssrBuild`

```ts
export declare function defineConfig(config: UserConfigExport): UserConfigExport;
export declare type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFn;
export declare type UserConfigFn = (env: ConfigEnv) => UserConfig | Promise<UserConfig>;
export declare interface ConfigEnv {
    command: 'build' | 'serve';
    mode: string;
    ssrBuild?: boolean; // 实验性功能
}
```

## 环境变量

这里的`环境`变量是指

1. 开发环境
2. 测试环境
3. 预发布环境
4. 灰度环境
5. 生产环境

> 不同的`环境`需要用到不同的`变量`,  
> 如在写axios的baseURL时，开发环境填写的地址和生产环境填写的地址是不一样的

### `.env`文件

默认情况下，Vite 使用 第三方插件`dotenv` 将项目根目录下的下列文件中定义的环境变量，挂载到`import.meta.env`上

```bash
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略（因为脚手架自带的.gitignore文件中有配置）
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略，存一些敏感信息，如数据库密码
```

### `mode`模式

```bash
# serve和build的默认模式分别为development和production：
vite serve --mode development
vite build --mode production
```

### 正确的使用

```js
var env = import.meta.env // import.meta.env将被替换成一个{key:value}的字面量对象
var baseUrl = env.baseUrl // 正确使用

// 错误使用,在生产环境中，这些环境变量会在构建时被静态替换
var baseUrl = import.meta.env['baseUrl']
```

### `实际的dotenv`与`vite中的dotenv`

**`实际的dotenv`的执行过程**

dotenv会自动读取`.env`文件, 解析这个文件中的对应环境变量，并将其注入到`process`对象下

```js
import {resolve} from 'path'
var dotenv = require('dotenv') 
dotenv.config()
console.log(process.env);
```

**`vite中的dotenv`的执行过程**

- 但在vite项目中，`dotenv`解析到的环境变量不会直接注入到`process.env`对象下
- 因为在网页中根本无法访问到`process`这个变量，
- 所以他实际是注入到`import.meta.env`变量上，在生产环境，该变量会被替换为对象字面量
- 在注入的过程中，vite默认还会做一次拦截，如果你的环境变量不是以`VITE`开头的, 他就不会帮你注入到客户端中去
- vite给我们提供了一些补偿措施:我们可以调用`vite`的`loadEnv`来手动确认`env`文件

手动加载`.env`

```js
import {defineConfig} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig  from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式
const envResolver = {
    "build":{ ...viteBaseConfig, ...viteProdConfig },
    "serve":{ ...viteBaseConfig, ...viteProdConfig },
}
export default defineConfig(({ command, mode }) => {
    // 手动加载环境变量,
        //参数一用来确定加载哪一个文件
        //参数二相当于配置 envDir 
        //参数三相当于配置 envPrefix
  var envs = loadEnv(mode,process.cwd(),"Public_");
    return envResolver[command];
})
```

通过配置`vite`自动加载`.env`

```js
/**
 * @type {import 'vite'.UserConfig}
 */
export default defineConfig({
    // 环境变量配置文件所在目录,默认值为'./'
    envDir:"./", 
    
    // 指定仅当以下划线开头的环境变量才会暴露到客户端 默认为VITE
    envPrefix:"_"
  })
```

**几个环境变量文件**

- `.env`: 所有环境都需要用到的环境变量
- `.env.development`: 开发环境需要用到的环境变量(默认情况下vite将我们的开发环境取名为development)
- `.env.production`: 生产环境需要用到的环境变量(默认情况下vite将我们的生产环境取名为production)

**`loadenv`执行过程**
当我们调用`loadenv`的时候, 他会做如下几件事:

1. 直接找到`.env`文件不解释 并解析其中的环境变量 并放进一个对象里
2. 会将传进来的mode这个变量的值进行拼接: ```.env.development```,  并根据我们提供的目录去取对应的配置文件并进行解析, 并放进一个对象
3. 我们可以理解为

   ```js
    const baseEnvConfig = 读取.env的配置
    const modeEnvConfig = 读取env相关配置
    const lastEnvConfig = { ...baseEnvConfig, ...modeEnvConfig }
   ```

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
