#! node
var addon = require('bindings')('hello_world');
let { EventEmitter } = require("events")


class MySocket extends EventEmitter {
    constructor() {
        super()
        addon.CreatMyDispatcher(this.emit.bind(this));
    }
}


async function main() {
    let mySocket = new MySocket()

    mySocket.on('open', () => {
        console.log('open')
    })
    mySocket.on('data', (data) => {
        console.log('data', data)
    })
    mySocket.on('close', () => {
        console.log('close')
    })
}

main();

/**
CreatMyDispatcher
Execute
open
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
data <Buffer 00 01 02 03 04>
close
OnOK
Destroy
 */