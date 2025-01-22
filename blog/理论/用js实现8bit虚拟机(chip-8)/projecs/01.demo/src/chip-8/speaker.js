export class Speaker {
    constructor() {
        this.ctx = new AudioContext();
        this.gain = this.ctx.createGain(); // for to control the volume

        this.gain.connect(this.ctx.destination);
    }
    mute() {
        this.gain.gain.value = 0; // 0%
    }
    unmute() {
        this.gain.gain.value = 1; // 100%
    }
    play(freq) {
        if (this.osc) return;
        this.osc = this.ctx.createOscillator();
        this.osc.frequency.value = freq || 400;
        this.osc.type = 'square'; // 三角波

        this.osc.connect(this.gain);
        this.osc.start();
    }
    stop() {
        if (!this.osc) return;
        this.osc.stop();
        this.osc.disconnect();
        this.osc = null;
    }
}