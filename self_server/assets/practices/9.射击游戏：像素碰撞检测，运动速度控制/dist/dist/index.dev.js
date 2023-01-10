"use strict";

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var myCanvas = document.querySelector("#myCanvas");
var collisionLayer = document.querySelector("#collisionLayer");
var ctx = myCanvas.getContext("2d");
var ctxCollision = collisionLayer.getContext("2d");
var CANVAS_WIDTH = myCanvas.width = collisionLayer.width = 1024;
var CANVAS_HEIGHT = myCanvas.height = collisionLayer.height = 760;
var EnemyTypes = {
  "enemy1": {
    src: "./imgs/enemy1.png",
    frame_count: 6,
    frame_width: 293,
    frame_height: 155,
    draw_width: 293 / 2.5,
    draw_height: 155 / 2.5,
    draw_size: [1.0, 1.0],
    movements: ["move_idle"]
  },
  "enemy2": {
    src: "./imgs/enemy2.png",
    frame_count: 6,
    frame_width: 266,
    frame_height: 188,
    draw_width: 266 / 2.5,
    draw_height: 188 / 2.5,
    draw_size: [1.0, 1.0],
    movements: ["move_ToLeft", "move_recycle"]
  },
  "enemy3": {
    src: "./imgs/enemy3.png",
    frame_count: 6,
    frame_width: 218,
    frame_height: 177,
    draw_width: 218 / 2.5,
    draw_height: 177 / 2.5,
    draw_size: [1.0, 1.0],
    movements: ["move_asline"]
  },
  "enemy4": {
    src: "./imgs/enemy4.png",
    frame_count: 9,
    frame_width: 213,
    frame_height: 212,
    draw_width: 213 / 2.5,
    draw_height: 212 / 2.5,
    draw_size: [1.0, 1.0],
    movements: ["move_randomMovement"]
  },
  "crow": {
    src: "./imgs/crow.png",
    frame_count: 6,
    frame_width: 271,
    frame_height: 194,
    draw_width: 271 / 2.5,
    draw_height: 194 / 2.5,
    draw_size: [1.0, 1.5],
    movements: ["move_ToLeft", "move_idle", "move_recycle"]
  }
};

function RandomRange(from, end) {
  return Math.random() * (end - from) + from;
}

var Enemy =
/** @class */
function () {
  function Enemy(enemyInfo) {
    // for movement
    this.pos = {
      x: 0,
      y: 0
    }; // 在画布中的位置

    this.idle = {
      moveSpeed: 0
    };
    this.toLeft = {
      moveSpeed: 0
    };
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
      newPos: {
        x: 0,
        y: 0
      },
      frameCount: 0,
      frameStageInterval: 0,
      moveSpeed: 0 // 移动速度

    }; // for animation

    this.animation = {
      frameStage: 0,
      frameIndex: 0,
      frameCount: 0 // 帧计数

    };
    this.enemyInfo = enemyInfo;
    this.img = new Image();
    this.img.src = this.enemyInfo.src; // 随机位置

    this.pos.x = Math.random() * (CANVAS_WIDTH - this.enemyInfo.draw_width); // 约束随机位置只能出现在画布内

    this.pos.y = Math.random() * (CANVAS_HEIGHT - this.enemyInfo.draw_height); // 大小

    this.size = RandomRange(this.enemyInfo.draw_size[0], this.enemyInfo.draw_size[1]); // 碰撞检测颜色

    this.collisionColor = [RandomRange(0, 255), RandomRange(0, 255), RandomRange(0, 255), RandomRange(0, 255)]; // 关键帧切换速度

    this.animation.frameStage = Math.random() * 3 + 1; // 1 ~ 4
    // for idle

    this.idle.moveSpeed = Math.random() * 5 - 2.5; // for toLeft

    this.toLeft.moveSpeed = RandomRange(5, 7); // for upAndDown

    this.upAndDown.angle = Math.asin(RandomRange(-1, 1)); // 初相角 -1 ~ 1

    this.upAndDown.angleStep = Math.asin(RandomRange(-0.25, 0.25)); // 上下移动周期 -0.25 ~ + 0.25

    this.upAndDown.moveSpeed = RandomRange(4, 6); // 上下移动步长 4 ~ 6
    // for asline

    this.asline.angle = Math.asin(RandomRange(-1, 1)); // 初相角 -1 ~ 1

    this.asline.angleStep = RandomRange(5, 15); // 移动周期 -0.2 ~ 0.2

    this.asline.factorX = Math.PI / 365 * 0.45;
    this.asline.factorY = Math.PI / 365 * 0.35; // randomReArrangement

    this.randomMovement.frameStageInterval = Math.floor(RandomRange(60, 60 * 3));
    this.randomMovement.moveSpeed = RandomRange(1, 2);
  }

  Enemy.prototype.move_idle = function () {
    this.pos.x += this.idle.moveSpeed * (Math.random() * 2 - 1);
    this.pos.y += this.idle.moveSpeed * (Math.random() * 2 - 1);
  };

  Enemy.prototype.move_ToLeft = function () {
    this.pos.x -= this.toLeft.moveSpeed;
  };

  Enemy.prototype.move_UpAndDown = function () {
    this.pos.y += this.upAndDown.moveSpeed * Math.sin(this.upAndDown.angle);
    this.upAndDown.angle += this.upAndDown.angleStep;
  };

  Enemy.prototype.move_recycle = function () {
    if (this.pos.x + this.enemyInfo.draw_width <= 0) this.pos.x = CANVAS_WIDTH;
  };

  Enemy.prototype.move_asline = function () {
    this.pos.x = CANVAS_WIDTH / 2 * Math.cos(this.asline.angle * this.asline.factorX) + (CANVAS_WIDTH / 2 - this.enemyInfo.draw_width / 2);
    this.pos.y = CANVAS_HEIGHT / 2 * Math.sin(this.asline.angle * this.asline.factorY) + (CANVAS_HEIGHT / 2 - this.enemyInfo.draw_height / 2);
    this.asline.angle += this.asline.angleStep;
  };

  Enemy.prototype.move_randomMovement = function () {
    if (this.randomMovement.frameCount++ % this.randomMovement.frameStageInterval == 0) {
      this.randomMovement.newPos.x = RandomRange(0, CANVAS_WIDTH - this.enemyInfo.draw_width);
      this.randomMovement.newPos.y = RandomRange(0, CANVAS_HEIGHT - this.enemyInfo.draw_height);
    }

    var dx = (this.pos.x - this.randomMovement.newPos.x) / this.randomMovement.frameStageInterval;
    var dy = (this.pos.y - this.randomMovement.newPos.y) / this.randomMovement.frameStageInterval;
    this.pos.x -= dx * this.randomMovement.moveSpeed;
    this.pos.y -= dy * this.randomMovement.moveSpeed;
  };

  Enemy.prototype.animate = function () {
    this.animation.frameIndex = Math.floor(this.animation.frameCount++ / this.animation.frameStage) % this.enemyInfo.frame_count;
  };

  Enemy.prototype.move = function () {
    var _this = this;

    this.enemyInfo.movements.forEach(function (movementName) {
      _this[movementName]();
    });
  };

  Enemy.prototype.update = function () {
    this.move();
    this.animate();
  };

  Enemy.prototype.draw = function () {
    ctx.drawImage(this.img, this.animation.frameIndex * this.enemyInfo.frame_width, 0, this.enemyInfo.frame_width, this.enemyInfo.frame_height, this.pos.x, this.pos.y, this.enemyInfo.draw_width * this.size, this.enemyInfo.draw_height * this.size);
  };

  Enemy.prototype.refresh = function () {
    this.update();
    this.draw();
  };

  return Enemy;
}();

var enemys = [];
var enemyMaxNum = 25;
createEnemys();

function createEnemys() {
  // for (let index = 0; index < enemyMaxNum; index++) {
  // enemys.push(new Enemy(EnemyTypes["enemy1"]));
  // }
  // for (let index = 0; index < enemyMaxNum; index++) {
  // enemys.push(new Enemy(EnemyTypes["enemy2"]));
  // }
  // for (let index = 0; index < enemyMaxNum; index++) {
  // enemys.push(new Enemy(EnemyTypes["enemy3"]));
  // }
  // for (let index = 0; index < enemyMaxNum; index++) {
  // enemys.push(new Enemy(EnemyTypes["enemy4"]));
  // }
  for (var index = 0; index < enemyMaxNum; index++) {
    enemys.push(new Enemy(EnemyTypes["crow"]));
  }
}

function refresh(timeInterval) {
  var fps = 1 / timeInterval * 1000;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  __spreadArrays(enemys).forEach(function (item) {
    return item.refresh();
  });

  ctx.fillText("fps:" + fps.toFixed(2), 10, 10);
}

var lastTime = Date.now();

function animate(currentTime) {
  var timeInterval = currentTime - lastTime;
  lastTime = currentTime;
  refresh(timeInterval);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
myCanvas.addEventListener("mousedown", function (event) {
  var imgdata = ctx.getImageData(event.offsetX, event.offsetY, 2, 1);
  console.log(0.5.toFixed(0));
});