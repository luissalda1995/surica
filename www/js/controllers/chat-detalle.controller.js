(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatDetalleController', ChatDetalleController);

	ChatDetalleController.$inject = ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', '$meteor', 'usuarioService', 'servicioService', '$ionicPopup'];

	function ChatDetalleController ($scope, $stateParams, $timeout, $ionicScrollDelegate, $meteor, usuarioService, servicioService, $ionicPopup) {

      var vm = this;
      var usuarioId = usuarioService.usuario().username;
      vm.usuario = getUsuario;
	  vm.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);
	  var datosServicio = {
	  	cliente : usuarioId,
	  	proveedor : getProveedor(vm.chat),
	  	estado : 'Esperando aprobacion',
	  	precio : null
	  };
	 
	  vm.mensajes = $scope.$meteorCollection(function () {
	    return Mensajes.find({ chatId: $stateParams.chatId });
	  }, false);
	 
	  vm.data = {};
	 
	  vm.enviarMensaje = enviarMensaje;
	  vm.inputUp = inputUp;
	  vm.inputDown = inputDown;
	  vm.abirPopupValor = abirPopupValor;
	 
	  function enviarMensaje () {
	    if (_.isEmpty(vm.data.mensaje)) {
	      return;
	    }
	 
	    $meteor.call('newMessage', {
	      text: vm.data.mensaje,
	      chatId: $stateParams.chatId,
	      userId: usuarioId
	    });
	 
	    delete vm.data.mensaje;
	  }

	  function getUsuario(){
		return usuarioService.usuario();
	  }
		 
	  function inputUp () {
	    $timeout(function() {
	      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
	    }, 300);
	  }
	 
	  function inputDown () {
	    $ionicScrollDelegate.$getByHandle('chatScroll').resize();
	  }

	  function abirPopupValor(){
		$scope.datosServicio = {};

		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
		 template: '<input type="number" ng-model="datosServicio.valorAcordado">',
		 title: 'Entra el valor acordado para el servicio',
		 subTitle: 'Recuerde que debe de ingresar el valor acordado por ambas partes',
		 scope: $scope,
		 buttons: [
		   { text: 'Cancel' },
		   {
		     text: '<b>Save</b>',
		     type: 'button-positive',
		     onTap: function(e) {
		       if (!$scope.datosServicio.valorAcordado) {
		         //don't allow the user to close unless he enters wifi password
		         e.preventDefault();
		       } else {
		       	 datosServicio.valorAcordado = $scope.datosServicio.valorAcordado;
		         return $scope.datosServicio.valorAcordado;
		       }
		     }
		   },
		 ]
		});
		myPopup.then(function(res) {
		 servicioService.cambiarEstadoCliente(datosServicio.cliente, datosServicio).then(function(data){
		 	servicioService.cambiarEstadoProveedor(datosServicio.proveedor, datosServicio).then(function(){
		 		console.log('Estado cambiado');
		 	}, function(err){
		 		console.log(err);
		 	});
		 },function(err){
		 	console.log(err);
		 });	
		 console.log('Tapped!', res);
		});

	  };

	  function getProveedor(chat) {
	 	if(usuarioService.usuario().username != chat.userIds[1]){
	    	return chat.userIds[1];
	 	}else{
			return chat.userIds[0];
	 	}
	  };
	}
})();