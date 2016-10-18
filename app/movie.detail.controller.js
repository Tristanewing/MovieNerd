(function() {
	'use strict';

	angular
	.module('myApp')
	.controller('MovieDetailController', MovieDetailController);

	MovieDetailController.$inject = ['MovieFactory','$stateParams'];

	/* @ngInject */
	function MovieDetailController(MovieFactory, $stateParams) {
		var detail = this;
		detail.title = 'MovieDetailController';
		//detail.getDetail = getDetail
		//detail.getDescription = getDescription


		//function getDetail(){
			MovieFactory.getMovieDetail($stateParams.detailId)
			.then(function(result){

				detail.origin= result.data;
			}, function(error){
				console.log(error);
			})


		}

		


	
})();