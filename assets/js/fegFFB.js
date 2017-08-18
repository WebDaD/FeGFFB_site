/* global angular */
;(function () {
  angular.module('fegFFB', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/home', {
          controller: 'fegFFB-Home',
          controllerAs: 'ctrl',
          templateUrl: 'templates/home'
        })
        .when('/predigten', {
          controller: 'fegFFB-Predigten',
          controllerAs: 'ctrl',
          templateUrl: 'templates/predigten'
        })
        .when('/predigten/:slug', {
          controller: 'fegFFB-Predigt',
          controllerAs: 'ctrl',
          templateUrl: 'templates/predigt'
        })
        .when('/termine', {
          controller: 'fegFFB-Termine',
          controllerAs: 'ctrl',
          templateUrl: 'templates/termine'
        })
        .when('/termine/:slug', {
          controller: 'fegFFB-Termin',
          controllerAs: 'ctrl',
          templateUrl: 'templates/termin'
        })
        .when('/news', {
          controller: 'fegFFB-News',
          controllerAs: 'ctrl',
          templateUrl: 'templates/news'
        })
        .when('/news/:slug', {
          controller: 'fegFFB-New',
          controllerAs: 'ctrl',
          templateUrl: 'templates/new'
        })
        .when('/ueber_uns', {
          controller: 'fegFFB-UeberUns',
          controllerAs: 'ctrl',
          templateUrl: 'templates/ueber_uns'
        })
        .when('/losungen', {
          controller: 'fegFFB-Losungen',
          controllerAs: 'ctrl',
          templateUrl: 'templates/losungen'
        })
        .when('/losungen/:slug', {
          controller: 'fegFFB-Losung',
          controllerAs: 'ctrl',
          templateUrl: 'templates/losung'
        })
        .when('/kontakt', {
          controller: 'fegFFB-Kontakt',
          controllerAs: 'ctrl',
          templateUrl: 'templates/kontakt'
        })
        .when('/impressum', {
          controller: 'fegFFB-Impressum',
          controllerAs: 'ctrl',
          templateUrl: 'templates/impressum'
        })
        .when('/datenschutz', {
          controller: 'fegFFB-Datenschutz',
          controllerAs: 'ctrl',
          templateUrl: 'templates/datenschutz'
        })
        .when('/404', {
          controller: 'fegFFB-404',
          controllerAs: 'ctrl',
          templateUrl: 'templates/404'
        })
        .otherwise({ 
          redirectTo: '/404' 
        })
    }])
}())
