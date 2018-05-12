const eventsRoutes = require('../routes/events')

module.exports = (app) => {
  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' })
  })

  app.use('/events', eventsRoutes)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
