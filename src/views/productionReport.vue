<!-- 生产报表 -->
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
                <!-- 按钮 -->
                <div class=" buttonAndText">
                    <div class="border" style="width:100px;">
                        1
                    </div>
                    <div class="">
                        <button class="buttonAndText-button">搜索</button>
                    </div>
                    <div class="">
                        <button class="buttonAndText-button">编辑</button>
                    </div>
                    <div class="">
                        <button class="buttonAndText-button">删除</button>
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
                                            111
                                        </div>
                                    </el-col>

                                    <el-col :span="4" :offset="2">
                                        <div class="input-label-left ">
                                            开机时长
                                        </div>
                                    </el-col>

                                    <el-col :span="5" :offset="1">
                                        <div class="input-label-right ">
                                            111
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top:30px">
                                    <el-col :span="4" :offset="1">
                                        <div class="input-label-left">
                                            开机时长
                                        </div>
                                    </el-col>

                                    <el-col :span="5" :offset="1">
                                        <div class="input-label-right">
                                            111
                                        </div>
                                    </el-col>

                                    <el-col :span="4" :offset="2">
                                        <div class="input-label-left">
                                            开机时长
                                        </div>
                                    </el-col>

                                    <el-col :span="5" :offset="1">
                                        <div class="input-label-right ">
                                            111
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
                                        <div class="text-two">单次加工时长</div>
                                    </div>

                                    <div>
                                        <div style="height:120px;width:120px" class="" id="echarts-pie2">
                                        </div>
                                        <div class="text-two">产能利用率</div>
                                    </div>

                                    <div>
                                        <div style="height:120px;width:120px" class="" id="echarts-pie3">

                                        </div>
                                        <div class="text-two">效果分析图</div>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 4,
        };
    },
    methods: {
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
        initEchartPie1() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie1'));

            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
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
                            { value: 335 },
                            { value: 310 },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
        initEchartPie2() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie2'));

            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
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
                            { value: 335 },
                            { value: 310 },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
        initEchartPie3() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie3'));

            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
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
                            { value: 335 },
                            { value: 310 },

                        ]
                    }
                ]
            };
            myChart.setOption(option);

        },
    },
    mounted() {
        this.initEchartLine();
        this.initEchartPie1();
        this.initEchartPie2();
        this.initEchartPie3();


    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>