(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatDetalleController', ChatDetalleController);

	ChatDetalleController.$inject = ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', '$meteor', 'usuarioService']

	function ChatDetalleController ($scope, $stateParams, $timeout, $ionicScrollDelegate, $meteor, usuarioService) {

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
	  
	}
})();