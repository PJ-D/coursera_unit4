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
   if ($scope.lunch =="") {
    $scope.message = "Please Enter Data First";
   }
   else {
      var totalItems = $scope.lunch.split(',');
      $scope.items = totalItems.length;
      if ($scope.items > 3) {
        $scope.message = "Too Much!";
      }
      else { $scope.message = "Enjoy";}
   }
  };
  
};


})();
