const express = require('express')
const Event = require('mongoose').model('Event')

const router = new express.Router()

router.get('/:code', (req, res) => {
  const eventCode = req.params.code

  Event
    .findOne({ code: eventCode })
    .then(event => {
      if (!event) {
        return res.status(200).json({
          success: false,
          message: 'Event does not exists.'
        })
      }

      res.status(200).json({ success: true, event })
    })
    .catch(err => {
      return res.status(200).json({
        success: false,
        message: err.message
      })
    })
})

module.exports = router
