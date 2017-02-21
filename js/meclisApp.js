var meclisApp = angular.module('meclisApp', []);
	meclisApp.controller('meclisCtrl', function ($scope, $http){
		$http.get('meclisler.json').success(function(data) {
			$scope.meclisler = data;
		});
	});