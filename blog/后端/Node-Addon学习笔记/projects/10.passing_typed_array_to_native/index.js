#! node
var addon = require('bindings')('hello_world');

let readTypedArray = addon.readTypedArray


let typedArray = new Uint16Array(10);

typedArray[0] = 1
typedArray[1] = 2
typedArray[2] = 3

console.log(readTypedArray(typedArray))
/**
    1,2,3,0,0,0,0,0,0,0,
    vector:1,2,3,0,0,0,0,0,0,0,
    true
 */ 