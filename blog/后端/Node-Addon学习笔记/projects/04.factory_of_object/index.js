var addon = require('bindings')('hello_world');

let obj = addon.creatObj()

console.log(obj) // { hello: 'world' }

