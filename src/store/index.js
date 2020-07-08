import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
    //存放数据
    state: {
        weather: {},
        deviceIdArr: [
            { deviceId: "dev_wuji_cdb11012cb674a189324b0e7ffc6fb49", deviceName: "鞋材激光3D雕刻工位1" },
            { deviceId: "dev_wuji_6f2ef3bca16845fd8d5c063b0834918c", deviceName: "鞋材激光3D雕刻工位2" },
            { deviceId: "dev_wuji_4194ffdf143646fda85a8211f6a0b757", deviceName: "鞋材激光3D雕刻工位3" },
            { deviceId: "dev_wuji_36ccc0be0e064379b8778f03cb8bcb39", deviceName: "鞋材激光3D雕刻工位4" },
            { deviceId: "dev_wuji_dabcdff28b11418a9e3def4e1c3b83f6", deviceName: "鞋材激光3D雕刻工位5" },
            { deviceId: "dev_wuji_2b49ab2794a54e6f8dc140a8970845ae", deviceName: "鞋材激光3D雕刻工位6" },
            { deviceId: "dev_wuji_e3eb868c8319485caa76de30a1faecbe", deviceName: "鞋材激光3D雕刻工位7" },
            { deviceId: "dev_wuji_6a59c1925e2547f3963fa23bd2df91e3", deviceName: "鞋材激光3D雕刻工位8" },
            { deviceId: "dev_wuji_0c8d64d39d494df5aa8bb8397d8e66b3", deviceName: "鞋材激光3D雕刻工位9" },
            { deviceId: "dev_wuji_fd4d4619bf2f4ae580671f18ca4beed2", deviceName: "鞋材激光3D雕刻工位10" },
            { deviceId: "dev_wuji_b76b300a4f0845b58481350a8b588284", deviceName: "鞋材激光3D雕刻工位11" },
            { deviceId: "dev_wuji_6c78c0147c6b4885b0759bf74c66039f", deviceName: "鞋材激光3D雕刻工位12" },
            { deviceId: "dev_wuji_585de886ce0a4a8795bb1260e389273e", deviceName: "鞋材激光3D雕刻工位13" },
            { deviceId: "dev_test_ad7528b86fcd44f4a4cacf06733c07de", deviceName: "鞋材激光3D雕刻工位14" },
        ],
        a: 1,
        websocket: null, //websocket变量
        websocketData: null, //onmessage 返回的数据
    },
    //可以用来像页面传递异步数据
    //页面通过 this.$store.getters.weather获取
    getters: {
        weather(state) {
            return state.weather;
        },
        STAFF_UPDATE(state) {
            return state.websocket;
        },
    },
    //存放同步函数方法
    mutations: {
        WEBSOCKET_INIT(state, websocket) {
            state.websocket = websocket;
        },
        //将接收到的数据赋值
        WEBSOCKET_REIVE(state, data) {
            state.websocketData = data;
        },
    },
    //存放异步函数方法
    actions: {
        //存放天气函数避免每个页面重复访问

        STAFF_WEBSOCKET({ commit }) {
            // console.log(state.a);
            const wsuri = "ws://27.150.173.9:9002/ws/ParaQry";
            commit("WEBSOCKET_INIT", new WebSocket(wsuri));
            this.state.websocket.onopen = function() {
                console.log("连接成功！");
            };
            this.state.websocket.οnerrοr = function(e) {
                //错误
                console.log("ws错误!");
                console.log(e);
            };
            //websocket与后端链接的数据，为异步链接的方式！
            this.state.websocket.onmessage = function(callBack) {
                console.log(callBack);
                commit("WEBSOCKET_REIVE", callBack.websocketData);
            };
        },
    },
    modules: {},
});
