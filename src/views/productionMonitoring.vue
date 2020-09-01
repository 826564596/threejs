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
                    <!-- <div style="display: flex;justify-content: space-between;align-items: center;"> -->
                    <div class=" buttonAndText" style="width:420px">
                        <div>
                            <el-date-picker v-model="value3" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="">
                            <button class="buttonAndText-button" @click="search2">搜索</button>
                        </div>

                    </div>

                    <!-- </div> -->

                    <el-row style="margin-top:10px;">
                        <el-col :span="23" class="" style="margin-left:30px;">
                            <div class="pm_content-one">
                                <el-row>
                                    <!-- 设备状态统计 -->
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警计数统计
                                        </div>
                                        <div class="pm_content-one-content " id="echarts-pie">
                                        </div>
                                    </el-col>
                                    <!-- 报警类型统计 -->
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警类型统计
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-pie2'>

                                        </div>
                                    </el-col>
                                    <!-- 报警次数（排名） -->
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警次数（排名）
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar3'>

                                        </div>
                                    </el-col>
                                    <!-- 报警趋势 -->
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
                                    <el-table :data="tableData" style="width: 100%; " max-height="293" border>
                                        <el-table-column prop="date" label="日期" width="200">
                                        </el-table-column>
                                        <el-table-column prop="name" label="名称" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_type" label="报警类型" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_time" label="报警时间" width="200">
                                        </el-table-column>
                                        <el-table-column prop="warn_message" label=" 报警内容" show-overflow-tooltip>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            <div style="text-align:right;margin-top:30px;">
                                <el-pagination :pager-count="5" :page-size="20" :current-page.sync="pageIndex" @current-change="currentChange" layout="prev, pager, next, jumper" :total="total">
                                </el-pagination>
                            </div>
                        </el-col>
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
            value2: [utils.getDay(-6)[0], utils.getDay(-6)[1]],
            value3: [utils.getDateDay(-6)[0], utils.getDateDay(-6)[1]],
            startDate: utils.getDay(-6)[0],
            endDate: utils.getDay(-6)[1],
            tableData: [],

            total: 0,//数据总数
            pageIndex: 1,//分页页码
            flag: false,//报警统计初次加载判断标志
        };
    },
    methods: {
        currentChange(val) {
            let startDate = utils.dateToDay(this.value3[0].clone());
            let endDate = utils.dateToDay(this.value3[1].clone());

            this.initTable(startDate, endDate, val - 1);
        },
        changeButton(item) {
            this.buttonActive = item;

        },
        choseItem(index) {
            this.index = index;

        },
        search() {
            let startDate = utils.dateToDay(this.value2[0].clone());
            let endDate = utils.dateToDay(this.value2[1].clone());
            this.getlineData(startDate, endDate);
        },
        search2() {
            this.pageIndex = 1;
            let startDate = utils.dateToDay(this.value3[0].clone());
            let endDate = utils.dateToDay(this.value3[1].clone());

            this.getData(startDate, endDate);
            this.initTable(startDate, endDate, 1);

            this.startDate = startDate;
            this.endDate = endDate;


        },
        /** 获取整体概况页面信息 */
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
                    free_duration.push((free / 1000 / 60).toFixed(2));
                    run_duration.push((run / 1000 / 60).toFixed(2));
                    stop_duration.push((stop / 1000 / 60).toFixed(2));
                    warn_duration.push((warn / 1000 / 60).toFixed(2));

                }
                that.initEchartLine(data, free_duration, run_duration, warn_duration, stop_duration);


            }).catch(error => {

            })
        },
        /** 获取报警页面信息 */
        getData(startDate, endDate) {
            let that = this;
            let obj = {
                "device": {
                    "id": "wuji"
                },
                "date_period": {
                    "start_date": startDate,
                    "end_date": endDate
                }
            }
            let obj2 = {
                "start_date": startDate,
                "end_date": endDate
            }
            this.axios.all([
                this.$axios.post('newApi/wuji/Device/WarnCountTrend', obj),
                this.$axios.post('newApi/wuji/Device/WarnCountRank', obj2),
                this.$axios.post('newApi/wuji/Device/WarnCountByType', obj),
            ]).then(this.axios.spread(function (WarnCountTrend, WarnCountRank, WarnCountByType) {
                // 报警计数统计
                let data = [];
                let data2 = [];

                //报警次数排名
                let data3 = [];
                let data4 = [];


                for (let i = 0, len = WarnCountRank.length; i < len; i++) {
                    let name = WarnCountRank[i].name.substr(8, WarnCountRank[i].name.length - 1);
                    let j = WarnCountRank[i].name.substr(10, WarnCountRank[i].name.length - 1);
                    data[j - 1] = name;
                    data2[j - 1] = {
                        value: WarnCountRank[i].warn_count,
                        name: name
                    }
                    if (i < 7) {
                        data3.push(name);
                        data4.push(WarnCountRank[i].warn_count);
                    }

                }

                //报警类型占比
                let data5 = [];
                let data6 = [];
                for (let i = 0, len = WarnCountByType.length; i < len; i++) {
                    data5.push(WarnCountByType[i].warn_type);
                    data6.push({
                        value: WarnCountByType[i].warn_count,
                        name: WarnCountByType[i].warn_type
                    })
                }

                //报警趋势
                let date = [];
                let warn_duration = [];
                for (let i = 0, len = WarnCountTrend.length; i < len; i++) {
                    let key = Object.keys(WarnCountTrend[i]);
                    date.push(key[0].substr(5, 5));
                    let warn = 0;
                    for (let j = 0, length = WarnCountTrend[i][key].length; j < length; j++) {
                        warn += WarnCountTrend[i][key][j].warn_count;
                    }
                    warn_duration.push(warn);
                }

                that.initEchartPie(data, data2); //报警计数统计
                that.initEchartPie2(data5, data6);//报警类型统计
                that.initEchartBar3(data3, data4);//报警次数排名
                that.initEchartBar4(date, warn_duration); // 报警趋势 

            })).catch(error => {

            });


        },
        /**报警数量统计 */
        initEchartPie(legendData, seriesData) {

            let myChart = this.$echarts.init(document.getElementById('echarts-pie'));

            if (seriesData.length == 0) {
                myChart.setOption({
                    title: {
                        text: '暂无数据',
                        x: "center",
                        top: "40%",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    legend: {
                        data: [],
                    },
                    series: [{
                        data: []
                    }]
                })
            }
            else {
                let option = {
                    title: { text: '', },
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
                        data: legendData
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
                            data: seriesData
                        }
                    ]
                };
                myChart.setOption(option);

            }






        },
        /** 报警类型占比 */
        initEchartPie2(data1, data2) {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie2'));

            if (data2.length == 0) {
                myChart.setOption({
                    title: {
                        text: '暂无数据',
                        x: "center",
                        top: "40%",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    legend: {
                        data: [],
                    },
                    series: [{
                        data: []
                    }]
                })
            }
            else {
                let option = {
                    title: { text: "" },
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
                        data: data1
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
                            data: data2
                        }
                    ]
                };
                myChart.setOption(option);
            }


            // let obj = {
            //     mac: "wuji",
            //     datestr: utils.getDay(0)[0],
            // }
            // myChart.showLoading();
            // this.$axios.post("/api/DDC/DeviceWorkStatic/DayWarnDis" + utils.formatQueryStr(obj)).then(res => {
            //     myChart.hideLoading();
            //     let data1 = [];
            //     let data2 = [];
            //     res.forEach((item, index) => {
            //         data1.push(item.F_ERRORN);
            //         data2.push({
            //             value: item.F_ERRORC,
            //             name: item.F_ERRORN
            //         })
            //     })
            //     myChart.setOption({
            //         legend: {
            //             data: data1
            //         },
            //         series: [
            //             {
            //                 data: data2
            //             }
            //         ]
            //     });


            // }).catch(error => { }
            // )

        },
        /** 报警排名 */
        initEchartBar3(data1, data2) {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar3'));
            // 绘制图表
            if (data2.length == 0) {
                myChart.setOption({
                    title: {
                        text: '暂无数据',
                        x: "center",
                        top: "40%",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    xAxis: {
                        data: [],
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            alignWithLabel: false
                        },

                    },
                    series: [{
                        data: []
                    }]
                })
            }

            else {
                myChart.setOption({
                    title: { text: "", },
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
                            data: data1,
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
                            data: data2
                        }
                    ]
                });

            }


        },
        /** 报警趋势 */
        initEchartBar4(date, warn_duration) {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar4'));
            // 绘制图表
            if (warn_duration.length == 0) {
                myChart.setOption({
                    title: {
                        text: '暂无数据',
                        x: "center",
                        top: "40%",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    xAxis: {
                        data: [],
                        axisLabel: {
                            show: false
                        }
                    },
                    series: [{
                        data: []
                    }]
                })
            }
            else {
                myChart.setOption({
                    title: { text: "" },
                    dataZoom: [{

                        type: 'slider',
                        show: false,
                        // start: 80,
                        // end: 100,
                        height: 12,

                        startValue: 0,
                        endValue: 7,
                        bottom: 0,
                        borderColor: "#fff",
                        // fillerColor: "#fff",
                        handleSize: '10%',
                        textStyle: {
                            color: "#fff",

                        },
                        handleStyle: {
                            color: "#fff",
                            borderColor: '#fff',
                        }
                    },
                    {
                        type: 'inside',
                        rangeMode: ['value', 'value'],
                        startValue: 80,
                        endValue: 100,



                    }
                    ],
                    color: ['#3398DB'],
                    grid: {
                        left: '0%',
                        bottom: '10%',
                        top: "5%",
                        containLabel: true,
                        // show: 'false',
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
                            data: date,
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
                            data: warn_duration
                        }
                    ]
                });
            }



        },
        /** 获取整体概况页面信息 空闲时长 运行时长 报警时长 停机时长 */
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
                    data: ['停机时长(分)', '运行时长(分)', '报警时长(分)', '空闲时长(分)'],
                    textStyle: {
                        color: "#fff"
                    },
                    inactiveColor: "#777",
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
                        name: '停机时长(分)',
                        type: 'line',
                        stack: '总量',
                        // symbol: 'none',//
                        smooth: true,//是否平滑
                        areaStyle: {},
                        data: stop,
                        // lineStyle: {
                        //     color: "rgba(10,16,174,0.8)"

                        // },
                        // areaStyle: {
                        //     color: "rgba(10,16,174,0.8)"
                        // }
                    },
                    {
                        name: '运行时长(分)',
                        type: 'line',
                        stack: '总量',
                        // symbol: 'none',
                        smooth: true,
                        areaStyle: {},
                        data: run,
                        // lineStyle: {
                        //     color: "rgba(10,156,174,0.8)"

                        // },
                        // areaStyle: {
                        //     color: "rgba(10,156,174,0.8)"
                        // }
                    },
                    {
                        name: '报警时长(分)',
                        type: 'line',
                        stack: '总量',
                        // symbol: 'none',
                        smooth: true,
                        areaStyle: {},
                        data: warn,
                        // lineStyle: {
                        //     color: "rgba(10,206,174,0.8)"

                        // },
                        // areaStyle: {
                        //     color: "rgba(10,206,174,0.8)"
                        // }
                    },
                    {
                        name: '空闲时长(分)',
                        type: 'line',
                        stack: '总量',
                        // symbol: 'none',
                        smooth: true,
                        areaStyle: {},
                        data: free,
                        // lineStyle: {
                        //     color: "rgba(10,255,174,1)"

                        // },
                        // areaStyle: {
                        //     color: "rgba(10,255,174,1)"
                        // }
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
        /**表格信息 */
        initTable(startDate, endDate, index) {
            let that = this;
            this.$axios.post("newApi/wuji/Device/WarnMessage", {
                "device": {
                    "id": "wuji"
                },
                "date_period": {
                    "start_date": startDate,
                    "end_date": endDate
                },
                "page": {
                    "offset": index,
                    "limit": 20,
                }
            }).then(res => {
                that.total = res.count;
                that.tableData = res.data;
            }).catch(errror => {
            })
        }
    },
    updated() {
        if (this.buttonActive == 0) {
            this.$nextTick(() => {
                let arr = utils.getDay(-6);
                this.getlineData(arr[0], arr[1]);

            });
        }
        else {
            this.$nextTick(() => {
                this.getData(this.startDate, this.endDate);
            });

        }

    },
    mounted() {
        if (this.buttonActive == 0) {
            let arr = utils.getDay(-6);
            this.getlineData(arr[0], arr[1]);
            this.initTable(arr[0], arr[1], this.pageIndex);



        }
        else {
            let arr = utils.getDay(-6);
            this.getData(arr[0], arr[1]);
        }

    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>