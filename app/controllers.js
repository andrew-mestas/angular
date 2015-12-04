angular.module('apiCtrls', ['apiService'])
.controller('apiCtrl', ['$scope', 'Item', 'Sprite', 'Info', function($scope, Item, Sprite, Info) {
  $scope.data = [];
  $scope.name = ""
  $scope.num = 1
  $scope.move = function(num){
  	if($scope.num + num != 0){
  		$scope.num = $scope.num + num;
  	}

  }

  $scope.pokemonIndex = function(pokemon){

  	return parseInt(pokemon.resource_uri.split('/')[3]);
  };

  Item.get(function success(data) {
  	$scope.data = data.objects[0].pokemon;
    console.log(parseInt(data.objects[0].pokemon[0].resource_uri.split("/")[3]));
  }, function error(data) {
    console.log(data);
  });
}]).controller("specificCtrl", [
	"$scope", 
	"$routeParams", 
	"Sprite", function($scope, $routeParams, Sprite){
		Sprite.get({id: $routeParams.id}, 
			function(data){
				console.log(data)
				$scope.abilities = data.abilities;
				$scope.data = $routeParams.id;
				$scope.attack = data.attack;
				$scope.hp = data.hp;
				$scope.defense = data.defense;
				$scope.descriptionId = parseInt(data.descriptions[0].resource_uri.split('/')[4]);
			}, 
			function(data){
				console.log("Error", data)
			});
	}
]).controller("InfoCtrl", [
	"$scope", 
	"$routeParams", 
	"Info", function($scope, $routeParams, Info){
		Info.get({id: $routeParams.id}, 
			function(data){
				$scope.description = data.description;		
			}, 
			function(data){
				console.log("Error", data)
			});
	}
]);
