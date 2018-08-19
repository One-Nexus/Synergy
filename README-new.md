<img height="56px" src="http://www.onenexus.io/synergy/github-javascript-logo.png" />

* [Overview](#overview)
* [Installation & Setup](#TODO)
* [Synergy()](#synergy-query)
* [API](#api)

## Overview

The `Synergy()` function and its methods are used for interacting with DOM elements that follow the [Synergy naming convention](#TODO).

> [Learn how to integrate with React Synergy modules](#TODO)

## Installation & Setup


## Synergy()

```jsx
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

```jsx
Synergy('foo').query;
Synergy('.foo').query;
Synergy(document.getElementById('bar')).query;
Synergy(document.querySelectorAll('.foo')).query;
Synergy(['foo']).query;
Synergy({name: 'foo'}).query;
```

###### Overriding Module Name

In the above example, the module name is `foo`. This means that `foo` will be used as the namespace for Synergy operations:

```jsx
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

```jsx
Synergy(['foo', 'fizz'], function(element) {
    Synergy(element).addModifier('buzz');
});
```

### Callback

This parameter should be used to pass a reference to a function that will be called upon each HTML element matched by the [`query` parameter](#query).

```jsx
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

```jsx
window.someOtherConfigObject = {
    someProperty: true;
}
```

```jsx
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

```jsx
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

```jsx
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

```jsx
myModule({
    someProperty: true
})
```

### Parser

This parameter should be used to pass a reference to a function that will be called upon the `options` object to create a new object that will be sent to the `callback` function.

###### High-Level Example

```jsx
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

```jsx
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

```jsx
Synergy(query).add(modifier);
```

### .addModifier()

> Add a modifer to an element

```jsx
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

```jsx
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

```jsx
Synergy('#alpha').addModifier(['disabled', 'error']);
```

###### Result

```html
<div class="button-disabled-error" id="alpha">Button</div>
```

### .component()

> Various Synergy Component operations

```jsx
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
            <td><code>(('find'|'is'|'set'|'unset')|Function([HTMLElement] element))</code></td>
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

```jsx
Synergy('card').component();

// Returns:
NodeList(4) [div.card_title, div.card_content, div.card_title, div.card_content]
```

```jsx
Synergy('card').component('title');

// Returns:
NodeList(2) [div.card_title, div.card_title]
```

```jsx
Synergy('#alpha').component('title');

// Returns:
NodeList(1) [div.card_title]
```

```jsx
Synergy('card').component('fizz');

// Returns:
false
```

```jsx
Synergy(document.querySelector('#alpha .card_title')).component('fizz');

// Returns:
false
```

```jsx
Synergy(document.querySelector('#alpha .card_title')).component('title');

// Returns:
true
```

##### Example With `set` Operator

> It's unlikely you would ever need to set/unset an element as a Synergy Component

```jsx
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

```jsx
Synergy('#alpha').component('title', 'find');

//Returns:
NodeList(1) [div.card_title]
```

##### Example With Callback Function

> Function will be called on each child Component that matches the `component` parameter

```jsx
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

```jsx
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
            <td>The element you are interesting in locating</td>
        </tr>
    </tbody>
</table>

###### $ as Object

```jsx
Synergy(query).find({ module, component, modifier });
```

###### $ as String

```jsx
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

```jsx
Synergy('#alpha').find({
    module: 'card',
    component: 'button',
    modifier: 'primary'
});

// Returns:
HTMLElement (<div class="button card_button-primary" id="epsilon">...</div>)
```

```jsx
Synergy('#beta').find({
    component: 'button',
    modifier: 'secondary'
});

// Returns:
HTMLElement (<div class="button card_button-secondary" id="zeta">...</div>)
```

```jsx
Synergy('#beta').find({
    component: 'button'
});

// Returns:
NodeList(2) [div#epsilon, div#zeta]
```

```jsx
Synergy('#beta').find({
    component: 'title'
});

// Returns:
HTMLElement (<div class="card_title" id="gamma">...</div>)
```

```jsx
Synergy('#alpha').find({
    module: 'card',
    component: 'title'
});

// Returns:
HTMLElement (<div class="card_title" id="gamma">...</div>)
```

```jsx
Synergy('#alpha').find({
    module: 'button'
});

// Returns:
NodeList(3) [div#epsilon, div#zeta, div#eta]
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

```jsx
Synergy('#alpha').find('button');

// Returns:
NodeList(3) [div#epsilon, div#zeta, div#eta]
```

```jsx
Synergy('#beta').find('button');

// Returns:
NodeList(2) [div#epsilon, div#zeta]
```

```jsx
Synergy('#beta').find('title');

// Returns
HTMLElement (<div class="card_title" id="gamma">...</div>)
```

### .getChildComponent()

> Get a child component of a DOM element

```jsx
Synergy(query).getChildComponent(component);
```

> Use this when you know the element only has a single occurance of the component - if the element potentially has multiple instances of the component, use the [`getChildComponents`](#getChildComponents) method

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
    </tbody>
</table>

##### Example

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="card_button-primary" id="epsilon">...</div>
    <div class="card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#beta').getChildComponent('title');

// Returns
HTMLElement (<div class="card_title" id="gamma">...</div>)
```

```jsx
Synergy('#beta').getChildComponent('button');

// Returns
HTMLElement (<div class="card_button-primary" id="epsilon">...</div>)
```

### .getChildComponents()

> Get all child components of a DOM element

```jsx
Synergy(query).getChildComponents(component);
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
    </tbody>
</table>

##### Example

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="card_button-primary" id="epsilon">...</div>
    <div class="card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#beta').getChildComponents('title');

// Returns:
NodeList(1) [div#gamma]
```

```jsx
Synergy('#beta').getChildComponents('button');

// Returns:
NodeList(2) [div#epsilon, div#zeta]
```

### .getModifiers()

> Get the modifiers assigned to a DOM element

```jsx
Synergy(query).getModifiers();
```

##### Example

```html
<button id="alpha" class="button-large-round-success">Button</button>
<button id="beta" class="button">Button</button>
```

```jsx
Synergy('#alpha').getModifiers();

// Returns:
Array ['large', 'round', 'success']
```

```jsx
Synergy('#beta').getModifiers();

// Returns:
Array []
```

### .has()

> Determine if a DOM element has a specified modifier (shorthand for [hasModifier](#hasModifier))

```jsx
Synergy(query).has(modifier);
```

### .hasModifier()

> Determine if a DOM element has a specified modifier 

```jsx
Synergy(query).hasModifier(modifier);
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
            <td><code>String</code></td>
            <td>The modifier of interest</td>
        </tr>
    </tbody>
</table>

##### Example

```html
<button id="alpha" class="button-large-round-success">Button</button>
```

```jsx
Synergy('#alpha').hasModifier('large');

// Returns:
true
```

```jsx
Synergy('#alpha').hasModifier('error');

// Returns:
false
```

### .is()

> Determine if a DOM element is a specified module/component/modifier

```jsx
Synergy(query).is($);
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
            <td>Determine whether any of the matched elements also match the passed query</td>
        </tr>
    </tbody>
</table>

###### $ as Object

```jsx
Synergy(query).is({ module, component, modifier });
```

###### $ as String

```jsx
Synergy(query).is(module|component|modifier);
```

##### Example With $ as Object

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="button card_button-primary" id="epsilon">...</div>
    <div class="button card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#epsilon').is({
    module: 'card',
    component: 'button',
    modifier: 'primary'
});

// Returns:
true
```

```jsx
Synergy('#epsilon').is({
    module: 'card'
});

// Returns:
true
```

```jsx
Synergy('#beta .button').is({
    module: 'card',
    component: 'button'
});

// Returns:
true
```

```jsx
Synergy('#beta .button').is({
    module: 'card',
    component: 'button',
    modifier: 'primary'
});

// Returns:
false
```

```jsx
Synergy('#beta').is({
    module: 'card'
});

// Returns:
true
```

```jsx
Synergy('#delta').is({
    component: 'content'
});

// Returns:
true
```

##### Example With $ as String

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="button card_button-primary" id="epsilon">...</div>
    <div class="button card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#epsilon').is('card');

// Returns:
true
```

```jsx
Synergy('#epsilon').is('button');

// Returns:
true
```

```jsx
Synergy('#epsilon').is('primary');

// Returns:
true
```

### .isComponent()

> Determine if a DOM element is a specified component

```jsx
Synergy(query).isComponent(component);
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
    </tbody>
</table>

##### Example

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="button card_button-primary" id="epsilon">...</div>
    <div class="button card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#gamma')isComponent('title');

// Returns:
true
```

```jsx
Synergy('#gamma')isComponent('card');

// Returns:
false
```

```jsx
Synergy('#beta .button')isComponent('button');

// Returns:
true
```

### .modifier()

> Various Synergy Modifier operations

```jsx
Synergy(query).modifier(modifier, operator);
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
            <td><code>String</code></td>
            <td>The modifier of interest</td>
        </tr>
        <tr>
            <td><code>[operator]</code></td>
            <td><code>(('find'|'is'|'set'|'unset')|Function([HTMLElement] element))</code></td>
            <td>Depending on what's passed, this will either be a keyword mapping to an operation, or a callback function</td>
        </tr>
    </tbody>
</table>

* If `operator` is not passed, it will be assumed to be `is`
* If neither `component` nor `operator` are passed, the method will return any modifiers of the matched elements

##### Example Without Passing Parameters

```html
<div class="card" id="beta">
    <div class="card_title" id="gamma">...</div>
    <div class="card_content" id="delta">...</div>
    <div class="button card_button-primary" id="epsilon">...</div>
    <div class="button card_button-secondary" id="zeta">...</div>
</div>
```

```jsx
Synergy('#epsilon').modifier();

// Returns:
Array ['primary']
```

```jsx
Synergy('#beta .button').modifier();

// Returns:
Array ['primary', 'secondary']
```

##### Example With `set` Operator

```html
<div id="alpha" class="button-primary">Button</div>
```

```jsx
Synergy('#alpha').modifier('success', 'set');
```

###### Result

```html
<div id="alpha" class="button-primary-success">Button</div>
```

##### Example With `find` Operator

```html
<ul class="shopCart" id='cart'>
    <li class="shopCart_item" id="alpha">...</li>
    <li class="shopCart_item-discount" id="beta">...</li>
    <li class="shopCart_item" id="gamma">...</li>
    <li class="shopCart_item" id="delta">...</li>
    <li class="shopCart_item-discount" id="epsilon">...</li>
</li>
```

```jsx
Synergy('#cart').modifier('discount', 'find');

// Returns
NodeList(2) [li#beta, li#epsilon]
```

##### Example With Callback Function

> Function will be called on each child element that matches the `modifier` parameter

```html
<ul class="shopCart" id='cart'>
    <li class="shopCart_item" id="alpha">...</li>
    <li class="shopCart_item-discount" id="beta">...</li>
    <li class="shopCart_item" id="gamma">...</li>
    <li class="shopCart_item" id="delta">...</li>
    <li class="shopCart_item-discount" id="epsilon">...</li>
</li>
```

```jsx
Synergy('#cart').modifier('discount', function(item) {
    Synergy('#cart').query.removeChild(item);
});
```

###### Result

```html
<ul class="shopCart" id='cart'>
    <li class="shopCart_item" id="alpha">...</li>
    <li class="shopCart_item" id="gamma">...</li>
    <li class="shopCart_item" id="delta">...</li>
</li>
```

### .parent()

> Get parent module/component of a DOM element

```jsx
Synergy(query).parent(module|component);
```

```jsx
Synergy(query).parent('module'|'component');
```

### .parentComponent()

> Get a DOM element's parent component

```jsx
Synergy(query).parentComponent(component);
```

### .remove()

> Remove a modifier from a DOM element (shorthand for [removeModifier](#TODO))

```jsx
Synergy(query).remove(modifier);
```

### .removeModifier()

> Remove a modifier from a DOM element 

```jsx
Synergy(query).removeModifier(modifier);
```

### .set()

> Set DOM element as a specified module/component/modifier

```jsx
Synergy(query).set({ module, component, modifier });
```

```jsx
Synergy(query).set(module|component|modifier);
```

### .setComponent()

> Set DOM element as a specified component

```jsx
Synergy(query).setComponent(component);
```

### .unset()

> Unet DOM element as a specified module/component/modifier

```jsx
Synergy(query).unset(module|component|modifier);
```

### .unsetComponent()

> Unset DOM element as a specified component

```jsx
Synergy(query).unsetComponent(component);
```

### .query()

> Return the DOM elements found by the [`query` parameter](#query)

```jsx
Synergy(query).query;
```