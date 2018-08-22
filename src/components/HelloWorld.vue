<template>
  <div class="hello">
    <button @click="sendRequest">发送请求</button>
    <p class="sass">测试sass</p>
  </div>
</template> 

<script>
import { login } from "@/api/user";
export default {
  name: "HelloWorld",
  data() {
    return {
      loginForm: {
        username: "rty",
        password: 123
      }
    };
  },
  methods: {
    async sendRequest() {
      let res = await login(this.loginForm);
      console.log(res);
    }
  }
};
</script>

<style scoped lang="scss">
.hello {
  .sass {
    color: #d4333c;
  }
}
</style>
