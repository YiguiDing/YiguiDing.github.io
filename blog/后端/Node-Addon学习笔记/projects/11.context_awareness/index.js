#! node
let { Worker, isMainThread } = require("worker_threads")
var addon = require('bindings')('hello_world');

async function main() {
    if (isMainThread) {
        new Worker(__filename)
            .on("online", () => {
                for (let idx = 0; idx < 5; idx++) {
                    addon.Add(1)
                    console.log("Main Process:" + addon.GetVal());
                }
            });

    } else {
        for (let idx = 0; idx < 5; idx++) {
            addon.Add(1)
            console.log("Sub Process:" + addon.GetVal());
        }
    }
}

main();
/**
$ node ./index.js
InitAddon
Main Process:1
Main Process:2
Main Process:3
Main Process:4
Main Process:5
InitAddon
Sub Process:1
Sub Process:2
Sub Process:3
Sub Process:4
Sub Process:5
 */