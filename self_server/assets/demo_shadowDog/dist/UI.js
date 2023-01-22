import { Game } from "./Game.js";
export class UI {
    constructor(Game) {
        this.addScoreInfos = [];
        this.Game = Game;
        this.livesImg = new Image();
        this.livesImg.src = "./imgs/heart.png";
        this.imgWidth = 50;
        this.imgHeight = 50;
        this.imgDrawWidth = 40; //this.imgWidth * 0.5;
        this.imgDrawHeight = 40; // this.imgHeight * 0.5;
    }
    update(timeInterval) {
        const targetPosX = 200;
        const moveSpeedX = 0.1;
        const targetPosY = 80;
        const moveSpeedY = 0.1;
        // 这里做的操作是更新数组中的坐标，使其朝着 targetPos 所在的坐标移动
        this.addScoreInfos = this.addScoreInfos
            .map(item => {
            const stepX = moveSpeedX * timeInterval;
            const stepY = moveSpeedY * timeInterval;
            if (item.posX - targetPosX >= stepX)
                item.posX -= stepX;
            else if (item.posY - targetPosY <= stepX)
                item.posX += stepX;
            if (item.posY - targetPosY >= stepY)
                item.posY -= stepY;
            else if (item.posY - targetPosY <= stepY)
                item.posY += stepY;
            const gapX = Math.abs(item.posX - targetPosX);
            const gapY = Math.abs(item.posY - targetPosY);
            if (gapX < stepY && gapY < stepX) {
                // 当前坐标和目标坐标之间的距离小于步长，则移除该项
                return null;
            }
            else {
                return item;
            }
        })
            .filter(item => item != null);
    }
    draw(Context2D) {
        Context2D.save();
        const txtSize = 40;
        const ShadowWidth = 2;
        Context2D.font = `${txtSize}px HanaleiFill`;
        if (this.Game.currentState.stateName == Game.StateEnum.Preview) {
            Context2D.textAlign = "center";
            Context2D.fillStyle = "white";
            Context2D.fillText("Press Enter To Start Game", this.Game.GAME_WIDTH / 2, this.Game.GAME_HEIGHT / 2);
            Context2D.fillStyle = "black";
            Context2D.fillText("Press Enter To Start Game", this.Game.GAME_WIDTH / 2 + ShadowWidth, this.Game.GAME_HEIGHT / 2 + ShadowWidth);
        }
        else if (this.Game.currentState.stateName == Game.StateEnum.Running) {
            // 绘制剩余的生命
            for (let index = 0; index < this.Game.lives; index++) {
                Context2D.drawImage(this.livesImg, 0, 0, this.imgWidth, this.imgHeight, index * (this.imgDrawWidth + 10) + 10, 5, this.imgDrawWidth, this.imgDrawHeight);
            }
            // 绘制漂浮的得分数字
            this.addScoreInfos.forEach(item => {
                Context2D.textAlign = "left";
                Context2D.fillStyle = "white";
                Context2D.fillText(item.score, item.posX, item.posY);
                Context2D.fillStyle = "black";
                Context2D.fillText(item.score, item.posX + ShadowWidth, item.posY + ShadowWidth);
            });
            // 绘制得分
            Context2D.textAlign = "left";
            Context2D.fillStyle = "white";
            Context2D.fillText("Score: " + this.Game.score, 5, 2 * txtSize + 5);
            Context2D.fillStyle = "black";
            Context2D.fillText("Score: " + this.Game.score, 5 + ShadowWidth, 2 * txtSize + 5 + ShadowWidth);
            Context2D.fillStyle = "white";
            Context2D.fillText("Time: " + Math.floor(this.Game.time / 1000) + "s", 5, 3 * txtSize + 5);
            Context2D.fillStyle = "black";
            Context2D.fillText("Time: " + Math.floor(this.Game.time / 1000) + "s", 5 + ShadowWidth, 3 * txtSize + 5 + ShadowWidth);
        }
        else if (this.Game.currentState.stateName == Game.StateEnum.Stop) {
            Context2D.textAlign = "center";
            Context2D.fillStyle = "white";
            Context2D.fillText("Press Enter To Continue...", this.Game.GAME_WIDTH / 2, this.Game.GAME_HEIGHT / 2);
            Context2D.fillStyle = "black";
            Context2D.fillText("Press Enter To Continue...", this.Game.GAME_WIDTH / 2 + ShadowWidth, this.Game.GAME_HEIGHT / 2 + ShadowWidth);
        }
        else if (this.Game.currentState.stateName == Game.StateEnum.GameOver) {
            Context2D.textAlign = "center";
            Context2D.fillStyle = "white";
            Context2D.fillText("Game Over Your Score Is: " + this.Game.score, this.Game.GAME_WIDTH / 2, this.Game.GAME_HEIGHT / 2);
            Context2D.fillStyle = "black";
            Context2D.fillText("Game Over Your Score Is: " + this.Game.score, this.Game.GAME_WIDTH / 2 + ShadowWidth, this.Game.GAME_HEIGHT / 2 + ShadowWidth);
        }
        Context2D.restore();
    }
}
