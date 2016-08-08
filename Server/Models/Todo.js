var mongoose = require('mongoose'),
	autoPopulate = require('mongoose-autopopulate');

var TodoSchema = mongoose.Schema({
   name: String,
   description: String,
   type: {type: Number, ref: 'Type', autopopulate: true},
   project: {type: Number, ref: 'Project'},
   stage: Number
});

TodoSchema.plugin(autoIncrement.plugin, 'Todo');
TodoSchema.plugin(autoPopulate);
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
