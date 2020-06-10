<!-- 运行天数 -->
<template>
    <div class="operatingDay"></div>
</template>

<script>
export default {
    data() {
        return {
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
}
</style>