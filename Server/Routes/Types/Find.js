const Type = require('../../Models/Type');

const Find = function * (next) {
  try{
    let type = yield Type.findById(this.params.id).exec()
    this.body = type
  }catch(err) {
    this.body = err
  }

}

module.exports = Find
