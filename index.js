/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

function findRoot(current) {
  var app;

  // Keep iterating upward until we don't have a grandparent.
  // Has to do this grandparent check because at some point we hit the project.
  do {
    app = current.app || app;
  } while (current.parent && current.parent.parent && (current = current.parent));

  return app;
}

module.exports = {
  name: 'ember-get-config',

  treeForAddon: function() {
    var modulePrefix = findRoot(this).project.config(process.env.EMBER_ENV)['modulePrefix'];
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

    return this._super.treeForAddon.apply(this, arguments);
  }
};
