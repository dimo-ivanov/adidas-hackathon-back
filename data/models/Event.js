const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, default: 'game' },
  code: { type: String, required: true, unique: true },
  homeTeam: { type: String, required: true },
  guestTeam: { type: String, required: true },
  start: { type: Date, required: true, default: new Date() },
  end: { type: Date, required: true, default: new Date() }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event

module.exports.seedDemoEvent = () => {
  Event
    .find({})
    .then(events => {
      if (events.length > 0) {
        return
      }

      const startTime = new Date()
      let endTime = new Date()
      endTime.setHours(endTime.getHours() + 2)

      Event
        .create({
          name: 'Real Madrid C.F. VS FC Bayern München',
          code: '5432',
          homeTeam: 'Real Madrid C.F.',
          guestTeam: 'FC Bayern München',
          start: startTime,
          end: endTime
        })
    })
}
