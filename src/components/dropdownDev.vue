<!-- 生产报表下拉框 -->
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
    name: "dropdownDev",
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
        let a = utils.dateToDay(new Date());
        this.$axios.post("newApi/wuji/Device/ProductionStatement", {
            "device": {
                "id": "wuji"
            },
            "date_period": {
                "start_date": "2020-06-01",
                "end_date": a
            }
        }).then(res => {
            console.log(res);

            if (res.length == 0) {
                this.$messageBox('暂无数据', '提示', {
                    confirmButtonText: '确定',
                });
            }
            res.sort((a, b) => {
                return a.name.substr(10, a.name.length - 1) - b.name.substr(10, b.name.length - 1);
            })
            for (let i of res) {
                i.run_duration = (i.run_duration / 1000 / 60).toFixed(5);
                i.free_duration = (i.free_duration / 1000 / 60).toFixed(5);

                i.stop_duration = (i.stop_duration / 1000 / 60).toFixed(5);
                i.warn_duration = (i.warn_duration / 1000 / 60).toFixed(5);

            }
            this.$emit("update:tableData", res);
        }).catch(error => {

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
            this.$axios.post("newApi/wuji/Device/ProductionStatement", {
                "device": {
                    "id": that.$store.state.deviceIdArr[that.index].deviceId
                },
                "date_period": {
                    "start_date": startDate,
                    "end_date": endDate
                }
            }).then(res => {
                console.log(res);

                if (res.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                this.$emit("update:tableData", res);
            }).catch(error => {

            })
        },
    }
}

</script>
<style  lang="scss">
</style>