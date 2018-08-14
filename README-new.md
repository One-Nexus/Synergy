<img height="56px" src="http://www.onenexus.io/synergy/github-javascript-logo.png" />

* [Overview](overview)
* [Synergy()](#synergy-query)
* [API](#api)

## Overview

The `Synergy()` function and its methods are used for interacting with DOM elements that follow the [Synergy naming convention](#TODO).

> [Learn how to integrate with React Synergy modules](#TODO)

## Synergy()

```js
Synergy(query, callback, defaults, custom, parser);
```

<table class="table">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Info</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>query</code></td>
            <td><code>*</code></td>
            <td>The query to retrieve/pass DOM elements - this is the only required parameter (<a href="#query">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[callback]</code></td>
            <td><code>Function</code></td>
            <td>Function to call on each element returned from <code>query</code> (<a href="#callback">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[defaults]</code></td>
            <td><code>Object</code></td>
            <td>Default confguration (will be merged with <code>custom</code> and passed to <code>callback</code> - <a href="#defaults">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[custom]</code></td>
            <td><code>Object</code></td>
            <td>Custom configuration (will be merged with <code>custom</code> and passed to <code>callback</code> - <a href="#custom">learn more</a>)</td>
        </tr>
        <tr>
            <td><code>[parser]</code></td>
            <td><code>Function</code></td>
            <td>Function to call on the merged <code>default</code> + <code>custom</code> object (<a href="#parser">learn more</a>)</td>
        </tr>
    </tbody>
</table>

### Query

This parameter should be used to determine which HTML Element(s) from the DOM you are interested in. Throughout the Synergy Wiki, what you enter as the value for this parameter will be referred to as a _Synergy Selector_.

A Synergy Selector can be one of the following:

* A string matching the name of a module - all elements that match the module name will be returned ([learn how an element's module name is determined](#TODO))
* A string representing a selector that will be passed to a `document.querySelectorAll` call
* An HTML Element - only this element will be returned
* A NodeList - all element nodes in the list will be returned
* An array where the first value will be the `query`
* An object which contains a `name` key to be treated as the module name - all elements that match the module name will be returned ([learn how an element's module name is determined](#TODO))

###### Examples

```html
<div class="foo" id="bar">...</div>
```

The below queries would all return the above HTML Element ([learn more about the `query` method](#TODO)):

```js
Synergy('foo').query;
Synergy('.foo').query;
Synergy(document.getElementById('bar')).query;
Synergy(document.querySelectorAll('.foo')).query;
Synergy(['foo']).query;
Synergy({name: 'foo'}).query;
```

###### Overriding Module Name

In the above example, the module name is `foo`. This means that `foo` will be used as the namespace for Synergy operations:

```js
Synergy('foo', function(element) {
    Synergy(element).addModifier('buzz');
});
```

Resulting in:

```html
<div class="foo foo-buzz" id="bar">...</div>
```

In order to achieve the following result:


```html
<div class="foo fizz-buzz" id="bar">...</div>
```

...you can override the module name like so:

* target the element by passing an array with the first value as the [Synergy Selector query](#query)
* choose a new module name by passing it as the second value in the array

```js
Synergy(['foo', 'fizz'], function(element) {
    Synergy(element).addModifier('buzz');
});
```

### Callback

This parameter should be used to pass a reference to a function that will be called upon each HTML element matched by the [`query` parameter](#query).

```js
callback(element, options)
```

<table class="table">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Info</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>element</code></td>
            <td><code>HTMLElement</code></td>
            <td>Each HTML Element returned from the <a href="#query"><code>query</code> parameter</a></td>
        </tr>
        <tr>
            <td><code>options</code></td>
            <td><code>Object</code></td>
            <td>Object containing deeply merged <a href="#defaults"><code>defaults</code></a> + <a href="#custom"><code>custom</code></a> objects</td>
        </tr>
    </tbody>
</table>

###### High-Level Example

```html
<div id="myModule">...</div>
```

```js
window.someOtherConfigObject = {
    someProperty: true;
}
```

```js
var defaults = {
    someProperty: false;
}

Synergy(document.getElementById('myModule'), function(element, options) {
    if (options.someProperty) {
        element.style.color = red;
    }
}, defaults, someOtherConfigObject);
```

### Defaults

This parameter should be used to pass any default configuration for your module - it will be merged with any custom values passed via the optional [`custom` parameter](#custom) and passed to the [`callback` parameter](#callback).

###### High-Level Example

```html
<div class="myModule">...</div>
<div class="myModule">...</div>
```

```js
var defaults = {
    someProperty = false;
}

function myModule(custom) {
    Synergy('myModule', function(element, options) {
        if (options.someProperty) {
            element.style.color = red;
        }
    }, defaults, custom); 
}
```

### Custom

This parameter should be used to pass any custom configuration for your module - it will be merged with any default values passed via the [`defaults` parameter](#defaults) and passed to the [`callback` parameter](#callback).

###### High-Level Example

```html
<div class="myModule">...</div>
<div class="myModule">...</div>
```

```js
var defaults = {
    someProperty = false;
}

function myModule(custom) {
    Synergy('myModule', function(element, options) {
        if (options.someProperty) {
            element.style.color = red;
        }
    }, defaults, custom); 
}
```

```js
myModule({
    someProperty: true
})
```

### Parser

This parameter should be used to pass a reference to a function that will be called upon the `options` object to create a new object that will be sent to the `callback` function.

###### High-Level Example

```js
// Make all strings in `options` uppercase
function parser(options) {
    for (var option in options) {
        if (typeof option === 'String') {
            options[option] = option.toUpperCase();
        }
    }

    return options;
}
```

```js
var options = {
    fizz: 'buzz';
}

Synergy('myModule', function(element, options) {
    console.log(options.fizz); // 'BUZZ'
}, options, {}, parser); 
```

## API

* [.add()](#TODO)
* [.addModifier()](#TODO)
* [.allModulesWithModifier()](#TODO)
* [.find()](#TODO)
* [.getChildComponent()](#TODO)
* [.getChildComponents()](#TODO)
* [.getModifiers()](#TODO)
* [.has()](#TODO)
* [.hasModifier()](#TODO)
* [.is()](#TODO)
* [.isComponent()](#TODO)
* [.parent()](#TODO)
* [.parentComponent()](#TODO)
* [.remove()](#TODO)
* [.removeModifier()](#TODO)
* [.set()](#TODO)
* [.setComponent()](#TODO)
* [.unset()](#TODO)
* [.unsetComponent()](#TODO)
* [.query()](#TODO)

### .add()

> Add a modifer to an element

```js
Synergy(query).add(modifier)
```

### .addModifier()

### .allModulesWithModifier()

### .find()

### .getChildComponent()

### .getChildComponents()

### .getModifiers()

### .has()

### .hasModifier()

### .is()

### .isComponent()

### .parent()

### .parentComponent()

### .remove()

### .removeModifier()

### .set()

### .setComponent()

### .unset()

### .unsetComponent()

### .query()

```js
Synergy(query).getModifiers
Synergy(query).hasModifier
Synergy(query).addModifier
Synergy(query).removeModifier
Synergy(query).allModulesWithModifier

Synergy(query).getChildComponent
Synergy(query).getChildComponents
Synergy(query).isComponent
Synergy(query).setComponent
Synergy(query).unsetComponent
Synergy(query).parentComponent
Synergy(query).allComponents

Synergy(query).find({ module, component, modifier });
Synergy(query).find( module | component | modifier );

Synergy(query).set({ module, component, modifier });
Synergy(query).set(component);

Synergy(query).unset({ module, component, modifier });
Synergy(query).unset(component);

Synergy(query).is({ module, component, modifier });
Synergy(query).is( module | component | modifier );

Synergy(query).has(modifier);

Synergy(query).parent({ module, component, modifier });
Synergy(query).parent(module | component);
Synergy(query).parent( 'module' | 'component' );

Synergy(query).add(modifier)

Synergy(query).remove(modifier)
```