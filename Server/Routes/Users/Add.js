const parse = require('co-body'),
	randomToken = require('random-token'),
	User = require('../../Models/User');

const Add = function * (next) {
	var data = yield parse.json(this);
	data.token = randomToken(24)

  let newUser = new User(data);
  newUser.save();

	this.body = newUser;
}

module.exports = Add
