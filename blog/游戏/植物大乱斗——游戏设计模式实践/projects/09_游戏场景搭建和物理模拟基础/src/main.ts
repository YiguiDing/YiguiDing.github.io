import { Camera } from "./Camera";
import { Input } from "./Input";
import { Render } from "./Render";
import { HEIGHT, WIDTH } from "./constants";
import { SceneManager } from "./scene/SceneManager";
import "./style.less";

function setupWebApp(app: HTMLDivElement) {
  const canvas = document.createElement("canvas");
  app.appendChild(canvas);

  const input = new Input(); // 输入
  const camera = new Camera(); // 相机
  const render = new Render(canvas, WIDTH, HEIGHT); // 渲染器
  const sceneManager = new SceneManager(camera); // 场景管理器

  let prevTime = Date.now(),
    curTime = Date.now();

  function loop() {
    curTime = Date.now();
    let dt_ms = curTime - prevTime;

    // 处理消息
    while (!input.isEmpty()) sceneManager.onInput(input.peekMessage()!);

    // 更新
    sceneManager.onUpdate(dt_ms);

    // 渲染
    render.clear();
    sceneManager.onDraw(render, camera);

    prevTime = curTime;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

setupWebApp(document.querySelector<HTMLDivElement>("#app")!);
