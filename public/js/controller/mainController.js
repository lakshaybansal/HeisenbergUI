angular.module('DemoApp', [
  'ngMaterial'
]).controller('MainCtrl', function($scope) {
  $scope.name = 'John';
  $scope.action1 = function() {
    alert('yo');
  };
});
