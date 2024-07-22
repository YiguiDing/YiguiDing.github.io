<script setup lang="ts">
import * as echarts from "echarts";
import dayjs from "dayjs";
import { onMounted, ref, toValue } from "vue";

const { title } = defineProps<{ title: string }>();

type DataItem = [Date, number];

let data_curent: DataItem[] = [];
let data_target: DataItem[] = [];

let option: echarts.EChartsOption = {
  title: { text: title },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: false,
    },
  },
  xAxis: {
    type: "time",
    axisLabel: {
      rotate: 45,
      // @ts-ignore
      interval: "auto",
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "50%"],
    splitLine: {
      show: false,
    },
  },
  grid: {
    top: 40,
    left: 40,
    right: 10,
    bottom: 60,
  },
  series: [
    {
      name: "当前值",
      type: "line",
      showSymbol: false,
      animation: false,
      data: data_curent,
      itemStyle: {
        // @ts-ignore
        normal: {
          lineStyle: {
            width: 2,
          },
        },
      },
    },
    {
      name: "目标值",
      type: "line",
      showSymbol: false,
      animation: false,
      data: data_target,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 2,
          },
        },
      },
    },
  ],
};

let value = Math.random() * 1000;
function randomData(): DataItem {
  value = value + Math.random() * 21 - 10;
  return [dayjs().toDate(), Math.round(value)];
}

function update(target_val: number, curent_val: number) {
  let clientHeight = toValue(chartDomRef)?.clientHeight || 500
  while (data_curent.length > clientHeight) {
    data_curent.shift();
    data_target.shift();
  }
  data_curent.push([dayjs().toDate(), +curent_val.toFixed(5)]);
  data_target.push([dayjs().toDate(), +target_val.toFixed(5)]);
  myChart.setOption(
    {
      series: [{ data: data_curent }, { data: data_target }],
    },
    {
      lazyUpdate: true,
    }
  );
}

function resize() {
  let parent = toValue(chartDomRef)?.parentElement;
  parent && myChart.resize({ height: parent.clientHeight });
}

let chartDomRef = ref<HTMLDivElement>();
let myChart: echarts.ECharts;
function init() {
  myChart = echarts.init(toValue(chartDomRef)!);
  option && myChart.setOption(option);
  setTimeout(resize, 100);
  window.addEventListener("resize", resize);
}
onMounted(init);
defineExpose({ update });
</script>
<template>
  <div class="echart-wrapper" ref="chartDomRef"></div>
</template>
<style lang="less">
.echart-wrapper {
  min-width: 100px;
  min-height: 300px;
  width: 100%;
  height: 100%;
}
</style>
