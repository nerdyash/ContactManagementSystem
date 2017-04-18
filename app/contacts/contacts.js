'use strict';

angular.module('myContactApp.contacts', ['ngRoute', 'firebase', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'myContactsCtrl'
  });
}])

.controller('myContactsCtrl', ['$firebaseArray', function($firebaseArray) {
  var vm = this;


}])

.controller('popupFormCtrl', ['$uibModal', function ($uibModal) {
    var vm = this;
    vm.open = function () {
        console.log("Opening popup form");
        var uibModelInstance = $uibModal.open({
            templateUrl: 'contacts/popup.html',
            controller: 'popupCtrl'
        });
    }
}])
.controller('popupCtrl', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);