(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('usuarioService', usuarioService);

	usuarioService.$inject = ['$http', '$q']

	function usuarioService($http, $q){
		var usuario;
		var service = {
			registrar: registrar,
			login: login,
			usuario: usuario
		};
		return service;

		function registrar(usuarioInput){
			var url = 'http://localhost:3000/usuarios';
			var deferred = $q.defer();
			var request = {
				usuario : usuarioInput
			};
			$http.post(url, request).then(function(response) {
				usuario = response.data;
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function login(usuarioInput){
			var url = 'http://localhost:3000/usuarios/login';
			var deferred = $q.defer();
			var request = {
				username : usuarioInput.username,
				password: usuarioInput.password,
			};
			$http.post(url, request).then(function(response) {
				usuario = response.data;
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

	}
})();