const mongoose = require('mongoose')

const ChatMessageSchema = new mongoose.Schema(
  {
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatSession' },
    isFile: { type: Boolean, default: false },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Participants' },
    text: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('ChatMessage', ChatMessageSchema)
