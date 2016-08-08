'use strict'

const parse = require('co-body'),
	randomToken = require('random-token'),
	Project = require('../../Models/Project');

const Add = function * (next) {
	var data = yield parse.json(this);

	try {
		let result = yield Project.create(data);
		this.status = 201;
		return this.body = result;
	} catch (_error) {
		error = _error;
		return this.body = error;
	}

}

module.exports = Add
