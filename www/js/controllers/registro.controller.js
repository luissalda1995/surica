(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('RegistroController', RegistroController);

	RegistroController.$inject = ['usuarioService', 'utilsService']

	function RegistroController(usuarioService, utilsService){
		var vm = this;

		vm.registrar = registrar;
		vm.datosUsuario = {};
		vm.categorias = [];

		activate();

		function activate(){
			return getCategorias().then(function(){
				console.log('Categorias cargadas');
			});
		};

		function getCategorias(){
			return utilsService.getCategorias().then(function(data){
				vm.categorias = data.valores;
				console.log(vm.categorias)
				return vm.categorias;
				
			});
		}

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