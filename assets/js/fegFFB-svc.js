/* global angular */
;(function () {
  angular.module('fegFFB')
    .provider('fegFFBDataProvider', function fegFFBDataProvider () {
      this.$get = function ($http) {
        return {
          predigten: function () {
            return $http({
              method: 'GET', url: 'http://predigten.feg-ffb.de/list.json/'
            })
          }
        }
      }
    })
}())
