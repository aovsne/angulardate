
var app = angular.module('myCalender',[]);
 app.controller('calController', function($scope) {
     $scope.monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
     $scope.D = new Date().getDate();
     $scope.M = $scope.monthShortNames[new Date().getMonth()];
 });