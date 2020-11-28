[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/One-Nexus/Synergy/blob/master/LICENSE)
[![Build status](https://api.travis-ci.com/One-Nexus/Synergy.svg)](https://travis-ci.com/One-Nexus/Synergy)
[![npm version](https://badge.fury.io/js/%40onenexus%2Fsynergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)
[![npm downloads](https://img.shields.io/npm/dm/@onenexus/synergy.svg)](https://www.npmjs.com/package/@onenexus/synergy)

<img src="https://edmundreed.com/projects/synergy/banner.png" />

> Synergy is a framework for building modular, configurable and scalable UI components for React-DOM projects

###### Features

* Style Modules using either [Sass](https://github.com/One-Nexus/Synergy/wiki/Using-Sass-With-Synergy) or [JavaScript](https://github.com/One-Nexus/Synergy/wiki/Styling-Modules#styling-a-module-with-javascript)
* Make cosmetic UI updates to your app without modifying source code ([learn more](https://github.com/One-Nexus/Lucid/wiki/Config#retreiving-cosmetic-styles-from-config))
* Easily [configure modules](https://github.com/One-Nexus/Synergy/wiki/Module-Configuration) and create [themes](https://github.com/One-Nexus/Synergy/wiki/Themes) for your app
* Ideal for creating presentational React components
* ...for use with Component Libraries/UI Styleguides/Design Systems

###### Useful Wiki Pages

* [Installation & Setup](https://github.com/One-Nexus/Synergy/wiki/Installation)
* [Intro: Modules, Components & Modifiers](https://github.com/One-Nexus/Synergy/wiki/Modules,-Components-and-Modifiers)
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

> [View a live demo of this example in CodeSandbox](https://codesandbox.io/s/synergy-demo-t5qkd)

###### accordion.jsx

```jsx
import React, { useState } from 'react';
import { Module, Component } from '@onenexus/synergy';

const styles = {
  fontFamily: 'sans-serif',

  heading: ({ context }) => ({
    backgroundColor: '#1E90FF',
    color: 'white',
    padding: '1em',
    cursor: 'pointer',
    
    ...(context.panel.open && {
      backgroundColor: '#00FFB2'
    }),

    ':hover': {
      backgroundColor: '#01BFFF'
    }
  }),

  content: ({ context }) => ({
    padding: '1em',
    color: '#444444',
    display: context.panel.open ? 'block' : 'none'
  })
}

const Accordion = ({ panels, ...props }) => {
  const [current, toggle] = useState(0);

  return (
    <Module name='Accordion' styles={styles} { ...props }>
      {panels.map(({ heading, content }, i) => (
        <Component name='panel' open={i === current}>
          <Component name='heading' onClick={() => toggle(i === current ? -1 : i)}>
            {heading}
          </Component>
          <Component name='content' content={content} />
        </Component>
      ))}
    </Module>
  );
}

export default Accordion;
```

###### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion.jsx';

const data = [
  {
    heading: 'accordion heading 1',
    content: 'lorem ipsum'
  },
  {
    heading: 'accordion heading 2',
    content: <p>foo bar</p>
  }
];

const Screen = () => (
  <Accordion panels={data} />
);

ReactDOM.render(<Screen />, document.getElementById('app'));
```

> This example is short and concise for demo purposes; for a more complete example utilising more features see the [Creating a Module](https://github.com/One-Nexus/Synergy/wiki/Creating-a-Module) page

---

<a href="https://github.com/ESR360">
  <img src="http://edmundreed.com/assets/images/github.gif?v=1" width="230px" />
</a>
<a href="https://twitter.com/ESR360">
  <img src="http://edmundreed.com/assets/images/twitter.gif?v=1" width="230px" />
</a>
<a href="https://www.instagram.com/edmund_reed/">
  <img src="http://edmundreed.com/assets/images/insta.png" width="230px" />
</a>