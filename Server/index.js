var fs = require('fs');
var parse = require('co-body');
var logger = require('koa-logger');
var auth = require('koa-basic-auth');
var serve = require('koa-static');
var router = require('koa-router')();
var koa = require('koa');
var statelessauth = require('koa-statelessauth');
var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://root:root@ds145315.mlab.com:45315/vootodo';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

  var UserSchema = mongoose.Schema({
      name: String,
      password: String,
      token: String
  });

  var User = mongoose.model('User', UserSchema);

  var silence = new User({ name: 'Silence', password: '1234', token: 'randomtoken' });
  silence.save()


  var app = koa();

  var validator = {
      validate: function (token) {
        console.log(token);
          //This should go to a DB etc to get your user based on token
          if (token === '123') {
              return;
          }
          return {
              "name": "bob",
              "role": "admin",
              "email": "bob@acme.com"
          };
      }
  };

  var statelessauthOptions = {
      ignorePaths: ["/", "/sign"]
  };

  app.use(statelessauth(validator, statelessauthOptions));

  app.use(function * (next) {
      if (this.user) {
          console.log(this.user.name);
          console.log(this.user.email);
          console.log(this.user.role);
      }
      yield next;
  });

  // Init logger
  app.use(logger());
  // Init public dir for css, js and etc..
  app.use(serve(__dirname + '/public'));

  /**
   * Index page
   */
  router.get('/', function *(next) {
    var indexHTML = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');

    this.body = indexHTML;
  });

  /**
   * Simple test for GET request
   */
  router.get('/get-test', function *(next) {
    var data = {
      'title': 'Koa test application',
      'body': 'Hello World!'
    };

    this.body = data;
  });

  /**
   * Simple test for POST request
   */
  router.post('/post-test', function *(next) {
    // parse POST request
    var body = yield parse.json(this);

    var data = {
      'title': body.title,
      'body' : body.body
    };

    this.body = data;
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());


  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Listening to %s', port);


});
