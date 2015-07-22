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

## Configuring a Module

Modular allows you to create confirguble components with customizable parameters. To configure a new module, create a mixin named after your module (ensure the name is unique):

```css
@mixin header($config: ()) {
	...	
}
```

The `$config` variable is required to accept the configurable options, which are defined inside the mixin:

```css
@mixin header($config: ()) {

		$header: config((
			
			/* Options */
			dark : false,
			side : left
			
		), $config) !global;
		
		...
		
}
```

We now have the basis for our example module. Next, the actual component itself:

```css
@mixin header($config: ()) {

		$header: config((
			
			/* Options */
			dark : false,
			side : left
			
		), $config) !global;
		

		@include component(header) {
			
			@include setting(dark) {
				background-color: black;
			}
			
		}
		
}
```

We can now create our header with the following HTML:

```html
<div class="header">
	...
</div>

We can easily create a dark header by setting the "dark" option to "true".