<!-- 任务派发 -->
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
                            派发记录
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div :class="` right-button ${buttonActive == 1 ? 'buttonActive':''} `" @click="changeButton(1)">
                            任务派发
                        </div>
                    </el-col>
                </el-row>
                <!-- 派发记录查询 -->
                <div v-if="buttonActive == 0">
                    <dropdownTaskQuery :tableData.sync="tableData1" />
                    <div class="pm_content-two" style="height:552px;width:98%;margin-left:10px">
                        <div style="margin-bottom:10px;height:100%;width:100%">
                            <el-table :data="tableData1" style="width: 100%; " max-height="551" border>
                                <el-table-column prop="F_NAME" label="设备名称" width="249">
                                </el-table-column>
                                <el-table-column prop="F_PRODUCTNAME" label="产品名称" width="200">
                                </el-table-column>
                                <el-table-column prop="F_PRODUCTMODEL" label="产品型号" width="200">
                                </el-table-column>
                                <el-table-column prop="F_DATE" label="日期" width="200">
                                </el-table-column>
                                <el-table-column prop="F_CHARGEMAN" label="负责人" width="200">
                                </el-table-column>
                                <el-table-column prop="F_BEGINTIME" label="开始时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_ENDTIME" label="结束时间" width="200">
                                </el-table-column>
                                <el-table-column prop="F_PLANWORKLOAD" label="计划产量" width="200">
                                </el-table-column>
                                <el-table-column prop="F_DESC" label="备注">
                                </el-table-column>

                            </el-table>
                        </div>
                    </div>
                </div>
                <!-- 任务派发 -->
                <div v-if="buttonActive == 1">
                    <dropdownTask :fileData.sync="fileData" :fileId.sync="fileId" />
                    <div class="processDocuments ">
                        <div :class="`processDocuments-content ${fileIndex == index ? 'active' : ''}` " @click="clickId(item,index)" v-for="(item,index) of fileData" :key="index">
                            <div class="top-picture ">
                            </div>
                            <div class="top-text" :labelTooltip="`${item.F_TECHFILENAME}`">
                                <!-- {{item.F_FILENAME}} -->
                                {{item.F_TECHFILENAME}}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import dropdownTask from "../components/dropdownTask.vue";
import dropdownTaskQuery from "../components/dropdownTaskQuery.vue";

export default {
    components: {
        "dropdownTask": dropdownTask,
        "dropdownTaskQuery": dropdownTaskQuery,


    },
    data() {
        return {
            index: 3,
            fileData: [],//任务
            tableData1: [],//任务派发查询

            fileId: "",
            fileIndex: -1,
            buttonActive: 0,
        };
    },
    methods: {
        changeButton(item) {
            this.buttonActive = item;
        },
        clickId(item, index) {

            this.fileId = item.F_TECHFILEID;
            if (this.fileIndex == index) {
                this.fileIndex = -1;
                return;
            }
            this.fileIndex = index;
        },
    }


}

</script>
<style lang="scss">
</style>