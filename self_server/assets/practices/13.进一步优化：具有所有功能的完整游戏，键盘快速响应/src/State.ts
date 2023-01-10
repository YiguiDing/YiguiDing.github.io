import { InputListener } from "./InputListener.js";
import { ValueOf } from "./utils.js";
export abstract class State {
	stateName: string | number | symbol;
	constructor(stateName: string | number | symbol) {
		this.stateName = stateName;
	}
	abstract enter(): void;
	abstract update(timeInterval: number): void;
	abstract inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void;
}
