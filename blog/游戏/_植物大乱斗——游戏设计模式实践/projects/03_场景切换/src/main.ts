import { Input } from "./Input";
import { SceneManager } from "./scene/SceneManager";
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

  let input = Input.instance;
  let sceneManager = SceneManager.instance;
  let prevTime = Date.now(),
    curTime = Date.now();

  function loop() {
    curTime = Date.now();
    let dt = prevTime - curTime;

    while (!input.isEmpty()) {
      sceneManager.onInput(input.peekMessage()!);
    }
    sceneManager.onUpdate();
    context.clearRect(0, 0, Width, Height);
    sceneManager.onDraw();

    context.fillStyle = "white";
    context.fillRect(0, 0, Width, Height);

    prevTime = curTime;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

main();
