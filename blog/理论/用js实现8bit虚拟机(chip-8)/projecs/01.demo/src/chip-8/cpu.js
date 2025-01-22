export class Chip8 {
  /**
   * @type {import("./render.js").Renderer }
   */
  renderer;
  /**
   * @type {import("./keyboard.js").Keyboard }
   */
  keyboard;
  /**
 * @type {import("./speaker.js").Speaker }
 */
  speaker;
  /**
  * @type { Uint8Array }
  */
  memory;
  i = 0;
  /**
  * @type { Uint8Array }
  */
  v = 0
  pc = 0;
  sp = 0;
  delayTimer = 0;
  soundTimer = 0;
  constructor(render, keyboard, speaker) {
    this.renderer = render;
    this.keyboard = keyboard;
    this.speaker = speaker;

    this.init();

  }
  init() {
    this.renderer.clear();
    this.speaker.stop();

    this.memory = new Uint8Array(4096); // 4KB内存
    this.v = new Uint8Array(16); // 16个8bit通用寄存器
    this.i = 0; // 内存地址寄存器I
    this.pc = 0x200;  //程序计数器,用于存储当前执行的地址
    this.sp = 0;      //堆栈指针 (SP) 可以是 8 位，用于指向堆栈的最顶层。
    this.delayTimer = 0;
    this.soundTimer = 0;

    this.stack = new Array();
    this.paused = false;
    this.speed = 5;
  }
  cycle() {
    // exec code
    for (let i = 0; i < this.speed; i++) {
      if (this.paused) continue;
      let code_h8 = this.memory[this.pc]
      let code_l8 = this.memory[this.pc + 1]
      let command = code_h8 << 8 | code_l8;
      this.execute(command);
    }

    // timer update
    if (!this.paused) {
      this.delayTimer = Math.max(0, this.delayTimer - 1)
      this.soundTimer = Math.max(0, this.soundTimer - 1)
    }

    // render graphics
    if (!this.paused)
      this.renderer.render();

    // play sound
    if (!this.paused && this.soundTimer > 0)
      this.speaker.play(440);
    else this.speaker.stop();
  }
  execute(opcode) {
    this.pc += 2;

    let nnn = opcode & 0x0fff;
    let kk = opcode & 0x00ff;
    let x = (opcode & 0x0f00) >> 8;
    let y = (opcode & 0x00f0) >> 4;
    let n = (opcode & 0x000f);

    switch (opcode & 0xf000) {
      // ################################################################################
      case 0x0000:
        switch (opcode) {
          // `00E0 - CLS` 清除显示。
          case 0x00e0:
            this.renderer.clear();
            break;
          // `00EE - RET` 从子例程返回
          case 0x00ee:
            this.pc = this.stack.pop();
            break;
        }
        // `0nnn - SYS addr` 跳转到 nnn 处的机器代码例程。
        // This opcode can be ignored.
        // console.log(nnn);
        break;
      // `1nnn - JP addr` 跳转到位置 nnn。
      case 0x1000:
        this.pc = nnn; // 跳转到该地址
        break;
      // `2nnn - CALL addr` 调用 nnn 处的子例程。
      case 0x2000:
        this.stack.push(this.pc); // 入栈当前地址
        this.pc = nnn; // 跳转到该地址
        break;
      // ################################################################################
      // `3xkk - SE Vx,byte` 如果 Vx = kk，则跳过下一条指令。
      case 0x3000:
        if (this.v[x] == kk) this.pc += 2;
        break;
      // `4xkk - SNE Vx,byte` 如果 Vx != kk，则跳过下一条指令。
      case 0x4000:
        if (this.v[x] != kk) this.pc += 2;
        break;
      // `5xy0 - SE Vx，Vy` 如果 Vx = Vy，则跳过下一条指令。
      case 0x5000:
        if (this.v[x] == this.v[y]) this.pc += 2;
        break;
      // ################################################################################
      //   `6xkk - LD Vx,byte` 设置 Vx = kk。
      case 0x6000:
        this.v[x] = kk;
        break;
      // `7xkk - ADD Vx,byte` 设置 Vx = Vx + kk。
      case 0x7000:
        this.v[x] += kk;
        break;
      // ################################################################################
      case 0x8000:
        switch (opcode & 0x0f) {
          // `8xy0 - LD Vx, Vy` 设置 Vx = Vy。
          case 0x00:
            this.v[x] = this.v[y];
            break;
          // `8xy1 - OR Vx, Vy` 设置 Vx = Vx OR Vy。
          case 0x01:
            this.v[x] |= this.v[y];
            break;
          // `8xy2 - AND Vx, Vy` 设置 Vx = Vx AND Vy。
          case 0x02:
            this.v[x] &= this.v[y];
            break;
          // `8xy3 - XOR Vx, Vy` 设置 Vx = Vx XOR Vy。
          case 0x03:
            this.v[x] ^= this.v[y];
            break;
          // `8xy4 - ADD Vx, Vy` 设置 Vx = Vx ADD Vy。 set VF = carry.
          case 0x04:
            this.v[x] += this.v[y];
            this.v[0xf] = this.v[x] > 0xff ? 1 : 0; // 溢出标志
            this.v[x] &= 0xff // 截断
            break;
          // `8xy5 - SUB Vx, Vy` 设置 Vx = Vx - Vy，set VF = NOT borrow。
          case 0x05:
            // 如果 Vx > Vy，则将 VF 设置为 1，否则设置为 0。然后从 Vx 中减去 Vy，并将结果存储在 Vx 中。
            this.v[0xf] = this.v[x] > this.v[y] ? 1 : 0;
            this.v[x] -= this.v[y];
            this.v[x] &= 0xff // 截断
            break;
          // `8xy6 - SHR Vx {, Vy}` 设置 Vx = Vx SHR 1。
          // SHR： 右移位
          case 0x06:
            // 如果 Vx 的最低有效位为 1，则将 VF 设置为 1，否则设置为 0。然后将 Vx 除以 2。
            this.v[0xf] = this.v[x] & 0x1;
            this.v[x] >>= 1; // 右移1位
            break;
          // `8xy7 - SUBN Vx, Vy` 设置 Vx = Vy - Vx，设置 VF = NOT 借位。
          case 0x07:
            // 如果 Vy > Vx，则将 VF 设置为 1，否则设置为 0。然后从 Vy 中减去 Vx，并将结果存储在 Vx 中。
            this.v[0xf] = this.v[y] > this.v[x] ? 1 : 0;
            this.v[x] = this.v[y] - this.v[x];
            this.v[x] &= 0xff // 截断
            break;
          // `8xyE - SHL Vx {, Vy}`  设置 Vx = Vx SHL 1。
          //  如果 Vx 的最高有效位为 1，则将 VF 设置为 1，否则设置为 0。然后将 Vx 乘以 2。
          case 0x0e:
            this.v[0xf] = this.v[x] & 0x80;
            this.v[x] <<= 1; // 左移1位
            this.v[x] &= 0xff;// 截断
            break;
        }
        break;
      // ################################################################################
      // `9xy0 - SNE Vx, Vy` 如果 Vx != Vy，则跳过下一条指令。
      case 0x9000:
        if (this.v[x] != this.v[y]) this.pc += 2;
        break;
      // `Annn - LD I, addr` 设置 I = nnn。
      case 0xa000:
        // 寄存器 I 的值设置为 nnn。
        this.i = nnn;
        break;
      // `Bnnn - JP V0, addr` 跳转到位置 nnn + V0。
      case 0xb000:
        // 程序计数器设置为 nnn 加上 V0 的值。
        this.pc = this.v[0] + nnn; // 相对跳转指令
        break;
      // `Cxkk - RND Vx, byte` 设置 Vx = 随机字节 AND kk。
      case 0xc000:
        // 解释器生成一个从 0 到 255 的随机数，然后将其与值 kk 进行 AND 运算。结果存储在 Vx 中。有关 AND 的更多信息，请参阅指令 8xy2。
        this.v[x] = Math.floor(Math.random() * 0xff) & kk & 0xff;
        break;
      // `Dxyn - DRW Vx、Vy、nibble`
      case 0xd000:
        // 从(Vx, Vy)开始显示内存中从I位置开始的n的 n 个字节精灵，设置 VF = 碰撞。
        for (let row = 0; row < n; row++) {
          let byte = this.memory[this.i + row];

          for (let col = 0; col < 8; col++) {
            if (
              (byte & 0x80) > 0 &&
              this.renderer.setPixel(
                this.v[x] + col,
                this.v[y] + row
              )) {
              this.v[0xf] = 1;
            }
            byte <<= 1;
          }
        }
        break;
      case 0xe000:
        switch (opcode & 0x00ff) {
          // `Ex9E - SKP Vx` 如果按下值为 Vx 的键，则跳过下一条指令。
          case 0x9E:
            if (this.keyboard.isPressed(this.v[x])) this.pc += 2;
            break;
          // `ExA1 - SKNP Vx` 如果未按下值为 Vx 的键，则跳过下一条指令。
          case 0xA1:
            if (!this.keyboard.isPressed(this.v[x])) this.pc += 2;
            break;
        }
        break;
      case 0xf000:
        switch (opcode & 0x00ff) {
          // `Fx07 - LD Vx, DT` 设置 Vx = 延迟定时器值。
          case 0x07:
            this.v[x] = this.delayTimer;
            break;
          // `Fx0A - LD Vx, K` 等待按键，将按键的值存储在 Vx 中。
          case 0x0a:
            this.paused = true;
            // 阻塞式等待按键按下
            this.keyboard.waitforKey = (key) => {
              this.v[x] = key
              this.paused = false
            }
            break;
          // ################################################################################
          // 高级指令
          // Fx15 - LD DT, Vx
          case 0x15:
            this.delayTimer = this.v[x];
            break;
          case 0x18:
            this.soundTimer = this.v[x];
            break;
          case 0x1E:
            this.i += this.v[x];
            break;
          case 0x29:
            this.i = this.v[x] * 5;
            break;
          case 0x33:
            this.memory[this.i + 0] = parseInt(this.v[x] / 100);
            this.memory[this.i + 1] = parseInt((this.v[x] % 100) / 10);
            this.memory[this.i + 2] = parseInt(this.v[x] % 10);
            break;
          case 0x55:
            for (let registerIndex = 0; registerIndex <= x; registerIndex++) {
              this.memory[this.i + registerIndex] = this.v[registerIndex];
            }
            break;
          case 0x65:
            for (let registerIndex = 0; registerIndex <= x; registerIndex++) {
              this.v[registerIndex] = this.memory[this.i + registerIndex];
            }
            break;
        }
        break;
    }
  }
  loadSprites() {
    const sprites = [
      0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
      0x20, 0x60, 0x20, 0x20, 0x70, // 1
      0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
      0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
      0x90, 0x90, 0xF0, 0x10, 0x10, // 4
      0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
      0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
      0xF0, 0x10, 0x20, 0x40, 0x40, // 7
      0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
      0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
      0xF0, 0x90, 0xF0, 0x90, 0x90, // A
      0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
      0xF0, 0x80, 0x80, 0x80, 0xF0, // C
      0xE0, 0x90, 0x90, 0x90, 0xE0, // D
      0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
      0xF0, 0x80, 0xF0, 0x80, 0x80  // F
    ];

    for (let i = 0; i < sprites.length; i++) {
      this.memory[i] = sprites[i];
    }
  }
  loadProgram(program) {
    const offset = 0x200;
    for (let idx = 0; idx < program.length; idx++) {
      this.memory[offset + idx] = program[idx];
    }
    this.pc = offset
  }
  async loadROM(path) {
    let response = await fetch(path);
    let buffer = await response.arrayBuffer();
    let program = new Uint8Array(buffer);
    this.loadProgram(program);
  }
}
