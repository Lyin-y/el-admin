<template>
  <!--@submit.native.prevent="saveArticle"点击submit按钮触发的事件-->
  <el-form
    @submit.native.prevent="saveArticle"
    ref="form"
    :model="article"
    label-width="120px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <!-- native-type="submit"表示是一个提交按钮-->
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
    data() {
    return {
      article: {
        title: "",
        body: ""
      }
    };
  },
  created(){
      this.fetch()
  },
  methods:{
      fetch(){
          this.$http.get(`articles/${this.$route.params.id}`).then(res =>{
              this.article = res.data
          })
      },
      saveArticle(){
          this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res =>{
          this.$message({
             showClose: true,
             message: "文章保存成功",
             type: "success"
        });
        this.$router.push('/article/index')
          })
      }
  }   
}
</script>
