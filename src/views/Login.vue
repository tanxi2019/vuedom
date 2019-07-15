<template>
  <el-form
    class="login-container"
    ref="AccountForm"
    :model="account"
    :rules="loginRules"
    label-position="left">
    <h3>Login</h3>
    <el-form-item prop="username">
      <el-input
        v-model="account.username"
        type="text"
        placeholder="账号">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
    <el-form-item>
      <el-button @click.native.prevent="handleLogin"
                 :loading="logining"
                 type="primary">
        登录
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="resetBtn"
        @click.native.prevent="reset">
        注册
      </el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        account: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        },
        checked: true,
        logining: false
      };
    },
    methods: {
      handleLogin() {
        this.$refs.AccountForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            let loginParams = {
              username: this.account.username,
              password: this.account.password
            }
            // 调用axios登录接口
            requseLogin(loginParams).then(res => {
              // debugger;
              this.logining = false;
              // 根据返回的code判断是否成功
              let { code, msg, user } = res.data;
              if (code === 200) {
                // elementui中提示组件
                this.$message({
                  type: 'success',
                  message: msg
                });
                // 登陆成功，用户信息就保存在sessionStorage中
                sessionStorage.setItem('user', JSON.stringify(user));
                // 跳转到后台主页面
                console.log('this',this)
                this.$router.push({ path: '/About' })

              }else {
                this.$message({
                  type: 'error',
                  message: msg,
                });
              }
            }).catch(err =>{
              console.log(err);
            });
          }else {
            console.log('error submit!');
            return false;
          }
        })
      },
      reset () {
        this.$refs.AccountForm.resetFields()
      },

    }
  }
</script>

<style scoped>
  body{
    background: #DFE9FB;
  }
  .login-container {
    width:350px;
    margin-left:35%;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 5px;
  }
  .el-button {
    width:100%;
    box-sizing: border-box;
    margin: 10px 0;
  }
</style>
