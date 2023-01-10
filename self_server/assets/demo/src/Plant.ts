import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 鬼
export class Plant extends Animal {
	Name = "Plant";
	constructor(posX: number, posY: number) {
		super("./imgs/enemy_plant.png", 60, 87, 1.5, [2], ["default"]);
		this.posX = posX;
		this.posY = posY;
		this.setFps(10);
	}
	move(timeInterval: number): void {
		return;
	}
}
