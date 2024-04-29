#! node
var { Demo } = require('bindings')('hello_world');


async function main() {
    let demo = new Demo();

    let fun = () => console.log("hello world");

    demo.setFun(fun)

    demo.callFunRef() //  hello world

    try {
        demo.callFun() // error
    } catch (error) {
        console.log(error);
    }
}

main();

