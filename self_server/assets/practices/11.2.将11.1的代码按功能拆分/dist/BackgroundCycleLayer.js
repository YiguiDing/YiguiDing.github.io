// 可滚动的背景层
export class BackgroundLayerCycleAble {
    constructor(game, imgSrc, imgWidth, imgHeight, layerMoveSpeedFactor) {
        this.layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的
        this.layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致
        this.game = game;
        this.img = new Image();
        this.img.src = imgSrc;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.layerMoveSpeedFactor = layerMoveSpeedFactor;
        this.pos1_X = 0;
        this.pox1_Y = 0;
        this.pos2_X = this.imgWidth;
        this.pox2_Y = 0;
    }
    update(timeInterval) {
        this.pos1_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
        this.pos2_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
        // 图层向左移动，图层出界，向后添加新图层
        if (this.layerMoveSpeedX < 0 && this.pos1_X + this.imgWidth <= 0)
            this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后
        if (this.layerMoveSpeedX < 0 && this.pos2_X + this.imgWidth <= 0)
            this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后
        // 图层向右移动，图层出界，向前添加新图层
        if (this.layerMoveSpeedX > 0 && this.pos1_X >= 0)
            this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后
        if (this.layerMoveSpeedX > 0 && this.pos2_X >= 0)
            this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后
    }
    draw(timeInterval) {
        this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos1_X, this.pox1_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
        this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos2_X, this.pox2_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
    }
    refresh(timeInterval) {
        this.update(timeInterval);
        this.draw(timeInterval);
    }
}
