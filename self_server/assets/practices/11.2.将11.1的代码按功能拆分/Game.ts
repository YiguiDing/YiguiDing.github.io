import { GameCtrl, PlayerCtrl, UserInputListener } from "./UserInputListener.js";
import { BackgroundCycleAble } from "./BackgroundCycleAble.js";
import { Animal } from "./Animal.js";
import { ShadowDog } from "./ShadowDog.js";
import { BackgroundCity } from "./BackgroundCity.js";
import { RandomRange } from "./utils.js";
import { Ghost } from "./Ghost.js";
import { Worm } from "./Worm.js";
import { Spider } from "./Spider.js";

export class Game {
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
