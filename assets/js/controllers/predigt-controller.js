/* global angular */
;(function () {
  angular.module('fegFFB')
    .controller('fegFFB-Predigt', ['fegFFBDataProvider','$routeParams', function (fegFFBDataProvider, $routeParams) {
      var self = this
      var slug = $routeParams.slug
      // TODO: load Data for slug
    }])
}())
