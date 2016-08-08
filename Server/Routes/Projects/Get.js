const thunkify = require('thunkify-mongoose-model'),
Project = require('../../Models/Project');

const Find = thunkify(Project, 'find');

const Get = function * (next) {

  var AllProjects = yield Find({});

	this.body = AllProjects;
}

module.exports = Get
