#! node
var addon = require('bindings')('hello_world');


async function main() {
    let res = await addon.CreatMyPromiseAsyncWorker()
    console.log(res); // OK
}

main();

/**
CreatMyPromiseAsyncWorker
0
1
2
3
4
5
6
7
8
9
10
OnOK
OK
 */