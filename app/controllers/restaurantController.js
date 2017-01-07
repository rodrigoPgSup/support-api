var Order = require('../models/order')

exports.findAll = function(req, res){
	Order.find({},
		function(err, orders){
			if(err)
				res.status(404).send(err)
			res.status(200).send(orders)
		})

}

exports.find = function(req, res){
	Order.find({
		_id : req.param('id')
	}, function(err, order){
		if(err)
			res.status(404).send("Nothing found here Muthufucka")
		res.status(200).send(order)
	})
}

exports.create = function(req, res){
	Order.create({
		amount: req.body.amount,
		currency : req.body.currency,
		title : req.body.title
	}).then(function(order){
		res.status(201).send(order)
	})
}