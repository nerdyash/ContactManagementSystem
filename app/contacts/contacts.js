'use strict';

angular.module('myContactApp.contacts', ['ngRoute', 'firebase', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'myContactsCtrl'
  });
}])

.controller('myContactsCtrl', ['$firebaseArray', '$scope', function($firebaseArray, $scope, $uibModalInstance) {
     var ref = firebase.database().ref().child('contacts');
     $scope.contacts = $firebaseArray(ref);
    $scope.addFormShow = true;
     // console.log($scope.contacts);
    $scope.data = {};
    $scope.addFormSubmit = function () {
        console.log("Adding contact...");
        ref.push($scope.data);
        $scope.addFormShow =false;
        alert("Contact added successfully");
    }
    $scope.editFormShow = true;
    $scope.editMe = function () {

        ref.child($scope.$id).update($scope.data);
        $scope.editFormShow = false;
        console.log($scope.data);
        // alert("Contact Updated.");
    }

    $scope.removeContact = function (contact) {
        ref.child(contact.$id).remove();
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
    }])
    .controller('showFormCtrl', ['$uibModal', '$scope',function ($uibModal, $scope) {

            $scope.open = function (contact) {
            console.log("Opening contact showing form");
            var uibModelInstance = $uibModal.open({
                templateUrl: 'contacts/showContact.html',
                controller: 'showCtrl',
                scope: $scope
            });
        }
    }])
    .controller('showCtrl', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }])
    .controller('editFormCtrl', ['$uibModal', '$scope',function ($uibModal, $scope) {

        $scope.open = function (contact) {
            console.log("Opening contact editing form");
            var uibModelInstance = $uibModal.open({
                templateUrl: 'contacts/editContact.html',
                controller: 'editCtrl',
                scope: $scope
            });
        }
    }])
    .controller('editCtrl', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);