const env = process.env.NODE_ENV || 'development'

const settings = require('./config/settings')[env]

const app = require('express')()
const http = require('http')
const server = http.Server(app)

require('./config/database')(settings)
require('./config/express')(app)
require('./config/routes')(app)
// require('./config/passport')()

server.listen(settings.port, () => {
  console.log(`Server running on port ${settings.port}...`)
})

require('./config/websocket')(server)
