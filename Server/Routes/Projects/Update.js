'use strict'

const parse = require('co-body'),
	Project = require('../../Models/Project');

const Update = function * (next) {
	yield next;
	let data = yield parse.json(this);
	try {
		let result = yield Project.findByIdAndUpdate(this.params.id, data, {new: true}).exec();
		return this.body = result;
	} catch (_error) {
		let error = _error;
		return this.body = error;
	}
}

module.exports = Update
