const thunkify = require('thunkify-mongoose-model'),
Todo = require('../../Models/Todo');

const Find = thunkify(Todo, 'find');

const FindTodo = function * (next) {

  let todos = yield Find({_id: this.params.id})
  if(todos.length)
    this.body = todos[0]
  else
    this.body = {error: 'Not Found' }
}

module.exports = FindTodo
