/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-get-config',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var appConfig = app.project.config(process.env.EMBER_ENV) || {};

    fs.writeFileSync(
      path.join(__dirname, 'addon', 'index.js'),
      'export default ' + JSON.stringify(appConfig, null, 2) + ';',
      'utf-8'
    );
  }
};
