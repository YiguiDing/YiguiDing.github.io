---
title: Node-Addons学习笔记
date: 2024-04-16T04:03:00+08:00
---

# Node-Addons学习笔记

## 目录

- [Node-Addons学习笔记](#node-addons学习笔记)
  - [目录](#目录)
  - [C++ addons](#c-addons)
  - [Node-API](#node-api)
  - [node-addon-api](#node-addon-api)
  - [getting-started](#getting-started)
    - [安装依赖](#安装依赖)
    - [编写binding.gyp文件](#编写bindinggyp文件)
    - [编写插件](#编写插件)
    - [编写build脚本](#编写build脚本)
    - [安装编译环境](#安装编译环境)
    - [配置vscode实现代码提示](#配置vscode实现代码提示)
    - [编译插件](#编译插件)
    - [编写index.js](#编写indexjs)
    - [测试](#测试)
    - [预构建](#预构建)
  - [function函数](#function函数)
  - [function\_arguments函数参数](#function_arguments函数参数)
  - [callback\_函数回调](#callback_函数回调)
  - [Factory\_Of\_Object](#factory_of_object)
  - [Factory\_Of\_function](#factory_of_function)
  - [ObjectWrap](#objectwrap)
  - [Factory\_Of\_ObjectWrap](#factory_of_objectwrap)
  - [addon插件类](#addon插件类)

## C++ addons

**C++插件(C++ addons)**

- `C++插件(C++ addons)`是用C++写的动态链接库。
- 可以使用`require()`函数，像加载普通`nodejs modules`一样可以加载`C++插件`.
- 插件(Addons)提供了JavaScript 和 C/C++ 之间的接口.

**插件（addons）的三种实现方式**

- `Node-API`(推荐的方式)
- `nan`（旧接口）
- 直接使用内部 V8、libuv 和 `Node.js libraries`

## Node-API

**Node-API简介**
- 以前称为 `N-API`
- 是一个用于构建nodejs原生插件的接口（an API for building native Addons.）
- 独立于底层 JavaScript 运行时（例如 V8），并作为 Node.js 本身的一部分进行维护。
- 该 API 将在 Node.js 版本之间保持稳定
  - 插件与底层 JavaScript 引擎的更改隔离开来
  - 允许为一个主要版本编译的模块可以在 Node.js 的更高主要版本上运行，而无需重新编译。

**Node-API特点**

- `Node-API` 公开的 API 通常用于**创建和操作 JavaScript 值**。
- 所有 `Node-API` 调用都会**返回类型为napi_status的状态码**。表示调用成功或失败。
- API 的**返回值**通过**传递输出参数获取**
- 所有 JavaScript 值都被抽象为名为`napi_value`的不透明类型。
- 如果出现错误状态代码，可以使用`napi_get_last_error_info()`获取附加信息。

## node-addon-api

**`node-addon-api`和`Node-API`的关联**

- `Node-API` 是一种 `C API`，可确保跨不同`Node.js`版本和不同编译器级别的 ABI(应用程序二进制接口) 稳定性。
- `node-addon-api` 是 `Node-API` 的`C++`封装（wrapper module） 因为`C++`API更容易使用。
- `node-addon-api` 是编写调用 `Node-API` 的代码的更有效方法。
- 该封装提供了**可内联**的 C++ API
  - **可内联(inlinable)**: 内联展开是编译器的一个优化技术，其中函数体被直接插入到每一个调用该函数的地方，而不是进行常规的函数调用。这样做可以消除函数调用的开销，并可能改善执行速度，特别是当函数体很小并且频繁被调用时。
  使用 `node-addon-api` 编译构建二进制文件将取决于 Node.js 导出的基于 Node-API C 的函数的符号。

**`node-addon-api`和`Node-API`的案例代码**

使用`node-addon-api`（c++接口）创建对象

```c++
Object obj = Object::New(env);
obj["foo"] = String::New(env, "bar");
```

使用`Node-API`（c接口）创建对象

```c
napi_status status;
napi_value object, string;
status = napi_create_object(env, &object);
if (status != napi_ok) {
  napi_throw_error(env, ...);
  return;
}

status = napi_create_string_utf8(env, "bar", NAPI_AUTO_LENGTH, &string);
if (status != napi_ok) {
  napi_throw_error(env, ...);
  return;
}

status = napi_set_named_property(env, object, "foo", string);
if (status != napi_ok) {
  napi_throw_error(env, ...);
  return;
}
```

## getting-started

### 安装依赖

```bash
# 初始化项目
npm init -y
# 安装
npm i node-addon-api bindings
# 全局安装构建工具
npm i node-gyp -g
```

### 编写binding.gyp文件

- node-gyp是编写Node.js插件的默认标准构建工具。
- 基于Google的gyp构建工具，该工具抽象了许多与跨平台构建相关的繁琐问题。
- node-gyp使用一个名为`binding.gyp`的文件，该文件位于插件项目的根目录下。
- `binding.gyp`文件包含所有构建配置，使用类似JSON的语法进行组织。
- 如何编写？
  - 指定源文件
    - target_name 必须设置为与插件初始化代码中的值相同
    - sources 源文件
  - 将node-addon-api作为依赖项引用，有三种写法
    1. `node_addon_api`关闭 C++ 异常处理功能
    2. `node_addon_api_except`启用 C++ 异常处理功能
    3. `node_addon_api_maybe` 不启用C++异常处理功能，但启用node-addon-api的安全API类型保护，以确保正确的异常处理模式
    - 说明：
      - 底层的ABI稳定的C-API 并不抛出或处理 C++ 异常，
      - 但 Node-API 的 C++ 包装器类可以选择性地集成 C++ 和 JavaScript 异常处理。

```json
// binding.gyp
{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": ["src/hello_world.cc"],
      "include_dirs": [
        // 可以不写
        // "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
       // 关闭 C++ 异常处理功能
       "<!(node -p \"require('node-addon-api').targets\"):node_addon_api",
       // 或 启用 C++ 异常处理功能
       "<!(node -p \"require('node-addon-api').targets\"):node_addon_api_except",
       // 或 不启用 C++ 异常,但启用 node-addon-api 的安全 API 类型守卫，以确保正确的异常处理模式。
       "<!(node -p \"require('node-addon-api').targets\"):node_addon_api_maybe"
     ]
    }
  ],

}
```

上面，`node -p "require('node-addon-api').targets"` 是一个 Node.js 命令行表达式，用于从 node-addon-api 模块中获取正确的目标依赖名称。

```bash
# 执行:
$ node -p "require('node-addon-api').targets"
# 输出：
node_modules\node-addon-api\node_addon_api.gyp
```

**对macOS（OSX）支持**

```gyp
'conditions': [
  ['OS=="mac"', {
      'cflags+': ['-fvisibility=hidden'],
      'xcode_settings': {
        'GCC_SYMBOLS_PRIVATE_EXTERN': 'YES', # -fvisibility=hidden
      }
  }]
]
```

### 编写插件

1. 包含`napi.h`
   - 在原生模块代码中包含 `napi.h` 是使用 `Node-API` 的关键步骤。
   - 为了确保仅使用 ABI（应用程序二进制接口）稳定的 API，您不应包含 `node.h`、`nan.h` 或 `v8.h`，
   - 因为这些头文件可能包含非稳定的 V8 或 Node.js 特定 API。
2. 编写入口
   - 编写**代码入口点**（entry-point）
   - 定义**插件入口点**（defines the entry-point for the Node addon）

`src/hello_world.cc`

```cpp
#include <napi.h>

// 定义函数
// function hello(){ return "world" }
Napi::String hello(const Napi::CallbackInfo &info)
{
  return Napi::String::New(info.Env(), "world");
}


/**
  代码入口点。
  这里接收两个参数，
    + 第一个是表示 JavaScript 运行时的一个独立实例的环境，
    + 第二个参数是导出对象，和js文件中的module.exports作用相同。
        + 可以向传入的exports对象添加属性，或者创建你自己的exports对象。
        + 无论哪种情况，你都必须返回这个对象，这样当从Init函数返回时，这个对象将被用作模块的导出。
*/
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  // exports['hello'] = hello
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, hello));
  return exports;
}

/**
  Node插件入口点，告诉Node一旦库被加载到活动内存中后应该去哪里。

  第一个参数必须与我们在binding.gyp中定义的“target”相一致。
    + 使用`NODE_GYP_MODULE_NAME`可以确保参数正确，
    + 只要模块是使用node-gyp构建的（这是构建模块的常用方式）。
  第二个参数指向要调用的函数。这个函数不能是命名空间内的。
*/
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

### 编写build脚本

```json
// package.json
{
  "main": "index.js",
  "scripts": {
    "build": "node-gyp configure && node-gyp build"
  },
  "dependencies": {
    "bindings": "^1.5.0",
    "node-addon-api": "*"
  }
}
```

### 安装编译环境

**安装Python**

```bash
# 1.解压安装miniConda
# 2.然后在bash中执行：
$ /d/app/miniconda3/Scripts/conda init bash
```

**安装VS**

- ![Alt text](assets/images/image.png)
- ![Alt text](assets/images/image-1.png)

```bash
# 否则报错
gyp ERR! find VS **************************************************************
gyp ERR! find VS You need to install the latest version of Visual Studio
gyp ERR! find VS including the "Desktop development with C++" workload.
gyp ERR! find VS For more information consult the documentation at:
gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
gyp ERR! find VS **************************************************************
```

### 配置vscode实现代码提示

1. 安装`c\c++`插件
2. 编写`.vscode/c_cpp_properties.json`，为了在vscode支持代码提示

```json
"configurations": [
  {
   "name": "Win32",
   "includePath": [
      // for source code
      "${workspaceFolder}/src/**",
      // for napi.h
      "${workspaceFolder}/node_modules/node-addon-api/**",
      // for node_api.h
      "${HOME}/AppData/Local/node-gyp/**"
   ],
  }
]
```

### 编译插件

```bash
npm run build
```

### 编写index.js

```js
let addon = require('bindings')('hello_world');

console.log(addon.hello()); // 'world'
```

### 测试

```bash
$ node index.js
world
```

### 预构建

预构建工具

- 原生插件的分发与其实现同样重要。
- 为了安装一个原生插件，确保所有必要的依赖项都已安装并配置正确至关重要。
- 当终端用户通过 npm install 命令安装插件时，他们需要编译这个插件，而这在某些情况下可能会导致问题。
- 为了避免编译过程，可以为不同的平台和架构分发预构建的原生插件。
- 预构建工具可以帮助创建和分发原生插件的预构建形式。

以下列出了与 Node-API 兼容的已知工具：

- node-pre-gyp
- prebuild
- prebuildify

这些工具允许开发者为多种平台和架构预先构建他们的原生插件，并将它们与 npm 包一起分发。
这样，终端用户在安装插件时就不需要编译，可以直接使用预构建的二进制文件。
这对于简化插件的分发和安装过程非常有用，尤其是对于那些没有编译环境或不想处理编译问题的用户。


## function函数

> <https://github.com/nodejs/node-addon-api/blob/main/doc/function.md>

- `Napi::Function` 类提供了一系列的方法来创建js函数对象
  - 如 `Napi::Function::New(env, fun)`
- 所定义c++函数不会自动在js中可见，需要通过exports导出

```c++
#include <napi.h>

// function hello(){ return "world" }
Napi::String hello(const Napi::CallbackInfo &info)
{
  return Napi::String::New(info.Env(), "world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['hello'] = hello
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, hello));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

```js
var addon = require('bindings')('hello_world');

console.log(addon.hello()); // 'world'
```

## function_arguments函数参数

```c++
#include <napi.h>

// function hello(a,b){ return a+b }
Napi::Value add(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  if (info.Length() < 2)
  {
    // throw new TypeError("Wring number of arguments.");
    Napi::TypeError::New(env, "Wrong number of arguments.").ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber())
  {
    // throw new TypeError("Wrong type of arguments.");
    Napi::TypeError::New(env, "Wrong type of arguments.").ThrowAsJavaScriptException();
    return env.Null();
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  double result = arg0 + arg1;

  return Napi::Number::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['add'] = add
  exports.Set(Napi::String::New(env, "add"), Napi::Function::New(env, add));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```


```js
var addon = require('bindings')('hello_world');

console.log(addon.add()); // TypeError: Wring number of arguments.
console.log(addon.add(1)); // TypeError: Wring number of arguments.
console.log(addon.add("111","222")); // TypeError: Wrong type of arguments.
console.log(addon.add(1, 2)); // 3
```


## callback_函数回调

```c++
#include <napi.h>

// function hello(callback){ callback("hello_world"); }
void call(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  Napi::Function callbaack = info[0].As<Napi::Function>();
  Napi::String arg0 = Napi::String::New(env, "hello_world");

  callbaack.Call({arg0});
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['call'] = call
  exports.Set(Napi::String::New(env, "call"), Napi::Function::New(env, call));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

```js
var addon = require('bindings')('hello_world');

addon.call(
    function (msg) {
        console.log(msg); // "hello_world"
    }
)
```

## Factory_Of_Object

```c++
#include <napi.h>

// function creatObj(){ return {"hello":"world"} }
Napi::Value creatObj(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  // obj = {}
  Napi::Object obj = Napi::Object::New(env);
  // obj["hello"] = "world"
  obj.Set(Napi::String::New(env, "hello"), Napi::String::New(env, "world"));

  return obj;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['creatObj'] = creatObj
  exports.Set(Napi::String::New(env, "creatObj"), Napi::Function::New(env, creatObj));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

```js
var addon = require('bindings')('hello_world');

let obj = addon.creatObj()

console.log(obj) // { hello: 'world' }
```

## Factory_Of_function

```c++
#include <napi.h>

/*
  function hello_world(){
    return "hello_world"
  }
*/
Napi::String hello_world(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::String::New(env, "hello_world");
}

/*
  function creatFunction(){
    return function hello_world(){
      return "hello_world"
    }
  }
*/
Napi::Function createFunction(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  /*
    return function hello_world(){
      return "hello_world"
    }
  */
  return Napi::Function::New(env, hello_world, "hello_world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // exports['creatFunction'] = creatFunction
  exports.Set(Napi::String::New(env, "createFunction"), Napi::Function::New(env, createFunction));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```


```js
#! node
var addon = require('bindings')('hello_world');

let fun = addon.createFunction()

console.dir(fun.toString()) // 'function hello_world() { [native code] }'
console.log(fun()) // 'hello_world'
```


## ObjectWrap

**ObjectWrap简介**

- `Napi::ObjectWrap<T>`继承自`Napi::InstanceWrap<T>`
- ObjectWrap类用于将c++代码的生命周期绑定到js上
- 绑定后，
  - 当js对象创建时，则c++代码的对象实例也将被创建
  - 当js对象上的方法（通过InstanceMethod定义的），则c++对象上的实例方法也将被调用
  - 当js对象被垃圾收集后，c++的析构函数会在之后一段时间被调用。


`addon.cc`

```c++
#include "./MyObject.hh"

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    MyObject::Init(env, exports);
    return exports;
}
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

`MyObject.hh`

```c++
#include <napi.h>
#ifndef __MY_OBJECT__
#define __MY_OBJECT__

class MyObject : public Napi::ObjectWrap<MyObject>
{
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  MyObject(const Napi::CallbackInfo &info);

private:
  double value;
  Napi::Value GetVal(const Napi::CallbackInfo &info);
  void AddVal(const Napi::CallbackInfo &info);
  void MutVal(const Napi::CallbackInfo &info);
};

#endif
```

`MyObject.cc`

```c++
#include "MyObject.hh"

// 实现构造函数
MyObject::MyObject(const Napi::CallbackInfo &info)
    // ↓ c++ 语法 ，调用父级的构造函数
    : Napi::ObjectWrap<MyObject>(info)
{
  Napi::Env env = info.Env();

  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  // 初始化value
  double val = info[0].As<Napi::Number>().ToNumber().DoubleValue();
  this->value = val;
}
/**
 * 获取value的值
 */
Napi::Value MyObject::GetVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::Number::New(env, this->value);
}

/**
 * 加上一个数
 */
void MyObject::AddVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value += info[0].As<Napi::Number>().ToNumber().DoubleValue();
}
void MyObject::MutVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value *= info[0].As<Napi::Number>().ToNumber().DoubleValue();
}

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports)
{
  Napi::Function MyObjectClassConstructerFun =
      // ↓ node-addon-api/doc/object_wrap.md
      DefineClass(
          env,
          "MyObject",
          {
              // ↓ node-addon-api/doc/instance_wrap.md
              InstanceMethod("GetVal", &MyObject::GetVal),
              InstanceMethod("AddVal", &MyObject::AddVal),
              InstanceMethod("MutVal", &MyObject::MutVal),
          });

  // 保证构造函数引用不被GC
  // ↓ node-addon-api/doc/function_reference.md
  Napi::FunctionReference *funRef = new Napi::FunctionReference();
  *funRef = Napi::Persistent(MyObjectClassConstructerFun);
  env.SetInstanceData(funRef);

  exports.Set("MyObject", MyObjectClassConstructerFun);
  return exports;
}
```


`binding.gyp`
```json
{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": [
        "src/addon.cc",
        "src/MyObject.cc"
        ],
      "include_dirs": [
        "src/MyObject.hh",
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api"
      ]
    }
  ],
}
```

`index.js`

```js
#! node
var addon = require('bindings')('hello_world');

let MyObject = addon.MyObject

console.log(MyObject.toString()) // function MyObject() { [native code] }

let myObj = new MyObject(1)

console.log(myObj.GetVal()) // 1
console.log(myObj.AddVal(10)) // undefined 
console.log(myObj.GetVal()) // 11 
console.log(myObj.MutVal(10)) // undefined
console.log(myObj.GetVal()) // 110
```


## Factory_Of_ObjectWrap

添加接口`NewInstance`

```c++
#include <napi.h>
#ifndef __MY_OBJECT__
#define __MY_OBJECT__

class MyObject : public Napi::ObjectWrap<MyObject>
{
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  static Napi::Object NewInstance(Napi::Env env, Napi::Value arg);
  MyObject(const Napi::CallbackInfo &info);

private:
  double value;
  Napi::Value GetVal(const Napi::CallbackInfo &info);
  void AddVal(const Napi::CallbackInfo &info);
  void MutVal(const Napi::CallbackInfo &info);
};

#endif
```

实现接口`NewInstance`

```c++
#include "MyObject.hh"

// 实现构造函数
MyObject::MyObject(const Napi::CallbackInfo &info)
    // ↓ c++ 语法 ，调用父级的构造函数
    : Napi::ObjectWrap<MyObject>(info)
{
  Napi::Env env = info.Env();

  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  // 初始化value
  double val = info[0].As<Napi::Number>().ToNumber().DoubleValue();
  this->value = val;
}

Napi::Value MyObject::GetVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::Number::New(env, this->value);
}
void MyObject::AddVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value += info[0].As<Napi::Number>().ToNumber().DoubleValue();
}
void MyObject::MutVal(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  // 期望得到一个number作为形参
  if (info.Length() < 1 || !info[0].IsNumber())
  {
    Napi::TypeError::New(env, "expected one number as arguments");
    return;
  }
  this->value *= info[0].As<Napi::Number>().ToNumber().DoubleValue();
}

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports)
{
  Napi::Function MyObjectClassConstructerFun =
      // ↓ node-addon-api/doc/object_wrap.md
      DefineClass(
          env,
          "MyObject",
          {
              // ↓ node-addon-api/doc/instance_wrap.md
              InstanceMethod("GetVal", &MyObject::GetVal),
              InstanceMethod("AddVal", &MyObject::AddVal),
              InstanceMethod("MutVal", &MyObject::MutVal),
          });

  // 保证构造函数引用不被GC
  // ↓ node-addon-api/doc/function_reference.md
  Napi::FunctionReference *funRef = new Napi::FunctionReference();
  *funRef = Napi::Persistent(MyObjectClassConstructerFun);
  env.SetInstanceData(funRef);

  exports.Set("MyObject", MyObjectClassConstructerFun);
  return exports;
}

Napi::Object MyObject::NewInstance(Napi::Env env, Napi::Value arg)
{
  // 获取构造函数
  Napi::FunctionReference *funRef = env.GetInstanceData<Napi::FunctionReference>();
  // 调用构造函数来创建实例对象
  Napi::Object obj = funRef->New({napi_value(arg)});

  // 为了得到能够逃离局部作用域后仍然能够存活的对象
  Napi::EscapableHandleScope scope(env);
  Napi::Object escapableObj = scope.Escape(napi_value(obj)).ToObject();

  return escapableObj;
}
```

导出接口`NewInstance`

```c++
#include "./MyObject.hh"

Napi::Object creatMyObject(Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::Value arg = info[0];

    return MyObject::NewInstance(env, arg);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    MyObject::Init(env, exports);
    exports.Set("creatMyObject", Napi::Function::New(env, creatMyObject));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
```

**测试接口**

```js
#! node
var addon = require('bindings')('hello_world');

let MyObject = addon.MyObject
let creatMyObject = addon.creatMyObject

console.log(MyObject.toString()) // function MyObject() { [native code] }

let myObj1 = new MyObject(1)

console.log(myObj1.GetVal()) // 1
console.log(myObj1.AddVal(10)) // undefined 
console.log(myObj1.GetVal()) // 11 
console.log(myObj1.MutVal(10)) // undefined
console.log(myObj1.GetVal()) // 110


let myObj2 = creatMyObject(1)

console.log(myObj2.GetVal()) // 1
console.log(myObj2.AddVal(10)) // undefined 
console.log(myObj2.GetVal()) // 11 
console.log(myObj2.MutVal(10)) // undefined
console.log(myObj2.GetVal()) // 110
```

## addon插件类

**线程安全问题**

- 全局数据存储在静态变量中并不安全
- 因为这样做没有考虑到插件可能会加载到多个线程中，
- 也没有考虑到插件可能会多次加载到单个线程中。

`Napi::Addon<T>`的作用

- 可以用于定义整个插件。
- 其子类由 Node.js 安全地存储在其**各个线程**上并存储到其**各个上下文**中。


`Napi::Addon<T>`的使用

- `Napi::Addon<T>::InstanceMethod`和`Napi::Addon<T>::DefineAddon`
  - 可以将`Napi::Addon`子类的实例方法暴露给JavaScript
  - 被暴露给JavaScript的这些实例方法可以访问存储在实例上的数据（线程安全）
- `Napi::Addon<T>::DefineProperties`
  - 可用于将`Napi::Addon<T>`子类的实例方法附加到另一个对象上。
- `NODE_API_ADDON()`或`NODE_API_NAMED_ADDON()`
  - 可以用来定义插件 

```c++
#include <napi.h>

// using namespace Napi;

class HelloAddon : public Napi::Addon<HelloAddon>
{
public:
  HelloAddon(Napi::Env env, Napi::Object exports)
  {
    // exports={"hello":hello}
    // napi_enumerable 可枚举属性
    // DefineAddon和InstanceMethod都是父类上的实例方法
    DefineAddon(exports, {InstanceMethod("hello", &HelloAddon::hello, napi_enumerable)});
  }

private:
  // function hello(){return "world"}
  Napi::Value hello(const Napi::CallbackInfo &info)
  {
    return Napi::String::New(info.Env(), "world");
  }
};

// NODE_API_NAMED_ADDON(NODE_GYP_MODULE_NAME, HelloAddon)
NODE_API_ADDON(HelloAddon)
```

```js
var addon = require('bindings')('hello_world');

console.log(addon.hello()); // 'world'
```
