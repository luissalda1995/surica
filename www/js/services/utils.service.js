(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('utilsService', utilsService);

	utilsService.$inject = ['$http', '$q']

	function utilsService($http, $q){
		var service = {
			getCategorias: getCategorias,
			sendEmail: sendEmail
		};
		return service;

		function getCategorias(){
			var url = 'http://localhost:3100/utils/categorias';
			var deferred = $q.defer();
			$http.get(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;
		}

		function sendEmail(){
			var url = 'http://localhost:3100/emails/' + usuario;
			var deferred = $q.defer();
			$http.post(url).then(function(response) {
				deferred.resolve(response.data);
			}, function(error) {
				deferred.reject(error.data);
			});
			return deferred.promise;		
		}
	}
})();