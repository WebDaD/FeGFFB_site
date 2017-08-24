(Here only the ones we need)
* service people.feg.de (people API)
    * GET /people/:slug <- Details as json
* service predigten.feg.de
    * GET /predigten <- List of slugs as json
    * GET /predigten/:slug <- Details as json
    * GET /predigten/latest <- Details as json of newest
* service termine.feg.de
    * GET /termine <- List of slugs as json
    * GET /termine/:slug <- Details as json
    * GET /termine/latest <- Details as json of newest
* service articles.feg.de
    * GET /articles <- List of slugs as json
    * GET /articles/:slug <- Details as json
    * GET /articles/latest <- Details as json of newest
* service losungen.feg.de
    * GET /losungen/ alle json
    * GET /losungen/:date tag,woche,monat,jahr für tag
    * GET /losungen/today tag,woche,monat,jahr for today
    * GET /losungen/jahr Alles jahreslosungen
    * GET /losungen/jahr/:jahr jahreslosung
    * GET /losungen/monat/:jahr Alles monatslosungen für Jahr
    * GET /losungen/monat/:jahr/:monat monatslosung
    * GET /losungen/woche/:jahr/:monat Alles wochenlosungen für Monat
    * GET /losungen/woche/:jahr/:monat/:woche wochenlosung
    * GET /losungen/tag/:date tageslosung 
* service media.feg.de
    * GET /media/:image?width=:width&height=:height Bild mit Höhe breite
* service bible.feg.de https://github.com/scrollmapper/bible_databases (als Grundlage)
    * GET /bible/:code Text as JSON
--> RAML Doku!
Überall: Schema.org snippets, microdata


* create directives (eg cards, author) https://www.sitepoint.com/practical-guide-angularjs-directives/
* sitemap
* For html loading https://docs.angularjs.org/api/ng/service/$sce
* htaccess (redirect eg predigten.html > feg-ffb.de/!#predigten)
* abgualr-svc
    * plus mock 
* angualr-templates
* mark if DEBUG && TEST (small icons top right)

* add material (bootstrap)
* manifest
* Reading progress bar
* Button print
* image watermarking
* notifications
* add to homescreen
* https://github.com/anein/angular-lazy-image

* predigten
* predigt
* termine
* termin
* news
* new
* about_us (from all the static texts, using headlines and an arcodeion)
* kontakt
* losungen (Jahr, Monat, Woche, Tag)
* losung
* 404 (search)

* author
* tag

* multilanguages
* langauge selector (cookie based)

* logo: auf weißem kreis zusätzlich (zb für android, navbar-brandicon) --> neu generieren

* up: show only when #bottom (create on load) out of screen
    * better mobile view

* facebook-messenger
* Notifications
* RSS-Feed (combines other feeds) https://gist.github.com/smajda/204194
    * https://blog.feedly.com/10-ways-to-optimize-your-feed-for-feedly/
* offline

* keys from old site
* pagespeed insights
* facebook card
* twitter card
* http://www.evaluera.co.uk/atester
* http://wave.webaim.org/report#/feg-ffb.de
* https://validator.w3.org/nu/?doc=http%3A%2F%2Ffeg-ffb.de%2F
* https://search.google.com/structured-data/testing-tool#url=feg-ffb.de
* https://www.leapfroggr.com/seo-checklist/
* https://staytus.co/