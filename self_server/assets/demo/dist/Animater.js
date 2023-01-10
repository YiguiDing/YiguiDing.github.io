// 动画对象
export class Animater {
    get animateFrameFps() {
        return this._animateFrameFps;
    }
    set animateFrameFps(fps) {
        this._animateFrameFps = fps;
        this.animateFrameChangeInterval = 1000 / fps;
    }
    setFps(fps) {
        this.animateFrameFps = fps;
    }
    constructor(imgSrc, imgFrameWidth, imgFrameHeight, size, animateFramesTotal, animateNameIndexMap) {
        this.posX = 0; // 位置x
        this.posY = 0; // 位置y
        this.animateFrameIndexX = 0; // 当前绘制的是第几帧
        this.animateFrameIndexY = 0; // 当前绘制的是第几个动画
        this.animateFrameTimer = 0;
        this._animateFrameFps = 60;
        this.animateFrameChangeInterval = 1000 / 60;
        this.stopAnimateAtLastFlag = false;
        this.RewindAnimateFrameFlag = false;
        this.img = new Image();
        this.img.src = imgSrc;
        this.animateFramesTotal = animateFramesTotal;
        this.animateNameIndexMap = animateNameIndexMap;
        this.imgFrameWidth = imgFrameWidth;
        this.imgFrameHeight = imgFrameHeight;
        this.drawWidth = this.imgFrameWidth * size;
        this.drawHeight = this.imgFrameHeight * size;
        this.setFps(60);
    }
    // 更新数据
    update(timeInterval) {
        // 最后一帧则停止切换帧
        if (this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame())
            return;
        // 计算下一帧
        if (this.animateFrameTimer >= this.animateFrameChangeInterval) {
            this.animateFrameTimer = 0;
            this.animateFrameIndexX += 1;
            this.animateFrameIndexX %= this.animateFramesTotal[this.animateFrameIndexY];
        }
        else
            this.animateFrameTimer += timeInterval;
    }
    // 绘制帧
    draw(Context2D) {
        Context2D.drawImage(this.img, this.animateFrameIndexX * this.imgFrameWidth, this.animateFrameIndexY * this.imgFrameHeight, this.imgFrameWidth, this.imgFrameHeight, this.posX, this.posY, this.drawWidth, this.drawHeight);
    }
    changeAnimateByName(animateName) {
        // 根据名称切换动画
        if (this.animateNameIndexMap.includes(animateName))
            this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
        else
            throw new Error(`animateName:'${animateName}' is not exist.`);
        this.init();
    }
    // 判断是否为最后一帧
    isLastAnimateFrame() {
        return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
    }
    // 判断是否为第一帧
    isFirstAnimateFrame() {
        return this.animateFrameIndexX == 0;
    }
    // 初始化状态
    init() {
        this.animateFrameIndexX = 0; // 设置从第一帧开始
    }
    // 请求在渲染到最后一帧的时候停止更新动画
    requestStopAnimateFrameAtLastFrame() {
        this.stopAnimateAtLastFlag = true;
    }
    isOutOfLeftScreem() {
        return this.posX + this.drawWidth < 0;
    }
}
