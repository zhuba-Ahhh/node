/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1668828659099_2258';

  // add your middleware config here
  config.middleware = [];

  // csrf 安全策略
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // ejs
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.ejs = {};

  // 挂载中间件
  config.middleware = [ 'counter' ];


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // // ejs egg-mysql
  config.mysql = {
    client: {
      host: 'localhost', // 数据库地址
      port: '3306', // 端口
      user: 'root', // 用户名
      password: '12345', // 密码
      database: 'egg', // 连接的数据库名称
    },
    app: true, // 是否挂载到app下面
    agent: false, // 是否挂载到代理下面
  };

  return {
    ...config,
    ...userConfig,
  };
};
