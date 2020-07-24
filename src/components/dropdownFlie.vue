<!-- 工艺文件下拉框 -->
<template>
    <div>
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
            <div class="">
                <button class="buttonAndText-button" @click="dialogUploadVisible = true">上传</button>
            </div>
            <div class="">
                <button class="buttonAndText-button" @click="dialogTableVisible = true">下发</button>
            </div>
            <!-- <div style="display:flex; align-items: center;">
            <div class="dropdown-text">下发设备：</div>
            <div class="dropdown">
                {{this.$store.state.deviceIdArr[index].deviceName}}
                <div class="dropdown-content" ref="dropdown">
                    <div v-for="(item,index) in this.$store.state.deviceIdArr" :key="index" @click="choseItem(index)">{{item.deviceName}}</div>
                </div>
            </div>
        </div> -->
            <!-- 设备列表弹窗 -->
            <el-dialog title="设备列表" :visible.sync="dialogTableVisible">
                <el-table :data="deviceArray" max-height="400" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column property="F_NAME" label="设备名" width="250"></el-table-column>
                    <el-table-column property="F_DEVICEID" label="设备id"></el-table-column>
                </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogTableVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submit(dialogTableVisible = false)">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 文件上传弹窗 -->
            <el-dialog title="文件上传" :visible.sync="dialogUploadVisible">
                <div class="center">
                    <el-form :model="form" :rules="rule">
                        <el-form-item label="工艺文件名称" :label-width="formLabelWidth" prop="techfilename">
                            <el-input v-model="form.techfilename" size='mini' maxlength="16" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="使用范围" :label-width="formLabelWidth" prop="ctltype">
                            <el-select v-model="form.ctltype" placeholder="请选择使用范围" @change="getRange">
                                <el-option v-for="(item,index) of TechCtlTypeList" :key="index" :label="item.F_NAME" :value="item.F_VAL"> </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="终端编号" :label-width="formLabelWidth" v-if="showRange == 1">
                            <el-select multiple size="small" v-model="form.ctltarget" placeholder="请选择终端编号">
                                <el-option v-for="(item,index) of uploadTerminalTree" :key="index" :label="item.label" :value="item.id"> </el-option>

                            </el-select>
                        </el-form-item>

                        <el-form-item label="设备名称" :label-width="formLabelWidth" v-if="showRange == 2">
                            <el-select multiple size="small" collapse-tags v-model="form.ctltarget" placeholder="请选择设备名称" @change="multiple">
                                <el-option v-for="(item,index) of uploadDeviceTree" :key="index" :label="item.label" :value="item.id"> </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="文件" :label-width="formLabelWidth">
                            <el-upload class="upload-demo" action="http://27.150.173.9:9002/DDC/Image/SaveTechFile" :data="urlData" :on-preview="handlePreview" :on-success="success" :on-remove="handleRemove" :before-remove="beforeRemove" :before-upload="beforeAvatarUpload" multiple :limit="1"
                                :on-exceed="handleExceed" :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">文件大小不超过10mb</div>
                            </el-upload>
                        </el-form-item>

                    </el-form>
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="cancel(dialogUploadVisible = false)">取 消</el-button>
                    <el-button type="primary" @click="upload(dialogUploadVisible = false)">确 定</el-button>
                </span>
            </el-dialog>

        </div>

        <div style="text-align:right">
            <el-pagination :pager-count="11" :page-size="36" @current-change="currentChange" layout="prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>

</template>

<script>
import utils from "../assets/utils/utils";
import { Alert, Message } from "element-ui";
export default {
    name: "dropdownFlie",
    props: ["url", "fileData", "fileId", "deviceArray"],
    data() {
        return {
            index: 0,
            width: 570,
            TechCtlTypeList: [], // 工艺文件使用范围
            TechCtlTypeListIndex: 0, // 工艺文件使用范围

            TerminalTree: [],//终端列表
            TerminalTreeIndex: 0,//终端列表

            DeviceTree: [],//设备列表
            DeviceTreeIndex: 0,//设备列表

            dialogTableVisible: false,//设备列表显示参数
            dialogUploadVisible: false,//文件上传显示参数

            multipleSelection: [],//多选下发数组


            form: {
                techfilename: '',//工艺文件名称
                ctltype: '',//使用范围
                ctltarget: '',//终端编号 or 设备编号
            },
            formLabelWidth: '120px',

            showRange: 0,//是否展示选择的范围，当范围选择0时不显示，为1or 2时显示

            uploadTerminalTree: [],//上传文件终端列表
            uploadTerminalTreeIndex: 0,//上传文件终端列表

            uploadDeviceTree: [],//上传文件设备列表
            uploadDeviceTreeIndex: 0,//上传文件设备列表

            total: 0,
            fileList: [],//文件列表
            PathList: [],//服务端返回的文件id（fileId）
            urlData: {
                oper: 'wuji',
                desc: 'test'
            },//文件上传的附带数据

            rule: {
                techfilename: [
                    { required: true, message: '工艺文件名称不能为空' }
                ],
                ctltype: [
                    { required: true, message: '使用范围不能为空' }
                ],
            }
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
        currentChange(val) {
            this.search(val - 1);
        },
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
                this.width = 570;


            }
            //如果为终端内部
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 1) {
                this.width = 920;
                this.$axios.post("api/DDC/Terminal/TerminalTree" + utils.formatQueryStr(obj)).then(res => {
                    that.TerminalTree = res[0].children;
                }).catch(error => {

                })

            }
            //如果为设备专用
            else if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 2) {
                this.width = 920;
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
                pageindex: typeof arguments[0] == 'number' ? arguments[0] : 0,
                pagesize: 36,
            }
            if (this.TechCtlTypeList[this.TechCtlTypeListIndex].F_VAL == 0) {
                this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
                    if (res.Rows.length == 0) {
                        this.$messageBox('暂无数据', '提示', {
                            confirmButtonText: '确定',
                        });
                    }
                    this.total = parseInt(res.Counts);
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
                    this.total = parseInt(res.Counts);

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
                    this.total = parseInt(res.Counts);
                    that.$emit("update:fileData", res.Rows);
                }
                ).catch(error => {

                })

            }


        },
        //设备多选
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //提交下发请求
        submit() {
            let that = this;
            let arr = [];
            for (let i = 0, len = that.multipleSelection.length; i < len; i++) {
                arr.push(that.multipleSelection[i].F_DEVICEID);
            }
            let obj = {
                techfileid: that.fileId,
                deviceids: arr.join(","),
            }
            that.$axios.post("api/DDC/TechFile/TechFileIssue", obj).then(res => {
                if (res.success) {
                    that.$messageBox('下发成功', '提示', {
                        confirmButtonText: '确定',
                    })
                }
                else {
                    that.$messageBox('下发失败', '提示', {
                        confirmButtonText: '确定',
                    },
                    );
                }

            }).catch(error => {
                that.$messageBox('下发失败', '提示', {
                    confirmButtonText: '确定',
                },
                );
            })



        },


        //获取使用范围
        getRange(val) {

            let obj = {
                username: "wuji"
            }
            if (val == 0) {
                this.showRange = 0;
            }
            else if (val == 1) {
                this.showRange = 1;
                this.$axios.post("api/DDC/Terminal/TerminalTree" + utils.formatQueryStr(obj)).then(res => {
                    this.uploadTerminalTree = res[0].children;
                }).catch(error => {

                })
            }
            else if (val == 2) {
                this.showRange = 2;
                this.$axios.post("api/DDC/Terminal/DeviceTree" + utils.formatQueryStr(obj)).then(res => {
                    console.log(res);
                    this.uploadDeviceTree = res[0].children;
                }).catch(error => {

                })
            }

        },

        //文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        //点击文件列表中已上传的文件时的钩子
        handlePreview(file) {
            console.log(file);
        },
        //文件超出个数限制时的钩子
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        //删除文件之前的钩子
        beforeRemove(file, fileList) {
            // return this.$confirm(`确定移除 ${file.name}？`);
        },
        //上传成功的回调
        success(res) {
            this.PathList = JSON.parse(res).pathlist;
        },

        //文件上传之前的校验，限制文件大小
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 10;
            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 10MB!');
            }
            return isLt2M;
        },
        //取消
        cancel() {
            this.form = {
                techfilename: '',//工艺文件名称
                ctltype: '',//使用范围
                ctltarget: '',//终端编号 or 设备编号
            };
            this.fileList = [];
            this.showRange = 0;

        },
        //上传
        upload() {
            let obj = JSON.parse(JSON.stringify(this.form));
            obj.fileid = this.PathList[0];
            if (this.showRange == 0) {
                obj.ctltarget = "";
            }
            if (this.showRange == 1) {
                obj.ctltarget = obj.ctltarget.join(",");
            }
            if (this.showRange == 2) {
                obj.ctltarget = this.deviceId.join(",");
            }
            obj.oper = "wuji";
            console.log(obj);

            this.$axios.post("api/DDC/TechFile/TechFileSave", obj).then(res => {
                console.log(res);
                if (res.success) {
                    this.$messageBox('上传成功', '提示', {
                        confirmButtonText: '确定',
                    })
                }
                // this.search();
                this.cancel();

            }).catch(error => {

            })
        },

        updated() {
            // this.gridData = this.deviceArray;
        },
        //设备多选函数
        multiple(val) {
            this.deviceId = val;
        }
    },
    //初次渲染展示通用数据
    mounted() {
        let that = this;
        let obj = {
            ctltype: 0,
            oper: "wuji",
            pageindex: 0,
            pagesize: 36,
        }
        this.$axios.post("api/DDC/TechFile/TechFilelist" + utils.formatQueryStr(obj)).then(res => {
            if (res.Rows.length == 0) {
                this.$messageBox('暂无数据', '提示', {
                    confirmButtonText: '确定',
                });
            }
            this.total = parseInt(res.Counts);
            that.$emit("update:fileData", res.Rows);
        }
        ).catch(error => {

        })

    }
}
</script>
<style lang="scss">
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
    background-color: #45ccf8;
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