import { HEIGHT, WIDTH } from "./constants";
import { Cycle } from "./math/Cycle";
import { Point } from "./math/Point";
import { Rectangle } from "./math/Rectangle";
import { Vector2 } from "./math/Vector2";
import { Timer, TriggerMode } from "./timer/Timer";

export class Camera {
  position = new Vector2(0, 0); // 位置
  speed = new Vector2(0, 0); // 移动速度
  // 相机抖动
  shake_isEnable = false; // 是否启用
  shake_timer = new Timer(); // 定时器，用于实现指定时间后结束抖动
  shake_strength = 0; // 抖动强度
  shake_offset = new Vector2(0, 0); // 抖动位置偏移
  constructor() {}
  // 重置位置
  reset() {
    this.position.x = 0;
    this.position.y = 0;
  }
  // 获取相机位置
  getPosition() {
    // 相机位置 = 相机原位置 + 相机抖动偏移
    return this.position.copy().add(this.shake_offset);
  }
  getShap() {
    return new Cycle(new Point(this.position.x + WIDTH / 2, this.position.y + HEIGHT / 2), Math.max(WIDTH, HEIGHT));
  }
  shake_start(strength: number, duration: number) {
    this.shake_isEnable = true; //开启相机抖动
    this.shake_strength = strength; // 抖动强度
    // 配置定时器
    this.shake_timer.setTriggerMode(TriggerMode.Once); // 单次触发
    this.shake_timer.setWaitTime(duration); // 持续时间
    this.shake_timer.setCallback(() => this.shake_stop()); // 结束回调
  }
  shake_stop() {
    this.shake_isEnable = false; // 关闭相机抖动
    this.shake_offset.x = 0; // 抖动偏移清零
    this.shake_offset.y = 0;
  }
  shake_update(dt_ms: number) {
    this.shake_timer.onUpdate(dt_ms); // 定时器更新
    if (this.shake_isEnable) {
      // [-50,50] 随机数 x 抖动强度
      this.shake_offset.x = (100 * Math.random() - 50) * this.shake_strength;
      this.shake_offset.y = (100 * Math.random() - 50) * this.shake_strength;
    }
  }
  onUpdate(dt_ms: number) {
    this.shake_update(dt_ms); // 相机抖动
    let step_length = this.speed.copy().multiply(dt_ms); // 位移量 = 速度*时间
    this.position.add(step_length); // 计算新位置
  }
}
