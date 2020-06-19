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
                <div class="processDocuments ">
                    <div class="processDocuments-content " v-for="index of 13" :key="index">
                        <div class="top-picture ">

                        </div>
                        <div class="top-text ">
                            工艺管理
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 2,
        };
    },

}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>