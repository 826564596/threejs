import Vue from "vue";
import VueRouter from "vue-router";
import six from "../views/six.vue";
import seven from "../views/seven.vue";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: login,
        meta: {
            keepAlive: false, //导航栏在该页面显示
        },
    },
    {
        path: "/six",
        name: "six",
        component: six,
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
    },

    {
        path: "/seven",
        name: "seven",
        component: seven,
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
    },

    //生产监控
    {
        path: "/productionMonitoring",
        name: "productionMonitoring",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/productionMonitoring.vue"),
    },
    //设备管理
    {
        path: "/deviceManagement",
        name: "deviceManagement",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/deviceManagement.vue"),
    },
    //工艺文件
    {
        path: "/processDocuments",
        name: "processDocuments",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/processDocuments.vue"),
    },
    //任务派发
    {
        path: "/taskDistribution",
        name: "taskDistribution",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/taskDistribution.vue"),
    },
    //生产报表
    {
        path: "/productionReport",
        name: "productionReport",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/productionReport.vue"),
    },
    //系统设备
    {
        path: "/systemSetting",
        name: "systemSetting",
        meta: {
            keepAlive: true, //导航栏在该页面显示
        },
        component: () => import("../views/systemSetting.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
