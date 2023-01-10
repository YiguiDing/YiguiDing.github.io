import { ValueOf } from "./utils.js";

type KeyMapsValues = ValueOf<typeof InputListener.KeyMaps>;
export class InputListener {
	static KeyMaps = {
		PressRight: "ArrowRight",
		PressLeft: "ArrowLeft",
		PressUp: "ArrowUp",
		PressDown: "ArrowDown",
		PressSpase: " ",
		Enter: "Enter",
		Escape: "Escape"
	} as const; // const 可以保证ValueOf能起作用
	inputs: Array<KeyMapsValues> = [];
	constructor() {
		this.listenning();
	}
	listenning() {
		window.addEventListener("keydown", event => {
			if (Object.values(InputListener.KeyMaps).includes(event.key as KeyMapsValues)) {
				// this.inputs.pop(); // 弹出栈顶
				this.inputs.unshift(event.key as KeyMapsValues); // 放到开头
			}
		});
		window.addEventListener("keyup", event => {
			this.inputs = []; // 弹出栈顶
		});
	}
}
