(() => {

    var a: any = { kkk: 123 }; // a是any类型
    var b;              // b是any类型
    function c(d) {      // d是any类型
        return d;
    }

})();


(() => {
    interface Person { name: string, age: number };
    var personA: Person;
    var personB: typeof personA; // typeof支持变量 personB 的 类型 和 personA 一致
    var age: typeof personA.age; // typeof支持对象的属性
    // var result: typeof funA(a,b);// typeof不支持上述两种之外的其他形式的类型
})();


(() => {


})();


(() => {
    class Person {
        name: string;  // 未初始化,有类型
        age = 0; // 初始化，有类型
        gender // any类型
        constructor(name: string, age: number, gender) {// 构造函数不需要返回值类型
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        getName(): string {
            return this.name
        }
        setName(name: string): void {
            this.name = name
        }
    }
    const person = new Person("dyg", 18, "男");
    person.name
})();



(() => {

    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class Dog extends Animal {
        constructor(name: string, age: number) {
            super(name, age);
        }
        bark() {
            console.log("汪汪汪");
        }
    }

    const dog = new Dog("??", 12);
    dog.bark();

})();



(() => {
    interface Animal {
        name: string
        age: number
        gender: '雌' | "雄"
        bark(): void
    }
    class Dog implements Animal {
        name: string;
        age: number;
        gender: "雌" | "雄";
        constructor(name: string, age: number, gender: "雌" | "雄") {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        bark(): void {
            console.log("汪汪汪");
        }
    }

    const dog = new Dog("xxx", 10, '雄');
})();



(() => {
    class Example {
        public name: string; // 在类的外部可见 （实例对象可以访问到）。此外，public是默认的 也可以省略
        protected age: number; // 在本类、子类的内部可见（实例对象无法访问到）
        private gender: string; // 在本类的内部可见 （实例对象无法访问到）
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        private __myFun__() {// 私有函数
            console.log("这是一个内部辅助函数");
        }
    }
})();



(() => {
    class Example {
        readonly age: number = 0; // 经 readonly 修饰的属性，有注解，只能在 变量赋初始值 和 constructor中 赋值
        readonly height = 170; // 经 readonly 修饰的属性 ，不加注解，则为字面量类型
        constructor(age: number) {
            this.age = age
            this.height = 171 // 报错
        }
        fun() {
            this.age = 123; // 报错
        }
    }

    const example = new Example(1);
    example.age = 1;// 报错，无法修改

})();



(() => {
    class Point { x: number; y: number };
    class Point2D { x: number; y: number };
    class Point3D { x: number; y: number; z: number };

    const point1: Point = new Point2D(); // Point2D 和 Point 形状(结构)兼容
    const point2: Point = new Point3D(); // Point3D 和 Point 形状(结构)兼容
})();


(() => {


})();



(() => {
    interface Animal { type: string; age: number; gender: string };
    interface Human extends Animal { name: string };

    let humanA: Human = {
        name: "",
        type: "",
        age: 0,
        gender: ""
    }

    let animalA: Animal = humanA; // Human 向下兼容 Animal
})();



(() => {
    interface Point1D { x: number }
    interface Point2D { x: number; y: number; }
    interface Point3D { x: number; y: number; z: number }

    let p3: Point3D = { x: 1, y: 2, z: 3 }; // 
    let p2: Point2D = p3;            // Point3D 向下兼容 Point2D
    let p1: Point1D = p3;            // Point2D 向下兼容 Point1D
})();







(() => {
    function SumA(numA: number, numB: number, numC: number) {
        return numA + numB + numC;
    }
    function SumB(numA: number, numB: number) {
        return numA + numB;
    }
    var funA: (numA: number, numB: number, numC: number) => number;
    funA = SumA;// funA 兼容 SumA
    funA = SumB;// funA 兼容 SumB
})();


// 函数形式参数相同位置的参数类型要相同或兼容
(() => {
    type fun1 = (num: number) => void;
    type fun2 = (num: number) => void;

    var f1: fun1;
    var f2: fun2;
    f1 = f2;        // 形式参数相同位置的参数类型要相同
    f2 = f1;
})();


(() => {
    interface Point2D { x: number; y: number };
    interface Point3D { x: number; y: number; z: number };
    type fun2 = (position: Point2D) => void;
    type fun3 = (position: Point3D) => void;

    var f2: fun2 = (pos: Point2D) => { return };
    var f3: fun3 = (pos: Point3D) => { return };

    // f3 = f2; // fun3 兼容 fun2 类型，可理解为将对象展开为函数形式参数，形式参数少的可以赋值给形式参数多的
    f2 = f3; // 严格模式会报错，
})();



(() => {
    interface Point2D { x: number; y: number };
    interface Point3D { x: number; y: number; z: number };

    type fun2 = (position: Point2D) => Point2D;
    type fun3 = (position: Point2D) => Point3D;

    var f2: fun2 = (pos: Point2D) => { return pos };
    var f3: fun3 = (pos: Point2D) => { return { ...pos, z: 100 } };

    f2 = f3; // 兼容   对象元素多的可以赋值给少的
    f3 = f2; // 不兼容 对象元素少的不能赋值给多的

})();



(() => {


})();



(() => {
    interface Person { name: string };
    interface Contact { phone: string };

    type PersonDetail = Person & Contact; // 交叉类型就是将两个类型复合

    var personDetail: PersonDetail = {
        name: "dyg",
        phone: "123"
    }

})();



(() => {
    interface A { a: number };
    interface B extends A {
        a: string // 报错
    }
})();

(() => {
    interface A { a: number };
    interface B { a: string };
    type C = A & B; // a 将变为 never类型 表示永远不存在的值的类型
    var a: A = { a: 1 }
    var b: B = { a: "1" }
    var c: C = { a: 1 }  // 报错
})();


(() => {
    interface A { fun: () => void };
    interface B { fun: (num: number) => void };
    type C = A & B; // fun的类型将变为： (()=>void) && ((num:number)=>void) 类型
    var c: C = { fun: () => { return } }
    c.fun() // 方法的重载
    c.fun(123) // 方法的重载
})();



(() => {
    // 泛型函数
    function echo<voiceType>(voice: voiceType): voiceType {
        return voice
    }

    // 泛型函数的调用
    echo<string>("你好!");
    echo<number>(12345);

    // 简化版的泛型函数调用
    echo("你好！"); // 简化后 voiceType 将被自动推断为字面量类型
    echo(12345);

})();



(() => {
    // 泛型类型的收缩
    // 1.指定更加明确的类型
    // function myEcho<voiceType>(voice:voiceType[]):voiceType[]{
    //     console.log(voice.length);
    //     return voice
    // }
    // 2.添加类型收缩约束
    interface LengthAble { length: number }
    function echo<voiceType extends LengthAble>(voice: voiceType): voiceType {
        console.log(voice.length);
        return voice
    }

    // 泛型函数的调用
    echo<string>("你好!");
    echo<number[]>([1, 2, 3, 4, 5]);

    // 简化版的泛型函数调用
    echo("你好！"); // 简化后 voiceType 将被自动推断为字面量类型
    echo([1, 2, 3, 4, 5]); // 
    echo({ length: 1, msg: "hahahah" });

})();



(() => {
    // 多个泛型类型
    function hash<typeKey, typeValue>(key: typeKey, value: typeValue): typeValue {
        return value
    }
    // keyof
    function getValue<typeObj, typeKey extends keyof typeObj>(obj: typeObj, key: typeKey): any {
        return obj[key]
    }
})();



(() => {
    // 接口泛型,注意接口没有类型推断机制
    interface IdFuncs<IdType> {
        id: (value: IdType) => IdType;
        ids: () => IdType[];
    }
    var obj: IdFuncs<number> = {
        id(value: number) { return value },
        ids(): number[] { return [1, 2, 3] }
    }
})();

(() => {
    interface MapItem<keyType, ValueType> {
        key: keyType;
        value: ValueType;
    }
    var item: MapItem<string, number[]> = {
        key: "123",
        value: [1, 2, 3]
    }
})();


(() => {
    class ExampleClass<Type>{
        default: Type;
        constructor(value: Type) {
            this.default = value
        }
        set(value: Type): void {
            this.default = this.default
        }
        get() {
            return this.default;
        }
    }

    var ex = new ExampleClass(123); // 类的泛型支持类型推断,在不复杂的情况下可以省略类型推断
    ex.set(321)
    ex.get()

})();


(() => {

    // 泛型工具类型 : Partial Readonly 
    interface Props {
        id: string;
        title: string;
        children: number[];
    }
    type PartialProps = Partial<Props>; // 创建新类型 使得所有属性变成可选类型，即不是必须的
    type ReadonlyProps = Readonly<Props>; // 创建新类型 使得所有属性变成只读类型
    type PickProps = Pick<Props, "id" | "title"> // 创建新类型 从原类型中选择一组属性构造新类型
    type RecordObj = Record<"id" | "hash", string[]>; // 创建记录类型 键名不同，键值相同

    var p1: Props = {
        id: "",
        title: "",
        children: [],
    }
    var p2: PartialProps = {
        // 可以没有
    }
    var p3: ReadonlyProps = {
        id: "",
        title: "",
        children: [],
    }
    // p3.id = "123" // 报错
    var p4: PickProps = {
        id: "",
        title: ""
    }
    var p5: RecordObj = {
        id: ["123", "1111"],
        hash: ["12132", "11211"]
    }

})();


(() => {
    // 索引签名类型：用于无法确定对象中具体的属性名或者说属性个数任意的场景
    interface AnyObj {
        [key: string]: number;// 类型为字符串的键 的值 为number类型
    }
    var obj1: AnyObj = {
        a: 1,
        ab: 12,
        abc: 123,
    }

    interface myArray<T> {
        [index: number]: T// 类型为number的键 的值为 T类型
    }
    var myarry: myArray<number> = [1, 2, 3];
    myarry[0]

})();



(() => {
    // 映射类型：
    // + 映射类型基于索引签名，所以也使用了[]符号
    // + key in PropKeys 表示 key可以是联合类型中的任意一个
    // + 映射类型只能在类型别名中使用，不能在接口中使用
    // + type1 和 type2 type3 等效
    type Type1 = { a: number; b: number; c: number }
    type PropKeys = "a" | "b" | "c";
    type Type2 = { [key in PropKeys]: number }
    type Type3 = { [key in keyof Type1]: number }
})();


(() => {
    // Partial实现原理
    type Partial<T> = {
        [Key in keyof T]?: T[Key]
    }
})();


(() => {
    // 索引查询类型
    type Parps = { a: number; b: string; c: boolean };
    type TypeA = Parps["a"] // 查询Parps中a属性的类型 即number类型
    type TypeAB = Parps["a" | "b"] // 即为 number | string 类型
    type TypeABC = Parps[keyof Parps] // 即为 number | string | boolean 类型
})();


(()=>{

})();