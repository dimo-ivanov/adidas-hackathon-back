const Minievent = require('mongoose').model('Minievent')

const sendInitData = (socket) => {
  const { event, team } = socket.handshake.query

  Minievent
    .find({ event, team })
    .then(minievents => {
      socket.emit('socket-init', { minievents })
    })
}

module.exports = {
  init: sendInitData
}
