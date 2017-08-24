#!/bin/bash
if ! type "json" > /dev/null; then
  echo '==> json not installed, installing'
  npm install -g json
fi
echo -n "Creating Public Folders..."
mkdir -p public
mkdir -p public/images
mkdir -p public/fonts
mkdir -p public/css
mkdir -p public/js
mkdir -p public/php
mkdir -p public/templates
mkdir -p tmp
chmod 777 tmp/
echo 'OK'

echo -n "Refresh Bower packages..."
bower install
echo 'OK'

echo -n "Refresh Gutenberg-CSS Package..."
npm install gutenberg-css
echo 'OK'

echo -n "Creating Index.html..."
pug index.pug -O config.json -o public/
echo 'OK'

echo -n "Creating templates..."
pug assets/templates -o public/templates
echo 'OK'

echo -n "Combine, Minify and Copy CSS..."
touch tmp/main.css
lessc assets/css/main.less tmp/main.css
cp bower_components/bootstrap/dist/css/bootstrap.min.css tmp/bootstrap.min.css
cp bower_components/font-awesome/css/font-awesome.min.css tmp/font-awesome.min.css
cp bower_components/offline/themes/offline-language-german.css tmp/offline-language-german.css
cp bower_components/offline/themes/offline-theme-dark.css tmp/offline-theme-dark.css
cp -a bower_components/font-awesome/fonts/. public/fonts/
uglifycss tmp/*.css > public/css/main.css
echo 'OK'

echo -n "Copy Gutenberg-Css for printing..."
cp node_modules/gutenberg-css/dist/gutenberg.min.css public/css/gutenberg.min.css
echo 'OK'

echo -n "Copy JS..."
cp assets/js/*.js public/js/
cp assets/js/controllers/*.js public/js/controllers/ 
cp bower_components/bootstrap/dist/js/bootstrap.min.js public/js/bootstrap.min.js
cp bower_components/angular/angular.min.js public/js/angular.min.js
cp bower_components/angular-route/angular-route.min.js public/js/angular-route.min.js
cp bower_components/angular-sanitize/angular-sanitize.js public/js/angular-sanitize.js
cp bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js public/js/ui-bootstrap-tpls.min.js
echo 'OK'

echo -n "Combine and Minify JS..."
uglifyjs public/js/* public/js/controllers/* -o public/js/js.min.js
echo 'OK'


echo -n "Copy Images..."
cp -a assets/images/. public/images/
cp assets/images/favicon.ico public/favicon.ico
echo 'OK'

echo -n '==> Minifying Images ...'
imagemin public/images/* --out-dir=public/images
echo 'OK'

echo -n "Copy php files..."
cp -a assets/php/. public/php/
echo 'OK'

echo -n "Create php-config..."
PHP_CONFIG_CAPTCHA=$(json -f config.json gCaptcha.server | sed -e 's/\n//g')
sed 's/%%%gCaptchaServerSecret%%%/$PHP_CONFIG_CAPTCHA/' public/php/config.php
echo 'OK'

echo -n "Copy  maintainance..."
pug maintainance.pug -o public/
echo 'OK'

echo -n "Copy htaccess..."
cp .htaccess public/.htaccess
echo 'OK'

echo -n "Copy AppCache.manifest..."
cp manifest.appcache public/manifest.appcache
echo 'OK'

echo -n "Copy Sitemap..."
cp sitemap.xml public/sitemap.xml
echo 'OK'

echo -n "Copy robots.txt..."
cp robots.txt public/robots.txt
echo 'OK'

rm -rf tmp

PUBLISH=$(json -f config.json control.publish | sed -e 's/\n//g')
if [ $PUBLISH == "test"]
then
  FTP_HOST=$(json -f config.json ftp.test.host | sed -e 's/\n//g')
  FTP_PORT=$(json -f config.json ftp.test.port | sed -e 's/\n//g')
  FTP_USER=$(json -f config.json ftp.test.user | sed -e 's/\n//g')
  FTP_PWD=$(json -f config.json ftp.test.password | sed -e 's/\n//g')
  FTP_DIR=$(json -f config.json ftp.test.directory | sed -e 's/\n//g')
  echo -n "publish page to TEST: $FTP_HOST..."
  lftp -e "mirror -R --recursion=always --transfer-all public/ $FTP_DIR" -p $FTP_PORT -u $FTP_USER,$FTP_PWD $FTP_HOST
  echo 'Done'
fi
if [ $PUBLISH == "live"]
then
  FTP_HOST=$(json -f config.json ftp.live.host | sed -e 's/\n//g')
  FTP_PORT=$(json -f config.json ftp.live.port | sed -e 's/\n//g')
  FTP_USER=$(json -f config.json ftp.live.user | sed -e 's/\n//g')
  FTP_PWD=$(json -f config.json ftp.live.password | sed -e 's/\n//g')
  FTP_DIR=$(json -f config.json ftp.live.directory | sed -e 's/\n//g')
  echo -n "publish page to LIVE: $FTP_HOST..."
  lftp -e "mirror -R --recursion=always --transfer-all public/ $FTP_DIR"  -p $FTP_PORT -u $FTP_USER,$FTP_PWD $FTP_HOST
  echo 'Done'
fi
if [ $PUBLISH == "none"]
then
  echo "All Done. Your Website is in the directory 'public'."
fi