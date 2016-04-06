(function(){
  'use strict';

  angular.module('suricaApp.controllers')

  .controller('MainController', MainController);

  MainController.$inject = ['usuarioService', '$ionicPopup', '$state'];

  function MainController(usuarioService, $ionicPopup, $state) {

    var vm = this;

    vm.login = login;
    vm.loginData = {};

    function login() {
      usuarioService.login(vm.loginData).then(function(data){
        console.log(data);
        console.log('usuario logueado con exito');
        ir('app.categorias');
      },function(error){
        var alertaPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

    function ir(ruta) {
      $state.go(ruta);
    }
  }

})();
