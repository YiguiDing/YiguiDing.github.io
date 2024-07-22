// 触发模式
export enum TriggerMode {
  Once, // 单次触发
  Cycle, // 循环触发
}

export class Timer {
  passTime_ms = 0; // 经过时间
  waitTime_ms = 0; // 等待时间
  isPaused = false; // 是否暂停
  isTriggered = false; // 是否已经触发
  triggerMode: TriggerMode = TriggerMode.Once; // 触发模式
  callback: Function | null = null; // 回调函数

  constructor() {}

  onUpdate(dt_ms: number) {
    if (this.isPaused) return;
    this.passTime_ms += dt_ms;
    if (this.passTime_ms >= this.waitTime_ms) {
      if (
        this.triggerMode == TriggerMode.Cycle || // 循环触发模式
        (this.triggerMode == TriggerMode.Once && !this.isTriggered) // 单次触发模式 且 未触发
      )
        this.callback && this.callback();
      this.isTriggered = true;
      this.passTime_ms = 0;
    }
  }
  /**
   * 重置状态
   */
  reset() {
    this.passTime_ms = 0;
    this.isTriggered = false;
  }
  /**
   * 设置等待时间
   */
  setWaitTime(waitTime_ms: number) {
    this.reset();
    this.waitTime_ms = waitTime_ms;
  }
  /**
   * 设置触发模式
   */
  setTriggerMode(mode: TriggerMode) {
    this.triggerMode = mode;
  }
  /**
   * 设置触发回调函数
   */
  setCallback(callback: Function) {
    this.callback = callback;
  }
  pause() {
    this.isPaused = true;
  }
  resume() {
    this.isPaused = false;
  }
}
