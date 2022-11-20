'use strict';

const Controller = require('egg').Controller;

class zhubaController extends Controller {
  async index() {
    const {
      ctx, app,
    } = this;
    const username = ctx.session.username;
    await ctx.render('zhuba.html', {
      id: 2001,
      name: 'kunkun',
      age: 18,
      skills: [ '唱', '跳', 'Rap', '篮球' ],
      username,
      nowTime: app.currentTime(),
    });

    console.log(ctx.session.counter);
  }

  async getGirls() {
    const {
      ctx,
    } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>kunkun，正在向你走来</h1>');
      }, 1000);
    });
  }

  // 自由传参模式
  async getGirl() {
    const ctx = this.ctx;
    ctx.body = ctx.query;
  }
  // 严格传参模式
  async getGirl1() {
    const ctx = this.ctx;
    ctx.body = 'GG1 ok' + ctx.params.name;
  }

  // 调用service
  async getGirl2() {
    const ctx = this.ctx;
    const res = await ctx.service.zhuba.getGirl('18');
    ctx.body = res;
  }

  // POST
  // async add() {
  //   const {
  //     ctx
  //   } = this
  //   ctx.body = {
  //     status: 200,
  //     data: ctx.request.body
  //   }
  // }

  // Cookie 的增删改查
  async add() {
    const ctx = this.ctx;
    ctx.session.username = 'zhuba';
    ctx.cookies.set('user', 'zhuba.cloud');
    ctx.body = {
      status: 200,
      data: 'Cookie添加成功',
    };
  }
  async del() {
    const ctx = this.ctx;
    ctx.cookies.set('user', null, {
      maxAge: 1000 * 2,
    });
    ctx.body = {
      status: 200,
      data: 'Cookie删除成功',
    };
  }
  async editor() {
    const {
      ctx,
    } = this;
    ctx.cookies.set('user', 'bilibili');
    ctx.body = {
      status: 200,
      data: 'Cookie修改成功',
    };
  }
  async show() {
    const ctx = this.ctx;
    const user = ctx.cookies.get('user');
    console.log(user);
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功',
    };
  }
  // newContext
  async newContext() {
    const {
      ctx,
    } = this;
    const params = ctx.params();
    console.log(params);
    ctx.body = 'newContext';
  }
  // Extend-request
  async newRequest() {
    const {
      ctx,
    } = this;
    const token = ctx.request.token;
    ctx.body = {
      status: 200,
      body: token,
    };
  }
  // newRespose
  async newResponse() {
    const {
      ctx,
    } = this;
    ctx.response.token = 'zhuba.cloud';
    // ctx.body = 'newRespose';
    const testBase64 = ctx.helper.base64Encode('zhuba.cloud');
    ctx.body = testBase64;
  }
}

module.exports = zhubaController;
