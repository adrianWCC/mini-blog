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
        <button @click="submit">注册</button>
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
    submit() {
      if (!this.username || !this.password) {
        return false;
      }
      this.$apis.signUp(this.username, this.password);
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
  .form-button{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #B7DFF8;
    button{
      width: 100%;
      height: 100%;
      font-size: 16px;
    }
  }
}
</style>
