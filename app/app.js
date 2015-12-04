var app = angular.module('RouteApp', ['apiService', 'apiCtrls', 'ngRoute']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function($routeProvider, $locationProvider) {
		$routeProvider.when("/",{
			templateUrl: "views/index.html",
			controller: "apiCtrl"
		}).when("/about",{
			templateUrl: "views/generalAbout.html"
		}).when("/pokemon/:id",{
			templateUrl: "views/pokemon.html",
			controller: "specificCtrl"
		}).when("/info/:id",{
			templateUrl: "views/about.html",
			controller: "InfoCtrl"
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");
	}
]);
