const express = require("express");

const router = express.Router(); // 绑定的对象为express.Router() 最后 需要app.use挂载到页面上

// 路由级别中间件
// 二级路由
router.get("/", (req, res) => {
  // res.send("<h2>Login</h2>") // send片段或者json
  // res.json([1,2,3]) // json数据
  // 渲染模板后返回前端
  res.render("login", {
    title: "1111" // ejs语法传参能在views中使用
  }); // 自动寻找views下的login.ejs 并渲染 // 注意nodemon需要重启刷新一下
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

// 响应前端的Post请求
router.post("/", (req, res) => {
  console.log(req);
  console.log(req.body); // 必须配置中间件
  // const {
  //   username,
  //   password
  // } = req.body;
  // if (username === 'zhuba' && password === '12345') { // 校验
  //   res.send({
  //     ok: 1
  //   })
  // } else {
  //   res.send({
  //     ok: 0
  //   })
  // }
})




module.exports = router;