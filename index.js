


const express = require('express')
const path = require('path')
const router = require('./router')
const port = 3008

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// 通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, './public')))
// 处理请求参数 跨域问题
app.all('*',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  next()
})
app.use(router)
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

