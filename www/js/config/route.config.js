(function(){
	'use strict';

	angular.module('suricaApp.routeConfig', [])
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  	.state('main', {
	  		url: '/main',
	  		templateUrl: 'templates/principal.html',
	  		controller: 'MainController',
	  		controllerAs: 'MainCtrl'
	  	})

	  	.state('registro', {
	  	url: '/usuarios/registro',


	  	  	templateUrl: 'templates/registro.html',
	  	  	controller: 'RegistroController',
	  	  	controllerAs : 'RegistroCtrl'
	  })

	    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/menu.html',
	    controller: 'MainController'
	  })

	  .state('app.categorias', {
	    url: '/categorias',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/categorias.html'
	      }
	    }
	  })

	  .state('app.browse', {
	      url: '/browse',
	      views: {
	        'menuContent': {
	          templateUrl: 'templates/browse.html'
	        }
	      }
	    });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/main');
	}

})();