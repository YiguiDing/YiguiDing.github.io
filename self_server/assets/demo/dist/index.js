import { Game } from "./Game.js";
window.addEventListener("load", () => {
    // 字体加载完成后的逻辑
    document.fonts.ready.then(() => {
        const loading = document.querySelector("#loading");
        loading.style.display = "none";
        const myCanvas = document.querySelector("#myCanvas");
        const ctx = myCanvas.getContext("2d");
        const CANVAS_WIDTH = (myCanvas.width = 1200);
        const CANVAS_HEIGHT = (myCanvas.height = 720);
        const game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
        game.start();
    });
});
