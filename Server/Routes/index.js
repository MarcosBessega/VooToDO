const router = require('koa-router')(),
    fs = require('fs');

const init = (app) => {
  router.get('/', function * (next) {
    const indexHTML = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');
    this.body = indexHTML;
  });

  router.get('/get-test', require('./test'));

  router.post('/post-test', require('./post'));

  /**
  * Users API Routes
  */
  router.post('/users', require('./Users/Add'));
  router.get('/users', require('./Users/Get'));

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = init
