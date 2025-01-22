export class Keyboard {
    KEYMAP = {
        '1': 0x1, '2': 0x2, '3': 0x3, '4': 0xc,  // 1 2 3 4
        'q': 0x4, 'w': 0x5, 'e': 0x6, 'r': 0xD,  // q w e r
        'a': 0x7, 's': 0x8, 'd': 0x9, 'f': 0xE,  // a s d f
        'z': 0xA, 'x': 0x0, 'c': 0xB, 'v': 0xF   // z x c v
    }
    /**
     * @type { Array<boolean> }
     */
    buttons = [];
    constructor() {
        window.addEventListener('keydown', this.onKeyDown.bind(this))
        window.addEventListener('keyup', this.onKeyUp.bind(this))
    }

    isPressed(key) {
        return this.buttons[key]
    }

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyDown(e) {
        if (this.KEYMAP[e.key]) {
            this.buttons[this.KEYMAP[e.key]] = true;
            if (this.waitforKey) {
                this.waitforKey(this.KEYMAP[e.key])
                this.waitforKey = null
            }
        }
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if (this.KEYMAP[e.key]) {
            this.buttons[this.KEYMAP[e.key]] = false;
            if (this.waitforKey) {
                this.waitforKey(this.KEYMAP[e.key])
                this.waitforKey = null
            }
        }
    }
}