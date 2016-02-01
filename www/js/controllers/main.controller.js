(function(){
  'use strict';

angular.module('suricaApp.controllers')

.controller('MainController', function($scope, $ionicModal, $timeout, $location, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

  var vm = this;

  vm.closeLogin = closeLogin;
  vm.login = login;
  vm.doLogin = doLogin;
  vm.ir = ir;
  vm.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  function closeLogin() {
    $scope.modal.hide();
  };

  // Open the login modal
  function login() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  function doLogin() {
    console.log('Doing login', vm.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      vm.closeLogin();
    }, 1000);
  };

  function ir(ruta) {
    $state.go(ruta);
  }
})

})();
