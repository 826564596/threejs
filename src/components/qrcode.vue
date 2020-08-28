<!-- 二维码 -->
<template>
    <div class="qrcode">
        <el-row>
            <el-col :span="11" :offset="1" class="el_content el_bg1">
                <div class="el_content" @click="route">
                </div>
            </el-col>
            <el-col :span="13" :offset="2" class="el_contents el_bg2">

                <div @mousemove="inImage" @mouseout="outImage"></div>
                <transition name="el-zoom-in-bottom">
                    <div v-show="show" class="big-image">
                    </div>
                </transition>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },

    methods: {
        inImage() {
            if (!this.show) {
                this.show = true;
            }
        },
        outImage() {
            this.show = false;
        },
        route() {
            this.$router.push({ name: "productionMonitoring" });

        }
    }
}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>