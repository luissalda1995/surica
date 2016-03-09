(function(){
	'use strict';

	angular.module('suricaApp.services').
		factory('chatService', chatService);

	chatService.$inject = ['$firebase']

	function chatService($firebase, Rooms){

	    var selectedRoomId;

	    var ref = new Firebase('https://blistering-heat-5970.firebaseio.com/');
	    var chats;

	    return {
	        all: all,
	        remove: remove,
	        get: get,
	        selectRoom: selectRoom,
	        send: send
	    }

	    function send(from, message) {
            console.log("sending message from :" + from.displayName + " & message is " + message);
            if (from && message) {
                var chatMessage = {
                    from: from.displayName,
                    message: message,
                    createdAt: Firebase.ServerValue.TIMESTAMP
                };
                chats.$add(chatMessage).then(function (data) {
                    console.log("message added");
                });
            }
        }

        function get(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }

        function remove(chat) {
            chats.$remove(chat).then(function (ref) {
                ref.key() === chat.$id; // true item has been removed
            });
        }

        function all() {
            return chats;
        }
	}
})();