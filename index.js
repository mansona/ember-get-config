'use strict';

function findRoot(current) {
  var app;

  // Keep iterating upward until we don't have a grandparent.
  // Has to do this grandparent check because at some point we hit the project.
  do {
    app = current.app || app;
  } while (
    current.parent &&
    current.parent.parent &&
    (current = current.parent)
  );

  return app;
}

module.exports = {
  options: {
    '@embroider/macros': {
      setOwnConfig: {},
    },
  },

  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    this.options['@embroider/macros'].setOwnConfig.modulePrefix =
      findRoot(this).project.config().modulePrefix;
  },
};
