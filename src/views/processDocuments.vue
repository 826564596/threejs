<!-- 工艺文件 -->
<template>
    <div class="div">
        <div id="container" class="container_bg">
            <div style="margin-top:10px; width:100%"></div>
            <!-- 底部文字 -->
            <bottomText />
            <!-- 返回键 -->
            <backToHome />
            <!-- 左侧菜单 -->
            <tarbar :index.sync="index" />

            <div class="body-content-right ">

                <!-- 按钮 -->
                <dropdownFlie ref="dropdownFlie" :fileData.sync="fileData" :fileId.sync="fileId" :deviceArray.sync="deviceArray" />
                <div class="processDocuments">
                    <div :class="`processDocuments-content  ${fileIndex == index ? 'active' : ''}` " @click="clickId(item,index)" v-for="(item,index) of fileData" :key="index">
                        <div class="top-picture ">
                        </div>
                        <div class="top-text ">
                            {{item.F_FILENAME}}
                        </div>
                        <div class="top-close" @click="deleteFile(item)">
                            <div class="top-close-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdownFlie from "../components/dropdownFlie.vue";
import utils from "../assets/utils/utils";

export default {
    components: {
        dropdownFlie: dropdownFlie
    },
    data() {
        return {
            fileData: [],//文件数据
            fileIndex: -1,
            fileId: '',
            index: 2,
            deviceArray: [],
        };
    },
    methods: {
        clickId(item, index) {
            this.fileId = item.F_TECHFILEID;
            this.fileIndex = index;

            let obj = {
                techfileid: this.fileId,
                oper: "wuji"
            }
            this.$axios.post("api/DDC/TechFile/AvailDevicesList" + utils.formatQueryStr(obj)).then(res => {

                res.sort((a, b) => {
                    return a.F_NAME.substr(10, a.F_NAME.length - 1) - b.F_NAME.substr(10, b.F_NAME.length - 1);
                })
                this.deviceArray = res;
            }).catch(error => {

            })
        },

        //删除文件

        deleteFile(item) {
            let obj = {
                techfileid: item.F_TECHFILEID
            }
            this.$axios.post("api/DDC/TechFile/TechFileDel" + utils.formatQueryStr(obj)).then(res => {
                if (res.success) {
                    this.$messageBox('删除成功', '提示', {
                        confirmButtonText: '确定',
                    })
                    this.$refs.dropdownFlie.search();
                }
            }).catch(error => {

            })
        }

    }

}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>