var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		show_all: function(req, res){
			Customer.find({}, function(err, customers){
				if(err){
					console.log(err);
				} else {
					res.json(customers);
				}
			})
		},

		show: function(req, res){
			Customer.findOne({_id: req.params.id}).populate('orders').exec(function(err, customer){
				if(err){
					console.log(err);
				} else {
					res.json(customer);
				}
			})
		},

		add: function(req, res){
			var new_customer = new Customer(req.body);
			new_customer.save(function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		},

		edit: function(req, res){
			Customer.findOne({_id: req.params.id}, function(err, customer){
				if(err){
					console.log(err);
				} else {
					res.json(customer);
				}
			})
		},

		update: function(req, res){
			Customer.update({_id:req.params.id},{$set:{name: req.body.name}}, function(err, customer){
				if(err){
					console.log(err);
				} else {
					res.json(customer);
				}
			})
		},

		remove: function(req, res){
			Customer.remove({_id: req.body._id}, function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		}
	}
})();