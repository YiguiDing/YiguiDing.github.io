import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class GhostBird extends Animal {
	Name = "GhostBird";

	asline: { angle: number; angleIncreaseSpeed: number; factorX: number; factorY: number } = {
		angle: 0,
		angleIncreaseSpeed: 0,
		factorX: 0,
		factorY: 0
	};

	CANVAS_WIDTH: number;
	CANVAS_HEIGHT: number;
	offsetY: number;
	offsetX: number;

	constructor(posX: number, posY: number, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
		super("./imgs/GhostBird.png", 218, 177, 0.5, [6], ["idle"]);
		this.posX = posX;
		this.posY = posY;
		this.CANVAS_WIDTH = CANVAS_WIDTH;
		this.CANVAS_HEIGHT = CANVAS_HEIGHT;
		this.moveSpeedX = RandomRange(0.4, 1);
		// for asline
		this.offsetX = 0; // 相对于屏幕右上角0，0位置的偏移量
		this.offsetY = 0;
		this.asline.angle = (Math.PI / 365) * RandomRange(-365, 365); // 初相角 -1 ~ 1
		this.asline.angleIncreaseSpeed = (Math.PI / 365) * RandomRange(30, 90) * Math.sign(RandomRange(-1, 1)); // 移动周期 30~90 感觉不错
		this.asline.factorX = (Math.PI / 365) * 0.45;
		this.asline.factorY = (Math.PI / 365) * 0.35;
	}
	transform(stepX: number, stepY: number): void {
		// this.offsetX += stepX;
		// this.offsetY += stepY;
	}
	move_asline(timeInterval: number) {
		// 线性运动
		this.posX =
			this.offsetX + (this.CANVAS_WIDTH / 2) * Math.cos(this.asline.angle * this.asline.factorX) + (this.CANVAS_WIDTH / 2 - this.drawWidth / 2);
		this.posY =
			this.offsetY + (this.CANVAS_HEIGHT / 2) * Math.sin(this.asline.angle * this.asline.factorY) + (this.CANVAS_HEIGHT / 2 - this.drawHeight / 2);
		const angleStep = this.asline.angleIncreaseSpeed * timeInterval;
		this.asline.angle += angleStep;
	}
	move(timeInterval: number) {
		this.posX -= this.moveSpeedX * timeInterval;
	}
	update(timeInterval: number): void {
		this.move_asline(timeInterval);
		super.update(timeInterval);
	}
}
