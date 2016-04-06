(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatsController', ChatsController);

	//ChatController.$inject = [ 'chatService'];

	function ChatsController($scope, $ionicModal) {
		//var sync = chatService.getFirebaseConfig();
		var vm = this;	

		vm.chats = $scope.$meteorCollection(Chats, false);
		vm.remover = remover;
		vm.openNewChatModal = openNewChatModal;

		$ionicModal.fromTemplateUrl('templates/new-chat.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.$on('$destroy', function () {
			$scope.modal.remove();
		});

		function openNewChatModal () {
		$scope.modal.show();
		}

		function remover(chat){
			vm.chats.remove(chat);
		}
	}
})();