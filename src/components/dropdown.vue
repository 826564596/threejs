<!-- 下拉菜单 -->
<template>
    <div class=" buttonAndText">
        <div class="dropdown">
            {{this.$store.state.deviceIdArr[index].deviceName}}
            <div class="dropdown-content">
                <div v-for="(item,index) in this.$store.state.deviceIdArr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
            </div>
        </div>
        <div>
            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div div="">点检大类:</div>
        <div class="dropdown">
            <div class="dropdown-content">
                <div v-for="(item,index) in this.$store.state.deviceIdArr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
            </div>
        </div>

        <div class="">
            <button class="buttonAndText-button" @click="search">搜索</button>
        </div>

    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    name: "dropdown",
    props: ["url", "tableData", "isNeedDate"],
    data() {
        return {
            index: 0,
            arr: [],
            startDate: '',//开始时间
            endDate: '',//结束时间
            value2: "",
        };
    },

    mounted() {
        this.arr = this.$store.state.deviceIdArr;

    },
    methods: {
        choseItem(index) {
            this.index = index;
        },
        search() {
            let that = this;
            let startDate = utils.dateToDay(this.value2[0]);
            let endDate = utils.dateToDay(this.value2[1]);
            let obj = {
                deviceid: this.$store.state.deviceIdArr[this.index].deviceId,
                begindate: startDate,
                enddate: endDate
            }
            this.$axios.post("api/" + this.url + utils.formatQueryStr(obj)).then(res => {
                this.$emit("update:tableData", res);
            }).catch(error => {

            })
        },
    }
}

</script>
<style  lang="scss">
.el-input__inner {
    height: 32px !important;
    background-color: rgba(1, 1, 1, 0) !important;
    border: 1px solid rgb(1, 88, 119) !important;
}

.el-picker-panel__icon-btn {
    font-size: 17px !important;
}
.el-date-editor .el-range__icon {
    font-size: 14px;
    margin-left: -5px;
    color: rgb(92, 214, 254);
    float: left;
    line-height: 26px;
}
.el-range-separator {
    padding: 0 5px;
    line-height: 25px !important;
    width: 5%;
    color: rgb(92, 214, 254) !important;
}

.el-range-input {
    color: rgb(92, 214, 254) !important;
    background-color: rgba(92, 214, 254, 0);
    font-size: 18px !important;
}

.el-range-input::-webkit-input-placeholder {
    color: rgb(92, 214, 254) !important;

    font-size: 18px;
}
.el-date-editor .el-range__close-icon {
    font-size: 14px;
    color: rgb(92, 214, 254) !important;
    width: 25px;
    display: inline-block;
    line-height: 25px !important;
}
.el-picker-panel__icon-btn {
    color: rgb(92, 214, 254) !important;
}

.el-picker-panel {
    background-color: rgba(1, 88, 119, 0.8);
    color: #fff !important;
    border: 1px solid rgb(92, 214, 254);
}
.in-range {
    // background-color: #000 !important;
}
.start-date {
    // background-color: #000 !important;
}
.end-date {
    // background-color: #000 !important;
}

.el-date-table td.end-date span,
.el-date-table td.start-date span {
    background-color: rgb(69, 204, 248) !important;
}

.el-date-table td.in-range div,
.el-date-table td.in-range div:hover {
    background-color: rgba(69, 204, 248, 0.25) !important;
}
.available:hover {
    color: #fff !important;
}

.el-date-table th {
    color: #fff !important;
    border-bottom-color: rgb(69, 204, 248) !important;
}

.el-popper[x-placement^="bottom"] .popper__arrow {
    top: -7px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: rgb(69, 204, 248) !important;
}

.el-popper[x-placement^="bottom"] .popper__arrow::after {
    top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: rgb(69, 204, 248) !important;
}

.el-date-table td.next-month,
.el-date-table td.prev-month {
    color: rgb(134, 143, 150);
}

.el-date-range-picker__content.is-left {
    border-right: 1px solid rgb(69, 204, 248) !important;
}
</style>