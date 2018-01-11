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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = exports.component = exports.stripModifiers = exports.isValidSelector = exports.getModuleName = exports.getModifiers = exports.getGlue = exports.getDomNodes = exports.getComponents = exports.getBlockName = exports.deepextend = exports.global = undefined;

var _deepExtend = __webpack_require__(1);

Object.defineProperty(exports, 'deepextend', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_deepExtend).default;
    }
});
exports.default = Synergy;

var _tools = __webpack_require__(2);

var _utilities = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///****************************************************************
/// Synergy - https://github.com/esr360/Synergy
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

var global = exports.global = {
    'module-namespace': '',
    'component-glue': '_',
    'modifier-glue': '-'

    // Vendor
    //*****************************************************************

};

// Tools & Utilities
//*****************************************************************

// Tools


// Utilities
exports.getBlockName = _utilities.getBlockName;
exports.getComponents = _utilities.getComponents;
exports.getDomNodes = _utilities.getDomNodes;
exports.getGlue = _utilities.getGlue;
exports.getModifiers = _utilities.getModifiers;
exports.getModuleName = _utilities.getModuleName;
exports.isValidSelector = _utilities.isValidSelector;
exports.stripModifiers = _utilities.stripModifiers;
exports.component = _tools.component;
exports.modifier = _tools.modifier;

/**
 * Synergy Module
 * 
 * @author @esr360 <http://twitter.com/esr360>
 * 
 * @module Synergy
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els - Synergy selector to match elements
 * @param {Function} [callback] - function to call on matched elements
 * @param {Object} [config] - config to use when calling the function
 * @param {Object} [custom] - custom config to use in callback
 * @param {Object} [parser] - custom parser to use for configuration
 */

function Synergy(els, callback, config, custom, parser) {

    var componentGlue = (0, _utilities.getGlue)('component', custom);
    var modifierGlue = (0, _utilities.getGlue)('modifier', custom);
    var module = (0, _utilities.getModuleName)(els, config);
    var domNodes = (0, _utilities.getDomNodes)(els, module, modifierGlue);
    var components = (0, _utilities.getComponents)(domNodes, module, componentGlue);
    var modifiers = (0, _utilities.getModifiers)(domNodes, module, modifierGlue);
    var options = (0, _utilities.getOptions)({ config: config, parser: parser, custom: custom });

    (0, _utilities.setDomNodeAttributes)({ domNodes: domNodes, module: module });

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = function (query, operator) {
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;
        return (0, _tools.modifier)({
            glue: modifierGlue,
            target: target,
            module: module,
            modifiers: modifiers,
            query: query,
            operator: operator
        });
    };

    exports.component = function (query, operator) {
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;
        return (0, _tools.component)({
            target: target,
            module: module,
            components: components,
            query: query,
            operator: operator,
            componentGlue: componentGlue,
            modifierGlue: modifierGlue
        });
    };

    if (callback) {
        if (domNodes instanceof HTMLElement) {
            return callback(domNodes, options, exports);
        } else {
            domNodes.forEach(function (el) {
                return callback(el, options, exports);
            });
        }
    }

    return exports;
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
 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
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
		var x = new Buffer(val.length);
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
			src = target[key]; // source value
			val = obj[key]; // new value

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
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(3);

Object.defineProperty(exports, 'component', {
  enumerable: true,
  get: function get() {
    return _component.component;
  }
});

var _modifier = __webpack_require__(4);

Object.defineProperty(exports, 'modifier', {
  enumerable: true,
  get: function get() {
    return _modifier.modifier;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = component;

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

    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getModuleName(target) + options.componentGlue + options.query;
    var components = Synergy.getComponents(target, options.module, options.componentGlue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.modifierGlue + '"]';
    var querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            var childComponent = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleComponent(options.module, target, options.query, 'set', options.componentGlue);
                } else if (options.operator === 'unset') {
                    return toggleComponent(options.module, target, options.query, 'unset', options.componentGlue);
                } else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childComponent.length !== 0 && !(options.target instanceof NodeList)) {
                return childComponent;
            }

            var matchesQuery = false;

            components.forEach(function (component) {
                if (options.query === component) {
                    matchesQuery = true;

                    return matchesQuery;
                }
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return querySelector.length === 0 ? false : querySelector;
        }
    }

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = modifier;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getBlockName(target, options.module, options.glue) + options.glue + options.query;
    var modifiers = Synergy.getModifiers(target, options.module, options.glue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.glue + '"]';
    var querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            var childModifier = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleModifier(options.module, target, options.query, 'set', options.glue);
                } else if (options.operator === 'unset') {
                    return toggleModifier(options.module, target, options.query, 'unset', options.glue);
                } else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childModifier.length !== 0) return childModifier;

            var matchesQuery = false;

            var query = modifiers !== options.modifiers ? [options.query] : options.modifiers;

            modifiers.forEach(function (modifier) {
                query.forEach(function (queryModifier) {
                    if (queryModifier === modifier) {
                        matchesQuery = true;

                        return matchesQuery;
                    }
                });
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return querySelector.length === 0 ? false : querySelector;
        }
    }

    return modifiers;
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
    return Array.prototype.forEach.call(target.classList, function (className) {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);
            target.classList.add(operator === 'set' ? className + glue + query : className.replace(glue + query, ''));
        }
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getBlockName = __webpack_require__(6);

Object.defineProperty(exports, 'getBlockName', {
  enumerable: true,
  get: function get() {
    return _getBlockName.getBlockName;
  }
});

var _getComponents = __webpack_require__(7);

Object.defineProperty(exports, 'getComponents', {
  enumerable: true,
  get: function get() {
    return _getComponents.getComponents;
  }
});

var _getDomNodes = __webpack_require__(8);

Object.defineProperty(exports, 'getDomNodes', {
  enumerable: true,
  get: function get() {
    return _getDomNodes.getDomNodes;
  }
});

var _getGlue = __webpack_require__(9);

Object.defineProperty(exports, 'getGlue', {
  enumerable: true,
  get: function get() {
    return _getGlue.getGlue;
  }
});

var _getModifiers = __webpack_require__(11);

Object.defineProperty(exports, 'getModifiers', {
  enumerable: true,
  get: function get() {
    return _getModifiers.getModifiers;
  }
});

var _getModuleName = __webpack_require__(12);

Object.defineProperty(exports, 'getModuleName', {
  enumerable: true,
  get: function get() {
    return _getModuleName.getModuleName;
  }
});

var _isValidSelector = __webpack_require__(13);

Object.defineProperty(exports, 'isValidSelector', {
  enumerable: true,
  get: function get() {
    return _isValidSelector.isValidSelector;
  }
});

var _stripModifiers = __webpack_require__(14);

Object.defineProperty(exports, 'stripModifiers', {
  enumerable: true,
  get: function get() {
    return _stripModifiers.stripModifiers;
  }
});

var _getOptions = __webpack_require__(15);

Object.defineProperty(exports, 'getOptions', {
  enumerable: true,
  get: function get() {
    return _getOptions.getOptions;
  }
});

var _setDomNodeAttributes = __webpack_require__(16);

Object.defineProperty(exports, 'setDomNodeAttributes', {
  enumerable: true,
  get: function get() {
    return _setDomNodeAttributes.setDomNodeAttributes;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockName = getBlockName;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @param {*} block
 * @param {String} module
 */
function getBlockName(block, module, modifierGlue) {
    var blockName = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className, module, modifierGlue);
            }
        });
    }

    return blockName;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponents = getComponents;

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

    return components;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDomNodes = getDomNodes;

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
    if (!Synergy.isValidSelector) {
        console.warn('Synergy:getDomNodes - Synergy is missing `isValidSelector()`');
    }

    var domNodes = void 0;

    if (typeof query === 'string') {
        if (Synergy.isValidSelector(query) && document.querySelectorAll(query).length && query !== module) {
            domNodes = document.querySelectorAll(query);
        } else {
            domNodes = document.querySelectorAll('.' + module + ', [class*="' + module + modifierGlue + '"]');
        }
    } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
        if (query[0] instanceof NodeList || query[0] instanceof HTMLElement) {
            domNodes = query[0];
        } else if (typeof query[0] === 'string') {
            domNodes = document.querySelectorAll('.' + query[0] + ', [class*="' + query[0] + modifierGlue + '"]');
        }
    }

    return domNodes || query;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGlue = getGlue;
/**
 * Get glue
 * 
 * @param {String} type - ['component'|'modifier]
 * @param {Object} custom
 * @param {string} glue
 */
function getGlue(type, custom, glue) {
    var defaultGlue = type === 'modifier' ? '-' : '_';

    if (custom && custom.modifierGlue) {
        glue = custom[type + 'Glue'].replace(/'/g, '');
    } else if (window.APPUI && window.APPUI.global && window.APPUI.global[type + '-glue']) {
        glue = window.APPUI.global[type + '-glue'].replace(/'/g, '');
    } else {
        glue = global[type + '-glue'] || defaultGlue;
    }

    return glue;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getModifiers = getModifiers;

var _synergy = __webpack_require__(0);

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
function getModifiers(block, module, glue) {
    var modifiers = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                modifiers = className.split(glue).slice(1);
            }
        });
    }

    return modifiers;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getModuleName = getModuleName;
/**
 * Attempt to retrieve possible module name from query
 * 
 * @param {String|Object|HTMLElement} query - query to retrieve module name
 * @param {Object} [config] - object to retrieve module name
 */
function getModuleName(query, config, componentGlue) {
    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidSelector = isValidSelector;
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stripModifiers = stripModifiers;

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOptions = getOptions;

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setDomNodeAttributes = setDomNodeAttributes;
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
            return el.setAttribute('data-module', module);
        });
    } else if (domNodes instanceof HTMLElement) {
        domNodes.setAttribute('data-module', module);
    }
}

/***/ })
/******/ ]);