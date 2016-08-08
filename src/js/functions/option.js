/**
 * Get the computed value of a module's option
 * 
 * @function _option
 * @param {object} module - The module which you wish to get an option from
 * @param {object} option - The module's option which you are interested in
 */
function _option(module, option) {

    if (Element && !Element.prototype.matches) {
        var proto = Element.prototype;
        proto.matches = proto.matchesSelector || proto.msMatchesSelector;
    }

    var _option  = _modules[module][option];
    var value    = _option[Object.keys(_option)[0]];
    var id       = '.' + module + ', [class*="' + module + '-"]';
    var modifier = '[class*="-' + option + '"]';
    var target   = document.querySelector(id);
    var selector = (target !== null && target.length !== 0) ? target.matches(modifier) : false;
    
    if (typeof value == 'boolean') {
        return selector || _option.enabled !== false;
    } else {
        return selector || _option !== false;
    }

}