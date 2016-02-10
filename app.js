'use strict';

var app = angular.module('modApp', []);

app.controller('ExerciseController', function($scope) {
    $scope.FavColor = 'yellow';

    function getseconds($scope) {
    	var startofcentury = new Date(1900,01,01);
    	var endofcentury = new Date(1999,12,31);
		var milliSeconds = endofcentury - startofcentury;
		var seconds = milliSeconds/1000;
        return $scope.secondsInACentury = seconds;
    };
    
});

app.controller('MyFirstController', function($scope) {
    $scope.name = 'severus snape';
});

app.controller('PageController', function($scope) {
    $scope.pagetitle = 'The Page Title';
});

app.controller('FilterController', function($scope) {
    $scope.name = 'john smith';
});

app.controller('HelloController', function($scope) {
    $scope.hello = {};
    $scope.hello.title = 'World';
});
