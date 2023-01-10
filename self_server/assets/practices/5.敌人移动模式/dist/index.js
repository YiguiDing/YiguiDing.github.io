var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");
var CANVAS_WIDTH = canvas.width = 900;
var CANVAS_HEIGHT = canvas.height = 760;
var EnemyTypes = {
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
};
function RandomRange(from, end) {
    return Math.random() * (end - from) + from;
}
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory(enemyInfo) {
        // for movement
        this.pos = { x: 0, y: 0 }; // 在画布中的位置
        this.idle = { moveSpeed: 0 };
        this.toLeft = { moveSpeed: 0 };
        this.upAndDown = {
            angle: 0,
            angleStep: 0,
            moveSpeed: 0 // 移动速度
        };
        this.asline = {
            angle: 0,
            angleStep: 0,
            factorX: 0,
            factorY: 0
        };
        this.randomMovement = {
            newPos: { x: 0, y: 0 },
            frameCount: 0,
            frameStageInterval: 0,
            moveSpeed: 0 // 移动速度
        };
        // for animation
        this.animation = {
            frameStage: 0,
            frameIndex: 0,
            frameCount: 0 // 帧计数
        };
        this.enemyInfo = enemyInfo;
        this.img = new Image();
        this.img.src = this.enemyInfo.src;
        // 随机位置
        this.pos.x = Math.random() * (CANVAS_WIDTH - this.enemyInfo.draw_width); // 约束随机位置只能出现在画布内
        this.pos.y = Math.random() * (CANVAS_HEIGHT - this.enemyInfo.draw_height);
        // 关键帧切换速度
        this.animation.frameStage = Math.random() * 3 + 1; // 1 ~ 4
        // for idle
        this.idle.moveSpeed = Math.random() * 5 - 2.5;
        // for toLeft
        this.toLeft.moveSpeed = RandomRange(5, 7);
        // for upAndDown
        this.upAndDown.angle = Math.asin(RandomRange(-1, 1)); // 初相角 -1 ~ 1
        this.upAndDown.angleStep = Math.asin(RandomRange(-0.25, 0.25)); // 上下移动周期 -0.25 ~ + 0.25
        this.upAndDown.moveSpeed = RandomRange(4, 6); // 上下移动步长 4 ~ 6
        // for asline
        this.asline.angle = Math.asin(RandomRange(-1, 1)); // 初相角 -1 ~ 1
        this.asline.angleStep = RandomRange(5, 15); // 移动周期 -0.2 ~ 0.2
        this.asline.factorX = Math.PI / 365 * 0.45;
        this.asline.factorY = Math.PI / 365 * 0.35;
        // randomReArrangement
        this.randomMovement.frameStageInterval = Math.floor(RandomRange(60, 60 * 3));
        this.randomMovement.moveSpeed = RandomRange(1, 2);
    }
    EnemyFactory.prototype.move_idle = function () {
        this.pos.x += this.idle.moveSpeed * (Math.random() * 2 - 1);
        this.pos.y += this.idle.moveSpeed * (Math.random() * 2 - 1);
    };
    EnemyFactory.prototype.move_ToLeft = function () {
        this.pos.x -= this.toLeft.moveSpeed;
    };
    EnemyFactory.prototype.move_UpAndDown = function () {
        this.pos.y += this.upAndDown.moveSpeed * Math.sin(this.upAndDown.angle);
        this.upAndDown.angle += this.upAndDown.angleStep;
    };
    EnemyFactory.prototype.move_recycle = function () {
        if (this.pos.x + this.enemyInfo.draw_width <= 0)
            this.pos.x = CANVAS_WIDTH;
    };
    EnemyFactory.prototype.move_asline = function () {
        this.pos.x = CANVAS_WIDTH / 2 * Math.cos(this.asline.angle * this.asline.factorX) + (CANVAS_WIDTH / 2 - this.enemyInfo.draw_width / 2);
        this.pos.y = CANVAS_HEIGHT / 2 * Math.sin(this.asline.angle * this.asline.factorY) + (CANVAS_HEIGHT / 2 - this.enemyInfo.draw_height / 2);
        this.asline.angle += this.asline.angleStep;
    };
    EnemyFactory.prototype.move_randomMovement = function () {
        if (this.randomMovement.frameCount++ % this.randomMovement.frameStageInterval == 0) {
            this.randomMovement.newPos.x = RandomRange(0, CANVAS_WIDTH - this.enemyInfo.draw_width);
            this.randomMovement.newPos.y = RandomRange(0, CANVAS_HEIGHT - this.enemyInfo.draw_height);
        }
        var dx = (this.pos.x - this.randomMovement.newPos.x) / this.randomMovement.frameStageInterval;
        var dy = (this.pos.y - this.randomMovement.newPos.y) / this.randomMovement.frameStageInterval;
        this.pos.x -= dx * this.randomMovement.moveSpeed;
        this.pos.y -= dy * this.randomMovement.moveSpeed;
    };
    EnemyFactory.prototype.animate = function () {
        this.animation.frameIndex = Math.floor(this.animation.frameCount++ / this.animation.frameStage) % this.enemyInfo.frame_count;
    };
    EnemyFactory.prototype.update = function () {
        var _this = this;
        // for position
        this.enemyInfo.movements.forEach(function (movementName) {
            _this[movementName]();
            // this.move_idle();// 随机移动
            // this.move_asline();
            // this.move_ToLeft();// 往左移动
            // this.move_randomMovement();
            // this.move_recycle();// 循环移动
            // this.move_UpAndDown();//上下摆动
        });
        // for animate
        this.animate(); //动画
    };
    EnemyFactory.prototype.draw = function () {
        ctx.drawImage(this.img, this.animation.frameIndex * this.enemyInfo.frame_width, 0, this.enemyInfo.frame_width, this.enemyInfo.frame_height, this.pos.x, this.pos.y, this.enemyInfo.draw_width, this.enemyInfo.draw_height);
    };
    EnemyFactory.prototype.refresh = function () {
        this.update();
        this.draw();
    };
    return EnemyFactory;
}());
var enemys = [];
var enemyMaxNum = 25;
createEnemys();
function createEnemys() {
    for (var index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy1"]));
    }
    for (var index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy2"]));
    }
    for (var index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy3"]));
    }
    for (var index = 0; index < enemyMaxNum; index++) {
        enemys.push(new EnemyFactory(EnemyTypes["enemy4"]));
    }
}
function refreshEnemys() {
    enemys.forEach(function (enemy) { return enemy.refresh(); });
}
function refresh() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    refreshEnemys();
    requestAnimationFrame(refresh);
}
refresh();
