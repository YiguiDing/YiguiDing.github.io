import { createClock } from "./services/clock";
import { startLoop } from "./services/loop";
import { PausableClock, SchedulableClock, Loop } from "./types";

export class Application {
  clock: SchedulableClock & PausableClock;
  mainLoop: Loop;
  constructor() {
    // 这里的时钟可以暂停运行和恢复运行
    this.clock = createClock()
    // 这里的主循环将受到时钟的控制
    // 并且当运行速度低于规定的帧率时，主循环会自动执行那些应当执行但未执行的tick
    this.mainLoop = startLoop(this.clock, 1000 / 60, () => this.onTick());
  }
  onTick() {

  }
  pause(){
    this.clock.pause();
  }
  resume(){
    this.clock.resume();
  }
  destory() {
    this.mainLoop.destroy();
  }
}