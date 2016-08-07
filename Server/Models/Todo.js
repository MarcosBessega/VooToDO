var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
   name: String,
   type: {type: mongoose.Schema.ObjectId, ref: 'Type'},
   Project: {type: mongoose.Schema.ObjectId, ref: 'Project'},
   stage: Number
});

TodoSchema.plugin(autoIncrement.plugin, 'Todo');
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
