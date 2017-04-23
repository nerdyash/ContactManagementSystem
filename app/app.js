'use strict';

// Declare app level module which depends on views, and components
angular.module('myContactApp', [
  'ngRoute',
  'myContactApp.contacts',
  'firebase',
  'ui.bootstrap'
]).run(function () {
    var config = {
        apiKey: "Your_api_key",
        databaseURL: "https://mycontactsapp-4c328.firebaseio.com/",
    };
    firebase.initializeApp(config);
})
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
