import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import "./plugins/element.js";
import "./plugins/echarts.js";
import weather from "@/components/weather";
import login from "@/components/login";
import titles from "@/components/title";
import qrcode from "@/components/qrcode";

Vue.component("weather", weather);
Vue.component("login", login);
Vue.component("titles", titles);
Vue.component("qrcode", qrcode);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
