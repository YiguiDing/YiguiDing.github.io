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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
window.addEventListener("load", function () {
    var myCanvas = document.querySelector("#myCanvas");
    var ctx = myCanvas.getContext("2d");
    var CANVAS_WIDTH = (myCanvas.width = 1080);
    var CANVAS_HEIGHT = (myCanvas.height = 720);
    function RandomRange(from, to) {
        return Math.random() * (to - from) + from;
    }
    var Game = /** @class */ (function () {
        function Game(CanvasDOM, Context2D, CANVAS_WIDTH, CANVAS_HEIGHT) {
            this.gameStatus = "Preview";
            this.scenceMoveSpeed = -0.5; // 场景移动速度
            this.scenceMoveSpeedFactor = 1; // 场景移动速率
            this.enemys = [];
            this.addEnemyTimer = 0;
            this.addEnemyInterval = 1500; //添加敌人的时间间隔
            this.difficultyMaxAddEnemyInterval = 500; // 最高难度:添加敌人的时间间隔
            this.difficultyAddSpeed = -0.0001; // 衰减速度
            this.score = 0;
            this.CanvasDOM = CanvasDOM;
            this.Context2D = Context2D;
            this.CANVAS_WIDTH = CANVAS_WIDTH;
            this.CANVAS_HEIGHT = CANVAS_HEIGHT;
            this.InputListener = new UserInputListener(this.CanvasDOM);
            this.previewGame();
        }
        Game.prototype.previewGame = function () {
            this.background = new BackgroundCity(this);
            this.player = new ShadowDog(this);
            this.InputListener.inputs = [];
            this.enemys = [];
            this.score = 0;
            this.scenceMoveSpeed = -0.5;
            this.scenceMoveSpeedFactor = 1.0;
            this.addEnemyInterval = 500;
            this.gameStatus = "Preview";
        };
        Game.prototype.initGame = function () {
            this.background = new BackgroundCity(this);
            this.player = new ShadowDog(this);
            this.InputListener.inputs = [];
            this.enemys = [];
            this.score = 0;
            this.scenceMoveSpeed = -0.5;
            this.scenceMoveSpeedFactor = 1.0;
            this.addEnemyInterval = 1500;
            this.gameStatus = "Init";
        };
        Game.prototype.gameOver = function () {
            this.scenceMoveSpeedFactor = 0;
            this.player.action_ko();
            this.gameStatus = "GameOver";
        };
        // 用户输入处理函数
        Game.prototype.userInputHandler = function () {
            // 用户控制游戏开始
            if (this.InputListener.inputs.includes(GameCtrl.StartGame)) {
                // Preview => init => Running
                if (this.gameStatus == "Preview") {
                    this.initGame();
                    this.gameStatus = "Running";
                }
                // Stop => Running
                else if (this.gameStatus == "Stop") {
                    this.gameStatus = "Running";
                }
                // GameOver => previewGame
                else if (this.gameStatus == "GameOver") {
                    this.previewGame();
                }
            }
            // 用户控制游戏暂停
            else if (this.InputListener.inputs.includes(GameCtrl.StopGame)) {
                // Running => Stop
                if (this.gameStatus == "Running") {
                    this.gameStatus = "Stop";
                }
            }
        };
        // 输入处理函数
        Game.prototype.playerInputHandler = function (timeInterval) {
            // 默认情况 游戏场景一倍速度移动
            if (this.InputListener.inputs.length == 0) {
                this.player.action_default();
                this.scenceMoveSpeedFactor = 1.0;
            }
            // 游戏角色俯冲 游戏场景倍速度移动
            else if (this.InputListener.inputs.includes(PlayerCtrl.GoAhead)) {
                this.player.action_ahead();
                this.scenceMoveSpeedFactor = 2.0;
            }
            // 游戏角色后退 游戏场景倍速度移动
            else if (this.InputListener.inputs.includes(PlayerCtrl.Back)) {
                this.player.action_back();
                this.scenceMoveSpeedFactor = -0.8;
            }
            // 游戏角色停住 游戏场景 0速度移动
            else if (this.InputListener.inputs.includes(PlayerCtrl.Down)) {
                this.player.action_sit();
                this.scenceMoveSpeedFactor = 0;
            }
            if (this.InputListener.inputs.includes(PlayerCtrl.Up)) {
                this.player.action_jump();
                this.scenceMoveSpeedFactor = 1.25;
            }
        };
        // 碰撞检测处理程序
        Game.prototype.cllisionCheackerHandler = function () {
            for (var index = 0; index < this.enemys.length; index++) {
                var element = this.enemys[index];
                if (element.isCollision(this.player)) {
                    return true;
                }
            }
            return false;
        };
        // 游戏场景移动处理函数
        Game.prototype.scenceMoveHandler = function (timeInterval) {
            var accSpeed = this.scenceMoveSpeed * this.scenceMoveSpeedFactor; // 计算需要增加的速度
            this.background.backgroundMoveSpeedX = accSpeed; // 设置背景移动速度
            this.enemys.forEach(function (item) { return (item.posX += accSpeed * timeInterval); }); // 计算敌人的新坐标
        };
        // 分数计算
        Game.prototype.scoreUpdateHandler = function (timeInterval) {
            this.score += -1 * this.scenceMoveSpeed * this.scenceMoveSpeedFactor * timeInterval;
            this.displayScore = (this.score / 100).toFixed(0) + "m";
        };
        // 更新数据
        Game.prototype.update = function (timeInterval) {
            this.userInputHandler(); //  用户输入处理
            if (this.gameStatus == "Preview" || this.gameStatus == "Running") {
                this.playerInputHandler(timeInterval); // 玩家输入处理
                this.scoreUpdateHandler(timeInterval); // 分数计算
                if (this.gameStatus == "Running")
                    this.difficultyAddHandler(timeInterval);
                if (this.gameStatus == "Running" && this.cllisionCheackerHandler()) {
                    // 游戏过程中检测到碰撞测结束游戏
                    this.gameOver();
                }
            }
            this.EnemyHandler(timeInterval); // 敌人的处理
            this.scenceMoveHandler(timeInterval); // 场景移动
        };
        // 绘制
        Game.prototype.animate = function (timeInterval) {
            this.Context2D.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
            this.background.refresh(timeInterval);
            __spreadArrays(this.enemys, [this.player]).sort(function (a, b) { return a.posY - b.posY; }).forEach(function (item) { return item.refresh(timeInterval); });
        };
        // 刷新
        Game.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.animate(timeInterval);
            this.GameStatusDisplayHandler();
        };
        // 难度增强
        Game.prototype.difficultyAddHandler = function (timeInterval) {
            if (this.addEnemyInterval > this.difficultyMaxAddEnemyInterval) {
                this.addEnemyInterval += this.difficultyAddSpeed * timeInterval;
            }
        };
        Game.prototype.EnemyHandler = function (timeInterval) {
            // 添加敌人
            this.addEnemyTimer += timeInterval;
            if (this.addEnemyTimer > this.addEnemyInterval) {
                this.addEnemyTimer = 0;
                switch (Math.floor(RandomRange(0, 3))) {
                    case 0:
                        this.enemys.push(new Ghost(this));
                        break;
                    case 1:
                        this.enemys.push(new Worm(this));
                        break;
                    case 2:
                        this.enemys.push(new Spider(this));
                        break;
                }
            }
            // 删除敌人
            this.enemys = this.enemys.filter(function (item) { return item.isAlive(); });
        };
        // 游戏状态显示
        Game.prototype.GameStatusDisplayHandler = function () {
            this.Context2D.save();
            var txtSize = 40;
            var txtShadowWidth = 2;
            this.Context2D.font = txtSize + "px Impact";
            if (this.gameStatus == "Preview" || this.gameStatus == "Init") {
                this.Context2D.textAlign = "center";
                this.Context2D.fillStyle = "white";
                this.Context2D.fillText("Press Enter To Start Game...", this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
                this.Context2D.fillStyle = "black";
                this.Context2D.fillText("Press Enter To Start Game...", this.CANVAS_WIDTH / 2 + txtShadowWidth, this.CANVAS_HEIGHT / 2 + txtShadowWidth);
            }
            else if (this.gameStatus == "Running") {
                this.Context2D.textAlign = "left";
                this.Context2D.fillStyle = "white";
                this.Context2D.fillText("Score: " + this.displayScore, 5, txtSize);
                this.Context2D.fillStyle = "black";
                this.Context2D.fillText("Score: " + this.displayScore, 5 + txtShadowWidth, txtSize + txtShadowWidth);
            }
            else if (this.gameStatus == "Stop") {
                this.Context2D.textAlign = "center";
                this.Context2D.fillStyle = "white";
                this.Context2D.fillText("Press Enter To Continue...", this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
                this.Context2D.fillStyle = "black";
                this.Context2D.fillText("Press Enter To Continue...", this.CANVAS_WIDTH / 2 + txtShadowWidth, this.CANVAS_HEIGHT / 2 + txtShadowWidth);
            }
            else if (this.gameStatus == "GameOver") {
                this.Context2D.textAlign = "center";
                this.Context2D.fillStyle = "white";
                this.Context2D.fillText("Game Over Your Score Is: " + this.displayScore, this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
                this.Context2D.fillStyle = "black";
                this.Context2D.fillText("Game Over Your Score Is: " + this.displayScore, this.CANVAS_WIDTH / 2 + txtShadowWidth, this.CANVAS_HEIGHT / 2 + txtShadowWidth);
            }
            this.Context2D.restore();
        };
        return Game;
    }());
    // 可滚动的背景层
    var BackgroundCycleLayer = /** @class */ (function () {
        function BackgroundCycleLayer(game, imgSrc, imgWidth, imgHeight, layerMoveSpeedFactor) {
            this.layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的
            this.layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致
            this.game = game;
            this.img = new Image();
            this.img.src = imgSrc;
            this.imgWidth = imgWidth;
            this.imgHeight = imgHeight;
            this.layerMoveSpeedFactor = layerMoveSpeedFactor;
            this.pos1_X = 0;
            this.pox1_Y = 0;
            this.pos2_X = this.imgWidth;
            this.pox2_Y = 0;
        }
        BackgroundCycleLayer.prototype.update = function (timeInterval) {
            this.pos1_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
            this.pos2_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
            // 图层向左移动，图层出界，向后添加新图层
            if (this.layerMoveSpeedX < 0 && this.pos1_X + this.imgWidth <= 0)
                this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后
            if (this.layerMoveSpeedX < 0 && this.pos2_X + this.imgWidth <= 0)
                this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后
            // 图层向右移动，图层出界，向前添加新图层
            if (this.layerMoveSpeedX > 0 && this.pos1_X >= 0)
                this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后
            if (this.layerMoveSpeedX > 0 && this.pos2_X >= 0)
                this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后
        };
        BackgroundCycleLayer.prototype.draw = function (timeInterval) {
            this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos1_X, this.pox1_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
            this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos2_X, this.pox2_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
        };
        BackgroundCycleLayer.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.draw(timeInterval);
        };
        return BackgroundCycleLayer;
    }());
    // 可滚动的多层背景
    var BackgroundCycleAble = /** @class */ (function () {
        function BackgroundCycleAble() {
            this._backgroundMoveSpeedX = 0; // 背景移动速度
            this.layers = []; // 背景
        }
        BackgroundCycleAble.prototype.update = function (timeInterval) {
            this.layers.forEach(function (item) { return item.update(timeInterval); });
        };
        BackgroundCycleAble.prototype.draw = function (timeInterval) {
            this.layers.forEach(function (item) { return item.draw(timeInterval); });
        };
        BackgroundCycleAble.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.draw(timeInterval);
        };
        Object.defineProperty(BackgroundCycleAble.prototype, "backgroundMoveSpeedX", {
            get: function () {
                return this._backgroundMoveSpeedX;
            },
            set: function (value) {
                // 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
                if (this._backgroundMoveSpeedX != value) {
                    // 更新所有层的速度
                    this.layers.forEach(function (item) { return (item.layerMoveSpeedX = value); });
                    // 更新背景速度
                    this._backgroundMoveSpeedX = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        return BackgroundCycleAble;
    }());
    // 背景city，由1层构成
    var BackgroundCity = /** @class */ (function (_super) {
        __extends(BackgroundCity, _super);
        function BackgroundCity(game) {
            var _this = _super.call(this) || this;
            _this.layers.push(new BackgroundCycleLayer(game, "./imgs/trees.png", 2400, 720, 1.0));
            _this.backgroundMoveSpeedX = -0.5;
            return _this;
        }
        return BackgroundCity;
    }(BackgroundCycleAble));
    // 动画对象
    var Animater = /** @class */ (function () {
        function Animater(game, imgSrc, imgFrameWidth, imgFrameHeight, size, animateFramesTotal, animateNameIndexMap) {
            this.posX = 0; // 位置x
            this.posY = 0; // 位置y
            this.animateNameIndexMap = ["idle"]; // 数据结构：{动画名称:该动画是第几个动画}
            this.animateFrameIndexX = 0; // 当前绘制的是第几帧
            this.animateFrameIndexY = 0; // 当前绘制的是第几个动画
            this.animateFrameCount = 0; // 帧计数
            this.animateFrameStage = 3; // 刷新频率 每隔多少帧绘制下一帧
            this.animateFrameStageFactor = 1.0; // 刷新频率的系数
            this.stopAnimateAtLastFlag = false;
            this.game = game;
            this.img = new Image();
            this.img.src = imgSrc;
            this.animateFramesTotal = animateFramesTotal;
            this.animateNameIndexMap = animateNameIndexMap;
            this.imgFrameWidth = imgFrameWidth;
            this.imgFrameHeight = imgFrameHeight;
            this.drawWidth = this.imgFrameWidth * size;
            this.drawHeight = this.imgFrameHeight * size;
            this.animateFrameStage = Math.floor(RandomRange(3, 8));
        }
        // 更新数据
        Animater.prototype.update = function (timeInterval) {
            return;
        };
        // 绘制动画
        Animater.prototype.animate = function (timeInterval) {
            if (!(this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame())) {
                this.animateFrameIndexX =
                    Math.floor((this.animateFrameCount++ / this.animateFrameStage) * this.animateFrameStageFactor) %
                        this.animateFramesTotal[this.animateFrameIndexY];
            }
            this.game.Context2D.drawImage(this.img, this.animateFrameIndexX * this.imgFrameWidth, this.animateFrameIndexY * this.imgFrameHeight, this.imgFrameWidth, this.imgFrameHeight, this.posX, this.posY, this.drawWidth, this.drawHeight);
        };
        // 刷新
        Animater.prototype.refresh = function (timeInterval) {
            this.update(timeInterval);
            this.animate(timeInterval);
        };
        Animater.prototype.changeAnimateByName = function (animateName) {
            // 根据名称切换动画
            if (this.animateNameIndexMap.includes(animateName))
                this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
            else
                throw new Error("animateName:'" + animateName + "' is not exist.");
        };
        // 判断是否为最后一帧
        Animater.prototype.isLastAnimateFrame = function () {
            return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
        };
        // 请求渲染第一帧
        Animater.prototype.requestAnimateFrameAtFirstFrame = function () {
            this.animateFrameCount = 0; // 设置从第一帧开始
        };
        // 请求在渲染到最后一帧的时候停止更新动画
        Animater.prototype.requestStopAnimateFrameAtLastFrame = function () {
            this.stopAnimateAtLastFlag = true;
        };
        return Animater;
    }());
    // 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口
    var Animal = /** @class */ (function (_super) {
        __extends(Animal, _super);
        function Animal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 移动
            _this.moveSpeedX = 0;
            _this.moveSpeedY = 0;
            // 存活
            _this.aliveFlag = true;
            return _this;
        }
        Animal.prototype.collisionCheckUpdate = function () {
            this.collisionCheckPosX = this.posX + this.drawWidth / 2;
            this.collisionCheckPosY = this.posY + this.drawHeight / 2;
            this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.75;
        };
        Animal.prototype.isCollision = function (obj) {
            this.collisionCheckUpdate();
            obj.collisionCheckUpdate();
            var dX = this.collisionCheckPosX - obj.collisionCheckPosX;
            var dY = this.collisionCheckPosY - obj.collisionCheckPosY;
            var distance = Math.sqrt(dX * dX + dY * dY);
            return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
        };
        Animal.prototype.animate = function (timeInterval) {
            // this.game.Context2D.beginPath();
            // this.game.Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
            // this.game.Context2D.stroke();
            // this.game.Context2D.closePath();
            _super.prototype.animate.call(this, timeInterval);
        };
        return Animal;
    }(Animater));
    // 蠕虫 继承 Animal 类
    var Worm = /** @class */ (function (_super) {
        __extends(Worm, _super);
        function Worm(game) {
            var _this = _super.call(this, game, "./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]) || this;
            _this.posX = _this.game.CANVAS_WIDTH;
            _this.posY = _this.game.CANVAS_HEIGHT - _this.drawHeight;
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
    }(Animal));
    // 鬼
    var Ghost = /** @class */ (function (_super) {
        __extends(Ghost, _super);
        function Ghost(game) {
            var _this = _super.call(this, game, "./imgs/Ghost.png", 261, 209, 0.5, [6], ["idle"]) || this;
            _this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
            _this.posX = _this.game.CANVAS_WIDTH;
            _this.posY = 0.5 * RandomRange(0, _this.game.CANVAS_HEIGHT - _this.drawHeight);
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
            this.game.Context2D.save();
            this.game.Context2D.globalAlpha = this.alpha;
            _super.prototype.animate.call(this, timeInterval);
            this.game.Context2D.restore();
        };
        return Ghost;
    }(Animal));
    var Spider = /** @class */ (function (_super) {
        __extends(Spider, _super);
        function Spider(game) {
            var _this = _super.call(this, game, "./imgs/Spider.png", 310, 175, 0.5, [6], ["idle"]) || this;
            _this.shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
            _this.posX = RandomRange(0, _this.game.CANVAS_WIDTH - _this.drawWidth);
            _this.posY = -_this.drawHeight;
            _this.shakePosY = _this.posY;
            _this.shakeAngle = 0;
            _this.shakeDeltaAngle = RandomRange(Math.asin(0.0005), Math.asin(0.001));
            _this.shakeGapRadius = RandomRange(_this.game.CANVAS_HEIGHT / 4, _this.game.CANVAS_HEIGHT);
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
            this.game.Context2D.beginPath();
            this.game.Context2D.moveTo(this.posX + this.drawWidth / 2, 0);
            this.game.Context2D.lineTo(this.posX + this.drawWidth / 2, this.posY);
            this.game.Context2D.stroke();
            // 绘制动画
            _super.prototype.animate.call(this, timeInterval);
        };
        return Spider;
    }(Animal));
    var ShadowDog = /** @class */ (function (_super) {
        __extends(ShadowDog, _super);
        function ShadowDog(game) {
            var _this = _super.call(this, game, "./imgs/shadow_dog.png", 575, 523, 0.4, [7, 7, 7, 9, 11, 5, 7, 7, 12, 4], ["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]) || this;
            _this.animateFrameStage = 4;
            _this.posX = RandomRange(0, _this.drawWidth);
            _this.posY = _this.game.CANVAS_HEIGHT - _this.drawHeight - _this.drawHeight / 4;
            _this.actionMoveSpeedX = RandomRange(0.3, 0.3);
            _this.actionMoveSpeedY = RandomRange(0.3, 0.3);
            _this.jumpWeight = 0.08;
            _this.jumpSpeed = 0;
            _this.jumpSpeedConst = -RandomRange(1.5, 1.5);
            return _this;
        }
        ShadowDog.prototype.inSky = function () {
            return this.posY <= this.game.CANVAS_HEIGHT - this.drawHeight - this.drawHeight / 4;
        };
        // ["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]
        ShadowDog.prototype.action_default = function () {
            this.moveSpeedX = this.actionMoveSpeedX * 0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("run");
        };
        ShadowDog.prototype.action_ahead = function () {
            this.moveSpeedX = this.actionMoveSpeedX * 1.0;
            this.animateFrameStageFactor = 1.5;
            this.changeAnimateByName("run");
        };
        ShadowDog.prototype.action_back = function () {
            this.moveSpeedX = -this.actionMoveSpeedX * 1.0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("run");
        };
        ShadowDog.prototype.action_idle = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("idle");
        };
        ShadowDog.prototype.action_sit = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("sit");
        };
        ShadowDog.prototype.action_roll = function () {
            this.moveSpeedX = -this.actionMoveSpeedX * 1;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("roll");
        };
        ShadowDog.prototype.action_dizzy = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("dizzy");
        };
        ShadowDog.prototype.action_bite = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.animateFrameStageFactor = 1.0;
            this.changeAnimateByName("bite");
        };
        ShadowDog.prototype.action_ko = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.aliveFlag = false; // 标记为死亡
            this.animateFrameStageFactor = 2.0;
            this.changeAnimateByName("ko"); // 死亡动画效果
            this.requestAnimateFrameAtFirstFrame(); // 请求渲染第一帧
            this.requestStopAnimateFrameAtLastFrame(); // 请求在渲染最后一帧的时候停止渲染
        };
        ShadowDog.prototype.action_gethit = function () {
            this.moveSpeedX = 0;
            this.moveSpeedY = 0;
            this.changeAnimateByName("gethit");
        };
        ShadowDog.prototype.action_jump = function () {
            if (!this.inSky()) {
                this.changeAnimateByName("jump");
                this.jumpSpeed = this.jumpSpeedConst; // 高度变化
            }
        };
        // 重力影响
        ShadowDog.prototype.gravity = function () {
            if (this.inSky()) {
                this.jumpSpeed += this.jumpWeight;
                if (this.jumpSpeed < 0 && this.isAlive())
                    this.changeAnimateByName("jump");
                if (this.jumpSpeed > 0 && this.isAlive())
                    this.changeAnimateByName("fall");
            }
        };
        // 拉回屏幕 防止越界
        ShadowDog.prototype.dragBack = function () {
            // 水平拉回屏幕 防止越界
            if (this.posX < 0)
                this.posX = 0;
            else if (this.posX + this.drawWidth > this.game.CANVAS_WIDTH)
                this.posX = this.game.CANVAS_WIDTH - this.drawWidth;
            // 垂直拉回屏幕 防止越界
            if (this.posY < 0)
                this.posY = 0;
            else if (this.posY + this.drawHeight > this.game.CANVAS_HEIGHT)
                this.posY = this.game.CANVAS_HEIGHT - this.drawHeight;
        };
        // 移动
        ShadowDog.prototype.move = function (timeInterval) {
            this.posX += this.moveSpeedX * timeInterval;
            this.posY += this.moveSpeedY * timeInterval + this.jumpSpeed * timeInterval;
        };
        ShadowDog.prototype.update = function (timeInterval) {
            this.move(timeInterval);
            this.gravity();
            this.dragBack();
        };
        ShadowDog.prototype.isAlive = function () {
            return this.aliveFlag;
        };
        return ShadowDog;
    }(Animal));
    var PlayerCtrl;
    (function (PlayerCtrl) {
        PlayerCtrl["GoAhead"] = "GoAhead";
        PlayerCtrl["Back"] = "Back";
        PlayerCtrl["Up"] = "Up";
        PlayerCtrl["Down"] = "Down";
        PlayerCtrl["Space"] = "Space";
    })(PlayerCtrl || (PlayerCtrl = {}));
    var GameCtrl;
    (function (GameCtrl) {
        GameCtrl["StartGame"] = "StartGame";
        GameCtrl["StopGame"] = "StopGame";
    })(GameCtrl || (GameCtrl = {}));
    var DisplayCtrl;
    (function (DisplayCtrl) {
        DisplayCtrl["FullScreem"] = "FullScreem";
    })(DisplayCtrl || (DisplayCtrl = {}));
    var UserInputMap = {
        // 方向键定义
        ArrowRight: PlayerCtrl.GoAhead,
        ArrowLeft: PlayerCtrl.Back,
        ArrowUp: PlayerCtrl.Up,
        ArrowDown: PlayerCtrl.Down,
        // 小写键盘方向键定义
        d: PlayerCtrl.GoAhead,
        a: PlayerCtrl.Back,
        w: PlayerCtrl.Up,
        s: PlayerCtrl.Down,
        // 大写键盘方向键定义
        D: PlayerCtrl.GoAhead,
        A: PlayerCtrl.Back,
        W: PlayerCtrl.Up,
        S: PlayerCtrl.Down,
        " ": PlayerCtrl.Space,
        // 功能键
        Enter: GameCtrl.StartGame,
        Escape: GameCtrl.StopGame,
        f: DisplayCtrl.FullScreem,
        F: DisplayCtrl.FullScreem
    };
    var UserInputListener = /** @class */ (function () {
        function UserInputListener(CanvasDOM) {
            this.inputs = [];
            this.CanvasDOM = CanvasDOM;
            this.listen();
        }
        UserInputListener.prototype.listen = function () {
            var _this = this;
            // 按键按下监听
            window.addEventListener("keydown", function (event) {
                var inputKey = UserInputMap[event.key]; // 查找是否是要的键
                if (inputKey != undefined && !_this.inputs.includes(inputKey)) {
                    _this.inputs.push(inputKey); // 如果是要监听的按键且数组中不包含该键 则保存该键
                }
            });
            // 按键按下的期间
            window.addEventListener("keypress", function () {
                if (_this.inputs.includes(DisplayCtrl.FullScreem)) {
                    _this.CanvasDOM.requestFullscreen({ navigationUI: "hide" })["catch"](function (err) { return console.log(err); });
                }
            });
            // 按键弹出监听
            window.addEventListener("keyup", function (event) {
                var action = UserInputMap[event.key]; // 查找是否是要的键
                if (action != undefined && _this.inputs.includes(action)) {
                    var index = _this.inputs.findIndex(function (item) { return item == action; });
                    _this.inputs.splice(index, 1); // 如果是要监听的按键且数组已包含该键 则删除该键
                }
            });
            // changedTouches 存放的是触发相关事件的tarch对象集合
            var touchStart;
            var touchMove;
            var touchEnd;
            window.addEventListener("touchstart", function (event) {
                event.preventDefault();
                event.stopPropagation();
                // 记录点击屏幕的touch
                touchStart = event.changedTouches[0];
                // 单指触摸屏幕控制游戏开始
                if (event.touches.length == 1) {
                    _this.inputs.push(GameCtrl.StartGame);
                }
                else if (event.touches.length == 2) {
                    _this.CanvasDOM.requestFullscreen({ navigationUI: "hide" })["catch"](function (err) { return alert(err); });
                }
            });
            window.addEventListener("touchmove", function (event) {
                event.preventDefault();
                event.stopPropagation();
                // 记录移动的touch
                touchMove = event.changedTouches[0];
                // 计算移动距离
                var differY = touchMove.clientY - touchStart.clientY;
                var differX = touchMove.clientX - touchStart.clientX;
                // 右滑动屏幕
                if (differX > 50) {
                    _this.inputs.push(PlayerCtrl.GoAhead);
                }
                // 右滑动屏幕
                else if (differX < -50) {
                    _this.inputs.push(PlayerCtrl.Back);
                }
                // 上滑屏幕
                if (differY < -50) {
                    _this.inputs.push(PlayerCtrl.Up);
                }
                // 下滑屏幕
                else if (differY > 50) {
                    _this.inputs.push(PlayerCtrl.Down);
                }
            });
            // 手指离开则清空输入
            window.addEventListener("touchend", function (event) {
                event.preventDefault();
                event.stopPropagation();
                touchEnd = event.changedTouches[0];
                _this.inputs = []; // 清空输入
            });
        };
        return UserInputListener;
    }());
    var game = new Game(myCanvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
    var lastTimeStampFromStart = 0;
    function refresh(currentTimeStampFromStart) {
        var timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
        lastTimeStampFromStart = currentTimeStampFromStart;
        game.refresh(timeInterval); // 刷新游戏
        requestAnimationFrame(refresh);
    }
    refresh(0);
});
