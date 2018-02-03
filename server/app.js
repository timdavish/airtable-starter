const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const path = require('path')

const routes = require('./routes')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/', routes)
app.use(errorHandler())

module.exports = app
