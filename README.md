[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![Bower version](https://badge.fury.io/bo/Synergy.svg)](https://badge.fury.io/bo/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

> A front-end framework for creating modular, configurable and scalable UI modules

### Useful Wiki Pages

* [What Is Synergy](https://github.com/esr360/Synergy/wiki/What-Is-Synergy)
* [Why Use Synergy](https://github.com/esr360/Synergy/wiki/Why-Use-Synergy)
* [Installation](https://github.com/esr360/Synergy/wiki/Installation)
* [Project Architecture](https://github.com/esr360/Synergy/wiki/Project-Architecture)
* [Getting Started](https://github.com/esr360/Synergy/wiki/Getting-Started)
* [Sass Walkthrough](https://github.com/esr360/Synergy/wiki/Sass-Walkthrough)
* [Sass Mixins](https://github.com/esr360/Synergy/wiki/Sass-Mixins)
* [JavaScript](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Environment Configuration](https://github.com/esr360/Synergy/wiki/Environment-Configuration)
* [Creating a Theme](https://github.com/esr360/Synergy/wiki/Creating-a-Theme)
* [Developing Synergy](https://github.com/esr360/Synergy/wiki/Developing-Synergy)

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

### Quick Look

###### HTML

```html
<div class="header-fixed">
    <div class="header_logo">
        ...
    </div>
</div>
```

###### Sass

```scss
@include module('header') {

    @include modifier('fixed') {
        ...
    }

    @include component('logo') {
        ...
    }

}
```

###### JavaScript

```js
Synergy('header', function(header) {
    var fixed = header.modifier('fixed'); // returns Bool
    var logo = header.component('logo')[0]; // returns HTMLElement

    ...
});
```

### Module Example

```
|-- modules
|   |-- header
|   |   |-- _header.scss
|   |   |-- header.js
|   |   |-- header.json
|-- app.scss
|-- app.js
```

> For a detailed analysis of this example, checkout the [Example Uncovered](https://github.com/esr360/Synergy/wiki/Example-Uncovered) wiki page

#### header.json

Synergy allows you to abstract a new layer on-top of your UI module's styles and scripts to isolate all potentially configurable aspects in the form of a JSON file:

```json
{
    "header": {
        "name": "header",
        "background": "#04E2C1",
        "height": "100px",
        "text-color": "#EFFCFA",
        "link-color": "#FFFFFF",
        "logo": {
            "image-path": "../../images/logo.png",
            "height": "50px",
            "width": "200px",
            "padding": "20px 0"
        },
        "dark": {
            "enabled": false,
            "background": "#353535",
            "text-color": "#F7F7F7",
            "link-color": "#04E2C1"
        },
        "sticky": {
            "enabled": false,
            "offset": 0
        }
    }
}
```

#### _header.scss

Using the Synergy Sass mixins, the foundation for the module's CSS can be written, hard-coding only the core styles for the module - with a goal of being to be able to change anything about the header without ever touching this file again (touching only the above `header.json` file):

> Keys within `header.json` which correspond to CSS properties do not need to be added to `_header.scss`

```scss
@import './modules/header/header.json';

@mixin header($custom: ()) {

    $header: config($header, $custom);

    @include module {

        color: this('text-color');

        a {
            color: this('link-color');
        }

        @include component('logo') {
            background-image: url(this('logo', 'image-path'));
            background-size: cover;
            display: inline-block;
            vertical-align: middle;
        }

        @include modifier('fixed') {
            position: fixed;
            width: 100%;
            top: 0;
        }

        @include option('dark') {
            color: this('dark', 'text-color');

            a {
                color: this('dark', 'link-color');
            }
        }

    }

}
```

> For the compiled CSS result checkout the [Example Uncovered](https://github.com/esr360/Synergy/wiki/Example-Uncovered) page

#### header.js

Modules, components and modifiers can easily be manipulated using the Synergy function and methods:

```js
import { Synergy } from '../../app';
import config from './header.json';

export function header(custom) {

    Synergy('header', (header, options) => {

        const stickyOffset = options.sticky.offset || header.offsetTop;
        const logo = header.component('logo')[0];

        if (options.sticky.enabled || header.modifier('sticky')) {
            window.addEventListener('load', stickyHeaderHandler);
            window.addEventListener('scroll', stickyHeaderHandler);
        }

        function stickyHeaderHandler() {
            const operator = (window.scrollY > stickyOffset) ? 'set' : 'unset';

            header.modifier('fixed', operator);
            logo.modifier('small', operator);
        }

    }, config, custom);

}
```

#### app.scss

```scss
@import '../node_modules/Synergy/dist/synergy';

@import './modules/header/header';

@include header();

/* Passing custom options
@include header ((
    'background': #04E2C1,
    'logo': (
        'height': 30px,
        'width': 170px
    ),
    'dark': (
        'enabled': true
    )
));
*/
```

#### app.js

```js
import { Synergy } from 'Synergy';
export { Synergy };

import { header } from './modules/header/header';

header();

/* Passing custom options
header ({
    background: '#04E2C1',
    logo: {
        height: '30px',
        width: '170px'
    },
    dark: {
        enabled: true
    }
});
*/
```

#### HTML Usage

Given the above, we would now be able to use any of the following markup examples:

```html
<header class="header">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `dark.enabled` to `true` -->
<header class="header-dark">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `sticky.enabled` to `true` -->
<header class="header-sticky">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting both `dark.enabled` and `sticky.enabled` to `true` -->
<header class="header-dark-sticky">
    <div class="header_logo"></div>
</header>
```

## Changelog

### Version 3.8.0

Released: @TODO September 2017

###### Release Notes

* add sass warn message when this('option') doesn't exist
* fixing issues of module-tree functon stripping hyphens from module name
* improving how CSS styles are passed to modules
* processes values in "active" and "hover" entries in config
* refactoring Synergy.js
* adding selector() function
* allow passing of customer parser to parse configuration
* adding deepextend JS module
* making component and modifier glue configurable

### Version 3.7.0

Released: 30th July 2017

###### Release Notes

* Splitting JS into smaller functions

[View complete changelog](https://github.com/esr360/Synergy/wiki/Changelog)