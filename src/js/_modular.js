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
var modularSelector = document.getElementById('modulesConfigJSON');

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
var _modules = parseJSON();

/**
 * @var modulesCamelCase
 * @description Holds all configuration data for all modules in
 * camelCase form
 */
var modulesCamelCase = parseJSON(true);

/**
 * @description Loop through each module and populate the global
 * namespace with a variable to access the module
$.each(_modules, function(module) {
    var moduleCamelCase = modulesCamelCase[Object.keys(modulesCamelCase)[moduleIndex]]['name'];
    window['_' + moduleCamelCase] = '.' + module + ', [class*="' + module + '-"]';   
    moduleIndex++; 
});
 */

var moduleNames = [];
var moduleNamesCamelCase = [];

for (var module in _modules) {
    moduleNames.push(_modules[module].name);
}

for (var moduleCamelCase in modulesCamelCase) {
    moduleNamesCamelCase.push(modulesCamelCase[moduleCamelCase].name);
}

for (var i = 0; i < moduleNames.length; i++) {
    window['_' + moduleNamesCamelCase[i]] = '.' + moduleNames[i] + ', [class*="' + moduleNames[i] + '-"]' ;
}