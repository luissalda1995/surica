(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('CategoriasController', CategoriasController);

	function CategoriasController() {
		var vm = this;
		vm.categorias = [];

		activate();

		function activate(){

		};
	}; 
})();