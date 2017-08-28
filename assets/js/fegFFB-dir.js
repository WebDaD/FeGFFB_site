/* global angular */
;(function () {
  angular.module('fegFFB').directive('dateAuthor', function () {
    return {
      restrict: 'E',
      scope: {
        date: '=',
        author: '='
      },
      replace: 'true',
      templateUrl: 'templates/dateAuthor.html'
    }
  })
  angular.module('fegFFB').directive('relatedItems', function () {
    return {
      restrict: 'E',
      scope: {
        related: '='
      },
      replace: 'true',
      templateUrl: 'templates/relatedItems.html'
    }
  })
})()
