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