var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.addEventListener("load", function () {
    var myCanvas = document.querySelector("#myCanvas");
    var collisionLayer = document.querySelector("#collisionLayer");
    var ctx = myCanvas.getContext("2d");
    var ctxCollision = collisionLayer.getContext("2d");
    var CANVAS_WIDTH = (myCanvas.width = collisionLayer.width = 1024);
    var CANVAS_HEIGHT = (myCanvas.height = collisionLayer.height = 760);
    function RandomRange(from, to) {
        return Math.random() * (to - from) + from;
    }
    var Game = /** @class */ (function () {
        function Game(Context2D, CANVAS_WIDTH, CANVAS_HEIGHT) {
            this.addEnemyTimer = 0;
            this.Context2D = Context2D;
            this.CANVAS_WIDTH = CANVAS_WIDTH;
            this.CANVAS_HEIGHT = CANVAS_HEIGHT;
            this.enemys = [];
        }
        Game.prototype.update = function (timeInterval) {
            this.addEnemy(timeInterval);
            this.removeDieEnemys();
        };
        Game.prototype.draw = function (timeInterval) {
            this.Context2D.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
            this.enemys.forEach(function (item) { return item.refresh(timeInterval); });
        };
        Game.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.draw(timeInterval);
        };
        Game.prototype.addEnemy = function (timeInterval) {
            this.addEnemyTimer += timeInterval;
            if (this.addEnemyTimer > 500) {
                this.addEnemyTimer = 0;
                this.enemys.push(new Ghost(this));
                this.enemys.push(new Worm(this));
                this.enemys.push(new Spider(this));
                // this.enemys.sort((a, b) => a.posY - b.posY);
            }
        };
        Game.prototype.removeDieEnemys = function () {
            this.enemys = this.enemys.filter(function (item) { return item.isAlive(); });
        };
        return Game;
    }());
    // 动画对象
    var Animater = /** @class */ (function () {
        function Animater(Game, imgSrc, imgframeTotal, imgframeWidth, imgframeHeight, size) {
            this.posX = 0; // 位置x
            this.posY = 0; // 位置y
            this.animateframeIndex = 0; // 当前绘制的是第几帧
            this.animateframeCount = 0; // 帧计数
            this.animateframeStage = 3; // 刷新频率 每隔多少帧绘制下一帧
            this.Game = Game;
            this.img = new Image();
            this.img.src = imgSrc;
            this.imgframeTotal = imgframeTotal;
            this.imgframeWidth = imgframeWidth;
            this.imgframeHeight = imgframeHeight;
            this.drawWidth = this.imgframeWidth * size;
            this.drawHeight = this.imgframeHeight * size;
            this.animateframeStage = Math.floor(RandomRange(3, 8));
        }
        Animater.prototype.update = function (timeInterval) {
            return;
        };
        Animater.prototype.animate = function (timeInterval) {
            this.animateframeIndex = Math.floor(this.animateframeCount++ / this.animateframeStage) % this.imgframeTotal;
            this.Game.Context2D.drawImage(this.img, this.animateframeIndex * this.imgframeWidth, 0, this.imgframeWidth, this.imgframeHeight, this.posX, this.posY, this.drawWidth, this.drawHeight);
        };
        Animater.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.animate(timeInterval);
        };
        return Animater;
    }());
    // 抽象类Enemy 继承动画类 实现Moveable AliveAble 接口
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moveSpeedX = 0;
            _this.moveSpeedY = 0;
            return _this;
        }
        return Enemy;
    }(Animater));
    // 蠕虫 继承 Enemy类
    var Worm = /** @class */ (function (_super) {
        __extends(Worm, _super);
        function Worm(Game) {
            var _this = _super.call(this, Game, "./imgs/Worm.png", 6, 229, 171, 0.5) || this;
            _this.posX = _this.Game.CANVAS_WIDTH;
            _this.posY = _this.Game.CANVAS_HEIGHT - _this.drawHeight;
            _this.moveSpeedX = RandomRange(0.1, 0.2);
            return _this;
        }
        Worm.prototype.isAlive = function () {
            return this.posX + this.drawWidth > 0;
        };
        Worm.prototype.move = function (timeInterval) {
            this.posX -= this.moveSpeedX * timeInterval;
        };
        Worm.prototype.update = function (timeInterval) {
            this.move(timeInterval);
        };
        return Worm;
    }(Enemy));
    // 鬼
    var Ghost = /** @class */ (function (_super) {
        __extends(Ghost, _super);
        function Ghost(Game) {
            var _this = _super.call(this, Game, "./imgs/Ghost.png", 6, 261, 209, 0.5) || this;
            _this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
            _this.posX = _this.Game.CANVAS_WIDTH;
            _this.posY = 0.5 * RandomRange(0, _this.Game.CANVAS_HEIGHT - _this.drawHeight);
            _this.moveSpeedX = RandomRange(0.2, 0.3);
            _this.alpha = RandomRange(0.2, 0.5);
            _this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
            _this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
            _this.shakeGapRadius = RandomRange(2, 5);
            return _this;
        }
        Ghost.prototype.isAlive = function () {
            return this.posX + this.drawWidth > 0;
        };
        Ghost.prototype.move = function (timeInterval) {
            this.posX -= this.moveSpeedX * timeInterval;
        };
        Ghost.prototype.shake = function (timeInterval) {
            this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
            this.shakeAngle += this.shakeDeltaAngle * timeInterval;
        };
        Ghost.prototype.update = function (timeInterval) {
            this.move(timeInterval);
            this.shake(timeInterval);
        };
        Ghost.prototype.animate = function (timeInterval) {
            this.Game.Context2D.save();
            this.Game.Context2D.globalAlpha = this.alpha;
            _super.prototype.animate.call(this, timeInterval);
            this.Game.Context2D.restore();
        };
        return Ghost;
    }(Enemy));
    var Spider = /** @class */ (function (_super) {
        __extends(Spider, _super);
        function Spider(Game) {
            var _this = _super.call(this, Game, "./imgs/Spider.png", 6, 310, 175, 0.5) || this;
            _this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
            _this.posX = RandomRange(0, _this.Game.CANVAS_WIDTH - _this.drawWidth);
            _this.posY = -_this.drawHeight;
            _this.shakePosY = _this.posY;
            _this.shakeAngle = 0;
            _this.shakeDeltaAngle = RandomRange(Math.asin(0.0005), Math.asin(0.001));
            _this.shakeGapRadius = RandomRange(_this.Game.CANVAS_HEIGHT / 4, _this.Game.CANVAS_HEIGHT);
            return _this;
        }
        Spider.prototype.isAlive = function () {
            return this.shakeAngle <= Math.PI; // 播放完一个周期便消失
        };
        Spider.prototype.shake = function (timeInterval) {
            // 蜘蛛上下移动
            this.posY = this.shakePosY + this.shakeGapRadius * Math.sin(this.shakeAngle);
            this.shakeAngle += this.shakeDeltaAngle * timeInterval;
        };
        Spider.prototype.move = function (timeInterval) {
            this.shake(timeInterval);
        };
        Spider.prototype.update = function (timeInterval) {
            this.move(timeInterval);
        };
        Spider.prototype.animate = function (timeInterval) {
            // 绘制蜘蛛丝
            this.Game.Context2D.beginPath();
            this.Game.Context2D.moveTo(this.posX + this.drawWidth / 2, 0);
            this.Game.Context2D.lineTo(this.posX + this.drawWidth / 2, this.posY);
            this.Game.Context2D.stroke();
            // 绘制动画
            _super.prototype.animate.call(this, timeInterval);
        };
        return Spider;
    }(Enemy));
    var game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
    var lastTimeStampFromStart = 0;
    function refresh(currentTimeStampFromStart) {
        var timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
        lastTimeStampFromStart = currentTimeStampFromStart;
        game.refresh(timeInterval); // 刷新游戏
        requestAnimationFrame(refresh);
    }
    refresh(0);
});
