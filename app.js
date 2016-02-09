'use strict';

var app = angular.module('modApp', []);

app.controller('PageController', function($scope){
	$scope.pagetitle = 'The Page Title';
});

app.controller('FilterController', function($scope){
	$scope.name = 'john smith';
});

app.controller('HelloController', function($scope){
	$scope.hello = {};
	$scope.hello.title = 'World';
});



