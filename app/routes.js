var restaurantController = require('./controllers/restaurantController')

module.exports = function(app){
	app.get('/api/orders',restaurantController.findAll)
	app.get('/api/orders/:id',restaurantController.find)
	app.post('/api/orders',restaurantController.create)
}