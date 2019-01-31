<template>
  <div v-bind:class="['foot-bar', toggleClass]">
    <router-link to="/home"><div>home</div></router-link>
    <router-link to="/publish"><div>publish</div></router-link>
    <router-link to="/mine"><div>mine</div></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollDirection: '',
      defaultScroll: 0
    }
  },
  mounted () {
    this.scrollFn()
  },
  methods: {
    scrollFn() {
      window.onscroll = () => {
        let scrollChange = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollChange > this.defaultScroll) {
          this.scrollDirection = 'down'
        }else if(scrollChange < this.defaultScroll){
          this.scrollDirection = 'up'
        }
        this.defaultScroll = scrollChange
      }
    }
  },
  computed: {
    toggleClass: function () {
      return this.scrollDirection === 'down' ? 'hide' : 'show'
    }
  }
}
</script>

<style lang="scss" scoped>
.foot-bar {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #DEDEDE;
  div{
    height: 100%;
    line-height: 50px;
  }
}
.hide{
  animation: hide 1s forwards
}
.show{
  animation: show .8s forwards
}
@keyframes hide{
  0%{height: 60;}
  100% {height: 0px;}
}
@keyframes show{
  0%{height: 0;}
  100% {height: 60px;}
}
</style>

