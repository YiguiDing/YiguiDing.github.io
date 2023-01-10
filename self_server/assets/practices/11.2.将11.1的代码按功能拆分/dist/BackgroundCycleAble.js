// 可滚动的多层背景
export class BackgroundCycleAble {
    constructor() {
        this._backgroundMoveSpeedX = 0; // 背景移动速度
        this.layers = []; // 背景
    }
    update(timeInterval) {
        this.layers.forEach(item => item.update(timeInterval));
    }
    draw(timeInterval) {
        this.layers.forEach(item => item.draw(timeInterval));
    }
    refresh(timeInterval) {
        this.update(timeInterval);
        this.draw(timeInterval);
    }
    get backgroundMoveSpeedX() {
        return this._backgroundMoveSpeedX;
    }
    set backgroundMoveSpeedX(value) {
        // 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
        if (this._backgroundMoveSpeedX != value) {
            // 更新所有层的速度
            this.layers.forEach(item => (item.layerMoveSpeedX = value));
            // 更新背景速度
            this._backgroundMoveSpeedX = value;
        }
    }
}
