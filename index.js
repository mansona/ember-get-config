/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-get-config',

  included: function(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    var modulePrefix = app.project.config(process.env.EMBER_ENV)['modulePrefix'];

    fs.writeFileSync(
      path.join(__dirname, 'addon', 'index.js'),
      'export { default } from \'' + modulePrefix + '/config/environment\';',
      'utf-8'
    );
  }
};
