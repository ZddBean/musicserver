

const express = require('express')
const app = express()
// body-parser是一个http请求体解析的中间件，使用这个模块可以解析json\raw\文本\url
const bodyParser = require('body-parser')
const router = require('./router')
const port = 3008
 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// 通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
app.use(express.static('public'))
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
