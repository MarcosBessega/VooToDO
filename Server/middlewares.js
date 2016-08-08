'use strict'

var logger = require('koa-logger'),
	statelessauth = require('./koa-statelessauth'),
	validator = require('./Helpers/Validator'),
	serve = require('koa-static');

const MiddleWares = (app) => {

	var statelessauthOptions = {
		ignorePaths: ["/", "/sign"]
	};

	app.use(statelessauth(validator, statelessauthOptions));

	// Init logger
	app.use(logger());
	// Init public dir for css, js and etc..
	app.use(serve(__dirname + '/public'));
}

module.exports = MiddleWares
