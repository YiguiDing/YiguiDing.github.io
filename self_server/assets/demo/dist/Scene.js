import { BackgroundCity } from "./BackgroundCity.js";
import { Ghost } from "./Ghost.js";
import { RandomRange } from "./utils.js";
import { Plant } from "./Plant.js";
import { Worm } from "./Worm.js";
import { Bat } from "./Bat.js";
import { Gear } from "./Gear.js";
import { GhostBird } from "./GhostBird.js";
export class Scene {
    constructor(Game) {
        this.SceneSpeed = 0;
        this.enemys = [];
        this.explosions = [];
        this.particles = [];
        this.spakParticles = [];
        this.particlesMaxLength = 100;
        this.spakParticlesMaxLength = 100;
        this.addEnemyTimer = 0;
        this.addEnemyIntermval = 2000;
        this.Game = Game;
        this.background = new BackgroundCity(this.Game.GAME_WIDTH, this.Game.GAME_HEIGHT);
    }
    update(timeInterval) {
        // handles
        this.enemysHandle(timeInterval);
        // 最值处理
        if (this.particles.length > this.particlesMaxLength)
            this.particles.length = this.particlesMaxLength;
        if (this.spakParticles.length > this.spakParticlesMaxLength)
            this.spakParticles.length = this.spakParticlesMaxLength;
        // 更新
        this.background.update(timeInterval);
        this.background.setSpeed(this.SceneSpeed);
        this.enemys = this.enemys.filter(item => {
            return !item.isOutOfLeftScreem() && item.getAliveFlag();
        });
        this.enemys.forEach(item => {
            item.update(timeInterval);
            item.transform(this.SceneSpeed * timeInterval, 0);
        });
        this.particles.forEach(item => {
            item.update(timeInterval);
            item.posX += this.SceneSpeed * timeInterval;
        });
        this.explosions = this.explosions.filter(item => {
            item.update(timeInterval);
            item.posX += this.SceneSpeed * timeInterval;
            return !item.isLastAnimateFrame();
        });
        this.spakParticles.forEach(item => {
            item.update(timeInterval);
            item.posX += this.SceneSpeed * timeInterval;
        });
    }
    draw(Context2D) {
        this.background.draw(Context2D);
        this.enemys.forEach(item => item.draw(Context2D));
        this.explosions.forEach(item => item.draw(Context2D));
        this.particles.forEach(item => item.draw(Context2D));
        this.spakParticles.forEach(item => item.draw(Context2D));
    }
    setSceneSpeed(newSpeed) {
        this.SceneSpeed = newSpeed;
        return;
    }
    enemysHandle(timeInterval) {
        if ((this.addEnemyTimer += timeInterval) >= this.addEnemyIntermval) {
            this.addEnemyTimer = 0;
            switch (Math.floor(RandomRange(0, 6))) {
                case 0:
                    this.enemys.push(new Bat(this.Game.GAME_WIDTH + RandomRange(100, 5000), RandomRange(0, this.Game.GAME_HEIGHT / 10)));
                    break;
                case 1:
                    this.enemys.push(new Ghost(this.Game.GAME_WIDTH + RandomRange(100, 5000), RandomRange(0, this.Game.GAME_HEIGHT / 10)));
                    break;
                case 2:
                    this.enemys.push(new Worm(this.Game.GAME_WIDTH + RandomRange(100, 5000), 0).setOnGround(this.background.getGroundPosY()));
                    break;
                case 3:
                    this.enemys.push(new Plant(this.Game.GAME_WIDTH + RandomRange(100, 5000), 0).setOnGround(this.background.getGroundPosY()));
                    break;
                case 4:
                    this.enemys.push(new Gear(this.Game.GAME_WIDTH + RandomRange(100, 5000), RandomRange(0, this.background.getGroundPosY()), this.Game.GAME_WIDTH, this.Game.GAME_HEIGHT));
                    break;
                case 5:
                    this.enemys.push(new GhostBird(this.Game.GAME_WIDTH + RandomRange(100, 5000), RandomRange(0, this.background.getGroundPosY()), this.Game.GAME_WIDTH, this.Game.GAME_HEIGHT));
                    break;
            }
        }
        console.log(this.enemys.length);
    }
}
