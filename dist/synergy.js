'use strict';

/**
 * Synergy Module
 * 
 * @access public
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Function} callback
 * @param {Object} config
 */
var $module = function $module(els, callback, custom, config) {

    var block = config[Object.keys(config)[0]].name;

    if (typeof els === 'string') {
        els = document.querySelector('.' + els + ', [class*="' + els + '-"]');
    }

    Array.prototype.forEach.call(els, function (el, index) {
        el.setAttribute('data-module', block);
    });

    exports.modifier = function (modifier, el) {
        if (modifier) {
            el.className += modifier;
        } else {
            return 'i_am_modifier';
        }
    };

    exports.component = function (component) {};

    if (config && callback) {
        var options = Object.assign(config[Object.keys(config)[0]], custom);

        Array.prototype.forEach.call(els, function (el, index) {
            return callback(el, options, exports);
        });
    }

    return exports;
};

Element.prototype.component = function (component) {
    var block = this.closest('[data-module]').getAttribute('data-module');
    var selector = block + '_' + component;

    return this.querySelector('.' + selector + ', [class*="' + selector + '-"]');
};

module.exports = $module;
//# sourceMappingURL=synergy.js.map
