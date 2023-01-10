var myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d"); // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
// canvas的默认大小为300x150px 需手动修改
var CANVAS_WIDTH = myCanvas.width = 600;
var CANVAS_HEIGHT = myCanvas.height = 600;
var Sprite_WIDTH = 575;
var Sprite_HEIGHT = 523;
var imgPlayer = new Image(); // image对象类型为 HTMLImageElement 可以附加到dom中
imgPlayer.src = "./shadow_dog.png";
var playerState = "idle";
var selector = document.querySelector("#animations");
selector.addEventListener("change", function () {
    playerState = selector.value;
});
var animations = {
    "idle": {
        rows: 0,
        cols: 7
    },
    "jump": {
        rows: 1,
        cols: 7
    },
    "fall": {
        rows: 2,
        cols: 7
    },
    "run": {
        rows: 3,
        cols: 9
    },
    "dizzy": {
        rows: 4,
        cols: 11
    },
    "sit": {
        rows: 5,
        cols: 5
    },
    "roll": {
        rows: 6,
        cols: 7
    },
    "bite": {
        rows: 7,
        cols: 7
    },
    "ko": {
        rows: 8,
        cols: 12
    },
    "gethit": {
        rows: 9,
        cols: 4
    }
};
var animaIndex = 0; // 动画索引
var frameIndex = 0; // 帧索引
var frameCount = 0; // 总的帧数
var stageFrame = 5; // 交错帧，每隔5帧 切换关键帧
function animate() {
    frameIndex = Math.floor(frameCount++ / stageFrame) % animations[playerState].cols;
    animaIndex = animations[playerState].rows;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(imgPlayer, frameIndex * Sprite_WIDTH, animaIndex * Sprite_HEIGHT, Sprite_WIDTH, Sprite_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate); // 原理上相当于60fps的setInterval
}
animate();
