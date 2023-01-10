import { RandomRange } from "./utils.js";
// 动画对象
export class Animater {
    constructor(game, imgSrc, imgFrameWidth, imgFrameHeight, size, animateFramesTotal, animateNameIndexMap) {
        this.posX = 0; // 位置x
        this.posY = 0; // 位置y
        this.animateNameIndexMap = ["idle"]; // 数据结构：{动画名称:该动画是第几个动画}
        this.animateFrameIndexX = 0; // 当前绘制的是第几帧
        this.animateFrameIndexY = 0; // 当前绘制的是第几个动画
        this.animateFrameCount = 0; // 帧计数
        this.animateFrameStage = 3; // 刷新频率 每隔多少帧绘制下一帧
        this.animateFrameStageFactor = 1.0; // 刷新频率的系数
        this.stopAnimateAtLastFlag = false;
        this.game = game;
        this.img = new Image();
        this.img.src = imgSrc;
        this.animateFramesTotal = animateFramesTotal;
        this.animateNameIndexMap = animateNameIndexMap;
        this.imgFrameWidth = imgFrameWidth;
        this.imgFrameHeight = imgFrameHeight;
        this.drawWidth = this.imgFrameWidth * size;
        this.drawHeight = this.imgFrameHeight * size;
        this.animateFrameStage = Math.floor(RandomRange(3, 8));
    }
    // 更新数据
    update(timeInterval) {
        return;
    }
    // 绘制动画
    animate(timeInterval) {
        if (!(this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame())) {
            this.animateFrameIndexX =
                Math.floor((this.animateFrameCount++ / this.animateFrameStage) * this.animateFrameStageFactor) %
                    this.animateFramesTotal[this.animateFrameIndexY];
        }
        this.game.Context2D.drawImage(this.img, this.animateFrameIndexX * this.imgFrameWidth, this.animateFrameIndexY * this.imgFrameHeight, this.imgFrameWidth, this.imgFrameHeight, this.posX, this.posY, this.drawWidth, this.drawHeight);
    }
    // 刷新
    refresh(timeInterval) {
        this.update(timeInterval);
        this.animate(timeInterval);
    }
    changeAnimateByName(animateName) {
        // 根据名称切换动画
        if (this.animateNameIndexMap.includes(animateName))
            this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
        else
            throw new Error(`animateName:'${animateName}' is not exist.`);
    }
    // 判断是否为最后一帧
    isLastAnimateFrame() {
        return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
    }
    // 请求渲染第一帧
    requestAnimateFrameAtFirstFrame() {
        this.animateFrameCount = 0; // 设置从第一帧开始
    }
    // 请求在渲染到最后一帧的时候停止更新动画
    requestStopAnimateFrameAtLastFrame() {
        this.stopAnimateAtLastFlag = true;
    }
}
