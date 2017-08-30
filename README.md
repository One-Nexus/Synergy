[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![Bower version](https://badge.fury.io/bo/Synergy.svg)](https://badge.fury.io/bo/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

#### Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [Documentation - Sass](#documentation---sass)
* [Documentation - JS](#documentation---js)
* [Creating a Theme](#creating-a-theme)
* [Development](#development)
* [Changelog](#changelog)

> A front-end framework for creating modular, configurable and scalable UI components

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

#### 60 Second Example - Sass

Inside `_header.scss`

```scss
@mixin header($custom: ()) {
    // Merge default config with custom values
    $header: config((
        'name'          : 'header',
        'fixed'         : false,
        'background'    : #000000,
        'wrapper-width' : 960px
    ), $custom);
    
    @include module {
        
        background: this('background');
        
        @include modifier('noLogo') {
            @include module('logo') {
                display: none;   
            }    
        }
        
        @include component('wrapper') {
            width: this('wrapper-width'); 
        }
        
        @include option('fixed') {
            position: fixed;
        }
        
    }
}
```

Wherever you want to output the CSS, in the same or another file...

```scss
@include header();
```

To modify the default options, pass them to the mixin with the new value:

```scss
@include header((
    'background'    : blue,
    'wrapper-width' : 90%
));
```

###### CSS Output

```css
.header,
[class*='header-'] {
    background: blue;
}
[class*='header-'][class*='-noLogo'] .logo,
[class*='header-'][class*='-noLogo'] [class*='logo-'] {
    display: none;
}
.header_wrapper,
[class*='header_wrapper-'] {
    width: 90%;
}
[class*='header-'][class*='-fixed'] {
    position: fixed;
}
```

Your markup for the above module may now look something like the following:

```html
<div class="header">
    <div class="header_wrapper">
        <div class="logo">...</div>
        ...
    </div>    
</div>
```

If you want to hide the logo, you can add the `noLogo` modifier to the header:

```html
<div class="header-noLogo">
    ...   
</div>
```

If you want to set the header's position to `fixed`, there are two ways you can do this. Firstly, you can again add the appropriate modifier to the markup:

```html
<div class="header-fixed">
    ...   
</div>
```

N.B. Modifiers can be chained in any order:

```html
<div class="header-fixed-noLogo">
    ...   
</div>
```

Or you can set the header to be fixed (without the need of a modifier) by passing the option to the mixin when calling it:

```scss
@include header((
    'fixed' : true
));
```

Then just:

```html
<div class="header">
    ...
</div>
```

#### 60 Second Example - JavaScript

Inside `header.js`:

```js
import Synergy from './path/to/synergy';

export function header(els, custom) {

    const defaults = {
        fixed: false,
        background: '#000000',
        wrapper-width : '960px'
    }

    Synergy(els, (el, options) => {
        const wrapper = el.component('wrapper')[0];
        const fixed = options.fixed || el.modifier('fixed');

        if (fixed) {
            console.log('header is fixed');
        }

        if (el.modifier('noLogo')) {
            console.log('header has the "noLogo" modifier');
        }

        wrapper.doSomething();
    }, defaults, custom);

}
```

Call the function on the header element:

```html
<div class="header" id="header"></div>
```

```js
// Any of the following would work - continue reading to learn more
header(document.getElementByID('header'));
header(document.querySelector('#header'));
header(document.querySelectorAll('.header'));
header('.header');
header('header');
```

To modify the default options, pass them to the function with the new value:

```js
header('header', {
    fixed: true
});
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