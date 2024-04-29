#! node
var { startProcess } = require('bindings')('hello_world');


async function main() {
    let fun = (arg) => console.log("hello world:", arg);
    startProcess(fun)
}

main();
/**
$ node ./index.js 
nativeThread start
0
BlockingCall start
BlockingCall end
lambda start
hello world: 1
lambda end
1
BlockingCall start
BlockingCall end
lambda start
hello world: 1002
lambda end
2
BlockingCall start
BlockingCall end
lambda start
hello world: 2010
lambda end
3
BlockingCall start
BlockingCall end
lambda start
hello world: 3021
lambda end
4
BlockingCall start
BlockingCall end
lambda start
hello world: 4028
lambda end
tsfn.Release();
finalizeCallback start
nativeThread.join();
finalizeCallback end
 */
