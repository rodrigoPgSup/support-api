var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var morgan = require('morgan')
var app = express()

// var config = require('./config/config')

mongoose.connect('mongodb://dummy:123abc@ds157258.mlab.com:57258/restaurant-db')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended ': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type : 'application/vnd.api+json'}))
app.use(methodOverride())

require('./app/routes')(app)

app.listen(8080)

module.exports = app

