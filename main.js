var app = angular.module("myApp", []);

app.controller("DemoController", ["$scope", function($scope){
	$scope.counter = 100;
	$scope.add = function(value){
		$scope.counter += value;
	};
	$scope.substract = function(value){
		$scope.counter -= value;
	}
}]);