(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('servicioService', servicioService);

	servicioService.$inject = ['$http', '$q']

	function servicioService($http, $q){
		var service = {
			getServiciosCliente: getServiciosCliente,
			getServiciosProveedor: getServiciosProveedor
		};
		return service;

		function getServiciosCliente(servicio){
			var url = 'http://localhost:3100/servicios/cliente/' + servicio;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function getServiciosProveedor(servicio){
			var url = 'http://localhost:3100/servicios/proveedor/' + servicio;
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}
	}
})();