/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');
var FileCreator = require('broccoli-file-creator');

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
    var indexTree = new FileCreator(
      'index.js',
      'export { default } from \'' + modulePrefix + '/config/environment\';'
    );

    return this._super.treeForAddon.call(this, indexTree);
  },

  _includedCount: 0,

  included: function() {
    this._includedCount++;
    if (this._includedCount > 1) {
      findRoot(this).project.ui.writeDeprecateLine('`ember-get-config` previously recommended reinvoking the `included` hook, but that is no longer recommended. Please remove the additional invocation.');
    }
  }
};
