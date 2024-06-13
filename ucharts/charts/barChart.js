import * as echarts from 'echarts'

const createBarChart = ({
    chartDom,
    data = [],
    labels = [],
    orientation = 'horizontal',
    configs = [],
    colors = [],
    title = {
        text: 'Bar Chart',
        subtext: 'ECharts bar chart',
        left: 'center',
        // top: 0,
        // right: 20,
        bottom: 20
    }
}) => {

    const myChart = echarts.init(chartDom)
    const option = {
        color: colors,
        title: title,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {}
            }
        },
        legend: {},
        grid: {
            containLabel: true
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
    return myChart
}

const chartDom = document.getElementById('chart')
createBarChart({
    chartDom,
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
    ],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'],
    title: {
        text: 'Bar Chart',
        subtext: 'ECharts bar chart',
        left: 'center',
        // top: 0,
        // right: 20,
        bottom: 20
    },
})