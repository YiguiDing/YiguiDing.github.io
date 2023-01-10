import { ShadowDog } from "./ShadowDog.js";
import { InputListener } from "./InputListener.js";
import { UI } from "./UI.js";
import { State } from "./State.js";
import { Scene } from "./Scene.js";
export class Game {
    constructor(Context2D, CANVAS_WIDTH, CANVAS_HEIGHT) {
        this.allStates = {};
        this.lives = 10;
        this.score = 0;
        this.time = 0;
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
    setState(StateName) {
        console.log("current:" + StateName);
        this.currentState = this.allStates[StateName];
        this.currentState.enter();
    }
    update(timeInterval) {
        this.currentState.inputsHandler(this.InputListener.inputs);
        this.currentState.update(timeInterval);
        this.UI.update(timeInterval);
    }
    draw(Context2D) {
        this.Scene.draw(Context2D);
        this.player.draw(Context2D);
        this.UI.draw(Context2D);
    }
    start() {
        let lastTimeStampFromStart = 0;
        const refreshDisplay = (currentTimeStampFromStart) => {
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
Game.StateEnum = {
    Preview: "Preview",
    BeforeRunning: "BeforeRunning",
    Running: "Running",
    Stop: "Stop",
    GameOver: "GameOver"
};
class PreviewStatus extends State {
    constructor(game) {
        super(Game.StateEnum.Preview);
        this.Game = game;
    }
    enter() {
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
    update(timeInterval) {
        this.Game.Scene.update(timeInterval);
        this.Game.player.update(timeInterval);
    }
    inputsHandler(inputs) {
        if (inputs.includes(InputListener.KeyMaps.Enter)) {
            this.Game.setState(Game.StateEnum.BeforeRunning);
        }
    }
}
class BeforeRunning extends State {
    constructor(game) {
        super(Game.StateEnum.BeforeRunning);
        this.Game = game;
    }
    enter() {
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
    update(timeInterval) {
        return;
    }
    inputsHandler(inputs) {
        return;
    }
}
class RunningStatus extends State {
    constructor(game) {
        super(Game.StateEnum.Running);
        this.Game = game;
    }
    enter() {
        this.Game.Music.play(); // 播放音乐
    }
    update(timeInterval) {
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
                if (this.Game.score >= 1)
                    this.Game.score--;
                this.Game.UI.addScoreInfos.push({ score: "-1", posX: item.posX, posY: item.posY });
            }
        });
        this.Game.Scene.update(timeInterval); // scene会移除标记为死亡的敌人
    }
    inputsHandler(inputs) {
        if (inputs.includes(InputListener.KeyMaps.Escape))
            this.Game.setState(Game.StateEnum.Stop);
    }
}
class StopStatus extends State {
    constructor(game) {
        super(Game.StateEnum.Stop);
        this.Game = game;
    }
    enter() {
        // this.Game.Music.pause(); // 暂停音乐
    }
    update(timeInterval) {
        // this.Game.Scene.update(timeInterval);
        // this.Game.player.update(timeInterval);
    }
    inputsHandler(inputs) {
        if (inputs.includes(InputListener.KeyMaps.Enter))
            this.Game.setState(Game.StateEnum.Running);
    }
}
class GameOverStatus extends State {
    constructor(game) {
        super(Game.StateEnum.GameOver);
        this.Game = game;
    }
    enter() {
        // this.Game.Music.pause(); // 暂停音乐
    }
    update(timeInterval) {
        this.Game.Scene.update(timeInterval);
        // this.Game.player.update(timeInterval);
    }
    inputsHandler(inputs) {
        if (inputs.includes(InputListener.KeyMaps.PressSpase))
            this.Game.setState(Game.StateEnum.Preview);
    }
}
