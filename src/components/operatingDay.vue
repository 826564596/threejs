<!-- 运行天数 -->
<template>
    <div class="operatingDay">
        <div>
            {{operatingDay}}
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    data() {
        return {
            operatingDay: "001"
        };
    },



    mounted() {
        let now = new Date(); //当前日期
        let nowMonth = now.getMonth(); //当前月
        let nowYear = now.getFullYear(); //当前年
        let nowDay = now.getDay(); //当前年
        let end = new Date(nowYear, nowMonth, nowDay);
        let start = new Date(2020, 5, 1);//2020-06-01
        this.operatingDay = utils.differDate(start, end);//计算差值


    },

    methods: {}
}

</script>
<style lang="scss">
.operatingDay {
    height: 50px;
    width: 230px;
    position: absolute;
    bottom: 3%;
    right: 2%;
    background: url("../assets/image/天数线.png") no-repeat;
    background-size: 100% 100%;
    color: rgb(1, 220, 247);
    font-family: "方正粗倩简体";
    font-size: 45px;
    font-weight: bold;

    div {
        float: right;
        margin-top: -12px;
        margin-right: 10px;
    }
}
</style>