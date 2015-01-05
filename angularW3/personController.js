var personController = function($scope){
	$scope.firstName = "John";
	$scope.lastName = 'Doe';
	$scope.myVar = false;
	$scope.fullName = function(nickname){
		return $scope.firstName + " " + $scope.lastName + " ' " + nickname + " ' ";
	}
	$scope.toggle = function(){
		$scope.myVar = !$scope.myVar;
	}
}