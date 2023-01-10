const canvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 400);

interface Rect {
	x: number;
	y: number;
	w: number;
	h: number;
}
function RectColisionDetector(reactA: Rect, reactB: Rect) {
	return (
		reactA.x < reactB.x + reactB.w &&
		reactA.x + reactA.w > reactB.x &&
		reactA.y < reactB.y + reactB.h &&
		reactA.y + reactA.h > reactB.y
	);
}

let reactA: Rect = { x: 100, y: 100, w: 50, h: 50 };
let reactB: Rect = { x: 250, y: 100, w: 50, h: 50 };

console.log(RectColisionDetector(reactA, reactB));

ctx.font = "20px Verdana";
ctx.fillStyle = "green";

function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	ctx.fillRect(reactA.x, reactA.y, reactA.w, reactA.h);
	ctx.fillRect(reactB.x, reactB.y, reactB.w, reactB.h);

	ctx.fillText(
		"碰撞：" + RectColisionDetector(reactA, reactB),
		CANVAS_WIDTH / 2,
		CANVAS_HEIGHT / 2
	);

	requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", e => {
	console.log(e.key);
	switch (e.key) {
		case "ArrowUp":
			reactA.y -= 10;
			break;
		case "ArrowDown":
			reactA.y += 10;
			break;
		case "ArrowLeft":
			reactA.x -= 10;
			break;
		case "ArrowRight":
			reactA.x += 10;
			break;
	}
});
