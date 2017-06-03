'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var synergy = function synergy(els, callback, config, custom) {

    var block = getBlockName();

    function getBlockName() {
        if (typeof els === 'string') {
            return els;
        } else if (config && 'name' in config.module) {
            return config[Object.keys(config)[0]].name;
        } else if ((typeof els === 'undefined' ? 'undefined' : _typeof(els)) === 'object' && typeof els[1] === 'string') {
            return els[1];
        } else if (els instanceof HTMLElement && els.id) {
            return els.id;
        }
    }

    // Force 'els' into a NodeList || HTMLElement
    if (typeof els === 'string') {
        els = document.querySelectorAll('.' + block + ', [class*="' + block + '-"]');
    } else if ((typeof els === 'undefined' ? 'undefined' : _typeof(els)) === 'object' && (els[0] instanceof NodeList || els[0] instanceof HTMLElement)) {
        els = els[0];
    }

    if (els) {
        if (els instanceof NodeList) {
            els.forEach(function (el) {
                el.setAttribute('data-module', block);
            });
        } else if (els instanceof HTMLElement) {
            els.setAttribute('data-module', block);
        }
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

            if (part.length !== 0) {
                return part;
            }

            return false;
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
