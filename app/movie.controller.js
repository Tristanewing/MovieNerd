(function() {
	'use strict';

	angular
	.module('myApp')
	.controller('MovieController', MovieController);

	MovieController.$inject = ['$http', '$q', 'MovieFactory' ];

	/* @ngInject */
	function MovieController($http, $q, MovieFactory) {
		var vm = this;
		vm.titleOne = 'MovieController';
		vm.getMovies=getMovies

		activate(); 

        ////////////////

        function activate() {
        }


        function getMovies(){

        	MovieFactory.getMovies(vm.inputOne).then(function(response){

        		
        	 vm.title=response.data.Search;

        		

        	})


        }
    }
})();