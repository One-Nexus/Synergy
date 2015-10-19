
[![Modular](https://raw.githubusercontent.com/esr360/Modular/gh-pages/logo-small.png "Modular Logo")](https://github.com/esr360/Modular)

> A library of Sass mixins for architecting modular, configurable and scalable CSS.

**New in Version 3:** Optional `modular.js` file - pass your Sass config to your JS - [learn more](#)

* [Overview](#overview)
* [Installation](#installation)
* [Advanced Documentation](#advanced-documentation)
* [Changelog](#changelog)

## Overview

Modular aims to take modular CSS architecting to the next level. Similar in principle to the popular [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) convention, Modular is based off the idea of having **modules**, **components** and **modifiers**. 

Have you ever found yourself using BEM and ending up with HTML like this?

```html
<div class="button button--large button--success">Large Success Button</div>
```

What if you could just do this:

```html
<div class="button-large-success">Large Success Button</div>
```

The benefits of using this HTML over conventional BEM syntax are self-apparent. However, you may be looking at that thinking of several reasons why it wouldn't work; what if I want to only use the "button" class on its own? What if I only want a large button, or only want a success button? Well, with Modular, all this is possible.

```scss
@include component(button) {
    // core button styles
    ...
    @include modifier(large) {
        // large button styles
        ...
    }
    @include modifier(success) {
        // success button styles
        ...
    }
}
```

The above code would allow for the use of all of the following:

```html
<div class="button">Button</div>
<div class="button-large">Large Button</div>
<div class="button-success">Success Button</div>
<div class="button-large-success">Large Success Button</div>
<div class="button-success-large">Success Large Button</div>
```

And, crazily enough, you could also use the original BEM syntax of:

```html
<div class="button button--large button--success">Large Success Button</div>
```

### But how?

I'm glad you asked. The answer is simple - [wildcard selectors](http://www.surfingsuccess.com/css/css-wildcard-css-attribute-selector.html). Under the hood, Modular has created a wildcard selector for the component and each modifier

*But aren't wildcard selectors bad for performance?*

Well, no. Perhaps this was true many years ago, but today, [any performance impact is negilable](http://www.telerik.com/blogs/css_tip_star_selector_not_that_bad) (and this article is 3 years old). [Further reading](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/). 

*Why bother using a mixin for this? Why not just write the wildcard selector?*

For starters, writing `[class*="component-"]` over and over again can become tedious. Secondly, for the core styles we also need them to be applied to the naked `.component` class, meaning we would now have to write:

```scss
.component,
[class*="component-"] {
	...
}
```

Which is exactly what the  `component()` mixin does. The reason `[class*="component"]` on its own isn't used is because this can cause undesired effects elsewhere in your styles. A very simple example would be if you wanted to use a `.buttons` class in the presence on a **button** component - `[class*="button"]` would target this class and apply the core button styles to it. Using `[class*="button-"]` is a fairly safe selector in a project we have control over, in terms of potential conflicts.

### Configuring a Module

Modular allows you to create configurable components with customizable settings. To configure a new module, create a mixin named after your module (ensure the name is unique) and pass an empty `$custom: ()` variable to it:

```scss
@mixin header($custom: ()) {
    ...	
}
```

The `$custom` variable passed to the mixin is what will serve any custom options when the module is included. For the default options, a new variable named after your module is used, in our example this is `$header`.

```scss
@mixin header($custom: ()) {

    $header: config((
        
        // Options
        top      : 50px,
        bg-color : black
        
    ), $custom);
    
    ...

}
```

> `config()` is a custom function which merges multi-dimensional maps - above it is being used to merge the default options with any custom options.

To allow any subsequent modules to access the current module's options, set the module's config variable (eg: `$header`) to `!global`:

```scss
@mixin header($custom: ()) {
    
    $header: config((
        
        // Options
        top      : 50px,
        bg-color : black
        
    ), $custom) !global;
    
    ...
        
}
```

The basis for your module is now ready. Next, the actual component itself:

```scss
@mixin header($custom: ()) {

    $header: config((
        
        // Options
        top  : 50px,
        bg-color : black
        
    ), $custom);
    
    @include component(header) {
        
        // Core Styles
        margin-top: option($header, top);
        background-color: option($header, bg-color);
        
    } // component(header)
        
} // @mixin header
```

To call an option, a custom function of `option` is used. The basic header can now be created with the following, familiar HTML:

```html
<div class="header">
    ...
</div>
```

Read the [Advanced Documentation](#module-configuration-1) section to find out how to use bool options, for something like:

```scss
@mixin header($custom: ()) {
    
    $header: config((
        
        // Options
        dark : false,
        side : false // left or right
        
    ), $custom);
    
    ...
        
}

@include header((
    dark : true,
    side : left	
))
```

### Accessing in JS

> Make sure to read the [complete section](#) on `modular.js` if you intend on using it - this is just an overview of what is possible.

you are now free to do something like the following, in some far away JavaScript file:

```js
// get a module's option value
console.log(module['header']['dark']); // returns true or false

// target your module in the DOM
$(_header).doSomething();
```

Using Modular's custom function, you can do something like:

```js
if (setting('header', 'dark')) {
    
    $(_header).addClass('is-dark');
    
}
```

Using this function, you can also apply scripts to your element like so:

```html
<div class="header-dark">
    ...
</div>
```

[Read more](#) about `modular.js`.

## Installation

##### With Bower

```html
bower install Modular
```

Or...

##### As Git Sub-Module

```html
git submodule add https://github.com/esr360/Modular.git
```

###### If using modular.js

```html
git submodule update --init --recursive
```

Now import the respective `_modular.scss` and optional `modular.js` files into your project as desired. 

> Ensure to import the files *before* you attempt to run any Modular code.

## Advanced Documentation

### Mixins

* [Component](#component)
* [Sub-Component](#sub-component)
* [Overwrite](#overwrite)
* [Overwrite-Sub](#overwrite-sub)
* [Modifier](#modifier)
* [Nested Modifier](#nested-modifier)
* [Extend Modifiers](#extended-modifiers)
* [Context](#context)
* [Setting](#module-configuration)
* [Option](#hybrid-options)

### Module Configuration

* [Bool Options](#bool-options)
* [Non-Bool Options](#non-bool-options)
* [Hybrid Options](#hybrid-options)
* [Including Your Module](#including-your-module)
* [Global Configuration](#global-configuration)
* [Setting Up A Project](#setting-up-a-project)

### modular.js

* [Getting Started](#bool-options)

#### Component

The `component()` mixin is what generates the selectors for your component/module. The mixin accepts 2 parameters:

* `$components` - the name of your component(s) [required]
* `$type` - this defines how the mixin generates the selectors for your component(s) [optional]

```scss
@include component(header) {
	...
}
```

`$components` is usually a single value but can also be a list, eg. `(header, footer)`, should you wish to apply styles to more than one main component. For such instances, an *alias* mixin of `components()` is available:

```scss
@include components((header, footer)) {
	...
}
```

`$type` can be one of three values: `flex` (default), `chain` and `static`. By default, `flex` is enabled for all componenets. To globally change the default type, change the `$type` variable at the top of **_modular.scss**.

##### Flex

```scss
@include component(header, flex) {
	...
}
```

This is the default value for a component; it creates wildcards for both `.component` and `[class*="component-"]`, allowing you to use both the naked component as well as modifiers. Whilst this is the most flexible option, it does mean the generated CSS is slightly greater, which is what the other 2 options are for.

Or if using the default `$type` value of `flex`, you do not need to pass a second parmeter here:

```scss
@include component(header) {
	...
}
```

##### Chain

```scss
@include component(header, chain) {
	...
}
```

The chain option should be used if you are looking to optimise your CSS output, and you know your component will not exist as a naked selector without modifiers. Ie - this option outputs only `[class*="component-"]`, thefore you cannot use `.component` to achieve any styles.

##### Static

```scss
@include component(header, static) {
	...
}
```

The static option creates only the naked selector for your component; ie - `.selector`, meaning no modifiers can be used. This option is only available for consistency; it probably makes more sense to just write `.component` instead of using the mixin in this case - I'll let you think about that one.

##### Advanced Example

```scss
@include components((header, footer), static) {
	// apply to both header and footer components
}

@include component(header, static) {
	// apply only to header
}

@include component(footer, static) {
	// apply only to footer
}
```

#### Sub-Component

Because of how the wildcard selectors are generated, it is not possible to create relating components which begin with the same namespace. For example, if you have a `header` component with the default `$type` of `flex`, it would not be possible to create a `header-wrapper` class, as the *hyphen* is reserved for component modifiers. There are several options to get around this, including:

* camelCase (headerWrapper)
* reversed wording (wrap-header)
* underscore (header_wrapper)

To keep as similar to BEM as possible, Modular provies an easy way to create relating components using underscores, eg - `header_wrapper`. The `sub-component` mixin accepts 2 parameters:

* `$sub-components` - the name of your sub-component(s) [optional]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]

```scss
@include component(header) {
	
	@include sub-component(wrapper) {
		...	
	}	
	
}
```

```html
<div class="header_wrapper">...</div>
```

Sub-Components work like regular components, so you can add modifiers:

```scss
@include component(header) {
	
	@include sub-component(wrapper) {
		@include modifier(full-screen) {
			...
		}
	}
		
}
```

```html
<div class="header_wrapper-full-screen">...</div>
```

##### Alias Mixin For Multiple Components

```scss
@include component(footer) {
	
	@include sub-components((nav, copyright)) {
		...	
	}	
	
}
```

##### Global Sub-Component Styles

By not passing a parameter to the `sub-component()` mixin, you can apply styles to all sub-components of the parent component:

```scss
@include component(widget) {

	@include sub-component {
		@include modifier(inline) {
			...
		}	
	}
	
	@include sub-component(icon) {
		...
	}
	
	@include sub-component(header) {
		...
	}
	
}
```

```html
<div class="widget">
	<div class="widget_icon-inline">...</div>
	<div class="widget_header-inline">...</div>
</div>
```

##### Advanced Example

```scss
@include component(footer) {
	
	...
	
	@include sub-component(wrapper, static) {
		...	
	}
	
	@include sub-components((nav, copyright), static) {
		display: inline-block;
	}
	
}
```

```html
<footer class="footer">
	<div class="footer_wrapper">
		<div class="footer_nav">
			...
		</div>
		<div class="footer_copyright">
			...
		</div>
	</div>
</footer>
```

#### Overwrite

This mixin allows you to overwrite the styles of existing components and modifiers when in context of another component. The `overwrite()` mixin accepts 2 parameters:

* `$components` - the name of the component(s) you wish to overwrite [required]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]
* `$special` - set a special operator [optonal]

```scss
@include components((logo, nav)) {
	color: black;	
}

@include component(logo) {
	font-size: 1em;	
}

@include component(header) {
	
	@include overwrite((logo, nav)) {
		color: white;
	}

	@include overwrite(logo) {
		font-sie: 1.5em;
	}
	
}
```

```html
<div>
	<div class="logo">
		I'm black and 1em
	</div>
	<div class="nav">
		I'm black
	</div>
</div>
<div class="header">
	<div class="logo">
		Now I'm white and 1.5em
	</div>
	<div class="nav">
		Now I'm white
	</div>
</div>	
```

##### Special Operators

* `adjacent-sibling` - overwrite a component when it is also an adjacent sibling
* _more comming soon..._

###### Adjacent Sibling

```scss
@include component(logo) {
	color: red;
}
	
@include component(navigation) {

	@include overwrite(logo, $special: adjacent-sibling) {
		color: blue;
	}
	
}
```

```html
<div class="navigation">...</div>
<div class="logo">I'm blue!</div>

<div class="logo">I'm red!</div>
<div class="navigation">...</div>
```

#### Overwrite-Sub

As above, this mixin is used for overwriting styles for an existing sub-component in alternative context. 4 parameters are accepted for the `overwrite-sub()` mixin:

* `$sub-components` - the name of the component(s) you wish to overwrite [required]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]
* `$parent` - the parent of your sub-component [optional]
* `$special` - set a special operator [optonal]

> The `$parent` parameter is used if you are including this mixin inside a different component to your sub-component's parent.

```scss
@include component(form) {

	@include sub-component(input) {
		...
	}

	@include modifier(html5) {
		@include overwrite-sub(input) {
			...
		}
	}
}
```

```html
<div class="form-html5">
	<input class="form_input" type="text" />
</div>	
```

##### Alias Mixin For Multiple Components

```scss
@include component(form) {

	@include sub-component(input) {
		...
	}
	
	@include sub-component(group) {
		...
	}

	@include modifier(html5) {
		@include overwrite-subs((input, group)) {
			...
		}
	}
}
```

##### Using Inside a Different Component

```scss
@include component(heading) {
	
	@include sub-component(group) {
		...	
	}	
	
}

@include component(widget) {

	@include overwrite-sub(group, $parent: heading) {
		...
	}
	
}
```

```html
<div class="widget">
	<div class="heading_group">
		...
	</div>	
</div>
```

##### Special Operators

* `adjacent-sibling` - overwrite a component when it is also an adjacent sibling
* _more comming soon..._

###### Adjacent Sibling

```scss
@include component(widget) {

	@include sub-component(title) {
		color: red;
	}
	
	@include sub-component(icon) {
		@include overwrite-sub(title, $special: adjacent-sibling) {
			color: blue;
		}
	}
	
}
```

```html
<div class="widget">
	<div class="widget_icon">...</div>
	<div class="widget_title">I'm blue!</div>
</div>

<div class="widget">
	<div class="widget_title">I'm red!</div>
	<div class="widget_icon">...</div>
</div>
```

#### Modifier

The `modifier()` mixin generates the selector for any modifier of your component, for example a **small** or **large** modifier. This mixin accepts only 1 paramter:

* `$modifiers` - the name of your modifier(s) [required]


```scss
@include component(button) {
	
	...
	
	@include modifier(small) {
		font-size: 0.75em;
	}
	
	@include modifier(large) {
		font-size: 1.5em;
	}
	
}
```

```html
<div class="button">Button</div>
<div class="button-small">Button</div>
<div class="button-large">Button</div>
```

You can use any number of modifiers on a single element in the HTML, and in any order, for example:

```html
<div class="button-large-round-primary">...</div>
<div class="button-primary-large-round">...</div>
```

##### Alias Mixin For Multiple Modifiers

```scss
@include component(button) {
	
	...
	
	@include modifiers((buy-now, add-to-basket)) {
		text-transform: uppercase;
	}
	
	@include modifier(buy-now) {
		...
	}
	
	@include modifier(add-to-basket) {
		...
	}
	
}
```

#### Nested Modifier

The `nested-modifier()` mixin is used to nest modifiers within one another, meaning that both modifiers must be passed to the element's HTML for the styles to take effect. Again, this mixin accepts only 1 parameter:

* `$modifiers` - the name of your modifier(s) [required]

```scss
@include component(button) {
	
	content: "null";

	@include modifier(white) {
		content: "foo";
	}
	
	@include modifier(border) {
		content: "bar";
		@include nested-modifier(white) {
			content: "baz";
		}
	}
	
}
```

This means that in your HTML the element would require both the **border** and **white** modifiers for the styles to take place:

```html
<div class="button">null</div>
<div class="button-white">foo</div>
<div class="button-border">bar</div>
<div class="button-border-white">baz</div>
<div class="button-white-border">baz</div>
```

> If you try to nest the regular modifier mixin, it will output the CSS as if it weren't nested. It is essential to use the `nested-modifier` mixin for any nested modifiers. Other than that, nested-modifiers can be infinitely nested.

##### Alternate Use-Case

```scss
@include component(header) {

	@include modifier(side) {
		...
		@include nested-modifier(left) {
			...
		}
		@include nested-modifier(right) {
			...
		}
	}
	
}
```

##### Alias Mixin For Multiple Modifiers

```scss
@include component(button) {

	@include modifier(buy-now) {
		...
	}
	
	@include modifier(add-to-basket) {
		...
	}
	
	@include modifier(clearance) {
		@include nested-modifiers((buy-now, add-to-basket)) {
			...
		}
	}
	
}
```

#### Extend Modifiers

This mixin allows you to extend multiple modifiers into a new, seperate modifer, essentially combining several modifiers into one.

```scss
@include component(button) {

	@include modifier(round)   {...}
	@include modifier(large)   {...}
	@include modifier(success) {...}

	@include modifier(primary) {
		@include extend(round, large, success);
	}	

}
```

```html
<div class="button-primary">...</div>
```

#### Context

The `context()` mixin allows you to apply styles to your component when certain conditions are met. This mixin accepts 1 parameter:

* `$context` - the name of the predefined condition you wish to be met

The following conditions can be passed to the mixin:

* `parent-hovered` - apply styles to a sub-component when the parent component is hovered
* `($media_feature: $value)` - basic media query parsing for responsive conditions 

##### Parent-Hovered

```scss
@include component(widget) {

	@include sub-component(icon) {
		color: blue;
		@include context(parent-hovered) {
			color: white;
		}	
	}
	
//	This is equivilent to:
//
//	@include sub-component(icon) {
//		color: blue;
//	}
//
//	&:hover {
//		@include overwrite-sub(icon) {
//			color: white;
//		}
//	}

}
```

##### Media Query Conditions

The `context()` mixin can be used for basic media query parsing in the following format:

```css
@media ({media_feature}: {value}) and (/*repeat...*/) {
	...
}
```

Where `{media_feature}` is any value from the **media_feature** list [seen here](https://goo.gl/HIa4nD), and `{value}` is your custom value.

```scss
@include component(header) {

	@include context((min-width: 420px)) {
		...
	}
	
	@include context((min-width: 420px, max-width: 960px)) {
		...
	}
	
	@include context((orientation: portrait)) {
		...
	}
	
}
```

### Module Configuration

As outlined in the [overview](#overview) section, Modular allows you to configure your components with customizable options.

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		bg-color : black,
		top      : 50px
		
	), $custom);

	@include component(header) {
		
		// Core Styles
		background-color: map-get($header, bg-color);
		margin-top: map-get($header, top);
		
	} // component(header)
		
} // @mixin header
```

For all intents and purposes, there are 2 types of options; bools and non-bools. A bool option is one whose value determines whether or not some code should be applied. A non-bool option is one whose value is used as a value for a CSS property. In the below example there is one of each.

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		dark : false,
		top  : 50px
		
	), $custom);

	@include component(header) {
		
		// Core Styles
		margin-top: map-get($header, top);
		
		// Settings
		@include setting(dark) {
			background-color: black;
		}
		
	} // component(header)
		
} // @mixin header
```

Your configuration can be infinitely nested, like so:

```scss
@mixin global($custom: ()) {

	$global: config((
		
		// Options
		typography: (
			sizes: (
				size-1    : 1em,
				size-2    : 1.2em,
				size-3    : 1.6em
			),
			colors: (
				primary   : red,
				secondary : blue
			)
		)
		
	), $custom) !global;
	
	...
		
} // @mixin global
```

When your configuration is more than one level deep, to access the values using `map-get`, you will end up having to do something like:

```scss
map-get(map-get(map-get($global, typography), colors), primary;
```

Piece of cake, right? I'm sure you'd agree repeating this over and over in your other modules would quickly become tedious, so for something like this you could create a function underneath the main mixin for your module, similar to the following:

```scss
@function color($color) {
	map-get(map-get(map-get($global, typography), colors), $color;
}
```

You can now access the **colors** map from your config using `color(primary)`, for example:

```scss
background-color: color(primary);
```

#### Bool Options

If your option is a bool, you can use the `setting` mixin. The styles added within this mixin will automatically be applied to the component if the option is set to **true**. Alternatively, since by default adding a setting will also create a modifier for the setting, you can apply the styles by adding the modifier to your HTML tag, regardless of the settings value:

```html
<div class="header-dark">
	...
</div>
```

If you are watching your CSS output, you may wish to remove these modifiers (and related wildcard selectors) from the generated styles and only use them conditionally. To do so, you can pass the `extend-settings` option to your module's config, and set it to **false**:

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		extend-settings: false,
		dark : false,
		top  : 50px
		
	), $custom);
	
	...
		
}
```

To disable the extension of settings globally by default, set the `$extend-settings` variable in **modular.scss** to **false**. This is defined above the `settings()` mixin.

#### Non-Bool Options

If your option is a CSS property, to call the option in your component the **map-get** function is used, like so:

```scss
margin-top: map-get($header, top);
```

which will generate:

```scss
margin-top: 50px;
```

#### Hybrid Options

In some cases, you may require a hybrid of the above 2 options. You may have a set of styles you wish to use conditionally, and you may wish for these styles to vary depending on the value passed. Let's look at the following example - imagine your website has a side header, and you want to easily change whether it appears on the left or right hand side:

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		side: false; // left or right
		
	), $custom);
	
	@include component(header) {
		
		@include setting(side) {
			// core side header styles
			@include option(left) {
				// left side styles
			}
			@include option(right)
				// right side styles
			}
		}
		
	} // component(header)
		
} // @mixin header
```

The above example inserts an optional set of styles if `side` is set to anything other than **false**. Depending on the value of your setting, we can choose to include additional styles by using the `option()` mixin. Again, by default these options are extended as modifiers so you can use them regardless of the setting's value:

```html
<div class="header-side-left">..</div>
```

```html
<div class="header-side-right">..</div>
```

If you've completely followed this documentation so far you may have already picked up on the fact you can also use:

```html
<div class="header-left-side">..</div>
```

```html
<div class="header-right-side">..</div>
```

And just to reiterate, with the `side` option set to either left or right in the above example, you don't need to pass any modifiers to the HTML, we just use:

```html
<div class="header">...</div>
```

##### Getting Creative

In some circumstances, we can achieve the same thing without having to use the `option()` mixin. Consider the above example; "left" and "right" are both also CSS properties, so we can pass the setting's value as a CSS property:

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		side: left;
		
	), $custom);
	
	@include component(header) {
		
		@include setting(side) {
			// Side-Header Styles
			...
			#{map-get($header, side)}: 0; // left: 0;
		}
		
	} // component(header)
	
} // @mixin header
```

The above example is assuming we have a setup where the header's position is controlled via:

* `left: 0;` for a left header
* `right: 0;` for a right header

#### Including Your Module

Our module is now ready to be included; to include the module with the default settings you have created, all that's required is:

```scss
@include header;
```

To include your header with customised options, this is done like so:

```scss
@include header((
	dark : true,
	side : left,
	top  : 0
));
```

And that's it, you now have a completely custoimzable header which can be modified with extreme ease.

#### Global Configuration

What if you want to create a module whose options can be accessed by other modules? For example, say you have a module for your grid system and have configured some breakpoint values - you then may wish to access these values from throughout your project:

```scss
@mixin grid($custom: ()) {
	
	$grid: ((
		breakpoints: ((
			break-1: 420px,
			break-2: 740px,
			break-3: 960px,
			break-4: 1200px
		));
	), $custom);
	
	...
	
} // @mixin grid
```

This is entirely possible, and requires the addition of the `!global` flag:

```scss
@mixin grid($custom: ()) {
	
	$grid: ((
		breakpoints: ((
			break-1: 420px,
			break-2: 740px,
			break-3: 960px,
			break-4: 1200px
		));
	), $custom) !global;
	
	...
	
} // @mixin grid

// Mixin to easily access breakpoints map
@function breakpoint($breakpoint) {
	@return map-get(map-get($grid, breakpoints), $breakpoint);
}
```

As long as your other modules are included after this one, we can now access the breakpoint values using:

```scss
width: breakpoint(break-3);
```

#### Setting Up A Project

Let's create a simple example project with a typography file, some buttons and a header, taking a complete modular approach.

First, we'll create the main project's Sass files:

```scss
app.scss
_typography.scss
_buttons.scss
_header.scss
_theme.scss
```

##### app.scss

```scss
// Modular
@import "modular";

// Project Partials
@import "typography";
@import "buttons";
@import "header";

// Theme
@import "theme";
```

##### _typography.scss

```scss
@mixin typography($custom: ()) {

    $typography: config((
        colors: (
            primary   : blue,
            secondary : green
        ),
        sizes: (
            small     : 0.8em,
            regular   : 1em,
            large     : 1.4em           
        )
    ), $custom) !global;

} // @mixin typography

@function color($color) {
    @return map-get(map-get($typography, colors), $color);
}

@function size($size) {
    @return map-get(map-get($typography, sizes), $size);
}

//	color: color(primary);
//	color: color(secondary);
//	font-size: size(small);
//	font-size: size(regular);
//	font-size: size(large);
```

##### _buttons.scss

```scss
@mixin buttons($custom: ()) {

    //-------------------------------------------------------------
    // Config
    //-------------------------------------------------------------

    $buttons: config((

        // Core Styles
        line-height  : 1.4,
        side-spacing : 0.5em,
        background   : grey,
        color        : white,
        // Modifiers
        radius       : 0.4em

    ), $custom);

    //-------------------------------------------------------------
    // Component
    //-------------------------------------------------------------

    @include component(button) {

    // Core Styles
    //-------------------------------------------------------------

        display: inline-block;
        line-height: map-get($buttons, line-height);
        padding: 0 map-get($buttons, side-spacing);
        background: map-get($buttons, background);
        color: map-get($buttons, color);

    // Modifiers
    //-------------------------------------------------------------

        // Patterns
		
        @include modifier(round) {
            border-radius: map-get($buttons, radius);
        }

        @include modifier(block) {
            display: block;
        }

        // Colors

        @include modifier(primary) {
            background: color(primary);
        }

        @include modifier(secondary) {
            background: color(secondary);
        }

        // Sizes

        @include modifier(small) {
            font-size: size(small); 
        }

        @include modifier(large) {
            font-size: size(large); 
        }

        // Semantic Styles

        @include modifier(purchase) {
            @include extend(round, primary, large);
        }

    } // component(button)

} // @mixin buttons

//	<div class="button">...</div>
//	<div class="button-round">...</div>
//	<div class="button-block">...</div>
//	<div class="button-primary">...</div>
//	<div class="button-secondary">...</div>
//	<div class="button-small">...</div>
//	<div class="button-large">...</div>
//	<div class="button-primary-round-large">...</div>
//	<div class="button-purchase">...</div>
```

##### _header.scss

```scss
@mixin header($custom: ()) {

    //-------------------------------------------------------------
    // Config
    //-------------------------------------------------------------

    $header: config((

        background : color(primary),
        top        : 50px,
        dark       : false,
        dark-color : rgba(black, 0.8),
        side       : false,
        side-width : 100%

    ), $custom);

    //-------------------------------------------------------------
    // Component
    //-------------------------------------------------------------

    @include component(header) {

    // Core Styles
    //-------------------------------------------------------------

        background: map-get($header, background);   
        margin-top: map-get($header, top);

    // Settings
    //-------------------------------------------------------------

        @include setting(dark) {
            background: map-get($header, dark-color);   
        }

        @include setting(side) {
            // Core Side-Header Styles
            position: fixed;
            top: 0;
            width: map-get($header, side-width);
            z-index: 99;
            @include option(left) {
                left: 0;
            }
            @include option(right) {
                right: 0;
            }
        }

    } // component(header)

} // @mixin header


//	<div class="header">...</div>
//	<div class="header-dark">...</div>
//	<div class="header-side-left">...</div>
//	<div class="header-side-right">...</div>
//	<div class="header-dark-side-right">...</div>
```

##### _theme.scss

```scss

@include typography((
	colors: (
		primary   : purple,
		secondary :	blue
	)
));

@include buttons;

@include header((
	dark          : true,
	top           : 0
));

```

Every configurable aspect of your project can now quickly and easily be changed from just one file, whilst retaining a completely modular architecture.

### Credits & Notes

* [Sassy Maps](https://github.com/at-import/sassy-maps)
* [Advanced Sass List Functions](http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/)
* [Bringing Configuration Objects To Sass](http://hugogiraudel.com/2014/05/05/bringing-configuration-objects-to-sass/)

#### Caveats

It's important to understand the CSS that is generated when using Modular in order to avoid potential conflicts. One common example might be if you have a **header** component which generates this CSS:

```scss
.header,
[class*="header-"] {
	...	
}
```

If you then try to add the class **header-wrapper**, the header component's core styles would also be applied to this class, as the component is looking for any class that begins with "header-".

### Changelog

#### Version 3.0.0

Released: 17th October 2015

###### Release Notes

* new **modular.js** extension - talk betwen CSS and JS
* removing the need to define component name when including `component()`
* more intelligent `overwrite()` mixin with more options
* more intelligent `modifier()` mixin with more options
* adding `$parent` option to `extend()` mixin
* removing media query option from `context()` mixin
* general improvements to code and performance

#### Version 2.7.0

Released: 10th August 2015

###### Release Notes

* adding ability to add basic media queries via `context()` mixin

#### Version 2.6.0

Released: 9th August 2015

###### Release Notes

* adding `context()` mixin (with 1 predefined contextual helper)
* adding `$special` paremeter to `overwrite()` mixins (with 1 predefined parameter)
* removing the need to define `$config` variable in each module
* renaming `$config` parameter to `$custom`

#### Version 2.5.0

Released: 9th August 2015

###### Release Notes

* adding ability to apply global sub-component styles

#### Version 2.4.0

Released: 8th August 2015

###### Release Notes

* adding ability to overwrite sub-components from any main component

#### Version 2.3.0

Released: 8th August 2015

###### Release Notes

* adding ability for modifier mixins to accept multiple parameters

#### Version 2.2.0

Released: 8th August 2015

###### Release Notes

* adding ability to accept multiple components per mixin

#### Version 2.1.0

Released: 7th August 2015

###### Release Notes

* adding `overwrite-sub()` mixin

#### Version 2.0.0

Released: 7th August 2015

###### Release Notes

* removing `nested-component()` mixin
* adding `overwrite()` mixin
* adding `sub-component()` mixin
* re-coded `modifier()` mixin to work on nested objects