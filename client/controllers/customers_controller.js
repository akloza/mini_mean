storeApp.controller('CustomersController', function($scope, CustomersFactory, OrdersFactory){

	// get all orders
	OrdersFactory.get_all_orders(function(orders){
		$scope.orders = orders;
	})

	// delete a product
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

	// add a new customer
	$scope.add_customer = function(){
		var customer = {
			name: $scope.new_customer.name,
		};
		CustomersFactory.add_customer(customer, function(data){
			// $scope.customers = data;
			CustomersFactory.get_all_customers(function(customers){
				$scope.customers = customers;
			})
		});
		$scope.new_customer = {};

	}

	// show a customer
	CustomersFactory.get_customer(function(customer){
		$scope.customer = customer;
	})

	// display 'edit' page of customer
	CustomersFactory.get_customer(function(customer){
		$scope.customer = customer;
	})

	// update a customer
	$scope.update_customer = function(customer){
		CustomersFactory.update_customer(customer, function(data){
			// $scope.customers = data;
		})
	}

	// delete a customer
	$scope.delete_customer = function(customer){
		CustomersFactory.delete_customer(customer, function(data){
			// $scope.customers = data;
			CustomersFactory.get_all_customers(function(customers){
				$scope.customers = customers;
			})
		});
	}

})