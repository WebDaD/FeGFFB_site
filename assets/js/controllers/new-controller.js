/* global angular */
;(function () {
  angular.module('fegFFB')
    .controller('fegFFB-New', ['fegFFBDataProvider','$routeParams', function (fegFFBDataProvider, $routeParams) {
      var self = this
      var slug = $routeParams.slug
      // TODO: load Data for slug
    }])
}())
