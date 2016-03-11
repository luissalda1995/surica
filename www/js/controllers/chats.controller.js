(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatsController', ChatsController);

	//ChatController.$inject = [ 'chatService'];

	function ChatsController($scope) {
		//var sync = chatService.getFirebaseConfig();
		var vm = this;	

		vm.chats = $scope.$meteorCollection(Chats, false);
		vm.remover = remover;

		function remover(chat){
			vm.chats.remove(chat);
		}
	}
})();