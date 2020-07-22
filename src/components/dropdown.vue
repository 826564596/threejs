<!-- 设备点检下拉菜单 -->
<template>
    <div class=" buttonAndText">
        <div class="dropdown">
            {{this.$store.state.deviceIdArr[index].deviceName}}
            <div class="dropdown-content" ref="dropdown">
                <div v-for="(item,index) in this.$store.state.deviceIdArr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
            </div>
        </div>
        <div>
            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">点检大类：</div>
            <div class="dropdown" style="width:150px">
                <span v-if="SpcTypeList.length>0"> {{SpcTypeList[SpcTypeIndex].F_NAME}}</span>
                <div class="dropdown-content" style="min-width:150px">
                    <div v-for="(item,index) in SpcTypeList" :key="index" @click="choseItem1(index)">{{item.F_NAME}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">点检类型：</div>
            <div class="dropdown" style="width:150px;">
                <div v-if="QueryChkTypeList.length > 0" class="text-overflow ">
                    {{QueryChkTypeList[QueryChkTypeIndex].F_CHKTYPE}}

                </div>
                <div class="dropdown-content" style="min-width:150px;">
                    <div v-for="(item,index) in QueryChkTypeList" :key="index" @click="choseItem3(index)">{{item.F_CHKTYPE}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">周期：</div>
            <div class="dropdown" style="width:100px">
                <span v-if="SpcTypeList.length>0"> {{PeriodTypeList[PeriodTypeIndex].F_NAME}}</span>
                <div class="dropdown-content" style="min-width:100px">
                    <div v-for="(item,index) in PeriodTypeList" :key="index" @click="choseItem2(index)">{{item.F_NAME}}</div>
                </div>
            </div>
        </div>
        <div class="">
            <button class="buttonAndText-button" @click="search">搜索</button>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
import { Alert, Message } from "element-ui";
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
            SpcTypeList: [], // 点检大类
            SpcTypeIndex: 0, // 点检大类
            PeriodTypeList: [],//周期
            PeriodTypeIndex: 0,//周期
            QueryChkTypeList: [],//点检类型
            QueryChkTypeIndex: 0,//点检类型



        };
    },

    mounted() {
        let that = this;
        this.arr = this.$store.state.deviceIdArr;
        this.axios.all([
            this.$axios.post("api/DDC/DeviceChk/SpcTypeList"),
            this.$axios.post("api/DDC/DeviceChk/PeriodTypeList"),
        ]).then(this.axios.spread((SpcTypeList, PeriodTypeList) => {
            that.SpcTypeList = SpcTypeList;
            that.PeriodTypeList = PeriodTypeList;
        })).catch(error => {

        })

    },
    methods: {
        choseItem(index) {
            this.index = index;
            this.SpcTypeIndex = 0;
            this.PeriodTypeIndex = 0;
            this.QueryChkTypeList = [];
            this.value2 = "";
        },

        choseItem1(index) {
            let that = this;
            this.SpcTypeIndex = index;
            let obj = {
                deviceid: this.$store.state.deviceIdArr[this.index].deviceId,
                spctype: this.SpcTypeList[this.SpcTypeIndex].F_KEY,
            }
            this.$axios.post("api/DDC/DeviceChk/QueryChkTypeList" + utils.formatQueryStr(obj)).then(res => {
                that.QueryChkTypeList = res;
            }).catch(error => {

            })
        },

        choseItem2(index) {
            this.PeriodTypeIndex = index;
        },
        choseItem3(index) {
            this.QueryChkTypeIndex = index;
        },
        search() {
            let that = this;
            let startDate = utils.dateToDay(this.value2[0]);
            let endDate = utils.dateToDay(this.value2[1]);
            let obj = {
                deviceid: this.$store.state.deviceIdArr[this.index].deviceId,
                begindate: startDate,
                enddate: endDate,
                spctype: this.SpcTypeList[this.SpcTypeIndex].F_KEY,
                chktype: this.QueryChkTypeList[this.QueryChkTypeIndex].F_CHKTYPE,
                chkperiod: this.PeriodTypeList[this.PeriodTypeIndex].F_VAL,
                pageindex: 0,
                pagesize: 15,
            }
            this.$axios.post("api/DDC/DeviceChk/QueryChkRecdList" + utils.formatQueryStr(obj)).then(res => {
                if (res.Rows.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                for (let i of res.Rows) {
                    i.F_chkrst = i.F_chkrst == "0" ? "异常" : "通过";
                }
                this.$emit("update:tableData", res.Rows);
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
.dropdown-text {
    color: rgb(69, 204, 248);
    font-size: 18px;
}

.el-date-editor--daterange.el-input__inner {
    width: 300px;
}

.el-message-box {
    background: url("../assets/image/弹窗.png") no-repeat;
    background-size: 100% 100%;
    min-height: 200px;
    width: 400px;
    border: none;
}

.el-message-box__title,
.el-message-box__headerbtn .el-message-box__close {
    color: rgb(69, 204, 248);
    font-size: 20px;
}
.el-message-box__title {
    text-align: center;
}
.el-message-box__header {
    padding-top: 30px;
}

.el-message-box__content {
    color: rgb(69, 204, 248);
    font-size: 16px;
}

.el-message-box__btns {
    padding-top: 50px;
}

.el-button--primary,
.el-button--primary:hover {
    color: rgb(92, 214, 254);
    background-color: rgb(1, 88, 119);
    border: 1px solid rgb(92, 214, 254);
}
.el-date-range-picker__time-header > .el-icon-arrow-right {
    color: rgb(92, 214, 254);
}
.el-date-range-picker__time-header {
    border-bottom: 1px solid rgb(92, 214, 254);
}
.el-picker-panel__footer {
    border-top: 1px solid rgb(92, 214, 254);
    background-color: rgba(1, 88, 119, 0.8);
}
.el-time-panel {
    background-color: rgba(1, 88, 119, 1);
    border: 1px solid rgb(92, 214, 254);
}
.el-time-spinner__item.active:not(.disabled) {
    color: rgb(92, 214, 254);
}
.el-time-spinner__item {
    background-color: rgba(1, 88, 119, 1);
    color: #fff;
}

.el-time-spinner__item:hover:not(.disabled):not(.active) {
    background: rgba(1, 88, 119, 0.5);
    cursor: pointer;
}
.el-time-panel__footer {
    border-top: 1px solid rgb(92, 214, 254);
}

.el-time-panel__btn,
.el-time-panel__btn.confirm {
    color: rgb(92, 214, 254);
}
.el-date-editor .el-range-input {
    width: 100%;
}

.el-popper[x-placement^="top"] .popper__arrow {
    border-top-color: rgb(92, 214, 254);
}
.el-popper[x-placement^="top"] .popper__arrow::after {
    border-top-color: rgb(92, 214, 254);
}
.el-button--text {
    color: rgb(92, 214, 254);
}
</style>