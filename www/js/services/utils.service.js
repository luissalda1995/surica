(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('utilsService', utilsService);

	utilsService.$inject = ['$http', '$q']

	function utilsService($http, $q){
		var service = {
			getCategorias: getCategorias
		};
		return service;

		function getCategorias(){
			var url = 'http://vast-waters-86133.herokuapp.com/utils/categorias';
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