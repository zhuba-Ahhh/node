const express = require('express');
const app = express();
const port = 3000; // 监听端口

// 导入路由模块
const IndexRouter = require("./IndexRouter");
// 应用级别
app.use((request, response, next) => {
  console.log("验证Token"); // 打印在vscode的终端
  next();
})

// 应用级别
app.use('/', IndexRouter) // IndexRouter是路由级别中间件
// 只要匹配到 '/' 就会使用到路由级别的中间件


// 应用中间件 路由级中间件 错误处理中间件 内置中间件 第三方中间件。。。

// 应用中间件：挂载在app上  需要注意顺序 按代码顺序匹配后执行，后面的就忽略
// 没有挂载的中间件，应用的每一个请求都会执行该中间件
function fun1(request, response, next) {
  console.log("fun1");
}
app.use(fun1) // 万能应用级中间件 所以先验证login再使用use应用级中间件验证Token
app.use("/home", fun1) // 只有当访问/home时使用


// 错误处理中级件 有四个参数 err,req,res,next
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})


// 内置中间件 基于serve-staic 托管静态资源
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('files'));


// 第三方中间件 安装所需的node模块 并在应用中加载，也可以在应用级、路由级加载
// eg: 解析cookie的中间件：cookie-parse
// pnpm i cookie-parser

const cookieParser = require('cookie-parser');
// 加载用于解析cookie的中间件
app.use(cookieParser())


app.listen(port, () => {
  console.log(`正在监听 http://localhost:${port}`);
})