---
title: ES6-ES11新特性学习笔记
date: 2022-09-04T12:00:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
tag: [ES6,javaScript]
# ---article: false---
category: 笔记
---


# ES6-ES11新特性学习笔记

## 目录

- [ES6-ES11新特性学习笔记](#es6-es11新特性学习笔记)
  - [目录](#目录)
  - [概念](#概念)
  - [ES6-let](#es6-let)
  - [ES6-const](#es6-const)
  - [ES6-解构赋值](#es6-解构赋值)
  - [ES6-模板字符串](#es6-模板字符串)
  - [ES6-简化对象写法](#es6-简化对象写法)
  - [ES6-箭头函数](#es6-箭头函数)
  - [ES6-函数形式参数初值](#es6-函数形式参数初值)
  - [ES6-函数的rest剩余参数(...)](#es6-函数的rest剩余参数)
  - [ES6-spread扩展运算符(...)](#es6-spread扩展运算符)
  - [ES6-Symbol](#es6-symbol)
  - [ES6-迭代器(Iterator)](#es6-迭代器iterator)
  - [ES6-生成器](#es6-生成器)
  - [ES6-Promise](#es6-promise)
  - [ES6-Set集合](#es6-set集合)
  - [ES6-Map](#es6-map)
  - [ES6-Class](#es6-class)
  - [ES6-新的数值方法](#es6-新的数值方法)
  - [ES6-新的对象方法](#es6-新的对象方法)
  - [ES6-模块化](#es6-模块化)
  - [ES7-新运算符`**`](#es7-新运算符)
  - [ES7-数组对象新方法`listA.includes()`](#es7-数组对象新方法listaincludes)
  - [ES8-`async`/`await`](#es8-asyncawait)
  - [ES8-`Obj.eys()`/`values()`/`entries()`](#es8-objeysvaluesentries)
  - [ES9-针对于对象的`...`扩展运算符](#es9-针对于对象的扩展运算符)
  - [ES9-正则-提取内容新方法](#es9-正则-提取内容新方法)
  - [ES9-正则-反向断言](#es9-正则-反向断言)
  - [ES9-正则-dotAll模式](#es9-正则-dotall模式)
  - [ES10-二维数组或Map转对象](#es10-二维数组或map转对象)
  - [ES10-trimStart,trimEnd](#es10-trimstarttrimend)
  - [ES10-flat,flatMap](#es10-flatflatmap)
  - [ES10-`Symbol.prototype.description`](#es10-symbolprototypedescription)
  - [ES11-类的私有属性](#es11-类的私有属性)
  - [ES11-Promise.allSettled()](#es11-promiseallsettled)
  - [ES11-`String.prototype.matchAll()`](#es11-stringprototypematchall)
  - [ES11-`?.`可选链操作符](#es11-可选链操作符)
  - [ES11-动态`import()`](#es11-动态import)
  - [ES11-BigInt大整型](#es11-bigint大整型)
  - [ES11-globalThis](#es11-globalthis)

## 概念

**用处**

- 语法简洁 功能丰富
- `vue` `react` 框架开发中大量使用ES6语法
- 岗位要求

## ES6-let

**声明格式**

```js
let a;
let a,b,c;
let a=1,b=2,c=3;
```

**特性:**
**1.块级作用域**

```js
var a=1
{//for if
    let a=2;
}
console.log(a);// 输出1
```

**2. 不存在变量提升**

```js
//var
console.log(a) //a为undefine
var a=123

//let
console.log(a) //报错:声明错误
let a=123
```

**3. 不影响作用域链**

```js
{
    let a=1;
    function(){
        console.log(a) //能正常访问a
    }
}
```

**4. 不能重复声明**

```js
let a=1;
let b=2;
```

**案例**

```js
for(var i=0;i<10;i++)
{
    items[i].onclick = function(){
        console.log(i)//i的值始终为10
    }
}

for(let i=0;i<10;i++)
{
    items[i].onclick = function(){
        console.log(i)//i的值为其所在循环的值
    }
}
```

## ES6-const

**声明格式**

```js
const TEST = "123"
```

**注意事项**

1. 必须赋初值
2. 一般常量名大写
3. 常量值不能修改,但能对数组的元素或对象的属性值修改,因为常量指向的地址没有发生改变
4. 是块级作用于

## ES6-解构赋值

**数组的解构赋值**

```js
var test = [1,2,3,4]
var [a,b,c,d] = test
console.log(a)
console.log(b)
console.log(c)
console.log(d)
```

**对象的解构赋值**

```js
var test = {a:1,b:2,c:3}
var {a,b,c} = test

console.log(a)
console.log(b)
console.log(c)
```

## ES6-模板字符串

**语法**

```js
var test =`这是一个用反引号包裹的字符串`
```

**特性**

1. 内容中可直接换行
2. 内容中可直接拼接变量

    ```js
    var str = "hhhhhhhhhhhhh"
    var test =`
    <ul>
        <li>12313123</li>
        <li>12313123</li>
        <li>12313123</li>
        <li>${str}</li>
    </ul>
    `
    ```

## ES6-简化对象写法

**语法**

```js
var test1=1,test2=2,test3=3;

var obj1={
    test1:test1,
    test2:test2,
    test3:test3,
    test4:function(){
        console.log("hhh")
    }
}

var obj2 ={//obj1 和 obj2 写法等效
    test1,
    test2,
    test3,
    test4(){
        console.log("hhh")
    }
}
```

## ES6-箭头函数

**语法**

```js
var test1 = function(){
    console.log("123")
}

var test2 = ()=>{ //test1 和 test2 等效
    console.log("123")
}

```

**特性**

1. this是静态的，始终指向函数声明时所在作用域的this的值
2. 不能作为构造函数来示例化对象
3. 箭头函数内不能使用arguments变量
4. 当形式参数只有一个时可以省略小括号
5. 当代码体只有一条语句时可省略大括号，函数的返回值为语句v的返回值，且return也必须省略。

   ```js
   let pow = x => x*x
   console.log(pow(2)) //4
   ```

**案例1**

```js
ad.addEventListener("click",function(){
    //由于this指向window，将报错
    // setTimeout(function(){
    //     this.style.background = "pink" 
    // },1000)

    setTimeout(()=>{
        this.style.background = "pink" //this指向ad 不报错
    },1000)
})
```

**案例2:筛选偶数**

```js
//不使用箭头函数
const arr =[1,2,3,4,5,6,7]
const result = arr.filter(function(item){
    if(item%2==0) return true
    else return false;
})
console.log(result)



//使用箭头函数
const arr =[1,2,3,4,5,6,7]
const result = arr.filter(item => item%2==0 )
console.log(result)
```

**总结**
箭头函数适合与this无关的回调：定时器，数组的方法回调
箭头函数不适合与this有关的回调：事件回调，对象方法

## ES6-函数形式参数初值

**语法**

```js
function add(a=0,b=0,c=0){
    return a+b+c
}
```

**特性**

1. 有默认值的形式参数位置靠后
2. 可以和结构赋值结合使用

```js
function connect({host="1270.0.0.1",username="root",password="root",port=3394}){
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}

connect({
    host: "localhost",
    username: "root",
    password: "root",
    port: "3394",
})
```

## ES6-函数的rest剩余参数(...)

```js
function f1(a,b,c){
    console.log(arguments) //arguments是伪数组,存有所有参数
}
f1(1,2,3,4,5,6)


var f2 = (a,b,c,...rest)=>{//(rest可以是其他变量名)
    console.log(rest) //rest 是真的数组，存有剩余的参数
}
f2(1,2,3,4,5,6)
```

## ES6-spread扩展运算符(...)

扩展运算符(...)会调用默认的 `Iterator` 接口

**基本使用**

```js
var list = ["123","321","456"]

fun1(list) //等效于 fun1(["123","321","456"])

fun2(...list) //等效于 fun2("123","321","456")
```

**应用**

1. 数组合并

   ```js
   const a=[1,2,3]
   const b=[4,5,6]
   const c=[...a,...b] //c:[1,2,3,4,5,6]
   ```

2. 数组拷贝

   ```js
   const a=["A","B","C"]
   const b=[...a]           //浅拷贝
   ```

3. 伪数组转换真数组

   ```js
   const divs = document.querrySelectorAll("div")
   const divArr = [...divs]
   ```

## ES6-Symbol

**概念**

- Symbol是ES6引入的新的数据类型,不能用 new 命令，因为其不是对象。
- 表示独一无二的值,最大的用法是用来定义对象的唯一属性名
- ES6 数据类型
  - Number  
  - String  
  - Boolean  
  - Object
  - null
  - undefined
  - **Symbol**

**特点**

- 值唯一,用于解决命名冲突的问题
- 不能与其他数据类型运算
- 不能使用for in 遍历,但可以使用Reflect.ownkeys获取对象的所有键名

**一些内置属性(共11个)**

- Symbol.match
- Symbol.isConcatSpreadable

```js
let s1 = Symbol();
let s2 = Symbol("标志名称");
let s3 = Symbol("标志名称");        // s2 !=  s3

let s4 = Symbol.for("标志名称2")    // 由.for()这种函数创建的symbol称为函数对象
let s5 = Symbol.for("标志名称2")    // s4 == s5
```

**案例1**

```js
const game = {
    up : function(){ console.log("up") },
    down : function(){ console.log("down") }
}
const myMethods = {
    up:Symbol("myUp"),
    down:Symbol("myDown")
}


game[myMethods.up] = function(){ console.log("myUp") }
game[myMethods.down] = function(){ console.log("myDown") }

console.log(game)
// 输出:
// {
//   up: [Function: up],
//   down: [Function: down],
//   [Symbol(myUp)]: [Function],
//   [Symbol(myDown)]: [Function]
// }
```

**案例2**

```js
const game = {
    up : function(){ console.log("up") },
    down : function(){ console.log("down") },
    [Symbol("myUp")]:function(){ console.log("myUp") }, //这样定义后似乎无法调用
    [Symbol("myDown")]:function(){ console.log("myDown") },
}
console.log(game)

// > console.log(game)
// 输出:
// {
//   up: [Function: up],
//   down: [Function: down],
//   [Symbol(myUp)]: [Function: [myUp]],
//   [Symbol(myDown)]: [Function: [myDown]]
// }
```

## ES6-迭代器(Iterator)

**主要用于遍历元素,实现原理和python中的yield类似**

- 可自定义遍历数据
- 迭代器提供的接口可供 `for [item] of [obj]` 使用
- 原生具备迭代器接口的数据类型
  - Arrary
  - Arguments
  - Set
  - Map
  - String
  - TypedArray
  - NodeList

```js
var listA = ["111","222","333"]


// let iterator = listA[Symbol.iterator]();
// console.log(iterator.next())// next第一次指向第一个元素,第二次调用指向第二个元素...


for(let item of listA){
    console.log(item) 
    //输出结果为
    // "111"
    // "222"
    // "333"
}

for(let key of listA){
    console.log(key) 
    //输出结果为
    // 0
    // 1
    // 2
}
```

**自定义遍历数据**

```js
var classA = {
    name: "1234班",
    students: [
        "小明",
        "小红",
        "小黄",
        "小蓝",
        "小绿",
        "小白",
    ],
    [Symbol.iterator]: function () {//不能使用剪头函数,否则this指向window
        let index = 0;
        return {
            next: () => {
                if (index < this.students.length) {
                    return { value: this.students[index++], done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}

for (item of classA) {
    console.log(item)
}
```

## ES6-生成器

**主要用于异步编程**

**特性演示**

```js
function * test1(){
    for (let index = 0; index < 100; index++) {
        if(index%2==1)
            yield index;
    }
}
// const iterator = test1()
    //test1()返回值是一个生成器对象

// console.log(iterator.next());
    // 输出:
    // {value:1,done:false}

// console.log(iterator.next().value);
    // 输出:
    // 1

for (item of test1()) {
    console.log(item) 
    //输出:
    // 1
    // 3
    // 5
    // ... ...
}
```

**参数传递**

```js
function * test2(arg1){
    console.log(arg1)

    var result = yield "1111"; 
    console.log(result)
    
    var result = yield "2222";
    console.log(result)

    var result = yield "3333";
    console.log(result)
}

const iterator = test2("AAA")

console.log(iterator.next("BBB").value); // "BBB"将不会输出
console.log(iterator.next("CCC").value); //next的形式参数会作为前一个yield语句的返回值
console.log(iterator.next("DDD").value); //"DDD"将会作为 yield "1111" 的返回值
```

**异步编程案例**

```js
function A(){
    setTimeout(() => {
        console.log("111");
        iterator.next()
    }, 1000);
}
function B(){
    setTimeout(() => {
        console.log("222");
        iterator.next()
    }, 1000);
}
function C(){
    setTimeout(() => {
        console.log("333");
        iterator.next()
    }, 1000);
}
function * test3(){
    yield A()
    yield B()
    yield C()
}

const iterator = test3()

iterator.next()
//输出:
// 111
// 222
// 333
```

**实际案例模拟**

```js
function getUserInfo(){
    setTimeout(() => {
        let UserInfo = "用户信息"
        console.log("成功获取: "+UserInfo);
        iterator.next(UserInfo)
    }, 1000);
}
function getOrders(){
    setTimeout(() => {
        let ordersInfo = "用户订单"
        console.log("成功获取: "+ordersInfo);
        iterator.next(ordersInfo)
    }, 1000);
}
function getGoods(){
    setTimeout(() => {
        let goodsInfo = "订单商品"
        console.log("成功获取: "+goodsInfo);
        iterator.next(goodsInfo)
    }, 1000);
}
function * test4(){
    let UserInfo = yield getUserInfo() //获取用户信息
    let ordersInfo = yield getOrders(UserInfo) //根据用户信息获取订单信息
    let goodsInfo = yield getGoods(ordersInfo) //根据订单信息获取商品信息
}

const iterator = test4()
iterator.next()
    // 输出结果:
    // 成功获取: 用户信息
    // 成功获取: 用户订单
    // 成功获取: 订单商品
```

## ES6-Promise

**详细笔记见《Promise学习笔记》**

**基本使用**

```js
const a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var data = "从服务器获取数据" 
        resolve(data)
    },1000)
}) 

a.then(value=>{
    console.log(value)
},reason=>{
    console.log(reason)
})
```

## ES6-Set集合

Set类型类似于数组,但其成员的值是唯一的,不会有重复的属性值  
Set类型支持扩展运算符`...`  
Set类型实现了 `iterator` 接口,可以通过 `for(A of B){}` 遍历
**内置方法和属性**

- size
- add()
- delete()
- has()
- clear()

```js
let setA = new Set()
console.log(setA) //Set(0){}


// let setB = new Set(可迭代的数据)
let setB = new Set([1,2,3,4,5,6,7,7,7,7,7,"8"])
console.log(setB) //Set(8){1,2,3,4,5,6,7,"8"}


console.log(setB.size) //集合元素个数
setB.add("9") //新增元素
setB.delete("9") //删除元素
setB.has(1) //检测元素
// setB.clear() //清空集合元素

for(item of setB){
    console.log(item)
}
```

**实用案例**

```js
// 数组去重
var listA = [1,2,3,4,5,6,7,8,1,1,1,2,2,2,3,3,3,4,4,4,5]
var result1 = [...new Set(listA)]
console.log(result1);


//交集运算
var ListB = [1,2,3,4,5,6,6,6,6,6]
var ListC = [4,5,6,7,8,9,9,9,9,9]
var result2 = [...new Set(ListB)].filter(item => ( new Set(ListC) ).has(item))
console.log(result2)


//并集运算
var ListD = [1,2,3,4,5,6,6,6,6,6]
var ListE = [4,5,6,7,8,9,9,9,9,9]
var result3 = [...new Set([...ListD,...ListE])]
console.log(result3)


//差集 
var ListF = [1,2,3,4,5,6,6,6,6,6]
var ListE = [4,5,6,7,8,9,9,9,9,9]
var result4 = [...new Set(ListF)].filter(item => !( new Set(ListE) ).has(item)) //F和E的差集
var result5 = [...new Set(ListE)].filter(item => !( new Set(ListF) ).has(item)) //E和F的差集
console.log(result4)
console.log(result5)
```

## ES6-Map

Map类型类似于对象,是键值对的集合,但其"键"不只是字符串,各种数据类型甚至是对象都能作为"键"  
Map类型支持扩展运算符`...`
Map类型实现了 `iterator` 接口,可以通过 `for(A of B){}` 遍历
**内置方法和属性**

- size
- set(key,value)
- get(key)
- delete(key)
- has(key)
- clear()
- ......

```js
// let MapA = new Map([[A,B],[C,D],[E,F]])
let MapA = new Map()
console.log(MapA.set("123",321))
console.log(MapA.get("123"))
console.log(MapA.has("123"))
console.log(MapA.delete("123"))
console.log(MapA.clear())
```

## ES6-Class

通过ES6的class关键字可以定义对象,但其绝大部分功能都可通过ES5的语法实现(构造函数,this关键字),新写法只是让其看起来更像面向对象编程

**基本用法**

```js
class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    bark() {
        console.log("喵喵喵")
    }
}

new Cat("小黄猫", "公猫").bark() //输出: 喵喵喵
console.log(new Cat("小黄猫", "公猫").sex) //输出5
```

**static静态属性和成员**

```js
// **ES5原版写法**

//构造函数
function Dog(name, sex) {
    this.name = name
    this.sex = sex
}
//为构造函数对象添加方法/属性(静态属性)
Dog.age = 1
Dog.bark = function () {
    console.log("汪汪汪~~~")
}
//为实例对象添加方法/属性
Dog.prototype.age = 5
Dog.prototype.bark = function () {
    console.log("汪汪汪")
}

new Dog("小白狗", "公狗").bark() //输出: 汪汪汪
Dog.bark() //输出: 汪汪汪~~~
console.log(new Dog("小白狗", "公狗").age) //输出5
console.log(Dog.age)// 输出1
```

```js
// **ES6新版写法写法**
class Cat {
    static age = 1;
    static bark = function () {
        console.log("喵喵喵~~~")
    }
    constructor(name, sex) {
        this.name = name
        this.sex = sex
        this.age = 5;
    }
    bark() {
        console.log("喵喵喵")
    }
}

new Cat("小黄猫", "公猫").bark() //输出: 喵喵喵
console.log(new Cat("小黄猫", "公猫").age) //输出5
Cat.bark() //输出: 喵喵喵~~~
console.log(Cat.age) //输出1
```

**继承**

```js
// ES5特性的继承
function Phone(brand, prise) {
    this.brand = brand
    this.prise = prise
}
Phone.prototype.tele = function () {//为实例化后的对象添加方法
    console.log("call......");
}


function SmartPhone(brand, prise, size, color) {
    Phone.call(this, brand, prise) // 初始化父级对象
    this.size = size
    this.color = color
}

// 设置子级构造函数原型
SmartPhone.prototype = new Phone //使得SmartPhone的实例对象拥有Phone实例对象上的属性和方法
SmartPhone.prototype.constructor = SmartPhone //使得SmartPhone的实例对象的构造函数是SmartPhone() 而不是Phone()

SmartPhone.prototype.playGame = function () {//为实例化后的对象添加方法
    console.log("playGame......")
}

var huawei = new SmartPhone("华为", 4799, "12-inch", "黑色")
huawei.tele()
huawei.playGame()
```

```js
// ES6特性的继承
class Phone {
    constructor(brand, prise) {
        this.brand = brand
        this.prise = prise
    }
    call() {
        console.log("call......");
    }
}
class SmartPhone extends Phone {
    constructor(brand, prise, size, color) {
        super(brand, prise)
        this.size = size
        this.color = color
    }
    playGame() {
        console.log("playGame......")
    }
}


var huawei = new SmartPhone("花为", 4799, "12-inch", "黑色")
huawei.call()
huawei.playGame()
```

**重写父类方法**

```js
// ES6特性的继承
class Phone {
    constructor(brand, prise) {
        this.brand = brand
        this.prise = prise
    }
    call() {
        console.log("call......");
    }
}
class SmartPhone extends Phone {
    constructor(brand, prise, size, color) {
        super(brand, prise)
        this.size = size
        this.color = color
    }
    playGame() {
        console.log("playGame......")
    }
    call() {
        console.log("call2......");//重写父类的方法
    }
}

var huawei = new SmartPhone("花为", 4799, "12-inch", "黑色")
huawei.call()
huawei.playGame()
```

**get与set**

```js
class Phone {
    constructor(brand, prise) {
        this.brand = brand
        this.prise = prise
    }
    get value(){
        console.log("获取了价格")
        return this.prise
    }
    set value(value){
        console.log("设置了价格")
        this.prise = value
    }
}

var xiaomi = new Phone("xiaomi",999)
console.log(xiaomi.value);
console.log(xiaomi.value=0.01);
```

## ES6-新的数值方法

**`Number.EPSILON`浮点数最小精度**

```js
console.log(Number.EPSILON); //2.220446049250313e-16   2.22*10^(-16) 是js浮点数的最小精度单位 ,用于比较浮点数是否相等

function equal(a,b){
    return Math.abs(a-b) < Number.EPSILON
}

console.log(0.1+0.2); // 输出 0.30000000000000004
console.log(0.1+0.2 == 0.3); // 输出 false
console.log(equal(0.1+0.2 , 0.3)); // 输出 true
```

**二进制,八进制,十六进制**

```js
var b = 0b1111
var o = 0o7777
var d = 999999
var x = 0xffff

console.log(b); //输出: 15
console.log(o); //输出: 4095
console.log(d); //输出: 999999
console.log(x); //输出: 65535
```

**判断有限数**

```js
console.log(Number.isFinite(1));        //输出: true
console.log(Number.isFinite(1/0));      //输出: false
console.log(Number.isFinite(Infinity)); //输出: false
```

**判断非数**

```js
//在es5中isNaN()是一个单独的函数,在ES6中将其作为了Number对象的方法
console.log(Number.isNaN(123)); //输出: false
console.log(Number.isNaN(NaN)); //输出: true
```

**判断整数**

```js
console.log(Number.isInteger(123)); //输出: true
console.log(Number.isInteger(123.123)); //输出: false
```

**字符串转数字**

```js
//在ES6中将其作为了Number对象的方法,之前是一个单独的函数
console.log(Number.parseFloat("3.1415元")); //输出: 3.1415
console.log(Number.parseInt("3.1415元")); //输出: 3
```

**抹掉小数部分**

```js
console.log(Math.trunc(3.1415)); //输出: 3
```

**sign()函数**

```js
console.log(Math.sign(100));    //输出: 1
console.log(Math.sign(0));      //输出: 0
console.log(Math.sign(-100));   //输出: -1
```

## ES6-新的对象方法

**`Object.is()`判断两个值是否完全相等**

```js
        console.log(Object.is(123,123));        //输出: true
        console.log(Object.is("123","123"));    //输出: true
        console.log(Object.is(NaN,NaN));        //输出: true
        console.log(123 === 123);               //输出: true
        console.log("123" === "123");           //输出: true
        console.log(NaN === NaN);               //输出: false
```

**`Object.assign(a,b)`合并对象**

```js
const defaultConfg = {
    host:"localhost",
    port:80,
    username:"admin",
    password:"admin"
}
const customConfg = {
    port:8080,
    username:"dyg",
    password:"123456"
}

const resultConfg = Object.assign(defaultConfg,customConfg)
console.log(resultConfg);
//输出:
//{
//     host:"localhost",
//     port:8080,
//     username:"dyg",
//     password:"123456"
// }
```

**获取/设置原型对象**

```js
const objA = ["123","321"]
const objB = [123,321]
Object.setPrototypeOf(objA,objB) //也就是使得objA.__prpto___ 指向objB
console.log(objA);
console.log(Object.getPrototypeOf(objA));
```

## ES6-模块化

**原先的社区版模块化规范**

- commonJs规范标准 服务端标准 现实实现: nodejs Browserify
- AMD规范标准 浏览器端标准 现实实现: requirejs
- CMD规范标准 浏览器端标准 现实实现: seaJS

**ES6模块化规范语法**

- `export{XXX,XXX,XXX}` 导出模块接口
- `import{XXX,XXX,XXX} from "url"` 导入模块接口,顺序无妨,名称需一致
- `import{XXX as XXX} from "url"`
- `export default{XXX,XXX,XXX}` 向外暴露的成员，可以使用任意变量来接收,不需要`{}`。
- `import AAA from "url with default export"` 导入

**特点**

- ES6 的模块**自动开启严格模式**，不管你有没有在模块头部加上 use strict;。
- 模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。

**注意**
要在nodejs中使用ES6模块化规范,要求在package.json中添加type:module

**基本使用:导出**

```js
//第一种 按需导出
export var a = 123;
export function funA(){
    console.log("111111111111111111111111")
}

//第二种
var a = 123;
function funA(){
    console.log("111111111111111111111111")
}
export{a,funA}
//或
export{abc:a,cde:funA}



//第三种
var a = 123;
function funA(){
    console.log("111111111111111111111111")
}
export default{a,funA}
```

**基本使用:导入**

```js
//第一种 : 通用方式
import * as test1 from "./_demo.js" 


//第二种
import {a,funA} from "./_demo.js"  //名称需一致顺序无妨
import {a as a2,funA} from "./_demo.js"  //防止变量名冲突,使用as

//第三种 : 导入默认赋值
import {default as temp1} from "./_demo.js"

//第四种 : 导入默认赋值
import temp2 from "./_demo.js"

//第五种 : 多种相结合
import temp2,{a as a2,funA} from "./_demo.js"
```

**注意**
在script标签中写js代码，或者使用src引入js文件时，默认不能使用module形式，即不能使用import导入文件，
需要再script标签上加上 `type="module"`

```html
<script type="module" src="./??">
</script>
```

## ES7-新运算符`**`

```js
console.log(2**10) //1024
```

## ES7-数组对象新方法`listA.includes()`

```js
var listA = ["AAA","BBB","CCC"]
console.log(listA.includes("CCC"))  // true

//旧版的判断元素是否存在
var listA = ["AAA","BBB","CCC"]
console.log(listA.indexOf("CCC"))  // 返回下标,若不存在则返回 -1 
```

## ES8-`async`/`await`

- `async`修饰的函数的返回值为**promise对象**,promise对象的结果为函数`return`的值
- `await`修饰一个promsie对象,

**`async`修饰的函数**

- 返回的是一个promise的对象
- promise对象的值和状态
  - 若函数直接return XXX; 则函数返回的promise对象的值为XXX,状态为成功
  - 若函数直接抛出错误; 则函数返回的promise对象的值为抛出的错误对象,状态为失败
  - 若函数return new Promise(???); 则函数返回的的promise对象的值和状态与return的promise状态一致

```js
async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hhhhhhh");
            resolve("hhhhhhh")
            // reject("err")
        }, 1000)
    })
}
console.log(test());
```

**`await`修饰的语句**

- `await` 必须写在 `async` 修饰的函数中,但 `async` 中不一定要包含 `await`
- `await` 一般用于修饰一个promise对象 即 `await new Promise(略)`
- `await`修饰的promise对象的状态为成功, 则表达式的值为promise对象的value值
- `await`修饰的promise对象的状态为失败, 则表达式抛出错误,需 `try{}catch(err){}` 捕获

```js
async function test1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("111111")
            // reject("err")
        }, 1000)
    })
}
async function test2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("222222")
            // reject("err")
        }, 1000)
    })
}
async function test3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("333333")
            // reject("err")
        }, 1000)
    })
}
async function main() {
    let a = await test1()
    let b = await test2()
    let c = await test3()
    console.log(a+b+c); 
}
main()
```

**结合 `axios` `async` `awite`**

```html
<script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js"></script>
<script>
    async function main() {
        let sentences = await axios.get("https://api.apiopen.top/api/sentences")
        console.log(sentences.data.result);
    }
    main()
</script>
```

**执行顺序的问题**
在async修饰的函数中,语句是在主线程中执行的,当遇到第一个await语句并执行完后,函数中的剩余语句将交给异步执行栈,而后函数将直接返回一个promsie对象,

```js
async function test4() {
    return new Promise((resolve, reject) => {
        console.log("2222222222222222222222");
        setTimeout(() => {                          //该行代码将交由异步执行栈执行
            console.log("4444444444444444444444");
            resolve("5555555555555555555555")
        }, 1000)
    })
}
async function main() {
    console.log("1111111111111111111111");
    let d = await test4()                   //执行该行之后,后续代码交给异步执行栈执行,函数main直接return
    console.log(d);
}

console.log("0000000000000000000000");
main()
console.log("3333333333333333333333"); 

//输出结果
//  0000000000000000000000
//  1111111111111111111111
//  2222222222222222222222
//  3333333333333333333333
//  4444444444444444444444
//  5555555555555555555555
```

## ES8-`Obj.eys()`/`values()`/`entries()`

- `Object.keys(testObj)` 获取所有键
- `Object.values(testObj)` 获取所以值
- `Object.entries(testObj)` 获取所有键值组成的列表
- `Object.getOwnPropertyDescriptors(testObj)` 获取对象属性的描述对象

```js
let testObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: [1, 2, 3, 4, 5],
}

console.log(Object.keys(testObj));
//输出: [key1,key2,key3,key4]
console.log(Object.values(testObj));
//输出: [value1,value2,value3,value4]
console.log(Object.entries(testObj));
/*
    输出: 
    [
        ["key1","value1"],
        ["key2","value2"],
        ["key3","value3"],
        ["key4",[1,2,3,4,5]]
    ]
*/
console.log(Object.getOwnPropertyDescriptors(testObj));
// 输出:
// {
//     "key1": {
//         "value": "value1",
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     },
//     "key2": {
//         "value": "value2",
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     },
//     "key3": {
//         "value": "value3",
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     },
//     "key4": {
//         "value": [
//             1,
//             2,
//             3,
//             4,
//             5
//         ],
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     }
// }
```

**结合map的应用**

```js
let map = new Map(Object.entries(testObj))
console.log(map);
//  输出: Map(4) {'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3', 'key4' => Array(5)}
```

## ES9-针对于对象的`...`扩展运算符

ES6中的的扩展运算符是针对于数组的,ES9的新扩展运算是针对于对象的

**用法**

```js
//用法1
let obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: [1, 2, 3, 4, 5],
}
let obj2 ={...obj1}
console.log(obj2);


```

```js
//用法2
function test({host,port,...user}){
    console.log(host);
    console.log(port);
    console.log(user);//剩余的属性都会成为user对象的属性
    console.log(user.username);
    console.log(user.password);
}
test({
    host:"localhost",
    port:3306,
    username:"dyg",
    password:"123456",
})
```

## ES9-正则-提取内容新方法

**利用旧版标准提取字符串**

```js
let str = `<a href="http://baidu.com">百度</a>"`
const reg = /<a href="(.*)">(.*)<\/a>/
let result = reg.exec(str)
console.log(result);
    //输出 :  ['<a href="http://baidu.com">百度</a>', 'http://baidu.com', '百度']
console.log(result[1]);
    //输出 :  'http://baidu.com'
console.log(result[2]);
    //输出 :  '百度'
```

**利用新版标准提取字符串**

```js
let str2 = `<a href="http://baidu.com">百度</a>"`
const reg2 = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
let result2 = reg2.exec(str2)
console.log(result2);
    //输出 :  ['<a href="http://baidu.com">百度</a>', 'http://baidu.com', '百度']
console.log(result2.groups.url);
    //输出 :  'http://baidu.com'
console.log(result2.groups.text);
    //输出 :  '百度'
```

## ES9-正则-反向断言

```js
let str = `目标年新: 20W ¥`
// 正向断言
const reg = /(?<salary>\d+[a-zA-Z])(?= ¥)/   //提取出:[多个数字+单个字母+' ¥']中的[多个数字+单个字母]
const result = reg.exec(str)
console.log(result.groups.salary); //输出20W


//反向断言
const reg2 = /(?<=: )(?<salary>\d+[a-zA-Z])/   //提取出:[': '+多个数字+单个字母]中的[多个数字+单个字母]
const result2 = reg2.exec(str)
console.log(result2.groups  .salary); //输出20W
```

## ES9-正则-dotAll模式

```js
//dot . 元字符 除换行符以外的任意单个字符
//在dotAll 模式 . 将能匹配任意字符包括换行符

//目标提取出a和p标签的内容
let str = `
    <ul>
        <li>
            <a>肖申克的救赎</a>
            <p>上映时间:1994-09-10</p>
        </li>
        <li>
            <a>阿甘正传</a>
            <p>上映时间:1994-07-06</p>
        </li>
    </ul>
`

var reg_old = /<a>([\S\s]*?)<\/a>[\S\s]*?<p>([\S\s]*?)<\/p>/g      // 旧版: `.`仅能匹配任意字符,不包括换行符号
var data_old = ''
var result_old = []
while (data_old = reg_old.exec(str)) {
    result_old.push([data_old[1], data_old[2],])
}
console.log(result_old);

var reg_new = /<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs                    // 新版: `/s`表示是模式修正使得`.`能匹配任意字符,包括换行符号
var data_new = ''
var result_new = []
while (data_new = reg_new.exec(str)) {
    result_new.push([data_new[1], data_new[2],])
}
console.log(result_new);
```

**输出结果**
![图 1](./images/ES6-ES11新特性学习笔记/48142215ed63936854349dcedf19d963bdd31d5ae2e161afac79037e51b07bd8.png)  

## ES10-二维数组或Map转对象

`Object.fromEntries()`二维数组或Map转对象,实际上是ES8中`Object.entries(testObj)`的**逆运算**

```js
var result1 = Object.fromEntries([
    ["Name", "DYG"],
    ["Age", "21"],
])
console.log(result1);
// 输出:
// {Name: 'DYG', Age: '21'}



var result2 = Object.fromEntries(new Map([
    ["Name", "DYG"],
    ["Age", "21"],
]))
console.log(result2);
    // 输出:
    // {Name: 'DYG', Age: '21'}
```

## ES10-trimStart,trimEnd

- `str.trimStart()` 清除字符串开头处空白
- `str.trimEnd()` 清除字符串结束处空白

```js
        var str = "   测试文字   "
        console.log(str.trim())         //ES5 中的方法,输出结果为 : "测试文字"
        console.log(str.trimStart())    //ES10中的方法,输出结果为 : "   测试文字"
        console.log(str.trimEnd())      //ES10中的方法,输出结果为 : "测试文字   "
```

## ES10-flat,flatMap

**`flat()`**

```js
var test1 = [1, 2, 3, 4, 5, [6, 7]]
console.log(test1.flat());          //二维数组转一维
//输出 [1,2,3,4,5,6,7]

var test2 = [1, 2, 3, 4, 5, [6, 7, [8, 9]]]
console.log(test2.flat());          //三维数组转二维
//输出 [1,2,3,4,5,6,7,[8,9]]
console.log(test2.flat(2));         //三维数组转一维(指定深度为2)
//输出 [1,2,3,4,5,6,7,8,9]
```

**`flatMap()`**

```js
var test3 = [
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
]
console.log(test3.map(item => item[5]))
/* 输出: 
[
    [5,5]
    [5,5]
    [5,5]
    [5,5]
    [5,5]
    [5,5]
    [5,5]
]
*/
console.log(test3.flatMap(item => item[5]))
// 输出 [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
```

## ES10-`Symbol.prototype.description`

```js
var temp = Symbol("这是描述字符串")
console.log(temp.description); //输出: 这是描述字符串
```

## ES11-类的私有属性

```js
class Person{
    name;
    #age;
    constructor(name,age){
        this.name=name
        this.#age=age
    }
}

var girl = new Person("小红",18)
console.log(girl.name);
// console.log(girl.#age); //无法访问
```

## ES11-Promise.allSettled()

- `Promise.allSettled([p1,p2])` 始终返回成功的promise对象, 类似于`||`
  - 原先版本中有`Promise.all([p1,p2])`,其返回值成功失败由传入的参数决定,类似于`&&`

```js
var p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈")
    },1000)
})
var p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻")
    },1000)
})

console.log(Promise.allSettled([p1,p2]));
```

![图 3](./images/ES6-ES11新特性学习笔记/073d3d06eb89d441a759837d652fdeb6b5906e913fe25087ecb18b0b96184c74.png)  

## ES11-`String.prototype.matchAll()`

```js
let str = `
<ul>
    <li>
        <a>肖申克的救赎</a>
        <p>上映时间:1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映时间:1994-07-06</p>
    </li>
</ul>
`

var reg = /<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs

var result1 = str.matchAll(reg)     //返回的是一个可迭代对象
console.log([...result1]);          //所以可以使用扩展运算符 获取所有结果

var result2 = str.matchAll(reg)     //返回的是一个可迭代对象
for (let item of result2) {           //所以可以使用of 遍历对象 获取所有结果
    console.log(item);
    console.log({ "name": item[1], "time": item[2] });
}
```

## ES11-`?.`可选链操作符

```js
function test(config) {
    // 1
    var dbHost = config.db.host
    // var cacheHost = config.cache.host // 将报错,因为没有 config.cache
    console.log(dbHost);
    console.log(cacheHost);

    // 
    var dbHost = config && config.db && config.db.host              //手动层层判断该对象是否有该属性,不会报错
    var cacheHost = config && config.cache && config.cache.host     //手动层层判断该对象是否有该属性,不会报错
    console.log(dbHost);
    console.log(cacheHost);

    var dbHost = config?.db?.host           //自动判断问号前的属性是否存在,不会报错
    var cacheHost = config?.cache?.host     //自动判断问号前的属性是否存在,不会报错
    console.log(dbHost);
    console.log(cacheHost);
}

test({
    db: {
        host: "localhost",
        port: 1234,
        username: "root",
        password: "root",
    },
    // cache: {                     //不写cache
    //     // host:"localhost",
    //     port:4321,
    //     username:"root",
    //     password:"root",
    // },
})
```

## ES11-动态`import()`

- 原先的import是静态的,需要在文件开头把所需模块一次性import导入
- 动态import就是**按需导入**,**懒加载**

**基本用法**

```html
<button id="btn">点击测试</button>
<script type="module">
    var btn = document.querySelector("#btn")
    btn.addEventListener("click",async function(){
        let hello = await import("./_hello.js")     //import返回promise对象,使用await接受value
        hello.myFun()
    })
</script>
```

```js
//./_hello.js
export function myFun(){
    alert("hello")
}
```

## ES11-BigInt大整型

**BigInt**

- BigInt常量: `123n`
- BigInt()只能传入整数,不能传入浮点数
- BigInt类型的数只能和BigInt类型数做运算

**基本使用**

```js
        let test1 = 12345n;
        console.log(test1);          //输出: 12345n
        console.log(typeof test1); //输出: bigint

        let test2 = BigInt(12345);
        console.log(test2);          //输出: 12345n
        console.log(typeof test2); //输出: bigint
```

**用处**

```js
let maxInteger = Number.MAX_SAFE_INTEGER
console.log(maxInteger+0);  //输出:     9007199254740991
console.log(maxInteger+1);  //输出:     9007199254740992
console.log(maxInteger+2);  //输出:     9007199254740992        //无法再加

console.log(BigInt(maxInteger)+BigInt(0))//输出:     9007199254740991n
console.log(BigInt(maxInteger)+BigInt(1))//输出:     9007199254740992n
console.log(BigInt(maxInteger)+BigInt(2))//输出:     9007199254740993n        //可以再加
```

## ES11-globalThis

```js
console.log(globalThis) //在浏览器中指向 window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(globalThis) //在nodejs中指向 global
/*
Object [global] {
    global: [Circular],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
}
*/
```
