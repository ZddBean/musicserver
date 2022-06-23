

const express = require('express')
const app = express()
const port = 3008
 
app.get('/', (req, res) => {
  res.json({
    result:true,
    data:[],
    info:'访问成功'
  })

})
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
