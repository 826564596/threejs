<!-- 生产监控 -->
<template>
    <div class="div">
        <div id="container" class="container_bg">
            <div style="margin-top:10px; width:100%"></div>
            <!-- 底部文字 -->
            <bottomText />
            <!-- 返回键 -->
            <backToHome />
            <!-- 左侧菜单 -->
            <tarbar :index.sync="index" />

            <div class="body-content-right">
                <el-row>
                    <el-col :span="3" :offset="1">
                        <div :class="` right-button ${buttonActive == 0 ? 'buttonActive':''} `" @click="changeButton(0)">
                            整体概况
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 1 ? 'buttonActive':''} `" @click="changeButton(1)">
                            报警统计
                        </div>
                    </el-col>
                </el-row>
                <div v-if="buttonActive == 0">
                    <!-- 日期 -->
                    <!-- <date top="-5" right="10" /> -->

                    <div class=" buttonAndText" style="width:420px">
                        <div>
                            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>

                        <div class="">
                            <button class="buttonAndText-button" @click="search">搜索</button>
                        </div>
                    </div>
                    <div class="body-content-right-one " id="echarts-line">
                    </div>

                </div>
                <div v-if="buttonActive == 1">
                    <el-row style="margin-top:10px;">
                        <el-col :span="23" class="" style="margin-left:30px;">

                            <div class="pm_content-one">
                                <el-row>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            设备状态统计
                                        </div>
                                        <div class="pm_content-one-content " id="echarts-pie">
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警类型统计
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-pie2'>

                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警次数（排名）
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar3'>

                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警趋势
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar4'>

                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="pm_content-two">
                                <div style="margin-bottom:10px;height:100%;width:100%">
                                    <el-table :data="tableData" style="width: 100%; " max-height="333" border>
                                        <el-table-column prop="date" label="日期" width="200">
                                        </el-table-column>
                                        <el-table-column prop="id" label="设备ID" width="200">
                                        </el-table-column>
                                        <el-table-column prop="name" label="工位名称" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_type" label="报警类型" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_time" label="报警时间" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_message" label=" 报警内容">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </el-col>
                        <!-- <el-col :span="4" style="margin-left:30px;height:700px">
                            <el-row>
                                <el-col :span="24">
                                    <date top="-70" right="-10" />
                                </el-col>
                            </el-row>

                            <div>
                                <el-table :data="tableData" style="width: 100%; " max-height="640" border>
                                    <el-table-column prop="date" label="当前设备" width="90">
                                    </el-table-column>
                                    <el-table-column prop="name" label="当前状态" width="90">
                                    </el-table-column>
                                    <el-table-column prop="address" label="运行时长" width="90">
                                    </el-table-column>
                                </el-table>
                            </div>

                        </el-col> -->
                    </el-row>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    data() {
        return {
            index: 0,
            buttonActive: 0,
            value2: "",
            tableData: []
        };
    },
    methods: {
        changeButton(item) {
            this.buttonActive = item;

        },
        choseItem(index) {
            this.index = index;

        },
        search() {
            let startDate = utils.dateToDay(this.value2[0]);
            let endDate = utils.dateToDay(this.value2[1]);
            this.getlineData(startDate, endDate);
        },
        getlineData(startDate, endDate) {

            let that = this;
            this.axios.post("newApi/wuji/Device/DailyStatusStatistics", {
                "start_date": startDate,
                "end_date": endDate
            }).then(res => {
                let data = [];
                let free_duration = [];
                let run_duration = [];
                let stop_duration = [];
                let warn_duration = [];

                for (let i = 0, len = res.data.length; i < len; i++) {
                    let key = Object.keys(res.data[i]);
                    data.push(key[0]);
                    let free = 0;
                    let run = 0;
                    let stop = 0;
                    let warn = 0;
                    for (let j = 0, length = res.data[i][key].length; j < length; j++) {

                        free += res.data[i][key][j].free_duration;
                        run += res.data[i][key][j].run_duration;
                        stop += res.data[i][key][j].stop_duration;
                        warn += res.data[i][key][j].warn_duration;
                    }
                    free_duration.push(free);
                    run_duration.push(run);
                    stop_duration.push(stop);
                    warn_duration.push(warn);

                }
                that.initEchartLine(data, free_duration, run_duration, warn_duration, stop_duration);


            }).catch(error => {

            })
        },
        getData() {
            let that = this;

            let obj = {
                mac: "wuji",
                datestr: utils.getDay(0)[0],
                deviceid: this.deviceId,
            }
            this.axios.all([
                this.$axios.post('/api/DDC/DeviceWorkStatic/DayWorkLoadRank' + utils.formatQueryStr(obj)),
            ]).then(this.axios.spread(function () {

            })).catch(error => {

            });


        },
        //设备在线
        initEchartPie() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie'));
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // show: true,
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    textStyle: { color: " #fff" },
                    pageIconColor: '#fff',
                    pageIconSize: 12,
                    pageTextStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    data: ['在线', '离线']
                },
                grid: {
                },
                series: [
                    {
                        name: '设备报警数',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        // radius: "50%",
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'left'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        // labelLine: {
                        //     show: false
                        // },
                        data: []
                    }
                ]
            };
            myChart.setOption(option);

            let obj = {
                mac: "wuji",
            }
            myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/OnLineStat" + utils.formatQueryStr(obj)).then(res => {
                myChart.hideLoading();
                console.log(res);
                let data2 = [];
                data2.push({
                    value: res.onlinenum,
                    name: "在线"
                });

                data2.push({
                    value: res.offlinenum,
                    name: "离线"
                });
                myChart.setOption({
                    series: [
                        {
                            data: data2
                        }
                    ]
                });


            }).catch(error => { }
            )

        },
        //报警类型占比
        initEchartPie2() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie2'));
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // show: true,
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    textStyle: { color: " #fff" },
                    pageIconColor: '#fff',
                    pageIconSize: 12,
                    pageTextStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    data: []
                },
                grid: {
                },
                series: [
                    {
                        name: '设备报警数',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        // radius: "50%",
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'left'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        // labelLine: {
                        //     show: false
                        // },
                        data: []
                    }
                ]
            };
            myChart.setOption(option);

            let obj = {
                mac: "wuji",
                datestr: utils.getDay(0)[0],
            }
            myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/DayWarnDis" + utils.formatQueryStr(obj)).then(res => {
                myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                res.forEach((item, index) => {
                    data1.push(item.F_ERRORN);
                    data2.push({
                        value: item.F_ERRORC,
                        name: item.F_ERRORN
                    })
                })
                myChart.setOption({
                    legend: {
                        data: data1
                    },
                    series: [
                        {
                            data: data2
                        }
                    ]
                });


            }).catch(error => { }
            )

        },
        //加载echart折线图
        initEchartLine(date, free, run, warn, stop) {
            let myChart = this.$echarts.init(document.getElementById('echarts-line'));
            let option = {
                title: {
                    // text: '堆叠区域1',
                    // textStyle: {
                    //     color: '#fff',
                    //     fontWeight: 'bold',
                    //     fontSize: 18,
                    // }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['停机时长', '运行时长', '报警时长', '空闲时长'],
                    textStyle: {
                        color: "#fff"
                    }
                },

                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: date,
                        axisLine: {
                            lineStyle: {
                                color: '#00a1e7', // 颜色
                                width: 4 // 粗细
                            }
                        },
                    }

                ],
                yAxis: [
                    {
                        type: 'value',

                        axisLabel: {
                            color: '#fff',
                            fontSize: 24,
                        },
                        axisLine: { show: false },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                width: 1.1,
                                color: "rgb(17, 83, 116)"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '停机时长',
                        type: 'line',
                        stack: '总量',
                        symbol: 'none',//
                        smooth: true,//是否平滑
                        data: stop,
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '运行时长',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: run,
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '报警时长',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: warn,
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '空闲时长',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: free,
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },

                ]
            };
            myChart.setOption(option);


            // myChart.showLoading();
            // this.$axios.post("/newApi/DDC/DeviceWorkStatic/OnLineStat",
            //     {

            //     }
            // ).then(res => {
            //     myChart.hideLoading();



            // }).catch(error => { }
            // )
        },
        // 初始加载最近七天的开机运行时长

        //报警排名
        initEchartBar3() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar3'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                yAxis: [
                    {
                        // show: false,
                        type: 'value',
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            },
                        }
                    }
                ],
                xAxis: [
                    {
                        // name: '工位',
                        type: 'category',
                        data: [],
                        axisTick: {
                            alignWithLabel: true
                        },

                        axisLine: {
                            lineStyle: {
                                color: '#ddd', // 颜色
                                width: 1 // 粗细
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            rotate: 300 //倾斜角度
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: []
                    }
                ]
            });
            let arr = utils.CurrentMonthFirstAndLast();
            let obj = {
                mac: "wuji",
                begindate: arr[0],
                enddate: arr[1],
            }
            myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WarnRank" + utils.formatQueryStr(obj)).then(res => {
                myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                for (let i = 0; i < 7; i++) {
                    data1.push(res[i].F_NAME.substr(8, res[i].F_NAME.length - 1));
                    data2.push(res[i].F_WARNRATE);
                }
                myChart.setOption({
                    xAxis: {
                        data: data1
                    },
                    series: [{
                        data: data2
                    }]
                })
            }).catch(error => {

            })

        },
        //报警趋势
        initEchartBar4() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar4'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                yAxis: [
                    {
                        // show: false,
                        type: 'value',
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            },
                        }
                    }
                ],
                xAxis: [
                    {
                        // name: '工位',
                        type: 'category',
                        data: [],
                        axisTick: {
                            alignWithLabel: true
                        },

                        axisLine: {
                            lineStyle: {
                                color: '#ddd', // 颜色
                                width: 1 // 粗细
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            rotate: 300 //倾斜角度
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: []
                    }
                ]
            });

            let arr = utils.CurrentMonthFirstAndLast();
            myChart.showLoading();
            this.$axios.post("newApi/wuji/Device/WarnCountTrend", {
                "device": {
                    "id": "wuji"
                },
                "date_period": {
                    "start_date": arr[0],
                    "end_date": arr[1]
                }
            }).then(res => {
                myChart.hideLoading();
                let date = [];
                let warn_duration = [];
                for (let i = 0, len = res.length; i < len; i++) {
                    let key = Object.keys(res[i]);
                    date.push(key[0]);
                    let warn = 0;
                    for (let j = 0, length = res[i][key].length; j < length; j++) {
                        warn += res[i][key][j].warn_count;
                    }
                    warn_duration.push(warn);
                }

                myChart.setOption({
                    xAxis: {
                        data: date
                    },
                    series: [{
                        data: warn_duration
                    }]
                })

            }).catch(error => {

            })
        },
        // 表格信息
        initTable() {
            let that = this;
            let arr = utils.CurrentMonthFirstAndLast();
            this.$axios.post("newApi/wuji/Device/WarnMessage", {
                "device": {
                    "id": "wuji"
                },
                "date_period": {
                    "start_date": arr[0],
                    "end_date": arr[1]
                },
                "page": {
                    "offset": 0,
                    "limit": 10
                }
            }).then(res => {
                that.tableData = res;
            }).catch(errror => {
            })
        }
    },
    updated() {
        if (this.buttonActive == 0) {
            this.$nextTick(() => {
                let arr = utils.getDay(-7);
                this.getlineData(arr[0], arr[1]);

            });
        }
        else {
            this.$nextTick(() => {
                this.initEchartPie();
                this.initEchartPie2();
                this.initEchartBar3();
                this.initEchartBar4();
                // this.initTable();

            });
        }

    },
    mounted() {
        if (this.buttonActive == 0) {
            let arr = utils.getDay(-7);
            this.getlineData(arr[0], arr[1]);
            this.initTable();

        }
        else {
            this.initEchartPie();
            this.initEchartPie2();
            this.initEchartBar3();
            this.initEchartBar4();
            this.initTable();
        }

    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>