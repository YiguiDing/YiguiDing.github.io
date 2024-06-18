export function loadImg(path: string) {
  let img = new Image();
  img.src = path;
  return img;
}

export function loadAudio(path: string) {
  let audio = new Audio();
  audio.src = path;
  return audio;
}

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
