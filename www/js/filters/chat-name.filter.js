(function(){
	'use strict';

	angular
	  .module('suricaApp.filters')
	  .filter('chatName', chatName);
	 
	function chatName () {
	  return function (chat) {
	    if (!chat) return;
	 
	    return chat.userIds[1];
	  };
	}	
})();