/**
 * @function $.isModifier
 * 
 * @description Determine if a particular module has a certain 
 * modifier. Will look for either the modifier on the module in the
 * DOM or look for a corresponding value in the configuration.
 * 
 * @param module - The module which you wish to get an option from
 */

//	Usage
//
//	if(_navigation.isModifier('sticky')) {
//		...
//	}

$.fn.isModifier = function(modifier) {

    var moduleName = $(this)['selector'].split(',')[0].split('.').join('');

    moduleName = moduleName.toString();

    return _option(moduleName, modifier);

};