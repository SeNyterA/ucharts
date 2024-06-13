const createRadarChart = ({
  chartDom,
  data = [],
  labels = ["Allocated Budget", "Actual Spending"],
  colors = ["#FF0000", "#00FF00"],
  title = {
    text: "Radar Chart",
    subtext: "ECharts radar chart",
  },
  configs = [
    { name: "Sales", max: 6500 },
    { name: "Administration", max: 16000 },
    { name: "Information Technology", max: 30000 },
    { name: "Customer Support", max: 38000 },
    { name: "Development", max: 52000 },
    { name: "Marketing", max: 25000 },
  ],
}) => {
  const myChart = echarts.init(chartDom);
  window.addEventListener("resize", () => {
    myChart.resize();
  });

  myChart.setOption({
    title: title,
    color: colors,
    tooltip: {
      trigger: "item",
    },
    legend: {
      data: labels,
    },
    toolbox: {
      feature: {
        magicType: {
          type: ["stack"],
        },
        dataView: {},
      },
    },
    grid: {
      containLabel: true,
    },
    radar: {
      shape: "circle",
      indicator: configs,
    },
    series: [
      {
        name: title.text,
        type: "radar",
        data: data.map((values, i) => ({
          value: values,
          name: labels[i],
        })),
      },
    ],
  });
  return myChart;
};

const chartDom = document.getElementById("chart");
createRadarChart({
  chartDom,
  data: [
    [4200, 3000, 20000, 35000, 50000, 18000],
    [5000, 14000, 28000, 26000, 42000, 21000],
  ],

  labels: ["Allocated Budget", "Actual Spending"],
  configs: [
    { name: "Sales", max: 6500 },
    { name: "Administration", max: 16000 },
    { name: "Information Technology", max: 30000 },
    { name: "Customer Support", max: 38000 },
    { name: "Development", max: 52000 },
    { name: "Marketing", max: 25000 },
  ]
});