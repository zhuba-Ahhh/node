const {
  request,
  response
} = require('express');
const express = require('express');
const app = express();
const port = 3000; // 监听端口

// 导入路由模块
const IndexRouter = require("./IndexRouter");

// 应用中间件 路由级中间件 错误处理中间件 内置中间件 第三方中间件。。。

// 应用中间件：挂载在app上  需要注意顺序 按代码顺序匹配后执行，后面的就忽略
// 没有挂载的中间件，应用的每一个请求都会执行该中间件
function fun1(request, response, next) {
  console.log();
}
app.use(fun1) // 万能应用级中间件 所以先验证login再使用use应用级中间件验证Token
app.use("/home", fun1) // 只有当访问/home时使用


// 应用级别
app.use((request, response, next) => {
  console.log("验证Token");
  next();
})

// 应用级别
app.use('/', IndexRouter) // IndexRouter是路由级别中间件
// 只要匹配到 '/' 就会使用到路由级别的中间件

app.listen(port, () => {
  console.log(`正在监听 http://localhost:${port}`);
})