# Modular

> A set of SCSS mixins for architecting intelligent, modular & scalable CSS.

## Overview

Modular aims to take modular CSS architecting to the next level. Similar in principle to the popular BEM convention, Modular is based off the idea of having "components" (modules) and "modifiers". 

Have you ever found yourself using BEM and ending up with HTML like this?

```html
<button class="button  button--large  button--success">Large success button</button>
```

What if you could just do this:

```html
<button class="button-large-success">Large success button</button>
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
<button class="button">Button</button>
<button class="button-large">Large Button</button>
<button class="button-success">Success Button</button>
<button class="button-large-success">Large Success Button</button>
<button class="button-success-large">Success Large Button</button>
```

### But how?

I'm glad you asked. The answer is simple - [wildcard selectors](#). Under the hood, Modular has created a wildcard selector for the component and each modifier

*But aren't wildcard selectors bad for performance?*

Well, no. Perhaps this was true many years ago, but today, [any performance impact is negilable](http://www.telerik.com/blogs/css_tip_star_selector_not_that_bad) (and this article is 3 years old). [Further reading](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/). 