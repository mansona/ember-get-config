/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-get-config',

  included: function(app) {
    this._super.included.apply(this, arguments);

    while (app.app) {
      app = app.app;
    }

    var modulePrefix = app.project.config(process.env.EMBER_ENV)['modulePrefix'];
    var addonDir = path.join(__dirname, 'addon');

    try {
      fs.statSync(addonDir);
    } catch(e) {
      fs.mkdirSync(addonDir);
    }

    fs.writeFileSync(
      path.join(addonDir, 'index.js'),
      'export { default } from \'' + modulePrefix + '/config/environment\';',
      'utf-8'
    );
  }
};
