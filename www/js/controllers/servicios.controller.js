(function(){
  'use strict';

  angular.module('suricaApp.controllers')

  .controller('ServiciosController', ServiciosController);

  ServiciosController.$inject = ['usuarioService',];

  function ServiciosController(usuarioService) {

    var vm = this;

    vm.usuario = getUsuario;

    function getUsuario(){
    return usuarioService.usuario();
    }
  }

})();
