(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ServiciosController', serviciosController);

	serviciosController.$inject = ['servicioService', '$stateParams']

	function serviciosController(servicioService, $stateParams) {
		var vm = this;
		vm.serviciosCliente = [];
		vm.serviciosCliente = [];

		activate();

		function activate (){
			return getServiciosCliente().then(function(){
				console.log('servicios cargados');
			}, function(error){
				console.log(eror);
			});
		};

		function getServiciosCliente(){
			return servicioService.getServiciosCliente($stateParams.usuario).then(function(data){
				vm.serviciosCliente = data;
				console.log(vm.serviciosCliente);
				return vm.serviciosCliente;			
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