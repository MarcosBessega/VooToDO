const Project = require('../../Models/Project');

const GetProjects = function * (next) {

  var AllProjects = yield Project.find({user: this.params.id}).exec();

	this.body = AllProjects;
}

module.exports = GetProjects
