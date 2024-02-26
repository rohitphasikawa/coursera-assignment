angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.checkLunch = function() {
      if (!$scope.lunchMenu) {
        $scope.message = "Please enter data first";
      } else {
        var items = $scope.lunchMenu.split(',').filter(item => item.trim().length > 0);
        if (items.length <= 3) {
          $scope.message = "Enjoy your food";
        } else {
          $scope.message = "Too much food";
        }
      }
    };
  });
