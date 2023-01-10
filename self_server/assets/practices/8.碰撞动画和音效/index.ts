const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

const CANVAS_WIDTH = myCanvas.width = 800;
const CANVAS_HEIGHT = myCanvas.height = 800;


type ExplosionMovemetNames = "move_rotate"

interface ExplosionInfo {
    name: string,
    imgSrc: string,
    sodSrc: string,
    frameTotal: number,
    frameWidth: number,
    frameHeight: number,
    drawWidth: number,
    drawHeight: number
    movements: Array<ExplosionMovemetNames>
}
interface ExplosionInfoMap {
    [explosionName: string]: ExplosionInfo;
}
interface Position {
    x: number, y: number
}

let explosionMap: ExplosionInfoMap = {
    "boom": {
        name: "boom",
        imgSrc: "./imgs/boom.png",
        sodSrc: "./sounds/Ice attack 2.wav",
        frameTotal: 5,
        frameWidth: 200,
        frameHeight: 179,
        drawWidth: 200 / 2,
        drawHeight: 179 / 2,
        movements: ["move_rotate"]
    }
}
let explosionsList: Array<ExplosionFactory> = [];

type ExplosionFactoryWithMethodNames = {
    [ExplosionMovemetName in ExplosionMovemetNames]: () => void;
}
class ExplosionFactory implements ExplosionFactoryWithMethodNames {
    info: ExplosionInfo;
    img: HTMLImageElement;
    sod: HTMLAudioElement;
    pos: Position = { x: 0, y: 0 };
    animation = { frameStage: 5, frameCount: 0, frameIndex: 0 };
    angle: number;
    rotate = { angle: 0, angleStep: 0 }
    constructor(pos: Position, info: ExplosionInfo) {
        this.pos = pos
        this.info = info;
        this.img = new Image();
        this.img.src = this.info.imgSrc;
        this.sod = new Audio();
        this.sod.src = this.info.sodSrc;
        this.rotate.angleStep = 0.05 * Math.asin(Math.random() * 2 - 1)
    }
    private animate() {// 播放动画
        if (this.animation.frameCount == 0) this.sod.play();// 如果是第一帧 播放音效
        this.animation.frameIndex = Math.floor(this.animation.frameCount++ / this.animation.frameStage) % this.info.frameTotal;// 计算当前帧
    }
    private move() {
        this.info.movements.forEach(movementMethodName => {
            this[movementMethodName]();// 调用需要的方法
        })
    }
    private update() {// 更新坐标
        this.move(); // 移动
        this.animate();// 播放动画
    }
    move_rotate() {// 中心旋转
        this.rotate.angle += this.rotate.angleStep;
    }
    finished() {// 判断是否播放完毕
        return Math.floor(this.animation.frameCount / this.animation.frameStage) >= this.info.frameTotal
    }
    private draw() {
        ctx.save();// 换新笔，旧笔context入栈
        ctx.translate(this.pos.x + this.info.drawWidth / 2, this.pos.y + this.info.drawHeight / 2);//改变原点坐标
        ctx.rotate(this.rotate.angle);// 旋转画布某角度
        ctx.drawImage(
            this.img,
            this.animation.frameIndex * this.info.frameWidth,
            0,
            this.info.frameWidth, this.info.frameHeight,
            // this.pos.x, this.pos.y,
            -this.info.drawWidth / 2, -this.info.drawHeight / 2,
            this.info.drawWidth, this.info.drawHeight
        );
        ctx.restore();// 换回原来的笔，出栈context
    }
    refresh() {
        this.update();
        this.draw();
    }
}
function refreshAllExplosions() {
    for (let index = 0; index < explosionsList.length; index++) {
        explosionsList[index].refresh()
        if (explosionsList[index].finished()) {// 回收播放完毕的动画
            explosionsList.splice(index, 1);// 删除元素
            index-- // 回退
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    refreshAllExplosions();
    requestAnimationFrame(animate);
}
animate();

myCanvas.addEventListener("mouseup", event => {
    explosionsList.push(new ExplosionFactory({ x: event.offsetX, y: event.offsetY }, explosionMap["boom"]))
})

