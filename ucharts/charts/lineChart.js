
import * as echarts from 'echarts'

const createLineChart = ({
    chartDom,
    data = [],
    labels = [],
    configs = [],
    colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'],
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
        title: title,
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {}
            }
        },
        grid: {
            containLabel: true
        },
        yAxis: {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: labels
        },
        series:
            configs.map(
                (config, index) => ({
                    name: config.name,
                    type: 'line',
                    smooth: config.smooth,
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
    myChart.setOption(option)
    return myChart
}

const chartDom = document.getElementById('chart')
createLineChart({
    chartDom,
    data: [
        [320, 302, 301, 334, 390, 330, 320],
        [120, 132, 101, 134, 90, 230, 210],
        [220, 182, 191, 234, 290, 330, 310],
        [150, 212, 201, 154, 190, 330, 410],
        [820, 832, 901, 934, 1290, 1330, 1320]
    ],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    configs: [
        { name: 'Test', smooth: true },
        { name: 'Mail Ad', smooth: true },
        { name: 'Affiliate Ad' },
        { name: 'Video Ad' },
        { name: 'Search Engine' },
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