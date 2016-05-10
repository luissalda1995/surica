(function(){
	'use strict';

	angular
	  .module('suricaApp.filters')
	  .filter('chatName', chatName);

  chatName.$inject = ['usuarioService'];
	 
	function chatName (usuarioService) {
	  return function (chat) {
	    if (!chat) return;
	 	
	 	if(usuarioService.usuario().username != chat.userIds[1]){
	    	return chat.userIds[1];
	 	}else{
			return chat.userIds[0];
	 	}
	  };
	}	
})();