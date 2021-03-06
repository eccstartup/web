/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	wrapInEval: false
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets'});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts'});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', { destDir: 'fonts'});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts'});
app.import('bower_components/moment/min/moment-with-locales.min.js');
app.import('bower_components/bpopup/jquery.bpopup.min.js');
app.import('bower_components/class-extender-ember-cli/index.js');
app.import('bower_components/hashmap/hashmap.js');
app.import('bower_components/bootstrap-material-design/dist/css/material-fullpalette.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/ripples.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/roboto.min.css');
app.import('bower_components/bootstrap-material-design/dist/js/material.min.js');
app.import('bower_components/bootstrap-material-design/dist/js/ripples.min.js');


module.exports = app.toTree();
