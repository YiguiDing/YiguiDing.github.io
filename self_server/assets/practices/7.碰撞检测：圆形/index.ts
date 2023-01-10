const canvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;



const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 400;

interface Cycle {
    x: number,
    y: number,
    radius: number
}

function CycleColisionDetector(cycleA: Cycle, cycleB: Cycle) {
    let distance = Math.sqrt(Math.pow(cycleA.x - cycleB.x, 2) + Math.pow(cycleA.y - cycleB.y, 2));// 求两坐标间距离公式
    return distance < cycleA.radius + cycleB.radius
}

let cycleA: Cycle = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, radius: 100 }
let cycleB: Cycle = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, radius: 100 }


ctx.font = "20px Verdana";
ctx.fillStyle = "green";

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    ctx.beginPath()
    ctx.arc(cycleA.x, cycleA.y, cycleA.radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(cycleB.x, cycleB.y, cycleB.radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillText("碰撞：" + CycleColisionDetector(cycleA, cycleB), CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            cycleA.y -= 10;
            break;
        case "ArrowDown":
            cycleA.y += 10;
            break;
        case "ArrowLeft":
            cycleA.x -= 10;
            break;
        case "ArrowRight":
            cycleA.x += 10;
            break;
    }
})
