import { Game } from "./Game.js";
document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    new Game(canvas, context).start();
});
