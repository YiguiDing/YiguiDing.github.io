#! node
var addon = require('bindings')('hello_world');

let readArrayBuffer = addon.readArrayBuffer

let arrayBuf = new ArrayBuffer(10);
let dataView = new DataView(arrayBuf);
let typedAry = new Uint8Array(arrayBuf);

dataView.setUint8(0, 1);
dataView.setUint8(1, 2);
dataView.setUint8(2, 3);
typedAry[3]=4
typedAry[4]=5
typedAry[5]=6

console.log(arrayBuf);

console.log(readArrayBuffer(arrayBuf))
/**
 * bytes:1,2,3,4,5,6,0,0,0,0,
 * bytes:1,2,3,4,5,6,0,0,0,0,
 * true
 */