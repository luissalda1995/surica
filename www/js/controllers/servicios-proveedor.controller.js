(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ServiciosProveedorController', ServiciosProveedorController);

	ServiciosProveedorController.$inject = ['servicioService', '$stateParams'];

	function ServiciosProveedorController(servicioService, $stateParams) {
		var vm = this;
		vm.serviciosProveedor = [];

		activate();

		function activate (){
			return getServiciosProveedor().then(function(){
				console.log('servicios cargados');
			}, function(error){
				console.log(error);
			});
		};

		function getServiciosProveedor(){
			return servicioService.getServiciosProveedor($stateParams.usuario).then(function(data){
				vm.serviciosProveedor = data;
				console.log(vm.serviciosProveedor);
				return vm.serviciosProveedor;			
			});
		};
	}; 
})();