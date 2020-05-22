import Vue from "vue";
import VueRouter from "vue-router";
import one from "../views/one.vue";
import two from "../views/two.vue";
import three from "../views/three.vue";
import four from "../views/four.vue";
import five from "../views/five.vue";
import six from "../views/six.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "three",
        component: six,
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
