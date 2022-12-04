const express = require('express');
const app = express();
const port = 3000; // 监听端口
const router = express.Router();

// 请求获取参数
// get req.query
// post req.body 需要提前配置解析post参数
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// 配置解析post参数使用
app.use(express.urlencoded({ // 适配类似query格式 name=&keyword=1
  extended: false
}))
app.use(express.json()) // 适配 json格式 {name:"",keyword:1} 如果前端传递的数据为JOSN格式就需要配置否则收不到数据


// 路由级别-相应前端的Get请求
app.get("/home", (req, res) => {
  // new URL
  console.log(req.query); // 打印在后端
  res.send("Get-Home")
})

app.post("/home", (req, res) => {
  console.log(req.body); // post参数在body中 必须配置好中间件
  res.send("Post-Home")
})

// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
})