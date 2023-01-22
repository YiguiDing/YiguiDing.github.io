import { collection_Rect_Circle } from "./utils.js";
export class Processor {
    inputHandler(game, inputs) {
        game.player.inputHandler(inputs);
    }
    process(game) {
        let player = game.player;
        let ball = game.ball;
        if (collection_Rect_Circle(player, ball)) {
            ball.speedY = -ball.speedY;
        }
    }
}
