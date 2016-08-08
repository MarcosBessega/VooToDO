'use strict'

var thunkify = require('thunkify-mongoose-model')

const validator = {
  validate: function*(token){
    var User = require('../Models/User')
    var Find = thunkify(User, 'find');
    var user = yield Find({token: token});
    if(user.length) return user[0]
    else return
  }
};

module.exports = validator;
