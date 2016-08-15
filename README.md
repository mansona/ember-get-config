[![npm version](https://badge.fury.io/js/ember-get-config.svg)](https://badge.fury.io/js/ember-get-config)
[![Build Status](https://travis-ci.org/null-null-null/ember-get-config.svg?branch=master)](https://travis-ci.org/null-null-null/ember-get-config)

# ember-get-config

Gaining access to an app's config file from an addon can be challenging. If you're lucky, you can simply use `Ember.getOwner` or the `container` itself to grab the config, but there are situations where that is not an options. So what then? Then you use `ember-get-config`, obviously!

## Installation

`ember install ember-get-config`

## Usage

First, in your addon's `index.js`:

```js
included: function() {
  this.eachAddonInvoke('included', arguments);
}
```

Then anywhere in your addon:

```js
import config from 'ember-get-config';
```

Which allows you to do handy things like:

```js
const { environment, modulePrefix } = config;
```

Boom!
