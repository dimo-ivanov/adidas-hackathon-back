const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, default: `Guest-${Number(new Date())}` }
})

const User = mongoose.model('User', userSchema)

module.exports = User
