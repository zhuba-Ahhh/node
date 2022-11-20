'use strict';

const {
  app,
} = require('egg-mock/bootstrap');

describe('zhuba test', () => {
  it('zhuba index', () => {
    return app.httpRequest().get('/zhuba').expect(200)
      .expect('<h2>This is zhuBaController <h2>');
  });
  it('zhuba getGirls', async () => {
    await app.httpRequest().get('/getGirls').expect(200)
      .expect('<h1>kunkun，正在向你走来</h1>');
  });
});
