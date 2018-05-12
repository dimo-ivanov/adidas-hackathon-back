const express = require('express')
const User = require('mongoose').model('User')
const ChatSession = require('mongoose').model('ChatSession')

const router = new express.Router()

router.post('/', (req, res) => {
  const { name, event, team } = req.body

  User
    .create({ name })
    .then(user => {
      // ChatSession
      //   .findOneAndUpdate(
      //     { event: event,  },
      //     {}
      //   )
    })
})

module.exports = router
