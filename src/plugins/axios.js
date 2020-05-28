"use strict";
/**
 *  封装axios拦截器
 *
 */
import axios from "axios";

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_URL,
    timeout: 5000, // 请求超时时间
});

//request请求拦截器
service.interceptors.request.use(
    (config) => {
        // if (store.getters.token) {
        // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        // config.headers["Access-Control-Allow-Origin"] = "*";
        // console.log(config);
        return config;
    },
    (error) => {
        // Do something with request error
        // console.log(error); // for debug
        Promise.reject(error);
    }
);

// response响应拦截器
service.interceptors.response.use(
    (response) => {
        console.log(response);
        return response.data;
    },
    (error) => {
        // 请求失败回调
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        //
        alert("接口访问失败");
        return Promise.reject(error);
    }
);

export default service;
