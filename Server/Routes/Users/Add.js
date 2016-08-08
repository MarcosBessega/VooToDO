'use strict'

const parse = require('co-body'),
	randomToken = require('random-token'),
	User = require('../../Models/User');

const Add = function * (next) {
	var data = yield parse.json(this);
	data.token = randomToken(24)

	try {
		let result = yield User.create(data);
		this.status = 201;
		return this.body = result;
	} catch (_error) {
		error = _error;
		return this.body = error;
	}

}

module.exports = Add
