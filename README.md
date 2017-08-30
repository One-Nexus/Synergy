[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![Bower version](https://badge.fury.io/bo/Synergy.svg)](https://badge.fury.io/bo/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

#### Wiki Links

* [Overview](#overview)
* [Installation](#installation)
* [Documentation - Sass](#documentation---sass)
* [Documentation - JS](#documentation---js)
* [Creating a Theme](#creating-a-theme)
* [Development](#development)
* [Changelog](#changelog)

> A front-end framework for creating modular, configurable and scalable UI components

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

### 60 Second Example

|-- modules
|   |-- header
|   |   |-- _header.scss
|   |   |-- header.js
|   |   |-- header.json
|-- themes
|   |-- Buzz
|   |   |-- buzz.scss
|   |   |-- buzz.js
|   |   |-- buzz.json
|-- _app.scss
|-- app.js

#### header.json

Starting with the header module, we'll create all configurable aspects by adding them to `header.json`:

```json
{
    "header": {
        "name": "header",
        "background": "",
        "height": "100px",
        "text-color": "",
        "link-color": "",
        "logo": {
            "height": "50px"
        },
        "dark": {
            "enabled": false,
            "background": "",
            "text-color": "",
            "link-color": ""
        },
        "sticky": {
            "enabled": false,
            "offset": 0
        }
    }
}
```

#### _header.scss

Next, inside `_header.scss` we will create the foundation for the `header` CSS - with the goal being to be able to change anything about the header without ever touching this file again (toucing only the above `header.json` file):

```scss
@import '../../modules/header/header.json';

@mixin header($custom: custom('header')) {

    $header: config($header, $custom);

    @include module {

        color: this('text-color');

        a {
            color: this('link-color');
        }

        @include component('logo') {
            @include get-styles(this('logo'));

            display: inline-block;
            vertical-align: middle;
        }

        @include modifier('fixed') {
            position: fixed;
            width: 100%;
            top: 0;
        }

        @include option('dark') {
            @include get-styles(this('dark'));

            color: this('dark', 'text-color');

            a {
                color: this('dark', 'link-color');
            }
        }

    }

}
```

#### header.js

```js
import * as app from '../../app';
import defaults from './header.json';

export function header(els = 'header', custom = {}) {

    custom = app.custom('header', custom);

    app.Synergy(els, (header, options) => {

        const stickyOffset = options.sticky.offset || header.offsetTop;

        if (options.sticky.enabled || header.modifier('sticky')) {
            window.addEventListener('load', stickyHeaderHandler);
            window.addEventListener('scroll', stickyHeaderHandler);
        }

        function stickyHeaderHandler() {
            const operator = (window.scrollY > stickyOffset) ? 'set' : 'unset';

            header.modifier('fixed', operator);
        }

    }, defaults, custom);
}
```

#### _app.scss

```scss

```

#### app.js

```js

```

#### buzz.scss

```scss

```

#### buzz.js

```js

```

#### buzz.json

```json

```

## Changelog

### Version 3.7.0

Released: 30th July 2017

###### Release Notes

* Splitting JS into smaller functions

### Version 3.6.0

Released: 11th June 2017

###### Release Notes

* Synergy JS module rewritten in ES6
* Removing Sass-JSON as dependency, replacing with Sass-JSON-Vars
* Updating Sass-Boost dependency
* Dependences now node modules instead of git submodules
* Improving options mixin
* Adding `value-enabled()` utility function
* Adding `enabled()` utility function
* Allow modules to have default modifiers
* Allow extending of modifiers when including module
* Allow combining of modifiers when including module
* Allow module output to be disabled
* Removing `overwrite()` mixin
* Removing `overwrite-component()` mixin
* `module()` mixin is now nestable
* `component()` mixin is now nestable
* Adding JavaScript unit tests