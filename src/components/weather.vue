<!-- 天气时间 -->
<template>
    <div class="grid-content">
        <img v-if="weather.wea_img =='xue'" class="weather-img" src="../assets/image/xue.png" />
        <img v-if="weather.wea_img =='lei'" class="weather-img" src="../assets/image/lei.png" />
        <img v-if="weather.wea_img =='shachen'" class="weather-img" src="../assets/image/shachen.png" />
        <img v-if="weather.wea_img =='wu'" class="weather-img" src="../assets/image/wu.png" />
        <img v-if="weather.wea_img =='bingbao'" class="weather-img" src="../assets/image/bingbao.png" />
        <img v-if="weather.wea_img =='yun'" class="weather-img" src="../assets/image/yun.png" />
        <img v-if="weather.wea_img =='yu'" class="weather-img" src="../assets/image/yu.png" />
        <img v-if="weather.wea_img =='yin'" class="weather-img" src="../assets/image/yin.png" />
        <img v-if="weather.wea_img =='qing'" class="weather-img" src="../assets/image/qing.png" />

        <div>{{weather.tem}}℃</div>
        <img class="date-img" src="../assets/image/日历.png" />
        <div style="margin-right:10px">{{date}}</div>
        <div>{{weather.city}}</div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    name: "weather",
    props: {

    },
    data() {
        return {
            date: new Date().toLocaleString(),
            weather: {},
        };
    },
    mounted() {
        this.getWeather();
        setInterval(() => {
            this.date = new Date().toLocaleString();
        }, 100)
    },

    methods: {
        getWeather() {
            // this.$store.dispatch("getWeather");
            // this.weather = this.$store.getters.weather;
            // this.weather = this.$store.state.weather;

            this.$axios.get("https://www.tianqiapi.com/free/day?appid=56547279&appsecret=Ka5e7OMY").then(response => {
                this.weather = response;
            }).catch(error => {
                console.log("失败");
            })
        }
    }
}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>