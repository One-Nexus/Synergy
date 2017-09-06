## TODO

## FRIDGE

## FREEZER

* create "when" content e.g @include when('component', $is: 'moddifierA', $is-not: 'modifierB') - look to module example   in readme.md
* create global sass object with module config like components and modifiers etc
* add 'state' data attribute for things like active for child components to latch onto

## DONE

* remove theme from module example
* if calling `-modifir` within `component` (without underscore), it outputs wrong code
* update code so in 60 second example can remove  @include get-styles(this('dark'));
* add a way to pass callback sass mixin to essentially allow mixin overrides on onenexus homepage
* look at Global Component Styles docs section
* look at ALL readmes and examples when importing/exporting Synergy - is Synergy always available in global scope?
* document $parser
* document $namespace
* document config.json