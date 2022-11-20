'use strict';

const Service = require('egg').Service;

class testdbService extends Service {
  // // 添加数据库
  async addG(params) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.insert('girls', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // // 删除数据库
  async delG(id) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.delete('girls', id);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  // // 修改数据库
  async updateG(params) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.update('girls', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // // 查询数据库
  async getG(id = 10) {
    console.log(id); // 没有数据意思一下
    try {
      const app = this.app;
      const res = await app.mysql.select('girls');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = testdbService;
