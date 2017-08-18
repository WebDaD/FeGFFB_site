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
        .when('/termine', {
          controller: 'fegFFB-Termine',
          controllerAs: 'ctrl',
          templateUrl: 'templates/termine'
        })
        .when('/news', {
          controller: 'fegFFB-News',
          controllerAs: 'ctrl',
          templateUrl: 'templates/news'
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
        .otherwise({ redirectTo: '/home' })
    }])
}())
