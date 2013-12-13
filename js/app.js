'use strict';

// Declare app level module which depends on filters, and services
angular.module('hoh', ['hoh.filters', 
                        'hoh.services', 
                        'hoh.directives',
                        'hoh.controllers']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/:lang/home', {templateUrl: 'partials/home.html',
                                  controller: 'Main'});

    $routeProvider.when('/:lang/about', {templateUrl: 'partials/about.html',
                                  controller: 'Main'});

    $routeProvider.when('/:lang/contact', {templateUrl: 'partials/contact.html',
                                  controller: 'Main'});

    $routeProvider.when('/:lang/donate', {templateUrl: 'partials/donate.html',
                                  controller: 'Main'});

    $routeProvider.when('/:lang/publications', {templateUrl: 'partials/publications.html',
                                  controller: 'Main'});

    $routeProvider.otherwise({redirectTo: '/en/home'});
  }]);
