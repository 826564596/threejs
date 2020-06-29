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
                </el-row>
                <!-- 设备档案 -->
                <div v-if="buttonActive == 0">

                    <dropdown />
                    <!-- 表格 -->
                    <div class="pm_content-two" style="height:582px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData" style="width: 100%; " max-height="581" border>
                                <el-table-column prop="F_NAME" label="设备名称" width="170">
                                </el-table-column>
                                <el-table-column prop="F_TERMINALNAME" label="终端名称" width="180">
                                </el-table-column>
                                <el-table-column prop="f_scadaname" label="采集名称" width="180">
                                </el-table-column>
                                <el-table-column prop="F_ONLINE" label="运行状态" width="100">
                                </el-table-column>
                                <el-table-column prop="F_STAT" label="设备状态" width="100">
                                </el-table-column>
                                <el-table-column prop="F_CONNSTR" label="连接配置串" width="180">
                                </el-table-column>
                                <el-table-column prop="F_VERSION" label="版本" width="180">
                                </el-table-column>
                                <el-table-column prop="F_DEVICESDKNAME" label="设备SDK名称" width="180">
                                </el-table-column>
                                <el-table-column prop="F_DEVICEID" label="设备ID" width="180">
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
                    <dropdown url="/DDC/DeviceChk/QueryChkRecdList" :tableData.sync="tableData3" />
                </div>
                <!-- 设备保养 -->
                <div v-if="buttonActive == 3">
                    <dropdown url="/DDC/DeviceWorkStatic/DeviceMTRecd" :tableData.sync="tableData4" />

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
                    </div>
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
            index: 1,
            buttonActive: 0,
            tableData: [],//表格信息
            tableData2: [],//表格信息
            tableData3: [],//表格信息
            tableData4: [],//表格信息



        };
    },
    methods: {
        changeButton(item) {
            this.buttonActive = item;
        },
        //获取信息
        getData() {
            let that = this;
            let obj = {
                MAC: "wuji",
                pagesize: 15
            }
            this.$axios.post('api//DDC/Terminal/DeviceList' + utils.formatQueryStr(obj)).then((res) => {
                console.log(res.Rows);
                for (let i of res.Rows) {
                    i.F_STAT = i.F_STAT == "1" ? '启用' : "未启用";
                }
                that.tableData = res.Rows;

            }).catch(error => {

            })

        },
    },
    mounted() {
        this.getData();
    },
    updated() {
        console.log(this.tableData4);
    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>