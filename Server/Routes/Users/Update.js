'use strict'

const parse = require('co-body'),
	User = require('../../Models/User');

const Update = function * (next) {
	yield next;
	let data = yield parse.json(this);
	try {
		let result = yield User.findByIdAndUpdate(this.params.id, data, {new: true}).exec();
		return this.body = result;
	} catch (_error) {
		let error = _error;
		return this.body = error;
	}
}

module.exports = Update
