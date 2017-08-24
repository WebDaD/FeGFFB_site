/* global angular */
;(function () {
  angular.module('fegFFB')
    .controller('fegFFB-Predigt', ['fegFFBDataProvider','$routeParams', function (fegFFBDataProvider, $routeParams) {
      var self = this
      var slug = $routeParams.slug
      self.loading = true
      fegFFBDataProvider.predigt(slug).then(function(predigt) {
        self.loading = false
        self.predigt = predigt
      }), function() {
        // TODO: on error
      }
    }])
}())
