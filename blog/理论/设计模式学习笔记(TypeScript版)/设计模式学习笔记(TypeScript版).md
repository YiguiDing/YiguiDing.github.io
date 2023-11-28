---
title: 设计模式学习笔记(TypeScript版)
date: 2023-01-11 05:21:00+08:00
cover: ./cover/23种设计模式学习笔记.png
tag: [笔记,设计模式,design pattens,typescript]
category: 笔记
star: true
---

# 设计模式学习笔记(TypeScript版)

![](./cover/23种设计模式学习笔记.png)

## 目录

- [设计模式学习笔记(TypeScript版)](#设计模式学习笔记typescript版)
  - [目录](#目录)
  - [创建型:\_1\_工厂方法模式](#创建型_1_工厂方法模式)
  - [创建型:\_2\_抽象方法模式](#创建型_2_抽象方法模式)
  - [创建型:\_3\_单例模式](#创建型_3_单例模式)
  - [创建型:\_4\_建造者模式](#创建型_4_建造者模式)
  - [创建型:\_5\_原型模式](#创建型_5_原型模式)
  - [结构型:\_6\_适配器模式](#结构型_6_适配器模式)
    - [对象适配器模式](#对象适配器模式)
    - [类适配器模式](#类适配器模式)
  - [结构型:\_7\_桥接模式](#结构型_7_桥接模式)
  - [结构型:\_8\_组合模式](#结构型_8_组合模式)
  - [结构型:\_9\_装饰器](#结构型_9_装饰器)
  - [结构型:\_10\_外观模式](#结构型_10_外观模式)
  - [结构型:\_11\_享元模式](#结构型_11_享元模式)
  - [结构型:\_12\_代理模式](#结构型_12_代理模式)
  - [行为型:\_13\_责任链模式](#行为型_13_责任链模式)
  - [行为型:\_14\_命令模式](#行为型_14_命令模式)
  - [行为型:\_15\_解释器模式](#行为型_15_解释器模式)
  - [行为型:\_16\_迭代器模式](#行为型_16_迭代器模式)
  - [行为型:\_17\_中介者模式](#行为型_17_中介者模式)
  - [行为型:\_18\_备忘录模式](#行为型_18_备忘录模式)
  - [行为型:\_19\_观察者模式](#行为型_19_观察者模式)
  - [行为型:\_20\_状态模式](#行为型_20_状态模式)
  - [行为型:\_21\_策略模式](#行为型_21_策略模式)
  - [行为型:\_22\_模板方法模式](#行为型_22_模板方法模式)
  - [行为型:\_23\_访问者](#行为型_23_访问者)

## 创建型:_1_工厂方法模式

```ts
// 抽象动物
abstract class Animal {
 abstract getName(): string;
 abstract getAge(): number;
}
// 抽象动物工厂
abstract class AnimalFactory {
 abstract getAnimal(): Animal;
}
// 具体动物工厂，继承抽象动物工厂
class RandomAnimalFactory extends AnimalFactory {
 // 工厂负责封装创建的逻辑，比如这里封装的是随机产生动物的逻辑
 // 它的另一个优点是在动物的构造函数参数很多时，将产品的创建和使用解耦
 getAnimal(): Animal {
  switch (Math.floor(Math.random() * 2)) {
   case 0:
    return new Dog("Fido", 12);
   case 1:
    return new Cat("Garfield", 15);
   default:
    return new Dog("Unknown", 12);
  }
 }
}
// 具体动物类，继承抽象动物
class Dog extends Animal {
 constructor(private name: string, private age: number) {
  super();
  this.name = name;
  this.age = age;
 }
 getName(): string {
  return this.name;
 }
 getAge(): number {
  return this.age;
 }
}
// 具体动物类，继承抽象动物
class Cat extends Animal {
 constructor(private name: string, private age: number) {
  super();

  this.name = name;
  this.age = age;
 }
 getName(): string {
  return this.name;
 }
 getAge(): number {
  return this.age;
 }
}


function main() {
 let animal = new RandomAnimalFactory().getAnimal();
 console.log(animal.getName());
}

main();

```

## 创建型:_2_抽象方法模式

```ts
// 抽象按钮组件
abstract class ComponentButton {
 abstract getName(): string;
}
// 抽象消息框组件
abstract class ComponentMessageBox {
 abstract getName(): string;
}

// 抽象UI工厂
// 后续将实现实际工厂类A,用能创建实际按钮类a1和实际消息框类a2,他们是一组互相兼容的组件
// 后续将实现实际工厂类B,用能创建实际按钮类b1和实际消息框类b2,他们是一组互相兼容的组件
// 后续将实现实际工厂类C,用能创建实际按钮类c1和实际消息框类c2,他们是一组互相兼容的组件
abstract class UIFactory {
 abstract getComponentButton(): ComponentButton;
 abstract getComponentMessageBox(): ComponentMessageBox;
}

class MacOsButton extends ComponentButton {
 getName(): string {
  return "MacOsButton";
 }
}
class MacOsMessageBox extends ComponentMessageBox {
 getName(): string {
  return "MacOsMessageBox";
 }
}
class WindowsButton extends ComponentButton {
 getName(): string {
  return "WindowsButton";
 }
}
class WindowsMessageBox extends ComponentMessageBox {
 getName(): string {
  return "WindowsMessageBox";
 }
}
class LinuxButton extends ComponentButton {
 getName(): string {
  return "LinuxButton";
 }
}
class LinuxMessageBox extends ComponentMessageBox {
 getName(): string {
  return "LinuxMessageBox";
 }
}

class MacOsUIFactory extends UIFactory {
 getComponentButton(): ComponentButton {
  return new MacOsButton();
 }
 getComponentMessageBox(): ComponentMessageBox {
  return new MacOsMessageBox();
 }
}

class WindowsUIFactory extends UIFactory {
 getComponentButton(): ComponentButton {
  return new WindowsButton();
 }
 getComponentMessageBox(): ComponentMessageBox {
  return new WindowsMessageBox();
 }
}

class LinuxUIFactory extends UIFactory {
 getComponentButton(): ComponentButton {
  return new LinuxButton();
 }
 getComponentMessageBox(): ComponentMessageBox {
  return new LinuxMessageBox();
 }
}

function main() {
 // let factory = new MacOsUIFactory();  // Mac OS UI
 // let factory = new WindowsUIFactory(); // Windows UI
 let factory = new LinuxUIFactory(); // Linux UI

 let componentButton = factory.getComponentButton();
 let componentMessageBox = factory.getComponentMessageBox();

 console.log(componentButton.getName());
 console.log(componentMessageBox.getName());
}

main();

```

## 创建型:_3_单例模式

```ts
// 单例模式保证类只被实例化一次，防止只需要一个实例对象但却被重复实例化，浪费资源
class ImgDog extends HTMLImageElement {
 // 私有化构造方法
 private constructor() {
  super();
 }
 // 私有静态属性
 private static INSTANCE = new ImgDog();
 // 静态代码块
 static {
  ImgDog.INSTANCE.src = "image.png"; // 初始化
 }
 // 静态方法，获取img实例
 public static getInstance(): HTMLImageElement {
  return ImgDog.INSTANCE;
 }
}

function main() {
 const imgDog1 = ImgDog.getInstance();
 const imgDog2 = ImgDog.getInstance();
 console.log(imgDog1 == imgDog2);
}

main();
```

## 创建型:_4_建造者模式

```ts
// 车架
class Frame {
 name: string;
 constructor(name: string) {
  this.name = name;
 }
}
// 车座
class Seat {
 name: string;
 constructor(name: string) {
  this.name = name;
 }
}

// 自行车
class Bike {
 private Brand: string;
 private frame: Frame;
 private seat: Seat;
 setBrand(name: string) {
  this.Brand = name;
 }
 setFrame(frame: Frame) {
  this.frame = frame;
 }
 setSeat(seat: Seat) {
  this.seat = seat;
 }
}

// 自行车建造者
abstract class BikeBuidler {
 bike = new Bike();
 abstract buildFrame(): void;
 abstract buildSeat(): void;
 abstract getResult(): Bike;
}

// 指挥者，指挥建造者
class Director {
 constructor(private bikeBuilder: BikeBuidler) {
  this.bikeBuilder = bikeBuilder;
 }
 construct(): Bike {
  this.bikeBuilder.buildFrame();
  this.bikeBuilder.buildSeat();
  return this.bikeBuilder.getResult();
 }
}

// ofo 自行车的建造者
class OfoBikeBuilder extends BikeBuidler {
 constructor() {
  super();
  this.bike.setBrand("Ofo Bike"); // 设置品牌
 }
 buildFrame(): void {
  this.bike.setFrame(new Frame("铝合金车架")); // 建造和组装车脚
 }
 buildSeat(): void {
  this.bike.setSeat(new Seat("海绵坐垫")); // 建造和组装车座
 }
 getResult(): Bike {
  return this.bike;
 }
}

// mobile 自行车的建造者
class MobileBikeBuilder extends BikeBuidler {
 constructor() {
  super();
  this.bike.setBrand("Mobile Bike"); // 设置品牌
 }
 buildFrame(): void {
  this.bike.setFrame(new Frame("碳纤维车架")); // 建造和组装车脚
 }
 buildSeat(): void {
  this.bike.setSeat(new Seat("真皮坐垫")); // 建造和组装车座
 }
 getResult(): Bike {
  return this.bike;
 }
}

function main() {
 var ofoBike = new Director(new OfoBikeBuilder()).construct();
 var mobBike = new Director(new MobileBikeBuilder()).construct();
 console.log(ofoBike);
 console.log(mobBike);
}

main();

/*
输出：

Bike {
  Brand: 'Ofo Bike',
  frame: Frame { name: '铝合金车架' },
  seat: Seat { name: '海绵坐垫' }
}

Bike {
  Brand: 'Mobile Bike',
  frame: Frame { name: '碳纤维车架' },
  seat: Seat { name: '真皮坐垫' }
}
*/
```

## 创建型:_5_原型模式

```ts
interface Clonable {
 deepClone(): Clonable;
 clone(): Clonable;
}

class Demo implements Clonable {
 name = "Demo";
 list = [];
 clone(): Demo {
  return Object.assign(new Demo(), this); // 浅拷贝
 }
 deepClone(): Demo {
  // return JSON.parse(JSON.stringify(this)); // 深拷贝，JSON序列化和反序列化，但其原型对象为{}
  return Object.assign(new Demo(), JSON.parse(JSON.stringify(this))); // 深克隆，原型对象为自身
 }
}

function main() {
 var demo1 = new Demo();
 var demo2 = demo1.deepClone();
 console.log(demo1);
 console.log(demo2);
 console.log(demo1 == demo2);
 console.log(demo1.list == demo2.list); // fasle 深克隆

 var demo3 = new Demo();
 var demo4 = demo3.clone();
 console.log(demo3);
 console.log(demo4);
 console.log(demo3 == demo4);
 console.log(demo3.list == demo4.list); // true 浅拷贝
}

main();
```

## 结构型:_6_适配器模式

### 对象适配器模式

```ts
// 对象适配器模式就是以实现接口和聚合的方式来实现适配器

// 1. 有一个旧接口 有一个旧的类 ，旧的类实现了旧的接口

// 被适配的接口，旧的接口
interface OldUserInterface {
 GetUserName(): string; // 旧的命名规范是函数开头大写
}
// 旧的User对象，实现的是旧的接口
class OldUser implements OldUserInterface {
 GetUserName(): string {
  return "Old_DingYigui";
 }
}

// 2. 有一个新的接口 也有新的实现了该接口的类，但不重要，还有一个函数，他的形参要求是一个实现了新接口的对象

// 目标接口，新的接口
interface NewUserInterface {
 getUserName(): string; // 新的命名规范是函数开头小写
}
// 新的User类 但不重要
class NewUser implements NewUserInterface {
 getUserName(): string {
  return "New_DingYigui";
 }
}
// 根据新接口编写的函数：
// 某函数期待的对象是实现了新用户接口的类
function welcome(user: NewUserInterface) {
 console.log("欢迎你：" + user.getUserName());
}

// 3. 定义适配器，使得 旧User接口 能够适配 新User接口

// 旧的User对象 为了适配新的接口 所以实现新的接口，然后通过聚合的方式调用旧对象上的对应方法
class OldUserToNewUser_Adapter implements NewUserInterface {
 constructor(private OldUser: OldUserInterface) {
  this.OldUser = OldUser;
 }
 getUserName(): string {
  return this.OldUser.GetUserName();
 }
}

function main() {
 // 报错，因为不适配
 // welcome(new OldUser()); // 因为函数要求形参是一个NewUserInterface类型 但 OldUser 是OldUserInterface类型

 // 经过适配器的转换，不报错
 welcome(new OldUserToNewUser_Adapter(new OldUser())); // 因为 旧的User对象 放入 适配器 就能满足welcome函数形参的接口要求了
}
main();
```

### 类适配器模式

```ts
// 对象适配器模式就是以实现接口和聚合的方式来实现适配器

// 1. 有一个旧接口 有一个旧的类 ，旧的类实现了旧的接口

// 被适配的接口，旧的接口
interface OldUserInterface {
 GetUserName(): string; // 旧的命名规范是函数开头大写
}
// 旧的User对象，实现的是旧的接口
class OldUser implements OldUserInterface {
 GetUserName(): string {
  return "Old_DingYigui";
 }
}

// 2. 有一个新的接口 也有新的实现了该接口的类，但不重要，还有一个函数，他的形参要求是一个实现了新接口的对象

// 目标接口，新的接口
interface NewUserInterface {
 getUserName(): string; // 新的命名规范是函数开头小写
}
// 新的User类 但不重要
class NewUser implements NewUserInterface {
 getUserName(): string {
  return "New_DingYigui";
 }
}
// 根据新接口编写的函数：
// 某函数期待的对象是实现了新用户接口的类
function welcome(user: NewUserInterface) {
 console.log("欢迎你：" + user.getUserName());
}

// 3.定义新版本的OldUser，继承旧User对象， 实现新接口，使其适配新接口

class OldUserToNewUser_Adapter extends OldUser implements NewUserInterface {
 constructor() {
  super();
 }
 getUserName(): string {
  return this.GetUserName();
 }
}

function main() {
 // 报错，因为不适配
 // welcome(new OldUser()); // 因为函数要求形参是一个NewUserInterface类型 但 OldUser 是OldUserInterface类型

 // 经过适配器的转换，不报错
 welcome(new OldUserToNewUser_Adapter());
}
main();
```

## 结构型:_7_桥接模式

```ts
// 桥接模式和策略模式有些相似，
// 共同点是，都是一个对象对另一个接口的聚合
// 区别是，
// 策略模式是在强调：`具体类`对接口的聚合，多个实现类实现该接口
// 桥接模式是在强调：`抽象类`对接口的聚合，多个实现类实现该接口，多个具体类继承抽象类
// 策略模式属于行为模式，桥接模式属于结构型模式
// 案例：
// 策略模式：我要画圆。要实心圆，我能够用solidPen来配置。画虚线圆能够用dashedPen来配置。
// 桥接模式：同样是画圆，在windows下来画实心圆。就用windowPen+solidPen来配置。在unix下画实心圆就用unixPen+solidPen来配置。假设要再windows下画虚线圆。就用windowsPen+dashedPen来配置，要在unix下画虚线圆，就用unixPen+dashedPen来配置。
// 画圆方法中，策略仅仅是考虑算法的替换，而桥接考虑的则是不同平台下须要调用不同的工具，接口仅仅是定义一个方法。而详细实现则由详细实现类完毕。

// 文件系统
interface myFileSystem {
 readFile(path: string): string;
 writeFile(path: string, data: string): void;
}

// 操作系统
abstract class OS {
 abstract fs: myFileSystem; // 操作系统聚合文件系统接口
 abstract readFile(path: string): string;
 abstract writeFile(path: string, data: string): void;
}

class Fat32 implements myFileSystem {
 readFile(path: string): string {
  console.log("reading file from fat32");
  return "reading file from fat32";
 }
 writeFile(path: string, data: string): void {
  console.log("writing file to fat32");
 }
}
class NTFS implements myFileSystem {
 readFile(path: string): string {
  console.log("reading file from ntfs");
  return "reading file from ntfs";
 }
 writeFile(path: string, data: string): void {
  console.log("writing file to ntfs");
  return;
 }
}

class WindowOS implements OS {
 fs: myFileSystem;
 constructor(fs: myFileSystem) {
  this.fs = fs;
 }
 readFile(path: string): string {
  console.log("windows is reading file");
  return this.fs.readFile(path);
 }
 writeFile(path: string, data: string): void {
  console.log("windows is writing file");
  return this.fs.writeFile(path, data);
 }
}

class Unix implements OS {
 fs: myFileSystem;
 constructor(fs: myFileSystem) {
  this.fs = fs;
 }
 readFile(path: string): string {
  console.log("unix is reading file");
  return this.fs.readFile(path);
 }
 writeFile(path: string, data: string): void {
  console.log("unix is writing file");
  return this.fs.writeFile(path, data);
 }
}

function main() {
 var windowOS = new WindowOS(new Fat32()); // Windows with fat32
 var windowOS = new WindowOS(new NTFS()); // Windows with ntfs
 windowOS.readFile("/code/123.txt");
 windowOS.writeFile("/code/123.txt", "123");

 var unixOS = new Unix(new NTFS()); //unix with ntfs
 var unixOS = new Unix(new Fat32()); // unix with fat32
 unixOS.readFile("/code/123.txt");
 unixOS.writeFile("/code/123.txt", "123");
}

main();
```

## 结构型:_8_组合模式

```ts
interface Component {
 getName(): string;
 getLevel(): number;
 doSomething(): void;
 print(): void;
 getSize(): number;
}
interface MenuComponent extends Component {
 childs: Array<Component>;
 add(component: Component): MenuComponent;
 remove(component: Component): MenuComponent;
}
interface ItemComponent extends Component {}

class MenuComponent implements MenuComponent {
 public childs: Array<Component> = [];
 constructor(private name: string, private level: number) {
  this.name = name;
  this.level = level;
 }
 getName() {
  return this.name;
 }
 getLevel() {
  return this.level;
 }
 add(component: Component) {
  this.childs.push(component);
  return this;
 }
 remove(component: Component) {
  this.childs.splice(this.childs.indexOf(component), 1);
  return this;
 }
 doSomething() {
  this.childs.forEach(item => item.doSomething());
 }
 print(): void {
  var array = new Array(this.getLevel() - 1).fill("\t");
  array.push(this.name);
  console.log(...array);
  this.childs.forEach(item => item.print());
 }
 getSize() {
  let size = 0;
  this.childs.forEach(item => (size += item.getSize()));
  return size;
 }
}

class ItemComponent implements ItemComponent {
 constructor(private name: string, private level: number, private size: number) {
  this.name = name;
  this.level = level;
  this.size = size;
 }
 getName() {
  return this.name;
 }
 getLevel() {
  return this.level;
 }
 doSomething() {
  console.log("doSomething");
 }
 print(): void {
  var array = new Array(this.getLevel() - 1).fill("\t");
  array.push(this.name);
  console.log(...array);
 }
 getSize() {
  return this.size;
 }
}

function main() {
 const menuRootComponent = new MenuComponent("MenuRoot", 1);
 menuRootComponent
  .add(new ItemComponent("Item", 2, 1))
  .add(new ItemComponent("Item", 2, 1))
  .add(new MenuComponent("Menu", 2).add(new ItemComponent("Item", 3, 1)).add(new ItemComponent("Item", 3, 1)).add(new ItemComponent("Item", 3, 1)))
  .add(
   new MenuComponent("Menu", 2)
    .add(new ItemComponent("Item", 3, 1))
    .add(new ItemComponent("Item", 3, 1))
    .add(new ItemComponent("Item", 3, 1))
    .add(
     new MenuComponent("Menu", 3).add(new ItemComponent("Item", 4, 1)).add(new ItemComponent("Item", 4, 1)).add(new ItemComponent("Item", 4, 1))
    )
  );
 console.log("size:", menuRootComponent.getSize());
 console.log(JSON.stringify(menuRootComponent, null, 4));
 menuRootComponent.print();
 menuRootComponent.doSomething();
}
main();

/*
 * Output:

{
    "name": "MenuRoot",
    "level": 1,
    "childs": [
        {
            "name": "Item",
            "level": 2
        },
        {
            "name": "Item",
            "level": 2
        },
        {
            "name": "Menu",
            "level": 2,
            "childs": [
                {
                    "name": "Item",
                    "level": 3
                },
                {
                    "name": "Item",
                    "level": 3
                },
                {
                    "name": "Item",
                    "level": 3
                }
            ]
        },
        {
            "name": "Menu",
            "level": 2,
            "childs": [
                {
                    "name": "Item",
                    "level": 3
                },
                {
                    "name": "Item",
                    "level": 3
                },
                {
                    "name": "Item",
                    "level": 3
                },
                {
                    "name": "Menu",
                    "level": 3,
                    "childs": [
                        {
                            "name": "Item",
                            "level": 4
                        },
                        {
                            "name": "Item",
                            "level": 4
                        },
                        {
                            "name": "Item",
                            "level": 4
                        }
                    ]
                }
            ]
        }
    ]
}





MenuRoot
         Item
         Item
         Menu
                 Item
                 Item
                 Item
         Menu
                 Item
                 Item
                 Item
                 Menu
                         Item
                         Item
                         Item
*/
```

## 结构型:_9_装饰器

```ts
// 咖啡类
abstract class Coffee {
 abstract getDescription(): string;
 abstract getCost(): number;
}
// 咖啡类的装饰器：继承咖啡类，并聚合咖啡类
abstract class CoffeeDecorator extends Coffee {
 beDecorated: Coffee; // 被装饰的咖啡
 constructor(beDecorated: Coffee) {
  super();
  this.beDecorated = beDecorated;
 }
}

// 美式咖啡
class AmericaCoffee extends Coffee {
 getDescription() {
  return "American coffee";
 }
 getCost() {
  return 10;
 }
}
// 意式咖啡
class ItalyCoffee extends Coffee {
 getDescription() {
  return "Italian coffee";
 }
 getCost() {
  return 20;
 }
}

// 加糖
class SugerCoffeeDecorator extends CoffeeDecorator {
 constructor(public beDecorated: Coffee) {
  super(beDecorated);
 }
 getDescription() {
  return this.beDecorated.getDescription() + " with Suger"; // 装饰后的描述是原描述+" with Suger"
 }
 getCost() {
  return this.beDecorated.getCost() + 1; // 装饰后的价格是原价格+1
 }
}
// 加牛奶
class MilkCoffeeDecorator extends CoffeeDecorator {
 constructor(public beDecorated: Coffee) {
  super(beDecorated);
 }
 getDescription() {
  return this.beDecorated.getDescription() + " with Milk";
 }
 getCost() {
  return this.beDecorated.getCost() + 5;
 }
}

function main() {
 let americaCoffee = new AmericaCoffee(); // 美式咖啡
 let decoratedWithSuger = new SugerCoffeeDecorator(americaCoffee); // 美式咖啡加糖
 let decoratedWithMilk = new MilkCoffeeDecorator(decoratedWithSuger); // 美式咖啡加糖后再加牛奶

 console.log(decoratedWithMilk.getDescription());
 console.log(decoratedWithMilk.getCost());
}
main();
```

## 结构型:_10_外观模式

```ts
// 外观模式非常简单，就是对于一个使用起来复杂度较高的系统，另外封装成一个类，
// 让这个类来接管如何使用这个系统，这种写法平时也会自然而然的写出来，没啥好说的

import { Game } from "./Game";

function main() {
 let game = new Game(); // 外观模式，把整个系统的复杂的调用细节再封装为一个类，通过这个类来运行这个系统
 game.start();
}
main();
```

## 结构型:_11_享元模式

```ts
// 享元模式的概念和单例的概念有些类似，
// 但单例模式是一个对象只能被创建一个
// 享元模式是，一个对象能够被创建多次，但只是通过一个共享容器，让具有某一条件的对象只被初始化一次，而这种具体的条件可以很灵活的由创建工厂来控制
interface Shape {
 draw(): void;
}
class Box implements Shape {
 constructor(
  // private posX: number, // 要被共享，就只应当具有公共不变的属性
  // private posY: number,
  private width: number,
  private height: number,
  private color: string
 ) {
  // this.posX = posX;
  // this.posY = posY;
  this.width = width;
  this.height = height;
  this.color = color;
 }
 setColor(color: string): void {
  this.color = color;
 }
 draw(): void {
  console.log(JSON.stringify(this, undefined, 4));
 }
}

class BoxFactory {
 static boxMap = new Map<string, Box>();
 static getBox(color: string): Box {
  if (this.boxMap.has(color)) {
   return this.boxMap.get(color) as Box;
  } else {
   var box = new Box(100, 100, color);
   this.boxMap.set(color, box);
   return box;
  }
 }
}

function main() {
 var box1 = BoxFactory.getBox("red");
 var box2 = BoxFactory.getBox("red");
 var box3 = BoxFactory.getBox("pink");
 console.log(new Box(100, 100, "red") == new Box(100, 100, "red")); // 重复创建对象 不是同一个对象
 console.log(box1 == box2); // 是同一个对象，避免了重复创建对象，节省了内存
 console.log(box2 == box3); // 不是同一个对象，对于不存在的对象，会在第一次创建对象，
}
main();
```

## 结构型:_12_代理模式

```ts
interface interfaceA {
 methodA(): void;
 methodB(): void;
}

class A implements interfaceA {
 methodA(): void {
  console.log("A:methodA");
 }

 methodB(): void {
  console.log("A:methodB");
 }
}

class ProxyA implements interfaceA {
 constructor(private a: A) {
  this.a = a;
 }
 methodA(): void {
  console.log("Proxy:MethodA");
  this.a.methodA();
 }
 methodB(): void {
  console.log("Proxy:MethodB");
  this.a.methodB();
 }
}

function main() {
 let proxyA = new ProxyA(new A());
 proxyA.methodA();
 proxyA.methodB();
}
main();
```

## 行为型:_13_责任链模式

```ts
abstract class AbsLogger {
 private level: number;
 private next: AbsLogger | null;
 setLevel(level: number): AbsLogger {
  this.level = level;
  return this;
 }
 setNext(next: AbsLogger | null): AbsLogger {
  this.next = next;
  return this;
 }
 public logMsg(level: number, msg: string) {
  if (this.level >= level) {
   this.write(level, msg);
  } else if (this.next) {
   this.next.logMsg(level, msg);
  }
 }
 abstract write(level: number, msg: string): void;
}

class ErrorLogger extends AbsLogger {
 public write(level: number, msg: string) {
  console.warn("error:", level, msg);
 }
}
class DebugLogger extends AbsLogger {
 public write(level: number, msg: string) {
  console.log("debug:", level, msg);
 }
}
class InfoLogger extends AbsLogger {
 public write(level: number, msg: string) {
  console.log("info:", level, msg);
 }
}

class LoggerChain {
 private static head: AbsLogger;
 private constructor() {}
 static {
  var info = new InfoLogger();
  var debug = new DebugLogger();
  var error = new ErrorLogger();
  info.setLevel(3).setNext(debug);
  debug.setLevel(2).setNext(error);
  error.setLevel(1).setNext(null);
  LoggerChain.head = info;
 }
 static getLogger() {
  return LoggerChain.head;
 }
}

function main() {
 LoggerChain.getLogger().logMsg(3, "ha ha ha ha");
 LoggerChain.getLogger().logMsg(2, "ha ha ha ha");
 LoggerChain.getLogger().logMsg(1, "ha ha ha ha");
}

main();
```

## 行为型:_14_命令模式

```ts
// 命令接口
interface ICommand {
 execute(): void;
 unexecute(): void;
}

// 灯
class Ligtht {
 turnOn() {
  console.log("light is turn on"); // 开灯
 }
 turnOff() {
  console.log("light is turn off"); // 关灯
 }
 down() {
  console.log("light is down"); // 降低亮度
 }
 up() {
  console.log("light is up"); // 调高亮度
 }
}

// 开灯命令
class LightTurnOnCommand implements ICommand {
 constructor(private ligtht: Ligtht) {
  this.ligtht = ligtht;
 }
 execute(): void {
  this.ligtht.turnOn(); // 执行命令
 }
 unexecute(): void {
  this.ligtht.turnOff(); // 撤销命令
 }
}

// 关灯命令
class LightTurnOffCommand implements ICommand {
 constructor(private ligtht: Ligtht) {
  this.ligtht = ligtht;
 }
 execute(): void {
  this.ligtht.turnOff(); // 执行命令
 }
 unexecute(): void {
  this.ligtht.turnOn(); // 撤销命令
 }
}
// 降低亮度
class LightDownCommand implements ICommand {
 constructor(private ligtht: Ligtht) {
  this.ligtht = ligtht;
 }
 execute(): void {
  this.ligtht.down(); // 执行命令
 }
 unexecute(): void {
  this.ligtht.up(); // 撤销命令
 }
}

// 调高亮度
class LightUpCommand implements ICommand {
 constructor(private ligtht: Ligtht) {
  this.ligtht = ligtht;
 }
 execute(): void {
  this.ligtht.up(); // 执行命令
 }
 unexecute(): void {
  this.ligtht.down(); // 撤销命令
 }
}

// 电视
class TV {
 turnOn() {
  console.log("TV is turn on"); // 开灯
 }
 turnOff() {
  console.log("TV is turn off"); // 关灯
 }
}
// 开电视命令
class TVTurnOnCommand implements ICommand {
 constructor(private tv: TV) {
  this.tv = tv;
 }
 execute(): void {
  this.tv.turnOn(); // 执行命令
 }
 unexecute(): void {
  this.tv.turnOff(); // 撤销命令
 }
}

// 关电视命令
class TVTurnOffCommand implements ICommand {
 constructor(private tv: TV) {
  this.tv = tv;
 }
 execute(): void {
  this.tv.turnOff(); // 执行命令
 }
 unexecute(): void {
  this.tv.turnOn(); // 撤销命令
 }
}

// 命令触发器
class CommandInvoker {
 // 执行和撤销的历史记录
 history_do: Array<ICommand> = [];
 history_undo: Array<ICommand> = [];

 // 一般命名为：setCommand(),但这里为了保持命名格式一致
 ToDoCommand(ToDoCommand: ICommand): void {
  console.log("执行命令：");
  ToDoCommand.execute(); // 执行命令
  this.history_do.push(ToDoCommand); // 添加到历史记录
  this.history_undo = []; // 清除撤销历史记录
 }
 // 撤销命令
 UndoCommand() {
  let UnDoCommand = this.history_do.pop(); // 获取栈顶命令
  if (UnDoCommand) {
   console.log("撤销命令：");
   UnDoCommand.unexecute(); // 撤销命令
   this.history_undo.push(UnDoCommand); // 添加到撤销历史记录
  }
 }
 // 重做命令
 RedoCommand() {
  let ReDoCommand = this.history_undo.pop(); // 获取最后一条已撤销的命令
  if (ReDoCommand) {
   console.log("重做命令：");
   ReDoCommand.execute(); // 重做
   this.history_do.push(ReDoCommand); // 添加到历史记录
  }
 }
}

function main() {
 let light = new Ligtht(); // 灯
 let tv = new TV(); // 电视
 let commandInvoker = new CommandInvoker(); // 命令触发器（智能遥控器）

 commandInvoker.ToDoCommand(new LightTurnOnCommand(light)); // 开灯
 commandInvoker.ToDoCommand(new LightTurnOffCommand(light)); // 关灯
 commandInvoker.ToDoCommand(new LightUpCommand(light)); // 灯调亮
 commandInvoker.ToDoCommand(new LightDownCommand(light)); // 灯调暗

 commandInvoker.ToDoCommand(new TVTurnOnCommand(tv)); // 开电视
 commandInvoker.ToDoCommand(new TVTurnOffCommand(tv)); // 关电视

 commandInvoker.UndoCommand(); // 撤销
 commandInvoker.UndoCommand(); // 撤销
 commandInvoker.UndoCommand(); // 撤销
 commandInvoker.UndoCommand(); // 撤销
 commandInvoker.RedoCommand(); // 重做
 commandInvoker.RedoCommand(); // 重做
 commandInvoker.ToDoCommand(new LightTurnOffCommand(light)); // 关灯
 commandInvoker.RedoCommand(); // 重做，无法重做，因为撤销历史被覆盖
}
main();
```

## 行为型:_15_解释器模式

```ts
interface Expression {
 interpret(context: Context): number;
}

class Variable implements Expression {
 constructor(protected name) {
  this.name = name;
 }
 interpret(context: Context) {
  return context.getValue(this)?.interpret(context) as number;
 }
}
class Value implements Expression {
 constructor(protected value: number) {
  this.value = value;
 }
 interpret(context: Context) {
  return this.value;
 }
}
class Add implements Expression {
 constructor(protected left: Expression, protected right: Expression) {
  this.left = left;
  this.right = right;
 }
 interpret(context: Context) {
  return this.left.interpret(context) + this.right.interpret(context);
 }
}
class Minus implements Expression {
 constructor(protected left: Expression, protected right: Expression) {
  this.left = left;
  this.right = right;
 }
 interpret(context: Context) {
  return this.left.interpret(context) - this.right.interpret(context);
 }
}

class SingleEqual implements Expression {
 constructor(protected left: Variable, protected right: Expression) {
  this.left = left;
  this.right = right;
 }
 interpret(context: Context) {
  context.setValue(this.left, new Value(this.right.interpret(context)));
  return this.left.interpret(context);
 }
}

class Pow implements Expression {
 constructor(protected left: Expression, protected right: Expression) {
  this.left = left;
  this.right = right;
 }
 interpret(context: Context) {
  return Math.pow(this.left.interpret(context), this.right.interpret(context));
 }
}

class Context {
 context = new Map<Variable, Value>();
 setValue(variable: Variable, value: Value) {
  this.context.set(variable, value);
 }
 getValue(variable: Variable) {
  return this.context.get(variable);
 }
}

function main1() {
 // 上下文
 const ctx = new Context();

 const a = new Variable("a");
 const b = new Variable("b");
 const c = new Variable("c");
 const d = new Variable("d");
 const result = new Variable("result");

 // 赋值
 new SingleEqual(a, new Value(1)).interpret(ctx); // a = 1
 new SingleEqual(b, new Value(2)).interpret(ctx); // b = 2
 new SingleEqual(c, new Value(3)).interpret(ctx); // c = 3
 new SingleEqual(d, new Value(4)).interpret(ctx); // d = 4

 // result = (a+b)-(c+d)
 new SingleEqual(result, new Minus(new Add(a, b), new Add(c, d))).interpret(ctx);

 console.log(result.interpret(ctx));
}
main1();

function main2() {
 // 上下文
 const ctx = new Context();

 const a = new Variable("a");
 const b = new Variable("b");
 const result = new Variable("result");

 // 赋值
 new SingleEqual(a, new Value(2)).interpret(ctx); // a = 2
 new SingleEqual(b, new Value(3)).interpret(ctx); // b = 3

 // result = (a+b)-(c+d)
 new SingleEqual(result, new Pow(a, b)).interpret(ctx);

 console.log(result.interpret(ctx));
}
// main2();
```

## 行为型:_16_迭代器模式

```ts
/* eslint-disable no-var */

// 迭代器对象
interface myIterator<T> {
 getNext(): T;
 hasNext(): boolean;
}

// 可迭代接口
interface myIterable<T> {
 getIterator(): myIterator<T>; // 获取迭代器对象
}

// 实现可迭代接口
class myList<T> implements myIterable<T> {
 list: Array<T> = [];
 push(item: T): void {
  this.list.push(item);
 }
 pop(): T | undefined {
  return this.list.pop();
 }
 getIterator(): myIterator<T> {
  return new myList.ListIterator<T>(this.list);
 }
 static ListIterator = class ListIterator<T> {
  currentIndex: number;
  list: Array<T>;
  constructor(list: T[]) {
   this.list = list;
   this.currentIndex = 0;
  }
  hasNext(): boolean {
   return this.currentIndex < this.list.length;
  }
  getNext(): T {
   return this.list[this.currentIndex++];
  }
 };
}

function main() {
 var list = new myList();
 list.push(1);
 list.push(2);
 list.push(3);
 list.push(4);
 list.push(5);
 list.push(6);

 var iterator = list.getIterator(); // 获取迭代器对象
 while (iterator.hasNext()) {
  console.log(iterator.getNext());
 }
}
main();
```

## 行为型:_17_中介者模式

```ts
// 消息发送的中介者
abstract class MsgMediator {
 protected abstract msgReceivers: Map<string, MsgReceiver>;
 abstract join(receiverId: string, receiver: MsgReceiver): boolean; // 登录
 abstract sendMsgToReceiver(fromReceiverId: string, msg: string, toReceiverId: string): boolean;
 abstract sendMsgToReceivers(fromReceiverId: string, msg: string, toReceiverIds: string[]): boolean;
 abstract sendMsgToAll(fromReceiverId: string, msg: string): void;
}
// 消息的接受者
abstract class MsgReceiver {
 protected abstract msgMediator: MsgMediator; // 消息发送者聚合了一个中介者
 abstract receiveMsg(msg: string, fromUserId: string): void; // 接收消息
 abstract sendMsgToUser(msg: string, toUserId: string): boolean; // 使用中介者发送点对点消息
 abstract sendMsgToUsers(msg: string, toUserIds: Array<string>): boolean; // 使用中介者发送一对多消息
 abstract broadcastMessage(msg: string): void; // 使用中介者发送广播消息
}

// 聊天室
class ChatRoom extends MsgMediator {
 protected chatRoomId: string;
 protected chatRoomName: string;
 protected msgReceivers = new Map<string, MsgReceiver>();
 constructor(chatRoomId: string, chatRoomName: string) {
  super();
  this.chatRoomId = chatRoomId;
  this.chatRoomName = chatRoomName;
 }
 join(UserId: string, User: MsgReceiver): boolean {
  this.msgReceivers.set(UserId, User);
  if (this.msgReceivers.has(UserId)) return true;
  return false;
 }
 sendMsgToReceiver(fromUserId: string, msg: string, toUserId: string): boolean {
  if (this.msgReceivers.has(toUserId)) {
   this.msgReceivers.get(toUserId)?.receiveMsg(msg, fromUserId);
   return true;
  }
  return false;
 }
 sendMsgToReceivers(fromUserId: string, msg: string, toUserIds: string[]): boolean {
  let flag = true;
  toUserIds.forEach(toReceiverId => {
   if (this.sendMsgToReceiver(fromUserId, msg, toReceiverId) == false) flag = false;
  });
  return flag;
 }
 sendMsgToAll(fromUserId: string, msg: string): void {
  this.msgReceivers.forEach((user, id) => user.receiveMsg(msg, fromUserId));
 }
}

class User extends MsgReceiver {
 protected msgMediator: MsgMediator;
 constructor(private userId: string, private userName: string) {
  super();
  this.userId = userId;
  this.userName = userName;
 }
 join(msgMediator: MsgMediator) {
  this.msgMediator = msgMediator;
  if (msgMediator.join(this.userId, this)) return true;
  return false;
 }
 sendMsgToUser(msg: string, toUserId: string): boolean {
  return this.msgMediator.sendMsgToReceiver(this.userId, msg, toUserId);
 }
 sendMsgToUsers(msg: string, toUserIds: Array<string>): boolean {
  return this.msgMediator.sendMsgToReceivers(this.userId, msg, toUserIds);
 }
 broadcastMessage(msg: string): void {
  return this.msgMediator.sendMsgToAll(this.userId, msg);
 }
 receiveMsg(msg: string, fromUserId: string): void {
  console.log(`用户${this.userId}收到从用户${fromUserId}发来的消息:${msg}`);
 }
 getUserId(): string {
  return this.userId;
 }
 getUserName(): string {
  return this.userName;
 }
}

function main() {
 const chatRoom = new ChatRoom("111", "测试");

 const user1 = new User("001", "user1");
 const user2 = new User("002", "user2");
 const user3 = new User("003", "user3");
 const user4 = new User("004", "user4");
 const user5 = new User("005", "user5");
 const user6 = new User("006", "user6");
 const user7 = new User("007", "user7");
 const user8 = new User("008", "user8");

 console.log(user1.join(chatRoom));
 console.log(user2.join(chatRoom));
 console.log(user3.join(chatRoom));
 console.log(user4.join(chatRoom));
 console.log(user5.join(chatRoom));
 console.log(user6.join(chatRoom));
 console.log(user7.join(chatRoom));
 console.log(user8.join(chatRoom));

 // 点对点发送
 user1.sendMsgToUser("《私聊消息:哈喽》", user2.getUserId());
 user2.sendMsgToUser("《私聊消息:哈喽》", user3.getUserId());
 user3.sendMsgToUser("《私聊消息:哈喽》", user4.getUserId());
 user4.sendMsgToUser("《私聊消息:哈喽》", user5.getUserId());
 user5.sendMsgToUser("《私聊消息:哈喽》", user6.getUserId());
 user6.sendMsgToUser("《私聊消息:哈喽》", user7.getUserId());

 // 一对多发送
 user7.sendMsgToUsers("《群发消息：哈喽》", [user1.getUserId(), user2.getUserId(), user3.getUserId()]);

 // 广播发送
 user8.broadcastMessage("《广播消息:哈喽》");
}
main();
```

## 行为型:_18_备忘录模式

```ts
// 备忘录模式，记录某对象的状态
class Memento {
 private textContent: string;
 constructor(textContent: string) {
  this.textContent = textContent;
 }
 getTextContent() {
  return this.textContent;
 }
}

class TextEditor {
 private textContent = "";
 typing(text: string) {
  this.textContent += text;
 }
 // 保存状态
 save(): Memento {
  return new Memento(this.textContent);
 }
 // 恢复状态
 restore(memento: Memento | undefined | null) {
  if (memento) this.textContent = memento.getTextContent();
 }
}

class MementoHistoryManager {
 mementos = new Map<string, Memento>();
 add(describe: string, memento: Memento) {
  this.mementos.set(describe, memento);
 }
 get(describe: string) {
  return this.mementos.get(describe);
 }
 remove(describe: string) {
  this.mementos.delete(describe);
 }
}

function main() {
 const editor = new TextEditor();
 const history = new MementoHistoryManager();

 editor.typing("hi this is the init state."); // 输入内容
 history.add("快照1", editor.save()); // 保存为快照1
 console.log(editor); //TextEditor { context: 'hi this is the init state.' }

 editor.typing("hhhhhhhhhhhhhhhhhh."); // 输入内容
 console.log(editor); //TextEditor { context: 'hi this is the init state.hhhhhhhhhhhhhhhhhh.' }
 history.add("快照2", editor.save()); // 保存为快照2

 editor.restore(history.get("快照1")); // 恢复快照1
 console.log(editor); //TextEditor { context: 'hi this is the init state.' }
}
main();
```

## 行为型:_19_观察者模式

```ts
// 可观察对象
interface IObservable {
 add(observer: IObserver): void;
 remove(observer: IObserver): void;
 notify(): void;
}
// 观察者
interface IObserver {
 update(): void;
}

// 消息发布者
class MessagePublisher implements IObservable {
 currentMessage: string;
 constructor() {
  setInterval(() => {
   this.currentMessage = "hahaha" + Date.now();
   console.log("被观察者：我发布了新消息:" + this.currentMessage);
   this.notify(); // 通知被观察者
  }, 500);
 }
 // 注册、移除、通知观察者的逻辑
 observers: Set<IObserver> = new Set(); // 观察者集合
 add(observer: IObserver): void {
  // 添加观察者
  this.observers.add(observer);
 }
 remove(observer: IObserver): void {
  // 移除观察者
  this.observers.delete(observer);
 }
 notify(): void {
  // 通知所有观察者
  this.observers.forEach(item => item.update());
 }
}

// 消息监听者
class MessageReceiver implements IObserver {
 constructor(private target: MessagePublisher) {
  this.target = target;
  this.target.add(this);
 }
 update(): void {
  console.log("观察者：收到了被观察的消息推送：" + this.target.currentMessage);
 }
}

function main() {
 let publisher = new MessagePublisher();
 let receiver1 = new MessageReceiver(publisher);
 let receiver2 = new MessageReceiver(publisher);
}

main();
```

## 行为型:_20_状态模式

```ts
abstract class State {
 abstract doSomething(context: Context): void;
 // abstract inputHandler(context: Context): void; // 通过输入处理函数，可以实现只能从某种状态到某种状态的切换
}

class Context {
 currentState: State = new InitState();
 changeState(state: State): void {
  this.currentState = state;
 }
 doSomething(): void {
  this.currentState.doSomething(this);
 }
}

class TiredState extends State {
 doSomething(context: Context): void {
  console.log("精疲力尽的做某事");
 }
}
class InitState extends State {
 doSomething(context: Context): void {
  console.log("元气满满的做某事");
 }
}

function main() {
 const someone = new Context();
 someone.doSomething();
 someone.changeState(new TiredState());
 someone.doSomething();
}
main();
```

## 行为型:_21_策略模式

```ts
// 策略模式
class Animal {
 constructor(
  private flyStrategy: FlyStrategy, // 行为是接口，具体什么行为由子类定义
  private jumpStrategy: JumpStrategy,
  private runStrategy: RunStrategy
 ) {
  this.flyStrategy = flyStrategy;
  this.jumpStrategy = jumpStrategy;
  this.runStrategy = runStrategy;
 }
 fly() {
  this.flyStrategy.fly();
 }
 jump() {
  this.jumpStrategy.jump();
 }
 run() {
  this.runStrategy.run();
 }
}
// 飞行策略
interface FlyStrategy {
 fly(): void;
}
interface JumpStrategy {
 jump(): void;
}
interface RunStrategy {
 run(): void;
}

// 默认的飞行策略
class DefaultFlyStrategy implements FlyStrategy {
 fly() {
  console.log("Default Fly");
 }
}
// 不会飞的飞行策略
class CantFlyStrategy implements FlyStrategy {
 fly() {
  console.log("Can't Fly");
 }
}

class DefaultJumpStrategy implements JumpStrategy {
 jump() {
  console.log("Default Jump");
 }
}
class CantJumpStrategy implements JumpStrategy {
 jump() {
  console.log("Can't Jump");
 }
}

class DefaultRunStrategy implements RunStrategy {
 run() {
  console.log("Default Run");
 }
}
class CantRunStrategy implements RunStrategy {
 run() {
  console.log("Can't Run");
 }
}

function main() {
 let bird = new Animal(new DefaultFlyStrategy(), new DefaultJumpStrategy(), new CantRunStrategy());
 console.log("bird:");
 bird.fly();
 bird.jump();
 bird.run();

 let dog = new Animal(new CantFlyStrategy(), new DefaultJumpStrategy(), new DefaultRunStrategy());
 console.log("dog:");
 dog.fly();
 dog.jump();
 dog.run();

 let duck = new Animal(new DefaultFlyStrategy(), new CantJumpStrategy(), new CantRunStrategy());
 console.log("duck:");
 duck.fly();
 duck.jump();
 duck.run();
}

main();
```

## 行为型:_22_模板方法模式

```ts
// 模板方法是指：有某一系统按某规定顺序执行，但其中某一阶段的具体实现是未知的
// 解决方法是使用抽象方法，或者使用hook钩子函数
abstract class SomeSystem {
 private beforeStage2Hooks: Array<() => void> = []; // 钩子函数列表，私有化，防止被赋值为空数组
 private afterStage2Hooks: Array<() => void> = [];
 beforeStage2(hook: () => void) {
  // beforeStage3钩子函数添加
  this.beforeStage2Hooks.push(hook);
 }
 afterStage2(hook: () => void) {
  this.afterStage2Hooks.push(hook);
 }
 private stage1() {
  console.log("stage1");
 }
 private stage2() {
  console.log("stage2");
 }
 abstract stage3(): void; // 阶段3 的具体实现是未知的
 private stage4() {
  console.log("stage4");
 }
 start() {
  this.stage1();
  this.beforeStage2Hooks.forEach(hook => hook()); // 执行某些注入的操作
  this.stage2();
  this.afterStage2Hooks.forEach(hook => hook()); // 执行某些注入的操作
  this.stage3();
  this.stage4();
 }
}

class Subsystem extends SomeSystem {
 constructor() {
  super();
  this.beforeStage2(() => {
   // 通过钩子函数，实现在阶段2之前执行某些操作
   console.log("before stage2");
  });
 }
 stage3() {
  // 给出阶段3的具体实现
  console.log("stage3");
 }
}

function main() {
 let system = new Subsystem();
 system.afterStage2(() => {
  // 通过钩子函数，实现在阶段2之后执行某些操作
  console.log("after stage2");
 });
 system.start(); // 启动系统
}
main();
```

## 行为型:_23_访问者

```ts
// 访问者接口
interface PcPartVisiter {
 visitDisplay(display: Display): void;
 visitMouse(mouse: Mouse): void;
 visitKeyBoard(keyBoard: KeyBoard): void;
 visitDisk(disk: Disk): void;
}

// 具体访问者
class UpdatePackage implements PcPartVisiter {
 visitDisplay(display: Display): void {
  // do something
  display.version = "v0.2"; // 升级
 }
 visitMouse(mouse: Mouse): void {
  mouse.version = "v0.2";
 }
 visitKeyBoard(keyBoard: KeyBoard): void {
  keyBoard.version = "v0.2";
 }
 visitDisk(disk: Disk): void {
  disk.version = "v0.2";
 }
}

// 电脑
class Computer {
 display = new Display();
 mouse = new Mouse();
 keyBoard = new KeyBoard();
 disk = new Disk();
 update(visiter: PcPartVisiter) {
  this.display.update(visiter);
  this.mouse.update(visiter);
  this.keyBoard.update(visiter);
  this.disk.update(visiter);
 }
}

interface ComputerPart {
 version: string;
 update(visiter: PcPartVisiter): void;
}
class Display implements ComputerPart {
 version = "v0.1";
 update(visiter: PcPartVisiter): void {
  visiter.visitDisplay(this);
 }
}
class Mouse implements ComputerPart {
 version = "v0.1";
 update(visiter: PcPartVisiter): void {
  visiter.visitMouse(this);
 }
}
class KeyBoard implements ComputerPart {
 version = "v0.1";
 update(visiter: PcPartVisiter): void {
  visiter.visitKeyBoard(this);
 }
}
class Disk implements ComputerPart {
 version = "v0.1";
 update(visiter: PcPartVisiter): void {
  visiter.visitDisk(this);
 }
}

function main() {
 const computer = new Computer();
 console.log(computer);

 computer.update(new UpdatePackage());
 console.log(computer);
}

main();
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
