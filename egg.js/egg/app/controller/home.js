'use strict';

const {
  Controller,
} = require('egg');

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = 'Hello World! Egg.js';
    console.log(ctx.session.counter);
  }
  async hello() {
    const {
      ctx,
    } = this;
    ctx.body = '<h1>Hello ZhuBa</h1>';
  }
  async testGetGirl() {
    const ctx = this.ctx;
    const id = ctx.query.id;
    const res = await ctx.service.zhuba.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;
