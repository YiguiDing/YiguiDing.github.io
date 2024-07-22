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

  function loop() {
    context.clearRect(0, 0, Width, Height);
    context.fillStyle = "white";
    context.fillRect(0, 0, Width, Height);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

main();
