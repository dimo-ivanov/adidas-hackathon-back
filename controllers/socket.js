const Minievent = require('mongoose').model('Minievent')

const sendInitData = (socket) => {
  const { event, team } = socket.handshake.query

  Minievent
    .find({ event, team })
    .then(minievents => {
      socket.emit('socket-init', { minievents })
    })
}

const createMinievent = (data, socket) => {
  Minievent
    .create(data)
    .then(minievent => {
      socket.emit('socket-message', { action: 'socket/NEW_MINIEVENT', minievent })
    })
}

module.exports = {
  init: sendInitData,
  createMinievent: createMinievent
}
