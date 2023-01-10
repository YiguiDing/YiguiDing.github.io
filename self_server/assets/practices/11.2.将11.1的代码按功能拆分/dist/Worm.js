import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";
// 蠕虫 继承 Animal 类
export class Worm extends Animal {
    constructor(game) {
        super(game, "./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
        this.posX = this.game.CANVAS_WIDTH;
        this.posY = this.game.CANVAS_HEIGHT - this.drawHeight;
        this.moveSpeedX = RandomRange(0.1, 0.2);
    }
    isAlive() {
        return this.posX + this.drawWidth > 0;
    }
    move(timeInterval) {
        this.posX -= this.moveSpeedX * timeInterval;
    }
    update(timeInterval) {
        this.move(timeInterval);
    }
}
