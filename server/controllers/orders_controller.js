var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		// show_all: function(req, res){
		// 	Order.find({}, function(err, orders){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			res.json(orders);
		// 		}
		// 	})
		// },

		show_all: function(req, res){
			Order.find({}).populate('_customer').exec(function(err, orders){
				if(err){
					console.log(err);
				} else {
					res.json(orders);
				}
			})
		},

		show: function(req, res){
			Order.findOne({_id: req.params.id}, function(err, order){
				if(err){
					console.log(err);
				} else {
					res.json(order);
				}
			})
		},

		add: function(req, res){
			var new_order = new Order(req.body);
			new_order.save(function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/')
				}
			})
		},

		edit: function(req, res){
			Order.findOne({_id: req.params.id}, function(err, order){
				if(err){
					console.log(err);
				} else {
					res.json(order);
				}
			})
		},

		update: function(req, res){
			Order.update({_id:req.params.id},{$set:{product: req.body.product, quantity:req.body.quantity}}, function(err, order){
				if(err){
					console.log(err);
				} else {
					res.json(order);
				}
			})
		},

		remove: function(req, res){
			Order.remove({_id: req.body._id}, function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		}
	}
})();