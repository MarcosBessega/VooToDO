'use strict'

const thunkify = require('thunkify-mongoose-model'),
User = require('../../Models/User');

const Find = thunkify(User, 'find');

const FindUser = function * (next) {

  try {
    let user = yield User.findById(this.params.id).exec()
    this.body = user
  }catch(err) {
    this.body = err
  }

}

module.exports = FindUser
