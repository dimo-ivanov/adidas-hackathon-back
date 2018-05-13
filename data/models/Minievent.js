const mongoose = require('mongoose')

const MinieventSchema = new mongoose.Schema(
  {
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    team: { type: String, enum: ['homeTeam', 'guestTeam'] },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    start: { type: Date },
    text: { type: String }
  }
)

module.exports = mongoose.model('Minievent', MinieventSchema)
