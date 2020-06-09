<!-- 系统设备 -->
<template>
    <div class="div">
        <div id="container" class="container_bg">
            <div style="margin-top:10px; width:100%"></div>
            <!-- 底部文字 -->
            <bottomText />

            <!-- 左侧菜单 -->
            <tarbar :index.sync="index" />

            <div class="body-content-right ">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 5,
        };
    },

}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>