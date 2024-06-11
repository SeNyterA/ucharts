import * as echarts from "echarts";

const createOHLC = ({
  chartDom,
  data = [],
  labels = [],
  theme = "dark",
  configs = [],
  colors = [],
  title = {
    text: "OHLC Chart",
    subtext: "OHLC chart",
    left: "center",
    // bottom: 20,
    top: 0,
  },
}) => {
  const myChart = echarts.init(chartDom, theme || "light");
  window.addEventListener("resize", () => {
    myChart.resize();
  });

  myChart.setOption({
    title: title,
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      left: "0px",
      let: '50px',
      right: "50px",
      bottom: "30px",
    },
    xAxis: {
      type: "category",
      data: labels,
      boundaryGap: true,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: "dataMin",
      max: "dataMax",
      axisLabel: {
        interval: Math.floor(labels.length / 6),
      },
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true,
      },
      position: "right",
      axisLabel: {
        formatter: (value) => `$${value}`,
      },
    },
    series: [
      {
        name: "LineCentury",
        type: "candlestick",
        data: data,
        itemStyle: {
          //   color: this.upColor,
          //   color0: this.downColor,
          //   borderColor: this.upBorderColor,
          //   borderColor0: this.downBorderColor,

          width: "auto",
        },
      },
    ],
  });
  return myChart;
};

const labels = [
  "2024-05-31",
  "2024-05-30",
  "2024-05-29",
  "2024-05-28",
  "2024-05-24",
  "2024-05-23",
  "2024-05-22",
  "2024-05-21",
  "2024-05-20",
  "2024-05-17",
  "2024-05-16",
  "2024-05-15",
  "2024-05-14",
  "2024-05-13",
  "2024-05-10",
  "2024-05-09",
  "2024-05-08",
  "2024-05-07",
  "2024-05-06",
  "2024-05-03",
  "2024-05-02",
  "2024-05-01",
  "2024-04-30",
  "2024-04-29",
];

const data = [
  [4.8, 4.89, 5.18, 4.7301],
  [4.9, 4.87, 5.04, 4.815],
  [4.78, 4.81, 4.91, 4.64],
  [4.9, 4.92, 5.24, 4.7],
  [4.76, 4.9, 5.2, 4.71],
  [4.74, 4.7, 5.02, 4.5],
  [5.05, 4.67, 5.06, 4.33],
  [5.6, 5.14, 5.98, 4.9401],
  [4.88, 6.32, 6.42, 4.76],
  [4.35, 4.88, 4.88, 4.235],
  [4.23, 4.42, 4.87, 4.23],
  [4.21, 4.24, 4.29, 4],
  [4.65, 4.11, 4.99, 4],
  [3.2, 4.56, 4.64, 3.0803],
  [3.06, 3.01, 3.105, 2.98],
  [2.92, 3.04, 3.2, 2.9],
  [2.96, 2.9, 2.98, 2.85],
  [3.14, 3.01, 3.18, 2.96],
  [2.89, 3.08, 3.19, 2.89],
  [2.94, 2.89, 2.98, 2.785],
  [2.76, 2.85, 2.95, 2.67],
  [2.59, 2.66, 2.765, 2.55],
  [2.68, 2.56, 2.6997, 2.55],
  [2.72, 2.74, 2.825, 2.66],
];


createOHLC({
  chartDom: document.getElementById("chart"),
  data: data,
  labels: labels,
  theme: "dark",
  title: {
    text: "OHLC Chart",
    subtext: "OHLC chart",
    left: "center",
    top: 0,
  },
  colors: ['#c23531', '#314656', '#61a0a8', '#dd8668', '#91c7ae', '#6e7074', '#546570', '#c4ccd3']
})