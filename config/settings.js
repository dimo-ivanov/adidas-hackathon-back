const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://admin:admin12@ds119150.mlab.com:19150/football-space',
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
