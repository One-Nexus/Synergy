
[![Modular](https://raw.githubusercontent.com/esr360/Modular/gh-pages/logo-small.png "Modular Logo")](https://github.com/esr360/Modular)

> A set of Sass mixins for architecting modular, configurable and scalable CSS.

* [Overview](#overview)
* [Advanced Documentation](#advanced-documentation)

##### Bower Installation:

```html
bower install Modular
```

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

The benefits of using this HTML over conventional BEM syntax are self-apparant. However, you may be looking at that thinking of several reasons why it wouldn't work; what if I want to only use the "button" class on its own? What if I only want a large button, or only want a success button? Well, with Modular, all this is possible.

```js
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

For starters, writing `[class*="component-"]` over and over again can become tedious. Secondly, for our core styles we also need them to be applied to the naked `.component` class, meaning we would now have to write:

```css
.component,
[class*="component-"] {
	...
}
```

Which is exactly what the  `component()` mixin does. The reason `[class*="component"]` on its own isn't used is because this can cause undesired effects elsewhere in your styles. A very simple example would be if you wanted to use a `.buttons` class in the presence on a **button** component - `[class*="button"]` would target this class and apply the core button styles to it. Using `[class*="button-"]` is a fairly safe selector in a project we have control over, in terms of potential conflicts.

### Configuring a Module

Modular allows you to create configurable components with customizable settings. To configure a new module, create a mixin named after your module (ensure the name is unique):

```js
@mixin header($config: ()) {
	...	
}
```

The `$config` variable passed to the mixin is what will serve any custom options when the module is included. For the default options, a new variable named after your module is used, in our example this is `$header`. Underneath, we pass the options to a common global variable: `$config !global`. This is so every module has a common variable that can be accessed by the Modular mixins:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		top      : 50px,
		bg-color : black
		
	), $config);
	
	$config: $header !global;
	
	...
		
}
```

> `config()` is a custom function which merges multi-dimensional maps - above it is being used to merge the default options with any custom options.

To allow any subsequent modules to access the current module's options, set the config variable (eg: `$header`) to `!global`:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		top      : 50px,
		bg-color : black
		
	), $config) !global;
	
	$config: $header !global;
	
	...
		
}
```

We now have the basis for our example module. Next, the actual component itself:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		top  : 50px,
		bg-color : black
		
	), $config);
	
	$config: $header !global;

	@include component(header) {
		
		// Core Styles
		margin-top: map-get($header, top);
		background-color: map-get($header, bg-color);
		
	} // component(header)
		
} // @mixin header
```

To call an option, the [**map-get**](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method) feature of Sass is used. We can now create our header with the following HTML:

```html
<div class="header">
	...
</div>
```

Read the [Advanced Documentation](#module-configuration-1) section to find out how to use bool options, for something like:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		dark : false,
		side : false // left or right
		
	), $config);
	
	...
		
}

@include header((
	dark : true,
	side : left	
))
```

## Advanced Documentation

### Mixins

* [Component](#component)
* [Sub-Component](#sub-component)
* [Overwrite](#overwrite)
* [Modifier](#modifier)
* [Nested Modifier](#nested-modifier)
* [Extend Modifiers](#extended-modifiers)
* [Setting](#module-configuration)
* [Option](#hybrid-options)

### Module Configuration

* [Bool Options](#bool-options)
* [Non-Bool Options](#non-bool-options)
* [Hybrid Options](#hybrid-options)
* [Including Your Module](#including-your-module)
* [Global Configuration](#global-configuration)
* [Setting Up A Project](#setting-up-a-project)

#### Component

The `component()` mixin is what generates the selectors for your component/module. The mixin accepts 2 parameters:

* `$component` - the name of your component [required]
* `$type` - this defines how the mixin generates the selectors for your component [optional]

`$type` can be one of three values: `flex` (default), `chain` and `static`. By default, `flex` is enabled for all componenets. To globally change the default type, change the `$type` variable at the top of **_modular.scss**.

##### Flex

```css
@include component(header, flex) {
	...
}
```

This is the default value for a component; it creates wildcards for both `.component` and `[class*="component-"]`, allowing you to use both the naked component as well as modifiers. Whilst this is the most flexible option, it does mean the generated CSS is slightly greater, which is what the other 2 options are for.

Or if using the default `$type` value of `flex`, you do not need to pass a second parmeter here:

```css
@include component(header) {
	...
}
```

##### Chain

```css
@include component(header, chain) {
	...
}
```

The chain option should be used if you are looking to optimise your CSS output, and you know your component will not exist as a naked selector without modifiers. Ie - this option outputs only `[class*="component-"]`, thefore you cannot use `.component` to achieve any styles.

##### Static

```css
@include component(header, static) {
	...
}
```

The static option creates only the naked selector for your component; ie - `.selector`, meaning no modifiers can be used. This option is only available for consistency; it probably makes more sense to just write `.component` instead of using the mixin in this case - I'll let you think about that one.

#### Sub-Component

Because of how the wildcard selectors are generated, it is not possible to create relating components which begin with the same namespace. For example, if you have a `header` component with the default `$type` of `flex`, it would not be possible to create a `header-wrapper` class, as the *hyphen* is reserved for component modifiers. There are several options to get around this, including:

* camelCase (headerWrapper)
* reversed wording (wrap-header)
* underscore (header_wrapper)

To keep as similar to BEM as possible, Modular provies an easy way to create relating components using underscores, eg - `header_wrapper`. The `sub-component` mixin accepts 2 parameters:

* `$sub-component` - the name of your sub-component [required]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]

```js
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

```js
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

#### Overwrite

This mixin allows you to overwrite the styles of existing components and modifiers when in context of another component. The `overwrite` mixin accepts 2 parameters:

* `$component` - the name of the component you wish to overwrite [required]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]

```js
@include component(logo) {
	font-size: 1em;	
}

@include component(header) {

	@include overwrite(logo) {
		font-sie: 1.5em;
	}
	
}
```

```html
<div class="header">
	<div class="logo">
		...
	</div>
</div>	
```

#### Modifier

The `modifier()` mixin generates the selector for any modifier of your component, for example a **small** or **large** modifier. This mixin accepts only 1 paramter:

* `$modifier` - the name of your modifier [required]


```js
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

#### Nested Modifier

The `nested-modifier()` mixin is used to nest modifiers within one another, meaning that both modifiers must be passed to the element's HTML for the styles to take effect. Again, this mixin accepts only 1 parameter:

* `$modifier` - the name of your modifier [required]

_`print` used below isn't a real/valid property and is used for demonstrational purposes only_

```js
@include component(button) {
	
	print: "null";

	@include modifier(white) {
		print: "foo";
	}
	
	@include modifier(border) {
		print: "bar";
		@include nested-modifier(white) {
			print: "baz";
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

```js
@include component(header) {

	@include modifier(side) {
		...
		@include nested-modifier(left) {
			...
		}
	}
	
}
```

#### Extend Modifiers

This mixin allows you to extend multiple modifiers into a new, seperate modifer, essentially combining several modifiers into one.

```js
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

### Module Configuration

As outlined in the [overview](#overview) section, Modular allows you to configure your components with customizable options.

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		bg-color : black,
		top      : 50px
		
	), $config);
	
	$config: $header !global;

	@include component(header) {
		
		// Core Styles
		background-color: map-get($header, bg-color);
		margin-top: map-get($header, top);
		
	} // component(header)
		
} // @mixin header
```

For all intents and purposes, there are 2 types of options; bools and non-bools. A bool option is one whose value determines whether or not some code should be applied. A non-bool option is one whose value is used as a value for a CSS property. In the below example there is one of each.

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		dark : false,
		top  : 50px
		
	), $config);
	
	$config: $header !global;

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

```js
@mixin global($config: ()) {

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
		
	), $config) !global;
	
	...
		
} // @mixin global
```

When your configuration is more than one level deep, to access the values using `map-get`, you will end up having to do something like:

```js
map-get(map-get(map-get($config, typography), colors), primary;
```

Piece of cake, right? I'm sure you'd agree repeating this over and over in your other modules would quickly become tedious, so for something like this you could create a function underneath the main mixin for your module, similar to the following:

```js
@function color($color) {
	map-get(map-get(map-get($config, typography), colors), $color;
}
```

You can now access the **colors** map from your config using `color(primary)`, for example:

```css
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

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		extend-settings: false,
		dark : false,
		top  : 50px
		
	), $config);
	
	...
		
}
```

To disable the extension of settings globally by default, set the `$extend-settings` variable in **modular.scss** to **false**. This is defined above the `settings()` mixin.

#### Non-Bool Options

If your option is a CSS property, to call the option in your component the **map-get** function is used, like so:

```js
margin-top: map-get($header, top);
```

which will generate:

```js
margin-top: 50px;
```

#### Hybrid Options

In some cases, you may require a hybrid of the above 2 options. You may have a set of styles you wish to use conditionally, and you may wish for these styles to vary depending on the value passed. Let's look at the following example - imagine we have a side header on our website, and we want to easily change whether it appears on the left or right hand side:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		side: false; // left or right
		
	), $config);
	
	$config: $header !global;
	
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

And just to reiterate, with the `side` option set to either left or right in our above example, we don't need to pass any modifiers to our HTML, we just use:

```html
<div class="header">...</div>
```

##### Getting Creative

In some circumstances, we can achieve the same thing without having to use the `option()` mixin. Consider the above example; "left" and "right" are both also CSS properties, so we can pass the setting's value as a CSS property:

```js
@mixin header($config: ()) {

	$header: config((
		
		// Options
		side: left;
		
	), $config);
	
	$config: $header !global;
	
	@include component(header) {
		
		@include setting(side) {
			// Side-Header Styles
			...
			#{map-get($config, side)}: 0; // left: 0;
		}
		
	} // component(header)
	
} // @mixin header
```

The above example is assuming we have a setup where the header's position is controlled via:

* `left: 0;` for a left header
* `right: 0;` for a right header

#### Including Your Module

Our module is now ready to be included; to include the module with the default settings you have created, all that's required is:

```js
@include header;
```

To include your header with customised options, this is done like so:

```js
@include header((
	dark : true,
	top  : 0,
	side : left	
));
```

And that's it, you now have a completely custoimzable header which can be modified with extreme ease.

#### Global Configuration

What if you want to create a module whose options can be accessed by other modules? For example, say you have a module for your grid system and have configured some breakpoint values - you then may wish to access these values from throughout your project:

```js
@mixin grid($config: ()) {
	
	$grid: ((
		breakpoints: ((
			break-1: 420px,
			break-2: 740px,
			break-3: 960px,
			break-4: 1200px
		));
	), $config);
	
	...
	
} // @mixin grid
```

This is entirely possible using Modular, and requires the addition of the `!global` flag:

```js
@mixin grid($config: ()) {
	
	$grid: ((
		breakpoints: ((
			break-1: 420px,
			break-2: 740px,
			break-3: 960px,
			break-4: 1200px
		));
	), $config) !global;
	
	...
	
} // @mixin grid

// Mixin to easily access breakpoints map
@function breakpoint($breakpoint) {
	@return map-get(map-get($grid, breakpoints), $breakpoint);
}
```

As long as our other modules are included after this one, we can now access the breakpoint values using:

```js
width: breakpoint(break-3);
```

#### Setting Up A Project

Let's create a simple example project with a typography file, some buttons and a header, taking a complete modular approach.

First, we'll create our main project's Sass files:

```css
app.scss
_typography.scss
_buttons.scss
_header.scss
_theme.scss
```

##### app.scss

```js
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

```js
@mixin typography($config: ()) {

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
    ), $config) !global;

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

```js
@mixin buttons($config: ()) {

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

    ), $config);

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

```js
@mixin header($config: ()) {

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

    ), $config);
	
	$config: $header !global;

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

```js

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

Every configurable aspect of our project can now quickly and easily be changed from just one file, whilst retaining a completely modular architecture.

### Credits & Notes

* [Sassy Maps](https://github.com/at-import/sassy-maps)
* [Bringing Configuration Objects To Sass](http://hugogiraudel.com/2014/05/05/bringing-configuration-objects-to-sass/)

#### Caveats

It's important to understand the CSS that is generated when using Modular in order to avoid potential conflicts. One common example might be if you have a **header** component which generates this CSS:

```css
.header,
[class*="header-"] {
	...	
}
```

If you then try to add the class **header-wrapper**, the header component's core styles would also be applied to this class, as the component is looking for any class that begins with "header-".

### Changelog

#### Version 2.0.0

Released: 7th August 2015

###### Release Notes

* removing `nested-component()` mixin
* adding `overwrite()` mixin
* adding `sub-component()` mixin
* re-coded `modifier()` mixin to work on nested objects