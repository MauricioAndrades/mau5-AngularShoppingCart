'use strict';
angular.module('modApp', [])
	.controller('HelloController', function($scope){
		$scope.hello = {};
		$scope.hello.title = 'World';
	});
