const Todo = require('../../Models/Todo');

const GetTodos = function * (next) {

  var AllTodos = yield Todo.find({project: this.params.id}).exec();

	this.body = AllTodos;
}

module.exports = GetTodos
