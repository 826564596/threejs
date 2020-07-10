<!-- 任务派发下拉框 -->
<template>
    <div class=" buttonAndText" style="width:720px">
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
        <div class="">
            <button class="buttonAndText-button" @click="search">搜索</button>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    name: "dropdownTask",
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
        let that = this;
        this.arr = this.$store.state.deviceIdArr;
    },
    methods: {

        choseItem(index) {
            this.index = index;
        },
        choseItem2(index) {
            this.PeriodTypeIndex = index;
        },
        search() {
            let that = this;
            let startDate = utils.dateToDay(this.value2[0]);
            let endDate = utils.dateToDay(this.value2[1]);
            let obj = {
                deviceid: this.$store.state.deviceIdArr[this.index].deviceId,
                begindate: startDate,
                enddate: endDate,
            }
            this.$axios.post("api/DDC/DeviceWorkStatic/DeviceMTRecd" + utils.formatQueryStr(obj)).then(res => {
                console.log(res);
                if (res.Rows.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                this.$emit("update:tableData", res.Rows);
            }).catch(error => {

            })
        },
    }
}

</script>
<style  lang="scss">
</style>