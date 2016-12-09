(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope, $filter) {
  $scope.lunch = "";
  $scope.message = "";
  
  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = "Enjoy";
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
