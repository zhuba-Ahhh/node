const express = require('express');
const app = express();
const port = 3000; // 监听端口

app.get("/", (req, res) => {
  res.send("Home")
})

// 获取静态资源
// 配置 访问时不需要添加public直接使用public下的文件路径即可
app.use(express.static("public")) // 存放静态资源的目录不需要出现在URL中 使用eg: /js/index.js
app.use(express.static("static")) // 可以同时指定多个
app.use("/static", express.static("static")) // 要想访问该目录需要加'/static' 加以限制
// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
})