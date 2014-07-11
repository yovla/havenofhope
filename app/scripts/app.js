'use strict';

angular.module('hoh', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.transition'
])
  .config(function ($routeProvider) {
    $routeProvider.when('/:lang/:page/:subPage', { 
      templateUrl: 'views/pixel.html',
      controller: 'PixelCtrl' });

    $routeProvider.otherwise({redirectTo: '/en/home/h'});
  });