import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class Worm extends Animal {
	Name = "Worm";
	constructor(posX: number, posY: number) {
		super("./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
		this.posX = posX;
		this.posY = posY;
		this.moveSpeedX = RandomRange(0.05, 0.1);
	}
	move(timeInterval: number) {
		this.posX -= this.moveSpeedX * timeInterval;
	}
	update(timeInterval: number): void {
		this.move(timeInterval);
		super.update(timeInterval);
	}
}
