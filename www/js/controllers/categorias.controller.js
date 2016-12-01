(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('CategoriasController', CategoriasController);

	CategoriasController.$inject = ['utilsService', '$state']

	function CategoriasController(utilsService, $state) {
		var vm = this;

		vm.categorias = [];

		vm.ir = ir;

		activate();

		function activate(){
			return getCategorias().then(function(){
				console.log('Categorias cargadas');
			});
		};

		function getCategorias(){
			return utilsService.getCategorias().then(function(data){
				vm.categorias = data.valores;
				console.log(vm.categorias);
				return vm.categorias;
				
			});
		}

		function ir(ruta, categoria) {
			$state.go(ruta, {servicio : categoria});
		}		
	}; 
})();