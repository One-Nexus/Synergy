[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/esr360/Synergy/blob/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Synergy.svg)](https://travis-ci.org/esr360/Synergy)
[![npm version](https://badge.fury.io/js/Synergy.svg)](https://badge.fury.io/js/Synergy)
[![npm version](https://img.shields.io/npm/dm/synergy.svg)](https://badge.fury.io/js/Synergy)

<img height="56px" src="http://www.onenexus.io/synergy/github-logo.png" />

> Synergy is a front-end framework for building modular, configurable and scalable UI components for React apps

###### Features

* Style elements using either [Sass](#TODO) or [JavaScript](#TODO) ([learn more](#TODO))
* Make UI updates to your app without modifying source code ([learn more](#TODO))
* Easily configure modules and create themes for your app ([learn more](#TODO))
* Add UI interactions without requiring class components or hooks ([learn more](#TODO))
* Everything you need to create component libraries/UI styleguides ([learn more](#TODO))

###### Useful Wiki Pages

* [Installation & Setup](#TODO)
* [Modules, Components & Modifiers](#TODO)
* [Creating a Synergy Module](#TODO)
* [Module Configuration](#TODO)
* [Themes](#TODO)

## 60 Second Accordion From Scratch

```
npm install --save react @onenexus/synergy;
```

###### accordion.jsx

```jsx
import React from 'react';
import '@onenexus/synergy';

const styles = () => ({
    title: {
        'background': 'DodgerBlue',
        'padding': '1em',
        'color': '#444444',
        ':hover': {
            'background': 'DeepSkyBlue',
            'color': 'white'
        },
        'active': {
            'background': 'LightSeaGreen',
            'color': 'white'
        }
    },

    content: content => ({
        'padding': '1em',
        'color': '#444444',
        'display': content.parent('panel').modifier('active') ? 'block' : 'none',
    })
});

const interactions = {
    toggle: event => event.target.parent('panel').modifier('active', 'toggle');
}

const Accordion = ({ panels }) => (
    <Module name='accordion' styles={styles}>
        {panels.map(({ title, content }, index) => (
            <Component name='panel' key={index}>
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
todo
```

> This example is short and concise for demo purposes; for a more complete example utilising more features see the [Module Example](#TODO) page

## Overview

A Synergy module is essentially a UI component that's been broken up into the following areas of concern:

* Configuration
* Styles
* Interactions
* Interface

These are the main concerns of a UI module; Synergy allows you to work on each concern independently before bringing them together to form a Synergy module.

<p align="center"><img src="http://www.onenexus.io/synergy/module-illustration.png?v=1" width="600px" /></p>

> Synergy is ideal for creating presentational React components when using the [Container Component Pattern](https://reactpatterns.com/#container-component) ([learn more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))

For more information see the [About Synergy](#TODO) page.

###### Useful Reading

* [TODO](#TODO)