<!-- 日期 -->
<template>
    <div class="dateFrame " :style="`top:${top}px;right:${right}px;`">
        <el-row>
            <el-col :span="17" :offset="1">
                <div class="dateFrame-data">
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                    </el-date-picker>
                </div>
            </el-col>

            <el-col :span="4" style="margin-left:5px">
                <div class="dateFrame-icon ">

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'date',
    props: [
        "top",
        "right",
        "url",
        "data",
    ],
    data() {
        return {
            date: "",
            value1: "",
        };
    },
    mounted() {
        this.date = new Date().toLocaleString().split(" ")[0].replace(/\//g, "-");
    },
}

</script>
<style  lang="scss">
.el-input__inner {
    height: 32px !important;
    font-size: 18px;
    border: 1px solid rgb(1, 88, 119) !important;
}

input[placeholder="选择日期" i].el-input__inner {
    color: rgb(69, 204, 248) !important;
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
.el-date-picker__header-label {
    color: #fff !important;
}
.el-input__icon {
    line-height: 31px;
    color: rgb(69, 204, 248) !important;
}

.el-date-table td.current:not(.disabled) span {
    color: #fff;
    background-color: rgb(69, 204, 248) !important;
}
</style>