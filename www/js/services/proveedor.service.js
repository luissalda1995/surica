(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('proveedorService', proveedorService);

	proveedorService.$inject = ['$http', '$q']

	function proveedorService($http, $q){
		var service = {
			getProveedores: getProveedores
		};
		return service;

		function getProveedores(servicio){
			var url = 'http://localhost:3100/usuarios/' + servicio;
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