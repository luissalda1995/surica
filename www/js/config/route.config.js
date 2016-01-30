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
	  	views : {
	  	  'menuContent': {
	  	  	templateUrl: 'templates/registro.html',
	  	  	controller: 'RegistroController',
	  	  	controllerAs : 'registroCtrl'
	      }
	  	}
	  });

	    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/menu.html',
	    controller: 'AppCtrl'
	  })

	  .state('app.search', {
	    url: '/search',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/search.html'
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
	    })
	    .state('app.playlists', {
	      url: '/playlists',
	      views: {
	        'menuContent': {
	          templateUrl: 'templates/playlists.html',
	          controller: 'PlaylistsCtrl'
	        }
	      }
	    })

	  .state('app.single', {
	    url: '/playlists/:playlistId',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/playlist.html',
	        controller: 'PlaylistCtrl'
	      }
	    }
	  })

	  .state('app.registro', {
	  	url: '/usuarios/registro',
	  	views : {
	  	  'menuContent': {
	  	  	templateUrl: 'templates/registro.html',
	  	  	controller: 'RegistroController',
	  	  	controllerAs : 'registroCtrl'
	      }
	  	}
	  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/playlists');
	}

})();