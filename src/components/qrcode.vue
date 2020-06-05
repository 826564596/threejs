<!-- 二维码 -->
<template>
    <div class="qrcode">
        <el-row>
            <el-col :span="11" :offset="1" class="el_content el_bg1">
                <div class="el_content" @click="route">

                </div>
            </el-col>
            <el-col :span="11" :offset="2" class="el_content el_bg2">
                <div></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {
        route() {
            this.$router.push({ name: "eight" });
        }
    }
}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>