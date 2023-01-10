import { Animal } from "./Animal.js";
import { Game } from "./Game.js";
import { RandomRange } from "./utils.js";

// 鬼
export class Ghost extends Animal {
	alpha: number; // 透明度
	shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
	shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
	shakeGapRadius: number; // 摆动范围半径 单位：像素
	constructor(game: Game) {
		super(game, "./imgs/Ghost.png", 261, 209, 0.5, [6], ["idle"]);
		this.posX = this.game.CANVAS_WIDTH;
		this.posY = 0.5 * RandomRange(0, this.game.CANVAS_HEIGHT - this.drawHeight);
		this.moveSpeedX = RandomRange(0.2, 0.3);
		this.alpha = RandomRange(0.2, 0.5);
		this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
		this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
		this.shakeGapRadius = RandomRange(2, 5);
	}
	isAlive(): boolean {
		return this.posX + this.drawWidth > 0;
	}
	move(timeInterval: number) {
		this.posX -= this.moveSpeedX * timeInterval;
	}
	shake(timeInterval: number) {
		this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
		this.shakeAngle += this.shakeDeltaAngle * timeInterval;
	}
	update(timeInterval: number): void {
		this.move(timeInterval);
		this.shake(timeInterval);
	}
	animate(timeInterval: number): void {
		this.game.Context2D.save();
		this.game.Context2D.globalAlpha = this.alpha;
		super.animate(timeInterval);
		this.game.Context2D.restore();
	}
}
