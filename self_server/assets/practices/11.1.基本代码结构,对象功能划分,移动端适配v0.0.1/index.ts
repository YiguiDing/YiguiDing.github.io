window.addEventListener("load", () => {
	const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
	const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

	const CANVAS_WIDTH = (myCanvas.width = 1080);
	const CANVAS_HEIGHT = (myCanvas.height = 720);

	function RandomRange(from: number, to: number) {
		return Math.random() * (to - from) + from;
	}

	class Game {
		readonly CanvasDOM: HTMLCanvasElement;
		readonly Context2D: CanvasRenderingContext2D;
		readonly InputListener: UserInputListener;
		readonly CANVAS_WIDTH: number;
		readonly CANVAS_HEIGHT: number;
		gameStatus: "Preview" | "Init" | "Running" | "Stop" | "GameOver" = "Preview";
		background: BackgroundCycleAble;
		scenceMoveSpeed = -0.5; // 场景移动速度
		scenceMoveSpeedFactor = 1; // 场景移动速率
		enemys: Array<Animal> = [];
		player: ShadowDog;
		addEnemyTimer = 0;
		addEnemyInterval = 1500; //添加敌人的时间间隔
		difficultyMaxAddEnemyInterval = 500; // 最高难度:添加敌人的时间间隔
		difficultyAddSpeed = -0.0001; // 衰减速度
		score = 0;
		displayScore: string;
		constructor(CanvasDOM: HTMLCanvasElement, Context2D: CanvasRenderingContext2D, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
			this.CanvasDOM = CanvasDOM;
			this.Context2D = Context2D;
			this.CANVAS_WIDTH = CANVAS_WIDTH;
			this.CANVAS_HEIGHT = CANVAS_HEIGHT;
			this.InputListener = new UserInputListener(this.CanvasDOM);
			this.previewGame();
		}
		previewGame() {
			this.background = new BackgroundCity(this);
			this.player = new ShadowDog(this);
			this.InputListener.inputs = [];
			this.enemys = [];
			this.score = 0;
			this.scenceMoveSpeed = -0.5;
			this.scenceMoveSpeedFactor = 1.0;
			this.addEnemyInterval = 500;
			this.gameStatus = "Preview";
		}
		initGame() {
			this.background = new BackgroundCity(this);
			this.player = new ShadowDog(this);
			this.InputListener.inputs = [];
			this.enemys = [];
			this.score = 0;
			this.scenceMoveSpeed = -0.5;
			this.scenceMoveSpeedFactor = 1.0;
			this.addEnemyInterval = 1500;
			this.gameStatus = "Init";
		}
		gameOver() {
			this.scenceMoveSpeedFactor = 0;
			this.player.action_ko();
			this.gameStatus = "GameOver";
		}
		// 用户输入处理函数
		userInputHandler() {
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
		}
		// 输入处理函数
		playerInputHandler(timeInterval: number) {
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
		}
		// 碰撞检测处理程序
		cllisionCheackerHandler() {
			for (let index = 0; index < this.enemys.length; index++) {
				const element = this.enemys[index];
				if (element.isCollision(this.player)) {
					return true;
				}
			}
			return false;
		}
		// 游戏场景移动处理函数
		scenceMoveHandler(timeInterval: number) {
			const accSpeed = this.scenceMoveSpeed * this.scenceMoveSpeedFactor; // 计算需要增加的速度
			this.background.backgroundMoveSpeedX = accSpeed; // 设置背景移动速度
			this.enemys.forEach(item => (item.posX += accSpeed * timeInterval)); // 计算敌人的新坐标
		}
		// 分数计算
		scoreUpdateHandler(timeInterval: number) {
			this.score += -1 * this.scenceMoveSpeed * this.scenceMoveSpeedFactor * timeInterval;
			this.displayScore = (this.score / 100).toFixed(0) + "m";
		}
		// 更新数据
		update(timeInterval: number) {
			this.userInputHandler(); //  用户输入处理
			if (this.gameStatus == "Preview" || this.gameStatus == "Running") {
				this.playerInputHandler(timeInterval); // 玩家输入处理
				this.scoreUpdateHandler(timeInterval); // 分数计算
				if (this.gameStatus == "Running") this.difficultyAddHandler(timeInterval);
				if (this.gameStatus == "Running" && this.cllisionCheackerHandler()) {
					// 游戏过程中检测到碰撞测结束游戏
					this.gameOver();
				}
			}
			this.EnemyHandler(timeInterval); // 敌人的处理
			this.scenceMoveHandler(timeInterval); // 场景移动
		}
		// 绘制
		animate(timeInterval: number) {
			this.Context2D.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
			this.background.refresh(timeInterval);
			[...this.enemys, this.player].sort((a, b) => a.posY - b.posY).forEach(item => item.refresh(timeInterval));
		}
		// 刷新
		refresh(timeInterval: number) {
			this.update(timeInterval);
			this.animate(timeInterval);
			this.GameStatusDisplayHandler();
		}
		// 难度增强
		difficultyAddHandler(timeInterval: number) {
			if (this.addEnemyInterval > this.difficultyMaxAddEnemyInterval) {
				this.addEnemyInterval += this.difficultyAddSpeed * timeInterval;
			}
		}
		EnemyHandler(timeInterval: number) {
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
			this.enemys = this.enemys.filter(item => item.isAlive());
		}
		// 游戏状态显示
		GameStatusDisplayHandler() {
			this.Context2D.save();
			const txtSize = 40;
			const txtShadowWidth = 2;
			this.Context2D.font = `${txtSize}px Impact`;
			if (this.gameStatus == "Preview" || this.gameStatus == "Init") {
				this.Context2D.textAlign = "center";
				this.Context2D.fillStyle = "white";
				this.Context2D.fillText("Press Enter To Start Game...", this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
				this.Context2D.fillStyle = "black";
				this.Context2D.fillText("Press Enter To Start Game...", this.CANVAS_WIDTH / 2 + txtShadowWidth, this.CANVAS_HEIGHT / 2 + txtShadowWidth);
			} else if (this.gameStatus == "Running") {
				this.Context2D.textAlign = "left";
				this.Context2D.fillStyle = "white";
				this.Context2D.fillText("Score: " + this.displayScore, 5, txtSize);
				this.Context2D.fillStyle = "black";
				this.Context2D.fillText("Score: " + this.displayScore, 5 + txtShadowWidth, txtSize + txtShadowWidth);
			} else if (this.gameStatus == "Stop") {
				this.Context2D.textAlign = "center";
				this.Context2D.fillStyle = "white";
				this.Context2D.fillText("Press Enter To Continue...", this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
				this.Context2D.fillStyle = "black";
				this.Context2D.fillText("Press Enter To Continue...", this.CANVAS_WIDTH / 2 + txtShadowWidth, this.CANVAS_HEIGHT / 2 + txtShadowWidth);
			} else if (this.gameStatus == "GameOver") {
				this.Context2D.textAlign = "center";
				this.Context2D.fillStyle = "white";
				this.Context2D.fillText("Game Over Your Score Is: " + this.displayScore, this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2);
				this.Context2D.fillStyle = "black";
				this.Context2D.fillText(
					"Game Over Your Score Is: " + this.displayScore,
					this.CANVAS_WIDTH / 2 + txtShadowWidth,
					this.CANVAS_HEIGHT / 2 + txtShadowWidth
				);
			}
			this.Context2D.restore();
		}
	}
	// 可滚动的背景层
	class BackgroundCycleLayer {
		game: Game;
		img: HTMLImageElement;
		imgWidth: number;
		imgHeight: number;
		pos1_X: number;
		pox1_Y: number;
		pos2_X: number;
		pox2_Y: number;
		layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的
		layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致
		constructor(game: Game, imgSrc: string, imgWidth: number, imgHeight: number, layerMoveSpeedFactor: number) {
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
		update(timeInterval: number) {
			this.pos1_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
			this.pos2_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
			// 图层向左移动，图层出界，向后添加新图层
			if (this.layerMoveSpeedX < 0 && this.pos1_X + this.imgWidth <= 0) this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后
			if (this.layerMoveSpeedX < 0 && this.pos2_X + this.imgWidth <= 0) this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后
			// 图层向右移动，图层出界，向前添加新图层
			if (this.layerMoveSpeedX > 0 && this.pos1_X >= 0) this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后
			if (this.layerMoveSpeedX > 0 && this.pos2_X >= 0) this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后
		}
		draw(timeInterval: number) {
			this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos1_X, this.pox1_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
			this.game.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos2_X, this.pox2_Y, this.imgWidth, this.game.CANVAS_HEIGHT);
		}
		refresh(timeInterval: number) {
			this.update(timeInterval);
			this.draw(timeInterval);
		}
	}
	// 可滚动的多层背景
	abstract class BackgroundCycleAble {
		private _backgroundMoveSpeedX = 0; // 背景移动速度
		layers: Array<BackgroundCycleLayer> = []; // 背景
		update(timeInterval: number) {
			this.layers.forEach(item => item.update(timeInterval));
		}
		draw(timeInterval: number) {
			this.layers.forEach(item => item.draw(timeInterval));
		}
		refresh(timeInterval: number) {
			this.update(timeInterval);
			this.draw(timeInterval);
		}
		public get backgroundMoveSpeedX() {
			return this._backgroundMoveSpeedX;
		}
		public set backgroundMoveSpeedX(value) {
			// 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
			if (this._backgroundMoveSpeedX != value) {
				// 更新所有层的速度
				this.layers.forEach(item => (item.layerMoveSpeedX = value));
				// 更新背景速度
				this._backgroundMoveSpeedX = value;
			}
		}
	}
	// 背景city，由1层构成
	class BackgroundCity extends BackgroundCycleAble {
		constructor(game: Game) {
			super();
			this.layers.push(new BackgroundCycleLayer(game, "./imgs/trees.png", 2400, 720, 1.0));
			this.backgroundMoveSpeedX = -0.5;
		}
	}
	// 动画对象
	class Animater {
		readonly game: Game;
		posX = 0; // 位置x
		posY = 0; // 位置y
		drawWidth: number; // 实际绘制的宽度
		drawHeight: number; // 实际绘制的高度
		img: HTMLImageElement; // 图片
		imgFrameWidth: number; // 一帧的宽度
		imgFrameHeight: number; // 一帧的高度
		animateFramesTotal: Array<number>; // [动画1的总帧数,动画2的总帧数,动画3的...]
		animateNameIndexMap: Array<string> = ["idle"]; // 数据结构：{动画名称:该动画是第几个动画}
		animateFrameIndexX = 0; // 当前绘制的是第几帧
		animateFrameIndexY = 0; // 当前绘制的是第几个动画
		animateFrameCount = 0; // 帧计数
		animateFrameStage = 3; // 刷新频率 每隔多少帧绘制下一帧
		animateFrameStageFactor = 1.0; // 刷新频率的系数
		private stopAnimateAtLastFlag = false;
		constructor(
			game: Game,
			imgSrc: string,
			imgFrameWidth: number,
			imgFrameHeight: number,
			size: number,
			animateFramesTotal: Array<number>,
			animateNameIndexMap: Array<string>
		) {
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
		update(timeInterval: number): void {
			return;
		}
		// 绘制动画
		animate(timeInterval: number): void {
			if (!(this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame())) {
				this.animateFrameIndexX =
					Math.floor((this.animateFrameCount++ / this.animateFrameStage) * this.animateFrameStageFactor) %
					this.animateFramesTotal[this.animateFrameIndexY];
			}
			this.game.Context2D.drawImage(
				this.img,
				this.animateFrameIndexX * this.imgFrameWidth,
				this.animateFrameIndexY * this.imgFrameHeight,
				this.imgFrameWidth,
				this.imgFrameHeight,
				this.posX,
				this.posY,
				this.drawWidth,
				this.drawHeight
			);
		}
		// 刷新
		refresh(timeInterval: number): void {
			this.update(timeInterval);
			this.animate(timeInterval);
		}
		changeAnimateByName(animateName: string) {
			// 根据名称切换动画
			if (this.animateNameIndexMap.includes(animateName)) this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
			else throw new Error(`animateName:'${animateName}' is not exist.`);
		}
		// 判断是否为最后一帧
		isLastAnimateFrame() {
			return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
		}
		// 请求渲染第一帧
		requestAnimateFrameAtFirstFrame() {
			this.animateFrameCount = 0; // 设置从第一帧开始
		}
		// 请求在渲染到最后一帧的时候停止更新动画
		requestStopAnimateFrameAtLastFrame() {
			this.stopAnimateAtLastFlag = true;
		}
	}
	// 可移动的
	interface MoveAble {
		moveSpeedX: number; // x轴移动速度 单位：像素/毫秒
		moveSpeedY: number; // x轴移动速度 单位：像素/毫秒
		move(timeInterval: number): void; // 移动
	}
	// 活的
	interface AliveAble {
		aliveFlag: boolean;
		isAlive(): boolean; // 用于判断是否存活
	}
	// 圆形碰撞检测
	interface CollisionCheckAble {
		collisionCheckPosX: number;
		collisionCheckPosY: number;
		collisionCheckWidth: number;
		collisionCheckHeight: number;
		collisionCheckRadius: number;
		collisionCheckUpdate(): void;
		isCollision(obj: CollisionCheckAble): boolean; // 碰撞检测
	}
	// 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口
	abstract class Animal extends Animater implements MoveAble, AliveAble, CollisionCheckAble {
		// 移动
		moveSpeedX = 0;
		moveSpeedY = 0;
		abstract move(timeInterval: number): void;
		// 存活
		aliveFlag = true;
		abstract isAlive(): boolean; // 判断是否存活
		// 可碰撞检测
		collisionCheckPosX: number;
		collisionCheckPosY: number;
		collisionCheckWidth: number;
		collisionCheckHeight: number;
		collisionCheckRadius: number;
		collisionCheckUpdate(): void {
			this.collisionCheckPosX = this.posX + this.drawWidth / 2;
			this.collisionCheckPosY = this.posY + this.drawHeight / 2;
			this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.75;
		}
		isCollision(obj: CollisionCheckAble): boolean {
			this.collisionCheckUpdate();
			obj.collisionCheckUpdate();
			const dX = this.collisionCheckPosX - obj.collisionCheckPosX;
			const dY = this.collisionCheckPosY - obj.collisionCheckPosY;
			const distance = Math.sqrt(dX * dX + dY * dY);
			return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
		}
		animate(timeInterval: number): void {
			// this.game.Context2D.beginPath();
			// this.game.Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
			// this.game.Context2D.stroke();
			// this.game.Context2D.closePath();
			super.animate(timeInterval);
		}
	}

	// 蠕虫 继承 Animal 类
	class Worm extends Animal {
		constructor(game: Game) {
			super(game, "./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
			this.posX = this.game.CANVAS_WIDTH;
			this.posY = this.game.CANVAS_HEIGHT - this.drawHeight;
			this.moveSpeedX = RandomRange(0.1, 0.2);
		}
		isAlive(): boolean {
			return this.posX + this.drawWidth > 0;
		}
		move(timeInterval: number) {
			this.posX -= this.moveSpeedX * timeInterval;
		}
		update(timeInterval: number): void {
			this.move(timeInterval);
		}
	}
	// 鬼
	class Ghost extends Animal {
		alpha: number; // 透明度
		shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
		shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
		shakeGapRadius: number; // 摆动范围半径 单位：像素
		constructor(game: Game) {
			super(game, "./imgs/Ghost.png", 261, 209, 0.5, [6], ["idle"]);
			this.posX = this.game.CANVAS_WIDTH;
			this.posY = 0.5 * RandomRange(0, this.game.CANVAS_HEIGHT - this.drawHeight);
			this.moveSpeedX = RandomRange(0.2, 0.3);
			this.alpha = RandomRange(0.2, 0.5);
			this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
			this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
			this.shakeGapRadius = RandomRange(2, 5);
		}
		isAlive(): boolean {
			return this.posX + this.drawWidth > 0;
		}
		move(timeInterval: number) {
			this.posX -= this.moveSpeedX * timeInterval;
		}
		shake(timeInterval: number) {
			this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
			this.shakeAngle += this.shakeDeltaAngle * timeInterval;
		}
		update(timeInterval: number): void {
			this.move(timeInterval);
			this.shake(timeInterval);
		}
		animate(timeInterval: number): void {
			this.game.Context2D.save();
			this.game.Context2D.globalAlpha = this.alpha;
			super.animate(timeInterval);
			this.game.Context2D.restore();
		}
	}
	class Spider extends Animal {
		shakePosY: number; // 初始坐标
		shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
		shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
		shakeGapRadius: number; // 摆动范围半径 单位：像素
		constructor(game: Game) {
			super(game, "./imgs/Spider.png", 310, 175, 0.5, [6], ["idle"]);
			this.posX = RandomRange(0, this.game.CANVAS_WIDTH - this.drawWidth);
			this.posY = -this.drawHeight;
			this.shakePosY = this.posY;
			this.shakeAngle = 0;
			this.shakeDeltaAngle = RandomRange(Math.asin(0.0005), Math.asin(0.001));
			this.shakeGapRadius = RandomRange(this.game.CANVAS_HEIGHT / 4, this.game.CANVAS_HEIGHT);
		}
		isAlive(): boolean {
			return this.shakeAngle <= Math.PI; // 播放完一个周期便消失
		}
		shake(timeInterval: number) {
			// 蜘蛛上下移动
			this.posY = this.shakePosY + this.shakeGapRadius * Math.sin(this.shakeAngle);
			this.shakeAngle += this.shakeDeltaAngle * timeInterval;
		}
		move(timeInterval: number): void {
			this.shake(timeInterval);
		}
		update(timeInterval: number): void {
			this.move(timeInterval);
		}
		animate(timeInterval: number): void {
			// 绘制蜘蛛丝
			this.game.Context2D.beginPath();
			this.game.Context2D.moveTo(this.posX + this.drawWidth / 2, 0);
			this.game.Context2D.lineTo(this.posX + this.drawWidth / 2, this.posY);
			this.game.Context2D.stroke();
			// 绘制动画
			super.animate(timeInterval);
		}
	}

	class ShadowDog extends Animal {
		jumpWeight: number; // 重量
		jumpSpeed: number;
		jumpSpeedConst: number;
		actionMoveSpeedX: number;
		actionMoveSpeedY: number;
		constructor(game: Game) {
			super(
				game,
				"./imgs/shadow_dog.png",
				575,
				523,
				0.4,
				[7, 7, 7, 9, 11, 5, 7, 7, 12, 4],
				["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]
			);
			this.animateFrameStage = 4;
			this.posX = RandomRange(0, this.drawWidth);
			this.posY = this.game.CANVAS_HEIGHT - this.drawHeight - this.drawHeight / 4;
			this.actionMoveSpeedX = RandomRange(0.3, 0.3);
			this.actionMoveSpeedY = RandomRange(0.3, 0.3);
			this.jumpWeight = 0.08;
			this.jumpSpeed = 0;
			this.jumpSpeedConst = -RandomRange(1.5, 1.5);
		}
		inSky() {
			return this.posY <= this.game.CANVAS_HEIGHT - this.drawHeight - this.drawHeight / 4;
		}
		// ["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]
		action_default() {
			this.moveSpeedX = this.actionMoveSpeedX * 0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("run");
		}
		action_ahead() {
			this.moveSpeedX = this.actionMoveSpeedX * 1.0;
			this.animateFrameStageFactor = 1.5;
			this.changeAnimateByName("run");
		}
		action_back() {
			this.moveSpeedX = -this.actionMoveSpeedX * 1.0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("run");
		}
		action_idle() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("idle");
		}
		action_sit() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("sit");
		}
		action_roll() {
			this.moveSpeedX = -this.actionMoveSpeedX * 1;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("roll");
		}
		action_dizzy() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("dizzy");
		}
		action_bite() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.animateFrameStageFactor = 1.0;
			this.changeAnimateByName("bite");
		}
		action_ko() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.aliveFlag = false; // 标记为死亡
			this.animateFrameStageFactor = 2.0;
			this.changeAnimateByName("ko"); // 死亡动画效果
			this.requestAnimateFrameAtFirstFrame(); // 请求渲染第一帧
			this.requestStopAnimateFrameAtLastFrame(); // 请求在渲染最后一帧的时候停止渲染
		}
		action_gethit() {
			this.moveSpeedX = 0;
			this.moveSpeedY = 0;
			this.changeAnimateByName("gethit");
		}
		action_jump() {
			if (!this.inSky()) {
				this.changeAnimateByName("jump");
				this.jumpSpeed = this.jumpSpeedConst; // 高度变化
			}
		}
		// 重力影响
		gravity() {
			if (this.inSky()) {
				this.jumpSpeed += this.jumpWeight;
				if (this.jumpSpeed < 0 && this.isAlive()) this.changeAnimateByName("jump");
				if (this.jumpSpeed > 0 && this.isAlive()) this.changeAnimateByName("fall");
			}
		}
		// 拉回屏幕 防止越界
		dragBack() {
			// 水平拉回屏幕 防止越界
			if (this.posX < 0) this.posX = 0;
			else if (this.posX + this.drawWidth > this.game.CANVAS_WIDTH) this.posX = this.game.CANVAS_WIDTH - this.drawWidth;
			// 垂直拉回屏幕 防止越界
			if (this.posY < 0) this.posY = 0;
			else if (this.posY + this.drawHeight > this.game.CANVAS_HEIGHT) this.posY = this.game.CANVAS_HEIGHT - this.drawHeight;
		}
		// 移动
		move(timeInterval: number): void {
			this.posX += this.moveSpeedX * timeInterval;
			this.posY += this.moveSpeedY * timeInterval + this.jumpSpeed * timeInterval;
		}
		update(timeInterval: number): void {
			this.move(timeInterval);
			this.gravity();
			this.dragBack();
		}
		isAlive(): boolean {
			return this.aliveFlag;
		}
	}
	enum PlayerCtrl {
		GoAhead = "GoAhead",
		Back = "Back",
		Up = "Up",
		Down = "Down",
		Space = "Space"
	}
	enum GameCtrl {
		StartGame = "StartGame",
		StopGame = "StopGame"
	}
	enum DisplayCtrl {
		FullScreem = "FullScreem"
	}
	type InputKey = PlayerCtrl | GameCtrl | DisplayCtrl;
	type InputKeyMap = { [key: string]: InputKey };
	const UserInputMap: InputKeyMap = {
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
	class UserInputListener {
		inputs: Array<InputKey> = [];
		CanvasDOM: HTMLCanvasElement;
		constructor(CanvasDOM: HTMLCanvasElement) {
			this.CanvasDOM = CanvasDOM;
			this.listen();
		}
		listen() {
			// 按键按下监听
			window.addEventListener("keydown", event => {
				const inputKey = UserInputMap[event.key]; // 查找是否是要的键
				if (inputKey != undefined && !this.inputs.includes(inputKey)) {
					this.inputs.push(inputKey); // 如果是要监听的按键且数组中不包含该键 则保存该键
				}
			});
			// 按键按下的期间
			window.addEventListener("keypress", () => {
				if (this.inputs.includes(DisplayCtrl.FullScreem)) {
					this.CanvasDOM.requestFullscreen({ navigationUI: "hide" }).catch(err => console.log(err));
				}
			});
			// 按键弹出监听
			window.addEventListener("keyup", event => {
				const action = UserInputMap[event.key]; // 查找是否是要的键
				if (action != undefined && this.inputs.includes(action)) {
					const index = this.inputs.findIndex(item => item == action);
					this.inputs.splice(index, 1); // 如果是要监听的按键且数组已包含该键 则删除该键
				}
			});
			// changedTouches 存放的是触发相关事件的tarch对象集合
			let touchStart: Touch;
			let touchMove: Touch;
			let touchEnd: Touch;
			window.addEventListener("touchstart", event => {
				event.preventDefault();
				event.stopPropagation();
				// 记录点击屏幕的touch
				touchStart = event.changedTouches[0];
				// 单指触摸屏幕控制游戏开始
				if (event.touches.length == 1) {
					this.inputs.push(GameCtrl.StartGame);
				} else if (event.touches.length == 2) {
					this.CanvasDOM.requestFullscreen({ navigationUI: "hide" }).catch(err => alert(err));
				}
			});
			window.addEventListener("touchmove", event => {
				event.preventDefault();
				event.stopPropagation();
				// 记录移动的touch
				touchMove = event.changedTouches[0];
				// 计算移动距离
				const differY = touchMove.clientY - touchStart.clientY;
				const differX = touchMove.clientX - touchStart.clientX;
				// 右滑动屏幕
				if (differX > 50) {
					this.inputs.push(PlayerCtrl.GoAhead);
				}
				// 右滑动屏幕
				else if (differX < -50) {
					this.inputs.push(PlayerCtrl.Back);
				}
				// 上滑屏幕
				if (differY < -50) {
					this.inputs.push(PlayerCtrl.Up);
				}
				// 下滑屏幕
				else if (differY > 50) {
					this.inputs.push(PlayerCtrl.Down);
				}
			});
			// 手指离开则清空输入
			window.addEventListener("touchend", event => {
				event.preventDefault();
				event.stopPropagation();
				touchEnd = event.changedTouches[0];
				this.inputs = []; // 清空输入
			});
		}
	}
	const game = new Game(myCanvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
	let lastTimeStampFromStart = 0;
	function refresh(currentTimeStampFromStart: number) {
		const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
		lastTimeStampFromStart = currentTimeStampFromStart;
		game.refresh(timeInterval); // 刷新游戏
		requestAnimationFrame(refresh);
	}
	refresh(0);
});
