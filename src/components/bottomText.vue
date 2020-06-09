<!-- 底部文字 -->
<template>
    <div class="bottomText">
        <el-row>
            <el-col :span="12">
                <div class="">
                    晋江市无极激光工艺品工贸有限公司
                </div>
            </el-col>
            <el-col :span="10" :offset="2">
                <div class="">
                    地址：泉州市晋江市青阳街道
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <div class="">
                    邮箱：company@wuji.com
                </div>
            </el-col>

            <el-col :span="10" :offset="2">
                <div class="">
                    电话：0595-28888888
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "bottomText",
}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>