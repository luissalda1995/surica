(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('servicioService', servicioService);

	servicioService.$inject = ['$http', '$q']

	function servicioService($http, $q){
		var service = {
			crearServicio: crearServicio,
			getServiciosCliente: getServiciosCliente,
			getServiciosProveedor: getServiciosProveedor,
			adicionarCliente: adicionarCliente,
			adicionarProveedor: adicionarProveedor
		};
		return service;

		function crearServicio(usuario){
			var url = 'https://vast-waters-86133.herokuapp.com/servicios/' + usuario;
			var deferred = $q.defer();
			$http.post(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;			
		}

		function getServiciosCliente(usuario){
			var url = 'https://vast-waters-86133.herokuapp.com/servicios/cliente/' + usuario;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function getServiciosProveedor(usuario){
			var url = 'https://vast-waters-86133.herokuapp.com/servicios/proveedor/' + usuario;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function adicionarCliente(usuario, clienteInput){
			var url = 'https://vast-waters-86133.herokuapp.com/servicios/proveedor/' + usuario;
			var deferred = $q.defer();
			var request = {
				cliente : clienteInput
			};
			$http.post(url, request).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function adicionarProveedor(usuario, proveedorInput){
			var url = 'https://vast-waters-86133.herokuapp.com/servicios/cliente/' + usuario;
			var deferred = $q.defer();
			var request = {
				proveedor : proveedorInput
			};
			$http.post(url, request).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}
	}
})();