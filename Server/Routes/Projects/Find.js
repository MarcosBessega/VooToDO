const thunkify = require('thunkify-mongoose-model'),
Project = require('../../Models/Project');

const Find = thunkify(Project, 'find');

const FindProject = function * (next) {

  let projects = yield Find({_id: this.params.id})
  if(projects.length)
    this.body = projects[0]
  else
    this.body = {error: 'Not Found' }
}

module.exports = FindProject
