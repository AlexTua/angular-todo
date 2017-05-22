angular.module('todoList')
.controller('AuthCtrl', [
'$scope',
'$state',
'$location',
'Auth',
'Flash',
function($scope, $state, $location, Auth, Flash){
  $scope.logout = function () {
    Auth.logout().then(function() {
      $location.path('/login');
    });
  };

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $location.path('/');
    }, function(response){
      Flash.create('danger', response.data.error, 3000, {}, true);
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $location.path('/');
    }, function(){
      Flash.create('danger', "Wrong input", 3000, {}, true);
    });
  };
}]);