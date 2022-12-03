const express = require("express");

const router = express.Router(); // 绑定的对象为express.Router() 最后 需要app.use挂载到页面上

// 路由级别中间件
// 二级路由
router.get("/", (req, res) => {
  res.send("Login")
})
router.get("/login", (req, res) => {
  res.send("Login/Login")
})
router.get("/switch", (req, res) => {
  res.send("Login-Switch")
})
router.get("/bar", (req, res) => {
  res.send("Login-Bar")
})

module.exports = router;