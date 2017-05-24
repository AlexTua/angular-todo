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

  $scope.reorderTask = function(scope, direction) {
    tasks.reorder(scope.task.id, direction).then(function() {
      var shift = (direction === 'up') ? -1 : 1;
      var arr = scope.project.tasks;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].position === scope.task.position + shift) {
          var temp = arr[i].position;
          arr[i].position = scope.task.position;
          scope.task.position = temp;    
          break;
        }
      }
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

  compare = function() {
    projects.getAll().then(function(data) {
      $scope.projects = data;
    });
  };
}]);