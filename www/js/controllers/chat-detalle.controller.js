(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatDetalleController', ChatDetalleController);

	ChatDetalleController.$inject = ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', '$meteor', 'usuarioService', '$ionicPopup']

	function ChatDetalleController ($scope, $stateParams, $timeout, $ionicScrollDelegate, $meteor, usuarioService, $ionicPopup) {

      var vm = this;
      var usuarioId = usuarioService.usuario().username;
      vm.usuario = getUsuario;
	  vm.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);
	 
	  vm.mensajes = $scope.$meteorCollection(function () {
	    return Mensajes.find({ chatId: $stateParams.chatId });
	  }, false);
	 
	  vm.data = {};
	 
	  vm.enviarMensaje = enviarMensaje;
	  vm.inputUp = inputUp;
	  vm.inputDown = inputDown;
	  vm.abirPopupValor = abirPopupValor;
	 
	  ////////////
	 
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
		         return $scope.datosServicio.valorAcordado;
		       }
		     }
		   },
		 ]
		});
		myPopup.then(function(res) {	
		 console.log('Tapped!', res);
		});

	  }
	  
	}
})();