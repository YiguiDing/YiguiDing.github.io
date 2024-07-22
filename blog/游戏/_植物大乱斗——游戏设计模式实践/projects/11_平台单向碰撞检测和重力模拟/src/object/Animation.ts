import { Camera } from "../Camera";
import { Render } from "../Render";
import { Atlas } from "./Atlas";

export class Animation {
  timer_ms = 0; // 计时器
  interval_ms = 0; // 帧间隔
  frameIdx = 0; // 帧索引
  isLoop = true; // 是否循环
  atlas!: Atlas;
  callback: Function | null = null;

  /**
   * 恢复到动画的第一帧
   */
  reset() {
    this.timer_ms = 0;
    this.frameIdx = 0;
    return this;
  }
  /**
   * 设置播放图集
   */
  setAtlas(newAtlas: Atlas) {
    this.reset();
    this.atlas = newAtlas;
    return this;
  }
  /**
   * 设置是否循环播放
   */
  setLoop(flag: boolean) {
    this.isLoop = flag;
    return this;
  }
  /**
   * 设置帧切换间隔
   */
  setInterval(ms: number) {
    this.interval_ms = ms;
    return this;
  }
  /**
   * 设置播放完毕的回调函数
   */
  setPlayFinishedCallback(callback: Function) {
    this.callback = callback;
    return this;
  }
  /**
   * 获取当前播放的是第几帧
   */
  getFrameIdx() {
    return this.frameIdx;
  }
  /**
   * 获取当前播放帧
   */
  getFrame() {
    return this.atlas.getImage(this.frameIdx);
  }
  /**
   * 检查是否播放完毕
   */
  checkFinished() {
    if (this.isLoop) return false;
    return this.frameIdx == this.atlas.getSize() - 1;
  }
  /**
   * 更新
   */
  onUpdate(dt_ms: number) {
    this.timer_ms += dt_ms;
    if (this.timer_ms > this.interval_ms) {
      this.timer_ms = 0;
      // 循环播放
      if (this.isLoop) {
        this.frameIdx++;
        this.frameIdx %= this.atlas.getSize();
      }
      // 非循环播放
      else {
        // 播放，到最后一帧停止
        this.frameIdx = Math.min(this.frameIdx++, this.atlas.getSize() - 1);
        // 执行回调函数
        this.callback && this.callback(); // 播放结束后的回调
      }
    }
  }
  /**
   * 绘制当前帧
   */
  onDraw(camera: Camera, render: Render, x: number, y: number) {
    render.drawImageD(camera, this.getFrame()!, x, y);
  }
}
