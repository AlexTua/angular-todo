angular.module('todoList')
.controller('ProjectCtrl', [
'$scope',
'Auth',
'projects',
function($scope, Auth, projects) {
  getProjects = function() {
    projects.getAll().then(function(data) {
      $scope.projects = data;
    });
  };

  getProjects();
  
  $scope.createProject = function() {
    projects.create().then(function(response) {
      $scope.projects.push(response.data);
    });
  };

  $scope.updateProject = function(scope, id) {
    projects.update(id, scope.title).then(function() {
      scope.project.title = scope.title;
    });
    scope.editSwitch = false;
  };

  $scope.deleteProject = function(id) {
    projects.delete(id).then(function() {
      getProjects();
    });
  };

  $scope.edit = function(scope, title) {
    scope.title = title;
    scope.editSwitch = true;
  };

  getProjects = function() {
    projects.getAll().then(function(data) {
      $scope.projects = data;
    });
  };
}]);