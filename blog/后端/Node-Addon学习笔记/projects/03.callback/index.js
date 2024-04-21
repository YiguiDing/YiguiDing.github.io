var addon = require('bindings')('hello_world');

addon.call(
    function (msg) {
        console.log(msg); // "hello_world"
    }
)