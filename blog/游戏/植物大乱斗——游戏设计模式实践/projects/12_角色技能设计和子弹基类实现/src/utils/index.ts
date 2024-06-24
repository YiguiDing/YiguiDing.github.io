/**
 * 异步加载图片
 */
export function loadImage(path: string) {
  return new Promise<HTMLImageElement>((resolve) => {
    let img = new Image();
    img.src = path;
    img.onload = () => resolve(img);
  });
}
/**
 * 异步加载音频
 */
export function loadAudio(path: string) {
  return new Promise<HTMLAudioElement>((resolve) => {
    let audio = new Audio();
    audio.src = path;
    // audio.onload = () => resolve(audio); // 没用
    audio.oncanplaythrough = () => resolve(audio);
  });
}
/**
 * 加载字体
 */
export function loadFont(name: string, path: string) {
  let font = new FontFace(name, path);
  // 添加到文档的字体集合中 将字体声明为整个文档可用 确保浏览器全局知晓并能够使用这个字体
  document.fonts.add(font);
  return font.load();
}

/**
 * 水平翻转图片
 */
export function flipImage(inputImage: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = inputImage.naturalWidth;
  canvas.height = inputImage.naturalHeight;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(-1, 1); // 水平方向翻转
  ctx.drawImage(inputImage, -canvas.width, 0);
  let img = new window.Image();
  img.src = canvas.toDataURL();
  return img;
}

export function restrict(min: number, cur: number, max: number) {
  return Math.max(min, Math.min(cur, max));
}
