storeApp.factory('CustomersFactory', function($http){
	var factory = {};

	// retrieve all customers
	factory.get_all_customers = function(callback){
		$http.get('/get_all_customers').success(function(customers){
			callback(customers);
		})
	};

	// add a new customer
	factory.add_customer = function(new_customer, callback){
		$http.post('/add_customer', new_customer).success(function(customer){
			callback(customer);
		})
	};

	// show a single customer
	factory.get_customer = function(callback){
		$http.get('/get_customer/:id').success(function(customer){
			callback(customer);
		})
	};

	// edit a single customer
	factory.edit_customer = function(callback){
		$http.get('/edit_customer/:id').success(function(customer){
			callback(customer);
		})
	};

	// update a single customer
	factory.update_customer = function(customer_to_update, callback){
		$http.post('/update_customer', customer_to_update).success(function(customer){
			callback(customer);
		})
	};

	// delete a single customer
	factory.delete_customer = function(customer_to_remove, callback){
		$http.post('/delete_customer', customer_to_remove).success(function(customer){
			callback(customer);
		})
	};

	return factory;

});