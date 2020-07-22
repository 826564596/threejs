<!--  登陆登出 -->
<template>
    <div class="grid-content">
        <img class="information-img" src="../assets/image/用户.png" />
        <div @click="loginOut" class="loginOut">登出</div>
        <!-- <img class="triangle-img" src="../assets/image/下拉三角.png" /> -->
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
        };
    },
    methods: {
        loginOut() {

            // this.$cookies.remove("userName");
            // this.$cookies.remove("password");
            this.$router.push({ path: "/" });
        }
    }
}

</script>
<style lang="scss" >
// @import "../scss/index.scss";
</style>