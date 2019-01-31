<template>
  <div>
    <div class="topic">
      <div class="avatar-box">
        <div class="avatar">
          <img src="../../assets/avatar.jpeg" alt="" width="100%" height="100%">
        </div>
        <p>祁连山的冰</p>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '../../components/footerBar'
export default {
  data() {
    return {}
  },
  components: {
    FooterBar
  }
}
</script>

<style lang="scss" scoped>
.topic{
  width: 100%;
  height:210px;
  background: url('../../assets/timg.jpeg') no-repeat center;
  background-size: 100% 100%;
  .avatar-box{
    width: 100%;
    text-align: center;
    position: relative;
    top: 15%;
    .avatar{
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
    }
    p{
      margin: 0;
      font-size: 22px;
    }
  }
}
</style>

