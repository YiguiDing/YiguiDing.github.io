var myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d"); // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
// canvas的默认大小为300x150px 需手动修改
var CANVAS_WIDTH = myCanvas.width = 600;
var CANVAS_HEIGHT = myCanvas.height = 600;
var Sprite_WIDTH = 575;
var Sprite_HEIGHT = 523;
var imgPlayer = new Image(); // image对象类型为 HTMLImageElement 可以附加到dom中
imgPlayer.src = "./shadow_dog.png";
var frameX = 0;
var frameY = 0;
var frameCount = 0; // 第几帧
var stageFrame = 5; // 交错帧，每隔5帧 切换图片
function animate() {
    frameCount = ++frameCount % stageFrame;
    if (!frameCount)
        frameX = ++frameX % 7;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(imgPlayer, frameX * Sprite_WIDTH, frameY * Sprite_HEIGHT, Sprite_WIDTH, Sprite_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate); // 原理上相当于60fps的setInterval
}
animate();
