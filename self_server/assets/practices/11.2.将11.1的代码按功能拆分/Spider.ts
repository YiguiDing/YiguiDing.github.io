import { Animal } from "./Animal.js";
import { Game } from "./Game.js";
import { RandomRange } from "./utils.js";

// 蜘蛛
export class Spider extends Animal {
	shakePosY: number; // 初始坐标
	shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
	shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
	shakeGapRadius: number; // 摆动范围半径 单位：像素
	constructor(game: Game) {
		super(game, "./imgs/Spider.png", 310, 175, 0.5, [6], ["idle"]);
		this.posX = RandomRange(0, this.game.CANVAS_WIDTH - this.drawWidth);
		this.posY = -this.drawHeight;
		this.shakePosY = this.posY;
		this.shakeAngle = 0;
		this.shakeDeltaAngle = RandomRange(Math.asin(0.0005), Math.asin(0.001));
		this.shakeGapRadius = RandomRange(this.game.CANVAS_HEIGHT / 4, this.game.CANVAS_HEIGHT);
	}
	isAlive(): boolean {
		return this.shakeAngle <= Math.PI; // 播放完一个周期便消失
	}
	shake(timeInterval: number) {
		// 蜘蛛上下移动
		this.posY = this.shakePosY + this.shakeGapRadius * Math.sin(this.shakeAngle);
		this.shakeAngle += this.shakeDeltaAngle * timeInterval;
	}
	move(timeInterval: number): void {
		this.shake(timeInterval);
	}
	update(timeInterval: number): void {
		this.move(timeInterval);
	}
	animate(timeInterval: number): void {
		// 绘制蜘蛛丝
		this.game.Context2D.beginPath();
		this.game.Context2D.moveTo(this.posX + this.drawWidth / 2, 0);
		this.game.Context2D.lineTo(this.posX + this.drawWidth / 2, this.posY);
		this.game.Context2D.stroke();
		// 绘制动画
		super.animate(timeInterval);
	}
}