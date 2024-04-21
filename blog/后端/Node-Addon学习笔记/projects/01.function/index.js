var addon = require('bindings')('hello_world');

console.log(addon.hello()); // 'world'