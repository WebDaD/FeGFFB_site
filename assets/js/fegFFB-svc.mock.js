/* global angular */
;(function () {
  angular.module('fegFFB')
    .provider('fegFFBDataProvider', function fegFFBDataProvider ($q) {
      this.$get = function ($http) {
        return {
          predigten: function () {
            var deferred = $q.defer()
            var p1 = 
            deferred.resolve([
              {
                "slug":"predigt-nummer-1",
                "title":"Predigt Nummer 1",
                "image":"http://lorempixel.com/400/200/",
                "intro":"Hier ist eine kurze Einführung zum Thema",
                "date":"2017-06-22",
                "preacher": {
                  "slug":"gerd-ballon",
                  "name":"Gerd Ballon",
                  "image":"http://lorempixel.com/50/50/cats"
                }
              },
              {
                "slug":"predigt-nummer-2",
                "title":"Predigt Nummer 2",
                "image":"http://lorempixel.com/400/200/",
                "intro":"Hier ist eine kurze Einführung zum zweiten Thema",
                "date":"2017-06-29",
                "preacher": {
                  "slug":"gerd-ballon",
                  "name":"Gerd Ballon",
                  "image":"http://lorempixel.com/50/50/cats"
                }
              }
            ])
            return deferred.promise
          },
          predigt: function (slug) {
            var deferred = $q.defer()
            deferred.resolve(
              {
                "slug":"predigt-nummer-1",
                "title":"Predigt Nummer 1",
                "image":"http://lorempixel.com/400/200/",
                "intro":"Hier ist eine kurze Einführung zum Thema",
                "date":"2017-06-22",
                "preacher": {
                  "slug":"gerd-ballon",
                  "name":"Gerd Ballon",
                  "image":"http://lorempixel.com/50/50/cats"
                },
                "text":"<h2>Überschrift</h2><p>Some Text...</p>",
                "mp3":"http://feg-ffb.de/wp-content/uploads/2017/08/20170820_Predigt.mp3",
                "tags":"tag1, tag2",
                "bible": {
                  "code":"Gen22,1-14",
                  "text":"Text...Text..."
                },
                "related":[
                  {
                    "slug":"predigt-nummer-2",
                    "title":"Predigt Nummer 2",
                    "image":"http://lorempixel.com/400/200/",
                    "intro":"Hier ist eine kurze Einführung zum zweiten Thema",
                    "date":"2017-06-29",
                    "preacher": {
                      "slug":"gerd-ballon",
                      "name":"Gerd Ballon",
                      "image":"http://lorempixel.com/50/50/cats"
                    }
                  },
                  {
                    "slug":"predigt-nummer-23",
                    "title":"Predigt Nummer 23",
                    "image":"http://lorempixel.com/400/200/",
                    "intro":"Hier ist eine kurze Einführung zum zweiten Thema",
                    "date":"2017-06-29",
                    "preacher": {
                      "slug":"gerd-ballon",
                      "name":"Gerd Ballon",
                      "image":"http://lorempixel.com/50/50/cats"
                    }
                  },
                  {
                    "slug":"predigt-nummer-4",
                    "title":"Predigt Nummer 4",
                    "image":"http://lorempixel.com/400/200/",
                    "intro":"Hier ist eine kurze Einführung zum zweiten Thema",
                    "date":"2017-06-29",
                    "preacher": {
                      "slug":"gerd-ballon",
                      "name":"Gerd Ballon",
                      "image":"http://lorempixel.com/50/50/cats"
                    }
                  }
                ]
              }
            )
            return deferred.promise
          }
        }
      }
    })
}())
