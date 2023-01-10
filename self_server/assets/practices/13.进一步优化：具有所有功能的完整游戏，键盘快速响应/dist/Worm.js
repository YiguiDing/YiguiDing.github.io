import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";
// 蠕虫 继承 Animal 类
export class Worm extends Animal {
    constructor(posX, posY) {
        super("./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
        this.Name = "Worm";
        this.posX = posX;
        this.posY = posY;
        this.moveSpeedX = RandomRange(0.05, 0.1);
    }
    move(timeInterval) {
        this.posX -= this.moveSpeedX * timeInterval;
    }
    update(timeInterval) {
        this.move(timeInterval);
        super.update(timeInterval);
    }
}
