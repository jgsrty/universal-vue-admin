<template>
  <div class="admin-login-container flex_center_center">
    <div class="admin-login-form">
      <h3>管理后台模板</h3>
      <el-form :model="loginForm" :rules="loginRules" ref="loginRuleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLoginForm('loginRuleForm')">登录</el-button>
          <el-button @click="resetLoginForm('loginRuleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      //登录表单
      loginForm: {},
      //登录验证
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    async submitLoginForm(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          let res = await login(this.loginForm);
          if (res) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$store.dispatch("setToken", res.token);
            this.$route.query.redirect
              ? this.$router.push(this.$route.query.redirect)
              : this.$router.push({ name: "Home" });
          }
        }
      });
    },
    //重置
    resetLoginForm(form) {
      this.$refs[form].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.admin-login-container {
  height: 100%;
  background: #f6f6f6;
  .admin-login-form {
    width: 350px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
  }
}
</style>