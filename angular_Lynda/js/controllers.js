
var myApp = angular.module('myApp', []);

myApp.controller('myController', function myController($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
});
