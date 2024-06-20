import { Atlas } from "./Atlas";

export class Animation {
  timer_ms = 0; // 计时器
  interval_ms = 0; // 帧间隔
  frameIdx = 0; // 帧索引
  isLoop = true; // 是否循环
  atlas!: Atlas;
  callback: Function | null = null;

  reset() {
    this.timer_ms = 0;
    this.frameIdx = 0;
  }

  setAtlas(newAtlas: Atlas) {
    this.reset();
    this.atlas = newAtlas;
  }
  setLoop(flag: boolean) {
    this.isLoop = flag;
  }
  setInterval(ms: number) {
    this.interval_ms = ms;
  }
  setPlayFinishedCallback(callback: Function) {
    this.callback = callback;
  }
  getFrameIdx() {
    return this.frameIdx;
  }
  getFrame() {
    return this.atlas.getImage(this.frameIdx);
  }
  checkFinished() {
    if (this.isLoop) return false;
    return this.frameIdx == this.atlas.getSize() - 1;
  }
  onUpdate(dt_ms: number) {
    this.timer_ms += dt_ms;
    if (this.timer_ms > this.interval_ms) {
      this.frameIdx++;
      this.timer_ms = 0;
      if (this.isLoop) {
        this.frameIdx %= this.atlas.getSize();
      } else if (this.frameIdx == this.atlas.getSize()) {
        this.frameIdx = this.atlas.getSize() - 1;
        this.callback && this.callback(); // 播放结束后的回调
      }
    }
  }
  onDraw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    let frame = this.getFrame();
    frame && ctx.drawImage(frame, x, y);
  }
}
