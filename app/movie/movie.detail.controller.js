(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('mainDetailController', mainDetailController);

    mainDetailController.$inject = ['$http', 'movieService', '$stateParams'];

    /* @ngInject */
    function mainDetailController($http, movieService, $stateParams) {
        var vm = this;
        var imdbID = $stateParams.imdbID;
        vm.movieDetails = [];

        console.log(imdbID);
            


        activate();

        ////////////////

        function activate() {
        	movieService.getDetails($stateParams.imdbID).then(
        		function(data) {
        			vm.movieDetails = data;
        			console.log(vm.movieDetails);
        		})
        }
    }
})();


// <!-- REVIEWER COMMENTS  -->
//Reviewed by BL
// Reviewed by JKL: This file probably needs the most attention at this point
// Reviewed by JK
