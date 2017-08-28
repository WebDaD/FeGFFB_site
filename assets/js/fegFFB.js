/* global angular */
;(function () {
  angular.module('fegFFB', ['ngRoute', 'ngFadeImgLoading'])
    .config(function ($sceProvider) {
      $sceProvider.enabled(false)
    })
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/home', {
          controller: 'fegFFB-Home',
          controllerAs: 'ctrl',
          templateUrl: 'templates/home.html'
        })
        .when('/predigten', {
          controller: 'fegFFB-Predigten',
          controllerAs: 'ctrl',
          templateUrl: 'templates/predigten.html'
        })
        .when('/predigten/:slug', {
          controller: 'fegFFB-Predigt',
          controllerAs: 'ctrl',
          templateUrl: 'templates/predigt.html'
        })
        .when('/termine', {
          controller: 'fegFFB-Termine',
          controllerAs: 'ctrl',
          templateUrl: 'templates/termine.html'
        })
        .when('/termine/:slug', {
          controller: 'fegFFB-Termin',
          controllerAs: 'ctrl',
          templateUrl: 'templates/termin.html'
        })
        .when('/articles', {
          controller: 'fegFFB-Articles',
          controllerAs: 'ctrl',
          templateUrl: 'templates/articles.html'
        })
        .when('/articles/:slug', {
          controller: 'fegFFB-Article',
          controllerAs: 'ctrl',
          templateUrl: 'templates/article.html'
        })
        .when('/ueber_uns', {
          controller: 'fegFFB-UeberUns',
          controllerAs: 'ctrl',
          templateUrl: 'templates/ueber_uns.html' // TODO: use a function here, using the language cookie
        })
        .when('/losungen', {
          controller: 'fegFFB-Losungen',
          controllerAs: 'ctrl',
          templateUrl: 'templates/losungen.html'
        })
        .when('/losungen/:slug', {
          controller: 'fegFFB-Losung',
          controllerAs: 'ctrl',
          templateUrl: 'templates/losung.html'
        })
        .when('/kontakt', {
          controller: 'fegFFB-Kontakt',
          controllerAs: 'ctrl',
          templateUrl: 'templates/kontakt.html'
        })
        .when('/impressum', {
          controller: 'fegFFB-Impressum',
          controllerAs: 'ctrl',
          templateUrl: 'templates/impressum.html'
        })
        .when('/datenschutz', {
          controller: 'fegFFB-Datenschutz',
          controllerAs: 'ctrl',
          templateUrl: 'templates/datenschutz.html'
        })
        .when('/404', {
          controller: 'fegFFB-404',
          controllerAs: 'ctrl',
          templateUrl: 'templates/404.html'
        })
        .otherwise({
          redirectTo: '/404'
        })
    }])
    .run(['$rootScope', '$location', function ($rootScope, $location) {
      $rootScope.pageTitle = ''
      $rootScope.isActive = function (viewLocation) {
        var regex = new RegExp('[/]' + viewLocation + '([/].*)?')
        return $location.path().match(regex) !== null
      }
    }])
}())
