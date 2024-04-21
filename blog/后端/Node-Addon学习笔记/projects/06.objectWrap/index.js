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

