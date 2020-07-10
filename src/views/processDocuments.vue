<!-- 工艺文件 -->
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
                <dropdownFlie :flieData.sync="flieData" />
                <div class="processDocuments ">
                    <div class="processDocuments-content " v-for="(item,index) of flieData" :key="index">
                        <div class="top-picture ">
                        </div>
                        <div class="top-text ">
                            {{item.F_FILENAME}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdownFlie from "../components/dropdownFlie.vue";
export default {
    components: {
        dropdownFlie: dropdownFlie
    },
    data() {
        return {
            flieData: [],//文件数据
        };
    },

}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>