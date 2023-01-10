import { ShadowDog } from "./ShadowDog.js";
import { InputListener } from "./InputListener.js";
import { ValueOf } from "./utils.js";
import { UI } from "./UI.js";
import { State } from "./State.js";
import { Scene } from "./Scene.js";

type GameStateEnum = ValueOf<typeof Game.StateEnum>;
export class Game {
	static StateEnum = {
		Preview: "Preview",
		BeforeRunning: "BeforeRunning",
		Running: "Running",
		Stop: "Stop",
		GameOver: "GameOver"
	} as const;
	allStates: { [key in GameStateEnum]?: State } = {};
	currentState!: State;
	readonly Context2D: CanvasRenderingContext2D;
	readonly GAME_WIDTH: number;
	readonly GAME_HEIGHT: number;
	player: ShadowDog;
	Scene: Scene;
	UI: UI;
	InputListener: InputListener;
	Music: HTMLAudioElement;
	lives = 10;
	score = 0;
	time = 0;
	constructor(Context2D: CanvasRenderingContext2D, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
		this.Context2D = Context2D;
		this.GAME_WIDTH = CANVAS_WIDTH;
		this.GAME_HEIGHT = CANVAS_HEIGHT;
		this.InputListener = new InputListener();
		this.Scene = new Scene(this);
		this.player = new ShadowDog(this, this.GAME_WIDTH, this.GAME_HEIGHT);
		this.Music = new Audio();
		this.Music.src = "./sounds/gameMusic.wav";
		this.Music.loop = true;
		this.UI = new UI(this);
		this.allStates[Game.StateEnum.Preview] = new PreviewStatus(this);
		this.allStates[Game.StateEnum.BeforeRunning] = new BeforeRunning(this);
		this.allStates[Game.StateEnum.Running] = new RunningStatus(this);
		this.allStates[Game.StateEnum.Stop] = new StopStatus(this);
		this.allStates[Game.StateEnum.GameOver] = new GameOverStatus(this);
		this.setState(Game.StateEnum.Preview);
	}
	setState(StateName: ValueOf<typeof Game.StateEnum>) {
		console.log("current:" + StateName);
		this.currentState = this.allStates[StateName] as State;
		this.currentState.enter();
	}
	update(timeInterval: number) {
		this.currentState.inputsHandler(this.InputListener.inputs);
		this.currentState.update(timeInterval);
		this.UI.update(timeInterval);
	}
	draw(Context2D: CanvasRenderingContext2D) {
		this.Scene.draw(Context2D);
		this.player.draw(Context2D);
		this.UI.draw(Context2D);
	}
	start() {
		let lastTimeStampFromStart = 0;
		const refreshDisplay = (currentTimeStampFromStart: number) => {
			const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
			lastTimeStampFromStart = currentTimeStampFromStart;
			this.update(timeInterval);
			this.draw(this.Context2D);
			requestAnimationFrame(refreshDisplay);
		};
		refreshDisplay(0);
		console.log("game is started.");
	}
}

class PreviewStatus extends State {
	Game: Game;
	constructor(game: Game) {
		super(Game.StateEnum.Preview);
		this.Game = game;
	}
	enter(): void {
		this.Game.Music.currentTime = 0; // 从头开始播放
		this.Game.score = 0;
		this.Game.lives = 1000000000;
		this.Game.player.setState(ShadowDog.StateNamesEnum.Running);
		this.Game.UI.addScoreInfos = [];
		this.Game.Scene.enemys = [];
		this.Game.Scene.particles = [];
		this.Game.Scene.explosions = [];
		this.Game.Scene.spakParticles = [];
		return;
	}
	update(timeInterval: number): void {
		this.Game.Scene.update(timeInterval);
		this.Game.player.update(timeInterval);
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		if (inputs.includes(InputListener.KeyMaps.Enter)) {
			this.Game.setState(Game.StateEnum.BeforeRunning);
		}
	}
}
class BeforeRunning extends State {
	Game: Game;
	constructor(game: Game) {
		super(Game.StateEnum.BeforeRunning);
		this.Game = game;
	}
	enter(): void {
		this.Game.Music.currentTime = 0; // 从头开始播放
		this.Game.time = 0;
		this.Game.score = 0;
		this.Game.lives = 10;
		this.Game.player.setState(ShadowDog.StateNamesEnum.Running);
		this.Game.UI.addScoreInfos = [];
		this.Game.Scene.enemys = [];
		this.Game.Scene.particles = [];
		this.Game.Scene.explosions = [];
		this.Game.Scene.spakParticles = [];
		this.Game.setState(Game.StateEnum.Running); // init后直接进入running状态
		return;
	}
	update(timeInterval: number): void {
		return;
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		return;
	}
}
class RunningStatus extends State {
	Game: Game;
	constructor(game: Game) {
		super(Game.StateEnum.Running);
		this.Game = game;
	}
	enter(): void {
		this.Game.Music.play(); // 播放音乐
	}
	update(timeInterval: number): void {
		this.Game.time += timeInterval;
		this.Game.player.update(timeInterval); // player会攻击并标记敌人为死亡
		this.Game.Scene.enemys.forEach(item => {
			// 碰撞检测，有敌人被打死，加分
			if (!item.getAliveFlag()) {
				let addScore = 0;
				switch (item.getName()) {
					case "Plant":
					case "Worm":
						addScore = 1;
						break;
					case "Bat":
					case "Ghost":
						addScore = 2;
						break;
					case "Gear":
						addScore = 5;
						break;
					case "GhostBird":
						addScore = 10;
						break;
				}
				this.Game.score += addScore;
				this.Game.UI.addScoreInfos.push({ score: "+" + addScore, posX: item.posX, posY: item.posY });
			}
			// 有敌人离开游戏场景，减分
			if (item.isOutOfLeftScreem()) {
				if (this.Game.score >= 1) this.Game.score--;
				this.Game.UI.addScoreInfos.push({ score: "-1", posX: item.posX, posY: item.posY });
			}
		});
		this.Game.Scene.update(timeInterval); // scene会移除标记为死亡的敌人
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		if (inputs.includes(InputListener.KeyMaps.Escape)) this.Game.setState(Game.StateEnum.Stop);
	}
}
class StopStatus extends State {
	Game: Game;
	constructor(game: Game) {
		super(Game.StateEnum.Stop);
		this.Game = game;
	}
	enter(): void {
		// this.Game.Music.pause(); // 暂停音乐
	}
	update(timeInterval: number): void {
		// this.Game.Scene.update(timeInterval);
		// this.Game.player.update(timeInterval);
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		if (inputs.includes(InputListener.KeyMaps.Enter)) this.Game.setState(Game.StateEnum.Running);
	}
}
class GameOverStatus extends State {
	Game: Game;
	constructor(game: Game) {
		super(Game.StateEnum.GameOver);
		this.Game = game;
	}
	enter(): void {
		// this.Game.Music.pause(); // 暂停音乐
	}
	update(timeInterval: number): void {
		this.Game.Scene.update(timeInterval);
		// this.Game.player.update(timeInterval);
	}
	inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
		if (inputs.includes(InputListener.KeyMaps.PressSpase)) this.Game.setState(Game.StateEnum.Preview);
	}
}
