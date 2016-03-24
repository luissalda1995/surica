(function(){
	'use strict';

	angular.module('suricaApp.interceptors').
		factory('securityInterceptor', securityInterceptor)
		.config(config);

	securityInterceptor.$inject = ['$q'];

	function securityInterceptor($q, $state){
		var interceptor = {
			response: response,
			responseError: responseError
		};
		return interceptor;

		function response(res) {
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