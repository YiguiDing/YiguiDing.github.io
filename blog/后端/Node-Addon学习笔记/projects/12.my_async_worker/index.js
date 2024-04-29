#! node
var addon = require('bindings')('hello_world');

async function main() {

    addon.StartAsyncWorker(function () {
        console.log('callback:done1');
    }, "data1");

    addon.StartAsyncWorker(function () {
        console.log('callback:done2');
    }, "data2");

}

main();

/**
$ node ./index.js
StartWorker
StartWorker
Execute
Execute
0:data1
0:data2
1:data1
1:data2
2:data1
2:data2
3:data1
OnOK
3:data2
callback:done1
Destroy
OnOK
callback:done2
 */