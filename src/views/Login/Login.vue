<template>
    <div class="login">
        <div class="title">登录</div>
        <div class="loginContent">
            <div class="leftCode">
                <!-- <img src="@/assets/image/adventure.svg" > -->
            </div>
            <div class="rightLogin">
                <div class="selectLogin">
                    <span :class="{ active: passwordLogin }" @click="selectLogin(0)">密码登录</span>
                    <span :class="{ active: !passwordLogin }" @click="selectLogin(1)">短信登录</span>
                </div>
                <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" class="loginForm password" v-show="passwordLogin">
                    <el-form-item prop="account">
                        <el-input type="text" v-model="ruleForm1.account" autocomplete="off" placeholder="请输入手机号/邮箱"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" v-model="ruleForm1.pass" autocomplete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="loginForm message" v-show="!passwordLogin">
                    <el-form-item prop="phone">
                        <el-input placeholder="请填写手机号码" v-model="ruleForm2.phone">
                            <el-select v-model="selectCountry" slot="prepend" placeholder="中国大陆" style="width: 110px">
                                <el-option v-for="item in country" :label="item.cname" :value="item.id" :key="item.id"></el-option>
                            </el-select>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input placeholder="请输入短信验证码" v-model="ruleForm2.code" class="code">
                            <el-button type="primary" slot="append">获取验证码</el-button>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="remember">
                    <el-checkbox label="记住我" name="remember" v-model="remember"></el-checkbox><span>谨慎勾选哦！</span>
                    <span class="forget">忘记密码?</span>
                </div>
                <div class="formBottom">
                    <el-button :plain="true" class="submit" @click="submitForm">登录</el-button>
                    <div class="signup" @click="toSignup">注册</div>
                </div>
                <div class="otherLogin">
                    <div class="quickLogin">
                        <!-- <img src="@/assets/image/qq.svg" alt="">QQ -->
                    </div>
                    <div class="quickLogin">
                        <!-- <img src="@/assets/image/wechat.svg" alt="">微信 -->
                    </div>
                    <div class="quickLogin">
                        <!-- <img src="@/assets/image/weibo.svg" alt="">新浪微博 -->
                    </div>
                </div>
                <p class="qucikMethod">可选择快捷登录方式</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { COUNTRY } from '@/constants/common.js'
    import { Form } from 'element-ui';
    import { Vue, Component, Ref } from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {
        validateAccount = (rule: any, value: any, callback: any) => {
            var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            if (!email.test(value) && !phone.test(value)) {
                callback(new Error('请输入正确的账号！'))
            } else {
                callback()
            }
        }
        validatePass = (rule: any, value: any, callback: any) => {
            if (value === '') {
                callback(new Error('请输入密码！'))
            } else {
                callback()
            }
        }
        validatePhone = (rule: any, value: any, callback: any) => {
            var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            if (!phone.test(value)) {
                callback(new Error('请输入正确的手机号码！'))
            } else {
                callback()
            }
        }
        validateCode = (rule: any, value: any, callback: any) => {
            if (!/\d{6}/.test(value)) {
                callback(new Error('请输入正确的6位验证码！'))
            } else {
                callback()
            }
        }
        ruleForm1 = { account: '',pass: '' }
        ruleForm2 = { phone: '', code: '' }
        rules = { account: [{ validator: this.validateAccount, trigger: 'blur' }],
            pass: [{ validator: this.validatePass, trigger: 'blur' }],
            phone: [{ validator: this.validatePhone, trigger: 'blur' }],
            code: [{ validator: this.validateCode, trigger: 'blur' }]
        }
        passwordLogin = true
        country = COUNTRY
        selectCountry = ''
        remember = false

        @Ref('ruleForm1') readonly ruleFormRef1!: Form
        @Ref('ruleForm2') readonly ruleFormRef2!: Form

        submitForm () {
            let formName = ''
            if (this.passwordLogin) {
                formName = 'ruleForm1'
            } else {
                formName = 'ruleForm2'
            }
            
            this.ruleFormRef1.validate((valid: boolean) => {                
                if (valid) {
                    this.$store.dispatch('login', {
                        account: this.ruleForm1.account,
                        password: this.ruleForm1.pass
                    }).then((res) => {
                        if (res.data.state === 1) {
                            this.$store.dispatch('getUserInfo', localStorage.getItem('readerId'))
                            this.$message({
                                message: '登录成功！',
                                type: 'success',
                                duration: 1000
                            })
                            this.$router.push({ name: 'home' })
                        } else {
                            this.$message({
                                message: '登录失败！',
                                type: 'error',
                                duration: 1000
                            })
                        }
                    })
                }
            });
        }

        selectLogin (status: any) {
            if (status === 0) {
                this.passwordLogin = true
            } else {
                this.passwordLogin = false;
            }
        }

        toSignup () {
            this.$router.push({ name: 'signup' });
        }

        /** 点击[记住我]时，把用户的Id存储到localStorage中 */
        rememberLogin () {
            if (this.remember) {
                localStorage.setItem('reading_user_info', JSON.stringify(this.$store.state.userInfo))
            }
        }
    }
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    margin: 100px auto;
    padding: 0 20%;
    .title {
        text-align: center;
        font-size: 24px;
        margin-bottom: 40px;
    }
    .loginContent {
        display: flex;
        width: 100%;
        height: auto;
        border-top: 1px solid #dddddd;
        padding-top: 30px;
        .leftCode {
            width: 50%;
            border-right: 1px solid #dddddd;
            padding-top: 40px;
            img {
                margin-left: 50%;
                transform: translateX(-50%);
                width: 200px;
                height: 200px;
            }
        }
        .rightLogin {
            width: 50%;
            padding: 0 20px;
            box-sizing: border-box;
            .selectLogin {
                margin: 20px 0;
                span {
                    cursor: pointer;
                    margin-right: 20px;
                }
            }
            .loginForm {
                margin-bottom: 20px;
                .el-form-item {
                    margin-bottom: 30px;
                }
            }
            .message {
                .code {
                    /deep/ .el-input-group__append,
                    /deep/ .el-input-group__prepend {
                        background-color: plum;
                        color: #fff;
                    }
                }
            }
            .remember {
                width: 100%;
                font-size: 12px;
                height: 20px;
                line-height: 20px;
                span {
                    padding-left: 20px;
                    color: #bbbbbb;
                }
                .forget {
                    float: right;
                    color: #00a1d6;
                    cursor: pointer;
                }
            }
            .formBottom {
                display: flex;
                width: 100%;
                margin: 20px 0 30px 0;
                box-sizing: border-box;
                .submit,
                .signup {
                    width: 50%;
                    height: 40px;
                    border-radius: 5px;
                    border: 1px solid #bbbbbb;
                    cursor: pointer;
                    text-align: center;
                }
                .submit {
                    color: #fff;
                    margin-right: 20px;
                    background-color: plum;
                }
                .signup {
                    line-height: 40px;
                }
            }
            .otherLogin {
                display: flex;
                justify-content: space-around;
                .quickLogin {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 12px;
                    img {
                        width: 32px;
                        height: 32px;
                        margin-bottom: 6px;
                        cursor: pointer;
                    }
                }
            }
            .qucikMethod {
                font-size: 10px;
                color: #bbbbbb;
                text-align: center;
                padding: 10px 0 20px 0;
            }
        }
        @media (max-width: 850px) {
            flex-direction: column;
            .leftCode {
                width: 100%;
                border-right: 0;
                padding: 40px 0;
                border-bottom: 1px solid #dddddd;
            }
            .rightLogin {
                padding: 0 10%;
                width: 100%;
            }
        }
    }
    .active {
        color: plum;
    }
    @media (max-width: 1200px) {
        padding: 0 10%;
    }
    @media (max-width: 1050px) {
        padding: 0;
    }
}
</style>
