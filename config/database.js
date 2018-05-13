const mongoose = require('mongoose')
const Event = require('../data/models/Event')

require('../data/models/Minievent')

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
