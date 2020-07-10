<!-- 工艺文件下拉框 -->
<template>
    <div class=" buttonAndText" :style="`width:${width}px`">

        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">使用范围：</div>
            <div class="dropdown" style="width:150px">
                <span v-if="TechCtlTypeList.length>0"> {{ TechCtlTypeList[TechCtlTypeListIndex].f_NAME}}</span>
                <div class="dropdown-content" style="min-width:150px">
                    <div v-for="(item,index) in TechCtlTypeList" :key="index" @click="choseItem1(index)">{{item.f_NAME}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;" v-show="TechCtlTypeList.length > 0 && TechCtlTypeList[TechCtlTypeListIndex].f_VAL == 1">
            <div class="dropdown-text">终端列表：</div>
            <div class="dropdown" style="width:250px">
                <span v-if="TerminalTree.length>0"> {{TerminalTree[TerminalTreeIndex].label}}</span>
                <div class="dropdown-content" style="min-width:250px">
                    <div v-for="(item,index) in TerminalTree" :key="index" @click="choseItem2(index)">{{item.label}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;" v-show="TechCtlTypeList.length > 0 && TechCtlTypeList[TechCtlTypeListIndex].f_VAL == 2">
            <div class="dropdown-text">设备列表：</div>
            <div class="dropdown" style="width:250px">
                <span v-if="DeviceTree.length>0"> {{DeviceTree[DeviceTreeIndex].label}}</span>
                <div class="dropdown-content" style="min-width:250px">
                    <div v-for="(item,index) in DeviceTree" :key="index" @click="choseItem3(index)">{{item.label}}</div>
                </div>
            </div>
        </div>
        <!-- <div class="dropdown">
            {{this.$store.state.deviceIdArr[index].deviceName}}
            <div class="dropdown-content" ref="dropdown">
                <div v-for="(item,index) in this.$store.state.deviceIdArr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
            </div>
        </div> -->

        <div class="">
            <button class="buttonAndText-button" @click="search">搜索</button>
        </div>
        <div class="">
            <button class="buttonAndText-button" @click="issue">下发</button>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
import { Alert, Message } from "element-ui";
export default {
    name: "dropdownFlie",
    props: ["url", "flieData"],
    data() {
        return {
            index: 0,
            width: 470,
            TechCtlTypeList: [], // 工艺文件使用范围
            TechCtlTypeListIndex: 0, // 工艺文件使用范围

            TerminalTree: [],//终端列表
            TerminalTreeIndex: 0,//终端列表

            DeviceTree: [],//设备列表
            DeviceTreeIndex: 0,//设备列表


        };
    },

    created() {
        let that = this;
        this.arr = this.$store.state.deviceIdArr;

        this.axios.all([
            this.$axios.post("api/DDC/TechFile/TechCtlTypeList"),
        ]).then(this.axios.spread((TechCtlTypeList) => {
            that.TechCtlTypeList = TechCtlTypeList;

        })).catch(error => {

        })



    },
    methods: {
        choseItem(index) {
            this.index = index;

        },
        choseItem1(index) {
            let that = this;
            this.TechCtlTypeListIndex = index;
            let obj = {
                username: "wuji"
            }
            //如果为通用
            if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 0) {
                this.width = 470;


            }
            //如果为终端内部
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 1) {
                this.width = 820;
                this.$axios.post("api/DDC/Terminal/TerminalTree" + utils.formatQueryStr(obj)).then(res => {
                    that.TerminalTree = res[0].children;
                }).catch(error => {

                })

            }
            //如果为设备专用
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 2) {
                this.width = 820;
                this.$axios.post("api/DDC/Terminal/DeviceTree" + utils.formatQueryStr(obj)).then(res => {
                    console.log(res);
                    that.DeviceTree = res[0].children;
                }).catch(error => {

                })
            }

            // this.$axios.post("api/DDC/DeviceChk/QueryChkTypeList" + utils.formatQueryStr(obj)).then(res => {
            //     that.QueryChkTypeList = res;
            // }).catch(error => {

            // })
        },

        choseItem2(index) {
            this.TerminalTreeIndex = index;
        },
        choseItem3(index) {
            this.DeviceTreeIndex = index;
        },
        search() {
            let that = this;
            let obj = {
                ctltype: this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL,
                oper: "wuji",
                pageindex: 0,
                pagesize: 15,
            }
            if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 0) {
                this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
                    console.log(res);
                    that.$emit("update:flieData", res.Rows);
                }
                ).catch(error => {

                })

            }
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 1) {
                this.width = 470;


            }
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].f_VAL == 2) {
                this.width = 470;


            }


        },
        issue() {

        }
    }
}

</script>
<style>
[v-cloak] {
    display: none;
}
</style>