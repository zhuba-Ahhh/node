const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000; // 监听端口

app.get("/", (request, response) => {
  response.write("Hello Express.js");
  response.end()
})

// send == write + end
app.get("/send", (request, response) => {
  // response.send("Send");
  // response.send(`
  //   <html>
  //     <h1> Send </h1>
  //   </html>
  // `)
  response.send({
    data: "Send",
    name: "zhuba",
    age: 18,
  })
})

// 路径的匹配 类似 正则
// ? 可选 匹配 acd abcd
app.get("/ab?c", (request, response) => {
  response.send("/ac | /abc")
})
// : 参数 满足格式就匹配 ab/1/2
app.get("/d/:id/:id2", (request, response) => {
  response.send("/b/:id/:id2")
})
// + 至少一个
app.get("/ef+", (request, response) => {
  response.send("/ef | /eff...")
})
// * 任意个
app.get("/jg*h", (request, response) => {
  response.send("/jh | /jgh ...")
})
// () 组合  // 注意不能直接是 /(ba)*d
app.get("/b(ba)*d", (request, response) => {
  response.send("/d | /abd")
})
// 其他正则 ^ 开头 $ 结尾  .*任意个

app.get("/login", (request, response) => {
  // 臃肿的办法
  // 验证用户token是否过期 cookie过期
  // 查询数据库再返回数据
  response.send("/login")
})

// 为请求提供了多个回调函数 使得可以将其切割成不同函数便于使用和复用 比如抽离同一函数(如鉴权)用于不同页面
app.get("/login1", (request, response, next) => {
  // 中间件的办法
  // 验证用户token是否过期 cookie过期
  console.log("验证Token");
  const isValid = true;
  if (isValid) {
    next() // 进入下一个（函数） 放行
  } else {
    // 查询数据库再返回数据
    response.send("err")
  }
}, (request, response) => {
  response.send("Login1 Ok")
  next() // 一旦send 后面的操作都不会执行
})
// 抽离函数便于复用
function fun1(request, response, next) {
  // 中间件的办法
  // 验证用户token是否过期 cookie过期
  console.log("验证Token");
  const isValid = true;
  if (isValid) {
    next() // 进入下一个路由（函数）
  } else {
    response.send("err")
  }
}

function fun2(request, response) {
  // 查询数据库再返回数据
  response.send("Login2 Ok")
}
app.get("/login2", [fun1, fun2])
app.get("/login3", [fun1], (request, reponse) => {
  response.send("Login3 Ok")
})



// 监听端口
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}/`);
})