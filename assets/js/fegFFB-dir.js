/* global angular */
;(function () {
  angular.module('fegFFB').directive('emitLastRepeaterElement', function () {
    return function (scope) {
      if (scope.$last) {
        scope.$emit('LastRepeaterElement')
      }
    }
  })
})()
