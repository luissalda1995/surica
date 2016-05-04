(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ServiciosClienteController', ServiciosClienteController);

	ServiciosClienteController.$inject = ['servicioService','usuarioService','$stateParams', '$state'];

	function ServiciosClienteController(servicioService, usuarioService, $stateParams, $state) {
		var vm = this;
		vm.serviciosCliente = [];
		vm.nuevoChat = nuevoChat;
		vm.ratingsObject = {
			iconOn: 'ion-ios-star',    //Optional
			iconOff: 'ion-ios-star-outline',   //Optional
			iconOnColor: 'rgb(200, 200, 100)',  //Optional
			iconOffColor:  'rgb(200, 100, 100)',    //Optional
			rating:  2, //Optional
			minRating:1,    //Optional
			readOnly: true, //Optional
			callback: function(rating) {    //Mandatory
			  $scope.ratingsCallback(rating);
			}
		};

		vm.ratingsCallback = function(rating) {
			console.log('Selected rating is : ', rating);
		};

		activate();

		function activate (){
			return getServiciosCliente().then(function(){
				console.log('servicios cargados');
			}, function(error){
				console.log(error);
			});
		}

		function getServiciosCliente(){
			return servicioService.getServiciosCliente($stateParams.usuario).then(function(data){
				vm.serviciosCliente = data;
				console.log(vm.serviciosCliente);
				return vm.serviciosCliente;			
			});
		}

	    function nuevoChat (otherId) {
		    var chat = Chats.findOne({ userIds: { $all: [otherId, otherId] } });
		    if (chat) {
		      return goToChat(chat._id);
		    }
		 
		    Meteor.call('newChat', usuarioService.usuario().username, otherId, function (err, result) {
		      if (err) {
		        return handleError(err);
		      }
		 
		      goToChat(result);
		    });
		}
		

		function goToChat (chatId) {
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