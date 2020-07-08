import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";
import $axios from "./plugins/axios";
import axios from "axios";
import socketApi from "./plugins/webScoket";
import "./plugins/element.js";
import "./plugins/echarts.js";
import cookies from "vue-cookies";
import utils from "./assets/utils/utils";

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
import dropdown from "@/components/dropdown";

// import dropdownMaintain from "@/components/dropdownMaintain";

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
Vue.component("dropdown", dropdown);
// Vue.component("dropdownMaintain", dropdownMaintain);

Vue.prototype.$axios = $axios;
Vue.prototype.$socketApi = socketApi;
Vue.prototype.$cookies = cookies;

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {
        //判断cookie是否生效
        if (cookies.get("userName") && cookies.get("password")) {
            next(
                $axios
                    .post(
                        "/api/DDC/User/Login" +
                            utils.formatQueryStr({
                                USERNAME: cookies.get("userName"),
                                PASSWD: cookies.get("password"),
                            })
                    )
                    .then((res) => {})
                    .catch((error) => {})
            );
        }
        //不生效则退回首页
        else {
            next({ path: "/" });
        }
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
