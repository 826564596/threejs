<!-- 设备保养下拉框 -->
<template>
    <div>
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
        <div style="text-align:right">
            <el-pagination :pager-count="11" :current-page.sync="pageIndex" @current-change="currentChange" layout="prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>

</template>

<script>
import utils from "../assets/utils/utils";
export default {
    name: "dropdownProtect",
    props: ["url", "tableData", "isNeedDate"],
    data() {
        return {
            index: 0,
            arr: [],
            startDate: '',//开始时间
            endDate: '',//结束时间
            value2: "",
            total: 0,//数据总数
            pageIndex: 1,//分页页码

        };
    },

    mounted() {
        let that = this;
        this.arr = this.$store.state.deviceIdArr;
    },
    methods: {
        currentChange(val) {
            this.search(val - 1);
        },
        choseItem(index) {
            this.index = index;
        },
        choseItem2(index) {
            this.PeriodTypeIndex = index;
        },
        search() {
            let that = this;
            let startDate = utils.dateToDay(this.value2[0].clone());
            let endDate = utils.dateToDay(this.value2[1].clone());
            let obj = {
                deviceid: this.$store.state.deviceIdArr[this.index].deviceId,
                begindate: startDate,
                enddate: endDate,
                pageindex: typeof arguments[0] == 'number' ? arguments[0] : 0,
                pagesize: 10,
            }
            this.$axios.post("api/DDC/DeviceWorkStatic/DeviceMTRecd" + utils.formatQueryStr(obj)).then(res => {
                console.log(res);
                if (res.Rows.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                this.pageIndex = obj.pageindex + 1;
                this.total = parseInt(res.Counts);
                this.$emit("update:tableData", res.Rows);
            }).catch(error => {

            })
        },
    }
}

</script>
<style  lang="scss">
</style>