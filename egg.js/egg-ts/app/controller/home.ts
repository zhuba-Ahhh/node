import { Controller } from "egg";

export default class HomeController extends Controller {
  // public async index() {
  //   const { ctx } = this;
  //   ctx.body = await ctx.service.test.sayHi("egg");
  // }

  // ----- //
  // 验证登录并且生成 token
  public async login() {
    const { ctx, app } = this;
    //获取用户端传递过来的参数
    const data = ctx.request.body;
    // 进行验证 data 数据 登录是否成功
    // .........
    //成功过后进行一下操作
    //生成 token 的方式
    const token = app.jwt.sign(
      {
        username: data.username, //需要存储的 token 数据
        //......
      },
      app.config.jwt.secret
    );
    // 生成的token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NjAzNDY5MDN9.B95GqH-fdRpyZIE5g_T0l8RgzNyWOyXepkLiynWqrJg
    // 返回 token 到前端
    ctx.body = token;
  }
  //访问admin数据时进行验证token，并且解析 token 的数据
  public async index() {
    const { ctx } = this;
    console.log(ctx.state.user);
    /*
     * 打印内容为：{ username : 'admin', iat: 1560346903 }
     * iat 为过期时间，可以单独写中间件验证，这里不做细究
     * 除了 iat 之后，其余的为当时存储的数据
     **/
    ctx.body = { code: 0, msg: "验证成功" };
  }
  // ----- //
}
