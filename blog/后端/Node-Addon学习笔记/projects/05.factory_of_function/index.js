#! node
var addon = require('bindings')('hello_world');

let fun = addon.createFunction()

console.dir(fun.toString()) // 'function hello_world() { [native code] }'
console.log(fun()) // 'hello_world'

