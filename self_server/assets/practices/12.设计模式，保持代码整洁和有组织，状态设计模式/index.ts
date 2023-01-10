import { Game } from "./src/Game.js";

window.addEventListener("load", () => {
	const loading = document.querySelector("#loading") as HTMLDivElement;
	loading.style.display = "none";

	const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
	const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

	const CANVAS_WIDTH = (myCanvas.width = 1080);
	const CANVAS_HEIGHT = (myCanvas.height = 720);

	const game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
	game.start();
});
