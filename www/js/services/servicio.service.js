(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('servicioService', servicioService);

	servicioService.$inject = ['$http', '$q']

	function servicioService($http, $q){
		var service = {
			getServiciosCliente: getServiciosCliente,
			getServiciosProveedor: getServiciosProveedor,
			adicionarCliente: adicionarCliente,
			adicionarProveedor: adicionarProveedor
		};
		return service;

		function getServiciosCliente(usuario){
			var url = 'http://localhost:3100/servicios/cliente/' + usuario;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function getServiciosProveedor(usuario){
			var url = 'http://localhost:3100/servicios/proveedor/' + usuario;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function adicionarCliente(usuario, clienteInput){
			var url = 'http://localhost:3100/servicios/proveedor/' + usuario;
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
			var url = 'http://localhost:3100/servicios/cliente/' + usuario;
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