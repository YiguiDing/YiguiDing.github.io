export class InputListener {
    constructor() {
        this.inputs = [];
        this.listening();
    }
    listening() {
        window.addEventListener("keydown", event => {
            let key = event.key;
            if (Object.values(InputListener.KeyMap).includes(key) && !this.inputs.includes(key)) {
                this.inputs.unshift(key); // 放到开头，表示先按下的键优先级高
            }
        });
        window.addEventListener("keyup", event => {
            let key = event.key;
            if (this.inputs.includes(key)) {
                this.inputs.splice(this.inputs.indexOf(key), 1);
            }
        });
    }
}
InputListener.KeyMap = {
    PressRight: "ArrowRight",
    PressLeft: "ArrowLeft",
    PressUp: "ArrowUp",
    PressDown: "ArrowDown",
    PressSpace: " ",
    Enter: "Enter",
    Escape: "Escape"
}; // const 可以保证ValueOf能起作用
