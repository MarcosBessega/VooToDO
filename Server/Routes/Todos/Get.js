'use strict'

const Todo = require('../../Models/Todo');

const Get = function * (next) {

  var AllTodos = yield Todo.find({}).exec();

	this.body = AllTodos;
}

module.exports = Get
