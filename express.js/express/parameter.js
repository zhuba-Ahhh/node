const express = require('express');
const app = express();
const port = 3000; // 监听端口
const router = express.Router();

// 路由级别-相应前端的Get请求
router.get("/home", (req, res) => {
  // new URL
  console.log(req.query); // 打印在后端
  res.send("Get-Home")
})

router.post("/home", (req, res) => {
    console.log(req.query); // 打印在后端
    res.send("Post-Home")
})


// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
})