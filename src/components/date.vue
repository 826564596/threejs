<!-- 日期 -->
<template>
    <div class="dateFrame " :style="`top:${top}px;right:${right}px;`">
        <el-row>
            <el-col :span="17" :offset="1">
                <div class="dateFrame-data ">
                    {{date}}
                </div>
            </el-col>

            <el-col :span="4" :offset="1">
                <div class="dateFrame-icon ">

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'date',
    props: [
        "top",
        "right",
    ],
    data() {
        return {
            date: ""
        };
    },
    mounted() {
        this.date = new Date().toLocaleString().split(" ")[0].replace(/\//g, "-");

    },
    methods: {

    },

}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>