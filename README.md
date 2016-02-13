
[![Modular](https://raw.githubusercontent.com/esr360/Modular/gh-pages/logo-small.png "Modular Logo")](https://github.com/esr360/Modular)

> A front-end framework for building modular, configurable and scalable projects built with CSS (Sass) and JavaScript (jQuery).

* [Overview](#overview)
* [Installation](#installation)
* [Advanced Documentation](#advanced-documentation)
* [Changelog](#changelog)

## Overview

#### 60 Second Example

Inside a file called `_header.scss`

```scss
@mixin header($custom: ()) {
    
    // Default module configuration
    $header: config((
        'fixed'         : false,
        'background'    : #000000,
        'wrapper-width' : 960px
    ), $custom);
    
    @include module('header') {
        
        background: this('background');
        
        @include modifier('noLogo') {
            @include overwrite('logo') {
                display: none;   
            }    
        }
        
        @include component('wrapper') {
            width: this('wrapper-width'); 
        }
        
        @include option('fixed') {
            position: fixed;
        }
        
    }

}
```

Wherever you want to output the code, in the same or another file...

```scss
@include header();
```

To change any values in the configuration, pass them to the mixin:

```scss
@include header((
    'background'    : blue,
    'wrapper-width' : 90%
));
```

Your markup for the above module may now look something like the following:

```html
<div class="header">
    <div class="header_wrapper">
        <div class="logo">...</div>
        ...
    </div>    
</div>
```

If you want to hide the logo, you can add the `noLogo` modifier to the header:

```html
<div class="header-noLogo">
    ...   
</div>
```

If you want to set the header's position to `fixed`, there are two ways you can do this. Firstly, you can again add the appropriate modifier to the markup:

```html
<div class="header-fixed">
    ...   
</div>
```

N.B. Modifiers can be chained in any order:

```html
<div class="header-fixed-noLogo">
    ...   
</div>
```

Or you can set the header to be fixed by passing the option to the mixin when calling it:

```scss
@include header((
    'fixed' : true
));
```

The header will now be fixed even without passing the modifier in the markup.

Now inside your JavaScript you can do the following (assuming you are using `modular.js`):

```js
// This will test for either the 'fixed' modifier in the markup,
// or a value of 'true' for the corresponding option in the config
if (_option('header', 'fixed')) {
    alert('Header is fixed!');
}
```

```js
// This will test for the 'noLogo' modifier in the markup
if (_header.isModifier('noLogo')) {
    alert('The header logo is hidden!');
}

// Do something to the header module regardless of any modifiers
$(_header).doSomething();
```

```js
var headerFixed = _module['header']['fixed'] // returns true or false
var headerBackground = _module['header']['background'] // returns the background value
var headerWrapperWidth = _module['header']['wrapper-width'] // returns the wrapper-width value
```

## Installation

The compiled source files can be found in the `/dist` directory. Load these into your project before you attempt to execute any Modular related code and you're good to go.

##### Clone The Repo

```
git clone https://github.com/esr360/Modular.git
```

Or...

##### As Git Submodule

```
git submodule add https://github.com/esr360/Modular.git
```

###### If using modular.js:

```
git submodule update --init --recursive
```

##### Using Grunt

If you are using grunt, after cloning the repo run `npm-install` to install the required node modules. To compile the source files and test that Modular framework is working, run `grunt compile`. This will overwrite the files already present in the `dist` directory, which you can then use in your project. Running this task will also compile a test `.scss` file which contains a basic example module and modifier. This is just to ensure that Modular is working properly, if there are any issues the task will throw an error on your command line. The related **test** files are located in the `/test` directory. 

##### Requirements

Modular requires **Sass 3.4**, so as of writing this unfortunately means you cannot use Libsass and must use Ruby Sass.

## Advanced Documentation

### Mixins

* [Module](#module)
* [Component](#component)
* [Modifier](#modifier)
* [Overwrite](#overwrite)
* [Overwrite-Component](#overwrite-component)
* [Extend Modifiers](#extend-modifiers)
* [Context](#context)
* [Option](#bool-options)
* [Value](#hybrid-options)

### Module Configuration

* [Bool Options](#bool-options)
* [Non-Bool Options](#non-bool-options)
* [Hybrid Options](#hybrid-options)
* [Nested Options](#nested-options)
* [Including Your Module](#including-your-module)
* [Global Configuration](#global-configuration)
* [Setting Up A Project](#setting-up-a-project)

### modular.js

* [Getting Started](#getting-started)
* [Configuration](#configuration)
* [Usage](#usage)

#### Module

The `module()` mixin is what generates the selectors for your module. The mixin accepts 2 parameters:

* `$modules` - the name of your module(s) [optional]
* `$type` - this defines how the mixin generates the selectors for your component(s) [optional]

```scss
@include module('header') {
	...
}
```

If `$modules` is not defined, it will look for a `name` value in your module's config. This is an alternative way of using the `module()` mixin:

```scss
@mixin header($custom: ()) {
    
    $header: config((
        'name' : 'header'
    ), $custom);
    
    @include module {
        ...   
    }
        
}
```

`$modules` is usually a single value but can also be a list, eg. `(header, footer)`, should you wish to apply styles to more than one module. For such instances, an *alias* mixin of `modules()` is available:

```scss
@include modules(('header', 'footer')) {
	...
}
```

`$type` can be one of three values: `flex` (default), `chain` and `static`. By default, `flex` is enabled for all componenets. To globally change the default type, change the `$type` variable at the top of **_modular.scss**.

##### Flex

```scss
@include module('header', 'flex') {
	...
}
```

This is the default value for a module; it creates wildcards for both `.module` and `[class*="module-"]`, allowing you to use both the naked module as well as modifiers. Whilst this is the most flexible option, it does mean the generated CSS is slightly greater, which is what the other 2 options are for.

Or if using the default `$type` value of `flex`, you do not need to pass a second parmeter here:

```scss
@include module('header') {
	...
}
```

##### Chain

```scss
@include module('header', 'chain') {
	...
}
```

The chain option should be used if you are looking to optimise your CSS output, and you know your module will not exist as a naked selector without modifiers. Ie - this option outputs only `[class*="module-"]`, thefore you cannot use `.module` to achieve any styles.

##### Static

```scss
@include module('header', 'static') {
	...
}
```

The static option creates only the naked selector for your module; ie - `.selector`, meaning no modifiers can be used. This option is only available for consistency; it probably makes more sense to just write `.module` instead of using the mixin in this case - I'll let you think about that one.

##### Advanced Example

```scss
@include modules(('header', 'footer'), 'static') {
	// apply to both header and footer modules
}

@include module('header', 'static') {
	// apply only to header
}

@include module('footer', 'static') {
	// apply only to footer
}
```

#### Component

Because of how the wildcard selectors are generated, it is not possible to create relating modules which begin with the same namespace. For example, if you have a `header` component with the default `$type` of `flex`, it would not be possible to create a `header-wrapper` class, as the *hyphen* is reserved for modifiers. There are several options to get around this, including:

* camelCase (headerWrapper)
* reversed wording (wrap-header)
* underscore (header_wrapper)

To keep things as similar to BEM as possible, Modular provies an easy way to create relating components using underscores, eg - `header_wrapper`. The `component` mixin accepts a single parameter:

* `$components` - the name of your component(s) [optional]

```scss
@include module('header') {
	
	@include component('wrapper') {
		...	
	}	
	
}
```

```html
<div class="header_wrapper">...</div>
```

Components work like regular modules, in the sense that you can add modifiers:

```scss
@include module('header') {
	
	@include component('wrapper') {
		@include modifier('full-screen') {
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
@include module('footer') {
	
	@include components(('nav', 'copyright')) {
		...	
	}	
	
}
```

```html
<div class="footer">
    <div class="footer_nav">...</div>
    <div class="footer_copyright">...</div>
</div>
```

##### Global Component Styles

By not passing a parameter to the `component()` mixin, you can apply styles to all components of the parent module:

```scss
@include module('widget') {

	@include component {
		@include modifier('inline') {
			...
		}	
	}
	
	@include component('icon') {
		...
	}
	
	@include component('header') {
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
@include module('footer') {
	
	...
	
	@include component('wrapper', 'static') {
		...	
	}
	
	@include components(('nav', 'copyright'), 'static') {
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

This mixin allows you to overwrite the styles of existing modules, components and modifiers when in context of another module. The `overwrite()` mixin accepts 5 parameters:

* `$modules` - the name of the modules(s) you wish to overwrite [optional]
* `$type` - as above, this can be either `flex` (default), `chain` or `static` [optional]
* `$is` - overwrite the module only if it has certain modifiers [optional]
* `$not` - overwrite the module only if it does not have certain modifiers [optional]
* `$special` - set a special operator [optional]

> Leaving `$modules` undefined will instead look for a `name` value of your module's config (see [Advanced Example](#advanced-example-2)).

```scss
@include modules(('logo', 'nav')) {
	color: black;	
}

@include module('logo') {
	font-size: 1em;	
}

@include module('header') {
	
	@include overwrite(('logo', 'nav')) {
		color: white;
	}

	@include overwrite('logo') {
		font-size: 1.5em;
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

* `adjacent-sibling` - overwrite a module when it is also an adjacent sibling to the parent module
* `general-sibling` - overwrite a module when it is also a general sibling to the parent module
* `at-root` - Instead of being treated as nested inside the parent module, overwrite the core module styles

###### Example

```scss
@include module('logo') {
	color: red;
}
	
@include module('navigation') {

	@include overwrite('logo', $special: 'adjacent-sibling') {
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

##### Advanced Example

```scss
@mixin billboard($custom: ()) {

	$billboard: config((
        
		'name'            : 'billboard',
        'selector-type'   : 'chain',
		'full-screen'     : false
        
	), $custom) !global;

	@include module {
        
        ...
        
		// If website has "top-bar" and top-bar is "fixed" and header is "absolute"
        @include overwrite('top-bar', $is: 'fixed', $special: 'at-root') {
            @include overwrite('header', $is: 'absolute', $special: 'adjacent-sibling') {
                @include overwrite($is: 'full-screen', $special: 'adjacent-sibling') {
                    margin-top: option($top-bar, 'height');
                }
            }
        }
        
        ...
	
	} // module
	
} // @mixin billboard
```

You're probably curious as to what the hell is going on here. Let's take a look at the computed selector:

```css
[class*="top-bar-"][class*="-fixed"] + [class*="header-"][class*="-absolute"] + [class*="billboard-"][class*="-full-screen"] {
    ...
}
```

Hopefully by looking between the 2 you get a good idea of how the advanced features of this mixin work.

#### Overwrite-Component

As above, this mixin is used for overwriting styles for an existing component in alternative context. 3 parameters are accepted for the `overwrite-component()` mixin:

* `$components` - the name of the component(s) you wish to overwrite [required]
* `$parent` - the parent of your component [optional]
* `$is` - overwrite the component only if it has certain modifiers [optional]
* `$not` - overwrite the component only if it does not have certain modifiers [optional]
* `$special` - set a special operator [optional]

> The `$parent` parameter is used if you are including this mixin inside a different module to your component's original parent.

```scss
@include module('form') {

	@include component('input') {
		...
	}

	@include modifier('large') {
		@include overwrite-component('input') {
			...
		}
	}
}
```

```html
<div class="form-large">
	<input class="form_input" type="text" />
</div>	
```

##### Alias Mixin For Multiple Components

```scss
@include module('form') {

	@include component('input') {
		...
	}
	
	@include component('group') {
		...
	}

	@include modifier('large') {
		@include overwrite-components(('input', 'group')) {
			...
		}
	}
}
```

##### Using Inside a Different Component

```scss
@include module('heading') {
	
	@include component('group') {
		color: red;
	}	
	
}

@include module('widget') {

	@include overwrite-component('group', $parent: 'heading') {
		color: blue;
	}
	
}
```

```html
<div class="heading_group">I'm Red!</div>	

<div class="widget">
	<div class="heading_group">I'm Blue!</div>	
</div>
```

##### Special Operators

* `adjacent-sibling` - overwrite a component when it is also an adjacent sibling
* _more comming soon..._

###### Adjacent Sibling

```scss
@include module('widget') {

	@include component('title') {
		color: red;
	}
	
	@include component('icon') {
		@include overwrite-component('title', $special: 'adjacent-sibling') {
			color: blue;
		}
	}
	
}
```

```html
<div class="widget">
	<div class="widget_icon">...</div>
	<div class="widget_title">I'm Blue!</div>
</div>

<div class="widget">
	<div class="widget_title">I'm Red!</div>
	<div class="widget_icon">...</div>
</div>
```

#### Modifier

The `modifier()` mixin generates the selector for any modifiers of your module, for example a **small** or **large** modifier. This mixin accepts only 1 paramter:

* `$modifiers` - the name of your modifier(s) [required]


```scss
@include module('button') {
	
	...
	
	@include modifier('small') {
		font-size: 0.75em;
	}
	
	@include modifier('large') {
		font-size: 1.5em;
	}
	
}
```

```html
<div class="button">Button</div>
<div class="button-small">Button</div>
<div class="button-large">Button</div>
```

The `modifier()` mixin is infinitely nestable allowing you to require more than one modifier for styles to take affect:

```scss
@include module('header') {
	
	...
	
	@include modifier('side') {
        position: absolute;
		@include modifier('left') {
            left: 0;
        }
		@include modifier('right') {
            right: 0;
        }
	}
	
}
```

```html
<div class="header-side-left">...</div>
```

You can use any number of modifiers on a single element in the HTML, and in any order, for example:

```html
<div class="button-large-round-primary">...</div>
<div class="button-primary-large-round">...</div>
```

##### Alias Mixin For Multiple Modifiers

```scss
@include module('button') {
	
	...
	
	@include modifiers(('buy-now', 'add-to-basket')) {
		text-transform: uppercase;
	}
	
	@include modifier('buy-now') {
		...
	}
	
	@include modifier('add-to-basket') {
		...
	}
	
}
```

#### Extend Modifiers

This mixin allows you to extend multiple modifiers into a new, seperate modifer, essentially combining several modifiers into one.

```scss
@include module('button') {

	@include modifier('round')   {...}
	@include modifier('large')   {...}
	@include modifier('success') {...}

	@include modifier('primary') {
		@include extend('round', 'large', 'success');
	}	

}
```

```html
<div class="button-primary">...</div>
```

#### Context

The `context()` mixin allows you to apply styles to your module when certain conditions are met. This mixin accepts 1 parameter:

* `$context` - the name of the predefined condition you wish to be met [required]

The following conditions can be passed to the mixin:

* `parent-hovered` - apply styles to a component when the parent module is hovered
* *more coming soon*

##### Parent-Hovered

```scss
@include module('widget') {

	@include component('icon') {
		color: blue;
		@include context('parent-hovered') {
			color: white;
		}	
	}
	
//	This is equivilent to:
//
//	@include component('icon') {
//		color: blue;
//	}
//
//	&:hover {
//		@include overwrite-component('icon') {
//			color: white;
//		}
//	}

}
```

### Module Configuration

As outlined in the [overview](#overview) section, Modular allows you to configure your modules with customizable options.

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		'bg-color' : black,
		'top'      : 50px
		
	), $custom);

	@include module('header') {
		
		// Core Styles
		background-color: this('bg-color');
		margin-top: this('top');
		
	}
		
}
```

For all intents and purposes, there are 2 types of options; bools and non-bools. A bool option is one whose value determines whether or not some code should be applied. A non-bool option is one whose value is used as a value for a CSS property. In the below example there is one of each.

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		'dark' : false,
		'top'  : 50px
		
	), $custom);

	@include module('header') {
		
		// Core Styles
		margin-top: this('top');
		
		// Settings
		@include option('dark') {
			background-color: black;
		}
		
	}
		
}
```

Your configuration can be infinitely nested, like so:

```scss
@mixin global($custom: ()) {

	$global: config((
		
		// Options
		'typography': (
			'sizes': (
				'size-1'      : 1em,
				'size-2'      : 1.2em,
				'size-3'      : 1.6em
			),
			'colors': (
				'primary'     : red,
				'secondary'   : blue,
                'validation'  : (
                    'valid'   : #19d36d,
                    'invalid' : #d32828
                )
			)
		)
		
	), $custom) !global;
	
	...
		
}
```

#### Bool Options

If your option is a bool, you can use the `option()` mixin. The styles added within this mixin will automatically be applied to the module if the option is set to **true**. 

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		'extend-settings': false,
		'dark' : false,
		'top'  : 50px
		
	), $custom);
	
    // styles will be applied if 'dark' is set to 'true'
	@include option('dark') {
        ...   
    }
		
}
```

Alternatively, since by default adding a setting will also create a modifier for the setting, you can apply the styles by adding the modifier to your HTML tag, regardless of the setting's value:

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
		'extend-settings': false,
		'dark' : false,
		'top'  : 50px
		
	), $custom);
	
	...
		
}
```

To disable the extension of settings globally by default, set the `$extend-settings` variable in **modular.scss** to **false**. This is defined above the `settings()` mixin.

#### Non-Bool Options

If your option is a CSS property, to call the option in your module the `this()` *function* is used, like so:

```scss
margin-top: this('top');
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
		'side' : false; // left or right
		
	), $custom);
	
	@include module('header') {
		
		@include option('side') {
			// core side header styles
			@include value('left') {
				// left side styles
			}
			@include value('right') {
				// right side styles
			}
		}
		
	} // module('header')
		
} // @mixin header
```

The above example inserts an optional set of styles if `side` is set to anything other than **false**. Depending on the value of your option, we can choose to include additional styles by using the `value()` mixin. Again, by default these options are extended as modifiers so you can use them regardless of the setting's value:

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
		'side' : left;
		
	), $custom);
	
	@include module('header') {
		
		@include setting('side') {
			// Side-Header Styles
			...
			#{this('side')}: 0; // left: 0;
		}
		
	} // module('header')
	
} // @mixin header
```

The above example is assuming we have a setup where the header's position is controlled via:

* `left: 0;` for a left header
* `right: 0;` for a right header

#### Nested Options

Taking the above example a step further, let's say we want to pass some child options to the parent option:

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		'side'                 : (
			'enabled'          : false, // left or right
			'width'            : 350px,
			'show-y-scrollbar' : false
		)
		
	), $custom);
	
	@include module('header') {
		
		@include option('side') {
            ...
			width: option($header, 'side', 'width');
            @include value('left') {
                ...
            }	
            @include value('right') {
                ...
            }		
            // apply styles when 'show-y-scrollbar' is 'true'
			@include value($value: 'show-y-scrollbar') {
				...
			}
		}
		
	} // module('header')
	
} // @mixin header
```

Above, the `enabled` value in `side` allows you to use the `value()` mixin just as in the previous example. By passing the `$value` variable to the `value()` mixin, you can specify an alternate child boolean option.

To use non-bool options, the `this()` function is used as normal:

```scss
width: this('side', 'width');
```

#### Including Your Module

Our module is now ready to be included; to include the module with the default settings you have created, all that's required is:

```scss
@include header;
```

To include your header with customised options, this is done like so:

```scss
@include header((
	'dark' : true,
	'side' : left,
	'top'  : 0
));
```

And that's it, you now have a completely custoimzable header which can be modified with extreme ease.

#### Global Configuration

What if you want to create a module whose options can be accessed by other modules? For example, say you have a module for your grid system and have configured some breakpoint values - you then may wish to access these values from throughout your project:

```scss
@mixin grid($custom: ()) {
	
	$grid: ((
		'breakpoints': ((
			'break-1': 420px,
			'break-2': 740px,
			'break-3': 960px,
			'break-4': 1200px
		));
	), $custom);
	
	...
	
} // @mixin grid
```

This is entirely possible, and requires the addition of the `!global` flag:

```scss
@mixin grid($custom: ()) {
	
	$grid: ((
		'breakpoints': ((
			'break-1': 420px,
			'break-2': 740px,
			'break-3': 960px,
			'break-4': 1200px
		));
	), $custom) !global;
	
	...
	
} // @mixin grid

// Mixin to easily access breakpoints map
@function breakpoint($breakpoint) {
	@return option($grid, 'breakpoints', $breakpoint);
}
```

The `option()` function is used to get values from another module's configuration, like so:

```scss
width: option($grid, 'breakpoints', 'break-3'); // will return 960px
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
@import "src/scss/smodular";

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
        'colors': (
            'primary'   : blue,
            'secondary' : green
        ),
        'sizes': (
            'small'     : 0.8em,
            'regular'   : 1em,
            'large'     : 1.4em           
        )
    ), $custom) !global;

} // @mixin typography

@function color($color) {
    @return option($typography, 'colors', $color);
}

@function size($size) {
    @return option($typography, 'sizes', $size);
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
        'line-height'  : 1.4,
        'side-spacing' : 0.5em,
        'background'   : grey,
        'color'        : white,
        // Modifiers
        'radius'       : 0.4em

    ), $custom);

    //-------------------------------------------------------------
    // Module
    //-------------------------------------------------------------

    @include module('button') {

    // Core Styles
    //-------------------------------------------------------------

        display: inline-block;
        line-height: this('line-height');
        padding: 0 this('side-spacing');
        background: this('background');
        color: this('color');

    // Modifiers
    //-------------------------------------------------------------

        // Patterns
		
        @include modifier('round') {
            border-radius: this('radius');
        }

        @include modifier('block') {
            display: block;
        }

        // Colors

        @include modifier('primary') {
            background: color('primary');
        }

        @include modifier('secondary') {
            background: color('secondary');
        }

        // Sizes

        @include modifier('small') {
            font-size: size('small'); 
        }

        @include modifier('large') {
            font-size: size('large'); 
        }

        // Semantic Styles

        @include modifier('purchase') {
            @include extend('round', 'primary', 'large');
        }

    } // module(button)

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

        'background' : color('primary'),
        'top'        : 50px,
        'dark'       : false,
        'dark-color' : rgba(black, 0.8),
        'side'       : false,
        'side-width' : 100%

    ), $custom);

    //-------------------------------------------------------------
    // Module
    //-------------------------------------------------------------

    @include module('header') {

    // Core Styles
    //-------------------------------------------------------------

        background: this('background');   
        margin-top: this('top');

    // Settings
    //-------------------------------------------------------------

        @include setting('dark') {
            background: this('dark-color');   
        }

        @include setting('side') {
            // Core Side-Header Styles
            position: fixed;
            top: 0;
            width: this('side-width');
            z-index: 99;
            @include option('left') {
                left: 0;
            }
            @include option('right') {
                right: 0;
            }
        }

    } // module('header')

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
	'colors': (
		'primary'   : purple,
		'secondary' : blue
	)
));

@include buttons;

@include header((
	'dark' : true,
	'top'  : 0
));

```

Every configurable aspect of your project can now quickly and easily be changed from just one file, whilst retaining a completely modular architecture.

### modular.js

#### Getting Started

> modular.js requires a recent version of jQuery

So you've decided to see what this whole modular.js thing is about, great! The first thing you should know is that the man behind the magic here is [@HugoGiraudel](https://github.com/HugoGiraudel) for his project [SassyJSON](https://github.com/HugoGiraudel/SassyJSON). This is what actually outputs your Sass config to JSON format, which is how you interact with your modules in JS. Modular uses a slightly customized version of SassyJSON [available here](https://github.com/esr360/SassyJSON). SassyJSON comes included with Modular as a Git submodule. 

Ensure you have a copy of the forked SassyJSON in your project. If you have installed Modular as a Git submodule, you can run:

```
git submodule update --init --recursive
```

The first thing you need to do is import SassyJSON into your project, *before* Modular and any Modular related files:

```scss
@import "vendor/SassyJSON/stylesheets/SassyJSON";
@import "src/scss/modular"
```

Then include `modular.js` in your project, *before* any scripts which use Modular.

**Key Step:** Next, you need to create an element in your HTML which corresponds to the selector SassyJSON attaches to, which is `#modulesConfigJSON`, so create the following element somewhere in your markup:

```html
<div id="modulesConfigJSON"></div>
```

This is what ties all of your configuration together between the HTML, CSS and JS. Finally, in your project's main Sass file at the end of everything (or rather, at the end of all Modular related files), add the following code:

```scss
@if variable-exists('to-JSON') and $to-JSON {
	@include json-encode($config-JSON);
}
```

This function will output your configuration as JSON in your project's CSS file, which is how the JS will interact with it.

And that's it, you're now ready to start using `modular.js`!

#### Configuration

To enable JSON output of your modules' configuration, you need to set the `$to-JSON` variable to `true`. This can be found in the `_modular.scss` file, and is set to `false` by default:

```scss
// Enable JSON output?
$to-JSON : false !default;
```

Alternatively, you can pass this variable at the top of your main project's Sass file, above all Modular related Sass.

By default, output to JSON is enabled on a per-module basis by passing `name` and `output-JSON` options to your module's config:

```scss
@mixin header($custom: ()) {

	$header: config((
		
		// Options
		'name'        : 'header',
		'output-JSON' : true,
        'dark'        : false,
        'height'      : 70px
		
	), $custom);

	...
		
} // @mixin header
```

If you want all your modules to output their configuation to JSON by default, you can set the `$output-JSON` variable in `_modular.scss` to `true`. Alternatively, you can add this variable at the top of your project's main Sass file, above all Modular related Sass.

If everything is running as expected, once your Sass has been compiled your CSS should now contain the configuration for your modules as JSON. It should look something like this:

```css
#modulesConfigJSON::before {
    content: '{"header": {"selector-type": "flex", "extend-settings": true, "output-JSON": true, "name": "header", "dark": false}}';
    display: block;
    height: 0;
    overflow: hidden;
    width: 0;
}
```

You may not recognize all the values that are generarted; don't worry, they're just default values for a module. Give the documentation another read if you want to know what they are.

#### Usage

It is now possible to access your module like so:

```js
$(_header).doSomething();
```

Which is just a shorthand for:

```js
$('.header, [class*="header-"]').doSomething();
```

> If your module is named something like `app-header`, this would be camelCased and you would need to use `$(_appHeader)`

To access a specific option, you can do:

```js
_module['header']['dark']; // returns true or false by default
_module['header']['height']; // returns 70px by default
```

##### Custom '_option()' Function

Modular.js comes with a custom `_option()` function for usage on boolean options. The function will return `true` if either the option itself is set to `true`, or if your element has a `modifier` of the option name:

```scss
@include header((
	'dark' : true
));
```

Or ...

```html
<div class="header-dark">
    ...
</div>
```

Using a simple `if` statement you can now conditionally run JavaScript based off your module's option:

```js
if(_option('header', 'dark')) {
    ...
}
```

##### Media Query Based Example

A popular, practical example of how to use this might be to access your style's breakpoint values to conditionally apply scripts.

Consider the following `grid` module:

```scss

@mixin grid($custom: ()) {
	
	$grid: config((
        // Options
		'name'              : 'grid',
		'output-JSON'       : true,
        // Breakpoints
		'breakpoints': (
			'break-0'       : 0px,
			'break-1'       : 460px,
			'break-2'       : 720px,
			'break-3'       : 940px,
			'break-4'       : 1200px,
			'break-5'       : 1400px
		)
	), $custom) !global;
    
    ...
	
} // @mixin grid
```

Let's create a function which allows us to do this in our JavaScript:

```js
if(breakpoint('min-width', 'break-3')) {
    // do something   
}
```

This can be achieved with the following code:

```js
function breakpoint(media, value) {
	return window.matchMedia('(' + media + ':' + _module['grid']['breakpoints'][value] + ')').matches;
}
```

They key part of the above code is `_module['grid']['breakpoints'][value]`, which fetches the value from the JSON.

##### Custom '$.isModifier()' Function

Similar to the `_option()` function, the `$.isModifier()' function will return `true` if either the option itself is set to `true`, or if your element has a `modifier` of the option name:

```scss
@include header((
	'dark' : true
));
```

Or ...

```html
<div class="header-dark">
    ...
</div>
```

Using a simple `if` statement you can now conditionally run JavaScript based off your module's option:

```js
if(_header.isModifier('dark')) {
    ...
}
```

## Credits & Notes

* [Sassy Maps](https://github.com/at-import/sassy-maps)
* [Advanced Sass List Functions](http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/)
* [Bringing Configuration Objects To Sass](http://hugogiraudel.com/2014/05/05/bringing-configuration-objects-to-sass/)

#### Caveats

It's important to understand the CSS that is generated when using Modular in order to avoid potential conflicts. One common example might be if you have a **header** module which generates this CSS:

```scss
.header,
[class*="header-"] {
	...	
}
```

If you then try to add the class **header-wrapper** anywhere, the header module's core styles would also be applied to this class, as the module is looking for any class that contains "header-".

## Changelog

#### Version 3.2.0

Released: -

###### Release Notes

* separating source code into individual files
* removing `nested-modifier()` mixin - no longer needed as regular `modifier()` mixin now more intelligent
* adding ability to extend entire module + modifiers within another
* adding 'this' function to access current modules config
* renaming 'default' to more semantic 'enabled' for option mixin
* adding `at-root` option to `overwrite()` mixin
* renaming `stylesConfigJSON` selector to `modulesConfigJSON`

#### Version 3.1.0

Released: 18th November 2015

###### Release Notes

* adding `$is` and `$not` options to `overwrite-component` mixin (previously `overwrite-sub`)
* renaming `component()` mixin to `module()`
* renaming `sub-component()` mixin to `component()`
* renaming `overwrite-sub()` mixin to `overwrite-component()`

#### Version 3.0.0

Released: 22nd October 2015

###### Release Notes

* new **modular.js** extension - talk betwen CSS and JS
* removing the need to define component name when including `component()`
* more intelligent `overwrite()` mixin with more options
* more intelligent `modifier()` mixin with more options
* adding `$parent` option to `extend()` mixin
* removing media query option from `context()` mixin
* renaming 'setting' & 'option' mixins to 'option' and 'value' 
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

* adding ability to overwrite components from any main component

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

* adding `overwrite-component()` mixin

#### Version 2.0.0

Released: 7th August 2015

###### Release Notes

* removing `nested-component()` mixin
* adding `overwrite()` mixin
* adding `sub-component()` mixin
* re-coded `modifier()` mixin to work on nested objects