import { Message } from "../Input";
import { Scene } from "./Scene";

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
  }
  onExit(): void {
    console.log("主菜单 退出");
  }
}
