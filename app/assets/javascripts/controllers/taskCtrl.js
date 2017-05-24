angular.module('todoList')
.controller('taskCtrl', [
'$scope',
'Auth',
'tasks',
function($scope, Auth, tasks) { 
  $scope.createTask = function(scope) {
    if(!$scope.taskTitle || $scope.taskTitle === "") { return; }
    tasks.create($scope.taskTitle, scope.project.id).then(function(response) {
      scope.project.tasks.push(response);
      scope.taskTitle = "";
    });
  };

  $scope.updateTitle = function(scope) {
    tasks.update(scope.task.id, {title: scope.title}).then(function() {
      scope.task.title = scope.title;
    });
    scope.editSwitch = false;
  };

  $scope.updateStatus = function(scope) {
    tasks.update(scope.task.id, {done: scope.task.done});
  };

  $scope.updateDate = function(scope, date) {
    tasks.update(scope.task.id, {deadline: date}).then(function() {
      scope.task.deadline = date;
    });
    scope.dateSwitch = false;  
  };

  $scope.deleteTask = function(scope) {
    tasks.delete(scope.task.id).then(function() {
      scope.project.tasks.splice(scope.project.tasks.indexOf(scope.task), 1);
    });
  };

  $scope.edit = function(scope) {
    scope.title = scope.task.title;
    scope.editSwitch = true;
  };

  $scope.pickDate = function(scope) {
    scope.date= scope.task.deadline;
    scope.dateSwitch = !scope.dateSwitch;
  };
}]);