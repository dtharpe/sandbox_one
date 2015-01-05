var customersController = function ($scope,$http) {
	$http.get("http://www.w3schools.com/website/Customers_JSON.php")
	.success(function(data){
		$scope.names = data;
	});
}