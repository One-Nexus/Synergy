'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Synergy Module
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Function} callback
 * @param {Object} config
 */
var synergy = function synergy(els, callback, custom, config) {

    var block = void 0;

    if (typeof els === 'string') {
        block = els;
        els = document.querySelectorAll('.' + block + ', [class*="' + block + '-"]');
    } else if (config) {
        block = config[Object.keys(config)[0]].name;
    }

    if (els.length) {
        els.forEach(function (el) {
            el.setAttribute('data-module', block);
        });
    } else {
        els.setAttribute('data-module', block);
    }

    function blockPart(part, type, set, glue) {
        var element = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : els;

        if (part) {
            var namespace = block + glue + part;

            if (set) {
                return element.classList.add(namespace);
            }

            var selector = void 0;

            if (type == 'component') {
                selector = '.' + namespace + ', [class*="' + namespace + '-"]';
            } else if (type == 'modifier') {
                selector = '[class*="' + block + '-"][class*="-' + part + '"]';
            }

            if (!element.length) {
                if (element.matches('[class*="' + glue + part + '"]')) {
                    return true;
                }

                var parts = element.querySelectorAll(selector);

                if (parts.length !== 0) {
                    return parts;
                }

                return false;
            }

            return document.querySelectorAll(selector);
        } else {
            part = [];

            var classes = element.classList.value.split(' ');

            classes.forEach(function (item) {
                var isPart = item.includes(block + glue);
                if (isPart) {
                    var _parts = item.replace(block + glue, '').split(glue);

                    if (_parts.length === 1) {
                        _parts = _parts[0];
                    }

                    part.push(_parts);
                }
            });

            return part;
        }
    }

    exports.query = els;

    exports.modifier = function (modifier, set) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : els;

        return blockPart(modifier, 'modifier', set, '-', element);
    };

    exports.component = function (component, set) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : els;

        return blockPart(component, 'component', set, '_', element);
    };

    if (callback) {
        var options = config ? Object.assign(config[Object.keys(config)[0]], custom) : custom;

        Array.prototype.forEach.call(els, function (el, index) {
            return callback(el, options, exports);
        });
    }

    return exports;
};

exports.default = synergy;


Element.prototype.component = function (component, set) {
    return exports.component(component, set, this);
};

Element.prototype.modifier = function (modifier, set) {
    return exports.modifier(modifier, set, this);
};
