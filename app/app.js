//module//
(function() {
    'use strict';

    var movieApp = angular.module('movieApp', ['ui.router']);
//states//
    movieApp.config(function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise("/state1");

    		$stateProvider
    			.state('state1', {
    				url:"/state1",
    				templateUrl:"app/Partials/state1.html",
    				controller: "movieController", 
    				controllerAs: 'vm2'
    			})
    			//pull details//
    			.state('state2', {
    				url: "/state2/:imdbID",
    				templateUrl:"app/Partials/state2.html",
    				controller: 'mainDetailController',
    				controllerAs: 'vm'
    			});

        });
})();


 // <!-- REVIEWER COMMENTS  -->
//Reviewed by BL
//Reviewed by JKL
//Reviewed by JK