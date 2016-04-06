(function(){
	'use strict';

	angular
	  .module('suricaApp.controllers')
	  .controller('NewChatController', NewChatController);  

	function NewChatController ($scope, $state, proveedorService, usuarioService) {
		var vm = this;
		vm.users = [];

		activate();

		function activate(){
			return getProveedores().then(function(){
				console.log('Categorias cargadas');
			});
		};

		function getProveedores(){
			return proveedorService.getProveedores('seguridad').then(function(data){
				vm.users = data;
				console.log(vm.users);
				return vm.users;
				
			});	
		}

	 
	  $scope.hideModal = hideModal;
	  vm.newChat = newChat;
	 
	  ////////////
	 
	  function hideModal () {
	    $scope.modal.hide();
	  }
	 
	  function newChat (otherId) {
	    /*var chat = Chats.findOne({ userIds: { $all: [Meteor.userId(), userId] } });
	    if (chat) {
	      return goToChat(chat._id);
	    }*/
	 
	    Meteor.call('newChat', usuarioService.usuario().username, otherId, function (err, result) {
	      if (err) {
	        return handleError(err);
	      }
	 
	      goToChat(result);
	    });
	  }
	 
	  function goToChat (chatId) {
	    hideModal();
	    return $state.go('app.chat', { chatId: chatId });
	  }
	 
	  function handleError (err) {
	    $log.error('new chat error ', err);
	    $ionicPopup.alert({
	      title: err.reason || 'Create chat fail',
	      template: 'Please try again',
	      okType: 'button-positive button-clear'
	    });
	  }
	}
})();
