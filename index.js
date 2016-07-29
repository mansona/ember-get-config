/* jshint node: true */
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'ember-get-config',

  included(app) {
    this._super.included.apply(this, arguments);

    const appConfig = app.project.config(process.env.EMBER_ENV) || {};

    fs.writeFileSync(
      path.join(__dirname, 'addon', 'index.js'),
      `export default ${JSON.stringify(appConfig, null, 2)};`,
      'utf-8'
    );
  }
};
