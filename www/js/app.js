// Ionic suricaApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'suricaApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'suricaApp.controllers' is found in controllers.js
angular.module('suricaApp', ['ionic', 
  'suricaApp.services',
  'suricaApp.controllers',
  'suricaApp.routeConfig'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});