var koa = require('koa'),
	conf = require('./env'),
	connect = require('./mongo'),
	middlewares = require('./middlewares'),
	routes = require('./Routes');

connect(conf.mongoUri, () => {
	var app = koa();
	middlewares(app)
	routes(app)
  let port = process.env.PORT || 3000
	app.listen(port);
	console.log('Listening to %s', port);
});
