<template>
    <div id="app">
        <!-- 标题图片登陆 -->
        <!-- 根据shouTitle参数判断login页是否要显示标题 -->

        <div v-if="$route.meta.keepAlive">
            <titles :screenWidth.sync="screenWidth" :screenHeight.sync="screenHeight"></titles>
            <router-view />
        </div>
        <router-view v-if="!$route.meta.keepAlive" />

    </div>
</template>
<script>
export default {
    data() {
        return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        }
    },
    mounted() {
        this.path = this.$route.path;
        window.onresize = () => {
            return this.onWindowResize();
        }
    },
    //监听路由变化
    watch: {
        $route(to, from) {
            this.path = to.path;
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
<style>
.img-title {
    z-index: 1;
    position: absolute;
    background-size: 100% 100%;
    background-image: url("./assets/image/title.png");
}

.grid-content {
    z-index: 1;
    border-radius: 4px;
    height: auto;
    min-height: 50px;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.weather-img {
    height: 40px;
    width: 40px;
    margin-right: 10px;
}
.date-img {
    margin-left: 20px;
    margin-right: 10px;
    height: 30px;
    width: 30px;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin: 0;
    padding: 0;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
