'use strict'

if(process.env.ENV === 'production') {
  let config = {
    mongoUri: 'mongodb://root:root@ds145315.mlab.com:45315/vootodo'
  }
}else{
  let config = {
    mongoUri: 'mongodb://localhost/vootodo'
  }
}

module.exports = config;
