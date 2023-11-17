import { RandomRange } from "./utils.js";
export class Ball {
    constructor(posX, posY, GAME_WIDTH, GAME_HEIGHT) {
        this.posX = posX;
        this.posY = posY;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.radius = 10;
        this.fillStyle = "white";
        this.strokeStyle = "whitesmoke";
        this.speedX = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);
        this.speedY = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);
        this.posX = posX;
        this.posY = posY;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.GAME_WIDTH = GAME_WIDTH;
    }
    reverseSpeedX() {
        this.speedX = -this.speedX;
    }
    reverseSpeedY() {
        this.speedY = -this.speedY;
    }
    move(timeInterval) {
        this.posX += this.speedX * timeInterval;
        this.posY += this.speedY * timeInterval;
    }
    _update(timeInterval) {
        this.move(timeInterval);
    }
    update(timeInterval) {
        let step = 1; // 按1ms模拟
        do {
            this._update(step);
            timeInterval -= step;
        } while (timeInterval > 0);
    }
    draw(context) {
        context.save();
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.strokeStyle = this.strokeStyle;
        context.stroke();
        context.fillStyle = this.fillStyle;
        context.fill();
        context.restore();
    }
}
