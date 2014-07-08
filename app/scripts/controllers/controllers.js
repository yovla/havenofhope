'use strict';

/* Controllers */


var hoh = angular.module('hoh.controllers', []);

hoh.controller('Main', ['$scope', '$location', '$routeParams', 'langService',

    function ($scope, $location, $routeParams, langService) {


      langService.setDict($routeParams.lang);

      langService.setPage($location.path().split('/')[2]);
      
      $scope.page = $routeParams.page;

      $scope.lang = langService.getDict();
      $scope.langDict = langService.getLangDict();
      $scope.tab = $routeParams.tab

      $scope.href = function(lang, page){
        console.log("HREF:", lang, page);
        var url = '/' + lang + page;
        $location.path(url);
        $location.hash('top');
        $anchorScroll();
      }

      $scope.activeIf = function(page){
        var status = '';
        if(page === $scope.path()){
          status = 'active';
        }
        return status;
        
      };

}]);