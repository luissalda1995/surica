(function(){
	'use strict';

	angular.module('suricaApp.controllers').
		controller('ChatController', CategoriasController);

	CategoriasController.$inject = [ '$firebase']

	function CategoriasController(firebase) {
		var ref = new Firebase('ref');
		var sync = $firebase();
		var vm = this;		
	}; 
})();