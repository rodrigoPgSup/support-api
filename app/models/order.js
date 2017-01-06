var mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.model('Order',{
	amount : String,
	currency : String,
	title : String
})