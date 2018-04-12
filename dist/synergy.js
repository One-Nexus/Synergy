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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = exports.component = exports.stripModifiers = exports.isValidSelector = exports.getModuleName = exports.getModifiers = exports.getGlue = exports.getDomNodes = exports.getComponents = exports.getBlockName = exports.getChildrenWithoutSelector = exports.deepextend = exports.global = undefined;

var _deepExtend = __webpack_require__(4);

Object.defineProperty(exports, 'deepextend', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_deepExtend).default;
    }
});

var _getChildrenWithoutParentSelector = __webpack_require__(13);

Object.defineProperty(exports, 'getChildrenWithoutSelector', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getChildrenWithoutParentSelector).default;
    }
});
exports.default = Synergy;

var _tools = __webpack_require__(14);

var _utilities = __webpack_require__(17);

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

    var isModuleElement = function isModuleElement() {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(function (node) {
                if ((0, _utilities.parents)(node, '[data-module]').length) {
                    return false;
                }
            });

            return true;
        }
        if (domNodes instanceof HTMLElement && !(0, _utilities.parents)(domNodes, '[data-module]').length) {
            return true;
        }
        if (typeof els === 'string' && els.match(/^[a-zA-Z]*$/)) {
            return true;
        }

        return false;
    };

    if (isModuleElement()) (0, _utilities.setDomNodeAttributes)({ domNodes: domNodes, module: module });

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

    if (callback && typeof domNodes !== 'string') {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(function (el) {
                return callback(el, options, exports);
            });
        } else {
            return callback(domNodes, options, exports);
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


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("ReactDOM");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(30)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(33)();
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(34);


/***/ }),
/* 10 */
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
function getModifiersFromProps(props, blacklist) {
    var modifiers = [];

    for (var prop in props) {
        var _ref = [prop, props[prop]],
            key = _ref[0],
            value = _ref[1];

        // if prop is name of existing module, do not include in list

        if (Synergy.modules && prop[0] === prop[0].toUpperCase()) {
            if (Object.keys(Synergy.modules).includes(prop.toLowerCase())) {
                continue;
            }
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
/* 11 */
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
/* 12 */
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

var _module = __webpack_require__(29);

Object.defineProperty(exports, 'Module', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_module).default;
  }
});
Object.defineProperty(exports, 'Constructor', {
  enumerable: true,
  get: function get() {
    return _module.Constructor;
  }
});

var _component = __webpack_require__(35);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(15);

Object.defineProperty(exports, 'component', {
  enumerable: true,
  get: function get() {
    return _component.component;
  }
});

var _modifier = __webpack_require__(16);

Object.defineProperty(exports, 'modifier', {
  enumerable: true,
  get: function get() {
    return _modifier.modifier;
  }
});

/***/ }),
/* 15 */
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
    // setup constants
    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getModuleName(target) + options.componentGlue + options.query;
    var components = Synergy.getComponents(target, options.module, options.componentGlue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.modifierGlue + '"]';
    var querySelector = document.querySelectorAll(selector);
    var moduleSelector = '.' + options.module + ', [class*="' + options.module + options.modifierGlue + '"]';
    var childComponent = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);

    if (options.query && target instanceof HTMLElement) {
        // add/remove a component
        if (options.operator) {
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
/* 16 */
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
    // setup constants
    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getBlockName(target, options.module, options.glue) + options.glue + options.query;
    var modifiers = Synergy.getModifiers(target, options.module, options.glue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.glue + '"]';
    var querySelector = document.querySelectorAll(selector);
    var moduleSelector = '.' + options.module + ', [class*="' + options.module + options.glue + '"]';
    var childModifier = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);
    var query = modifiers !== options.modifiers ? [options.query] : options.modifiers;

    if (typeof options.query !== 'undefined' && target instanceof HTMLElement) {
        // add/remove a modifier
        if (options.operator) {
            if (options.operator === 'set') {
                return toggleModifier(options.module, target, options.query, 'set', options.glue);
            } else if (options.operator === 'unset') {
                return toggleModifier(options.module, target, options.query, 'unset', options.glue);
            } else if (options.operator === 'add' || options.operator === 'remove') {
                return target.classList[options.operator](namespace);
            }
        }

        // get children with modifier
        if (childModifier.length !== 0) return childModifier;

        // determine if element has modifier
        var matchesQuery = false;

        modifiers.forEach(function (modifier) {
            query.forEach(function (queryModifier) {
                if (queryModifier === modifier) return matchesQuery = true;
            });
        });

        if (matchesQuery || options.operator == 'isset') return matchesQuery;

        // get all components with modifier from document 
        return querySelector.length === 0 ? false : querySelector;
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
    return Array.prototype.forEach.call(target.classList, function (className) {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);

            target.classList.add(operator === 'set' ? className + glue + query : className.replace(glue + query, ''));
        }
    });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getBlockName = __webpack_require__(18);

Object.defineProperty(exports, 'getBlockName', {
  enumerable: true,
  get: function get() {
    return _getBlockName.getBlockName;
  }
});

var _getComponents = __webpack_require__(19);

Object.defineProperty(exports, 'getComponents', {
  enumerable: true,
  get: function get() {
    return _getComponents.getComponents;
  }
});

var _getDomNodes = __webpack_require__(20);

Object.defineProperty(exports, 'getDomNodes', {
  enumerable: true,
  get: function get() {
    return _getDomNodes.getDomNodes;
  }
});

var _getGlue = __webpack_require__(21);

Object.defineProperty(exports, 'getGlue', {
  enumerable: true,
  get: function get() {
    return _getGlue.getGlue;
  }
});

var _getModifiers = __webpack_require__(22);

Object.defineProperty(exports, 'getModifiers', {
  enumerable: true,
  get: function get() {
    return _getModifiers.getModifiers;
  }
});

var _getModuleName = __webpack_require__(23);

Object.defineProperty(exports, 'getModuleName', {
  enumerable: true,
  get: function get() {
    return _getModuleName.getModuleName;
  }
});

var _isValidSelector = __webpack_require__(24);

Object.defineProperty(exports, 'isValidSelector', {
  enumerable: true,
  get: function get() {
    return _isValidSelector.isValidSelector;
  }
});

var _parents = __webpack_require__(25);

Object.defineProperty(exports, 'parents', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parents).default;
  }
});

var _stripModifiers = __webpack_require__(26);

Object.defineProperty(exports, 'stripModifiers', {
  enumerable: true,
  get: function get() {
    return _stripModifiers.stripModifiers;
  }
});

var _getOptions = __webpack_require__(27);

Object.defineProperty(exports, 'getOptions', {
  enumerable: true,
  get: function get() {
    return _getOptions.getOptions;
  }
});

var _setDomNodeAttributes = __webpack_require__(28);

Object.defineProperty(exports, 'setDomNodeAttributes', {
  enumerable: true,
  get: function get() {
    return _setDomNodeAttributes.setDomNodeAttributes;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
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
/* 19 */
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

    // remove modifiers from components
    if (components) {
        components = components.map(function (component) {
            return component.split('-')[0];
        });
    }

    return components;
}

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGlue = getGlue;

var _synergy = __webpack_require__(0);

/**
 * Get glue
 * 
 * @param {String} type - [{'component'|'modifier'}]
 * @param {Object} custom
 * @param {string} glue
 */
function getGlue(type, custom, glue) {

    if (custom && custom[type + 'Glue']) {
        glue = custom[type + 'Glue'].replace(/'/g, '');
    } else if (typeof Synergy !== 'undefined' && Synergy.config && Synergy.config[type + '-glue']) {
        glue = Synergy.config[type + '-glue'];
    } else if (_synergy.global && _synergy.global[type + '-glue']) {
        glue = _synergy.global[type + '-glue'];
    }

    return glue;
}

/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOptions = getOptions;

var _deepExtend = __webpack_require__(4);

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
/* 28 */
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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Constructor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(9);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _getModifiersFromProps = __webpack_require__(10);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _renderModifiers = __webpack_require__(11);

var _renderModifiers2 = _interopRequireDefault(_renderModifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Construct a Synergy module
 */
var Constructor = exports.Constructor = function (_React$Component) {
    _inherits(Constructor, _React$Component);

    function Constructor(props, context) {
        _classCallCheck(this, Constructor);

        var _this = _possibleConstructorReturn(this, (Constructor.__proto__ || Object.getPrototypeOf(Constructor)).call(this, props, context));

        _this.config = global.UI && global.UI.config ? global.UI.config[_this.props.name] : null;
        _this.methods = _this.config ? _this.config.methods || [] : [];

        _this.methods.forEach(function (method) {
            _this[method] = Synergy.modules[_this.props.name].methods[method];
        });
        return _this;
    }

    return Constructor;
}(_react2.default.Component);

/**
 * Render a Synergy module
 *
 * @extends React.Component
 */


var Module = function (_React$Component2) {
    _inherits(Module, _React$Component2);

    function Module(props, context) {
        _classCallCheck(this, Module);

        var _this2 = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this, props, context));

        _this2.tag = _this2.props.tag || (_htmlTags2.default.includes(_this2.props.name) ? _this2.props.name : 'div');
        _this2.propModifiers = (0, _renderModifiers2.default)((0, _getModifiersFromProps2.default)(_this2.props, Synergy.CssClassProps));
        _this2.passedModifiers = (0, _renderModifiers2.default)(_this2.props.modifiers);
        _this2.modifiers = _this2.propModifiers + _this2.passedModifiers;
        _this2.classes = _this2.props.className ? ' ' + _this2.props.className : '';
        _this2.classNames = _this2.props.name + _this2.modifiers + _this2.classes;

        if (Synergy.modules) {
            // determine if any passed prop is a module - if so, add it to `classes`
            Object.entries(_this2.props).forEach(function (prop) {
                if (prop[0][0] === prop[0][0].toUpperCase()) {
                    if (Object.keys(Synergy.modules).includes(prop[0].toLowerCase())) {
                        var module = prop[0].toLowerCase();

                        var modifiers = '';

                        if (prop[1].constructor === Array) {
                            modifiers = '-' + prop[1].join('-');
                        } else if (typeof prop[1] === 'string') {
                            modifiers = '-' + prop[1];
                        }

                        _this2.classes = _this2.classes + ' ' + module + modifiers;
                    }
                }
            });

            if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(function (prop) {
                if (Object.keys(_this2.props).includes(prop)) {
                    _this2.classNames = _this2.classNames + ' ' + prop;
                }
            });
        }
        return _this2;
    }

    /**
     * Content to pass to children components
     */


    _createClass(Module, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                module: this.props.name,
                config: global.UI && global.UI.config ? global.UI.config[this.props.name] : null
            };
        }

        /**
         */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (Synergy.modules[this.props.name] && Synergy.modules[this.props.name].methods) {
                if (Synergy.modules[this.props.name].methods.init) {
                    Synergy.modules[this.props.name].methods.init(_reactDom2.default.findDOMNode(this), this.config);
                }
            }
        }

        /**
         * Render the module
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                this.tag,
                {
                    id: this.props.id,
                    className: this.classNames,
                    'data-module': this.props.name,
                    href: this.props.href
                },
                this.props.children
            );
        }
    }]);

    return Module;
}(_react2.default.Component);

exports.default = Module;


Module.childContextTypes = {
    module: _propTypes2.default.string,
    config: _propTypes2.default.object
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(8);
var assign = __webpack_require__(31);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(32);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Group = exports.Wrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(9);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _htmlElementAttributes = __webpack_require__(36);

var _htmlElementAttributes2 = _interopRequireDefault(_htmlElementAttributes);

var _getParam = __webpack_require__(37);

var _getParam2 = _interopRequireDefault(_getParam);

var _getModifiersFromProps = __webpack_require__(10);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _renderModifiers = __webpack_require__(11);

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
        _this.tag = _this.props.tag || (_htmlTags2.default.includes(_this.props.name) ? _this.props.name : 'div');
        _this.module = _this.props.module || context.module;
        _this.modifiers = (0, _renderModifiers2.default)(_this.props.modifiers);
        _this.classes = _this.props.className ? ' ' + _this.props.className : '';
        _this.selector = _this.module + '_' + (_this.props.name + _this.modifiers) + _this.classes;

        _this.getEventHandlers([_this.props, _this.config[_this.props.name] ? _this.config[_this.props.name] : {}]);
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
        key: 'getHtmlProps',
        value: function getHtmlProps(props) {
            var HtmlProps = {};

            for (var prop in props) {
                if (prop === 'name') {
                    continue;
                } else if (prop === 'modifiers') {
                    continue;
                } else if (prop === 'elementname') {
                    HtmlProps.name = props[prop];
                } else {
                    HtmlProps[prop] = props[prop];
                }
            };

            return HtmlProps;
        }
    }, {
        key: 'render',
        value: function render() {
            var renderTag = _react2.default.createElement(
                this.tag,
                _extends({}, this.getHtmlProps(this.props), this.eventHandlers, { className: this.selector }),
                this.props.children
            );

            if (this.isNested()) {
                var parentKeys = Object.keys(this.props).sort();
                var childKeys = Object.keys(this.props.children.props).sort();

                if (JSON.stringify(parentKeys) === JSON.stringify(childKeys)) {
                    return this.props.children;
                } else return renderTag;
            } else return renderTag;
        }
    }]);

    return Component;
}(_react2.default.Component);

exports.default = Component;


Component.contextTypes = {
    module: _propTypes2.default.string,
    config: _propTypes2.default.object
};

var Wrapper = exports.Wrapper = function (_Component) {
    _inherits(Wrapper, _Component);

    function Wrapper(props, context) {
        _classCallCheck(this, Wrapper);

        var _this3 = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props, context));

        _this3.module = _this3.props.module;
        _this3.namespace = _this3.props.name || 'wrapper';
        _this3.modifiers = (0, _renderModifiers2.default)(_this3.props.modifiers);
        _this3.classes = _this3.props.className ? ' ' + _this3.props.className : '';

        if (!_this3.module) {
            if (_this3.props.children.length) {
                _this3.module = _this3.props.children[0].props.name;
            } else {
                _this3.module = _this3.props.children.props.name;
            }
        }

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(function (prop) {
            if (Object.keys(_this3.props).includes(prop)) {
                _this3.classes = _this3.classes + ' ' + prop;
            }
        });
        return _this3;
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

var Group = exports.Group = function (_Component2) {
    _inherits(Group, _Component2);

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
/* 36 */
/***/ (function(module, exports) {

module.exports = {"*":["accesskey","class","contenteditable","dir","draggable","hidden","id","is","itemid","itemprop","itemref","itemscope","itemtype","lang","slot","spellcheck","style","tabindex","title","translate"],"a":["accesskey","charset","coords","download","href","hreflang","name","ping","referrerpolicy","rel","rev","shape","tabindex","target","type"],"abbr":["title"],"applet":["align","alt","archive","code","codebase","height","hspace","name","object","vspace","width"],"area":["accesskey","alt","coords","download","href","hreflang","nohref","ping","referrerpolicy","rel","shape","tabindex","target","type"],"audio":["autoplay","controls","crossorigin","loop","mediagroup","muted","preload","src"],"base":["href","target"],"basefont":["color","face","size"],"bdo":["dir"],"blockquote":["cite"],"body":["alink","background","bgcolor","link","text","vlink"],"br":["clear"],"button":["accesskey","autofocus","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","tabindex","type","value"],"canvas":["height","width"],"caption":["align"],"col":["align","char","charoff","span","valign","width"],"colgroup":["align","char","charoff","span","valign","width"],"data":["value"],"del":["cite","datetime"],"details":["open"],"dfn":["title"],"dialog":["open"],"dir":["compact"],"div":["align"],"dl":["compact"],"embed":["height","src","type","width"],"fieldset":["disabled","form","name"],"font":["color","face","size"],"form":["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"],"frame":["frameborder","longdesc","marginheight","marginwidth","name","noresize","scrolling","src"],"frameset":["cols","rows"],"h1":["align"],"h2":["align"],"h3":["align"],"h4":["align"],"h5":["align"],"h6":["align"],"head":["profile"],"hr":["align","noshade","size","width"],"html":["manifest","version"],"iframe":["align","allowfullscreen","allowpaymentrequest","allowusermedia","frameborder","height","longdesc","marginheight","marginwidth","name","referrerpolicy","sandbox","scrolling","src","srcdoc","width"],"img":["align","alt","border","crossorigin","height","hspace","ismap","longdesc","name","referrerpolicy","sizes","src","srcset","usemap","vspace","width"],"input":["accept","accesskey","align","alt","autocomplete","autofocus","checked","dirname","disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","height","inputmode","ismap","list","max","maxlength","min","minlength","multiple","name","pattern","placeholder","readonly","required","size","src","step","tabindex","title","type","usemap","value","width"],"ins":["cite","datetime"],"isindex":["prompt"],"keygen":["autofocus","challenge","disabled","form","keytype","name"],"label":["accesskey","for","form"],"legend":["accesskey","align"],"li":["type","value"],"link":["as","charset","color","crossorigin","href","hreflang","integrity","media","nonce","referrerpolicy","rel","rev","scope","sizes","target","title","type","updateviacache","workertype"],"map":["name"],"menu":["compact"],"meta":["charset","content","http-equiv","name","scheme"],"meter":["high","low","max","min","optimum","value"],"object":["align","archive","border","classid","codebase","codetype","data","declare","form","height","hspace","name","standby","tabindex","type","typemustmatch","usemap","vspace","width"],"ol":["compact","reversed","start","type"],"optgroup":["disabled","label"],"option":["disabled","label","selected","value"],"output":["for","form","name"],"p":["align"],"param":["name","type","value","valuetype"],"pre":["width"],"progress":["max","value"],"q":["cite"],"script":["async","charset","crossorigin","defer","integrity","language","nomodule","nonce","src","type"],"select":["autocomplete","autofocus","disabled","form","multiple","name","required","size","tabindex"],"slot":["name"],"source":["media","sizes","src","srcset","type"],"style":["media","nonce","title","type"],"table":["align","bgcolor","border","cellpadding","cellspacing","frame","rules","summary","width"],"tbody":["align","char","charoff","valign"],"td":["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"],"textarea":["accesskey","autocomplete","autofocus","cols","dirname","disabled","form","inputmode","maxlength","minlength","name","placeholder","readonly","required","rows","tabindex","wrap"],"tfoot":["align","char","charoff","valign"],"th":["abbr","align","axis","bgcolor","char","charoff","colspan","headers","height","nowrap","rowspan","scope","valign","width"],"thead":["align","char","charoff","valign"],"time":["datetime"],"tr":["align","bgcolor","char","charoff","valign"],"track":["default","kind","label","src","srclang"],"ul":["compact","type"],"video":["autoplay","controls","crossorigin","height","loop","mediagroup","muted","playsinline","poster","preload","src","width"]}

/***/ }),
/* 37 */
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