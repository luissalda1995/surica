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
	        templateUrl: 'templates/categorias.html',
	        controller: 'CategoriasController',
	        controllerAs: 'CategoriasCtrl'
	      }
	    }
	  })

	  .state('app.proveedores', {
	    url: '/proveedores/:servicio',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/proveedores.html',
	        controller: 'ProveedoresController',
	        controllerAs: 'ProveedoresCtrl'
	      }
	    }
	  })

	  .state('app.chats', {
	    url: '/chats',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/chats.html',
	        controller: 'ChatsController',
	        controllerAs: 'ChatsCtrl'
	      }
	    }
	  })

	  .state('app.chat', {
	    url: '/chat/:chatId',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/chat-detalle.html',
	        controller: 'ChatDetalleController',
	        controllerAs: 'ChatDetalleCtrl'
	      }
	    }
	  })	  

	  .state('app.servicios', {
	    url: '/servicios/:usuario',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/servicios.html',
	        controller: 'ServiciosController',
	        controllerAs: 'ServiciosCtrl'
	      }
	    }
	  })

	  .state('app.servicios.cliente', {
	    url: '/servicios/cliente/:usuario',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/servicios.html',
	        controller: 'ServiciosController',
	        controllerAs: 'ServiciosCtrl'
	      }
	    }
	  })

	  .state('app.servicios.proveedor', {
	    url: '/servicios/cliente/:usuario',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/serviciosProveedor.html',
	        controller: 'ServiciosController',
	        controllerAs: 'ServiciosCtrl'
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/main');
	}

})();