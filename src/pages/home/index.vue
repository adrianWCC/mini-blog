<template>
  <div class="page">
    <div class="list">
      <div class="item" v-for="item in list" :key="item.objectId">
        <div class="item-img">
          <div class="img">
            <img :src="item.imgList[0]" alt="" width="100%" height="100%">
          </div>
        </div>
        <div class="item-dsc">
          <p>{{item.content}}</p>
        </div>
        <div class="item-auth">
          <div class="avatar">
            <img src="../../assets/avatar.jpeg" alt="" width="100%" height="100%">
          </div>
          <div class="name">
            {{item.username}}
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '../../components/footerBar'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.queryList()
  },
  methods: {
    queryList(){
      const query = new this.$AV.Query('Blog')
      query.find().then(list => {
        if(!list.length) return
        list.forEach(item => {
          item.attributes['objectId'] = item.id
          this.list.push(item.attributes)
        });
      })
    }
  },
  components: {
    FooterBar
  }
}
</script>

<style lang="scss" scoped>
.list{
  .item{
    margin-bottom: 15px;
    padding-bottom:5px; 
    width: 100%;
    background-color: #FAFAFA;
    .item-img{
      width: 100%;
      height: 200px;
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .item-dsc{
      width: 100%;
      padding: 0 15px;
      text-align: left;
      p{
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .item-auth{
      width: 100%;
      height: 30px;
      display: flex;
      padding: 0 15px;
      .avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
      }
      .name{
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        margin-left: 15px;
      }
    }
  }
}
</style>

