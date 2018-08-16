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
            <td><a href="#query"><code>query</code></a></td>
            <td><code>*</code></td>
            <td>The query to retrieve/pass DOM elements - this is the only required parameter</td>
        </tr>
        <tr>
            <td><a href="#callback"><code>[callback]</code></a></td>
            <td><code>Function</code></td>
            <td>Function to call on each element returned from <code>query</code></td>
        </tr>
        <tr>
            <td><a href="#defaults"><code>[defaults]</code></a></td>
            <td><code>Object</code></td>
            <td>Default confguration (will be merged with <code>custom</code> and passed to <code>callback</code>)</td>
        </tr>
        <tr>
            <td><a href="#custom"><code>[custom]</code></a></td>
            <td><code>Object</code></td>
            <td>Custom configuration (will be merged with <code>custom</code> and passed to <code>callback</code>)</td>
        </tr>
        <tr>
            <td><a href="#parser"><code>[parser]</code></a></td>
            <td><code>Function</code></td>
            <td>Function to call on the merged <code>default</code> + <code>custom</code> object</td>
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

If you wanted to achieve the following result:


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
}, options, someOtherConfigObject, parser); 
```

## API

* [.add()](#TODO)
* [.addModifier()](#TODO)
* [.component()](#TODO)
* [.find()](#TODO)
* [.getChildComponent()](#TODO)
* [.getChildComponents()](#TODO)
* [.getModifiers()](#TODO)
* [.has()](#TODO)
* [.hasModifier()](#TODO)
* [.is()](#TODO)
* [.isComponent()](#TODO)
* [.modifier()](#TODO)
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

> Add a modifer to an element (shorthand for [addModifier](#TODO))

```js
Synergy(query).add(modifier);
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
            <td><code>modifier</code></td>
            <td><code>(String|Array)</code></td>
            <td>The modifier(s) to add to elements returned from <code>query</code></td>
        </tr>
    </tbody>
</table>

##### Example With Single Modifier

```html
<div class="button" id="alpha">Button</div>
```

```js
Synergy('#alpha').add('active');
```

###### Result

```html
<div class="button-active" id="alpha">Button</div>
```

##### Example With Multiple Modifiers

```html
<div class="button" id="alpha">Button</div>
```

```js
Synergy('#alpha').add(['disabled', 'error']);
```

###### Result

```html
<div class="button-disabled-error" id="alpha">Button</div>
```

### .addModifier()

> Add a modifer to an element

```js
Synergy(query).addModifier(modifier);
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
            <td><code>modifier</code></td>
            <td><code>(String|Array)</code></td>
            <td>The modifier(s) to add to elements returned from <code>query</code></td>
        </tr>
    </tbody>
</table>

##### Example With Single Modifier

```html
<div class="button" id="alpha">Button</div>
```

```js
Synergy('#alpha').addModifier('active');
```

###### Result

```html
<div class="button-active" id="alpha">Button</div>
```

##### Example With Multiple Modifiers

```html
<div class="button" id="alpha">Button</div>
```

```js
Synergy('#alpha').addModifier(['disabled', 'error']);
```

###### Result

```html
<div class="button-disabled-error" id="alpha">Button</div>
```

### .component()

> Various Synergy Component operations

```js
Synergy(query).component(component, operator);
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
            <td><code>component</code></td>
            <td><code>String</code></td>
            <td>The component of interest</td>
        </tr>
        <tr>
            <td><code>[operator]</code></td>
            <td><code>(('find'|'is'|'set'|'unset')|Function)</code></td>
            <td>Depending on what's passed, this will either be a keyword mapping to an operation, or a callback function</td>
        </tr>
    </tbody>
</table>

If `operator` is not passed, the operator will be determined dynamically based on context:

* The operator will initially be `find` to attempt to find any child components matching the `component` parameter
* Failing that, if `query` is a single HTML Element, the operator will act as `is` to determine if the element is a component matching the `component` parameter
* Otherwise, the method will return `false`

If neither `component` nor `operator` are passed, the method will attempt to find all child components of elements returned by `query`.

##### Example Without Passing Parameters

```html
<div class="card" id="alpha">
    <div class="card_title">...</div>
    <div class="card_content">...</div>
</div>

<div class="card" id="beta">
    <div class="card_title">...</div>
    <div class="card_content">...</div>
</div>
```

```js
Synergy('card').component();

// Returns:
NodeList(4) [div.card_title, div.card_content, div.card_title, div.card_content]
```

```js
Synergy('card').component('title');

// Returns:
NodeList(2) [div.card_title, div.card_title]
```

```js
Synergy('#alpha').component('title');

// Returns:
NodeList(1) [div.card_title]
```

```js
Synergy('card').component('fizz');

// Returns:
false
```

```js
Synergy(document.querySelector('#alpha .card_title')).component('fizz');

// Returns:
false
```

```js
Synergy(document.querySelector('#alpha .card_title')).component('title');

// Returns:
true
```

##### Example With `set` Operator

> It's unlikely you would ever need to set/unset an element as a Synergy Component

```js
Synergy('card').component('body', 'set');
```

###### Result

```html
<div class="card_body">
    <div class="card_title">...</div>
    <div class="card_content">...</div>
</div>
```

> You could undo this with `Synergy(document.querySelector('.card_body')).component('body', 'unset');`

##### Example With `find` Operator

> If you are trying to find a child component of an element, it's unlikely you would need to explicitly pass this operator as it is initially assumed

```js
Synergy('#alpha').component('title', 'find');

//Returns:
NodeList(1) [div.card_title]
```

##### Example With Callback Function

> Function will be called on each child Component that matches the `component` parameter

```js
Synergy('#alpha').component('title', function(title) {
    Synergy(title).addModifier('active');
});
```

###### Result

```html
<div class="card" id="alpha">
    <div class="card_title-active">...</div>
    <div class="card_content">...</div>
</div>
```

### .find()

> Find a DOM element

```js
Synergy(query).find($);
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
            <td><code>$</code></td>
            <td><code>(Object|String)</code></td>
            <td>TODO</td>
        </tr>
    </tbody>
</table>

###### $ as Object

```js
Synergy(query).find({ module, component, modifier });
```

###### $ as String

```js
Synergy(query).find(module|component);
```

##### Example With $ as Object

```html
<div id="alpha">
    <div class="card" id="beta">
        <div class="card_title" id="gamma">...</div>
        <div class="card_content" id="delta">...</div>
        <div class="button card_button-primary" id="epsilon">...</div>
        <div class="button card_button-secondary" id="zeta">...</div>
    </div>
    <div class="button" id="eta">...</div>
</div>
```

```js
Synergy('#alpha').find({
    module: 'card',
    component: 'button',
    modifier: 'primary'
});

// Returns `#epsilon` HTMLElement
```

```js
Synergy('#beta').find({
    component: 'button',
    modifier: 'secondary'
});

// Returns `#zeta` HTMLElement
```

```js
Synergy('#beta').find({
    component: 'button'
});

// Returns `#epsilon, #zeta` NodeList
```

```js
Synergy('#beta').find({
    component: 'title'
});

// Returns `#gamma` HTMLElement
```

```js
Synergy('#alpha').find({
    module: 'card',
    component: 'title'
});

// Returns `#gamma` HTMLElement
```

```js
Synergy('#alpha').find({
    module: 'button'
});

// Returns `#epsilon, #zeta, #eta` NodeList
```

##### Example With $ as String

```html
<div id="alpha">
    <div class="card" id="beta">
        <div class="card_title" id="gamma">...</div>
        <div class="card_content" id="delta">...</div>
        <div class="button card_button-primary" id="epsilon">...</div>
        <div class="button card_button-secondary" id="zeta">...</div>
    </div>
    <div class="button" id="eta">...</div>
</div>
```

```js
Synergy('#alpha').find('button');

// Returns `#epsilon. #zeta, #eta` NodeList
```

```js
Synergy('#beta').find('button');

// Returns `#epsilon, #zeta` NodeList
```

```js
Synergy('#beta').find('title');

// Returns `#gamma` HTMLElement
```

### .getChildComponent()

> Get a child component of a DOM element

```js
Synergy(query).getChildComponent(component);
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
            <td><code>component</code></td>
            <td><code>String</code></td>
            <td>TODO</td>
        </tr>
    </tbody>
</table>

### .getChildComponents()

> Get all child components of a DOM element

```js
Synergy(query).getChildComponents(component);
```

### .getModifiers()

> Get the modifiers assigned to a DOM element

```js
Synergy(query).getModifiers();
```

### .has()

> Determine if a DOM element has a specified modifier (shorthand for [hasModifier](#TODO))

```js
Synergy(query).has(modifier);
```

### .hasModifier()

> Determine if a DOM element has a specified modifier 

```js
Synergy(query).hasModifier(modifier);
```

### .is()

> Determine if a DOM element is a specified module/component/modifier

```js
Synergy(query).is({ module, component, modifier });
```

```js
Synergy(query).is(module|component|modifier);
```

### .isComponent()

> Determine if a DOM element is a specified component

```js
Synergy(query).isComponent(component);
```

### .modifier()

> Various Synergy operations surrounding Modifiers

```js
Synergy(query).modifier(modifier);
```

### .parent()

> Get parent module/component of a DOM element

```js
Synergy(query).parent(module|component);
```

```js
Synergy(query).parent('module'|'component');
```

### .parentComponent()

> Get a DOM element's parent component

```js
Synergy(query).parentComponent(component);
```

### .remove()

> Remove a modifier from a DOM element (shorthand for [removeModifier](#TODO))

```js
Synergy(query).remove(modifier);
```

### .removeModifier()

> Remove a modifier from a DOM element 

```js
Synergy(query).removeModifier(modifier);
```

### .set()

> Set DOM element as a specified module/component/modifier

```js
Synergy(query).set({ module, component, modifier });
```

```js
Synergy(query).set(module|component|modifier);
```

### .setComponent()

> Set DOM element as a specified component

```js
Synergy(query).setComponent(component);
```

### .unset()

> Unet DOM element as a specified module/component/modifier

```js
Synergy(query).unset(module|component|modifier);
```

### .unsetComponent()

> Unset DOM element as a specified component

```js
Synergy(query).unsetComponent(component);
```

### .query()

> Return the DOM elements found by the [`query` parameter](#query)

```js
Synergy(query).query;
```

###

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