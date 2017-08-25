/* global angular */
;(function () {
  angular.module('fegFFB')
    .controller('fegFFB-Predigt', ['fegFFBDataProvider', '$routeParams', '$rootScope', function (fegFFBDataProvider, $routeParams, $rootScope) {
      var self = this
      var slug = $routeParams.slug
      self.loading = true
      fegFFBDataProvider.predigt(slug).then(function (predigt) {
        self.containerWidth = angular.element(document.getElementById('wrapper')).clientWidth
        self.predigt = predigt
        self.predigt.bigImage = self.predigt.image + '?width=' + self.containerWidth + '&height=auto'
        self.predigt.placeholder = self.predigt.image + '?width=50&height=50'
        self.predigt.preacher.placeholder = self.predigt.preacher.image + '?width=50&height=50'
        self.predigt.preacher.image = self.predigt.preacher.image + '?width=' + (self.containerWidth / 2) + '&height=auto'
        $rootScope.pageTitle = ' - Predigt - ' + predigt.title
        self.loading = false
      }, function () {
        // TODO: on error: show error and mailing options
      })
    }])
}())
