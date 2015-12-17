storeApp.controller('OrdersController', function($scope, OrdersFactory, CustomersFactory, ProductsFactory){
		OrdersFactory.get_quantity(function(data){
		$scope.quantity = data;
	});
	// add a new order
	$scope.add_order = function(){
		var order = {
			product: $scope.new_order.product,
			quantity: $scope.new_order.quantity,
			_customer: $scope.new_order.customer,
		};
		OrdersFactory.add_order(order, function(data){
			// successful message
			// $scope.orders = data;
			OrdersFactory.get_all_orders(function(orders){
				$scope.orders = orders;
			})
		});
		$scope.new_order = {};
	}

	// update a order
	$scope.update_order = function(order){
		OrdersFactory.update_order(order, function(data){
			// $scope.orders = data;
			OrdersFactory.get_order(function(order){
				$scope.order = order;
			})
		})
	}

	// delete a order
	$scope.delete_order = function(order){
		OrdersFactory.delete_order(order, function(data){
			// $scope.orders = data;
			OrdersFactory.get_all_orders(function(orders){
				$scope.orders = orders;
			})
		});
	}
	
	// get all customers
	CustomersFactory.get_all_customers(function(customers){
		$scope.customers = customers;
	})
	
	// get all orders
	OrdersFactory.get_all_orders(function(orders){
		$scope.orders = orders;
	})

	// get all products
	ProductsFactory.get_all_products(function(products){
		$scope.products = products;
	})

	// show a order
	OrdersFactory.get_order(function(order){
		$scope.order = order;
	})

	// display 'edit' page of order
	OrdersFactory.get_order(function(order){
		$scope.order = order;
	})

	

})