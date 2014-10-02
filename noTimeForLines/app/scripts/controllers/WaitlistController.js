'use strict';

angular.module('noLinesApp')
.controller('WaitlistController', ['$scope', '$firebase',
  function($scope, $firebase) {

    var ref = new Firebase("FIREBASE_URL");
    $scope.parties = $firebase(ref).$asArray();

    $scope.newParty = {
      name: '',
      phone: ''
    };

    $scope.saveParty = function() {

      $scope.parties.$add({
        name: $scope.newParty.name,
        phone: $scope.newParty.phone
      });

      $scope.newParty = {
        name: '',
        phone: ''
      };
    };

    $scope.remove = function(id) {
      newParty.$remove(id);
    };

    $scope.sendTextMessage = function(phoneNumber) {

      var ref = new Firebase('FIREBASE_URL');
      $scope.textMessages = $firebase(ref).$asArray();
      $scope.textMessages.$add({
        phoneNumber: phoneNumber
      });

    };



  }
]);



