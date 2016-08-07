var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
   name:  { type: String, required: true, unique: true },
   description: { type: String, required: true },
   todos:  [{type: mongoose.Schema.ObjectId, ref: 'Todo'}],
   user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

ProjectSchema.plugin(autoIncrement.plugin, 'Project');
var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
