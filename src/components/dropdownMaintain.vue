<!-- 设备维修下拉框 -->
<template>
    <div class=" buttonAndText" style="width:900px">
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
        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">周期：</div>
            <div class="dropdown" style="width:100px">
                <span v-if="PeriodTypeList.length>0"> {{PeriodTypeList[PeriodTypeIndex].F_NAME}}</span>
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
export default {
    name: "dropdownMaintain",
    props: ["url", "tableData", "isNeedDate"],
    data() {
        return {
            index: 0,
            arr: [],
            startDate: '',//开始时间
            endDate: '',//结束时间
            value2: "",
            PeriodTypeList: [],//周期
            PeriodTypeIndex: 0,//周期




        };
    },

    mounted() {
        let that = this;
        this.arr = this.$store.state.deviceIdArr;
        let obj = {
            MAC: "wuji"
        }
        this.axios.all([
            this.$axios.post("api/DDC/DeviceChk/PeriodTypeList"),
            this.$axios.post("api/DDC/DeviceFault/FaultList" + utils.formatQueryStr(obj)),
        ]).then(this.axios.spread((PeriodTypeList, FaultList) => {
            console.log(FaultList)
            that.PeriodTypeList = PeriodTypeList;
        })).catch(error => {

        })

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
                chkperiod: this.PeriodTypeList[this.PeriodTypeIndex].F_VAL,
            }
            this.$axios.post("api/DDC/DeviceChk/QueryMTRecd" + utils.formatQueryStr(obj)).then(res => {

                if (res.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                console.log(res);

                this.$emit("update:tableData", res);
            }).catch(error => {

            })
        },
    }
}

</script>
<style  lang="scss">
</style>