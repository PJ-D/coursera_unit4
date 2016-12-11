(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
 
LunchCheckController.$inject=['$scope'];
 
 function LunchCheckController ($scope) {
  $scope.lunch = "";
  $scope.message = "pending";
  $scope.items = 0;

  $scope.LunchCheck = function () {
    var totalItems = lunch.split(',');
    $scope.items = totalItems.length;
    if (totalItems > 3) {
      $scope.message = "Too Much!";
    }
    else { $scope.message = "Enjoy";}
  };
  
};


})();
