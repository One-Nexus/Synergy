[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![Bower version](https://badge.fury.io/bo/Synergy.svg)](https://badge.fury.io/bo/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

#### Useful Wiki Pages

* [What Is Synergy](wiki/What-Is-Synergy)
* [Why Use Synergy](wiki/Why-Use-Synergy)
* [Installation](wiki/Installation)
* [Getting Started](wiki/Getting-Started)
* [Project Architecture](wiki/Project-Architecture)
* [Environment Configuration](wiki/Environment-Configuration)
* [How To Use](wiki/How-To-Use)
* [Creating a Theme](wiki/Creating-a-Theme)
* [Developing Synergy](wiki/Developing-Synergy)
* [Changelog](#changelog)

> A front-end framework for creating modular, configurable and scalable UI modules

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

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

> For a detailed analysis of this example, checkout the [Example Uncovered](#TODO) wiki page

#### header.json

Synergy abstracts a new layer ontop of your UI module's styles and scripts to isolate all configurable aspects in the form of a JSON file:

```json
{
    "header": {
        "name": "header",
        "background": "",
        "height": "100px",
        "text-color": "",
        "link-color": "",
        "logo": {
            "image-path": "",
            "height": "50px",
            "width": "200px",
            "padding": "20px 0"
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

Using the Synergy Sass mixins, the foundation for the module's CSS can be written, hard-coding only the core styles for the module - with a goal being to be able to change anything about the header without ever touching this file again (toucing only the above `header.json` file):

```scss
@import './modules/header/header.json';

@mixin header() {

    $config: $header;

    @include module {

        color: this('text-color');

        a {
            color: this('link-color');
        }

        @include component('logo') {
            @include get-styles(this('logo'));

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
            @include get-styles(this('dark'));

            color: this('dark', 'text-color');

            a {
                color: this('dark', 'link-color');
            }
        }

    }

}
```

> For the compiled CSS result checkout the [Example Uncovered](#TODO) page

#### header.js

Modules, components and modifiers can easily be manipulated using the Synergy function and methods:

```js
import { Synergy } from '../../app';
import config from './header.json';

export function header() {

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
        }

    }, config);

}
```

#### app.scss

```scss
@import '../node_modules/Synergy/dist/synergy';

@import './modules/header/header';

@include header();
```

#### app.js

```js
export { default as Synergy } from 'Synergy';

import { header } from './modules/header/header';

header();
```

#### HTML Usage

Given the above, we would now be able to use any of the following markup examples:

```html
<header class="header">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `dark.enabled` in `header.json` to `true` -->
<header class="header-dark">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `sticky.enabled` in `header.json` to `true` -->
<header class="header-sticky">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting both `dark.enabled` and `sticky.enabled` in `header.json` to `true` -->
<header class="header-dark-sticky">
    <div class="header_logo"></div>
</header>
```

## Changelog

### Version 3.8.0

Released: * September 2017

###### Release Notes

* add sass warn message when this('option') doesn't exist
* fixing issues of module-tree functon stripping hyphens from module name
* improving how CSS styles are passed to modules
* processes values in "active" and "hover" entries in config
* refactoring Synergy.js
* adding selector() function
* allow passing of customer parser to parse configuration
* adding deepextend JS module
* making component and modifier glue configuable

### Version 3.7.0

Released: 30th July 2017

###### Release Notes

* Splitting JS into smaller functions