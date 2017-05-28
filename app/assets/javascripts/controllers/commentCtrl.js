angular.module('todoList')
.controller('CommentCtrl', [
'$scope',
'comments',
function($scope, comments) {
  $scope.createComment = function(scope) {
    comments.create($scope.commentTitle, scope.task.id).then(function(response) {
      scope.task.comments.push(response);
      scope.commentTitle = "";
    });
  };

  $scope.deleteComment = function(scope) {
    comments.delete(scope.comment.id).then(function() {
      scope.task.comments.splice(scope.task.comments.indexOf(scope.comment), 1)
    });
  };

}]);