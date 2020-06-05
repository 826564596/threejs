<!--  -->
<template>
    <div class="div">
        <div id="container" class="container_bg">
            <div style="margin-top:10px; width:100%"></div>
            <!-- 标题图片登陆 -->
            <titles :screenWidth.sync="screenWidth" :screenHeight.sync="screenHeight"></titles>
            <!-- 底部文字 -->
            <bottomText />

            <!-- 左侧 -->
            <div class="body-content-left">
                <div class="body-content-left-content">
                    <div class="s ">
                        <div class="sa ">
                            生产监控
                        </div>
                    </div>
                    <div class="s ">
                        <div class="as border">
                        </div>
                    </div>
                    <div class="s ">
                        <div class="sa ">
                        </div>
                    </div>
                    <div class="s ">
                        <div class="sa ">
                        </div>
                    </div>
                    <div class="s ">
                        <div class="sa ">
                        </div>
                    </div>
                    <div class="s ">
                        <div class="sa ">
                        </div>
                    </div>
                    <div class="s ">
                        <div class="sa ">
                        </div>
                    </div>
                </div>
            </div>

            <div class="body-content-right ">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        };
    },

    components: {},

    computed: {},

    mounted() {

        window.onresize = () => {
            return this.onWindowResize();
        }
    },

    methods: {

        // 窗口变动触发
        onWindowResize() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;

        },
    }
}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>