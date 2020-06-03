<!-- 天气时间 -->
<template>
    <div class="grid-content">
        <img class="weather-img" src="../../public/image/rain.png" />
        <div>{{weather.tem}}℃</div>
        <img class="date-img" src="../../public/image/日历.png" />
        <div style="margin-right:10px">{{date}}</div>
        <div>{{weather.city}}</div>
    </div>
</template>

<script>
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

    components: {},

    computed: {},

    mounted() {
        this.getWeather();
        setInterval(() => {
            this.date = new Date().toLocaleString();
        }, 100)
    },

    methods: {
        getWeather() {
            this.$axios.get("https://www.tianqiapi.com/free/day?appid=56547279&appsecret=Ka5e7OMY").then(response => {
                console.log(response);
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