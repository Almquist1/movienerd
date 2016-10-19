(function() {
    'use strict';

    angular
        .module('movieApp')
        .service('movieService', movieService);

    movieService.$inject = ['$http']; 

    /* @ngInject */
    function movieService($http) {
        var service = {
        	getMovie: getMovie,
        	getDetails: getDetails
        };
        return service;

        ////////////////

        function getMovie(movie) {

        	return $http({
        		method: 'GET',
        		url: 'http://www.omdbapi.com/',
        		params: {
              apikey: "c800acd6",
        			s: movie
        		},
			}).then(function(response) {
				return response;
			}, function(error) {
				console.log(error);
				return error;
			});
        }
    	function getDetails(movieDetails) {

    		return $http({
    			method: 'GET',
    			url: 'http://www.omdbapi.com/',
    			params: {
    				i: movieDetails
    			},
    		}).then(function(response) {
    			return response;
			}, function(error) {
				console.log(error);
				return error;
			});
    	}
    }
})();


// <!-- REVIEWER COMMENTS  -->
//Reviewed by BL
// Reviewed by JKL
// Reviewed by JK