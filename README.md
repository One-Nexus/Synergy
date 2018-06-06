[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

[![Synergy](https://raw.githubusercontent.com/esr360/Synergy/gh-pages/logo-small.png "Synergy Logo")](https://github.com/esr360/Synergy)

> A front-end framework for creating modular, configurable and scalable UI components for the web

### Useful Wiki Pages

* [Why Use Synergy](https://github.com/esr360/Synergy/wiki/Why-Use-Synergy)
* [Installation](https://github.com/esr360/Synergy/wiki/Installation)
* [Sass](https://github.com/esr360/Synergy/wiki/Sass)
* [JavaScript](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Using With React](https://github.com/esr360/Synergy/wiki/Using-With-React)
* [Creating a Theme](https://github.com/esr360/Synergy/wiki/Creating-a-Theme)

[View SassDoc Documentation](http://esr360.github.io/Synergy/docs/sass) | [View JSDoc Documentation](http://esr360.github.io/Synergy/docs/js)

## Overview

Synergy provides powerful tools to help you create configurable modules in `Sass`, `JavaScript` and/or `React`:

* [Use Synergy to create Sass components](https://github.com/esr360/Synergy/wiki/Sass)
* [Use Synergy to create JavaScript components](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Use Synergy to create React components](https://github.com/esr360/Synergy/wiki/Using-With-React)

Synergy also povides tools allowing you to combine the above aspects together to create a `Synergy Module`. Each aspect can work independently and exists as a separate file with a specific role:

* [Module Configuration](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) (`.json`)
* [Module Styles](https://github.com/esr360/Synergy/wiki/Sass#isolating-configurable-styles) (`.scss`)
* [Module Interactions](https://github.com/esr360/Synergy/wiki/Module-Interactions) (`.js`)
* [Module Rendering](https://github.com/esr360/Synergy/wiki/Using-With-React) (`.jsx`)

```
|-- modules
|   |-- accordion
|   |   |-- accordion.js
|   |   |-- accordion.json
|   |   |-- accordion.jsx
|   |   |-- accordion.scss
```

> Synergy modules can be configured and scaled without having to touch the module's source code

A Synergy module is composed of `Components`. Both `Modules` and `Components` can have `Modifiers`.

###### Sample Structure

```xml
<Module {modifiers}>
    <Component {modifiers}>
        {content}
    </Component>

    {content}

    <Component {modifiers}>
        {content}
    </Component>
</Module>
```

* [Learn more about Modules](https://github.com/esr360/Synergy/wiki/What-Is-a-Module)
* [Learn more about Components](https://github.com/esr360/Synergy/wiki/What-Is-a-Component)
* [Learn more about Modifiers](https://github.com/esr360/Synergy/wiki/What-Is-a-Modifier)

Using Synergy, you can create themes and control your entire project's UI from a single JSON file by passing custom options and parameters to your modules.

> [Learn more](https://github.com/esr360/Synergy/wiki/Creating-a-Theme) about creating themes

## Example

> Using Synergy to create a basic `accordion` module - [Learn more](https://github.com/esr360/Synergy/wiki/Example-Uncovered) about this example

### Structure

```
|-- UI
|   |-- modules
|   |   |-- accordion
|   |   |   |-- accordion.js
|   |   |   |-- accordion.json
|   |   |   |-- accordion.jsx
|   |   |   |-- accordion.scss
|   |-- app.scss
|   |-- app.{js|jsx}
```

### Accordion Styles (`accordion.scss`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Sass#isolating-configurable-styles) about module styles

```scss
@import '../../node_modules/Synergy/dist/synergy';

@import 'accordion.json';

@mixin accordion($custom: ()) {

    $accordion: config($accordion, $custom);

    @include module {
        @include component('panel') {
            &:not(:last-child) {
                margin-bottom: this('panel', 'vertical-rhythm');
            }
        }

        @include component('title', (
            display: block,
            margin: 0,
            backface-visibility: hidden,
            font-weight: normal,
            line-height: 1,
            cursor: pointer,
            'active': (
                component('toggle'): (
                    transform: rotate(90deg) translateZ(0)
                )
            )
        ));

        @include component('toggle', (
            float: right,
            line-height: 0.75
        ));

        @include component('content', (
            display: none,
            margin: 0,
            'active': (
                display: block
            )
        ));
    }

}
```

### Accordion Interactions (`accordion.js`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Module-Interactions) about module interactions

```js
import { Synergy } from 'Synergy';

import defaults from './accordion.json';

// Interaction Interface (used when not using React)
export default function accordion(custom) {
    Synergy('accordion', (accordion, options) => {
        accordion.component('panel', panel => {
            panel.component('title', title => {
                title.addEventListener('click', toggle.bind(panel), false);
            });
        });
    }, defaults, custom);
}

// Toggle Interaction
export function toggle(panel) {
    const panel = panel.target ? panel.target : this;
    const operator = panel.modifier('active', 'isset') ? 'unset' : 'set';

    panel.modifier('active', operator);
}
```

### Accordion Rendering (Using React) (`accordion.jsx`)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Synergize, Module, Component } from 'Synergy';

import defaults from './accordion.json';
import { toggle } from './accordion.js;

// Interaction Interface (used when not using raw DOM API)
export default class Accordion extends Synergize {
    render() {
        return (
            <Module {...this.props}>
                {this.props.panels.map(({ title, content }, index) => (
                    <Component name='panel' key={index}>
                        <Component name='title' onClick={toggle}>
                            <Component name='toggle' /> {title}
                        </Component>
                        <Component name='content'>{content}</Component>
                    </Component>
                ))}
            </Module>
        )
    }
}

Accordion.defaultProps = {
    name: defaults.accordion.name
};
```

### Accordion Configuration (`accordion.json`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) about module configuration

```json
{
    "accordion": {
        "name": "accordion",
        "panel": {
            "vertical-rhythm": 0
        },
        "title": {
            "background": "transparent",
            "color": "#444444",
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1em",
            "transition": "0.4s",
            "hover": {
                "background": "#2E3882",
                "color": "white",
                "component(toggle)": {
                    "color": "white"
                }
            },
            "active": {
                "background": "#2E3882",
                "color": "white",
                "border-color": "transparent",
                "border-radius": 0,
                "component(toggle)": {
                    "color": "white"
                }
            }
        },
        "content": {
            "background": "white",
            "color": "#444444",
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1.5em"
        },
        "toggle": {
            "color": "rgba(black, 0.4)",
            "transition": "0.4s"
        }
    }
}
```

### Loading Styles (`app.scss`)

```scss
@import '/modules/accordion/accordion';

@include accordion();

// With custom options
@include accordion((
    panel: (
        vertical-rhythm: 2em
    ),
    title: (
        background: #06d2ff,
        color: white
    )
));
```

### Initialising/Rendering Accordion (`app.js/app.jsx`)

#### Initialise Using Plain HTML/JavaScript (`app.js`)

```html
<div class="accordion">
    <div class="accordion_panel">
        <div class="accordion_title">
            <div class="accordion_toggle"></div> foo
        </div>
        <div class="accordion_content">bar</div>
    </div>
    <div class="accordion_panel">
        <div class="accordion_title">
            <div class="accordion_toggle"></div> fizz
        </div>
        <div class="accordion_content">buzz</div>
    </div>
</div>
```

```js
import accordion from './modules/accordion/accordion.js';

accordion();

// With custom options (whilst this example doesn't make use
// of these values in the JS, it still has access to them)
accordion('accordion', {
    panel: {
        'vertical-rhythm': 0
    },
    title: {
        background: '#06d2ff',
        color: 'white'
    }
})
```

#### Or Render Using React (`app.jsx`)

```html
<div id="demo"></div>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './modules/accordion/accordion.jsx';

ReactDOM.render(
    <Accordion panels={[
        {title: 'foo', content: 'bar'},
        {title: 'fizz', content: 'buzz'},
    ]} />, 

    document.getElementById('demo')
);
```

## Changelog

### Version 3.10.0

Released: 29th May 2018

###### Release Notes

* Allowing `<Component>`'s to accept event handlers as props
* Allow passing of custom HTML tag to `<Module>`
* Set module modifiers by passing as empty prop
* Adding `<Wrapper>` and `<Group>` components
* Specify list of CSS classes to add via empty prop
* Allow passing of CSS through Sass map istead of through `@content`
* Adding `sub-component` Sass mixin
* Adding `pseudo-state` Sass mixin
* Dynamically fetch `<Component>` onClick event from window.UI object
* Set `<Module>` as another module by passing module name as prop
* Dynamically set `tag` prop on module if `name` prop is valid HTML tag
* Get HTML attributes from props
* Sets `initialised` in module config when initialised
* Allow passing of data-attributes to module
* Append content before/after module through `before` and `after` props
* Removing Bower
* General refactoring and bug fixes

### Version 3.9.2

Released: 13th January 2018

###### Release Notes

* Fixing bug where only first modifier in module.jsx was parsed

### Version 3.9.1

Released: 11th January 2018

###### Release Notes

* Exporting transpiled module instead of ES6