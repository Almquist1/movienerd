// controls state 1

(function() {

'use strict';

    angular
        .module('movieApp')
        .controller('movieController', movieController);

    movieController.$inject = ['$http', 'movieService'];
    
    /* @ngInject */
    function movieController($http, movieService) {
        var vm = this;

        vm.getMovieTitle = function(movie) {
        	var promise = movieService.getMovie(movie);
        	promise.then(function(data) {
        		vm.movieData = data

        		console.log(vm.movieData);
        	},  function(error) {
        		console.log(error);

        	});
        }

    }
})();

// <!-- REVIEWER COMMENTS  -->
//Reviewed by BL
// Reviewed by JKL
// Reviewed by JK
