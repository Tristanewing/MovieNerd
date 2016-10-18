(function() {
	'use strict';

	angular
	.module('myApp')
	.factory('MovieFactory', MovieFactory);

	MovieFactory.$inject = ['$http','$q'];

	/* @ngInject */
	function MovieFactory($http,$q) {
		var service = {
			getMovies: getMovies,
			getMovieDetail:getMovieDetail
			//getDescription: getDescription
		};
		return service;

        ////////////////

        function getMovies(inputOne) {
        	var defer = $q.defer();

        	$http({
        		method:'GET',
        		url:'http://www.omdbapi.com/',
        		params:{
        			s: inputOne

        		}




        	})

        	.then(
        		function(response){
        			if(typeof response==='object'){
        				defer.resolve(response);
        			}

        		},
        		function(err) {

        			defer.reject(err);
        		});

        	return defer.promise;



        }

       function getMovieDetail(detailId) {
        	var defer = $q.defer();

        	$http({
        		method:'GET',
        		url:'http://www.omdbapi.com/',
        		params:{
        			i: detailId

        		}

        	})

        	.then(
        		function(result){
        			if(typeof result==='object'){
        				defer.resolve(result);
        			}

        		},
        		function(err) {

        			defer.reject(err);
        		});

        	return defer.promise;



        }

       
      
}

})();



