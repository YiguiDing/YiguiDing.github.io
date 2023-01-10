const canvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const CANVAS_WIDTH = canvas.width = 900
const CANVAS_HEIGHT = canvas.height = 760


type MovementNames = "move_idle" | "move_ToLeft" | "move_UpAndDown" | "move_recycle" | "move_asline" | "move_randomMovement";
interface EnemyInfo {
    src: string;// 资源路径
    frame_count: number;// 共有几帧
    frame_width: number;// 一帧宽度
    frame_height: number;// 一帧高度
    draw_width: number;// 绘制图像宽度
    draw_height: number;// 绘制图像高度
    movements: Array<MovementNames>;
}
interface EnemyTypes {
    [enemyName: string]: EnemyInfo;
}
let EnemyTypes: EnemyTypes = {
    "enemy1": {
        src: "./imgs/enemy1.png",
        frame_count: 6,
        frame_width: 293,
        frame_height: 155,
        draw_width: 293 / 2.5,
        draw_height: 155 / 2.5,
        movements: ["move_idle"]
    },
    "enemy2": {
        src: "./imgs/enemy2.png",
        frame_count: 6,
        frame_width: 266,
        frame_height: 188,
        draw_width: 266 / 2.5,
        draw_height: 188 / 2.5,
        movements: ["move_ToLeft", "move_recycle"]
    },
    "enemy3": {
        src: "./imgs/enemy3.png",
        frame_count: 6,
        frame_width: 218,
        frame_height: 177,
        draw_width: 218 / 2.5,
        draw_height: 177 / 2.5,
        movements: ["move_asline"]
    },
    "enemy4": {
        src: "./imgs/enemy4.png",
        frame_count: 9,
        frame_width: 213,
        frame_height: 212,
        draw_width: 213 / 2.5,
        draw_height: 212 / 2.5,
        movements: ["move_randomMovement"]
    }
}
function RandomRange(from: number, end: number) {
    return Math.random() * (end - from) + from;
}
type ClassEnemyFactoryWithMethodNames = {
    [movementName in MovementNames]: () => void
};

class EnemyFactory implements ClassEnemyFactoryWithMethodNames {
    enemyInfo: EnemyInfo;
    img: HTMLImageElement;
    // for movement
    pos: { x: number, y: number } = { x: 0, y: 0 };// 在画布中的位置
    idle: { moveSpeed: number } = { moveSpeed: 0 };
    toLeft: { moveSpeed: number } = { moveSpeed: 0 };
    upAndDown: { angle: number, angleStep: number, moveSpeed } = {
        angle: 0,// 角度
        angleStep: 0,// 角频率
        moveSpeed: 0// 移动速度
    };
    asline: { angle: number, angleStep: number, factorX: number, factorY: number } = {
        angle: 0,
        angleStep: 0,
        factorX: 0,
        factorY: 0
    }
    randomMovement: { newPos: { x: number, y: number }, moveSpeed: number, frameCount: number, frameStageInterval: number } = {
        newPos: { x: 0, y: 0 },// 新位置
        frameCount: 0,// 帧计数
        frameStageInterval: 0,// 每隔多少帧移动到新位置
        moveSpeed: 0// 移动速度
    }
    // for animation
    animation: { frameStage: number, frameIndex: number, frameCount: number } = {
        frameStage: 0, // 关键帧切换速度，每隔几帧切换下一帧
        frameIndex: 0,  // 帧索引，记录是第几帧
        frameCount: 0  // 帧计数
    };
    constructor(enemyInfo: EnemyInfo) {
        this.enemyInfo = enemyInfo;
        this.img = new Image();
        this.img.src = this.enemyInfo.src;
        // 随机位置
        this.pos.x = Math.random() * (CANVAS_WIDTH - this.enemyInfo.draw_width);// 约束随机位置只能出现在画布内
        this.pos.y = Math.random() * (CANVAS_HEIGHT - this.enemyInfo.draw_height);
        // 关键帧切换速度
        this.animation.frameStage = Math.random() * 3 + 1;// 1 ~ 4
        // for idle
        this.idle.moveSpeed = Math.random() * 5 - 2.5
        // for toLeft
        this.toLeft.moveSpeed = RandomRange(5, 7)
        // for upAndDown
        this.upAndDown.angle = Math.asin(RandomRange(-1, 1)) // 初相角 -1 ~ 1
        this.upAndDown.angleStep = Math.asin(RandomRange(-0.25, 0.25));// 上下移动周期 -0.25 ~ + 0.25
        this.upAndDown.moveSpeed = RandomRange(4, 6) // 上下移动步长 4 ~ 6
        // for asline
        this.asline.angle = Math.asin(RandomRange(-1, 1)) // 初相角 -1 ~ 1
        this.asline.angleStep = RandomRange(5, 15) // 移动周期 -0.2 ~ 0.2
        this.asline.factorX = Math.PI / 365 * 0.45
        this.asline.factorY = Math.PI / 365 * 0.35
        // randomReArrangement
        this.randomMovement.frameStageInterval = Math.floor(RandomRange(60, 60 * 3));
        this.randomMovement.moveSpeed = RandomRange(1, 2);
    }
    move_idle() {// 悬停
        this.pos.x += this.idle.moveSpeed * (Math.random() * 2 - 1);
        this.pos.y += this.idle.moveSpeed * (Math.random() * 2 - 1);
    }
    move_ToLeft() {// 往左边飞
        this.pos.x -= this.toLeft.moveSpeed
    }
    move_UpAndDown() {// 上下摆动
        this.pos.y += this.upAndDown.moveSpeed * Math.sin(this.upAndDown.angle);
        this.upAndDown.angle += this.upAndDown.angleStep
    }
    move_recycle() {// 循环,移动到左边的，从右边出来
        if (this.pos.x + this.enemyInfo.draw_width <= 0)
            this.pos.x = CANVAS_WIDTH;
    }
    move_asline() {// 线性运动
        this.pos.x = CANVAS_WIDTH / 2 * Math.cos(this.asline.angle * this.asline.factorX) + (CANVAS_WIDTH / 2 - this.enemyInfo.draw_width / 2);
        this.pos.y = CANVAS_HEIGHT / 2 * Math.sin(this.asline.angle * this.asline.factorY) + (CANVAS_HEIGHT / 2 - this.enemyInfo.draw_height / 2);
        this.asline.angle += this.asline.angleStep
    }
    move_randomMovement() {// 重新排列
        if (this.randomMovement.frameCount++ % this.randomMovement.frameStageInterval == 0) {
            this.randomMovement.newPos.x = RandomRange(0, CANVAS_WIDTH - this.enemyInfo.draw_width);
            this.randomMovement.newPos.y = RandomRange(0, CANVAS_HEIGHT - this.enemyInfo.draw_height);
        }
        let dx = (this.pos.x - this.randomMovement.newPos.x) / this.randomMovement.frameStageInterval
        let dy = (this.pos.y - this.randomMovement.newPos.y) / this.randomMovement.frameStageInterval
        this.pos.x -= dx * this.randomMovement.moveSpeed
        this.pos.y -= dy * this.randomMovement.moveSpeed
    }
    animate() {// 动画
        this.animation.frameIndex = Math.floor(this.animation.frameCount++ / this.animation.frameStage) % this.enemyInfo.frame_count;
    }
    update() {
        // for position
        this.enemyInfo.movements.forEach(movementName => {
            this[movementName]();
            // this.move_idle();// 随机移动
            // this.move_asline();
            // this.move_ToLeft();// 往左移动
            // this.move_randomMovement();
            // this.move_recycle();// 循环移动
            // this.move_UpAndDown();//上下摆动
        })
        // for animate
        this.animate();//动画
    }
    draw() {
        ctx.drawImage(
            this.img,
            this.animation.frameIndex * this.enemyInfo.frame_width, 0, this.enemyInfo.frame_width, this.enemyInfo.frame_height,
            this.pos.x, this.pos.y, this.enemyInfo.draw_width, this.enemyInfo.draw_height
        );
    }
    refresh() {
        this.update();
        this.draw();
    }
}

let enemys: Array<EnemyFactory> = [];
let enemyMaxNum = 25
createEnemys();
function createEnemys() {
    for (let index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy1"]));
    }
    for (let index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy2"]));
    }
    for (let index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy3"]));
    }
    for (let index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy4"]));
    }
}
function refreshEnemys() {
    enemys.forEach(enemy => enemy.refresh())
}

function refresh() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    refreshEnemys();
    requestAnimationFrame(refresh);
}
refresh();