[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![Bower version](https://badge.fury.io/bo/Synergy.svg)](https://badge.fury.io/bo/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

> A front-end framework for creating modular, configurable and scalable UI components for the web

### Useful Wiki Pages

* [What Is Synergy](https://github.com/esr360/Synergy/wiki/What-Is-Synergy)
* [Why Use Synergy](https://github.com/esr360/Synergy/wiki/Why-Use-Synergy)
* [Installation](https://github.com/esr360/Synergy/wiki/Installation)
* [Project Architecture](https://github.com/esr360/Synergy/wiki/Project-Architecture)
* [Getting Started](https://github.com/esr360/Synergy/wiki/Getting-Started)
* [Sass Walkthrough](https://github.com/esr360/Synergy/wiki/Sass-Walkthrough)
* [Sass Mixins](https://github.com/esr360/Synergy/wiki/Sass-Mixins)
* [JavaScript](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Render Components Using React](https://github.com/esr360/Synergy/wiki/Render-Components)
* [Environment Configuration](https://github.com/esr360/Synergy/wiki/Environment-Configuration)
* [Creating a Theme](https://github.com/esr360/Synergy/wiki/Creating-a-Theme)
* [Developing Synergy](https://github.com/esr360/Synergy/wiki/Developing-Synergy)

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

***
#### New in version 3.9: Render Synergy modules using React! [Learn More](https://github.com/esr360/Synergy/wiki/Render-Components)
***

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Module, Component } from 'Synergy';

const Accordion = ({name = 'accordion', panels, modifiers}) => (
    <Module name={name} modifiers={modifiers}>
        {panels.map(({title, content}, index) => (
            <Component name="panel" key={index}>
                <Component name="title">{title}</Component>
                <Component name="content">{content}</Component>
            </Component>
        ))}
    </Module>
);

// Accordion content
const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

// Render Accordion
ReactDOM.render(
    <Accordion panels={panels} modifiers={['foo', 'bar']} />, 
    document.getElementById('react')
);
```

##### Output:

```html
<div class="accordion-foo-bar">
    <div class="accordion_panel">
        <div class="accordion_title">foo</div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_panel">
        <div class="accordion_title">fizz</div>
        <div class="accordion_content">buzz</div>
    </div>
</div>
```

### Quick Look

Synergy uses a naming convention similar to BEM: __Module_Component-Modifier__, but unlike BEM, no keywords ever need to be repeated in selectors ([Read More](Sass-Walkthrough)).

###### HTML

```html
<div class="header-dark-fixed">
    <div class="header_logo">
        ...
    </div>
</div>
```

###### Sass

```scss
@include module('header') {

    // Core header styles
    ...

    @include modifier('dark') {
        ...
    }

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
Synergy('header', header => {
    const fixed = header.modifier('dark'); // returns Bool
    const fixed = header.modifier('fixed'); // returns Bool
    const logo  = header.component('logo')[0]; // returns HTMLElement

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

Using the Synergy Sass mixins, the foundation for the module's CSS can be written, hard-coding only the core properties for the module:

> Keys within `header.json` which correspond to CSS properties do not need to be added to `_header.scss`

```scss
@import 'header.json';

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
import { Synergy } from 'Synergy';
import config from './header.json';

export default function header(custom) {

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
```

Or with custom options:

```scss
@import '../node_modules/Synergy/dist/synergy';

@import './modules/header/header';

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
```

#### app.js

```js
import header from './modules/header/header';

header();
```

Or with custom options:

```js
import header from './modules/header/header';

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
```

> Naturally, since this is JS, passing the `background` param here will not change the header's background, it merely exposes the value to `header.js` - probably not something that would be done in real life but is shown just for completeness

#### HTML Usage

Given the above, we would now be able to use any of the following markup examples:

```html
<header class="header">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `dark.enabled` to `true` in header.json -->
<header class="header-dark">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting `sticky.enabled` to `true` in header.json -->
<header class="header-sticky">
    <div class="header_logo"></div>
</header>
```

```html
<!-- This is the equivilent of setting both `dark.enabled` and `sticky.enabled` to `true` in header.json -->
<header class="header-dark-sticky">
    <div class="header_logo"></div>
</header>
```

## Changelog

### Version 3.9.0

Released: 10th January 2018

###### Release Notes

* Now compatible with Node-Sass/Libsass (hence no longer dependent on Ruby) 👯‍♂️
* Ability to render components with React 😎
* Replacing Grunt with Webpack 🙏
* Replacing scss-lint with stylelint
* General minor improvements

### Version 3.8.1

Released: 6th October 2017

###### Release Notes

* Fixing issue with `this()` function error warning

### Version 3.8.0

Released: 4th October 2017

###### Release Notes

* add sass warn message when this('option') doesn't exist
* fixing issues of module-tree functon stripping hyphens from module name
* improving how CSS styles are passed to modules
* processes values in "active" and "hover" entries in config
* refactoring Synergy.js
* adding selector() function
* allow passing of custom parser to parse configuration
* adding deepextend JS module
* making component and modifier glue configurable

[View complete changelog](https://github.com/esr360/Synergy/wiki/Changelog)