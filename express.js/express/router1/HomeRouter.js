const express = require("express");

const router = express.Router();

// 路由级别中间件
// 二级路由
router.get("/", (req, res) => {
  res.send("Home")
})
router.get("/home", (req, res) => {
  res.send("Home/Home")
})
router.get("/switch", (req, res) => {
  res.send("Home-Switch")
})
router.get("/bar", (req, res) => {
  res.send("Home-Bar")
})


module.exports = router;