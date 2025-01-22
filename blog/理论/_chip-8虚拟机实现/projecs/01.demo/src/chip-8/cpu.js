export class Chip8 {
  memory = new Uint8Array(4096); // 4KB (4096 bytes) of memory
  i = 0; // 内存地址寄存器I
  v = new Uint8Array(16); // 16 8-bit registers
  pc = 0x200; //程序计数器,用于存储当前执行的地址
  sp = 0; //堆栈指针 (SP) 可以是 8 位，用于指向堆栈的最顶层。
  // Timers
  delayTimer = 0;
  soundTimer = 0;
  constructor() {}
  execute(opcode) {
    this.pc += 2;
    let nnn = opcode & 0x0fff;
    let kk = opcode & 0x00ff;
    let x = (opcode & 0x0f00) >> 8;
    let y = (opcode & 0x00f0) >> 4;

    switch (opcode & 0xf000) {
      // ########################################
      case 0x0000:
        switch (opcode) {
          // `00E0 - CLS` 清除显示。
          case 0x00e0:
            break;
          // `00EE - RET` 从子例程返回
          case 0x00ee:
            break;
        }
        // `0nnn - SYS addr` 跳转到 nnn 处的机器代码例程。
        console.log(nnn);
        break;
      // `1nnn - JP addr` 跳转到位置 nnn。
      case 0x1000:
        console.log(nnn);
        break;
      // `2nnn - CALL addr` 调用 nnn 处的子例程。
      case 0x2000:
        break;
      // ########################################
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
      // ########################################
      //   `6xkk - LD Vx,byte` 设置 Vx = kk。
      case 0x6000:
        this.v[x] = kk;
        break;
      // `7xkk - ADD Vx,byte` 设置 Vx = Vx + kk。
      case 0x7000:
        this.v[x] += kk;
        break;
      // ########################################
      case 0x8000:
        switch (opcode & 0xf00f) {
          // `8xy0 - LD Vx, Vy` 设置 Vx = Vy。
          case 0x8000:
            this.v[x] = this.v[y];
            break;
          // `8xy1 - OR Vx, Vy` 设置 Vx = Vx OR Vy。
          case 0x8001:
            this.v[x] |= this.v[y];
            break;
          // `8xy2 - AND Vx, Vy` 设置 Vx = Vx AND Vy。
          case 0x8002:
            this.v[x] &= this.v[y];
            break;
          // `8xy3 - XOR Vx, Vy` 设置 Vx = Vx XOR Vy。
          case 0x8003:
            this.v[x] ^= this.v[y];
            break;
          // `8xy4 - ADD Vx, Vy` 设置 Vx = Vx ADD Vy。
          case 0x8004:
            this.v[x] += this.v[y];
            break;
          // `8xy5 - SUB Vx, Vy` 设置 Vx = Vx - Vy，设置 VF = NOT 借位。
          case 0x8005:
            // 如果 Vx > Vy，则将 VF 设置为 1，否则设置为 0。然后从 Vx 中减去 Vy，并将结果存储在 Vx 中。
            this.v[0xf] = this.v[x] > this.v[y] ? 1 : 0;
            this.v[x] -= this.v[y];
            break;
          // `8xy6 - SHR Vx {, Vy}` 设置 Vx = Vx SHR 1。
          case 0x8006:
            this.v[x] = this.v[y];
            break;
          case 0x8007:
            this.v[x] = this.v[y];
            break;
          case 0x800e:
            this.v[x] = this.v[y];
            break;
        }
        break;
      // ########################################
      case 0x9000:
        break;
      case 0xa000:
        break;
      case 0xb000:
        break;
      case 0xc000:
        break;
      case 0xd000:
        break;
      case 0xe000:
        break;
      case 0xf000:
        break;
    }
  }
}
