

## js原型相关知识回顾

### 原型、原型链、类


#### 原型

-  ECMAScript 标准:
   -  `someObject.[[Prototype]]` 用于标识 someObject 的原型
   - 可以通过 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 函数来访问原型
- 非标准：
  - 许多 JavaScript 引擎实现了 属性 `__proto__` 访问器
  - `Object.getPrototypeOf(obj) == obj.__proto__`
- 容易混淆的：
  - 构造函数的prototype属性上的对象会成为实例对象的原型
    ```js
    function fun(){}
    fun.prototype = {a:1}
    let obj = new fun();
    console.log(Object.getPrototypeOf(obj) == fun.prototype); // true
    ```


```js
// user是原型
const User = {
  name: "User",
  say() {
    console.log(this.name);
  },
};
const user = {
  name: "YiguiDing",
  __proto__: User,
};
user.say(); // YiguiDing
console.log(user);
```

### 原型链

```js
// 原型链：
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
const a = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};
```

### 类

```js
// 一个构造函数
function Animal(name) {
  this.name = name;
}
Animal.prototype.toString = function () {
  return `Animal(name:{this.name})`;
};

const anm = new Animal('anm');

console.log(anm.toString())
```

### 类的继承

```js
function Dog(name){
  this.name = name;
}
Dog.prototype.toString = function () {
  return `Dog(name:{this.name})`;
};

//  Dog 继承 Animal
Object.setPrototypeOf(Dog.prototype,Animal.prototype) // 等效：class Dog extends Animal {}

// 原型链: dog => Dog.prototype => Animal.prototype => Object.prototype => null
const dog = new Dog('dg');

console.log(dog.toString())
```

## 混合设计模式

混入模式（Mixin pattern）是一种软件设计模式，用于提供不同对象之间的可重用功能。

```js
var LoggingMixin = {
    log: function (message) {
        console.log(message);
    }
};

var UtilityMixin = {
    utilityMethod: function () {
        // 一些工具方法的实现
    }
};
// 定义一个需要混入功能的对象
class MyClass {
    someMethod() {
        this.log('Doing something...');
        this.utilityMethod();
    }
}
// 扩展MyClass的原型以包含Mixin的功能
function mixin(dist_class,includes){
    var dist = Object.getPrototypeOf(dist_class)
    for(var src of includes){
        for (var key in src) {
            dist[key] = Mixin[key];
        }
    }
}
mixin(MyClass,[LoggingMixin,UtilityMixin])

var obj = new MyClass();
obj.someMethod(); // 这个方法会调用来自 LoggingMixin 和 UtilityMixin 的方法
```


## Class.js源码

```js
import * as Util from './Util.js';
export class Class {
	// @function extend(props: Object): Function
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	static extend({statics, includes, ...props}) { 
        // 上面的 `...props` 是一个语法糖，它允许你捕获除了指定的键之外的所有键值对，并将它们存储在一个新的对象中。

		const NewClass = class extends this {};

        // 继承父类的静态方法 即: NewClass.[[Prototype]] = this
        // 这样NewClass也可以实现对NewClass.extend()的调用
		Object.setPrototypeOf(NewClass, this);

		const parentProto = this.prototype; // 构造函数上的原型
		const proto = NewClass.prototype; // 构造函数上的原型

        // 将statics对象上的属性和函数拷贝到NewClass对象上
		if (statics) {
			Util.extend(NewClass, statics); 
		}

        // 混合设计模式，将includes中的对象上的属性附加到原型上
		if (includes) {
			Util.extend.apply(null, [proto].concat(includes));
		}

        // 将proto对象上的属性和函数拷贝到原型对象上
		Util.extend(proto, props); 

        // 合并配置项
		if (proto.options) {
            // 初始化proto原型对象上的options配置对象
			proto.options = parentProto.options ? Object.create(parentProto.options) : {};
            // 扩展proto.options配置对象
			Util.extend(proto.options, props.options);
		}

      // 初始化回调钩子
		proto._initHooks = [];

		return NewClass;
	}

	// @function include(properties: Object): this
	// [Includes a mixin](#class-includes) into the current class.
	static include(props) {
		const parentOptions = this.prototype.options;
		Util.extend(this.prototype, props);
		if (props.options) {
			this.prototype.options = parentOptions;
			this.mergeOptions(props.options);
		}
		return this;
	}

	// @function mergeOptions(options: Object): this
	// [Merges `options`](#class-options) into the defaults of the class.
	static mergeOptions(options) {
		Util.extend(this.prototype.options, options);
		return this;
	}

	// @function addInitHook(fn: Function): this
	// Adds a [constructor hook](#class-constructor-hooks) to the class.
	static addInitHook(fn, ...args) { // (Function) || (String, args...)
		const init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
		return this;
	}

	constructor(...args) {
		this._initHooksCalled = false;

		Util.setOptions(this);

		// call the constructor
		if (this.initialize) {
			this.initialize(...args);
		}

		// call all constructor hooks
		this.callInitHooks();
	}

	callInitHooks() {
		if (this._initHooksCalled) {
			return;
		}

		// collect all prototypes in chain
		const prototypes = [];
		let current = this;

		while ((current = Object.getPrototypeOf(current)) !== null) {
			prototypes.push(current);
		}

		// reverse so the parent prototype is first
		prototypes.reverse();

		// call init hooks on each prototype
		for (const proto of prototypes) {
			for (const hook of proto._initHooks ?? []) {
				hook.call(this);
			}
		}

		this._initHooksCalled = true;
	}
}
```

