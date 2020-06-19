<!-- 标题 -->
<template>
    <div>
        <!-- 标题图片 -->
        <div class="img-title" :style="`height: ${ screenHeight *0.13 }px;width: ${screenWidth* 0.99}px;`">
        </div>

        <div :style="`width:${screenWidth *0.99}px; position:absolute;`">
            <el-row>
                <el-col :span="6">
                    <weather />
                </el-col>
                <el-col :span="3" :offset="15">
                    <login />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "titles",
    props: [
        "screenWidth",
        "screenHeight",

    ],

}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>