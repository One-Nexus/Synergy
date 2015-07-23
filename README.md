# Modular

> A set of SCSS mixins for architecting intelligent, modular & scalable CSS.

## Overview

Modular aims to take modular CSS architecting to the next level. Similar in principle to the popular BEM convention, Modular is based off the idea of having "components" (modules) and "modifiers". 

Have you ever found yourself using BEM and ending up with HTML like this?

```html
<div class="button  button--large  button--success">Large Success Button</div>
```

What if you could just do this:

```html
<div class="button-large-success">Large Success Button</div>
```

The benefits of using this HTML over conventional BEM syntax are self apparant. However, you may be looking at that and be thinking of several reasons why it wouldn't work; what if I want to only use the "button" class on its own? What if I only want a large button, or only want a success button? Well, with Modular, all this is possible.

```css
@include component(button) {
	/* core button styles */
	...
	@include modifier(large) {
		/* large button styles */
		...
	}
	@include modifier(success) {
		/* success button styles */
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

### But how?

I'm glad you asked. The answer is simple - [wildcard selectors](#). Under the hood, Modular has created a wildcard selector for the component and each modifier

*But aren't wildcard selectors bad for performance?*

Well, no. Perhaps this was true many years ago, but today, [any performance impact is negilable](http://www.telerik.com/blogs/css_tip_star_selector_not_that_bad) (and this article is 3 years old). [Further reading](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/). 

*Why bother using a mixin for this? Why not just write the wildcard selector?*

For starters, writing `[class*="component-"]` over and over again can become tedious. Secondly, for our root styles we also need them to be applied to the naked `.component` class, meaning we would now have to write:

```css
.component,
[class*="component-"] {
	...
}
```

Which is exactly what the  "component" mixin does. The [nested-components](#) and [modifiers](#) mixins in particular become extremely useful for managing and maintainig a sensible CSS output, keeping it as clean and minimal as possible.

### Configuring a Module

Modular allows you to create confirguble components with customizable parameters. To configure a new module, create a mixin named after your module (ensure the name is unique):

```css
@mixin header($config: ()) {
	...	
}
```

The `$config` variable is required to accept the custom options when including the mixin; the default options are defined inside the mixin:

```css
@mixin header($config: ()) {

		$header: config((
			
			/* Options */
			dark : false,
			top  : 50px
			
		), $config) !global;
		
		...
		
}
```

In the example above, we have two different types of options; a bool and a number. Typically, the "setting" mixin used in the example below would be used for options which are bools (although strictly speaking, it's used for options which are able to have a value of "false" - read further on for examples). We now have the basis for our example module. Next, the actual component itself:

```css
@mixin header($config: ()) {

		$header: config((
			
			/* Options */
			dark : false,
			top  : 50px
			
		), $config) !global;
		

		@include component(header) {
			
			// Core Styles
			margin-top: map-get($header, top);
			
			// Settings
			@include setting(dark) {
				background-color: black;
			}
			
		}
		
}
```

To call an option, the "map-get" feature of Sass is used. To create an optional setting, the "setting" mixin is used. We can now create our header with the following HTML:

```html
<div class="header">
	...
</div>
```

We can now easily create a dark header by setting the "dark" option to "true". Alternatively, we can add a modifier of "dark" to our header, regardless of the settings value:

```html
<div class="header-dark">
	...
</div>
```

## Documentation