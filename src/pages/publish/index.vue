<template>
  <div class="page">
    <div class="txt-box">
      <textarea rows="10" class="txt" v-model="content"></textarea>
    </div>
    <div class="img-box">
      <div class="img-item" v-for="(img, index) in uploadFiles" :key="index">
        <img width="100%" height="100%" :src="img" alt="">
      </div>
      <div class="img-item" v-if="uploadFiles.length<4">
        <input type="file" class="upload-btn" @change="beforeUpload" ref="inputFile">
      </div>
    </div>
    <div class="form-button btn-box">
      <button @click="publish">发 布</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      uploadFiles:[]
    }
  },
  methods: {
    beforeUpload() {
      if (this.$refs.inputFile.files.length<1) return
      let localFile = this.$refs.inputFile.files[0]
      let name = 'custom-img'
      let file = new this.$AV.File(name, localFile)
      file.save().then(file => {
        this.uploadFiles.push(file.url())
      }, error => {
        throw new Error(error)
      })
    },
    publish () {
      let currentUser = window.localStorage.getItem('user')
      if(!currentUser) {
        this.$router.push('/login')
        return
      }
      const user = JSON.parse(currentUser)
      const Blog = this.$AV.Object.extend('Blog')
      let blog = new Blog()
      blog.set('userId', user.objectId)
      blog.set('username', user.username)
      blog.set('content', this.content)
      blog.set('imgList', this.uploadFiles)
      blog.save().then(() => {}, error => {
        throw new Error(error)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.txt-box{
  .txt{
    width: 100%;
    background-color: #E1E1E1;
    border: 0;
    outline: none;
    font-size: 16px;
  }
}
.img-box{
  display: flex;
  justify-content: center;
  .img-item {
    width: 100px;
    height: 100px;
    border: 3px dotted #ddd;
    border-radius: 5px;
  }
}
.upload-btn{
  width: 100px;
  height: 100px;
  opacity: 0;
}
.btn-box{
  position: absolute;
  bottom: 0;
}
</style>
