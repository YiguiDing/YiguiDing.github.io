import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";

/**
 * 场景
 */
export interface Scene {
  init(): void; // 构造函数
  destory(): void; // 析构函数
  onEnter(): void; // 进入场景
  onUpdate(dt_ms: number): void; // 更新
  onDraw(render: Render, camera: Camera): void; // 绘制
  onInput(message: Message): void; // 处理输入
  onExit(): void; // 退出场景
}
