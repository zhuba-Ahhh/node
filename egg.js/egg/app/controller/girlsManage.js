'use strict';

const Controller = require('egg').Controller;

class GirlManage extends Controller {
  async addG() {
    const {
      ctx,
    } = this;
    const params = {
      name: '小白',
      age: 18,
      skill: '头疗',
    };
    const res = await ctx.service.testdb.addG(params);
    ctx.body = '添加女孩-成功！' + res;
  }

  async delG() {
    const {
      ctx,
    } = this;
    const id = {
      id: 3,
    };
    const res = await ctx.service.testdb.delG(id);
    console.log(res);
    if (res) {
      ctx.body = '删除女孩-成功';
    } else {
      ctx.body = '删除失败';
    }

  }

  async updateG() {
    const {
      ctx,
    } = this;
    const params = {
      id: 3,
      name: '小白',
      age: 20,
      skill: '头疗',
    };
    const res = await ctx.service.testdb.updateG(params);
    if (res) {
      ctx.body = '修改女孩-成功';
    } else {
      ctx.body = '修改失败';
    }
  }

  async getG() {
    const {
      ctx,
    } = this;
    const res = await ctx.service.testdb.getG(10);
    ctx.body = '查询女孩:' + JSON.stringify(res);
  }
}

module.exports = GirlManage;
