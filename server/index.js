const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
  console.log(`✓ App is running at http://localhost:${config.port}`)
  console.log('  Press CTRL-C to stop')
})
