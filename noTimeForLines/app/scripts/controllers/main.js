'use strict';

/**
 * @ngdoc function
 * @name noLinesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noLinesApp
 */
angular.module('noLinesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
