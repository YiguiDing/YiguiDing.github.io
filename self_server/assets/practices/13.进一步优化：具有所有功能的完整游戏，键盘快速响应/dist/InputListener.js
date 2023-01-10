export class InputListener {
    constructor() {
        this.inputs = [];
        this.listenning();
    }
    listenning() {
        window.addEventListener("keydown", event => {
            if (Object.values(InputListener.KeyMaps).includes(event.key)) {
                // this.inputs.pop(); // 弹出栈顶
                this.inputs.unshift(event.key); // 放到开头
            }
        });
        window.addEventListener("keyup", event => {
            this.inputs = []; // 弹出栈顶
        });
    }
}
InputListener.KeyMaps = {
    PressRight: "ArrowRight",
    PressLeft: "ArrowLeft",
    PressUp: "ArrowUp",
    PressDown: "ArrowDown",
    PressSpase: " ",
    Enter: "Enter",
    Escape: "Escape"
}; // const 可以保证ValueOf能起作用
