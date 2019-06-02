[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.com/One-Nexus/Synergy.svg)](https://travis-ci.com/One-Nexus/Synergy)
[![npm version](https://badge.fury.io/js/%40onenexus%2Fsynergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)
[![npm version](https://img.shields.io/npm/dm/@onenexus/synergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)

<img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />

> Synergy is a framework for building modular, configurable and scalable UI components for React-DOM projects

###### Features

* Style elements using either [Sass](https://github.com/One-Nexus/Synergy/wiki/Using-Sass-With-Synergy) or [JavaScript](https://github.com/One-Nexus/Synergy/wiki/Styling-Modules#styling-a-module-with-javascript) ([learn more](https://github.com/One-Nexus/Synergy/wiki/Styling-Modules))
* Make cosmetic UI updates to your app without modifying source code ([learn more](https://github.com/One-Nexus/Synergy/wiki/Module-Configuration#apply-cosmetic-css-via-configuration))
* Easily configure modules and create themes for your app ([learn more](https://github.com/One-Nexus/Synergy/wiki/Themes))
* Add UI interactions without requiring class components, hooks or state ([learn more](https://github.com/One-Nexus/Synergy/wiki/Interactions))
* Everything you need to create component libraries/UI styleguides

###### Useful Wiki Pages

* [Installation & Setup](https://github.com/One-Nexus/Synergy/wiki/Installation)
* [Modules, Components & Modifiers](https://github.com/One-Nexus/Synergy/wiki/Modules,-Components-and-Modifiers)
* [Creating a Synergy Module](https://github.com/One-Nexus/Synergy/wiki/Creating-a-Module)
* [Module Configuration](https://github.com/One-Nexus/Synergy/wiki/Module-Configuration)
* [Themes](https://github.com/One-Nexus/Synergy/wiki/Themes)

###### Boilerplates

<table width="100%">
    <tr>
        <td>
            <a href="https://github.com/One-Nexus/Synergy-Boilerplate">
                Synergy Boilerplate (Javascript Styles)
            </a>
        </td>
        <td>
            <a href="https://github.com/One-Nexus/Synergy-Boilerplate-Sass">
                Synergy Boilerplate (Sass Styles)
            </a>
        </td>
    </tr>
</table>

## 60 Second Accordion From Scratch

```
npm install --save react react-dom @onenexus/synergy;
```

###### accordion.jsx

```jsx
import React from 'react';
import '@onenexus/synergy';

const styles = () => ({
    panel: {
        'modifier(active)': {
            title: {
                'background': '#00FFB2',
                'color': '#FFFFFF'
            }
        }
    },

    title: {
        'background': '#1E90FF',
        'color': '#005A9C',
        'padding': '1em',
        ':hover': {
            'background': '#01BFFF',
            'color': '#FFFFFF'
        }
    },

    content: content => ({
        'padding': '1em',
        'color': '#444444',
        'display': content.parent('panel').is('active') ? 'block' : 'none',
    })
});

const interactions = {
    toggle: event => event.target.parent('panel').toggleModifier('active');
}

const Accordion = ({ panels }) => (
    <Module name='accordion' styles={styles}>
        {panels.map(({ title, content }) => (
            <Component name='panel'>
                <Component name='title' onClick={interactions.toggle}>
                    {title}
                </Component>

                <Component name='content'>{content}</Component>
            </Component>
        ))}
    </Module>
);

export default Accordion;
```

###### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion.jsx';

const data = [
    {
        title: 'accordion title 1',
        content: 'lorem ipsum'
    },
    {
        title: 'accordion title 2',
        content: <p>foo bar</p>
    }
];

const Screen = () => (
    <Accordion panels={data} />
);

ReactDOM.render(<Screen />, document.getElementById('app'));
```

> This example is short and concise for demo purposes; for a more complete example utilising more features see the [Module Example](https://github.com/One-Nexus/Synergy/wiki/Creating-a-Module) page

## Overview

A Synergy module is essentially a UI component that's been broken up into the following areas of concern:

* Configuration
* Styles
* Interactions
* Interface

These are the main concerns of a UI module; Synergy allows you to work on each concern independently before bringing them together to form a Synergy module.

<p align="center"><img src="http://www.onenexus.io/synergy/module-illustration.png?v=1" width="600px" /></p>

> Synergy is ideal for creating presentational React components when using the [Container Component Pattern](https://reactpatterns.com/#container-component) ([learn more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))

For more information see the [About Synergy](https://github.com/One-Nexus/Synergy/wiki/About-Synergy) page.

---

<a href="https://twitter.com/ESR360">
    <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="250px" />
</a>
<a href="https://github.com/ESR360">
    <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="250px" />
</a>