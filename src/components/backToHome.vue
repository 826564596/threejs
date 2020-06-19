<!-- 返回首页 -->
<template>
    <div>
        <div class="backToHome" @click="toBack('six')">

        </div>
    </div>

</template>

<script>
export default {
    name: 'backToHome',
    data() {
        return {
        };
    },
    methods: {
        toBack(six) {
            this.$router.push({ name: six });
        }
    }
}

</script>
<style lang='scss'>
.backToHome {
    position: absolute;
    z-index: 1;
    top: 7%;
    left: 3%;
    width: 70px;
    height: 30px;
    background: url("../assets/image/返回键.png") no-repeat;
    background-size: 100% 100%;
}
</style>