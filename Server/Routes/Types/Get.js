'use strict'

const Type = require('../../Models/Type');

const Get = function * (next) {

  var AllTypes = yield Type.find({}).exec();

	this.body = AllTypes;
}

module.exports = Get
