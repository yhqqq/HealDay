/**
 * Created by jjlb on 2017/3/19.
 */
window.onload = function () {
    // initrida();

    initBodyChart();
};

var radachart;
function initrida() {
    radachart=echarts.init(document.getElementById('radachart'));
    option = {
        // title: {
        //     text:
        // },
        tooltip: {},
        legend: {
            data: ['今日步数', '消耗卡路里','行走长度']
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '今日步数', max: 6500},
                { name: '消耗卡路里', max: 16000},
                { name: '行走长度', max: 30000},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                // {
                //     value : [4300, 10000, 28000, 35000, 50000, 19000],
                //     name : '预算分配（Allocated Budget）'
                // },
                {
                    value : [5000, 14000, 28000],
                    name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
 radachart.setOption(option);
}

var body_chart;
function initBodyChart() {
    body_chart = echarts.init(document.getElementById('body_chart'));

    var option = {
        title: {
            text: '运动数据'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['步数']
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['03-15','03-16','03-17','03-18','03-19','03-20','03-21']
        },
        yAxis: [
            {
                name: '步数(步)',
                type: 'value'
            }
        ],
        series: [
            {
                name:'步数',
                type:'line',
                data:[5000, 3300, 7000, 12000, 600, 2000, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };

    body_chart.setOption(option);
}
