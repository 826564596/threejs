import Vue from "vue";
import VueRouter from "vue-router";
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
        path: "/eight",
        name: "eight",
        component: () => import("../views/eight.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
