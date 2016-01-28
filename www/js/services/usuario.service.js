(function(){
	'use strict';

	angular.module('suricaApp.services', []).
		factory('usuarioService',usuarioService);

	usuarioService.$inject = ['http', '$q']

	function usuarioService(http, $q){
		var service = {
			registrar: registrar
		};
		return service;

		function registrar(usuarioInput){
			var url = 'localhost:3000/usuarios';
			var deferred = $q.defer();
			var request = {
				usuario : usuarioInput
			};
			http.post(url, request).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}
	}
})();