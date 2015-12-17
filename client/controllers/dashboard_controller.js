storeApp.controller('DashboardController', function($scope, CustomersFactory, OrdersFactory, ProductsFactory){

	// get all orders
	OrdersFactory.get_all_orders(function(orders){
		$scope.orders = orders;
	})

	// get all customers
	CustomersFactory.get_all_customers(function(customers){
		$scope.customers = customers;
	})

	// get all products
	ProductsFactory.get_all_products(function(products){
		$scope.products = products;
	})


})