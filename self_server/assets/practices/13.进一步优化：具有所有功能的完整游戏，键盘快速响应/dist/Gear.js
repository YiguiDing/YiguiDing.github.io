import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";
// 蠕虫 继承 Animal 类
export class Gear extends Animal {
    constructor(posX, posY, CANVAS_WIDTH, CANVAS_HEIGHT) {
        super("./imgs/Gear.png", 213, 212, 0.5, [6], ["idle"]);
        this.Name = "Gear";
        this.reArrange_Timer = 0;
        this.posX = posX;
        this.posY = posY;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.moveSpeedX = RandomRange(0.4, 1);
        // randomReArrange_ment
        this.reArrange_NewPosX = this.posX;
        this.reArrange_NewPosY = this.posY;
        this.reArrange_TimeInterval = Math.floor(RandomRange(500, 2000)); // 0.5 ~ 2 秒
        this.reArrange_MoveSpeed = RandomRange(0.5, 2.0);
    }
    // 平移
    transform(stepX, stepY) {
        this.posX += stepX;
        this.posY += stepY;
        this.reArrange_NewPosX += stepX; // dx要根据这个来计算，所以也要平移
        this.reArrange_NewPosY += stepY;
    }
    reArrange(timeInterval) {
        // 重新排列
        if ((this.reArrange_Timer += timeInterval) >= this.reArrange_TimeInterval) {
            this.reArrange_Timer = 0;
            // 随机位置，注意其范围区间
            this.reArrange_NewPosX = RandomRange(this.posX - this.CANVAS_WIDTH, this.posX + this.CANVAS_WIDTH);
            this.reArrange_NewPosY = RandomRange(0, this.CANVAS_HEIGHT);
            console.log(this.reArrange_NewPosX);
            console.log(this.reArrange_NewPosY);
        }
        const dx = (this.reArrange_NewPosX - this.posX) / 1000;
        const dy = (this.reArrange_NewPosY - this.posY) / 1000;
        const moveStep = this.reArrange_MoveSpeed * timeInterval;
        this.posX += dx * moveStep;
        this.posY += dy * moveStep;
    }
    move(timeInterval) {
        this.posX -= this.moveSpeedX * timeInterval;
    }
    update(timeInterval) {
        this.reArrange(timeInterval);
        // this.move(timeInterval);
        super.update(timeInterval);
    }
}
