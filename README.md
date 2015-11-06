[![npm version](https://badge.fury.io/js/ember-get-config.svg)](https://badge.fury.io/js/ember-get-config)
[![Build Status](https://travis-ci.org/null-null-null/ember-get-config.svg?branch=master)](https://travis-ci.org/null-null-null/ember-get-config)

# ember-get-config

If you've ever tried to gain access to an app's config file from an addon, then you've felt *the pain*. If you were lucky, you had access to the `container` and could grab the config through that, but there are situations where the container is not available. So what then? Then you use `ember-get-config`, obviously!

## Installation

`ember install ember-get-config`

## Usage

```js
import config from 'ember-get-config';
```

And then you can do handy things like:

```js
const { environment, modulePrefix } = config;
```

Boom!
