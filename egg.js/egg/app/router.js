'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter();
  const {
    router,
    controller,
  } = app;
  router.get('/', counter, controller.zhuba.index);
  router.get('/home', counter, controller.home.index);
  router.get('/hello', controller.home.hello);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.get('/zhuba', counter, controller.zhuba.index);
  router.get('/getGirl', controller.zhuba.getGirl);
  router.get('/getGirl1/:name', controller.zhuba.getGirl1);
  router.get('/getGirl2', controller.zhuba.getGirl2);
  router.get('/getGirls', controller.zhuba.getGirls);
  // router.post('/add', controller.zhuba.add);

  router.post('/add', controller.zhuba.add);
  router.post('/del', controller.zhuba.del);
  router.post('/editor', controller.zhuba.editor);
  router.post('/show', controller.zhuba.show);

  router.get('/newContext', controller.zhuba.newContext);
  router.post('/newContext', controller.zhuba.newContext);

  router.post('/newRequest', controller.zhuba.newRequest);
  router.get('/newResponse', controller.zhuba.newResponse);

  router.redirect('*', controller.home.index);

  // 操作数据库
  router.get('/addG', controller.girlsManage.addG);
  router.get('/delG', controller.girlsManage.delG);
  router.get('/updateG', controller.girlsManage.updateG);
  router.get('/getG', controller.girlsManage.getG);
};