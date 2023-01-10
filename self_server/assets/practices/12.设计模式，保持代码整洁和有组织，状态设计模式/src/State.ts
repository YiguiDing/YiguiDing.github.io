import { InputListener } from "./InputListener.js";
import { ValueOf } from "./utils.js";
export class State {
	state: string | number | symbol;
	constructor(state: string | number | symbol) {
		this.state = state;
	}
	enter() {
		return;
	}
	update() {
		return;
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		return;
	}
}
