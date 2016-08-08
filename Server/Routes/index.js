'use strict'

const router = require('koa-router')(),
    fs = require('fs');

const init = (app) => {

  /**
  * Main Route to server React static files
  */
  router.get('/', function * (next) {
    const indexHTML = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');
    this.body = indexHTML;
  });

  /**
  * Auth Routes
  */

  //Login, Logout, Sign

  /**
  * Users API Routes
  */
  router.post('/users', require('./Users/Add'));
  router.get('/users', require('./Users/Get'));
  router.get('/users/:id', require('./Users/Find'));
  router.get('/users/:id/projects', require('./Users/Projects'));
  router.put('/users/:id', require('./Users/Update'));
  router.del('/users/:id', require('./Users/Remove'));

  /**
  * Projects API Routes
  */
  router.post('/projects', require('./Projects/Add'));
  router.get('/projects', require('./Projects/Get'));
  router.get('/projects/:id', require('./Projects/Find'));
  router.get('/projects/:id/todos', require('./Projects/Todos'));
  router.put('/projects/:id', require('./Projects/Update'));
  router.del('/projects/:id', require('./Projects/Remove'));

  /**
  * Todos API Routes
  */
  router.post('/todos', require('./Todos/Add'));
  router.get('/todos', require('./Todos/Get'));
  router.get('/todos/:id', require('./Todos/Find'));
  router.put('/todos/:id', require('./Todos/Update'));
  router.del('/todos/:id', require('./Todos/Remove'));

  /**
  * Type API Routes
  */
  router.get('/types', require('./Types/Get'));
  router.get('/types/:id', require('./Types/Find'));


  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = init
