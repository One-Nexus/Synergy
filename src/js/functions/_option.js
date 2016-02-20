/**
 * @function _option
 * 
 * @description Get the computed value of a module's option
 * 
 * @param module - The module which you wish to get an option from
 * @param option - The module's option which you are interested in
 */

//  Usage
//
//  if(_option('navigation', 'sticky')) {
//      ...
//  }

function _option(module, option) {

    var $option   = _modules[module][option];
    var $value    = $option[Object.keys($option)[0]];
    var $id       = '.' + module + ', [class*="' + module + '-"]';
    var $selector = ('' + $id.className + '').indexOf('' + '[class*="-' + option + '"]' + '') > -1;
        
    if (typeof($value) == 'boolean') {
        return $selector || $option['enabled'] != false;
    } else {
        return $selector || $option != false;
    }

}