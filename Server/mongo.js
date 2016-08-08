var fs = require('fs')
	mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');



  var options = {
    server: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    }
  };

const connect = (uri,cb) => {
  mongoose.connect(uri, options);
  var conn = mongoose.connection;

  autoIncrement.initialize(conn);

  conn.on('error', console.error.bind(console, 'connection error:'));

  conn.once('open', function() {
    cb();
  })
}

module.exports = connect
