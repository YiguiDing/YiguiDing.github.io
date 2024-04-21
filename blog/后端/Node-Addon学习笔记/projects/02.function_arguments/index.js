var addon = require('bindings')('hello_world');

console.log(addon.add()); // TypeError: Wring number of arguments.
console.log(addon.add(1)); // TypeError: Wring number of arguments.
console.log(addon.add("111","222")); // TypeError: Wrong type of arguments.
console.log(addon.add(1, 2)); // 3