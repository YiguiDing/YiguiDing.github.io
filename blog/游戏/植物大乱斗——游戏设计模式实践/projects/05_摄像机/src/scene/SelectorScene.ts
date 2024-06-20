import { Message } from "../Input";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class SelectorScene implements Scene {
  constructor() {
    this.init();
  }
  init(): void {
    console.log("角色选择器 初始化");
  }
  destory(): void {
    console.log("角色选择器 销毁");
  }
  onEnter(): void {
    console.log("进入角色选择器");
  }
  onUpdate(): void {
    console.log("角色选择器 更新");
  }
  onDraw(): void {
    console.log("角色选择器 绘制");
  }
  onInput(message: Message): void {
    console.log("角色选择器 处理输入");
    if (message.type == "keydown") {
      // 按下任意键，进入游戏场景
      SceneManager.instance.switchTo(SceneManager.SceneType.GameScene);
    }
  }
  onExit(): void {
    console.log("角色选择器 退出");
  }
}
