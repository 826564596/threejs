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
                <dropdownTask />
                <div class="pm_content-two" style="height:612px;width:98%;margin-left:10px">
                    <div style="margin-bottom:10px;height:100%;width:100%">
                        <el-table :data="tableData5" style="width: 100%; " max-height="611" border>
                            <el-table-column prop="F_NAME" label="工位名称" width="200">
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
                            <el-table-column prop="F_OTHDESC" label="备注">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdownTask from "../components/dropdownTask.vue";
export default {
    components: {
        "dropdownTask": dropdownTask
    },
    data() {
        return {
            index: 3,
        };
    },


}

</script>
<style lang="scss">
</style>