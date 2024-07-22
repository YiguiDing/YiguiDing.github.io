import { Message } from "../Input";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class MenuScene implements Scene {
  constructor() {
    this.init();
  }
  init(): void {
    console.log("主菜单 初始化");
  }
  destory(): void {
    console.log("主菜单 销毁");
  }
  onEnter(): void {
    console.log("进入主菜单");
  }
  onUpdate(): void {
    console.log("主菜单 更新");
  }
  onDraw(): void {
    console.log("主菜单 绘制");
  }
  onInput(message: Message): void {
    console.log("主菜单 处理输入");
    if (message.type == "keydown") {
      // 按下任意键，进入角色选择场景
      SceneManager.instance.switchTo(SceneManager.SceneType.SelectorScene);
    }
  }
  onExit(): void {
    console.log("主菜单 退出");
  }
}
