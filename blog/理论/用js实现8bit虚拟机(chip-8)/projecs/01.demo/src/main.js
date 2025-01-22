import { Renderer } from "./chip-8/render.js";
import { Keyboard } from "./chip-8/keyboard.js"
import { Chip8 } from "./chip-8/cpu.js";
import { Speaker } from "./chip-8/speaker.js";


document.addEventListener("DOMContentLoaded", async () => {
  let main = document.querySelector("#main");
  let canvas = document.createElement("canvas");

  let renderer = new Renderer(canvas, 10);
  let keyboard = new Keyboard();
  let speaker = new Speaker();
  let chip8 = new Chip8(renderer, keyboard, speaker);

  chip8.loadSprites()
  await chip8.loadROM("/src/rom/PONG");
  console.log(chip8.pc, chip8.memory);

  // renderer.test()
  requestAnimationFrame(function loop() {
    chip8.cycle();
    requestAnimationFrame(loop);
  });

  let selecter = document.createElement("select");
  selecter.innerHTML = ['BLINKY', 'CONNECT4', 'INVADERS', 'LANDING', 'MAZE', 'PONG', 'SPACE', 'TANK', 'TETRIS', 'TICTACTOE', 'WALL'].map(file => `<option value="${file}">${file}</option>`).join("");
  selecter.addEventListener("change", async (e) => {
    chip8.init()
    chip8.loadROM(`/src/rom/${e.target.value}`);
  });

  main.appendChild(canvas);
  main.appendChild(selecter);
});
