import { Vector2 } from "./math/Vector2";

export class Camera {
  // 位置
  position = new Vector2(0, 0);
  // 移动速度
  speed = new Vector2(0.05, 0.05);

  // 重置位置
  reset() {
    this.position.x = 0;
    this.position.y = 0;
  }
  // 获取相机位置
  getPosition() {
    return this.position;
  }

  onUpdate(dt_ms: number) {
    // 位移量 = 速度*时间
    let step_length = this.speed.copy().multiply(dt_ms);
    // 计算新位置
    this.position.add(step_length);
  }
}
