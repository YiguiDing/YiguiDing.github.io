import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";
// 鬼
export class Ghost extends Animal {
    constructor(game) {
        super(game, "./imgs/Ghost.png", 261, 209, 0.5, [6], ["idle"]);
        this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
        this.posX = this.game.CANVAS_WIDTH;
        this.posY = 0.5 * RandomRange(0, this.game.CANVAS_HEIGHT - this.drawHeight);
        this.moveSpeedX = RandomRange(0.2, 0.3);
        this.alpha = RandomRange(0.2, 0.5);
        this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
        this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
        this.shakeGapRadius = RandomRange(2, 5);
    }
    isAlive() {
        return this.posX + this.drawWidth > 0;
    }
    move(timeInterval) {
        this.posX -= this.moveSpeedX * timeInterval;
    }
    shake(timeInterval) {
        this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
        this.shakeAngle += this.shakeDeltaAngle * timeInterval;
    }
    update(timeInterval) {
        this.move(timeInterval);
        this.shake(timeInterval);
    }
    animate(timeInterval) {
        this.game.Context2D.save();
        this.game.Context2D.globalAlpha = this.alpha;
        super.animate(timeInterval);
        this.game.Context2D.restore();
    }
}
