const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

//允许express处理，客户端提交过来的json数据
app.use(express.json())

//定义一个mongoose模型，引用mongoose
const mongoose = require('mongoose');
//连接数据库mongodb,27017是mongodb的默认端口,数据库名为element-admin
mongoose.connect('mongodb://localhost:27017/element-admin', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})

//定义一个数据操作的模型,即创建一个表和它的结构，第一个参数是表名，第二个参数是表的结构
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))

//新增文章
app.post('/api/articles', async (req, res) => {
    //文章模型的创建方法Article.create()
    const article = await Article.create(req.body)
    res.send(article)
})

// 文章列表
app.get('/api/articles',async (req, res) =>{
    const articles = await Article.find()
    res.send(articles)
})

// 删除文章
app.delete('/api/articles/:id',async (req,res)=>{
    const article = await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})

// 文章详情
app.get('/api/articles/:id',async (req,res) =>{
    const article = await Article.findById(req.params.id)
    res.send(article)
})

// 修改文章
app.put('/api/articles/:id',async (req,res) =>{
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})


//获取根目录数据
app.get("/", async (req, res) => {
    res.send('index');
})

 app.listen(3001, async () =>{
     console.log("http://localhost:3001")
 })