import { Input } from "./Input";
import { MenuScene } from "./scene/MenuScene";
import "./style.less";

const Width = 1920;
const Height = 1080;

function main() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  app.appendChild(canvas);

  // 初始化界面宽高
  context.canvas.width = Width;
  context.canvas.height = Height;

  let input = new Input();
  let scene = new MenuScene();
  scene.onEnter(); // 进入场景

  let prevTime = Date.now(),
    curTime = Date.now();

  function loop() {
    curTime = Date.now();
    let dt = prevTime - curTime;

    while (!input.isEmpty()) {
      // 场景处理输入
      scene.onInput(input.peekMessage()!);
    }

    // 场景更新
    scene.onUpdate();

    context.clearRect(0, 0, Width, Height);
    
    // 场景绘制
    scene.onDraw();

    context.fillStyle = "white";
    context.fillRect(0, 0, Width, Height);

    prevTime = curTime;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

main();
