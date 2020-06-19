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
                            生产统计
                        </div>
                    </el-col>
                </el-row>
                <div v-if="buttonActive == 0">
                    <!-- 日期 -->
                    <date top="-5" right="10" />
                    <div class="body-content-right-one " id="echarts-line">
                    </div>
                </div>
                <div v-if="buttonActive == 1">
                    <el-row style="margin-top:10px;">
                        <el-col :span="18" class="" style="margin-left:30px;">

                            <div class="pm_content-one">
                                <el-row>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            设备状态统计
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar1'>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            报警统计
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar2'>

                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            运行情况
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar3'>

                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="pm_content-one-title ">
                                            故障统计
                                        </div>
                                        <div class="pm_content-one-content " id='echarts-bar4'>

                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="pm_content-two">
                                <div style="margin-bottom:10px;height:100%;width:100%">
                                    <el-table :data="tableData" style="width: 100%; " max-height="333" border>
                                        <el-table-column prop="date" label="当前设备" width="90">
                                        </el-table-column>
                                        <el-table-column prop="name" label="当前状态" width="90">
                                        </el-table-column>
                                        <el-table-column prop="address" label="运行时长" width="90">
                                        </el-table-column>
                                        <el-table-column prop="address" label="计划产量" width="90">
                                        </el-table-column>
                                        <el-table-column prop="address" label="当前产量" width="90">
                                        </el-table-column>
                                        <el-table-column prop="address" label=" 报警数">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4" style="margin-left:30px;height:700px">
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

                        </el-col>
                    </el-row>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            buttonActive: 0,
            tableData: [{
                date: '2016-05-04,2016-05-042016-05-04',
                name: '王小虎sss',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },

            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },
            ]
        };
    },
    methods: {
        changeButton(item) {
            this.buttonActive = item;

        },

        //加载echart折线图
        initEchartLine() {
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
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         label: {
                //             backgroundColor: '#6a7985'
                //         }
                //     }
                // },
                // legend: {
                //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                // },

                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            alignWithLabel: true
                        },
                        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        symbol: 'none',//
                        smooth: true,//是否平滑
                        data: [10, 10, 10, 10, 10, 100, 10],
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: [20, 20, 20, 25, 20, 20, 25],
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: [30, 25, 30, 35, 30, 35, 30],
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        smooth: true,
                        data: [40, 45, 45, 45, 50, 40, 25],
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        smooth: true,
                        data: [50, 55, 55, 55, 50, 50, 55],
                        lineStyle: {
                            color: "rgba(10,156,174,0.5)"

                        },
                        areaStyle: {
                            color: "rgba(10,156,174,0.5)"
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        initEchartBar1() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar1'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                //     }
                // },
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        }
                    }
                ],
                // dataZoom: [
                //     {
                //         id: 'dataZoomX',
                //         type: 'slider',
                //         start: 0,
                //         end: 30,
                //     }
                // ],
                yAxis: [
                    {
                        show: false,
                        type: 'value'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            });
        },
        initEchartBar2() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar2'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                //     }
                // },
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        }
                    }
                ],
                // dataZoom: [
                //     {
                //         id: 'dataZoomX',
                //         type: 'slider',
                //         start: 0,
                //         end: 30,
                //     }
                // ],
                yAxis: [
                    {
                        show: false,
                        type: 'value'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            });
        },
        initEchartBar3() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar3'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                //     }
                // },
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        }
                    }
                ],
                // dataZoom: [
                //     {
                //         id: 'dataZoomX',
                //         type: 'slider',
                //         start: 0,
                //         end: 30,
                //     }
                // ],
                yAxis: [
                    {
                        show: false,
                        type: 'value'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            });
        },
        initEchartBar4() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar4'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                //     }
                // },
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        }
                    }
                ],
                // dataZoom: [
                //     {
                //         id: 'dataZoomX',
                //         type: 'slider',
                //         start: 0,
                //         end: 30,
                //     }
                // ],
                yAxis: [
                    {
                        show: false,
                        type: 'value'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            });
        }
    },
    updated() {
        if (this.buttonActive == 0) {
            this.$nextTick(() => {
                this.initEchartLine();

            });
        }
        else {
            this.$nextTick(() => {
                this.initEchartBar1();
                this.initEchartBar2();
                this.initEchartBar3();
                this.initEchartBar4();

            });
        }

    },
    mounted() {
        if (this.buttonActive == 0) {
            this.initEchartLine();

        }
        else {
            this.initEchartBar1();
            this.initEchartBar2();
            this.initEchartBar3();
            this.initEchartBar4();
        }

    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>