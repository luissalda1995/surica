(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ProveedoresController', ProveedoresController);

	ProveedoresController.$inject = ['proveedorService', 'usuarioService', 'servicioService', '$stateParams', '$state'];

	function ProveedoresController(proveedorService, usuarioService, servicioService, $stateParams, $state) {
		var vm = this;
		vm.proveedores = [];
		vm.adicionarProveedor = adicionarProveedor;

		activate();

		function activate (){
			return getProveedores().then(function(){
				console.log('Proveedores cargados');
			}, function(error){
				console.log(eror);
			});
		}

		function getProveedores(){
			return proveedorService.getProveedores($stateParams.servicio).then(function(data){
				vm.proveedores = data;
				console.log(vm.proveedores);
				return vm.proveedores;			
			});
		}

		function adicionarProveedor(proveedorInput){
			var cliente = {
				username : getUsuario().username,
				servicio : proveedorInput.servicio,
			};
			servicioService.adicionarProveedor(getUsuario().username, proveedorInput).then(function(data){
				servicioService.adicionarCliente(proveedorInput.username, cliente).then(function(data){
					$state.go('app.servicios.cliente', { usuario: getUsuario().username });
				},function(error){
					console.log(error);
				});
			},function(error){
				console.log(error);
			});			
		}

	    function getUsuario(){
		    return usuarioService.usuario();
		}
	} 
})();