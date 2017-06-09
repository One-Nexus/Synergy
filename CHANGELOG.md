## Changelog

### Version 3.4.1

Released: 21st October 2016

###### Release Notes

* fixing issue with commit hash used in bower install

### Version 3.4.0

Released: 21st October 2016

###### Release Notes

* removing custom functions and adding [Sass-Boost](https://github.com/esr360/Sass-Boost) dependency
* added as npm package
* added unit tests

### Version 3.3.0

Released: 5th August 2016

###### Release Notes

* recoded using vanilla JS, removing jQuery as a dependency
* removing `isModifier()` JS function
* improving `_option()` JS function
* renaming global `_module` variable to `_modules`
* adding new `data` option to `module` mixin for data-attributes
* improving `component` mixin logic and functionality
* improving `modifier` mixin logic and functionality
* improving JSON output by removing superfluous keys
* adding SassDoc compatibility
* re-adding bower support

### Version 3.2.0

Released: 14th February ♥ 2016

###### Release Notes

* separating source code into individual files
* allow creation of modules without configuration
* removing `nested-modifier()` mixin - no longer needed as regular `modifier()` mixin now more intelligent
* adding ability to extend entire module + modifiers within another
* adding 'this' function to access current modules config
* renaming `default` to more semantic `enabled` for option mixin
* adding `at-root` option to `overwrite()` mixin
* renaming `stylesConfigJSON` selector to `modulesConfigJSON`
* bower support dropped

### Version 3.1.0

Released: 18th November 2015

###### Release Notes

* adding `$is` and `$not` options to `overwrite-component` mixin (previously `overwrite-sub`)
* renaming `component()` mixin to `module()`
* renaming `sub-component()` mixin to `component()`
* renaming `overwrite-sub()` mixin to `overwrite-component()`

### Version 3.0.0

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

### Version 2.7.0

Released: 10th August 2015

###### Release Notes

* adding ability to add basic media queries via `context()` mixin

### Version 2.6.0

Released: 9th August 2015

###### Release Notes

* adding `context()` mixin (with 1 predefined contextual helper)
* adding `$special` paremeter to `overwrite()` mixins (with 1 predefined parameter)
* removing the need to define `$config` variable in each module
* renaming `$config` parameter to `$custom`

### Version 2.5.0

Released: 9th August 2015

###### Release Notes

* adding ability to apply global sub-component styles

### Version 2.4.0

Released: 8th August 2015

###### Release Notes

* adding ability to overwrite components from any main component

### Version 2.3.0

Released: 8th August 2015

###### Release Notes

* adding ability for modifier mixins to accept multiple parameters

### Version 2.2.0

Released: 8th August 2015

###### Release Notes

* adding ability to accept multiple components per mixin

### Version 2.1.0

Released: 7th August 2015

###### Release Notes

* adding `overwrite-component()` mixin

### Version 2.0.0

Released: 7th August 2015

###### Release Notes

* removing `nested-component()` mixin
* adding `overwrite()` mixin
* adding `sub-component()` mixin
* re-coded `modifier()` mixin to work on nested objects