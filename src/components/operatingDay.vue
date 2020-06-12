<!-- 运行天数 -->
<template>
    <div class="operatingDay">
        <div>
            {{operatingDay}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            operatingDay: "001"
        };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {}
}

</script>
<style lang="scss">
.operatingDay {
    height: 50px;
    width: 230px;
    position: absolute;
    bottom: 3%;
    right: 2%;
    background: url("../assets/image/天数线.png") no-repeat;
    background-size: 100% 100%;
    color: rgb(1, 220, 247);
    font-family: "方正粗倩简体";
    font-size: 45px;
    font-weight: bold;

    div {
        float: right;
        margin-top: -12px;
        margin-right: 10px;
    }
}
</style>