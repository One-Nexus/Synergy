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

    var _option  = _modules[module][option];
    var value    = _option[Object.keys(_option)[0]];
    var id       = '.' + module + ', [class*="' + module + '-"]';
    var modifier = '[class*="-' + option + '"]';

    var target   = document.querySelector(id);
    var selector = target.matches(modifier) || target.msMatchesSelector(modifier);
    //var selector = target.querySelectorAll(modifier).length;
        
    if (typeof value == 'boolean') {
        return selector || _option['enabled'] != false;
    } else {
        return selector || _option != false;
    }

}