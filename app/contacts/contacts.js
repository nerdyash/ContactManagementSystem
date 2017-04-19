'use strict';

angular.module('myContactApp.contacts', ['ngRoute', 'firebase', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'myContactsCtrl'
  });
}])

.controller('myContactsCtrl', ['$firebaseArray', '$scope', function($firebaseArray, $scope) {
     var ref = firebase.database().ref().child('contacts');
     $scope.contacts = $firebaseArray(ref);
    $scope.addFormShow = true;
     // console.log($scope.contacts);
    $scope.data = {};
    $scope.addFormSubmit = function () {
        console.log("Adding contact...");
        ref.push($scope.data);
        $scope.addFormShow = false;
    }

}])

.controller('popupFormCtrl', ['$uibModal', '$scope',function ($uibModal, $scope) {

    $scope.open = function () {
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