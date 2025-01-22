export class Renderer {
    cols = 0
    rows = 0
    scale = 0
    /**
     * @type {HTMLCanvasElement}
     */
    canvas = null
    /**
     * @type {CanvasRenderingContext2D}
     */
    ctx = null
    /**
     * @type {Array<number>}
     */
    display = null
    constructor(canvas, scale) {
        this.cols = 64;
        this.rows = 32;
        this.canvas = canvas;
        this.scale = scale;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;
        this.display = new Array(this.cols * this.rows);
    }
    setPixel(x, y) {
        x = Math.max(0, Math.min(this.cols - 1, x));
        y = Math.max(0, Math.min(this.rows - 1, y));
        let offset = y * this.cols + x;
        // sprites are XORed onto the display:
        this.display[offset] ^= 1;
        return !this.display[offset]; // return pixel was erased or not.
    }
    clear() {
        this.display = new Array(this.cols * this.rows);
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let offset = y * this.cols + x;
                this.ctx.fillStyle = this.display[offset] ? '#000' : '#fff';
                this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
    test() {
        this.setPixel(0, 0);
        this.setPixel(10, 0);
        this.setPixel(this.cols - 1, this.rows - 1);
        console.log(this.display)
        this.render();
    }
}