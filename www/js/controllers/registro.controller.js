(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('RegistroController', RegistroController);

	RegistroController.$inject = ['usuarioService', 'utilsService', 'servicioService', '$state']

	function RegistroController(usuarioService, utilsService, servicioService, $state){
		var vm = this;

		vm.registrar = registrar;
		vm.datosUsuario = {};
		vm.categorias = [];

		activate();

		function activate(){
			return getCategorias().then(function(){
				console.log('Categorias cargadas');
			});
		}

		function getCategorias(){
			return utilsService.getCategorias().then(function(data){
				vm.categorias = data.valores;
				console.log(vm.categorias);
				return vm.categorias;
				
			});
		}

		function registrar() {
			usuarioService.registrar(vm.datosUsuario).then(function(data){
				servicioService.crearServicio(vm.datosUsuario.username).then(function(data){
					console.log(data);
					console.log('usuario registrado con exito');
					ir('app.categorias');
				}, function(err){
					console.log(err);
				});
			},function(err){
				console.log(err);
			});
		}

		function ir(ruta) {
			$state.go(ruta);
		}	
		
	}	
})();