<template>
  <div class="page">
    <form action="" class="form">
      <div class="form-input">
        <input type="text" v-model="username" placeholder="请输入帐号">
      </div>
      <div class="form-input">
        <input type="text" v-model="password" placeholder="请输入密码">
      </div>
      <div class="form-button">
        <button @click="submit">登 录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      if (!this.username || !this.password) {
        return false;
      }
      let resp = (await this.$apis.login(this.username, this.password)).data;
      if(!resp) {
        this.$router.push('/regist')
        return
      }
      const user = {
        username: resp.username,
        objectId: resp.objectId
      }
      window.localStorage.setItem('user', JSON.stringify(user))
      this.$router.push('/home')
    },
  },
};
</script>
<style lang="scss" scoped>
.page{
  width: 100vw;
  height: 100vh;
  padding: 0 15px;
  background: url('../../assets/bg.jpeg') no-repeat center;
  background-size: 100% 100%
}
.form{
  position: relative;
  top: 45%;
  .form-input {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    input{
      width: 100%;
      opacity: 0.3;
    }
  };
}
</style>
