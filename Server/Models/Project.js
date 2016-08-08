var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
   name:  { type: String, required: true, unique: true },
   description: { type: String, required: true },
   user: {type: Number, ref: 'User'}
});

ProjectSchema.plugin(autoIncrement.plugin, 'Project');
var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
