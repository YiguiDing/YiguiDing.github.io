import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";
// 蠕虫 继承 Animal 类
export class Bat extends Animal {
    constructor(posX, posY) {
        super("./imgs/Bat.png", 266, 188, 0.5, [6], ["idle"]);
        this.Name = "Bat";
        this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
        this.posX = posX;
        this.posY = posY;
        this.moveSpeedX = RandomRange(0.05, 0.1);
        this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
        this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
        this.shakeGapRadius = RandomRange(2, 5);
    }
    shake(timeInterval) {
        this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
        this.shakeAngle += this.shakeDeltaAngle * timeInterval;
    }
    move(timeInterval) {
        this.posX -= this.moveSpeedX * timeInterval;
    }
    update(timeInterval) {
        this.move(timeInterval);
        this.shake(timeInterval);
        super.update(timeInterval);
    }
}
