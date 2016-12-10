(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope, $filter) {
  $scope.lunch = "";
  $scope.message = "";
  
  $scope.checklunch = function () {
  var lnch = lunch.split(',');
  if lnch.lenght > 3 output = "Too Much!";
    else output = "Enjoy!";
  console.log(output);
  return output;
  };


  };
}

})();
