import { Game } from "./Game.js";

window.addEventListener("load", () => {
	const loading = document.querySelector("#loading") as HTMLDivElement;
	loading.style.display = "none";
	const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
	const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

	const CANVAS_WIDTH = (myCanvas.width = 1080);
	const CANVAS_HEIGHT = (myCanvas.height = 720);

	const game = new Game(myCanvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT);

	let lastTimeStampFromStart = 0;
	function refresh(currentTimeStampFromStart: number) {
		const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
		lastTimeStampFromStart = currentTimeStampFromStart;
		game.refresh(timeInterval); // 刷新游戏
		requestAnimationFrame(refresh);
	}
	refresh(0);
});
