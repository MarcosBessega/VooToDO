const Todo = require('../../Models/Todo');

const Remove = function * (next) {
	try {
		let result = yield Todo.remove({_id: this.params.id}).exec();
		return this.body = result;
  } catch (_error) {
		let error = _error;
		return this.body = error;
	}

}

module.exports = Remove
