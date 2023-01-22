import { InputListener } from "./InputListener.js";
export class Player {
    constructor(posX, posY, GAME_WIDTH, GAME_HEIGHT) {
        this.posX = posX;
        this.posY = posY;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.speedX = 0;
        this.speedY = 0;
        this.width = 80;
        this.height = 10;
        this.moveSpeedX = 1.5;
        this.moveSpeedY = 1.5;
        this.fillStyle = "skyblue";
        this.strokeStyle = "white";
        this.posX = posX;
        this.posY = posY;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
    }
    move(timeInterval) {
        this.posX += this.speedX * timeInterval;
        this.posY += this.speedY * timeInterval;
    }
    update(timeInterval) {
        this.move(timeInterval);
    }
    draw(context) {
        context.save();
        context.fillStyle = this.fillStyle;
        context.fillRect(this.posX, this.posY, this.width, this.height);
        context.strokeStyle = this.strokeStyle;
        context.strokeRect(this.posX, this.posY, this.width, this.height);
        context.restore();
    }
    inputHandler(inputs) {
        if (inputs.includes(InputListener.KeyMap.PressRight)) {
            this.speedX = this.moveSpeedX;
        }
        else if (inputs.includes(InputListener.KeyMap.PressLeft)) {
            this.speedX = -this.moveSpeedX;
        }
        else {
            this.speedX = 0;
            this.speedY = 0;
        }
    }
}
