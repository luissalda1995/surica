(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ProveedoresController', ProveedoresController);

	ProveedoresController.$inject = ['proveedorService', '$stateParams']

	function ProveedoresController(proveedorService, $stateParams) {
		var vm = this;
		vm.proveedores = [];

		activate();

		function activate (){
			return getProveedores().then(function(){
				console.log('Proveedores cargados');
			}, function(error){
				console.log(eror);
			});
		};

		function getProveedores(){
			return proveedorService.getProveedores($stateParams.servicio).then(function(data){
				vm.proveedores = data;
				console.log(vm.proveedores);
				return vm.proveedores;			
			});
		}
	}; 
})();