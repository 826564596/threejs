import Vue from "vue";

const echarts = require("echarts/lib/echarts");

require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/chart/pie");

// 引入提示框和title组件，图例
require("echarts/lib/component/graphic");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

Vue.prototype.$echarts = echarts;
