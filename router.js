/**
 * 路由模块
 */
 const express = require('express')
 const router = express.Router()
 const service = require("./service")

 router.get('/',service.getIndex)

 module.exports = router;