window.addEventListener("load", () => {
	const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
	const collisionLayer = document.querySelector("#collisionLayer") as HTMLCanvasElement;
	const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;
	const ctxCollision = collisionLayer.getContext("2d") as CanvasRenderingContext2D;

	const CANVAS_WIDTH = (myCanvas.width = collisionLayer.width = 1024);
	const CANVAS_HEIGHT = (myCanvas.height = collisionLayer.height = 760);

	function RandomRange(from: number, to: number) {
		return Math.random() * (to - from) + from;
	}

	class Game {
		readonly Context2D: CanvasRenderingContext2D;
		readonly CANVAS_WIDTH: number;
		readonly CANVAS_HEIGHT: number;
		enemys: Array<Enemy>;
		addEnemyTimer = 0;
		constructor(Context2D: CanvasRenderingContext2D, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
			this.Context2D = Context2D;
			this.CANVAS_WIDTH = CANVAS_WIDTH;
			this.CANVAS_HEIGHT = CANVAS_HEIGHT;
			this.enemys = [];
		}
		update(timeInterval: number) {
			this.addEnemy(timeInterval);
			this.removeDieEnemys();
		}
		draw(timeInterval: number) {
			this.Context2D.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
			this.enemys.forEach(item => item.refresh(timeInterval));
		}
		refresh(timeInterval: number) {
			this.update(timeInterval);
			this.draw(timeInterval);
		}
		addEnemy(timeInterval: number) {
			this.addEnemyTimer += timeInterval;
			if (this.addEnemyTimer > 500) {
				this.addEnemyTimer = 0;
				this.enemys.push(new Ghost(this));
				this.enemys.push(new Worm(this));
				this.enemys.push(new Spider(this));
				// this.enemys.sort((a, b) => a.posY - b.posY);
			}
		}
		removeDieEnemys() {
			this.enemys = this.enemys.filter(item => item.isAlive());
		}
	}
	// 动画对象
	class Animater {
		readonly Game: Game;
		posX = 0; // 位置x
		posY = 0; // 位置y
		drawWidth: number; // 实际绘制的宽度
		drawHeight: number; // 实际绘制的高度
		img: HTMLImageElement; // 图片
		imgframeTotal: number; // 总帧数
		imgframeWidth: number; // 一帧的宽度
		imgframeHeight: number; // 一帧的高度
		animateframeIndex = 0; // 当前绘制的是第几帧
		animateframeCount = 0; // 帧计数
		animateframeStage = 3; // 刷新频率 每隔多少帧绘制下一帧
		constructor(Game: Game, imgSrc: string, imgframeTotal: number, imgframeWidth: number, imgframeHeight: number, size: number) {
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
		update(timeInterval: number): void {
			return;
		}
		animate(timeInterval: number): void {
			this.animateframeIndex = Math.floor(this.animateframeCount++ / this.animateframeStage) % this.imgframeTotal;
			this.Game.Context2D.drawImage(
				this.img,
				this.animateframeIndex * this.imgframeWidth,
				0,
				this.imgframeWidth,
				this.imgframeHeight,
				this.posX,
				this.posY,
				this.drawWidth,
				this.drawHeight
			);
		}
		refresh(timeInterval: number): void {
			this.update(timeInterval);
			this.animate(timeInterval);
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
		isAlive(): boolean; // 用于判断是否存活
	}

	// 抽象类Enemy 继承动画类 实现Moveable AliveAble 接口
	abstract class Enemy extends Animater implements MoveAble, AliveAble {
		moveSpeedX = 0;
		moveSpeedY = 0;
		abstract move(timeInterval: number): void;
		abstract isAlive(): boolean; // 判断敌人是否存活
	}

	// 蠕虫 继承 Enemy类
	class Worm extends Enemy {
		constructor(Game: Game) {
			super(Game, "./imgs/Worm.png", 6, 229, 171, 0.5);
			this.posX = this.Game.CANVAS_WIDTH;
			this.posY = this.Game.CANVAS_HEIGHT - this.drawHeight;
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
	class Ghost extends Enemy {
		alpha: number; // 透明度
		shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
		shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
		shakeGapRadius: number; // 摆动范围半径 单位：像素
		constructor(Game: Game) {
			super(Game, "./imgs/Ghost.png", 6, 261, 209, 0.5);
			this.posX = this.Game.CANVAS_WIDTH;
			this.posY = 0.5 * RandomRange(0, this.Game.CANVAS_HEIGHT - this.drawHeight);
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
			this.Game.Context2D.save();
			this.Game.Context2D.globalAlpha = this.alpha;
			super.animate(timeInterval);
			this.Game.Context2D.restore();
		}
	}
	class Spider extends Enemy {
		shakePosY: number; // 初始坐标
		shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
		shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
		shakeGapRadius: number; // 摆动范围半径 单位：像素
		constructor(Game: Game) {
			super(Game, "./imgs/Spider.png", 6, 310, 175, 0.5);
			this.posX = RandomRange(0, this.Game.CANVAS_WIDTH - this.drawWidth);
			this.posY = -this.drawHeight;
			this.shakePosY = this.posY;
			this.shakeAngle = 0;
			this.shakeDeltaAngle = RandomRange(Math.asin(0.0005), Math.asin(0.001));
			this.shakeGapRadius = RandomRange(this.Game.CANVAS_HEIGHT / 4, this.Game.CANVAS_HEIGHT);
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
			this.Game.Context2D.beginPath();
			this.Game.Context2D.moveTo(this.posX + this.drawWidth / 2, 0);
			this.Game.Context2D.lineTo(this.posX + this.drawWidth / 2, this.posY);
			this.Game.Context2D.stroke();
			// 绘制动画
			super.animate(timeInterval);
		}
	}

	const game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
	let lastTimeStampFromStart = 0;
	function refresh(currentTimeStampFromStart: number) {
		const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
		lastTimeStampFromStart = currentTimeStampFromStart;
		game.refresh(timeInterval); // 刷新游戏
		requestAnimationFrame(refresh);
	}
	refresh(0);
});
