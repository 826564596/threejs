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
                                <el-checkbox v-model="checked">七天内保持登录</el-checkbox>
                            </div>
                        </el-col>

                        <el-col :span="5" :offset="7">
                            <div class="forgetPassword ">
                                <!-- 忘记密码 -->
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
                                <!-- 简体中文 -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";
export default {
    data() {
        return {
            userName: 'wuji',
            password: '123456',
            checked: true,
        };
    },

    methods: {

        login() {

            let that = this;
            let obj = {
                USERNAME: this.userName,
                PASSWD: this.password
            }
            this.$axios.post("/api/DDC/User/Login" + utils.formatQueryStr(obj)).then(res => {
                if (res.success == true) {
                    if (this.checked) this.setUserInfoSeven();
                    else this.setUserInfo();
                    this.$router.push({ name: "six" }).catch(err => { console.log("跳转失败！") });

                }
                else {
                    this.$messageBox('账户名或密码有误，请重新输入', '提示', {
                        confirmButtonText: '确定',
                    });
                }
            }).catch(error => {

            })

            // this.$axios.post("/newApi/wuji/Device/WorkloadRank",
            //     {
            //         data: {
            //             "start_date": "2020-06-02",
            //             "end_date": "2020-07-02"
            //         }
            //     }
            // ).then(res => {
            //     console.log(res);
            // })

        },
        setUserInfo() {
            this.$cookies.set("userName", this.userName, 60 * 60 * 24);
            this.$cookies.set("password", this.password, 60 * 60 * 24);
        },

        setUserInfoSeven() {
            this.$cookies.set("userName", this.userName, 60 * 60 * 24 * 7);
            this.$cookies.set("password", this.password, 60 * 60 * 24 * 7);
        }
        // deleteUserInfo() {
        //     this.$cookies.isKey("userName") && this.$cookies.remove("userName");
        //     this.$cookies.isKey("password") && this.$cookies.remove("password");
        // }
    }

}
</script>
<style  lang="scss" >
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

.el-checkbox__input.is-checked.el-checkbox__inner,
.el-checkbox__input.is-indeterminate.el-checkbox__inner,
.el-button--primary {
    border-color: rgb(109, 215, 255) !important;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: rgb(109, 215, 255) !important;
    border-color: rgb(109, 215, 255) !important;
}
</style>