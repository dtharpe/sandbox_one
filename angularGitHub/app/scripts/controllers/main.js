'use strict';

/**
 * @ngdoc function
 * @name angularGitHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGitHubApp
 */
angular.module('angularGitHubApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
