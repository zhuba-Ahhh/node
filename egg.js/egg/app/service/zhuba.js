'use strict';

const Service = require('egg').Service;

class zhuBaService extends Service {
  async getGirl(id) {
    // 模拟数据
    return {
      id,
      name: 'kunkun',
      age: 28,
    };
  }
}

module.exports = zhuBaService;
