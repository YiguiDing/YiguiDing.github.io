var myCanvas = document.querySelector("#myCanvas");
var ctx = myCanvas.getContext("2d"); // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
// canvas的默认大小为300x150px 需手动修改
var CANVAS_WIDTH = myCanvas.width = 1080;
var CANVAS_HEIGHT = myCanvas.height = 720;
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
var baclkgroundlayers = [
    {
        name: "layer1",
        img: backgroundLayer1,
        imgWidth: 2400,
        Xoffset1: 0,
        Xoffset2: 2400,
        speedModify: 0.1
    },
    {
        name: "layer2",
        img: backgroundLayer2,
        imgWidth: 2400,
        Xoffset1: 0,
        Xoffset2: 2400,
        speedModify: 0.3
    },
    {
        name: "layer3-cloud",
        img: backgroundLayer3,
        imgWidth: 2400,
        Xoffset1: 0,
        Xoffset2: 2400,
        speedModify: 0.5
    },
    {
        name: "layer4",
        img: backgroundLayer4,
        imgWidth: 2400,
        Xoffset1: 0,
        Xoffset2: 2400,
        speedModify: 0.65
    },
    {
        name: "layer5-floor",
        img: backgroundLayer5,
        imgWidth: 2400,
        Xoffset1: 0,
        Xoffset2: 2400,
        speedModify: 1.0
    },
];
function refreshBackgroundLayers() {
    baclkgroundlayers.forEach(function (layerItem) {
        ctx.drawImage(layerItem.img, layerItem.Xoffset1, 0);
        ctx.drawImage(layerItem.img, layerItem.Xoffset2, 0);
        if (layerItem.Xoffset1 < -layerItem.imgWidth)
            layerItem.Xoffset1 = layerItem.Xoffset2 + layerItem.imgWidth; // 如果第一张图滚动展示完毕，就将其放到第二张图的后面
        if (layerItem.Xoffset2 < -layerItem.imgWidth)
            layerItem.Xoffset2 = layerItem.Xoffset1 + layerItem.imgWidth; // 如果第二张图滚动展示完毕，就将其放到第一张图的后面
        layerItem.Xoffset1 -= gameScrollSpeed * layerItem.speedModify; // 更新位置
        layerItem.Xoffset2 -= gameScrollSpeed * layerItem.speedModify; // 更新位置
    });
}
(function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 清除
    refreshBackgroundLayers(); // 渲染背景
    requestAnimationFrame(animate); // 刷新
})();
var speedChanger = document.querySelector("#speedChanger");
var speedShower = document.querySelector("#speedShower");
speedShower.innerText = gameScrollSpeed + "px";
speedChanger.value = gameScrollSpeed + "";
speedChanger.addEventListener("change", function (e) {
    var newVal = parseInt(speedChanger.value);
    gameScrollSpeed = newVal;
    speedShower.innerText = newVal + "px";
});
