const express = require('express');
const HomeRouter = require('./router1/HomeRouter');
const LoginRouter = require('./router1/LoginRouter');
const app = express();
const port = 3000; // 监听端口
const router = express.Router();

// 配置模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");

// 配置静态资源
app.use(express.static("static"))

// 应用级别中间件
// 二级路由 自己的路由自己管理
app.use("/home", HomeRouter); // /home + / => /home/
app.use("/login", LoginRouter); // /login + /login => /login/login


// 错误处理中间件 最好放最后
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(404).send('Something broke!');
// })
app.use((req, res) => {
  res.status(500).send('Something broke!'); // 反馈前端 是几几几问题 如 500 404
})

// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
})