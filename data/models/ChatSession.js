const mongoose = require('mongoose')
const findOrCreate = require('mongoose-find-or-create')

const ChatSessionSchema = new mongoose.Schema(
  {
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    type: { type: String, enum: ['general', 'homeTeam', 'guestTeam'], default: 'general' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

ChatSessionSchema.virtual('msg', {
  ref: 'ChatMessage',
  localField: '_id',
  foreignField: 'session'
})

ChatSessionSchema.plugin(findOrCreate)

const ChatSession = mongoose.model('ChatSession', ChatSessionSchema)

module.exports = ChatSession
