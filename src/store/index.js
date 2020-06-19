import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
    //存放数据
    state: {
        weather: {},
    },
    //可以用来像页面传递异步数据
    //页面通过 this.$store.getters.weather获取
    getters: {
        weather(state) {
            return state.weather;
        },
    },
    //存放同步函数方法
    mutations: {
        setWeather(state, weather) {
            return (state.weather = weather);
        },
    },
    //存放异步函数方法

    actions: {
        //存放天气函数避免每个页面重复访问
        getWeather({ commit }) {
            axios
                .get("https://www.tianqiapi.com/free/day?appid=56547279&appsecret=Ka5e7OMY")
                .then((response) => {
                    commit("setWeather", response);
                })
                .catch((error) => {
                    console.log("失败");
                });
        },
    },
    modules: {},
});
