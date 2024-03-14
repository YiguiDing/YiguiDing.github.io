<template>
  <div class="wrapper">
    <canvas class="row canvas" ref="canvas" id="canvas" />
    <div class="row chart">
      <ECharts ref="charts_x" title="x轴" />
      <ECharts ref="charts_y" title="y轴" />
    </div>
    <div class="row slider">
      <div class="row">
        <span>kp:</span>
        <ElSlider v-model="pid_x.kp" @input="val => pid_y.kp = val" :min="-0.5" :max="0.5" :step="0.0001"
          :show-input="true" />
      </div>
      <div class="row">
        <span>ki:</span>
        <ElSlider v-model="pid_x.ki" @input="val => pid_y.ki = val" :min="-0.5" :max="0.5" :step="0.0001"
          :show-input="true" />
      </div>
      <div class="row">
        <span>kd:</span>
        <ElSlider v-model="pid_x.kd" @input="val => pid_y.kd = val" :min="-0.5" :max="0.5" :step="0.0001"
          :show-input="true" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElSlider } from "element-plus";
import { onMounted, onBeforeUnmount, ref, toValue, reactive } from "vue";
import ECharts from "./components/ECharts.vue";

let canvas = ref<HTMLCanvasElement>();
let charts_x = ref<InstanceType<typeof ECharts>>();
let charts_y = ref<InstanceType<typeof ECharts>>();

class PID {
  kp = 0.01; // 比例系数 决定了控制系统的响应速度
  ki = 0.00001; // 积分系数
  kd = 0.05; // 微分系数
  error_sum = 0; // 误差累积量
  update(target: number, current: number, dt: number) {
    let error_d = target - current; // 误差: 目标值和实际值的差
    let error_s = (this.error_sum += error_d * dt); // 误差积分：误差很小时，P和D就更小了，对输出的影响就微乎其微，需用误差的累积量来修复
    let error_v = error_d / dt; // 误差微分：误差越大，速度就越大
    let P = this.kp * error_d; // 比例（Proportional）
    let I = this.ki * error_s; // 积分（Integral）
    let D = this.kd * error_v; // 微分（Derivative）
    let output = P + I + D;
    return output;
  }
}
let pid_x = reactive(new PID());
let pid_y = reactive(new PID());

class Square {
  tar_x = 51;
  tar_y = 51;
  pos_x = 50;
  pos_y = 50;
  speed_x = 0;
  speed_y = 0;
  rect_w = 100;
  rect_h = 100;
  constructor() { }
  update(dt: number) {
    this.speed_x = pid_x.update(this.tar_x, this.pos_x, dt);
    this.speed_y = pid_y.update(this.tar_y, this.pos_y, dt);
    this.pos_x += this.speed_x * dt;
    this.pos_y += this.speed_y * dt;
    // 模拟干扰
    // this.pos_x += Math.random() * 5
    // this.pos_y += Math.random() * 5
  }
  refresh(ctx2d: CanvasRenderingContext2D) {
    ctx2d.save();
    ctx2d.fillStyle = "pink";
    ctx2d.fillRect(
      this.pos_x - this.rect_w / 2,
      this.pos_y - this.rect_h / 2,
      this.rect_w,
      this.rect_h
    );
    ctx2d.restore();
  }
}

class Demo {
  square = new Square();
  WIDTH = 800;
  HEIGHT = 400;
  canvas: HTMLCanvasElement;
  ctx2d: CanvasRenderingContext2D;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx2d = canvas.getContext("2d");
    canvas.width = this.WIDTH;
    canvas.height = this.HEIGHT;
    this.animate();
  }
  update(dt) {
    this.ctx2d.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.square.update(dt);
    this.square.refresh(this.ctx2d);
  }
  animate() {
    let previous = Date.now(),
      current = Date.now() + 1;
    let refresh = () => {
      let dt = current - previous;
      this.update(dt);
      previous = current;
      current = Date.now();
      requestAnimationFrame(refresh);
    };
    requestAnimationFrame(refresh);
  }
}

let game: Demo;
let timer: any = null;
onMounted(() => {
  let canvasDOM = toValue(canvas)!;
  let chartsXIns = toValue(charts_x)!;
  let chartsYIns = toValue(charts_y)!;
  game = new Demo(canvasDOM);

  canvasDOM.addEventListener("mousemove", (e) => {
    let tar_x = e.offsetX;
    let tar_y = e.offsetY;
    game.square.tar_x = tar_x;
    game.square.tar_y = tar_y;
  });
  timer = setInterval(() => {
    chartsXIns.update(game.square.tar_x, game.square.pos_x);
    chartsYIns.update(game.square.tar_y, game.square.pos_y);
  }, 1000 / 60);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .row.canvas {
    height: fit-content;
    border: 1px solid gray;
  }

  .row.chart {
    min-height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &>* {
      flex: 1;
    }
  }

  .row.slider {
    display: flex;
    flex-direction: column;

    &>* {
      flex: 1;
    }
  }
}
</style>
