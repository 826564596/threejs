import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";
import axios from "./plugins/axios";
import "./plugins/element.js";
import "./plugins/echarts.js";
//组件
import weather from "@/components/weather";
import login from "@/components/login";
import titles from "@/components/title";
import qrcode from "@/components/qrcode";
import bottomText from "@/components/bottomText";
import tarbar from "@/components/tarbar";
import date from "@/components/date";
import operatingDay from "@/components/operatingDay";
import calendar from "@/components/calendar";
import backToHome from "@/components/backToHome";

Vue.component("weather", weather);
Vue.component("login", login);
Vue.component("titles", titles);
Vue.component("qrcode", qrcode);
Vue.component("bottomText", bottomText);
Vue.component("tarbar", tarbar);
Vue.component("date", date);
Vue.component("operatingDay", operatingDay);
Vue.component("calendar", calendar);
Vue.component("backToHome", backToHome);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
