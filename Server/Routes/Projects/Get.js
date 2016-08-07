const test = function * (next) {
 var data = {
   'title': 'Koa test application',
   'body': 'Hello World!'
 };

 this.body = data;
}

module.exports = test
