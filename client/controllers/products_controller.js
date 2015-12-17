storeApp.controller('ProductsController', function($scope, ProductsFactory, OrdersFactory){
		OrdersFactory.get_quantity(function(data){
			$scope.quantity = data;
		});
	// add a new product
	$scope.add_product = function(){
		var product_repack = {
			name: $scope.new_product.name,
			quantity: $scope.new_product.quantity,
			description: $scope.new_product.description,

		};
		ProductsFactory.add_product(product_repack, function(data){
			$scope.products = data;

			// console.log($scope.products);
			OrdersFactory.get_all_orders(function(orders){
				$scope.orders = orders;
			})
			ProductsFactory.get_all_products(function(products){
				$scope.products = products;
	})
		});
		$scope.new_product = {};
	}

	// show a product
	ProductsFactory.get_product(function(product){
		$scope.product = product;
	})

	// display 'edit' page of product
	ProductsFactory.get_product(function(product){
		$scope.product = product;
	})

	// update a product
	$scope.update_product = function(product){
		ProductsFactory.update_product(product, function(data){
			$scope.products = data;
		})
	}

	// delete a product
	$scope.delete_product = function(product){
		ProductsFactory.delete_product(product, function(data){
			$scope.products = data;
			ProductsFactory.get_all_products(function(products){
				$scope.products = products;
	})
		});
	}

	// get all products
	ProductsFactory.get_all_products(function(products){
		$scope.products = products;
	})

})