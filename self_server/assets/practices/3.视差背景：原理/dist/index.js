var myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d"); // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
// canvas的默认大小为300x150px 需手动修改
var CANVAS_WIDTH = myCanvas.width = 800;
var CANVAS_HEIGHT = myCanvas.height = 700;
var gameScrollSpeed = 10;
var backgroundLayer1 = new Image();
backgroundLayer1.src = "./imgs/layer-1.png";
var backgroundLayer2 = new Image();
backgroundLayer2.src = "./imgs/layer-2.png";
var backgroundLayer3 = new Image();
backgroundLayer3.src = "./imgs/layer-3.png";
var backgroundLayer4 = new Image();
backgroundLayer4.src = "./imgs/layer-4.png";
var backgroundLayer5 = new Image();
backgroundLayer5.src = "./imgs/layer-5.png";
var Layer4offsetX1 = 0;
var Layer4offsetX2 = 2400;
(function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, Layer4offsetX1, 0);
    ctx.drawImage(backgroundLayer5, Layer4offsetX2, 0);
    if (Layer4offsetX1 < -2400)
        Layer4offsetX1 = Layer4offsetX2 + 2400; // 如果第一张图滚动展示完毕，就将其放到第二张图的后面
    if (Layer4offsetX2 < -2400)
        Layer4offsetX2 = Layer4offsetX1 + 2400; // 如果第二张图滚动展示完毕，就将其放到第一张图的后面
    Layer4offsetX1 -= gameScrollSpeed; // 更新位置
    Layer4offsetX2 -= gameScrollSpeed; // 更新位置
    requestAnimationFrame(animate); // 刷新
})();
