import { collision_Rect_Circle as collision_Rect_Circle } from "./utils.js";
export class Processor {
    inputHandler(game, inputs) {
        game.player.inputHandler(inputs);
    }
    process(game) {
        let player = game.player;
        let ball = game.ball;
        let wall = game.wall;
        if (ball.posX - ball.radius <= 0 || game.GAME_WIDTH <= ball.posX + ball.radius) {
            ball.reverseSpeedX();
        }
        if (ball.posY - ball.radius <= 0 || game.GAME_HEIGHT <= ball.posY + ball.radius) {
            ball.reverseSpeedY();
        }
        if (collision_Rect_Circle(player, ball)) {
            ball.reverseSpeedY();
        }
        wall.blocks = wall.blocks.filter(block => {
            if (collision_Rect_Circle(block, ball)) {
                if (ball.posX - ball.radius <= 0 || block.posX <= ball.posX + ball.radius) {
                    ball.reverseSpeedX();
                }
                if (ball.posY - ball.radius <= 0 || block.posY <= ball.posY + ball.radius) {
                    ball.reverseSpeedY();
                }
                return false;
            }
            return true;
        });
    }
}
