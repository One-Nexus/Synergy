/** 
 * Modular - JS Extension
 * 
 * @author @esr360
 * @version 3.2
 * @license The MIT License (MIT)
 * @see http://github.com/esr360/Modular/
 */

/**
 * @var modularSelector
 * @description The DOM element which contains your JSON data
 */
var modularSelector = document.getElementById('stylesConfigJSON');

/**
 * @function removeQuotes
 * @description Remove quotes from a passed argument
 * @param arg - The argument from which you wish to remove quotes
 */
function removeQuotes(arg) {
    arg = arg.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, ''); return arg;
}

/**
 * @function camelCase
 * @param arg - The argument which you wish to make camelCased
 */
function camelCase(arg) {
	arg = arg.replace(/-([a-z])/g, function (g) { 
		return g[1].toUpperCase(); 
	}); return arg;
}

/**
 * @function parseJSON
 * @description Parse some JSON data
 * @param toCamelCase - Convert the parsed JSON to camelCase?
 */
function parseJSON(toCamelCase) {
    
    var style = null;
    
    style = window.getComputedStyle(modularSelector, '::before');
    style = style.content;
	style = removeQuotes(style);
    
	if(toCamelCase) {
		style = camelCase(style);
	}
    
    return JSON.parse(style);
    
}

/**
 * @var _module
 * @description Holds all configuration data for all modules
 */
var _module = parseJSON();

/**
 * @var _module
 * @description Holds all configuration data for all modules in
 * camelCase form
 */
var modulesCamelCase = parseJSON(true);

/**
 * @var moduleIndex
 * @description Used to increment the function which loops through
 * each module
 */
var moduleIndex = 0;

/**
 * @description Loop through each module and populate the global
 * namespace with a variable to access the module
 */
$.each(_module, function(module) {
	var moduleCamelCase = modulesCamelCase[Object.keys(modulesCamelCase)[moduleIndex]]['name'];
	window['_' + moduleCamelCase] = '.' + module + ', [class*="' + module + '-"]';   
	moduleIndex++; 
});
/**
 * @function _option
 * @description Get the computed value of a module's option
 * @param module - The module which you wish to get an option from
 * @param option - The module's option which you are interested in
 */

//	Usage
//
//	if(_option('navigation', 'sticky')) {
//		...
//	}

function _option(module, option) {

    var $option   = _module[module][option];
    var $value    = $option[Object.keys($option)[0]];
    var $id       = $('.' + module + ', [class*="' + module + '-"]');
    var $selector = $id.is('[class*="-' + option + '"]') == true;
        
    if (typeof($value) == 'boolean') {
        return $selector || $option['enabled'] != false;
    } else {
        return $selector || $option != false;
    }
	
}
/**
 * @function $.isModifier
 * @description Determine if a particular module has a certain 
 * modifier. Will look for either the modifier on the module in the
 * DOM or look for a corresponding value in the configuration.
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