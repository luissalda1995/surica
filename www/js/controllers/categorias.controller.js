(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('CategoriasController', CategoriasController);

	CategoriasController.$inject = ['utilsService']

	function CategoriasController(utilsService) {
		var vm = this;
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
				return vm.categorias;
				console.log(data)
			});
		}
	}; 
})();