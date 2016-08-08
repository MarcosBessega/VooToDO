'use strict'

if(process.env.ENV === 'production') {
  config = {
    mongoUri: 'mongodb://root:root@ds145315.mlab.com:45315/vootodo'
  }
}else{
  config = {
    mongoUri: 'mongodb://localhost/vootodo'
  }
}

module.exports = config;
