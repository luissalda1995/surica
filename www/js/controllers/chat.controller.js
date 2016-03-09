(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatController', ChatController);

	ChatController.$inject = [ 'chatService'];

	function ChatController(chatService) {
		var sync = chatService.getFirebaseConfig();
		var vm = this;	

			
	}
})();