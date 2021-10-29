[![npm version](https://badge.fury.io/js/ember-get-config.svg)](https://badge.fury.io/js/ember-get-config)
[![GitHub Actions Build Status](https://img.shields.io/github/workflow/status/mansona/ember-get-config/CI/master)](https://github.com/mansona/ember-get-config/actions/workflows/ci.yml?query=branch%3Amaster)

# ember-get-config

Gaining access to an app's config file from an addon can be challenging. If possible, you should always get it through the container like so:

```js
export default Ember.Component.extend({
  someFunction() {
    const config = Ember.getOwner(this).resolveRegistration('config:environment');
    . . . .
  }
});
```

If you do not have access to the container though, you can always use `ember-get-config`.

## Installation

`ember install ember-get-config`

## Usage

Simply:

```js
import config from 'ember-get-config';
```

Which allows you to do handy things like:

```js
const { environment, modulePrefix } = config;
```

Boom!

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.
