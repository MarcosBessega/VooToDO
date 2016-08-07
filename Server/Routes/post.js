const	parse = require('co-body');

const post = function * (next) {
  // parse POST request
  var body = yield parse.json(this);

  var data = {
    'title': body.title,
    'body': body.body
  };

  this.body = data;
}

module.exports = post
