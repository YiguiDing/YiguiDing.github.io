export class Block {
    constructor(posX, posY, BLOCK_WIDTH, BLOCK_HEIGHT, fillStyle, strokeStyle) {
        this.posX = posX;
        this.posY = posY;
        this.BLOCK_WIDTH = BLOCK_WIDTH;
        this.BLOCK_HEIGHT = BLOCK_HEIGHT;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.posX = posX;
        this.posY = posY;
        this.BLOCK_WIDTH = BLOCK_WIDTH;
        this.BLOCK_HEIGHT = BLOCK_HEIGHT;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }
    update(timeInterval) { }
    draw(context) {
        context.save();
        context.fillStyle = this.fillStyle;
        context.fillRect(this.posX, this.posY, this.BLOCK_WIDTH, this.BLOCK_HEIGHT);
        context.strokeStyle = this.strokeStyle;
        context.strokeRect(this.posX, this.posY, this.BLOCK_WIDTH, this.BLOCK_HEIGHT);
        context.restore();
    }
}
export class Wall {
    constructor(width, height, WALL_MAX_WIDTH, WALL_MAX_HEIGHT, GAME_WIDTH, GAME_HEIGHT) {
        this.width = width;
        this.height = height;
        this.WALL_MAX_WIDTH = WALL_MAX_WIDTH;
        this.WALL_MAX_HEIGHT = WALL_MAX_HEIGHT;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.blocks = [];
        this.width = width;
        this.height = height;
        this.WALL_MAX_WIDTH = WALL_MAX_WIDTH;
        this.WALL_MAX_HEIGHT = WALL_MAX_HEIGHT;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        let BLOCK_WIDTH = this.WALL_MAX_WIDTH / this.width;
        let BLOCK_HEIGHT = this.WALL_MAX_HEIGHT / this.height;
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                this.blocks.push(new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT, "pink", "black"));
            }
        }
    }
    update() {
    }
    draw(context) {
        this.blocks.forEach(item => item.draw(context));
    }
}
