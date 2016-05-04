(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('usuarioService', usuarioService);

	usuarioService.$inject = ['$http', '$q'];

	function usuarioService($http, $q){
		cargarCredencialesUsuario();

		var usuario;
		var estaAutenticado = false;
		var service = {
			registrar: registrar,
			login: login,
			usuario: getUsuario,
			estaAutenticado: getAutenticado,
			logout: logout
		};
		return service;

		function registrar(usuarioInput){
			var url = 'http://vast-waters-86133.herokuapp.com/usuarios';
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
			var url = 'http://vast-waters-86133.herokuapp.com/usuarios/login';
			var deferred = $q.defer();
			var request = {
				username : usuarioInput.username,
				password: usuarioInput.password,
			};
			$http.post(url, request).then(function(response) {
				guardarCredencialesUsuario(response.data);
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function logout(){
			var url = 'http://vast-waters-86133.herokuapp.com/usuarios/logout';
			var deferred = $q.defer();
			$http.post(url).then(function(response) {
				eliminarCredencialesUsuario();
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function getAutenticado(){
			return estaAutenticado;
		}

		function getUsuario(){
			return usuario;
		}

		function guardarCredencialesUsuario(usuario){
			window.localStorage.setItem('usuario', angular.toJson(usuario));
			usarCredenciales(usuario);
		}

		function cargarCredencialesUsuario(){
			var usuario = angular.fromJson(window.localStorage.getItem('usuario'));
			if(usuario){
				usarCredenciales(usuario);
			}
		}

		function usarCredenciales(usuar){
			usuario = usuar;
			estaAutenticado = true;
		}

		function eliminarCredencialesUsuario(){
			usuario = {};
			estaAutenticado = false;
			window.localStorage.removeItem('usuario');
		}
	}
})();