<!-- 设备管理 -->
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
                            设备档案
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 1 ? 'buttonActive':''} `" @click="changeButton(1)">
                            设备故障
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 2 ? 'buttonActive':''} `" @click="changeButton(2)">
                            设备点检
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 3 ? 'buttonActive':''} `" @click="changeButton(3)">
                            设备保养
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 4 ? 'buttonActive':''} `" @click="changeButton(4)">
                            易损件管理
                        </div>
                    </el-col>

                </el-row>
                <!-- 设备档案 -->
                <div v-if="buttonActive == 0">
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
                    <!-- 表格 -->
                    <div class="pm_content-two" style="height:582px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData" style="width: 100%; " max-height="581" border>
                                <el-table-column prop="date" label="配件信息" width="480">
                                </el-table-column>
                                <el-table-column prop="name" label="供应商信息" width="480">
                                </el-table-column>
                                <el-table-column prop="address" label="库存信息" width="480">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
                <!-- 设备故障 -->
                <div v-if="buttonActive == 1">

                </div>
                <!-- 设备点检 -->
                <div v-if="buttonActive == 2">

                </div>
                <!-- 设备保养 -->
                <div v-if="buttonActive == 3">
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

                    <div class="maintain ">

                        <div :class="`${Math.ceil(index / 3) % 2 == 1 ? 'maintain-item' :'maintain-item2' } `" v-for="index of 6" :key="index">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content ">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div>

                        <!-- <div class="maintain-item ">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div>
                        <div class="maintain-item ">

                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>

                        </div>
                        <div class="maintain-item ">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div>

                        <div class="maintain-item2 ">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div>
                        <div class="maintain-item2 ">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div>
                        <div class="maintain-item2 ">
                            <div class="pm_content-one-title ">
                                故障统计
                            </div>
                            <div class="maintain-item-content border">
                            </div>

                            <div class="maintain-item-button">
                                <button>保养</button>
                                <button>删除</button>
                            </div>
                        </div> -->
                    </div>
                </div>
                <!-- 易损件管理 -->
                <div v-if="buttonActive == 4">

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 1,
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
        }
    },
    mounted() {
        console.log(Math.floor(4 / 3))
    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>