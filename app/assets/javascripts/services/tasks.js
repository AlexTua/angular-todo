angular.module('todoList')
.factory('tasks', [
'$http',
function($http) {
  return {
    create: function(title, project_id) {
      var params = { title: title, project_id: project_id };
      return $http.post('/tasks.json', params).then(function(response){
        return response.data;
      });
    },  

    update: function(id, params) {
      return $http.put('/tasks/' + id + '.json', params);
    },

    delete: function(id) {
      return $http.delete('/tasks/' + id + '.json');
    },

    reorder: function(id, direction) {
      return $http.put('/tasks/' + id + '/reorder.json', {direction: direction});
    }
  };
}]);