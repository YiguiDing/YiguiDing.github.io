// 
var a:number=1;
var b:string="1";
var c:boolean=true;
var d:null=null;
var e:undefined=undefined;
var f:symbol= Symbol("123");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


var g:object=[];
var h:object={};
var i:object=function a(){};
var j:object=function (){};
var k:object=()=>{};
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);



// 数组类型的两种写法
var l:number[] = [1,2,3]
var m:Array<number> = [1,2,3]
console.log(l);
console.log(m);


function funA(a:number,b:number):number{
    return a+b;
}
  
var funB = (a:number,b:number):number =>{
    return a+b;
}


var funC:(a:number,b:number)=>number = (a,b)=>a+b;
var funC:(a:number,b:number)=>number = function (a,b){return a+b};


function funD(start?:number,end?:number):number{
    return start || end || 0
}


var obj:{
    name:string;  // ;号可以去掉
    age:number; isUser?:boolean; // 中间的分号不能去掉
    sayHi():void;
    greet?:(name:string)=>void
} = {
    name:"hahahah",
    age:18,
    sayHi(){}
}


// 接口
interface IPerson {
    name:string;
    age:number;
    sayHi():void;
  }
var personA:IPerson;


// 接口继承
interface Point2D{x:number;y:number;}
interface Point3D extends Point2D {z:number}


function funA_(a:number,b:number){
  return a+b; //函数返回值将自动推断为number
}

// let cc:string = funA_(1,2); // 报错



// 类型断言
// const alink = document.querySelector("a") as HTMLAnchorElement
// const alink = <HTMLAnchorElement> document.querySelector("a")
// alink.href


// 字面量类型
var aaa = "stringA";   // aaa 的 类型 为 string 即 字符串类型
const bbb = "stringB"; // bbb 的 类型 为 "stringB" 即 字面量类型
var ccc:"stringC"|"stringD" = "stringC" // ccc 的 类型为 两个字面量类型之一
function _changeDirection(direction:"up"|"down"|"left"|"right"){ // 字面量类型的应用
    switch(direction){
        case "up":
            ;
        case "down":
            ;
        case "left":
            ;
        case "right":
            ;
    }
}
_changeDirection("down");

// 枚举
// enum Direction{Up="up",Down="down",Left="left",Right="right"};// 字符串枚举，没有自增长行为，需依次赋值
// enum Direction{Up=0,Down,Left,Right};// 数字枚举，有自增长行为，第一个为0后续依次+1
// function changeDirection(direction:Direction){
//     switch(direction){
//         case Direction.Up:
//         case Direction.Down:
//         case Direction.Left:
//         case Direction.Right:
//     }
//     console.log(direction);
// }
// changeDirection(Direction.Down);
// 枚举原理
// 编译前：
enum Direction{Up="up",Down="down",Left="left",Right="right"};// 字符串枚举，没有自增长行为，需依次赋值
// 编译后：
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
// 输出
// console.log(Direction);
// output:
// { Up: 'up', Down: 'down', Left: 'left', Right: 'right' }

// enum Direction{Up=0,Down,Left,Right};// 数字枚举，有自增长行为，第一个为0后续依次+1
// 编译后：
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
//     Direction[Direction["Left"] = 2] = "Left";
//     Direction[Direction["Right"] = 3] = "Right";
// })(Direction || (Direction = {}));

// console.log(Direction);
// output
// {
//     '0': 'Up',
//     '1': 'Down',
//     '2': 'Left',
//     '3': 'Right',
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3
// }


