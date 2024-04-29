#! node
var addon = require('bindings')('hello_world');

let MyObject = addon.MyObject
let creatMyObject = addon.creatMyObject
let addMyObj = addon.addMyObj

let myObj0 = new MyObject(321)
let myObj1 = creatMyObject(123)

let myObj3 = addMyObj(myObj0, myObj1);

console.log(myObj3.GetVal()) // 444