const socketio = require('socket.io')
const SocketController = require('../controllers/socket')

module.exports = (server) => {
  const websocket = socketio(server)

  websocket.on('connection', (socket) => {
    SocketController.init(socket)

    socket.on('socket-message', (payload) => {
      SocketController[payload.action] && SocketController[payload.action](payload.data, socket)
    })
  })
}
