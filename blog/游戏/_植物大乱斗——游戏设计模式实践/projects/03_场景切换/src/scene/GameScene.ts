import { Message } from "../Input";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameScene implements Scene {
  constructor() {
    this.init();
  }
  init(): void {
    console.log("游戏 初始化");
  }
  destory(): void {
    console.log("游戏 销毁");
  }
  onEnter(): void {
    console.log("进入游戏");
  }
  onUpdate(): void {
    console.log("游戏 更新");
  }
  onDraw(): void {
    console.log("游戏 绘制");
  }
  onInput(message: Message): void {
    console.log("游戏 处理输入");
    if (message.type == "keydown") {
      // 按下任意键，进入主菜单场景
      SceneManager.instance.switchTo(SceneManager.SceneType.MenuScene);
    }
  }
  onExit(): void {
    console.log("游戏 退出");
  }
}
