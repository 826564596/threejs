import Vue from "vue";
import VueRouter from "vue-router";
import one from "../views/one.vue";
import two from "../views/two.vue";
import three from "../views/three.vue";
import four from "../views/four.vue";
import five from "../views/five.vue";
import six from "../views/six.vue";
import seven from "../views/seven.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "six",
        component: six,
    },

    {
        path: "/seven",
        name: "seven",
        component: seven,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/about.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
