<!-- 菜单栏 -->
<template>

    <!-- 左侧 -->
    <div class="body-content-left">
        <div class="body-content-left-content">
            <!-- 一 -->
            <div class="s " @click="change(0)">
                <div class="sa " v-if="index == 0">
                    生产监控
                </div>

                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                生产监控
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 二 -->
            <div class="s " @click="change(1)">
                <div class="sa " v-if="index == 1">
                    设备状态
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                设备状态
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 三 -->
            <div class="s " @click="change(2)">
                <div class="sa " v-if="index == 2">
                    工艺文件
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                工艺文件
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 四 -->
            <div class="s " @click="change(3)">
                <div class="sa " v-if="index == 3">
                    任务派发
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                任务派发
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 五 -->
            <div class="s " @click="change(4)">
                <div class="sa " v-if="index == 4">
                    生产报表
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                生产报表
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 六 -->
            <div class="s " @click="change(5)">
                <div class="sa " v-if="index == 5">
                    系统设备
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                系统设备
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 七 -->
            <div class="s " @click="change(6)">
                <div class="sa " v-if="index == 6">
                    消息管理
                </div>
                <div class="as" v-else>
                    <el-row>
                        <el-col :span="24" :offset="1">
                            <div class="content-title ">
                                消息管理
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="22" :offset="1">
                            <div class="content-line ">
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
    name: 'tarbar',
    props: [
        "index",//菜单索引
    ],
    data() {
        return {
        };
    },
    methods: {
        change(index) {
            // this.index = index;
            console.log(index);
            index == 0 && this.$router.push({ name: "productionMonitoring" });
            index == 1 && this.$router.push({ name: "deviceManagement" });
            index == 2 && this.$router.push({ name: "processDocuments" });
            index == 3 && this.$router.push({ name: "taskDistribution" });
            index == 4 && this.$router.push({ name: "productionReport" });
            index == 5 && this.$router.push({ name: "systemDevices" });
            index == 6 && this.$router.push({ name: "messageManagement" });
        }
    }
}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>