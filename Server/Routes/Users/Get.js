const thunkify = require('thunkify-mongoose-model'),
User = require('../../Models/User');

const Find = thunkify(User, 'find');

const Get = function * (next) {

  var AllUsers = yield Find({});

	this.body = AllUsers;
}

module.exports = Get
