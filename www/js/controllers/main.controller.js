(function(){
  'use strict';

angular.module('suricaApp.controllers')

.controller('MainController', function($scope, $ionicModal, $timeout, $state) {


  var vm = this;

  vm.login = login;
  vm.loginData = {};

  function login() {
    usuarioService.login(vm.datosUsuario).then(function(data){
      console.log(data)
      console.log('usuario logueado con exito');
      ir('app.categorias')
    },function(error){
      console.log(error);
    })
  };

  function ir(ruta) {
    $state.go(ruta);
  }
})

})();
