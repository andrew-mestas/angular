angular.module('apiService', ['ngResource'])
.factory('Item', ['$resource', function($resource) {
  return $resource('http://pokeapi.co/api/v1/pokedex/:id')
}]).factory('Sprite', ['$resource', function($resource) {
  return $resource('http://pokeapi.co/api/v1/pokemon/:id')
}]).factory('Info', ['$resource', function($resource) {
  return $resource('http://pokeapi.co/api/v1/description/:id')
}]);
