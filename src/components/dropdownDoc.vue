<!-- 设备档案下拉框 -->
<template>
    <div class=" buttonAndText" style="width:420px">
        <div class="dropdown" v-if="arr.length > 0">
            {{this.arr[index].deviceName}}
            <div class="dropdown-content">
                <div v-for="(item,index) in this.arr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
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
    name: "dropdownDoc",
    props: ["url", "tableData", "isNeedDate"],
    data() {
        return {
            index: 0,
            arr: [],
            value2: "",

        };
    },

    mounted() {
        let that = this;
        this.arr = JSON.parse(JSON.stringify(this.$store.state.deviceIdArr));
        this.arr.unshift({ deviceId: "", deviceName: "全部" });
    },
    methods: {

        choseItem(index) {
            this.index = index;
        },
        search() {
            let that = this;
            let obj = {
                MAC: "wuji",
                deviceid: this.arr[this.index].deviceId,
                pagesize: 15
            }
            this.$axios.post('api/DDC/Terminal/DeviceList' + utils.formatQueryStr(obj)).then((res) => {
                if (res.Rows.length == 0) {
                    this.$messageBox('暂无数据', '提示', {
                        confirmButtonText: '确定',
                    });
                }
                for (let i of res.Rows) {
                    i.F_STAT = i.F_STAT == "1" ? '启用' : "未启用";
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