import { Animal } from "./Animal.js";
// 鬼
export class Plant extends Animal {
    constructor(posX, posY) {
        super("./imgs/enemy_plant.png", 60, 87, 1.5, [2], ["default"]);
        this.Name = "Plant";
        this.posX = posX;
        this.posY = posY;
        this.setFps(10);
    }
    move(timeInterval) {
        return;
    }
}
