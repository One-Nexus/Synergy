[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

<img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />

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

<table>
    <tr>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/Sass">
                <img style="vertical-align: middle;" src="http://www.onenexus.io/synergy/github-sass-logo.png" />
            </a>
        </td>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/JavaScript">
                <img src="http://www.onenexus.io/synergy/github-javascript-logo.png" />
            </a>
        </td>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/Using-With-React">
                <img src="http://www.onenexus.io/synergy/github-react-logo.png" />
            </a>
        </td>
    </tr>
</table>

Synergy provides powerful APIs to help you create configurable modules in `Sass`, `JavaScript` and/or `React`:

* [Use Synergy to create Sass components](https://github.com/esr360/Synergy/wiki/Sass)
* [Use Synergy to create JavaScript components](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Use Synergy to create React components](https://github.com/esr360/Synergy/wiki/Using-With-React)

> Synergy is ideal for creating your presentational React components when using the [Container Component Pattern](https://reactpatterns.com/#container-component) ([learn more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))

Synergy also povides tools allowing you to combine the above aspects together to create a `Synergy Module`. Each aspect can work independently and exists as a separate file with a specific role:

* [Module Configuration](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) (`.json`)
* [Module Styles](https://github.com/esr360/Synergy/wiki/Sass#isolating-configurable-styles) (`.scss`)
* [Module Interactions](https://github.com/esr360/Synergy/wiki/Module-Interactions) (`.js`)
* [Module Interface](https://github.com/esr360/Synergy/wiki/Using-With-React) (`.jsx`)

These are the core concepts of a UI module.

<p align="center"><img src="http://www.onenexus.io/synergy/synergy.png" width="600px" /></p>

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

> Using Synergy to create a basic `accordion` module which will be configured by `accordion.json` - [Learn more](https://github.com/esr360/Synergy/wiki/Example-Uncovered) about this example

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

### Fundamental Styles (`accordion.scss`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Sass#isolating-configurable-styles) about module styles

```scss
@import '../../node_modules/Synergy/dist/synergy';

@import 'accordion.json';

@mixin accordion() {

    $config: config($accordion, map-get($theme, 'accordion'));

    @include module {
        @include component('panel') {
            &:not(:last-child) {
                margin-bottom: this('panel', 'vertical-rhythm');
            }

            @include modifier('active') {
                @include component('toggle') {
                    transform: rotate(90deg);
                }

                @include component('content') {
                    display: block;
                }
            }
        }

        @include component('title', (
            'display': block,
            'cursor': pointer
        ));

        @include component('toggle', (
            'float': right
        ));

        @include component('content', (
            'display': none
        ));
    }
}
```

### Accordion Interface - Plain JavaScript (`accordion.js`)

> [Learn more](Module-Interactions#the-interaction-interface) about _module interfaces_

```js
import { Synergy } from 'Synergy';

import config from './accordion.json';

export default function accordion() {
    Synergy(config.name, accordion => {
        accordion.component('panel', panel => {
            panel.component('title', title => {
                title.addEventListener('click', toggle.bind(panel), false);
            });
        });
    });
}

function toggle() {
    this.modifier('active', 'toggle');
}
```

### Accordion Interface - JSX (`accordion.jsx`)

```jsx
import React from 'react';
import { Module, Component } from 'Synergy';

import config from './accordion.json';

export default Accordion = ({ panels, ...props }) => (
    <Module name={config.name} {...props}>
        {panels.map(({title, content}, index) => (
            <Component name="panel" key={index}>
                <Component name="title" onClick={toggle}>
                    <Component name='toggle' /> {title}
                </Component>
                <Component name="content">{content}</Component>
            </Component>
        ))}
    </Module>
);

function toggle(event) {
    const panel = event.target.closest('[data-component="panel"]');

    panel.modifier('active', 'toggle');
}
```

> You could move the toggle interaction (and any other module interactions) into a [separate `accordion.js` file](Module-Interactions#import-existing-interaction-method)

### Accordion Configuration (`accordion.json`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) about module configuration

> This is where cosmetic (and hence configurable) styles are applied to the module and its components

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
```

###### With Custom Options

```scss
@import '/modules/accordion/accordion';

@include accordion((
    'panel': (
        'vertical-rhythm': 2em
    ),
    'title': (
        'background': #06d2ff,
        'color': white
    )
));
```

### Initialise Using Plain HTML/JavaScript (`app.js`)

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
```

### Or Render Using React (`app.jsx`)

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

## Creating a Theme

Using Synergy, you can create themes and control your entire project's UI from a single JSON file by passing custom options and parameters to your modules.

> [Learn more](https://github.com/esr360/Synergy/wiki/Creating-a-Theme) about creating themes


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