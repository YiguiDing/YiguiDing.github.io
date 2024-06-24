import { Perlin } from "./Perlin"; // 调整路径以匹配实际存放位置

export function PerlinTest(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;

  const width = 1000;
  const height = 1000;

  const perlinGenerator = new Perlin(); // 使用默认设置
  const scale = 1 / 1000; // 控制噪声细节的缩放
  const octaves = 1; // 噪声的频层数
  const persistence = 0.5; //控制频率随层数减少的速度

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noiseVal = perlinGenerator.octavePerlin(
        x * scale,
        y * scale,
        0,
        octaves,
        persistence
      );
      const colorVal = Math.abs(noiseVal * 255); // 将噪声值映射到颜色范围
      ctx.fillStyle = `rgb(${colorVal}, ${colorVal}, ${colorVal})`; // 灰度图
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
