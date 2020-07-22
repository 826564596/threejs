<!-- 任务派发下拉框 -->
<template>
    <div class=" buttonAndText" :style="`width:${width}px`">
        <div style="display:flex; align-items: center;">
            <div class="dropdown-text">使用范围：</div>
            <div class="dropdown" style="width:150px">
                <span v-if="TechCtlTypeList.length>0"> {{ TechCtlTypeList[TechCtlTypeListIndex].F_NAME}}</span>
                <div class="dropdown-content" style="min-width:150px">
                    <div v-for="(item,index) in TechCtlTypeList" :key="index" @click="choseItem1(index)">{{item.F_NAME}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;" v-show="TechCtlTypeList.length > 0 && TechCtlTypeList[TechCtlTypeListIndex].F_VAL == 1">
            <div class="dropdown-text">终端列表：</div>
            <div class="dropdown" style="width:250px">
                <span v-if="TerminalTree.length>0"> {{TerminalTree[TerminalTreeIndex].label}}</span>
                <div class="dropdown-content" style="min-width:250px">
                    <div v-for="(item,index) in TerminalTree" :key="index" @click="choseItem2(index)">{{item.label}}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; align-items: center;" v-show="TechCtlTypeList.length > 0 && TechCtlTypeList[TechCtlTypeListIndex].F_VAL == 2">
            <div class="dropdown-text">设备列表：</div>
            <div class="dropdown" style="width:250px">
                <span v-if="DeviceTree.length>0"> {{DeviceTree[DeviceTreeIndex].label}}</span>
                <div class="dropdown-content" style="min-width:250px">
                    <div v-for="(item,index) in DeviceTree" :key="index" @click="choseItem3(index)">{{item.label}}</div>
                </div>
            </div>
        </div>

        <div class="">
            <button class="buttonAndText-button" @click="search">搜索</button>
        </div>

        <el-dialog title="任务派发" :visible.sync="dialogTaskVisible">
            <div class="center">
                <el-form :model="form" :rules="rule">
                    <el-form-item label="产品名称" :label-width="formLabelWidth" prop="productname">
                        <el-input v-model="form.productname" size='mini' maxlength="16" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="产品型号" :label-width="formLabelWidth" prop="productmodel">
                        <el-input v-model="form.productmodel" size='mini' maxlength="16" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="计划产量" :label-width="formLabelWidth" prop="planworkload">
                        <el-input v-model="form.planworkload" size='mini' maxlength="16" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="设备名称" :label-width="formLabelWidth" prop="uploadDeviceTree">
                        <el-select multiple collapse-tags size="small" v-model="form.deviceids" placeholder="请选择设备名称" @change="multiple">
                            <el-option v-for="(item,index) of uploadDeviceTree" :key="index" :label="item.label" :value="item.id"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="时间" :label-width="formLabelWidth" prop="datetimerange">
                        <el-date-picker format="yyyy-MM-dd HH:mm:ss" v-model="value1" type="datetimerange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="负责人" :label-width="formLabelWidth" prop="chargeman">
                        <el-input v-model="form.chargeman" size='mini' maxlength="16" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="备注" :label-width="formLabelWidth" prop="desc">
                        <el-input v-model="form.desc" size='mini' maxlength="16" autocomplete="off"></el-input>
                    </el-form-item>

                </el-form>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="cancel(dialogTaskVisible = false)">取 消</el-button>
                <el-button type="primary" @click="submit(dialogTaskVisible = false)">确 定</el-button>
            </span>
        </el-dialog>

        <div class="">
            <button class="buttonAndText-button" @click="issue(dialogTaskVisible = true)">派发</button>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    name: "dropdownTask",
    props: ["url", "fileData", "fileId"],
    data() {
        return {
            index: 0,
            arr: [],
            startDate: '',//开始时间
            endDate: '',//结束时间
            value1: "",
            width: 470,

            TechCtlTypeList: [], // 工艺文件使用范围
            TechCtlTypeListIndex: 0, // 工艺文件使用范围

            TerminalTree: [],//终端列表
            TerminalTreeIndex: 0,//终端列表

            DeviceTree: [],//设备列表
            DeviceTreeIndex: 0,//设备列表

            dialogTaskVisible: false,
            formLabelWidth: '120px',
            form: {
                productname: '',//产品名称
                productmodel: '',//产品型号
                planworkload: '',//计划产量
                deviceids: '',//设备id
                begintime: '',//开始时间
                endtime: '',//结束时间
                chargeman: '',//负责人
                desc: '',//备注

            },
            uploadDeviceTree: [],//上传文件设备列表
            uploadDeviceTreeIndex: 0,//上传文件设备列表
            rule: {
                productname: [
                    { required: true, message: '产品名称不能为空' }
                ],
                productmodel: [
                    { required: true, message: '产品型号不能为空' }
                ],
                planworkload: [
                    { required: true, message: '计划产量不能为空' }
                ],
                uploadDeviceTree: [
                    { required: true, message: '设备名称不能为空' }
                ],
                datetimerange: [
                    { required: true, message: '时间不能为空' }
                ],
                chargeman: [
                    { required: true, message: '负责人不能为空' }
                ],


            }
        };
    },
    created() {
        let that = this;
        this.axios.all([
            this.$axios.post("api/DDC/TechFile/TechCtlTypeList"),
        ]).then(this.axios.spread((TechCtlTypeList) => {
            that.TechCtlTypeList = TechCtlTypeList;

        })).catch(error => {

        })
    },
    mounted() {
        let that = this;
        this.arr = this.$store.state.deviceIdArr;

        let obj = {
            ctltype: 0,
            oper: "wuji",
            pageindex: 0,
            pagesize: 15,
        }

        this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
            if (res.Rows.length == 0) {
                this.$messageBox('暂无数据', '提示', {
                    confirmButtonText: '确定',
                });
            }
            that.$emit("update:fileData", res.Rows);
        }
        ).catch(error => {

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
            if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 0) {
                this.width = 470;


            }
            //如果为终端内部
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 1) {
                this.width = 820;
                this.$axios.post("api/DDC/Terminal/TerminalTree" + utils.formatQueryStr(obj)).then(res => {
                    that.TerminalTree = res[0].children;
                }).catch(error => {

                })

            }
            //如果为设备专用
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 2) {
                this.width = 820;
                this.$axios.post("api/DDC/Terminal/DeviceTree" + utils.formatQueryStr(obj)).then(res => {
                    console.log(res);
                    that.DeviceTree = res[0].children;
                }).catch(error => {

                })
            }
        },
        choseItem2(index) {
            this.TerminalTreeIndex = index;
        },
        choseItem3(index) {
            this.DeviceTreeIndex = index;
        },
        //搜索
        search() {
            let that = this;
            let obj = {
                ctltype: this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL,
                oper: "wuji",
                pageindex: 0,
                pagesize: 15,
            }
            if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 0) {
                this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
                    if (res.Rows.length == 0) {
                        this.$messageBox('暂无数据', '提示', {
                            confirmButtonText: '确定',
                        });
                    }
                    that.$emit("update:fileData", res.Rows);
                }
                ).catch(error => {

                })

            }
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 1) {
                obj.MAC = this.TerminalTree[this.TerminalTreeIndex].id;
                this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
                    if (res.Rows.length == 0) {
                        this.$messageBox('暂无数据', '提示', {
                            confirmButtonText: '确定',
                        });
                    }
                    that.$emit("update:fileData", res.Rows);
                }
                ).catch(error => {

                })

            }
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 2) {
                obj.deviceid = this.DeviceTree[this.DeviceTreeIndex].id;
                this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
                    if (res.Rows.length == 0) {
                        this.$messageBox('暂无数据', '提示', {
                            confirmButtonText: '确定',
                        });
                    }
                    that.$emit("update:fileData", res.Rows);
                }
                ).catch(error => {

                })

            }


        },
        //派发
        issue() {

            let obj = {
                username: "wuji"
            }
            this.$axios.post("api/DDC/Terminal/DeviceTree" + utils.formatQueryStr(obj)).then(res => {
                this.uploadDeviceTree = res[0].children;
            }).catch(error => {

            })
        },
        //设备多选函数
        multiple(val) {
            this.deviceId = val;
        },
        cancel() {
            this.form = {
                productname: '',//产品名称
                productmodel: '',//产品型号
                planworkload: '',//计划产量
                deviceids: '',//设备id
                begintime: '',//开始时间
                endtime: '',//结束时间
                chargeman: '',//负责人
                desc: '',//备注
            };
            this.value1 = "";

        },
        //确认 
        submit() {
            let obj = JSON.parse(JSON.stringify(this.form));

            obj.begintime = utils.dateToDayTime(this.value1[0]);
            obj.endtime = utils.dateToDayTime(this.value1[1]);


            obj.planworkload = parseInt(obj.planworkload);
            obj.techfileid = "";
            console.log(obj.begintime);
            console.log(obj.endtime);

            //如果选则工艺文件
            if (this.fileId) {
                obj.techfileid = this.fileId;
            }
            // delete obj.begintime;
            // delete obj.endtime;
            obj.date = utils.dateToDay(new Date());
            obj.deviceids = this.deviceId.join(",");
            this.$axios.post("api/DDC/ProductTask/ProductTaskIssue", obj).then(res => {
                if (res.success) {
                    this.$messageBox('任务派发成功', '提示', {
                        confirmButtonText: '确定',
                    });
                }
            }).catch(error => {

            })
        }

    }
}

</script>
<style  lang="scss">
.el-dialog {
    background: url("../assets/image/弹窗.png") no-repeat;
    background-size: 100% 100%;
}

.el-dialog__header {
    // height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 88px;
}
.el-dialog__title {
    color: rgb(69, 204, 248);
}

.el-dialog__headerbtn .el-dialog__close {
    color: rgb(69, 204, 248);
    font-size: 30px;
}
.el-dialog__headerbtn {
    top: 9%;
    right: 4%;
}

.el-dialog__footer {
    height: 120px;
}

.el-button--default,
.el-button--primary,
.el-button--default:hover,
.el-button--primary:hover {
    color: #5cd6fe !important;
    background-color: #015877 !important;
    border: 0.01818rem solid #5cd6fe;
}
.el-button + .el-button {
    margin-left: 10px;
    margin-right: 10px;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(69, 204, 248);
    border-color: rgb(69, 204, 248);
}

.el-form-item__label {
    color: rgb(69, 204, 248);
}
.el-input__inner {
    width: 100%;
    color: rgb(69, 204, 248);
    font-size: 16px;
}

.el-input__inner::-webkit-input-placeholder {
    color: rgb(69, 204, 248);
    font-size: 16px;
}

.el-select-dropdown__list {
    background-color: rgba(1, 88, 119, 0.8);
    border: 1px solid #5cd6fe;
}

.el-scrollbar__wrap {
    background-color: rgba(1, 88, 119, 1);
}

.el-select-dropdown__item {
    color: rgb(69, 204, 248);
}

.el-select-dropdown__item:hover {
    color: #5cd6fe;
    background-color: #015877;
}

.el-select-dropdown {
    border: 1px solid #5cd6fe;
}

.el-select-dropdown__item.selected {
    color: #5cd6fe;
    background-color: #015877;
    font-weight: 700;
}
.el-upload__tip {
    font-size: 12px;
    color: #5cd6fe;
    margin-top: 7px;
}

.el-upload-list__item-name {
    color: #5cd6fe;
}

.el-upload-list__item-name [class^="el-icon"] {
    color: #5cd6fe;
}

.el-tag.el-tag--info {
    background-color: rgba(1, 88, 119, 0);
    border-color: #5cd6fe;
    color: #5cd6fe;
}
.el-tag.el-tag--info .el-tag__close {
    color: #5cd6fe;
}
.el-select .el-tag__close.el-icon-close {
    background-color: rgba(1, 88, 119, 0);
    border: 1px solid #5cd6fe;
    color: #5cd6fe;
}

.el-select .el-tag__close.el-icon-close:hover {
    background-color: #5cd6fe;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
    color: #5cd6fe;
    background-color: #015877;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover {
    background-color: #015877;
}
</style>