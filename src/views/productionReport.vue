<!-- 生产概况 -->
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

            <div class="body-content-right ">

                <el-row>
                    <el-col :span="3" :offset="1">
                        <div :class="` right-button ${buttonActive == 0 ? 'buttonActive':''} `" @click="changeButton(0)">
                            生产统计
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 1 ? 'buttonActive':''} `" @click="changeButton(1)">
                            生产报表
                        </div>
                    </el-col>
                </el-row>
                <!-- 生产统计 -->
                <div v-if="buttonActive == 0">
                    <!-- 按钮 -->
                    <div class=" buttonAndText" style="width:420px">
                        <div>
                            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>

                        <div class="">
                            <button class="buttonAndText-button" @click="search">搜索</button>
                        </div>
                    </div>
                    <div class="productionReport-content ">
                        <!-- 第一行 -->
                        <el-row>
                            <el-col :span="13">
                                <div class="content-height  ">

                                    <el-row class="title-height">
                                        <el-col :span=" 4" :offset="1">
                                            <div class="table-title-s ">
                                                运行情况
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="table-picture-s ">

                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="4" :offset="1">
                                            <div class="input-label-left ">
                                                开机时长
                                            </div>
                                        </el-col>

                                        <el-col :span="5" :offset="1">
                                            <div class="input-label-right ">
                                                {{run}}
                                            </div>
                                        </el-col>

                                        <el-col :span="4" :offset="2">
                                            <div class="input-label-left ">
                                                空闲时长
                                            </div>
                                        </el-col>

                                        <el-col :span="5" :offset="1">
                                            <div class="input-label-right ">
                                                {{free}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row style="margin-top:30px">
                                        <el-col :span="4" :offset="1">
                                            <div class="input-label-left">
                                                停机时长
                                            </div>
                                        </el-col>

                                        <el-col :span="5" :offset="1">
                                            <div class="input-label-right">
                                                {{stop}}
                                            </div>
                                        </el-col>

                                        <el-col :span="4" :offset="2">
                                            <div class="input-label-left">
                                                报警时长
                                            </div>
                                        </el-col>

                                        <el-col :span="5" :offset="1">
                                            <div class="input-label-right ">
                                                {{warn}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <el-col :span="11">
                                <div class="content-height  ">
                                    <el-row class="title-height">
                                        <el-col :span="5" :offset="1">
                                            <div class="table-title-s ">
                                                效率分析
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="table-picture-s ">

                                            </div>
                                        </el-col>
                                    </el-row>
                                    <div class="content-div">
                                        <div>
                                            <div style="height:120px;width:120px" class="" id="echarts-pie1">
                                            </div>
                                            <div class="text-two">报警计数</div>
                                        </div>

                                        <div>
                                            <div style="height:120px;width:120px" class="" id="echarts-pie2">
                                            </div>
                                            <div class="text-two">产量计数</div>
                                        </div>

                                        <div>
                                            <div style="height:120px;width:120px" class="" id="echarts-pie3">

                                            </div>
                                            <div class="text-two">平均加工时长</div>
                                        </div>

                                    </div>

                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第二行 -->
                        <el-row>
                            <el-col :span="24">
                                <div class="productionReport-content-bottom " id="echarts-line">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- 生产报表 -->
                <div v-if="buttonActive == 1">
                    <dropdownDev :tableData.sync="tableData" />
                    <div class="pm_content-two" style="height:572px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData" style="width: 100%; " max-height="571" border>
                                <el-table-column prop="id" label="设备ID" width="249">
                                </el-table-column>
                                <el-table-column prop="name" label="设备名称" width="200">
                                </el-table-column>
                                <el-table-column prop="run_count" label="运行数" width="100">
                                </el-table-column>
                                <el-table-column prop="free_count" label="空闲数" width="100">
                                </el-table-column>
                                <el-table-column prop="stop_count" label="停机数" width="100">
                                </el-table-column>
                                <el-table-column prop="warn_count" label="报警数" width="100">
                                </el-table-column>
                                <el-table-column prop="run_duration" label="运行时长" width="100">
                                </el-table-column>
                                <el-table-column prop="free_duration" label="空闲时长" width="100">
                                </el-table-column>
                                <el-table-column prop="stop_duration" label="停机时长" width="100">
                                </el-table-column>
                                <el-table-column prop="warn_duration" label="报警时长" width="100">
                                </el-table-column>
                                <el-table-column prop="online_rate" label="在线率" width="100">
                                </el-table-column>
                                <el-table-column prop="workload" label="产量" width="100">
                                </el-table-column>

                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdownDev from "../components/dropdownDev";
import utils from "../assets/utils/utils";
export default {
    components: {
        "dropdownDev": dropdownDev,
    },
    data() {
        return {
            index: 4,
            buttonActive: 0,
            value2: "",
            free: 0,
            stop: 0,
            warn: 0,
            run: 0,
            tableData: [],
        };
    },
    methods: {
        changeButton(index) {
            this.buttonActive = index;
        },
        //加载echart折线图
        initEchartLine(date, free, run, warn, stop, workload) {
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
                    data: ['停机时长', '运行时长', '报警时长', '空闲时长', '加工量'],
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

                    {
                        name: '加工量',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: workload,
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
        //报警计数
        initEchartPie1(num) {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie1'));


            let option = {
                title: {
                    text: num,
                    left: 'center',
                    top: '40%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20,
                        align: 'center'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} '
                },
                legend: {
                    show: false,
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
                },
                grid: {
                },
                series: [
                    {
                        name: '设备报警数',
                        type: 'pie',
                        radius: ['70%', '90%'],
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
                        data: [
                            { value: num, name: "ss" },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
        //产量计数
        initEchartPie2(num) {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie2'));

            let option = {
                title: {
                    text: num,
                    left: 'center',
                    top: '40%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20,
                        align: 'center'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} '
                },
                legend: {
                    show: false,
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
                },
                grid: {
                },
                series: [
                    {
                        name: '设备产量',
                        type: 'pie',
                        radius: ['70%', '90%'],
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
                        data: [
                            { value: num },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
        //加工时长
        initEchartPie3(num) {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie3'));

            let option = {
                title: {
                    text: num,
                    left: 'center',
                    top: '40%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20,
                        align: 'center'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} '
                },
                legend: {
                    show: false,
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
                },
                grid: {
                },
                series: [
                    {
                        name: '加工时长',
                        type: 'pie',
                        radius: ['70%', '90%'],
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
                        data: [
                            { value: 335 },
                            { value: 0 },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
        search() {
            let that = this;
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
                console.log(res);
                let data = [];
                let free_duration = [];
                let run_duration = [];
                let stop_duration = [];
                let warn_duration = [];
                let free_all = 0;
                let run_all = 0;
                let stop_all = 0;
                let warn_all = 0;
                let warn_count_all = 0;
                let workload_all = 0;
                let workloadarr = [];

                for (let i = 0, len = res.data.length; i < len; i++) {
                    let key = Object.keys(res.data[i]);
                    data.push(key[0]);
                    let free = 0;
                    let run = 0;
                    let stop = 0;
                    let warn = 0;
                    let workload = 0;
                    let warn_count = 0;
                    for (let j = 0, length = res.data[i][key].length; j < length; j++) {

                        free += res.data[i][key][j].free_duration;
                        run += res.data[i][key][j].run_duration;
                        stop += res.data[i][key][j].stop_duration;
                        warn += res.data[i][key][j].warn_duration;
                        workload += res.data[i][key][j].workload;
                        warn_count += res.data[i][key][j].warn_count;
                        free_all += free;
                        run_all += run;
                        stop_all += stop;
                        warn_all += warn;
                        workload_all += workload;
                        warn_count_all = warn_count;

                    }
                    free_duration.push(free);
                    run_duration.push(run);
                    stop_duration.push(stop);
                    warn_duration.push(warn);
                    workloadarr.push(workload);

                }


                that.initEchartLine(data, free_duration, run_duration, warn_duration, stop_duration, workloadarr);
                that.initEchartPie2(workload_all);
                that.initEchartPie1(warn_count_all);

            }).catch(error => {

            })
            this.$axios.post("newApi/wuji/Device/AvgWorkDuration", {
                "device": {
                    "id": "wuji"
                },
                "date_period": {
                    "start_date": startDate,
                    "end_date": endDate
                }
            }).then(res => {
                console.log(res);
                let avg_work_duration = 0;
                for (let i of res) {
                    avg_work_duration += i.avg_work_duration;
                }
                that.initEchartPie3(avg_work_duration);

            }).catch(error => {

            })
        },
    },

    updated() {
        if (this.buttonActive == 0) {
            this.$nextTick(() => {
                let arr = utils.getDay(-7);
                this.getlineData(arr[0], arr[1]);
                this.initEchartPie1();
                this.initEchartPie2();
                this.initEchartPie3();

            });
        }


    },
    mounted() {
        let arr = utils.getDay(-7);
        this.getlineData(arr[0], arr[1]);
        this.initEchartPie1();
        this.initEchartPie2();
        this.initEchartPie3();


    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>