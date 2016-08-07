const mongoose = require('mongoose'),
      connect = require('./mongo'),
      conf = require('./env');

connect(conf.mongoUri, () => {

  const User = require('./Models/User'),
  Type = require('./Models/Type');

  User.find({}, function(err, users) {
      users.forEach(user => {
        user.remove()
      })
  });

  Type.find({}, function(err, types) {
      types.forEach(type => {
        type.remove()
      })
  });

  let Admin = new User({
    name: 'Administrador',
    password: '123456',
    token: 'tokentokado',
    email: 'admin@admin.com'
  })

  Admin.save();

  let Fix = new Type({
    name: 'Fix',
    color: '#b30000',
    icon: 'fa-bug'
  })
  Fix.save()

  let Enhancement = new Type({
    name: 'Enhancement',
    color: '#0dad4d',
    icon: 'fa-plug'
  })
  Enhancement.save()

  let New = new Type({
    name: 'New',
    color: '#0696d8',
    icon: 'fa-plus'
  })
  New.save()

  let Question = new Type({
    name: 'Question',
    color: '#790dde',
    icon: 'fa-question'
  })
  Question.save()

  let Note = new Type({
    name: 'Note',
    color: '#c4c710',
    icon: 'fa-sticky-note'
  })
  Note.save()

  let Idea = new Type({
    name: 'Idea',
    color: '#f70a98',
    icon: 'fa-lightbulb-o'
  })
  Idea.save()

  User.find({}, function(err, users) {
      console.log(users);
  });

  Type.find({}, function(err, types) {
    console.log(types);
  });


});
