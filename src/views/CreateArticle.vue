<template>
  <!--@submit.native.prevent="saveArticle"点击submit按钮触发的事件-->
  <el-form @submit.native.prevent="saveArticle"
    ref="form"
    :model="article"
    label-width="120px">
      <el-form-item  label="文章标题">
          <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      article: {
        title:"",
        body: ""
      }
    };
  },
  methods: {
    saveArticle() {
      // //this.article是请求体，是一个对象，里面包含了内容和标题
      this.$http.post("/articles", this.article).then(res => {
          console.log(res.data)
         this.$message({
          showClose: true,
          message: "文章创建成功",
          type: "success"
        });
         //   //跳转到列表页
         this.$router.push('/article/index')
  });
//       //  this.$http.get("/").then(res =>{
//       //    console.log(res)
//       //  })
   }
  }
}
</script>
