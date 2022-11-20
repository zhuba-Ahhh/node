'use strict';

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect('Hello World! Egg.js')
      .expect(200);
  });
});
