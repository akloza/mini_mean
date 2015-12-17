storeApp.factory('ProductsFactory', function($http){
	var factory = {};

	// add a new product
	factory.add_product = function(new_product, callback){
		console.log(new_product);
		$http.post('/add_product', new_product).success(function(product){
			callback(product);
		})
	};

	// show a single product
	factory.get_product = function(callback){
		$http.get('/get_product').success(function(product){
			callback(product);
		})
	};

	// edit a single product
	factory.edit_product = function(callback){
		$http.get('/edit_product').success(function(product){
			callback(product);
		})
	};

	// update a single product
	factory.update_product = function(product_to_update, callback){
		$http.post('/update_product', product_to_update).success(function(product){
			callback(product);
		})
	};

	// delete a single product
	factory.delete_product = function(product_to_remove, callback){
		$http.post('/delete_product', product_to_remove).success(function(product){
			callback(product);
		})
	};

	// retrieve all products
	factory.get_all_products = function(callback){
		$http.get('/get_all_products').success(function(products){
			callback(products);
		})
	};

	return factory;

});