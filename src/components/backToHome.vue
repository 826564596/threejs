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
.backToHome:hover {
    animation: mymovea 1s infinite;
}
@keyframes mymovea {
    0% {
        transform: translate(-0px);
        /*开始为原始大小*/
    }

    20% {
        transform: translate(-5px);
        /*放大1.1倍*/
    }

    40% {
        transform: translate(-10px);
    }

    60% {
        transform: translate(-15px);
    }
    80% {
        transform: translate(-10px);
    }

    100% {
        transform: translate(-5px);
    }
}
</style>