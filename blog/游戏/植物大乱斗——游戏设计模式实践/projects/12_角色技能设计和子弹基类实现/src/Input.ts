// 类型声明
export type Message =
  | (KeyboardEvent & { type: "keydown" | "keyup" })
  | (MouseEvent & { type: "mousedown" | "mouseup" | "mousemove" });

export class Input {
  // 消息队列
  queue = new Array<Message>();
  eventHandler: any = (event: Message) => this.queue.push(event);
  constructor() {
    this.init();
  }
  init() {
    // 监听键盘鼠标事件，放入消息队列
    window.addEventListener("keydown", this.eventHandler);
    window.addEventListener("keyup", this.eventHandler);
    window.addEventListener("mousedown", this.eventHandler);
    window.addEventListener("mouseup", this.eventHandler);
    window.addEventListener("mousemove", this.eventHandler);
  }
  destory() {
    // 解除事件绑定
    window.removeEventListener("keydown", this.eventHandler);
    window.removeEventListener("keyup", this.eventHandler);
    window.removeEventListener("mousedown", this.eventHandler);
    window.removeEventListener("mouseup", this.eventHandler);
    window.removeEventListener("mousemove", this.eventHandler);
  }
  /**
   * 消息队列是否为空
   */
  isEmpty() {
    return this.queue.length == 0;
  }
  /**
   * 返回队头元素
   */
  peekMessage() {
    return this.queue.shift();
  }
}
