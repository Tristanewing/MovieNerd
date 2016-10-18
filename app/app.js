(function() {
	'use strict';

 angular.module('myApp', ['ui.router'])

		.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/movie1");

		$stateProvider
			.state('movie1', {
				url: "/movie1",
				templateUrl: "app/partials/movie1.html",
				controller: 'MovieController',
				controllerAs: 'vm'
		})

			.state('movieDetail', {
				url:"/movieDetail/:detailId",
				templateUrl:"app/partials/movieDetail.html",
				controller:'MovieDetailController',
				controllerAs:'detail'
			});

		
	});
})();