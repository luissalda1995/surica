(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('RegistroController', RegistroController);

	RegistroController.$inject = ['usuarioService'];

	function RegistroController(usuarioService){
		var vm = this;

		vm.registrar = registrar;

		function registrar() {
			
		}
		
	}	
})();