---
title: 设计模式学习笔记(Java版)
date: 2023-01-11 05:00:00+08:00
cover: ./cover/23种设计模式学习笔记.png
tag: [笔记,设计模式,design pattens,java]
category: 笔记
article: false
---

## 设计模式学习笔记(Java 版)

![](./cover/23种设计模式学习笔记.png)

## 目录

- [设计模式学习笔记(Java 版)](#设计模式学习笔记java-版)
- [目录](#目录)
- [概述](#概述)
- [统一建模语言中的类图](#统一建模语言中的类图)
- [软件设计原则](#软件设计原则)
  - [单一职责原则](#单一职责原则)
  - [开闭原则(Open Close Principle)](#开闭原则open-close-principle)
  - [里氏代换原则（Liskov Substitution Principle）](#里氏代换原则liskov-substitution-principle)
  - [依赖倒转原则（Dependence Inversion Principle）](#依赖倒转原则dependence-inversion-principle)
  - [接口隔离原则（Interface Segregation Principle）](#接口隔离原则interface-segregation-principle)
  - [迪米特法则（Demeter Principle）](#迪米特法则demeter-principle)
  - [合成复用原则（Composite Reuse Principle）](#合成复用原则composite-reuse-principle)
- [创建型模式](#创建型模式)
  - [\_1\_单例设计模式（Singleton Pattern）](#_1_单例设计模式singleton-pattern)
    - [饿汉单例](#饿汉单例)
    - [懒汉单例](#懒汉单例)
    - [通过对象序列化破坏单例模式](#通过对象序列化破坏单例模式)
    - [防止对象序列化破坏单例模式](#防止对象序列化破坏单例模式)
    - [通过反射破坏单例设计模式](#通过反射破坏单例设计模式)
    - [防止反射破坏单例设计模式](#防止反射破坏单例设计模式)
  - [工厂模式](#工厂模式)
  - [简单工厂模式(不属于 23 种经典设计模式)](#简单工厂模式不属于-23-种经典设计模式)
  - [\_2\_工厂方法模式](#_2_工厂方法模式)
  - [\_3\_抽象工厂模式](#_3_抽象工厂模式)

## 概述

**学习目的:**

提高代码的

- `可复用性`（相同功能的代码只写一次）
- `可读性`(编程规范，便于其他程序员阅读和理解)
- `可扩展性(可维护性)`(增添新功能方便)
- `可靠性`(增加或减少功能后不影响原有功能)
- 使得程序
  - `高内聚`(模块内部紧密)
  - `低耦合`（模块和模块之间低耦合）

**分类**

- **创建型**设计模式：单例、原型、工厂、抽象工厂、建造者
  - 将对象的创建和使用分离，完成了解构
- **结构型**设计模式：代理、适配器、桥接、装饰、外观、享元、组合
  - 解决如何将类和对象组成更大结构的问题
- **行为型**设计模式：模板方法、策略、命令、职责链、状态、观察者、中介者、迭代器、访问者、备忘录、解释器
  - 描述类和对象如何职责分配互相协作完成单个类无法完成的任务

## 统一建模语言中的类图

**统一建模语言和类图**

- **统一建模语言 UML** 是（Unified Modeling Language，UML）是用来**设计软件**的**可视化建模语言**。
- **类图 Class diagram** 是 UML 中的一部分，反映了模型的**静态结构**

**类图的格式**

- 类图**属性**的完整格式 ：`可见性 属性名: 类型 [=默认值]`
- 类图**方法**的完整格式 ：`可见性 方法名(形参列表)[:类型]`
- 表示可见性的三种符号
  - `+` public
  - `-` private
  - `#` protected
  - `` default

**类图示例**

```
+--------------------+
|      Employee      |
|--------------------|
| - name:String      |
| - age:int          |
| - address:String   |
|--------------------|
| + work():void      |
+--------------------+


+---------------------------------+
|             Example             |
|---------------------------------|
|                                 |
|---------------------------------|
| + method(int a,int b):void      |
+---------------------------------+
```

**类图表示法**

**关联关系**

1. **单向关联关系**

   - 一个类中的成员变量是另一个类
   - ![](./images/customer_address.png)

2. **双向关联关系**

   - 两个类各自持有对方的类型成员变量
   - ![](./images/customer_product.png)

3. **自关联关系**  
   ![](./images/node.png)

4. **聚合关联关系**

   - 是强关联关系
   - 成员对象是整体对象的一部分，但是成员对象可以脱离整体对象而独立存在。 ![](./images/image-20191229173422328.png)

5. **组合关联关系**

   - 是一种更强烈的聚合关系
   - 整体对象不存在，部分对象也将不存在，部分对象不能脱离整体对象而存在。 ![](./images/image-20191229173455149.png)

6. **依赖关系**

   - 对象之间耦合度最小的一种关系
   - 是一种使用关系,是某个类的方法通过方法的**形式参数**、**局部变量**、或者对**静态方法**的调用来访问另一个类（被依赖类）中的**某些方法**来完成一些职责
   - ![](./images/image-20191229173518926.png)

7. **继承关系(泛化关系)**
   - 对象之间耦合度最大的一种关系
   - 表示一般与特殊,父类与子类之间的关系
   - ![](./images/image-20191229173539838.png)

## 软件设计原则

设计原则是**编程应当遵守的规则**

**设计原则也是各种设计模式的基础**

设计原则是为了提高系统的 `可维护性`、`可复用性`、`可扩展性` 和 `灵活性`

### 单一职责原则

**一个类应该只负责一项职责**。

- > **原因：** 如果一个类 A 负责两项职责 a、b。当修改职责 a 时可能会导致修改类 A，从而导致影响到职责 b
- 就是各司其职,一`个类只只负责一项职责`
- 目的是降低类的复杂度，降低变更代码引起的风险，提高可维护性、可读性
- `通常情况应当遵守单一职责模式`，`除非`代码十分简单
- `也可以在方法的级别上遵守单一职责模式`，`但`方法的数量要足够少

**代码示例 1:待修改代码**

```java
package com.dyg;
public class SingleResponsbility1 {
 public static void main(String[] args) {
  Vehicle vehicle = new Vehicle();
  vehicle.run("小汽车");
  vehicle.run("飞机");
  vehicle.run("轮船");
 }
}

class Vehicle {
 void run(String name) {
  System.out.println(name + "在地面上跑...");
 }
}
```

**示例代码 2：**

在类的级别上按照单一职责设计模式修改

```java
package com.dyg;

public class SingleResponsbility2 {
 public static void main(String[] args) {
  new VehicleRoad().run("小汽车");
  new VehicleAir().run("飞机");
  new VehicleSea().run("轮船");
 }
}

class VehicleRoad {
 void run(String name) {
  System.out.println(name + "在地面上跑...");
 }
}

class VehicleAir {
 void run(String name) {
  System.out.println(name + "在天上飞...");
 }
}

class VehicleSea {
 void run(String name) {
  System.out.println(name + "在水里游...");
 }
}
```

**示例代码 3**：

在方法的级别上按照单一职责模式修改代码

```java
package com.dyg;

public class SingleResponsbility3 {
 public static void main(String[] args) {
  Vehicle3 vehicle = new Vehicle3();
  vehicle.runRoad("小汽车");
  vehicle.runAir("飞机");
  vehicle.runSea("轮船");
 }
}

class Vehicle3 {
 void runRoad(String name) {
  System.out.println(name + "在地面上跑...");
 }

 void runAir(String name) {
  System.out.println(name + "在天上飞...");
 }

 void runSea(String name) {
  System.out.println(name + "在水里游...");
 }
}
```

### 开闭原则(Open Close Principle)

**对扩展开放，对修改关闭**。

- 就是在需要扩展程序时，不去修改源代码
- 这将提高程序的可扩展性、易于维护和升级
- 这种效果需要使用`接口`或`抽象类`

![](./images/open-close.png)

案例：搜狗输入法对外提供修改默认皮肤的方法

```java
package com.dyg.openClose;

public class Test {
 public static void main(String[] args) {
  SouGouInput souGouInput = new SouGouInput();
  souGouInput.display();

  souGouInput.setSkin(new MySkin());// 修改皮肤
  souGouInput.display();
 }
}

// 抽象皮肤类
abstract class Skin {
 abstract void display();
}

// 默认皮肤
class DefaultSkin extends Skin {
 @Override
 void display() {
  System.out.println("默认皮肤");
 }
}

// 带有默认皮肤的输入法
class SouGouInput {
 private Skin skin = new DefaultSkin();

 public void setSkin(Skin skin) {
  this.skin = skin;
 }

 void display() {
  this.skin.display();
 }
}

// 用户自定义皮肤
class MySkin extends Skin {
 @Override
 void display() {
  System.out.println("自定义皮肤");
 }
}

```

### 里氏代换原则（Liskov Substitution Principle）

**任何基类可以出现的地方，子类也应当可以出现**

- 换句话说，子类可以扩展父类的功能，但不能改变父类原有的功能，
- 或者说，要尽量避免重写父类方法，**实在必要时，则需要十分谨慎**
- 否则，随意重写父类方法，会导致在使用多态特性时，程序出错概率增大。
- 该原则是面向对象设计的基本原则之一
- 该原则是对开闭原则的补充。
- 该原则是对实现抽象化的具体步骤的规范

### 依赖倒转原则（Dependence Inversion Principle）

- 针对接口编程，依赖于抽象而不依赖于具体。
- 这个原则是开闭原则的基础，

**如：**

电脑类应当依赖 CPU 的抽象类,但不应该依赖具体某个品牌的 CPU,具体品牌只是 CPU 抽象类的实现

**依赖倒转前** <img src="./images/依赖倒转原则.png" style="zoom:80%;" />

**依赖倒转后** <img src="./images/依赖倒转原则改进.png" alt="image-20191229173554296" style="zoom:70%;" />

### 接口隔离原则（Interface Segregation Principle）

- 客户端不应该被迫依赖它不使用的方法。
- 一个类对另一个类的依赖应当建立在最小接口上
- 使用多个隔离的接口，比使用单个接口要好。
- **目的**是降低依赖，降低类之间的耦合。
- **比如说**，有某个 C 类依赖 I 接口中的三个方法，但 I 接口中一共有 10 个方法，则应该把这三个方法单独拆分成另一个接口

### 迪米特法则（Demeter Principle）

- 也称最少知道原则
- **意思是：**一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。
- **或者说，**尽量多用 private 修饰方法，尽量少用 public 修饰方法

### 合成复用原则（Composite Reuse Principle）

- 是指：尽量使用合成/聚合的方式，而不是使用继承。

## 创建型模式

### _1_单例设计模式（Singleton Pattern）

- 是 Java 中最简单的设计模式之一。
- 属于创建型模式，它提供了一种创建对象的最佳方式。
- **意思是**让某个类只能创建(实例化)一个对象
  - 这包含两个类，单例类(只能被实例化一次的类)、访问类(访问单例类的类)

**分类及优缺点**

- **饿汉单例**：
  - 特点：类加载时创建对象
  - 优缺点：浪费内存，但性能好，获取实例对象时不需要再去创建了
- **懒汉单例**：
  - 特点：首次调用获取实例的方法时创建对象
  - 优缺点：不浪费内存，但**存在线程安全问题,需要用 `synchronized` 关键字来解决**

#### 饿汉单例

**java 版:静态成员变量法**

也可以用静态代码块的方式，不难，不写了

```java
package 创建型;
public class 单例设计模式_饿汉单例 {
 public static void main(String[] args) {
  Demo demo = Demo.getInstance();
  System.out.println(demo);
 }
}

class Demo {
 private Demo() {
  // 私有化构造函数,外界使用new直接创建对象就会报错
 }

 // 内部能访问私有化后的构造函数,所以此处能够实例化。
 // 静态成员变量意味着其会在类加载阶段被初始化
 private static Demo instanceHunger = new Demo();

 // 对外暴露一个获取实例对象的接口
 public static Demo getInstance() {
  return instanceHunger;
 }
}
```

**Java 枚举版**

使用枚举类是实现饿汉单例模式的最佳方法 它更简洁，自动支持序列化机制，绝对防止多次实例化。 能避免多线程同步问题，也能避免通过反射来破坏单例模式。

```java
package 创建型.单例设计模式.饿汉.枚举;

public class Test {
 public static void main(String[] args) {
  Demo demo0 = Demo.getInstance();
  demo0.doSomeThing();

  Demo demo1 = Demo.getInstance().getSelf();
  Demo demo2 = Demo.getInstance().getSelf();
  System.out.println(demo1 == demo2);
 }
}

enum Demo {
 INSTANCE;
 // 静态方法
 public static Demo getInstance() {
  return INSTANCE;
 }

 // 成员方法，属于INSTANCE
 public void doSomeThing() {
  System.out.println("hello");
 }

 // 成员方法，属于INSTANCE
 public Demo getSelf() {
  return this;
 }
}
```

**javascript 版**

```js
class Demo {
 constructor() {}
}

class DemoInstance {
 static instance = new Demo();
 static getInstance() {
  return this.instance;
 }
}

function main() {
 let i1 = DemoInstance.getInstance();
 let i2 = DemoInstance.getInstance();
 console.log(i1 == i2); // true
}

main();
```

#### 懒汉单例

**java 版 1:synchronized 加锁**

由于存在线程安全问题，所以需要使用 synchronized 关键字来解决，保证多个线程对该函数的调用是依次的、同步的

```java
package 创建型;

public class 单例设计模式_懒汉单例 {
 public static void main(String[] args) {
  Demo demo1 = Demo.getInstance();
  Demo demo2 = Demo.getInstance();
  System.out.println(demo1 == demo2);
 }
}

class Demo {
 private Demo() {
  // 私有化构造函数,外界使用new直接创建对象就会报错
 }

 private static Demo instance;

 // 由于存在线程安全问题，所以需要使用synchronized关键字来解决，保证多个线程对该函数的调用是依次的、同步的
 synchronized public static Demo getInstance() {
  if (instance == null)// 仅在第一次调用获取实例方法时创建实例对象
   instance = new Demo();
  return instance;
 }
}
```

**java 版 2:双重检查锁（DCL，即 double-checked locking）+`volatile`关键字**

由于线程安全问题只存在于写操作上，对整个函数加线程锁是有性能问题的，  
这将导致多个线程同时调用该函数时，将被强制依次访问  
解决的方法是双重检查锁, 仅在写操作上加锁

由于 JVM 在实例化对象时会进行优化和指令重排序操作，  
这将导致在多线程的情况下，双重检查锁依然可能会带来空指针问题，所以还需要使用 volatile 关键字,用它来保证指令的有序性

```java
package 创建型;

public class 单例设计模式_懒汉单例2 {
 public static void main(String[] args) {
  Demo demo1 = Demo.getInstance();
  Demo demo2 = Demo.getInstance();
  System.out.println(demo1 == demo2);
 }
}

class Demo {
 private Demo() {
  // 私有化构造函数,外界使用new直接创建对象就会报错
 }

 // 由于JVM在实例化对象时会进行优化和指令重排序操作，
 // 这将导致在多线程的情况下，双重检查锁依然可能会带来空指针问题，需要使用volatile关键字，
 // 用它来保证指令的有序性

 private static volatile Demo instance;
 private static Demo instance;

 // 由于线程安全问题只存在于写操作上，对整个函数加线程锁是有性能问题的，
 // 这将导致多个线程同时调用该函数时，将被强制依次访问
 // 解决的方法是双重检查锁, 仅在写操作上加锁
 synchronized public static Demo getInstance() {
  if (instance == null) {
   synchronized (instance) {// 锁住instance对象
    if (instance == null)// 重新进行判断
     instance = new Demo();// 赋值
   }
  }
  return instance;
 }
}
```

**java 版 3:利用 jvm 加载`静态内部类`的特性来实现**

- 开源项目中常用
- 无需加锁，线程安全
- 不影响性能，不浪费空间

由于 jvm 在加载类的字节码时，不会递归加载其静态的内部类，  
仅当内部类被访问时，其才会被加载

```java
package 创建型.懒汉单例3;

public class 单例设计模式_懒汉单例3 {
 public static void main(String[] args) {
  Demo demo1 = Demo.getInstance();
  Demo demo2 = Demo.getInstance();
  System.out.println(demo1 == demo2);
 }
}

class Demo {
 private Demo() {
  // 私有化构造函数,外界使用new直接创建对象就会报错
 }

 // 由于jvm在加载类的字节码时，不会递归加载其静态的内部类，
 // 仅当内部类被访问时，其才会被加载
 private static class InstanceHolder {
  // 私有、静态、最终....
  private static final Demo INSTANCE = new Demo();
 }

 public static Demo getInstance() {
  return InstanceHolder.INSTANCE;
 }
}
```

**javaScript 版**

js 是单线程，事件驱动，不用担心线程安全问题

```js
class Demo {
 constructor() {}
}

class DemoInstance {
 static instance;
 static getInstance() {
  if (this.instance == undefined) this.instance = new Demo();
  return this.instance;
 }
}

function main() {
 let i1 = DemoInstance.getInstance();
 let i2 = DemoInstance.getInstance();
 i1["test"] = "hhhh";
 console.log(i2["test"]); // "hhhh"
 console.log(i1 === i2); // true
}

main();
```

#### 通过对象序列化破坏单例模式

```java
package 创建型.单例设计模式.通过序列化破坏单例模式;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Test {
 public static void main(String[] args) throws Exception {
  Demo demo1 = Demo.getInstance();
  Utils.ObjToFile(demo1);
  Demo demo2 = (Demo) Utils.FileToObj();
  System.out.println(demo1 == demo2); // false
 }
}

class Demo implements Serializable {
 private Demo() {
 };

 private static Demo instance = new Demo();

 public static Demo getInstance() {
  return instance;
 }
}

class Utils {
 static void ObjToFile(Object object) throws Exception {
  ObjectOutput objectOutput = new ObjectOutputStream(new FileOutputStream("./temp"));
  objectOutput.writeObject(object);
  objectOutput.close();
 }

 static Object FileToObj() throws Exception {
  ObjectInput objectInput = new ObjectInputStream(new FileInputStream("./temp"));
  Object result = objectInput.readObject();
  objectInput.close();
  return result;
 }
}
```

#### 防止对象序列化破坏单例模式

只需要为其添加`public Object readResolve();`方法

```java
package 创建型.单例设计模式.防止序列化破坏单例模式;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Test {
 public static void main(String[] args) throws Exception {
  Demo demo1 = Demo.getInstance();
  Utils.ObjToFile(demo1);
  Demo demo2 = (Demo) Utils.FileToObj();
  System.out.println(demo1 == demo2); // true
 }
}

class Demo implements Serializable {
 private Demo() {
 };

 private static Demo instance = new Demo();

 public static Demo getInstance() {
  return instance;
 }

 // 反序列化时，如果该方法存在，就会调用这个方法
 public Object readResolve() {
  return instance;
 }
}

class Utils {
 static void ObjToFile(Object object) throws Exception {
  ObjectOutput objectOutput = new ObjectOutputStream(new FileOutputStream("./temp"));
  objectOutput.writeObject(object);
  objectOutput.close();
 }

 static Object FileToObj() throws Exception {
  ObjectInput objectInput = new ObjectInputStream(new FileInputStream("./temp"));
  Object result = objectInput.readObject();
  objectInput.close();
  return result;
 }
}
```

#### 通过反射破坏单例设计模式

```java
package 创建型.单例设计模式.通过反射破坏单例模式;

import java.lang.reflect.Constructor;

public class Test {
 public static void main(String[] args) throws Exception {
  Constructor constrator = Demo.class.getDeclaredConstructor();// 获取构造函数
  constrator.setAccessible(true);// 设置可访问性
  Demo demo1 = (Demo) constrator.newInstance();// 用构造函数创建对象
  Demo demo2 = (Demo) constrator.newInstance();// 用构造函数创建对象
  System.out.println(demo1 == demo2);// false
 }
}

class Demo {
 private Demo() {
 };

 private static Demo instance = new Demo();

 public static Demo getInstance() {
  return instance;
 }
}
```

#### 防止反射破坏单例设计模式

```java
package 创建型.单例设计模式.防止反射破坏单例模式;

import java.lang.reflect.Constructor;


public class Test {
 public static void main(String[] args) throws Exception {
  Constructor constrator = Demo.class.getDeclaredConstructor();// 获取构造函数
  constrator.setAccessible(true);// 设置可访问性
  Demo demo1 = (Demo) constrator.newInstance();// 用构造函数创建对象
  Demo demo2 = (Demo) constrator.newInstance();// 用构造函数创建对象
  System.out.println(demo1 == demo2);// false
 }
}

class Demo {
 private static boolean first = false;

 private Demo() {
  if (!first)
   throw new RuntimeException("不能创建多个:" + Demo.class.toString());
  first = true;
 };

 private static Demo instance = new Demo();

 public static Demo getInstance() {
  return instance;
 }
}
```

### 工厂模式

**意义：**

- 工厂模式的意义在于隐藏创建的细节
- 如：咖啡是否加糖，加奶
- 再比如，前端中，`new Image()` 后 为其设置`img.src`

### 简单工厂模式(不属于 23 种经典设计模式)

- 不属于 23 种经典设计模式
- 只是一种编程习惯
- 工厂的创建产品的方法经 static 修饰后便称**静态工厂模式**
- 结构
  - 抽象产品类
  - 具体产品类
  - 具体工厂类
- 优点：封装了对象的创建过程，实现了对象的创建和使用分离
- 缺点：新增产品时需要修改工厂的代码，不符合开闭原则

```java
package 创建型.工厂模式.简单工厂模式;

public class Test {
 public static void main(String[] args) {
  Store store = new Store();

  Coffee coffee1 = store.orderCoffee("美式咖啡");
  Coffee coffee2 = store.orderCoffee("卡布奇诺咖啡");

  System.out.println(coffee1.getName());
  System.out.println(coffee2.getName());
 }
}

abstract class Coffee {
 abstract String getName();

 // 链式写法，返回值也可以为void
 abstract Coffee addSuger();

 abstract Coffee addMilk();
}

// 工厂模式的意义在于隐藏创建的细节(是否加糖，加奶)
class SimpleCoffeeFactory {
 // 该函数经static修饰后便称静态工厂模式
 public Coffee getCoffeeByName(String name) {
  if (name == null)
   throw new RuntimeException("咖啡名称不能为null");
  switch (name) {
   case "美式咖啡":
    return new AmericaCoffee().addSuger();// 美式咖啡加糖
   case "卡布奇诺咖啡":
    return new CappuccinoCoffee().addMilk();// 卡布奇诺加牛奶
   default:
    throw new RuntimeException("咖啡名称不存在");
  }
 }
}

class Store {
 Coffee orderCoffee(String name) {
  return new SimpleCoffeeFactory().getCoffeeByName(name);
 }
}

class AmericaCoffee extends Coffee {
 @Override
 String getName() {
  return "美式咖啡";
 }

 @Override
 Coffee addMilk() {
  System.out.println("加牛奶");
  return this;
 }

 @Override
 Coffee addSuger() {
  System.out.println("加糖");
  return this;
 }
}

class CappuccinoCoffee extends Coffee {
 @Override
 String getName() {
  return "卡布奇诺咖啡";
 }

 @Override
 Coffee addMilk() {
  System.out.println("加牛奶");
  return this;
 }

 @Override
 Coffee addSuger() {
  System.out.println("加糖");
  return this;
 }
}
```

### _2_工厂方法模式

- 结构
  - 抽象工厂类
  - 抽象产品类
  - 具体产品类
  - 具体产品的具体工厂类
- 优点：
  - 用户只需知道具体工厂名称就可以得到想要的产品，无需知道产品的创建细节
  - 新增产品时，只需新增产品的工厂类，无需要修改工厂类的代码，满足开闭原则。
- 缺点：
  - 每增加一个产品就要新增产品的工厂类，增加了系统的复杂度。

```java
package 创建型.工厂模式.工厂方法模式;

public class Test {
 public static void main(String[] args) {
  Store store = new Store();

  store.setCoffeeFactory(new AmericaCoffeeFactory());
  Coffee coffee1 = store.orderCoffee();
  store.setCoffeeFactory(new CappuccinoCoffeeFactory());
  Coffee coffee2 = store.orderCoffee();

  System.out.println(coffee1.getName());
  System.out.println(coffee2.getName());
 }
}

// 抽象产品
abstract class Coffee {
 abstract String getName();

 Coffee addSuger() {
  System.out.println("加糖");
  return this;
 };

 Coffee addMilk() {
  System.out.println("加牛奶");
  return this;
 };
}

// 抽象工厂
abstract class CoffeeFactory {
 abstract Coffee getCoffee();
}

// 实体咖啡美式咖啡
class AmericaCoffee extends Coffee {
 @Override
 String getName() {
  return "美式咖啡";
 }
}

// 实体咖啡美式咖啡的工厂
class AmericaCoffeeFactory extends CoffeeFactory {

 @Override
 Coffee getCoffee() {
  return new AmericaCoffee().addMilk().addSuger();
 }

}

// 实体咖啡 卡布奇诺咖啡
class CappuccinoCoffee extends Coffee {
 @Override
 String getName() {
  return "卡布奇诺咖啡";
 }
}

// 实体咖啡卡布奇诺咖啡的工厂
class CappuccinoCoffeeFactory extends CoffeeFactory {

 @Override
 Coffee getCoffee() {
  return new CappuccinoCoffee().addMilk();
 }
}

class Store {
 CoffeeFactory coffeeFactory;

 Coffee orderCoffee() {
  return coffeeFactory.getCoffee();
 }

 public void setCoffeeFactory(CoffeeFactory coffeeFactory) {
  this.coffeeFactory = coffeeFactory;
 }
}
```

### _3_抽象工厂模式

- 优点：能保证客户端中始终只使用某一产品簇中的一组产品
- 缺点：新增产品时，所有工厂类都需要修改
- 使用场景，
  - 游戏人物的道具，衣服、裤子、鞋、等仅为某个游戏角色独有的道具和装扮。

```java
package 创建型.工厂模式.抽象工厂模式;

public class Test {
 public static void main(String[] args) {

  // StyleFactory factory = new AmericanStyleFactory();// 美式风格
  StyleFactory factory = new ItalyStyleFactory();// 意式风格


  Coffee coffee = factory.createCoffee();
  Dessert dessert = factory.createDessert();

  System.out.println(coffee.getName());
  dessert.show();

 }
}

// 抽象甜品类
abstract class Dessert {
 abstract void show();
}

// 抽象咖啡类
abstract class Coffee {
 abstract String getName();
}

// 抽象工厂
interface StyleFactory {
 Dessert createDessert();

 Coffee createCoffee();
}

// 美式风格工厂，生产 抹茶慕斯 和 美式咖啡
class AmericanStyleFactory implements StyleFactory {

 @Override
 public Dessert createDessert() {
  return new MatchaMousse();
 }

 @Override
 public Coffee createCoffee() {
  return new AmericaCoffee();
 }
}

// 意式风格工厂，生产 拿铁咖啡 和 提拉米苏
class ItalyStyleFactory implements StyleFactory {

 @Override
 public Dessert createDessert() {
  return new Tiramisu();
 }

 @Override
 public Coffee createCoffee() {
  return new LatteCoffee();
 }

}

// 美式咖啡
class AmericaCoffee extends Coffee {

 @Override
 String getName() {
  return "美式咖啡";
 }

}

// 抹茶慕斯
class MatchaMousse extends Dessert {

 @Override
 void show() {
  System.out.println("抹茶慕斯");
 }

}

// 拿铁咖啡
class LatteCoffee extends Coffee {

 @Override
 String getName() {
  return "拿铁咖啡";
 }

}

// 提拉米苏
class Tiramisu extends Dessert {

 @Override
 void show() {
  System.out.println("提拉米苏");
 }

}
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
