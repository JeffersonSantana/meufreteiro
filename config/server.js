const express = require('express')
const load = require('express-load')
const dotenv = require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))

load()
  .then('app/routes', {verbose:true})
  .then('app/models', {verbose:true})
  .then('app/controllers', {verbose:true})
  .into(app)

module.exports = app
