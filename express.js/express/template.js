const express = require('express');
const app = express();
const port = 3000; // 监听端口

app.get("/", (req, res) => {
  res.send("Home")
})

// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
})