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
        .when('/articles', {
          controller: 'fegFFB-Articles',
          controllerAs: 'ctrl',
          templateUrl: 'templates/articles'
        })
        .when('/articles/:slug', {
          controller: 'fegFFB-Article',
          controllerAs: 'ctrl',
          templateUrl: 'templates/article'
        })
        .when('/ueber_uns', {
          controller: 'fegFFB-UeberUns',
          controllerAs: 'ctrl',
          templateUrl: 'templates/ueber_uns' // TODO: use a function here, using the language cookie
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
