storeApp.factory('OrdersFactory', function($http){
	var factory = {};
	factory.get_quantity = function(callback){
	var quantity = [];

	for (i=1; i<101; i++){
		quantity.push(i);
	};
	callback(quantity);
}
	// retrieve all orders
	factory.get_all_orders = function(callback){
		$http.get('/get_all_orders').success(function(orders){
			callback(orders);
		})
	};

	// add a new order
	factory.add_order = function(new_order, callback){
		$http.post('/add_order', new_order).success(function(order){
			callback(order);
		})
	};

	// show a single order
	factory.get_order = function(callback){
		$http.get('/get_order').success(function(order){
			callback(order);
		})
	};

	// edit a single order
	factory.edit_order = function(callback){
		$http.get('/edit_order').success(function(order){
			callback(order);
		})
	};

	// update a single order
	factory.update_order = function(order_to_update, callback){
		$http.post('/update_order', order_to_update).success(function(order){
			callback(order);
		})
	};

	// delete a single order
	factory.delete_order = function(order_to_remove, callback){
		$http.post('/delete_order', order_to_remove).success(function(order){
			callback(order);
		})
	};

	return factory;

});