import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
    //存放数据
    state: {
        weather: {},
        deviceIdArr: [
            "dev_wuji_cdb11012cb674a189324b0e7ffc6fb49",
            "dev_wuji_6f2ef3bca16845fd8d5c063b0834918c",
            "dev_wuji_4194ffdf143646fda85a8211f6a0b757",
            "dev_wuji_36ccc0be0e064379b8778f03cb8bcb39",
            "dev_wuji_dabcdff28b11418a9e3def4e1c3b83f6",
            "dev_wuji_2b49ab2794a54e6f8dc140a8970845ae",
            "dev_wuji_e3eb868c8319485caa76de30a1faecbe",
            "dev_wuji_6a59c1925e2547f3963fa23bd2df91e3",
            "dev_wuji_0c8d64d39d494df5aa8bb8397d8e66b3",
            "dev_wuji_fd4d4619bf2f4ae580671f18ca4beed2",
            "dev_wuji_b76b300a4f0845b58481350a8b588284",
            "dev_wuji_6c78c0147c6b4885b0759bf74c66039f",
            "dev_wuji_585de886ce0a4a8795bb1260e389273e",
        ],
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
