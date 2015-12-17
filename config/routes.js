var customers = require('../server/controllers/customers_controller.js');
var orders = require('../server/controllers/orders_controller.js');
var products = require('../server/controllers/products_controller.js');

module.exports = function(app){
	// customers
	app.get('/get_all_customers', function(req, res){
		customers.show_all(req, res);
	})

	app.get('/get_customer/:id', function(req, res){
		customers.show(req, res);
	})

	app.post('/add_customer', function(req, res){
		customers.add(req, res);
	})

	app.get('/edit_customer/:id', function(req, res){
		customers.edit(req, res);
	})

	app.post('/update_customer', function(req, res){
		customers.update(req, res);
	})

	app.post('/delete_customer', function(req, res){
		customers.remove(req, res);
	})

	// orders
	app.get('/get_all_orders', function(req, res){
		orders.show_all(req, res);
	})

	app.get('/get_order/:id', function(req, res){
		orders.show(req, res);
	})

	app.post('/add_order', function(req, res){
		orders.add(req, res);
	})

	app.get('/edit_order/:id', function(req, res){
		orders.edit(req, res);
	})

	app.post('/update_order', function(req, res){
		orders.update(req, res);
	})

	app.post('/delete_order', function(req, res){
		orders.remove(req, res);
	})


	// products
	app.get('/get_all_products', function(req, res){
		products.show_all(req, res);
	})

	app.get('/get_product/:id', function(req, res){
		products.show(req, res);
	})

	app.post('/add_product', function(req, res){
		console.log('---------------------');
		console.log(req.body);
		console.log('---------------------');
		products.add(req, res);
	})

	app.get('/edit_product/:id', function(req, res){
		products.edit(req, res);
	})

	app.post('/update_product', function(req, res){
		products.update(req, res);
	})

	app.post('/delete_product', function (req, res){
		products.remove(req, res);
	})





}