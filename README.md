[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

<img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />

> A front-end framework for creating modular, configurable and scalable UI components

###### Key Features

* Independent APIs for vanilla JavaScript, React and Sass
* Ability to style modules with JavaScript
* Ability to create themes

### Useful Wiki Pages

* [Why Use Synergy](https://github.com/esr360/Synergy/wiki/Why-Use-Synergy)
* [Installation](https://github.com/esr360/Synergy/wiki/Installation)
* [JavaScript](https://github.com/esr360/Synergy/wiki/JavaScript)
* [React](https://github.com/esr360/Synergy/wiki/Using-With-React)
* [Styled Modules (with JavaScript)](#TODO)
* [Sass](https://github.com/esr360/Synergy/wiki/Sass)
* [Creating Themes](https://github.com/esr360/Synergy/wiki/Creating-a-Theme)

## Overview

<table>
    <tr>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/Sass">
                <img style="vertical-align: middle;" src="http://www.onenexus.io/synergy/github-sass-logo.png?v=1" />
            </a>
        </td>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/JavaScript">
                <img src="http://www.onenexus.io/synergy/github-javascript-logo.png?v=1" />
            </a>
        </td>
        <td>
            <a href="https://github.com/esr360/Synergy/wiki/Using-With-React">
                <img src="http://www.onenexus.io/synergy/github-react-logo.png?v=1" />
            </a>
        </td>
    </tr>
</table>

Synergy provides powerful APIs to help you create configurable modules in `Sass`, `JavaScript` and/or `React`:

* [Use Synergy to create Sass components](https://github.com/esr360/Synergy/wiki/Sass)
* [Use Synergy to create JavaScript components](https://github.com/esr360/Synergy/wiki/JavaScript)
* [Use Synergy to create React components](https://github.com/esr360/Synergy/wiki/Using-With-React)

> Synergy is ideal for creating presentational React components when using the [Container Component Pattern](https://reactpatterns.com/#container-component) ([learn more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))

Synergy also povides tools allowing you to combine the above aspects together to create a `Synergy Module`.

* [Module Configuration](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) (`.js`|`.json`)
* [Module Styles/Layout](#TODO) (`.jss`|`.scss`)
* [Module Interactions](https://github.com/esr360/Synergy/wiki/Module-Interactions) (`.js`)
* [Module Interface](https://github.com/esr360/Synergy/wiki/Using-With-React) (`.jsx`)

These are the core concepts of a UI module.

<p align="center"><img src="http://www.onenexus.io/synergy/module-illustration.png?v=1" width="600px" /></p>

###### Example Module Structure

```
|-- modules
|   |-- accordion
|   |   |-- assets
|   |   |   |-- config.js
|   |   |   |-- interactions.js
|   |   |   |-- layout.jss
|   |   |-- interface.jsx
```

> Synergy modules can be configured and scaled without having to touch the module's source code

A Synergy module is composed of `Components`. Both `Modules` and `Components` can have `Modifiers`.

* [Learn more about Modules](https://github.com/esr360/Synergy/wiki/What-Is-a-Module)
* [Learn more about Components](https://github.com/esr360/Synergy/wiki/What-Is-a-Component)
* [Learn more about Modifiers](https://github.com/esr360/Synergy/wiki/What-Is-a-Modifier)

Using Synergy, you can create themes and control your entire project's UI from a single JS/JSON file by passing custom options and parameters to your modules.

> [Learn more](https://github.com/esr360/Synergy/wiki/Creating-a-Theme) about creating themes

## Example

> Using Synergy to create a basic `accordion` module - [Learn more](https://github.com/esr360/Synergy/wiki/Example-Uncovered) about this example

### Structure

```
|-- UI
|   |-- modules
|   |   |-- accordion
|   |   |   |-- assets
|   |   |   |   |-- config.js
|   |   |   |   |-- interactions.js
|   |   |   |   |-- layout.jss
|   |   |-- accordion.jsx
|   |-- app.js
```

### Accordion Interface (`accordion.jsx`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Module-Interactions#the-interaction-interface) about _module interfaces_

```jsx
import config from './assets/config.js';
import interactions from './assets/interactions.js';
import layout from './assets/layout.jss';

const Accordion = ({ panels, config, toggle, layout, ...props }) => (
    <Module name={config.name} styles={[layout, config]} {...props}>
        {panels.map(({ title, content, active }, index) => (
            <Component active={active} name='panel' key={index}>
                <Component name='title' onClick={toggle}>
                    <Component name='toggle' /> {title}
                </Component>

                <Component name='content'>{content}</Component>
            </Component>
        ))}
    </Module>
);

Object.assign(Accordion, interactions, {
    defaultProps: {
        config: config,
        toggle: interactions.toggle,
        layout: layout
    }
});

export default Accordion;
```

### Accordion Configuration (`./assets/config.js`)

> [Learn more](https://github.com/esr360/Synergy/wiki/Configuring-a-Module) about module configuration

```js
export default {
    'name': 'accordion',

    title: {
        'background': 'transparent',
        'color': 'grey',
        'border': '1px solid rgba(0,0,0, 0.2)',
        'border-radius': 0,
        'padding': '1em',
        'transition': '0.4s',

        ':hover': {
            'background': '#06D2FF',
            'color': 'white',

            toggle: {
                'color': 'white'
            }
        }
    },

    toggle: {
        'color': 'rgba(0,0,0, 0.4)',
        'transition': '0.4s'
    },

    content: {
        'background': 'white',
        'color': 'grey',
        'border': '1px solid rgba(0,0,0, 0.15)',
        'border-radius': 0,
        'padding': '1.5em'
    },

    panel: {
        'modifier(active)': {
            title: {
                'background': '#04CEC0',
                'color': 'white',
                'border-color': 'transparent',
                'border-radius': 0
            },
            toggle: {
                'color': 'white'
            }
        }
    }
};
```

### Layout Styles (`./assets/layout.jss`)

> [Learn more](#TODO) about module styles

```js
export default (element, config) => {
    return [config, {
        panel: {
            'display': 'block'
        },

        title: title => {
            const panel = title.closest('[data-component="panel"]');
            const panel = title.component('panel').closest();
            const panel = title.parentComponent('panel');

            return {
                'display': 'block',
                'margin': 0,
                'cursor': 'pointer',
                'border-bottom': (panel !== panel.parentNode.lastChild) && !panel.style.marginBottom ? 0 : false
            }
        },

        toggle: toggle => {
            const panel = toggle.closest('[data-component="panel"]');

            return {
                'float': 'right',
                'transform': panel.modifier('active') ? 'rotate(90deg) translateZ(0)' : 'none'
            }
        },

        content: content => {
            const panel = content.closest('[data-component="panel"]');

            return {
                'display': panel.modifier('active') ? 'block' : 'none',
                'margin': 0,
                'margin-top': '-1px',
                'border-bottom': (panel !== panel.parentNode.lastChild) && !panel.style.marginBottom ? 0 : false
            }
        }
    }]
};
```

### Render Using React (`app.jsx`)

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

### Version 3.10.3

Released: 1st July 2018

###### Release Notes

* Updating to node-sass `4.9.0`
* Fixing regression bugs as a result of node-sass update

### Version 3.10.2

Released: 25th June 2018

###### Release Notes

* Bug fixes

### Version 3.10.1

Released: 25th June 2018

###### Release Notes

* Bug fixes

### Version 3.10.0

Released: 20th June 2018

###### Release Notes

* Added callback functions to `component` and `modifier` DOM methods
* Allowing `<Component>`'s to accept event handlers as props
* Allow passing of custom HTML tag to `<Module>`
* Set module modifiers by passing as empty prop
* Adding `<Wrapper>` and `<Group>` components
* Specify list of CSS classes to add via empty prop
* Allow passing of CSS through Sass map istead of through `@content`
* Adding `sub-component` Sass mixin
* Adding `pseudo-state` Sass mixin
* Adding `Synergize` class (extends `React.Component`)
* Dynamically fetch `<Component>` onClick event from window.Synergy object
* Option to render content by passing as `content` prop
* Set `<Module>` as another module by passing module name as prop
* Dynamically set `tag` prop on module if `name` prop is valid HTML tag
* Get HTML attributes from props
* Components now render with a `data-component` attribute
* Allow passing of data-attributes to module
* Append content before/after module through `before` and `after` props
* Removing Bower
* General refactoring, syntax improvements and bug fixes