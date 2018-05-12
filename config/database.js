const mongoose = require('mongoose')
const Event = require('../data/models/Event')

require('../data/models/User')
require('../data/models/ChatSession')
require('../data/models/ChatMessage')

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)

  let db = mongoose.connection

  db.once('open', (err) => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

    Event.seedDemoEvent()
  })

  db.on('error', err => console.log(`Database Error: ${err}`))
}
