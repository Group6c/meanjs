(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope, $location) {
    $scope.currentPath = $location.path();
    console.log($location.path());
    var vm = this;
  }
}());
