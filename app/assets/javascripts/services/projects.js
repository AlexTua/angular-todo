angular.module('todoList')
.factory('projects', [
'$http',
function($http) {
  return {
    getAll: function() {
      return $http.get('/projects.json').then(function(response){
        return response.data;
      });
    },

    create: function() {
      return $http.post('/projects.json');
    },  

    update: function(id, title) {
      return $http.put('/projects/' + id + '.json', { title: title });
    },

    delete: function(id) {
      return $http.delete('/projects/' + id + '.json');
    }
  };
}]);