(function(){
	'use strict';

	angular.module('suricaApp.interceptors').
		factory('securityInterceptor', securityInterceptor)
		.config(config);

	servicioService.$inject = ['$q', '$state'];

	function securityInterceptor($http, $state){
		var interceptor = {
			response: response,
			responseError: responseError
		};
		return interceptor;

		function res(res) {
          // do something on success
          return res;
        }

        function responseError(res) {
          if (res.status === 401)
            $state.go('main');
          return $q.reject(res);
        }
	}

	function config($httpProvider) {
    	$httpProvider.interceptors.push('securityInterceptor');
  	}
})();