<!-- 登陆页 -->
<template>
    <div class="div">
        <div id="container" class="login_bg">
            <div class="login">
                <div class="login_content ">
                    <!-- 用户名 -->
                    <el-row>
                        <el-col :span="24">
                            <div class=" login_input ">
                                <div class="login_input_picture_username "></div>
                                <div class="login_input_input ">
                                    <el-input v-model="userName" placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 密码 -->
                    <el-row>
                        <el-col :span="24">
                            <div class="login_input ">
                                <div class="login_input_picture_password "></div>
                                <div class="login_input_input ">
                                    <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div class="  thrid">
                                <el-checkbox v-model="checked">七天内保持登陆</el-checkbox>
                            </div>
                        </el-col>

                        <el-col :span="5" :offset="7">
                            <div class="forgetPassword ">
                                忘记密码
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 登陆按钮 -->
                    <el-row>
                        <el-col :span="24">
                            <div class="login_input_button" @click="login">
                                登录
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="5" :offset="19">
                            <div class="forgetPassword ">
                                简体中文
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: 'admin',
            password: 'admin',
            checked: true,
        };
    },



    mounted() { },

    methods: {
        login() {
            if (this.userName == 'admin' && this.password == "admin") {
                this.$router.push({ name: "six" });
            }
        }
    }
}

</script>
<style lang="scss" >
input[placeholder="请输入密码"].el-input__inner,
input[placeholder="请输入内容"].el-input__inner {
    height: 50px !important;
    line-height: 50px;
    background-color: rgba(1, 1, 1, 0.1) !important;
    color: rgb(211, 229, 238) !important;
    font-size: 16px !important;
    border-radius: 0px !important;
    border-color: rgb(109, 215, 255) !important;
}

.el-checkbox {
    color: rgb(243, 247, 255) !important;
}
.el-checkbox__label {
    // color: rgb(104, 196, 255) !important;
    color: rgb(243, 247, 255) !important;
}
// .el-checkbox__inner {
//     background-color: rgb(104, 196, 255) !important;
//     border-color: rgb(104, 196, 255) !important;
// }

.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner,
.el-button--primary {
    border-color: rgb(109, 215, 255) !important;
    border-color: rgb(109, 215, 255) !important;
}
</style>