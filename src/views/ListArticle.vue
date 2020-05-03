<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220px">
        <template  slot-scope="scope" >
            <el-tooltip class="item" effect="dark" content="修改文本" placement="top">
              <el-button  @click="edit(scope.row._id)" type="primary" icon="el-icon-edit" size="min"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除文本" placement="top">
              <el-button  @click="remove(scope.row._id)" type="danger" icon="el-icon-delete" size="min"></el-button>
            </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  created(){
      this.fetch()
  },
  methods:{
      //获取数据，在删除完数据之后执行
    fetch(){
      this.$http.get("articles").then(res => {
          this.articles = res.data;
        })
    },
    //编辑数据
    edit(id){
      //跳转到下一个页面
      this.$router.push(`/article/edit/${id}`)
    },
    //删除数据
    remove(id){
      //${id}是一个变量
      this.$http.delete(`articles/${id}`)
      .then(res=>{
        this.$message({
          showClose: true,
          message: "删除成功",
          type: "success"
        });
        //删除完数据之后重新获取数据，即刷新数据
        this.fetch()
      })
    } 
  }
}
</script>