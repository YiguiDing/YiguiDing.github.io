import { Message } from "../Input";

/**
 * 场景
 */
export interface Scene {
  init(): void; // 构造函数
  destory(): void; // 析构函数
  onEnter(): void; // 进入场景
  onUpdate(): void; // 更新
  onDraw(): void; // 绘制
  onInput(message: Message): void; // 处理输入
  onExit(): void; // 退出场景
}
