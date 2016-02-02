(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('RegistroController', RegistroController);

	RegistroController.$inject = ['usuarioService']

	function RegistroController(usuarioService){
		var vm = this;

		vm.registrar = registrar;
		vm.datosUsuario = {};

		function registrar() {
			usuarioService.registrar(vm.datosUsuario).then(function(data){
				console.log(data)
				console.log('usuario registrado con exito');
			},function(error){
				console.log(error);
			})
		}
		
	}	
})();