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
                            设备维修
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
                            设备故障
                        </div>
                    </el-col>
                </el-row>
                <!-- 设备档案 -->
                <div v-if="buttonActive == 0">

                    <dropdownDoc :tableData.sync="tableData" />
                    <!-- 表格 -->
                    <div class="pm_content-two" style="height:572px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData" style="width: 100%; " max-height="571" border>
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
                                <el-table-column prop="F_DEVICEID" label="设备ID">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
                <!-- 设备维修 -->
                <div v-if="buttonActive == 1">
                    <dropdownMaintain :tableData.sync="tableData2" />

                    <div class="pm_content-two" style="height:572px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData2" style="width: 100%; " max-height="571" border>
                                <el-table-column prop="F_DEVICEID" label="设备ID" width="249">
                                </el-table-column>
                                <el-table-column prop="F_mtoper" label="维修人员" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mtdate" label="维修日期" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mttime" label="维修时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_CHKNAME" label="点检项" width="200">
                                </el-table-column>
                                <el-table-column prop="f_downtmlen" label="停机时长（分钟）" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mttmlen" label="维修时长（分钟）" width="200">
                                </el-table-column>
                                <el-table-column prop="f_mtdesc" label="维修内容" show-overflow-tooltip>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
                <!-- 设备点检 -->
                <div v-if="buttonActive == 2">
                    <dropdown :tableData.sync="tableData3" />

                    <div class="pm_content-two" style="height:552px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData3" style="width: 100%; " max-height="551" border>
                                <el-table-column prop="F_DEVICENAME" label="设备名称" width="249">
                                </el-table-column>
                                <el-table-column prop="F_CHKTYPE" label="类型名称" width="200">
                                </el-table-column>
                                <el-table-column prop="F_chkoper" label="点检人" width="200">
                                </el-table-column>
                                <el-table-column prop="F_chkrst" label="点检状态" width="200">
                                </el-table-column>
                                <el-table-column prop="F_chkdate" label="点检日期" width="200">
                                </el-table-column>
                                <el-table-column prop="F_chktime" label="点检时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_chkdesc" label="点检补充">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
                <!-- 设备保养 -->
                <div v-if="buttonActive == 3">
                    <dropdownProtect :tableData.sync="tableData4" />
                    <div class="pm_content-two" style="height:552px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData4" style="width: 100%; " max-height="551" border>
                                <el-table-column prop="F_mtdate" label="保养日期" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mttime" label="保养时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mtoper" label="保养人" width="200">
                                </el-table-column>
                                <el-table-column prop="f_downtmlen" label="停机时长（分钟）" width="200">
                                </el-table-column>
                                <el-table-column prop="F_mttmlen" label="保养时长（分钟）" width="200">
                                </el-table-column>
                                <el-table-column prop="f_mtdesc" label="保养内容">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <!-- <div class="maintain ">

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
                    </div> -->
                </div>
                <!-- 设备故障 -->
                <div v-if="buttonActive == 4">
                    <dropdownFault :tableData.sync="tableData5" />

                    <div class="pm_content-two" style="height:552px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData5" style="width: 100%; " max-height="551" border>
                                <el-table-column prop="F_NAME" label="设备名称" width="200">
                                </el-table-column>
                                <el-table-column prop="F_FAULTNAME" label="故障类型" width="200">
                                </el-table-column>
                                <el-table-column prop="F_TIMES" label="故障发生次数" width="200">
                                </el-table-column>
                                <el-table-column prop="F_DOWNTIMELEN" label="停机时长（分钟）" width="200">
                                </el-table-column>
                                <el-table-column prop="F_OPER" label="操作者" width="200">
                                </el-table-column>
                                <el-table-column prop="F_OPETIME" label="操作时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_OTHDESC" label="备注" width="200">
                                </el-table-column>
                                <el-table-column prop="F_TREATMENT" label="处理" width="200">
                                </el-table-column>
                                <el-table-column prop="F_WARNDURA" label="报警时长" width="200">
                                </el-table-column>
                                <el-table-column prop="F_WARNTIME" label="报警时间" width="200">
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
import utils from "../assets/utils/utils";
import dropdownMaintain from "../components/dropdownMaintain.vue";
import dropdownDoc from "../components/dropdownDoc.vue";
import dropdownProtect from "../components/dropdownProtect.vue";
import dropdownFault from "../components/dropdownFault.vue";


export default {
    components: {
        "dropdownMaintain": dropdownMaintain,
        "dropdownDoc": dropdownDoc,
        "dropdownProtect": dropdownProtect,
        "dropdownFault": dropdownFault

    },
    data() {
        return {
            index: 1,
            buttonActive: 0,
            tableData: [],//设备档案表格信息
            tableData2: [],//设备维修表格信息
            tableData3: [],//设备点检表格信息
            tableData4: [],//设备保养表格信息
            tableData5: [],//设备故障表格信息

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
            this.$axios.post('api/DDC/Terminal/DeviceList' + utils.formatQueryStr(obj)).then((res) => {
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

}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>