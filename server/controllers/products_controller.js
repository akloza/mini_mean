var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return {
		show_all: function(req, res){
			Product.find({}, function(err, products){
				if(err){
					console.log(err);
				} else {
					res.json(products);
				}
			})
		},

		show: function(req, res){
			Product.findOne({_id: req.params.id}, function(err, product){
				if(err){
					console.log(err);
				} else {
					res.json(product);
				}
			})
		},

		add: function(req, res){
			var new_product = new Product(req.body);
			new_product.save(function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/')
				}
			})
		},

		edit: function(req, res){
			Product.findOne({_id: req.params.id}, function(err, product){
				if(err){
					console.log(err);
				} else {
					res.json(product);
				}
			})
		},

		update: function(req, res){
			Product.update({_id:req.params.id},{$set:{name: req.body.name, quantity: req.body.quantity, description: req.body.description}}, function(err, product){
				if(err){
					console.log(err);
				} else {
					res.json(product);
				}
			})
		},

		remove: function(req, res){
			Product.remove({_id: req.body._id}, function(err, data){
				if(err){
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		}
	}
})();