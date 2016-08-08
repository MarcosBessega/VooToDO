var mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment');

var UserSchema = mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	token: {
		type: String,
		required: true,
		unique: true
	}
});

UserSchema.plugin(autoIncrement.plugin, 'User');
var User = mongoose.model('User', UserSchema);

module.exports = User;
