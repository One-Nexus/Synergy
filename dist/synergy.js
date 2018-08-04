module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = exports.component = exports.stripModifiers = exports.isValidSelector = exports.getModuleName = exports.getModifiers = exports.getGlue = exports.getDomNodes = exports.getComponents = exports.getBlockName = exports.getChildrenWithoutSelector = exports.deepextend = undefined;

var _deepExtend = __webpack_require__(1);

Object.defineProperty(exports, 'deepextend', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_deepExtend).default;
    }
});

var _getChildrenWithoutParentSelector = __webpack_require__(11);

Object.defineProperty(exports, 'getChildrenWithoutSelector', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getChildrenWithoutParentSelector).default;
    }
});
exports.default = Synergy;

var _component = __webpack_require__(12);

var _component2 = _interopRequireDefault(_component);

var _modifier = __webpack_require__(13);

var _modifier2 = _interopRequireDefault(_modifier);

var _getBlockName = __webpack_require__(14);

var _getBlockName2 = _interopRequireDefault(_getBlockName);

var _getComponents = __webpack_require__(15);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _getDomNodes = __webpack_require__(16);

var _getDomNodes2 = _interopRequireDefault(_getDomNodes);

var _getGlue = __webpack_require__(17);

var _getGlue2 = _interopRequireDefault(_getGlue);

var _getModifiers = __webpack_require__(18);

var _getModifiers2 = _interopRequireDefault(_getModifiers);

var _getModuleName = __webpack_require__(19);

var _getModuleName2 = _interopRequireDefault(_getModuleName);

var _isValidSelector = __webpack_require__(20);

var _isValidSelector2 = _interopRequireDefault(_isValidSelector);

var _parents = __webpack_require__(21);

var _parents2 = _interopRequireDefault(_parents);

var _stripModifiers = __webpack_require__(22);

var _stripModifiers2 = _interopRequireDefault(_stripModifiers);

var _getOptions = __webpack_require__(23);

var _getOptions2 = _interopRequireDefault(_getOptions);

var _setDomNodeAttributes = __webpack_require__(24);

var _setDomNodeAttributes2 = _interopRequireDefault(_setDomNodeAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Tools & Utilities
//*****************************************************************

// Tools


// Utilities


exports.getBlockName = _getBlockName2.default;
exports.getComponents = _getComponents2.default;
exports.getDomNodes = _getDomNodes2.default;
exports.getGlue = _getGlue2.default;
exports.getModifiers = _getModifiers2.default;
exports.getModuleName = _getModuleName2.default;
exports.isValidSelector = _isValidSelector2.default;
exports.stripModifiers = _stripModifiers2.default;
exports.component = _component2.default;
exports.modifier = _modifier2.default;

/**
 * Synergy Module
 * 
 * @author @esr360 <http://twitter.com/esr360>
 * 
 * @module Synergy
 * 
 * @param {(String|HTMLElement|NodeList)} els - Synergy selector to match elements
 * @param {Function} [callback] - function to call on matched elements
 * @param {Object} [config] - config to use when calling the function
 * @param {Object} [custom] - custom config to use in callback
 * @param {Object} [parser] - custom parser to use for configuration
 */

function Synergy(els, callback, config, custom, parser) {

    var methods = {};

    var componentGlue = (0, _getGlue2.default)('component', custom);
    var modifierGlue = (0, _getGlue2.default)('modifier', custom);
    var module = (0, _getModuleName2.default)(els, config);
    var domNodes = (0, _getDomNodes2.default)(els, module, modifierGlue);
    var components = (0, _getComponents2.default)(domNodes, module, componentGlue);
    var modifiers = (0, _getModifiers2.default)(domNodes, module, modifierGlue);
    var options = (0, _getOptions2.default)({ config: config, parser: parser, custom: custom });

    var isModuleElement = function isModuleElement() {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(function (node) {
                if ((0, _parents2.default)(node, '[data-module]').length) {
                    return false;
                }
            });

            return true;
        }
        if (domNodes instanceof HTMLElement && !(0, _parents2.default)(domNodes, '[data-module]').length) {
            return true;
        }
        if (typeof els === 'string' && els.match(/^[a-zA-Z]*$/)) {
            return true;
        }

        return false;
    };

    if (isModuleElement()) {
        (0, _setDomNodeAttributes2.default)({ domNodes: domNodes, module: module });
    }

    // Elements found by the Synergy query
    methods.query = domNodes;

    methods.modifier = function (query, operator) {
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;
        return (0, _modifier2.default)({
            glue: modifierGlue,
            target: target,
            module: module,
            modifiers: modifiers,
            query: query,
            operator: operator
        });
    };

    methods.component = function (query, operator) {
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;
        return (0, _component2.default)({
            target: target,
            module: module,
            components: components,
            query: query,
            operator: operator,
            componentGlue: componentGlue,
            modifierGlue: modifierGlue
        });
    };

    if (callback && typeof domNodes !== 'string') {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(function (el) {
                return callback(el, options, methods);
            });
        } else {
            return callback(domNodes, options, methods);
        }
    }

    return methods;
}

if (typeof window !== 'undefined' && !window.Synergy) {
    window.Synergy = Synergy;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = Buffer.alloc
			? Buffer.alloc(val.length)
			: new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

function safeGetProperty(object, property) {
	return property === '__proto__' ? undefined : object[property];
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = safeGetProperty(target, key); // source value
			val = safeGetProperty(obj, key); // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(28);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHtmlProps;

var _htmlAttributes = __webpack_require__(29);

var _htmlAttributes2 = _interopRequireDefault(_htmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get element HTML attributes from props
 * @param {*} props 
 */
function getHtmlProps(props) {
    var HtmlProps = {};

    for (var prop in props) {
        if (prop === 'name') {
            continue;
        } else if (prop === 'modifiers') {
            continue;
        } else if (prop === 'tag') {
            continue;
        } else if (prop === 'elementname') {
            HtmlProps.name = props[prop];
        } else if (Object.values(_htmlAttributes2.default).includes(prop)) {
            HtmlProps[prop] = props[prop];
        }
    };

    return HtmlProps;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModifiersFromProps;
/**
 * @param {*} props 
 * @param {*} blacklist 
 */
function getModifiersFromProps(props) {
    var blacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var modifiers = [];

    for (var prop in props) {
        var _ref = [prop, props[prop]],
            key = _ref[0],
            value = _ref[1];

        // if prop is name of module, do not include in list

        if (prop[0] === prop[0].toUpperCase()) {
            continue;
        }

        if (typeof value === 'boolean' && value) {
            if (blacklist && blacklist.indexOf(key) < 0) {
                modifiers.push(key);
            }
        }
    }

    return modifiers;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModulesFromProps;
/**
 * 
 */
function getModulesFromProps(props, classes) {
    Object.entries(props).forEach(function (prop) {
        if (prop[0][0] === prop[0][0].toUpperCase()) {
            var module = prop[0].toLowerCase();

            var modifiers = '';

            if (prop[1].constructor === Array) {
                modifiers = '-' + prop[1].join('-');
            } else if (typeof prop[1] === 'string') {
                modifiers = '-' + prop[1];
            }

            classes = classes + ' ' + module + modifiers;
        }
    });

    return classes;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = renderModifiers;
/**
 * @param {*} modifiers 
 */
function renderModifiers(modifiers) {
    if (modifiers && (typeof modifiers === 'undefined' ? 'undefined' : _typeof(modifiers)) === 'object' && modifiers.length) {
        return ('-' + modifiers).replace(/,/g, '-');
    }

    return '';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = setStyles;

var _synergy = __webpack_require__(0);

var _synergy2 = _interopRequireDefault(_synergy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} theme 
 * @param {*} parentElement 
 */
function setStyles(element, styles, globals, theme, parentElement) {

    // console.log(element, styles);
    var values = (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object' ? styles : styles(element, globals);
    var importantValues = function importantValues(values) {
        return values.forEach(function (value) {
            return value.element.style[value.style[0]] = value.style[1];
        });
    };

    var stylesDidMount = new Event('stylesdidmount');
    var moduleDidRepaint = new Event('moduledidrepaint');

    // initialise data interface
    element.data = element.data || { eventListeners: [], importantStyles: [] };

    // determine parent element
    parentElement = parentElement || element;

    // attach theme and repaint methods to parent element
    if (element === parentElement && theme !== false) {
        parentElement.repaint = function () {
            setStyles(parentElement, styles(element, globals), globals, false);

            if (theme) {
                setStyles(parentElement, theme, globals, false);
            }

            importantValues(parentElement.data.importantStyles);

            parentElement.dispatchEvent(moduleDidRepaint);
        };
    }

    var _loop = function _loop(key, value) {
        var subComponent = element.querySelectorAll('[class*="_' + key + '"]');

        if (typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (key.indexOf('modifier(') > -1) {
                var modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if ((0, _synergy2.default)(element).modifier(modifier)) {
                    setStyles(element, value, globals, false, parentElement);
                }
            } else if ((0, _synergy2.default)(element).component(key)) {
                (0, _synergy2.default)(element).component(key, function (_component) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        setStyles(_component, value, globals, false, parentElement);
                    } else if (typeof value === 'function') {
                        // @TODO getParameterNames(value), pass to `value(...)`

                        setStyles(_component, value(_component), globals, false, parentElement);
                    }
                });
            } else if (subComponent.length) {
                [].concat(_toConsumableArray(subComponent)).forEach(function (query) {
                    return setStyles(query, value, globals, false, parentElement);
                });
            } else if (key === ':hover') {
                if (!element.data.eventListeners.includes('mouseenter')) {
                    element.data.eventListeners.push('mouseenter');

                    element.addEventListener('mouseenter', function mouseEnter() {
                        setStyles(element, value, globals, false, parentElement);

                        element.removeEventListener('mouseenter', mouseEnter);
                    }, false);

                    element.addEventListener('mouseleave', function mouseLeave() {
                        element.removeEventListener('mouseleave', mouseLeave);

                        element.data.eventListeners = element.data.eventListeners.filter(function (item) {
                            return item !== 'mouseenter';
                        });

                        parentElement.repaint();
                    }, false);
                }
            } else if (value instanceof Array) {
                if (value[0] === 'important' && value[1] !== false) {
                    var alreadyContains = false;

                    if (parentElement.data.importantStyles.length) {
                        parentElement.data.importantStyles.forEach(function (style) {
                            if (style.element === element && style.style.toString() === [key, value[1]].toString()) {
                                alreadyContains = true;
                            }
                        });
                    }

                    if (!alreadyContains) {
                        parentElement.data.importantStyles.push({ element: element, style: [key, value[1]] });
                    }
                }
            } else if (typeof value === 'function') {
                element.style[key] = value(element.style[key]);
            } else {}
        } else {
            element.style[key] = value;
        }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(values)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            _loop(key, value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if ((typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) === 'object') {
        setStyles(element, theme, globals, false);
    }

    if (element === parentElement && theme !== false) {
        importantValues(parentElement.data.importantStyles);

        element.dispatchEvent(stylesDidMount);
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synergy = __webpack_require__(0);

Object.defineProperty(exports, 'Synergy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_synergy).default;
  }
});

var _synergize = __webpack_require__(25);

Object.defineProperty(exports, 'Synergize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_synergize).default;
  }
});

var _module = __webpack_require__(26);

Object.defineProperty(exports, 'Module', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_module).default;
  }
});

var _component = __webpack_require__(31);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});
Object.defineProperty(exports, 'SubComponent', {
  enumerable: true,
  get: function get() {
    return _component.SubComponent;
  }
});
Object.defineProperty(exports, 'Wrapper', {
  enumerable: true,
  get: function get() {
    return _component.Wrapper;
  }
});
Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _component.Group;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getChildrenWithoutParentSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getChildrenWithoutParentSelector(parent, selector) {
    var exclusionSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var foundElements = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = parent.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            if (null !== exclusionSelector && c.matches(exclusionSelector)) {
                continue;
            }
            if (c.matches(selector)) {
                foundElements.push(c);
            }
            foundElements.push.apply(foundElements, _toConsumableArray(getChildrenWithoutParentSelector(c, selector, exclusionSelector)));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return foundElements;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = component;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Component
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.components
 * @param {*} options.query
 * @param {*} options.operator
 */
function component(options) {
    // setup constants
    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = (options.module || Synergy.getModuleName(target)) + options.componentGlue + options.query;
    var components = Synergy.getComponents(target, options.module, options.componentGlue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.modifierGlue + '"]';
    var querySelector = document.querySelectorAll(selector);
    var moduleSelector = '.' + options.module + ', [class*="' + options.module + options.modifierGlue + '"]';
    var childComponent = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);

    if (options.query && target instanceof HTMLElement) {
        // add/remove a component
        if (typeof options.operator === 'string') {
            if (options.operator === 'set') {
                return toggleComponent(options.module, target, options.query, 'set', options.componentGlue);
            } else if (options.operator === 'unset') {
                return toggleComponent(options.module, target, options.query, 'unset', options.componentGlue);
            } else if (options.operator === 'add' || options.operator === 'remove') {
                return target.classList[options.operator](namespace);
            }
        }

        // get children components
        if (childComponent.length !== 0 && !(options.target instanceof NodeList)) {
            if (typeof options.operator === 'function') {
                childComponent.forEach(function (el) {
                    return options.operator(el);
                });
            }

            return childComponent;
        }

        // determine if element is specified component
        var matchesQuery = false;

        if (components) {
            components.forEach(function (component) {
                if (options.query === component) {
                    matchesQuery = true;

                    return matchesQuery;
                }
            });
        }

        if (matchesQuery || options.operator == 'isset') return matchesQuery;

        // get all specified components from document 
        return querySelector.length === 0 ? false : querySelector;
    }

    // determine the component name of current element
    return components;
}

/**
 * Toggle a component on a module
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleComponent(moduleName, target, query, operator, glue) {
    return Array.prototype.forEach.call(target.classList, function (className) {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);

            target.classList.add(operator === 'set' ? '' + className + glue + query : className.replace(glue + query, ''));
        }
    });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modifier;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Modifier
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.modifiers
 * @param {*} options.query
 * @param {*} options.operator
 */
function modifier(options) {
    // setup constants
    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getBlockName(target, options.module, options.glue) + options.glue + options.query;
    var modifiers = Synergy.getModifiers(target, options.module, options.glue, options.query);
    var selector = '.' + namespace + ', [class*="' + namespace + options.glue + '"]';
    var querySelector = document.querySelectorAll(selector);
    var moduleSelector = '.' + options.module + ', [class*="' + options.module + options.glue + '"]';
    var childModifier = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);
    var query = modifiers !== options.modifiers ? [options.query] : options.modifiers;

    if (typeof options.query !== 'undefined' && target instanceof HTMLElement) {
        // add/remove a modifier
        if (typeof options.operator === 'string') {
            if (options.operator === 'set') {
                return toggleModifier(options.module, target, options.query, 'set', options.glue);
            } else if (options.operator === 'unset') {
                return toggleModifier(options.module, target, options.query, 'unset', options.glue);
            } else if (options.operator === 'add' || options.operator === 'remove') {
                return target.classList[options.operator](namespace);
            }
        }

        // get children with modifier
        if (childModifier.length !== 0) {
            if (typeof options.operator === 'function') {
                childModifier.forEach(function (el) {
                    return options.operator(el);
                });
            }

            return childModifier;
        }

        // determine if element has modifier
        var matchesQuery = false;

        modifiers.forEach(function (modifier) {
            query.forEach(function (queryModifier) {
                if (queryModifier === modifier) return matchesQuery = true;
            });
        });

        if (matchesQuery || options.operator == 'isset') return matchesQuery;

        // @TODO get all components with modifier from document
        // return (querySelector.length === 0) ? false : querySelector;

        return false;
    }

    // get modifiers on element
    return modifiers.length > 0 ? modifiers : false;
}

/**
 * Toggle a modifier on a module
 * 
 * @function toggleModifier
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleModifier(moduleName, target, query, operator, glue) {
    return [].concat(_toConsumableArray(target.classList)).forEach(function (className) {
        var namespace = className.indexOf(glue) > -1 ? className.substring(0, className.indexOf(glue)) : className;
        var hasModifier = className.indexOf(moduleName) === 0 && className.indexOf(glue + query) > -1;

        if (operator === 'unset') {
            if (hasModifier) {
                target.classList.remove(className);
                target.classList.add(namespace);
            }
        } else if (operator === 'set') {
            if (!hasModifier) {
                target.classList.add(className + glue + query);
            }
        }
    });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBlockName;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @param {*} block
 * @param {String} module
 */
function getBlockName(block, module, modifierGlue) {
    var blockName = module;

    if (block instanceof HTMLElement) {
        [].concat(_toConsumableArray(block.classList)).every(function (className) {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className, module, modifierGlue);

                return false;
            }
        });
    }

    return blockName;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponents;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
function getComponents(block, module, glue) {
    var components = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                components = className.split(glue).slice(1);
            }
        });
    }

    // remove modifiers from components
    if (components) {
        components = components.map(function (component) {
            return component.split('-')[0];
        });
    }

    return components;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getDomNodes;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} query
 * @param {String} module
 */
function getDomNodes(query, module, modifierGlue) {

    if (query === null) return false;

    if (typeof query === 'undefined') return module;

    if (query instanceof HTMLElement || query instanceof NodeList) return query;

    if (typeof query === 'string') {
        if (Synergy.isValidSelector(query) && document.querySelectorAll(query).length && query !== module) {
            return document.querySelectorAll(query);
        } else {
            return document.querySelectorAll('.' + module + ', [class*="' + module + modifierGlue + '"]');
        }
    }

    if (query.constructor === Array) return getDomNodes(query[0], query[1], modifierGlue);

    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
        return document.querySelectorAll('.' + module + ', [class*="' + module + modifierGlue + '"]');
    }

    return query;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getGlue;
/**
 * Get glue
 * 
 * @param {String} type - [{'component'|'modifier'}]
 * @param {Object} custom
 * @param {string} glue
 */
function getGlue(type, custom, glue) {
    var defaults = {
        'component-glue': '_',
        'modifier-glue': '-'
    };

    if (custom && custom[type + 'Glue']) {
        glue = custom[type + 'Glue'].replace(/'/g, '');
    } else if (typeof Synergy !== 'undefined' && Synergy.config && Synergy.config[type + '-glue']) {
        glue = Synergy.config[type + '-glue'];
    } else {
        glue = defaults[type + '-glue'];
    }

    return glue;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModifiers;
/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 * @param {String} glue
 * @param {String} scope
 * 
 * @todo make scope accept an array of scopes
 */
function getModifiers(block, module, glue, scope) {
    var modifiers = [];

    if (block instanceof HTMLElement) {
        block.classList.forEach(function (className) {
            if (className.indexOf(module) === 0) {
                // safely determine if className contains modifier
                if (scope && (className.indexOf(scope) === className.length - scope.length || className.indexOf(scope + '-') > -1)) {
                    className = className.replace('-' + scope, '');
                    modifiers.push(scope);
                }

                modifiers.push(className.split(glue).slice(1));
            }
        });
    }

    return [].concat.apply([], modifiers);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getModuleName;
/**
 * Attempt to retrieve possible module name from query
 * 
 * @param {String|Object|HTMLElement} query - query to retrieve module name
 * @param {Object} [config] - object to retrieve module name
 */
function getModuleName(query, config, componentGlue) {

    if (query === null) return false;

    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
    } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object' && 'name' in query) {
        return query.name;
    } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object' && typeof query[1] === 'string') {
        return query[1];
    } else if (config && config[Object.keys(config)[0]].name) {
        return config[Object.keys(config)[0]].name;
    } else if (query instanceof HTMLElement) {
        if (typeof Element.prototype.closest !== 'undefined' && query.closest('[data-module]')) {
            return query.closest('[data-module]').getAttribute('data-module');
        } else if (query.classList.length === 1) {
            return query.classList[0].split(/-(.+)/)[0];
        } else if (query.id) {
            return query.id;
        }
    }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isValidSelector;
/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @param {String} selector - the selector to test for validity
 * @returns {Bool}
 * 
 * @example isValidSelector('[data-foo-bar]') // returns true
 * @example isValidSelector(4) // returns false
 */
function isValidSelector(selector) {
    var stub = document.createElement('br');

    try {
        stub.querySelector(selector);
    } catch (e) {
        return false;
    }

    return true;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parents;
/**
 * Parents
 * 
 * @see https://gist.github.com/ziggi/2f15832b57398649ee9b
 * 
 * @param {HTMLElement} elem
 * @param {String} selector
 */
function parents(elem, selector) {
    var elements = [];
    var ishaveselector = selector !== undefined;

    while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue;
        }

        if (!ishaveselector || elem.matches(selector)) {
            elements.push(elem);
        }
    }

    return elements;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stripModifiers;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Strip any modifiers from a block name
 * 
 * @param {String} block
 * @param {String} module
 */
function stripModifiers(block, module, glue) {
    // remove module name from block
    block = block.replace(module, '');
    // remove modifiers from block
    block = block.split(glue)[0];
    // merge module + remaining block
    block = module + block;

    return block;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getOptions;

var _deepExtend = __webpack_require__(1);

var _deepExtend2 = _interopRequireDefault(_deepExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * getOptions
 *
 * Merge default/custom options
 *
 * @param {Object} [config] - config to use when calling the function
 * @param {Object} [custom] - custom config to use in callback
 * @param {Object} [parser] - custom parser to use for configuration
 * @returns {*}
 */
function getOptions() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$config = _ref.config,
        config = _ref$config === undefined ? {} : _ref$config,
        parser = _ref.parser,
        _ref$custom = _ref.custom,
        custom = _ref$custom === undefined ? {} : _ref$custom;

    custom = custom instanceof HTMLElement || custom instanceof NodeList ? {} : custom;

    var configKey = Object.keys(config)[0];
    var extendedConfig = configKey ? (0, _deepExtend2.default)(config[configKey], custom) : custom;

    if (typeof parser === 'function') {
        return parser(extendedConfig);
    }

    if (parser && typeof parser.parse === 'function') {
        return parser.parse(extendedConfig);
    }

    return extendedConfig;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setDomNodeAttributes;
/**
 * setDomNodeAttributes
 *
 * @param domNodes
 * @param module
 */
function setDomNodeAttributes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        domNodes = _ref.domNodes,
        module = _ref.module;

    if (domNodes instanceof NodeList) {
        domNodes.forEach(function (el) {
            if (!el.hasAttribute('data-module')) {
                el.setAttribute('data-module', module);
            }
        });
    } else if (domNodes instanceof HTMLElement) {
        if (!domNodes.hasAttribute('data-module')) {
            domNodes.setAttribute('data-module', module);
        }
    }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Construct a Synergy module
 */
var Synergize = function (_React$Component) {
    _inherits(Synergize, _React$Component);

    function Synergize(props, context) {
        _classCallCheck(this, Synergize);

        var _this = _possibleConstructorReturn(this, (Synergize.__proto__ || Object.getPrototypeOf(Synergize)).call(this, props, context));

        try {
            _this.config = global.Synergy.modules[_this.props.name].config;
        } catch (error) {
            _this.config = {};
        }

        try {
            _this.methods = global.Synergy.modules[_this.props.name].methods;
        } catch (error) {
            _this.methods = {};
        }

        for (var method in _this.methods) {
            _this[method] = _this.methods[method];
        }

        _this.content = function (defaults) {
            if (_this.props.content) {
                return defaults;
            }

            if (_this.containsStaticMethodContent(_this.props.children)) {
                return _this.props.children;
            }

            return defaults;
        };
        return _this;
    }

    _createClass(Synergize, [{
        key: 'containsStaticMethodContent',
        value: function containsStaticMethodContent(props) {
            var _this2 = this;

            return Object.entries(this.props).some(function (prop) {
                var _ref = [prop[0], prop[1]],
                    key = _ref[0],
                    value = _ref[1];


                if (value.constructor === Array) {
                    return value.find(function (prop) {
                        return prop.type === _this2.constructor.content;
                    });
                } else {
                    return value.type === _this2.constructor.content;
                }
            });
        }
    }]);

    return Synergize;
}(_react2.default.Component);

exports.default = Synergize;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(4);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _deepExtend = __webpack_require__(1);

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _getHtmlProps = __webpack_require__(5);

var _getHtmlProps2 = _interopRequireDefault(_getHtmlProps);

var _getModifiersFromProps = __webpack_require__(6);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _getModulesFromProps = __webpack_require__(7);

var _getModulesFromProps2 = _interopRequireDefault(_getModulesFromProps);

var _renderModifiers = __webpack_require__(8);

var _renderModifiers2 = _interopRequireDefault(_renderModifiers);

var _setStyles = __webpack_require__(9);

var _setStyles2 = _interopRequireDefault(_setStyles);

var _refHandler = __webpack_require__(30);

var _refHandler2 = _interopRequireDefault(_refHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Used for generating unique module ID's
 */
var increment = 1;

/**
 * Render a Synergy module
 *
 * @extends React.Component
 */

var Module = function (_React$Component) {
    _inherits(Module, _React$Component);

    function Module(props, context) {
        _classCallCheck(this, Module);

        var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this, props, context));

        increment++;

        _this.tag = props.component || props.tag || (_htmlTags2.default.includes(props.name) ? props.name : 'div');
        _this.propModifiers = (0, _renderModifiers2.default)((0, _getModifiersFromProps2.default)(props, Synergy.CssClassProps));
        _this.passedModifiers = (0, _renderModifiers2.default)(props.modifiers);
        _this.modifiers = _this.propModifiers + _this.passedModifiers;
        _this.classes = props.className ? ' ' + props.className : '';
        _this.classNames = (0, _getModulesFromProps2.default)(props, props.name + _this.modifiers + _this.classes);
        _this.id = (props.before || props.after) && !props.id ? 'synergy-module-' + increment : props.id;
        _this.ref = function (node) {
            return (0, _refHandler2.default)(node, props);
        };

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(function (prop) {
            if (Object.keys(props).includes(prop)) {
                _this.classNames = _this.classNames + ' ' + prop;
            }
        });
        return _this;
    }

    _createClass(Module, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var config = void 0;

            try {
                config = global.Synergy.modules[this.props.name].config;
            } catch (error) {
                config = null;
            }

            return {
                module: this.props.name,
                modifiers: this.props.modifiers,
                config: config,
                props: this.props
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _module = Synergy.modules ? Synergy.modules[this.props.name] : null;

            if (_module && _module.methods) {
                if (_module.methods.init) {
                    _module.methods.init(_reactDom2.default.findDOMNode(this), this.config);
                }
            }
        }
    }, {
        key: 'getEventHandlers',
        value: function getEventHandlers(properties) {
            var eventHandlers = {};

            for (var prop in properties) {
                if (Object.keys(window).includes(prop.toLowerCase())) {
                    if (prop !== 'name') {
                        eventHandlers[prop] = properties[prop];
                    }
                }
            }

            return eventHandlers;
        }
    }, {
        key: 'getDataAttributes',
        value: function getDataAttributes(properties) {
            var dataAttributes = {};

            for (var prop in properties) {
                if (prop.indexOf('data-') === 0) {
                    dataAttributes[prop] = properties[prop];
                }
            }

            return dataAttributes;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.before && this.props.before(function () {
                    return document.getElementById(_this2.id);
                }),
                _react2.default.createElement(
                    this.tag,
                    _extends({
                        id: this.id,
                        className: this.classNames,
                        'data-module': this.props.name,
                        ref: this.ref

                    }, (0, _getHtmlProps2.default)(this.props), this.getDataAttributes(this.props), this.getEventHandlers(this.props), this.props.componentProps),
                    this.props.children
                ),
                this.props.after && this.props.after(function () {
                    return document.getElementById(_this2.id);
                })
            );
        }
    }]);

    return Module;
}(_react2.default.Component);

exports.default = Module;


Module.setStyles = function () {
    return _setStyles2.default.apply(undefined, arguments);
};

Module.config = _deepExtend2.default;

Module.childContextTypes = {
    module: _propTypes2.default.string,
    modifiers: _propTypes2.default.array,
    config: _propTypes2.default.object,
    props: _propTypes2.default.object
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * html-attributes
 * https://github.com/alexmingoia/html-attributes
 */



/**
 * @module html-attributes
 */

module.exports = {
  "abbr": "abbr",
  "accept": "accept",
  "acceptCharset": "accept-charset",
  "accessKey": "accesskey",
  "action": "action",
  "allowFullScreen": "allowfullscreen",
  "allowTransparency": "allowtransparency",
  "alt": "alt",
  "async": "async",
  "autoComplete": "autocomplete",
  "autoFocus": "autofocus",
  "autoPlay": "autoplay",
  "cellPadding": "cellpadding",
  "cellSpacing": "cellspacing",
  "challenge": "challenge",
  "charset": "charset",
  "checked": "checked",
  "cite": "cite",
  "class": "class",
  "className": "class",
  "cols": "cols",
  "colSpan": "colspan",
  "command": "command",
  "content": "content",
  "contentEditable": "contenteditable",
  "contextMenu": "contextmenu",
  "controls": "controls",
  "coords": "coords",
  "crossOrigin": "crossorigin",
  "data": "data",
  "dateTime": "datetime",
  "default": "default",
  "defer": "defer",
  "dir": "dir",
  "disabled": "disabled",
  "download": "download",
  "draggable": "draggable",
  "dropzone": "dropzone",
  "encType": "enctype",
  "for": "for",
  "form": "form",
  "formAction": "formaction",
  "formEncType": "formenctype",
  "formMethod": "formmethod",
  "formNoValidate": "formnovalidate",
  "formTarget": "formtarget",
  "frameBorder": "frameBorder",
  "headers": "headers",
  "height": "height",
  "hidden": "hidden",
  "high": "high",
  "href": "href",
  "hrefLang": "hreflang",
  "htmlFor": "for",
  "httpEquiv": "http-equiv",
  "icon": "icon",
  "id": "id",
  "inputMode": "inputmode",
  "isMap": "ismap",
  "itemId": "itemid",
  "itemProp": "itemprop",
  "itemRef": "itemref",
  "itemScope": "itemscope",
  "itemType": "itemtype",
  "kind": "kind",
  "label": "label",
  "lang": "lang",
  "list": "list",
  "loop": "loop",
  "manifest": "manifest",
  "max": "max",
  "maxLength": "maxlength",
  "media": "media",
  "mediaGroup": "mediagroup",
  "method": "method",
  "min": "min",
  "minLength": "minlength",
  "multiple": "multiple",
  "muted": "muted",
  "name": "name",
  "noValidate": "novalidate",
  "open": "open",
  "optimum": "optimum",
  "pattern": "pattern",
  "ping": "ping",
  "placeholder": "placeholder",
  "poster": "poster",
  "preload": "preload",
  "radioGroup": "radiogroup",
  "readOnly": "readonly",
  "rel": "rel",
  "required": "required",
  "role": "role",
  "rows": "rows",
  "rowSpan": "rowspan",
  "sandbox": "sandbox",
  "scope": "scope",
  "scoped": "scoped",
  "scrolling": "scrolling",
  "seamless": "seamless",
  "selected": "selected",
  "shape": "shape",
  "size": "size",
  "sizes": "sizes",
  "sortable": "sortable",
  "span": "span",
  "spellCheck": "spellcheck",
  "src": "src",
  "srcDoc": "srcdoc",
  "srcSet": "srcset",
  "start": "start",
  "step": "step",
  "style": "style",
  "tabIndex": "tabindex",
  "target": "target",
  "title": "title",
  "translate": "translate",
  "type": "type",
  "typeMustMatch": "typemustmatch",
  "useMap": "usemap",
  "value": "value",
  "width": "width",
  "wmode": "wmode",
  "wrap": "wrap"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = refHandler;

var _setStyles = __webpack_require__(9);

var _setStyles2 = _interopRequireDefault(_setStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Handle the ref callback on the rendered React component
 * 
 * @param {HTMLElement} node - the DOM element of the rendered React component
 * @param {Object} props - the props of the React component
 */
function refHandler(node, props) {
    if (node) {
        if (props.styles) {
            _setStyles2.default.apply(undefined, [node].concat(_toConsumableArray(props.styles)));
        }

        if (props.init) {
            props.init(node);
        }
    }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Group = exports.Wrapper = exports.SubComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(4);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _getHtmlProps = __webpack_require__(5);

var _getHtmlProps2 = _interopRequireDefault(_getHtmlProps);

var _getModifiersFromProps = __webpack_require__(6);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _getModulesFromProps = __webpack_require__(7);

var _getModulesFromProps2 = _interopRequireDefault(_getModulesFromProps);

var _getParam = __webpack_require__(32);

var _getParam2 = _interopRequireDefault(_getParam);

var _renderModifiers = __webpack_require__(8);

var _renderModifiers2 = _interopRequireDefault(_renderModifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Render a Synergy component
 *
 * @extends React.Component
 */
var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component(props, context) {
        _classCallCheck(this, Component);

        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props, context));

        _this.config = context.config || {};
        _this.tag = props.component || props.tag || (_htmlTags2.default.includes(props.name) ? props.name : 'div');
        _this.module = props.module || context.module;
        _this.propModifiers = (0, _renderModifiers2.default)((0, _getModifiersFromProps2.default)(props, Synergy.CssClassProps));
        _this.contextModifiers = (0, _renderModifiers2.default)((0, _getModifiersFromProps2.default)(context.props && context.props[props.name], Synergy.CssClassProps));
        _this.passedModifiers = (0, _renderModifiers2.default)(props.modifiers);
        _this.modifiers = _this.propModifiers + _this.passedModifiers + _this.contextModifiers;
        _this.classes = (0, _getModulesFromProps2.default)(props, props.className ? ' ' + props.className : '');
        _this.selector = (_this.module + '_' + (props.name + _this.modifiers) + _this.classes).replace(/,/g, '_');

        _this.getEventHandlers([props, _this.config[props.name] ? _this.config[props.name] : {}]);

        if (props.href) _this.tag = 'a';
        return _this;
    }

    _createClass(Component, [{
        key: 'getEventHandlers',
        value: function getEventHandlers(properties) {
            var _this2 = this;

            this.eventHandlers = this.eventHandlers || {};

            if (properties.constructor === Array) {
                properties.forEach(function (group) {
                    return _this2.getEventHandlers(group);
                });
            } else for (var key in properties) {
                var value = properties[key];

                if (key.indexOf('event') === 0 || key.indexOf('[') === 0) {
                    this.eventHandlers[(0, _getParam2.default)(key)] = Synergy.modules[this.module].methods[value];
                }

                if (Object.keys(window).includes(key.toLowerCase())) {
                    if (typeof value === 'function') {
                        this.eventHandlers[key] = value;
                    } else {
                        //@TODO be smarter here, don't hardcode any properties
                        if (key !== 'name') {
                            this.eventHandlers[key] = Synergy.modules[this.module].methods[value];
                        }
                    }
                }

                if (key.indexOf('modifier') === 0 || key.indexOf('-') === 0) {
                    if (this.props.modifiers && this.props.modifiers.includes((0, _getParam2.default)(key))) {
                        this.getEventHandlers(value);
                    }
                }
            }
        }
    }, {
        key: 'isNested',
        value: function isNested() {
            try {
                return this.constructor.name === this.props.children.type.name;
            } catch (error) {
                return false;
            }
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                component: this.props.name
            };
        }
    }, {
        key: 'renderTag',
        value: function renderTag(props) {
            return _react2.default.createElement(
                this.tag,
                _extends({}, (0, _getHtmlProps2.default)(props), this.eventHandlers, {

                    className: this.selector,
                    'data-component': props.name
                }),
                props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.isNested()) {
                var parentKeys = Object.keys(this.props).sort();
                var childKeys = Object.keys(this.props.children.props).sort();
                var sameAsParent = this.props.name === this.props.children.props.name;

                if (JSON.stringify(parentKeys) === JSON.stringify(childKeys) && sameAsParent) {
                    return this.props.children;
                }

                return this.renderTag(this.props);
            } else return this.renderTag(this.props);
        }
    }]);

    return Component;
}(_react2.default.Component);

exports.default = Component;


Component.contextTypes = {
    module: _propTypes2.default.string,
    modifiers: _propTypes2.default.array,
    component: _propTypes2.default.string,
    subComponent: _propTypes2.default.array,
    config: _propTypes2.default.object,
    props: _propTypes2.default.object
};

Component.childContextTypes = {
    component: _propTypes2.default.string
};

var SubComponent = exports.SubComponent = function (_Component) {
    _inherits(SubComponent, _Component);

    function SubComponent(props, context) {
        _classCallCheck(this, SubComponent);

        var _this3 = _possibleConstructorReturn(this, (SubComponent.__proto__ || Object.getPrototypeOf(SubComponent)).call(this, props, context));

        var namespace = context.component + '_' + props.name;

        if (context.subComponent) {
            namespace = namespace + '_' + context.subComponent.join('_');
        }

        _this3.selector = _this3.module + '_' + (namespace + _this3.modifiers) + _this3.classes;
        return _this3;
    }

    _createClass(SubComponent, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var subComponents = this.context.subComponent || [];

            subComponents.push(this.props.name);

            return {
                subComponent: subComponents
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderTag(this.props);
        }
    }]);

    return SubComponent;
}(Component);

SubComponent.childContextTypes = {
    subComponent: _propTypes2.default.array
};

var Wrapper = exports.Wrapper = function (_Component2) {
    _inherits(Wrapper, _Component2);

    function Wrapper(props, context) {
        _classCallCheck(this, Wrapper);

        var _this4 = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props, context));

        _this4.module = props.module;
        _this4.namespace = props.name || 'wrapper';
        _this4.modifiers = (0, _renderModifiers2.default)(props.modifiers);
        _this4.classes = props.className ? ' ' + props.className : '';

        if (!_this4.module) {
            if (props.children.length) {
                _this4.module = props.children[0].props.name;
            } else {
                _this4.module = props.children.props.name;
            }
        }

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(function (prop) {
            if (Object.keys(props).includes(prop)) {
                _this4.classes = classes + ' ' + prop;
            }
        });
        return _this4;
    }

    _createClass(Wrapper, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.module + '_' + (this.namespace + this.modifiers) + this.classes },
                this.props.children
            );
        }
    }]);

    return Wrapper;
}(Component);

var Group = exports.Group = function (_Component3) {
    _inherits(Group, _Component3);

    function Group() {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
    }

    _createClass(Group, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Wrapper,
                _extends({ name: 'group' }, this.props),
                this.props.children
            );
        }
    }]);

    return Group;
}(Component);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getParam;
function getParam(property) {
    if (property.match(/\((.*?)\)/)) {
        return property.match(/\((.*?)\)/)[1].replace(/'/g, '');
    }
    if (property.match(/\[(.*?)\]/)) {
        return property.match(/\[(.*?)\]/)[1];
    }
    if (property.indexOf('-') === 0) {
        return property.slice(1);
    }
}

/***/ })
/******/ ]);