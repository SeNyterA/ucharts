import './index.css'
import * as echarts from 'echarts'


// const chartDom = document.getElementById('chart')
// const myChart = echarts.init(chartDom)

// var option;
// var data = [
//   [320, 302, 301, 334, 390, 330, 320],
//   [120, 132, 101, 134, 90, 230, 210],
//   [220, 182, 191, 234, 290, 330, 310],
//   [150, 212, 201, 154, 190, 330, 410],
//   [820, 832, 901, 934, 1290, 1330, 1320]
// ]

// option = {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
//   legend: {},
//   grid: {
//     left: '0%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   yAxis: {
//     type: 'value'
//   },
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   toolbox: {
//     show: true,
//     feature: {
//       mark: { show: true },
//       dataView: { show: true, readOnly: false },
//       magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
//       restore: { show: true },
//       saveAsImage: { show: true },
//     }
//   },

//   series: [
//     {
//       name: 'sssssss',
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: [320, 302, 301, 334, 390, 330, 320]
//     },
//     {
//       name: 'Mail Ad',
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: [120, 132, 101, 134, 90, 230, 210]
//     },
//     {
//       name: 'Affiliate Ad',
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: [220, 182, 191, 234, 290, 330, 310]
//     },
//     {
//       name: 'Video Ad',
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: [150, 212, 201, 154, 190, 330, 410]
//     },
//     {
//       name: 'Search Engine',
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: [820, 832, 901, 934, 1290, 1330, 1320]
//     }
//   ]
// };

// myChart.setOption(option)

// const getAxisLabels = (data) => {
//   const labels = document.getElementById('chartLabels').value.split(':')
//   const axisLabels = []
//   for (let i = 0; i < data[0].length; i++) {
//     axisLabels.push(labels[i] ? labels[i] : `Label ${i + 1}`)
//   }
//   return axisLabels
// }

// const getConfigs = (data) => {
//   try {
//     const configs = JSON.parse(document.getElementById('config').value)
//     const series = configs.map((config, index) => ({
//       name: config.name,
//       type: 'bar',
//       stack: config.stack,
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: data[index]
//     }))
//     return series
//   } catch (error) {
//     return data.map((d, i) => ({
//       name: `Series ${i + 1}`,
//       type: 'bar',
//       stack: 'total',
//       label: {
//         show: true
//       },
//       emphasis: {
//         focus: 'series'
//       },
//       data: d
//     }))
//   }
// }


// document.getElementById('orientation').addEventListener('change', function () {
//   const orientation = document.getElementById('orientation').value
//   if (orientation === 'horizontal') {
//     option.yAxis = {
//       type: 'value'
//     }
//     option.xAxis = {
//       type: 'category',
//       data: getAxisLabels(data)
//     }
//   } else {
//     option.yAxis = {
//       type: 'category',
//       data: getAxisLabels(data)
//     }
//     option.xAxis = {
//       type: 'value'
//     }
//   }
//   myChart.setOption(option)
// })


// document.getElementById('chartLabels').addEventListener('blur', function () {
//   const axisLabels = getAxisLabels(data)
//   if (option.yAxis.type === 'value') {
//     option.xAxis.data = axisLabels
//   } else {
//     option.yAxis.data = axisLabels
//   }
//   myChart.setOption(option)
// })

// document.getElementById('config').addEventListener('blur', function () {
//   option.series = getConfigs(data)
//   myChart.setOption({ ...option, ...{ series: getConfigs(data) } })
// })





const createBarChart = ({
  data = [],
  labels = [],
  orientation = 'horizontal',
  configs = []
}) => {
  const chartDom = document.getElementById('chart')
  const myChart = echarts.init(chartDom)
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '0%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true },
      }
    },
    series:
      configs.map(
        (config, index) => ({
          name: config.name,
          type: 'bar',
          stack: config.stack,
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: data[index]
        })
      )
  }

  if (orientation === 'horizontal') {
    option.yAxis = {
      type: 'value'
    }
    option.xAxis = {
      type: 'category',
      data: labels
    }
  } else {
    option.yAxis = {
      type: 'category',
      data: labels
    }
    option.xAxis = {
      type: 'value'
    }
  }

  myChart.setOption(option)
}

createBarChart({
  data: [
    [320, 302, 301, 334, 390, 330, 320],
    [120, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  orientation: 'horizontal',
  configs: [
    { name: 'Test', stack: 'A' },
    { name: 'Mail Ad', stack: 'A' },
    { name: 'Affiliate Ad', stack: 'B' },
    { name: 'Video Ad', stack: 'A' },
    { name: 'Search Engine', stack: 'C' }
  ]
})