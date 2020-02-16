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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = ["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"];

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "Module", function() { return module_Module; });
__webpack_require__.d(src_namespaceObject, "Wrapper", function() { return Wrapper; });
__webpack_require__.d(src_namespaceObject, "Group", function() { return Group; });
__webpack_require__.d(src_namespaceObject, "Component", function() { return component_Component; });
__webpack_require__.d(src_namespaceObject, "SubComponent", function() { return SubComponent; });
__webpack_require__.d(src_namespaceObject, "Provider", function() { return provider; });
__webpack_require__.d(src_namespaceObject, "styled", function() { return components_styled; });
__webpack_require__.d(src_namespaceObject, "useTheme", function() { return useTheme; });
__webpack_require__.d(src_namespaceObject, "useConfig", function() { return useConfig; });
__webpack_require__.d(src_namespaceObject, "useUtils", function() { return useUtils; });
__webpack_require__.d(src_namespaceObject, "evalTheme", function() { return evalTheme; });

// EXTERNAL MODULE: ./node_modules/html-void-elements/index.json
var html_void_elements = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/utilities/evalTheme.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function evalTheme(theme) {
  var core = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : theme;
  if (!theme) return;
  if (Array.isArray(theme)) return theme;
  var result = {};
  Object.entries(theme).forEach(function (entry) {
    var key = entry[0];
    var value = entry[1];

    if (_typeof(value) === 'object') {
      result[key] = evalTheme(value, core);
    } else {
      if (typeof value === 'function') {
        result[key] = value(core);
      } else {
        result[key] = value;
      }
    }
  });
  return result;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/utilities/getModifiersFromProps.js
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
    var firstLetter = prop[0]; // if prop is name of module, do not include in list
    // UPDATE: in retrospect, this actually would be useful, so commenting out
    // if (firstLetter === firstLetter.toUpperCase()) {
    //   continue;
    // }

    if (prop === 'subComponent') {
      continue;
    } // @TODO add these (with above subComponent) to whitelist array instead


    if (prop === 'permeable') {
      continue;
    }

    if (typeof value === 'boolean' && value) {
      if (blacklist.indexOf(key) < 0) {
        modifiers.push(key);
      }
    }
  }

  return modifiers;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/utilities/deepMergeObjects.js
function deepMergeObjects() {
  if (true) {
    var _Synergy;

    return (_Synergy = Synergy).deepextend.apply(_Synergy, arguments);
  } else { var _Synergy2; }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/utilities/mergeThemes.js

function mergeThemes() {
  var THEME = {};

  for (var _len = arguments.length, themes = new Array(_len), _key = 0; _key < _len; _key++) {
    themes[_key] = arguments[_key];
  }

  [].concat(themes).forEach(function (theme) {
    if (typeof theme === 'function') {
      THEME = deepMergeObjects(THEME, theme(THEME));
    } else {
      THEME = deepMergeObjects(THEME, theme);
    }
  });
  return THEME;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/components/provider.jsx
if (typeof provider_React === 'undefined') {
  var provider_React = __webpack_require__(0);
}

var UIContext = provider_React.createContext({
  theme: {},
  utils: {}
});
/* harmony default export */ var provider = (function (props) {
  return provider_React.createElement(UIContext.Provider, {
    value: {
      theme: props.theme,
      utils: props.utils
    }
  }, props.children);
});
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/components/module.jsx
function module_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { module_typeof = function _typeof(obj) { return typeof obj; }; } else { module_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return module_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (module_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








if (typeof module_React === 'undefined') {
  var module_React = __webpack_require__(0);
}
/** spoof env process to assist bundle size */


if (typeof process === 'undefined') window.process = {
  env: {}
  /** Used for generating unique module ID's */

};
var increment = 1;
/** Create a context object */

var ModuleContext = module_React.createContext({});
/** Render a Synergy module */

var module_Module =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Module, _React$Component);

  function Module(props) {
    var _ref, _props$singleClass, _ref2, _props$generateClasse, _ref3, _props$generateDataAt;

    var _this;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Module);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Module).call(this, props));
    increment++;
    var Synergy = window.Synergy || {};
    _this.REF = module_React.createRef();
    _this.DATA = props.styles;
    _this.THEME = evalTheme(mergeThemes(context.theme, window.theme, props.theme));
    _this.UTILS = context.utils || window.utils;
    var LUCIDDEFAULTS = {
      generateClasses: true,
      generateDataAttributes: true,
      singleClass: false
    };
    var GLOBAL_MODULE = window[props.name];
    var RAW_DEFAULTS = GLOBAL_MODULE && GLOBAL_MODULE.defaultProps && GLOBAL_MODULE.defaultProps.config;
    var PROPCONFIG = typeof props.config === 'function' ? props.config(_this.THEME) : props.config;
    var DEFAULTS = typeof RAW_DEFAULTS === 'function' ? RAW_DEFAULTS(_this.THEME) : RAW_DEFAULTS;
    var THEMECONFIG = _this.THEME.modules && _this.THEME.modules[props.name];

    if (THEMECONFIG && JSON.stringify(DEFAULTS) === JSON.stringify(PROPCONFIG)) {
      PROPCONFIG = null;
    }

    if (PROPCONFIG && PROPCONFIG.displace) {
      DEFAULTS = {}, THEMECONFIG = {};
    }

    _this.CONFIG = deepMergeObjects(LUCIDDEFAULTS, DEFAULTS, THEMECONFIG, PROPCONFIG);
    _this.ID = props.id || "module-".concat(increment);
    _this.NAMESPACE = _this.CONFIG.name || props.name || props.tag || _this.ID;
    _this.TAG = props.href && 'a' || props.component || props.tag || 'div';
    _this.MODIFIERGLUE = props.modifierGlue || _this.CONFIG.modifierGlue || Synergy.modifierGlue || '--';
    _this.COMPONENTGLUE = props.componentGlue || _this.CONFIG.componentGlue || Synergy.componentGlue || '__';
    _this.SINGLECLASS = (_ref = (_props$singleClass = props.singleClass) !== null && _props$singleClass !== void 0 ? _props$singleClass : _this.THEME.singleClass) !== null && _ref !== void 0 ? _ref : _this.CONFIG.singleClass;
    _this.GENERATECLASSES = (_ref2 = (_props$generateClasse = props.generateClasses) !== null && _props$generateClasse !== void 0 ? _props$generateClasse : _this.THEME.generateClasses) !== null && _ref2 !== void 0 ? _ref2 : _this.CONFIG.generateClasses;
    _this.GENERATEDATAATTRIBUTES = (_ref3 = (_props$generateDataAt = props.generateDataAttributes) !== null && _props$generateDataAt !== void 0 ? _props$generateDataAt : _this.THEME.generateDataAttributes) !== null && _ref3 !== void 0 ? _ref3 : _this.CONFIG.generateDataAttributes;
    _this.state = {};
    return _this;
  }
  /** Get Attributes */


  _createClass(Module, [{
    key: "getEventHandlers",
    value: function getEventHandlers(properties) {
      var eventHandlers = {};

      for (var prop in properties) {
        if (Object.keys(window).includes(prop.toLowerCase())) {
          if (prop === 'theme') {
            continue;
          }

          if (prop !== 'name') {
            eventHandlers[prop] = properties[prop];
          }
        }
      }

      return eventHandlers;
    }
  }, {
    key: "getInputAttributes",
    value: function getInputAttributes(properties) {
      var inputAttributes = {};
      var whitelist = ['type', 'value', 'readonly', 'disabled', 'size', 'maxlength', 'autocomplete', 'autofocus', 'min', 'max', 'multiple', 'pattern', 'placeholder', 'required', 'step'];

      for (var prop in properties) {
        if (whitelist.includes(prop)) {
          inputAttributes[prop] = properties[prop];
        }
      }

      return inputAttributes;
    }
  }, {
    key: "getDataAttributes",
    value: function getDataAttributes(properties) {
      var dataAttributes = {};

      for (var prop in properties) {
        if (prop.indexOf('data-') === 0) {
          dataAttributes[prop] = properties[prop];
        }
      }

      return dataAttributes;
    }
    /** Styling */

  }, {
    key: "stylesConfig",
    value: function stylesConfig() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$theme = _ref4.theme,
          theme = _ref4$theme === void 0 ? this.THEME : _ref4$theme,
          _ref4$config = _ref4.config,
          config = _ref4$config === void 0 ? this.CONFIG : _ref4$config,
          _ref4$context = _ref4.context,
          context = _ref4$context === void 0 ? this.context : _ref4$context,
          _ref4$utils = _ref4.utils,
          utils = _ref4$utils === void 0 ? this.UTILS : _ref4$utils;

      return {
        theme: theme,
        config: config,
        context: context,
        utils: utils,
        state: _objectSpread({}, this.state, this.props),
        element: this.REF.current || document.createElement('span')
      };
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof styles === 'function') {
        styles = styles(options);
      }

      if (styles instanceof Array) {
        styles = this.flattenStyles(styles, options);
      }

      return styles;
    }
  }, {
    key: "flattenStyles",
    value: function flattenStyles(styles, options) {
      return styles.reduce(function (accumulator, item) {
        if (!item) return accumulator;

        if (typeof item === 'function') {
          item = item(options);
        }

        Object.entries(item).forEach(function (entry) {
          var key = entry[0];
          var val = entry[1];

          if (accumulator.hasOwnProperty(key)) {
            accumulator[key] = accumulator[key] instanceof Array ? accumulator[key].concat(val) : [accumulator[key], val];
          } else {
            accumulator[key] = val;
          }
        });
        return accumulator;
      }, {});
    }
  }, {
    key: "paint",
    value: function paint(node) {
      var _this2 = this;

      var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;

      var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          prevNamespace = _ref5.prevNamespace,
          prevContext = _ref5.prevContext;

      if (typeof styles === 'function') {
        styles = styles(options);
      }

      if (styles instanceof Array) {
        return styles.forEach(function (style) {
          return _this2.paint(node, style, options);
        });
      }
      /**
       * Cell Query
       */


      Object.entries(styles).forEach(function (style) {
        var key = style[0];
        var value = style[1];
        /**
         * Determine if current node is queried modifier/state
         */

        if (key.indexOf('is-') === 0) {
          var CONTEXT = key.replace('is-', '');

          if (options.state.name === ':before' || options.state.name === ':after') {
            options = options.context[options.state.referer];
          }

          if (options[CONTEXT] || options.state[CONTEXT]) {
            return _this2.paint(node, value, options);
          }

          return;
        }
        /**
         * Determine if parent module/block is queried modifier/state
         */


        if (key.indexOf('$-is-') === 0 || key.indexOf('$:') === 0) {
          var MODULE = options.context.NAMESPACE;

          var _CONTEXT = key.indexOf('$:') === 0 ? key.slice(1, key.length) : key.slice(5, key.length);

          if (options.context[MODULE][_CONTEXT]) {
            return _this2.paint(node, value, options);
          }

          return;
        }
        /**
         * Determine if previously specified parent component is queried modifier/state
         */


        if (key.indexOf('and-is-') === 0 || key.indexOf('and:') === 0) {
          var _CONTEXT2 = key.indexOf('and:') === 0 ? key.replace('and', '') : key.replace('and-is-', '');

          if (options.context[prevNamespace][_CONTEXT2]) {
            return _this2.paint(node, value, options, {
              prevNamespace: prevNamespace
            });
          }

          return;
        }
        /**
         * Determine if specified parent component is queried modifier/state
         */


        if (key.indexOf('-is-') > -1 || key.indexOf(':') > 0) {
          var COMPONENT = key.indexOf(':') > 0 ? key.slice(0, key.indexOf(':')) : key.slice(0, key.indexOf('-is-'));

          var _CONTEXT3 = key.indexOf(':') > 0 ? key.slice(key.indexOf(':'), key.length) : key.slice(key.indexOf('-is-') + 4, key.length);

          if (options.context[COMPONENT][_CONTEXT3]) {
            return _this2.paint(node, value, options, {
              prevNamespace: COMPONENT
            });
          }

          return;
        }
        /**
         * Determine if current node is a child of the queried component/module
         */


        if (key.indexOf('in-') === 0) {
          var _COMPONENT = key.replace('in-', '');

          if (options.context[_COMPONENT]) {
            return _this2.paint(node, value, options, {
              prevNamespace: _COMPONENT
            });
          }

          return;
        }
        /**
         * Key defines pseudo-state
         */


        if (key.indexOf(':') === 0) {
          if (options.state[key]) {
            return _this2.paint(node, value, options);
          }
        }

        if (typeof value === 'function') {
          try {
            value = value(node.style[key]);
          } catch (error) {
            return error;
          }
        }

        if (value instanceof Array) {
          node = value[0], styles = value[1];

          try {
            return _this2.paint(node(), styles, options);
          } catch (error) {
            return error;
          }
        }

        try {
          node.style[key] = value;
        } catch (error) {
          return error;
        }
      });
      var WRAPPERSTYLES = this.STYLES.wrapper || this.STYLES.group;

      if (WRAPPERSTYLES && this.SETWRAPPERSTYLES) {
        this.SETWRAPPERSTYLES(WRAPPERSTYLES);
      }
    }
  }, {
    key: "setStyleStates",
    value: function setStyleStates() {
      var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      if (!this.REF.current) return;
      var _ref6 = [this.REF.current, this.REF.current.parentNode],
          CURRENT = _ref6[0],
          PARENT = _ref6[1];
      var _ref7 = [prevState.isFirstChild, CURRENT === PARENT.firstChild],
          prevIsFirstChild = _ref7[0],
          isFirstChild = _ref7[1];
      var _ref8 = [prevState.isLastChild, CURRENT === PARENT.lastChild],
          prevIsLastChild = _ref8[0],
          isLastChild = _ref8[1];

      if (prevIsFirstChild !== isFirstChild) {
        this.setState({
          isFirstChild: isFirstChild
        });
      }

      if (prevIsLastChild !== isLastChild) {
        this.setState({
          isLastChild: isLastChild
        });
      }

      if (!this.StyleStatesApplied) {
        this.StyleStatesApplied = true;
      }
    }
    /** Event Handlers */

  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(event) {
      this.props.onMouseEnter && this.props.onMouseEnter(event);
      this.setState({
        isHovered: true,
        ':hover': true
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(event) {
      this.props.onMouseLeave && this.props.onMouseLeave(event);
      this.setState({
        isHovered: false,
        ':hover': false
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.props.onFocus && this.props.onFocus(event);
      this.setState({
        isFocused: true,
        ':focus': true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.props.onBlur && this.props.onBlur(event);
      this.setState({
        isFocused: false,
        ':focus': false
      });
    }
    /** Lifecycle Methods */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.REF.current) {
        this.setStyleStates();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.length && JSON.stringify(this.state) === JSON.stringify(prevState)) {
        this.setStyleStates(prevState);
      }

      this.paint(this.REF.current, this.DATA, this.stylesConfig());
    }
  }, {
    key: "render",
    value: function render() {
      var _objectSpread2,
          _this3 = this;

      var props = this.props;
      var MODIFIERGLUE = this.MODIFIERGLUE,
          COMPONENTGLUE = this.COMPONENTGLUE,
          SINGLECLASS = this.SINGLECLASS,
          GENERATECLASSES = this.GENERATECLASSES,
          GENERATEDATAATTRIBUTES = this.GENERATEDATAATTRIBUTES;
      /** */

      var _ref9 = [props.className ? props.className + ' ' : '', this.NAMESPACE, []],
          CLASSES = _ref9[0],
          SELECTOR = _ref9[1],
          MODIFIERS = _ref9[2];
      MODIFIERS.push(props.modifiers);
      MODIFIERS = MODIFIERS.concat(getModifiersFromProps(props));
      MODIFIERS = MODIFIERS.filter(function (item, pos) {
        return MODIFIERS.indexOf(item) === pos;
      });
      MODIFIERS = MODIFIERS.filter(Boolean);

      if (SINGLECLASS) {
        SELECTOR += MODIFIERS.length ? MODIFIERGLUE + MODIFIERS.join(MODIFIERGLUE) : '';
      } else {
        MODIFIERS.forEach(function (MODIFIER) {
          return CLASSES += SELECTOR + MODIFIERGLUE + MODIFIER + ' ';
        });
      }

      CLASSES += SELECTOR;
      /** */

      var ATTRIBUTES = _objectSpread({}, this.getDataAttributes(props), this.getEventHandlers(props), this.getInputAttributes(props), props.attributes, (_objectSpread2 = {
        onMouseEnter: this.handleMouseEnter.bind(this)
      }, _defineProperty(_objectSpread2, "onMouseEnter", this.handleMouseEnter.bind(this)), _defineProperty(_objectSpread2, "onFocus", this.handleFocus.bind(this)), _defineProperty(_objectSpread2, "onBlur", this.handleBlur.bind(this)), _defineProperty(_objectSpread2, "className", GENERATECLASSES ? CLASSES : null), _defineProperty(_objectSpread2, 'data-module', GENERATEDATAATTRIBUTES ? this.NAMESPACE : null), _objectSpread2));

      return module_React.createElement(ModuleContext.Consumer, null, function (moduleContext) {
        _this3.DATA = _this3.DATA || props.styles;
        _this3.SETWRAPPERSTYLES = moduleContext.setWrapperStyles;
        _this3.STYLES = _this3.getStyles(_this3.DATA, _this3.stylesConfig({
          context: moduleContext
        }));
        var before = _this3.STYLES[':before'];
        var after = _this3.STYLES[':after'];
        /** */

        var contextValues = _objectSpread({}, moduleContext, _this3.state, props, _defineProperty({
          THEME: _this3.THEME,
          CONFIG: _this3.CONFIG,
          STYLES: _objectSpread({}, moduleContext.STYLES, _this3.STYLES),
          MODIFIERGLUE: MODIFIERGLUE,
          COMPONENTGLUE: COMPONENTGLUE,
          SINGLECLASS: SINGLECLASS,
          GENERATECLASSES: GENERATECLASSES,
          GENERATEDATAATTRIBUTES: GENERATEDATAATTRIBUTES
        }, _this3.NAMESPACE, _objectSpread({}, _this3.state, props)), !props.permeable && {
          NAMESPACE: _this3.NAMESPACE
        }, {
          SETWRAPPERSTYLES: _this3.props.setWrapperStyles
        });

        var content = typeof props.content !== 'boolean' && props.content || props.render || props.children;

        if (typeof content === 'function') {
          content = content({
            theme: _this3.THEME,
            utils: _this3.UTILS,
            config: _this3.CONFIG,
            context: contextValues
          });
        }

        return module_React.createElement(ModuleContext.Provider, {
          value: contextValues
        }, html_void_elements.includes(_this3.TAG) ? module_React.createElement(_this3.TAG, _extends({
          id: props.id ? _this3.ID : null,
          ref: _this3.REF
        }, ATTRIBUTES)) : module_React.createElement(_this3.TAG, _extends({
          id: props.id ? _this3.ID : null,
          ref: _this3.REF
        }, ATTRIBUTES), before && module_React.createElement(Component, {
          name: ":before",
          referer: _this3.NAMESPACE
        }, before.content), content, after && module_React.createElement(Component, {
          name: ":after",
          referer: _this3.NAMESPACE
        }, after.content)));
      });
    }
    /** Static Methods/Properties */

  }]);

  return Module;
}(module_React.Component);

_defineProperty(module_Module, "contextType", UIContext);


// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/components/component.jsx
function component_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { component_typeof = function _typeof(obj) { return typeof obj; }; } else { component_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return component_typeof(obj); }

function component_extends() { component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return component_extends.apply(this, arguments); }

function component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { component_defineProperty(target, key, source[key]); }); } return target; }

function component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function component_createClass(Constructor, protoProps, staticProps) { if (protoProps) component_defineProperties(Constructor.prototype, protoProps); if (staticProps) component_defineProperties(Constructor, staticProps); return Constructor; }

function component_possibleConstructorReturn(self, call) { if (call && (component_typeof(call) === "object" || typeof call === "function")) { return call; } return component_assertThisInitialized(self); }

function component_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function component_getPrototypeOf(o) { component_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return component_getPrototypeOf(o); }

function component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) component_setPrototypeOf(subClass, superClass); }

function component_setPrototypeOf(o, p) { component_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return component_setPrototypeOf(o, p); }

function component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





if (typeof component_React === 'undefined') {
  var component_React = __webpack_require__(0);
}
/**
 * Render a Synergy component
 */


var component_Component =
/*#__PURE__*/
function (_Module) {
  component_inherits(Component, _Module);

  function Component(props) {
    var _this;

    component_classCallCheck(this, Component);

    _this = component_possibleConstructorReturn(this, component_getPrototypeOf(Component).call(this, props));
    _this.REF = component_React.createRef();
    _this.NAMESPACE = props.name || props.tag;
    return _this;
  }

  component_createClass(Component, [{
    key: "render",
    value: function render() {
      var _objectSpread2;

      /** */
      this.DATA = this.context.STYLES[this.NAMESPACE];
      this.SETWRAPPERSTYLES = this.context.setWrapperStyles;
      var before, after;

      if (this.StyleStatesApplied) {
        this.STYLES = this.getStyles(this.DATA, this.stylesConfig({
          theme: this.context.THEME,
          config: this.context.CONFIG
        }));
        before = this.STYLES[':before'];
        after = this.STYLES[':after'];
      }

      var props = this.props;
      var _this$context = this.context,
          MODIFIERGLUE = _this$context.MODIFIERGLUE,
          COMPONENTGLUE = _this$context.COMPONENTGLUE;
      var TAG = props.href && 'a' || props.component || props.tag || 'div';
      var STRICT_NAMESPACE = (props.subComponent ? this.context.STRICT_NAMESPACE : this.context.NAMESPACE) + COMPONENTGLUE + this.NAMESPACE;
      /** */

      var CLASSES = props.className ? props.className + ' ' : '',
          MODIFIERS = [];
      var SELECTOR = props.subComponent ? STRICT_NAMESPACE : this.context.NAMESPACE + COMPONENTGLUE + this.NAMESPACE;
      MODIFIERS.push(props.modifiers);
      MODIFIERS = MODIFIERS.concat(getModifiersFromProps(props));
      MODIFIERS = MODIFIERS.filter(function (item, pos) {
        return MODIFIERS.indexOf(item) === pos;
      });
      MODIFIERS = MODIFIERS.filter(Boolean);

      if (this.context.SINGLECLASS) {
        SELECTOR += MODIFIERS.length ? MODIFIERGLUE + MODIFIERS.join(MODIFIERGLUE) : '';
      } else {
        MODIFIERS.forEach(function (MODIFIER) {
          return CLASSES += SELECTOR + MODIFIERGLUE + MODIFIER + ' ';
        });
      }

      CLASSES += SELECTOR;
      /** */

      var ATTRIBUTES = component_objectSpread({}, this.getDataAttributes(props), this.getEventHandlers(props), this.getInputAttributes(props), props.attributes, {
        onMouseEnter: this.handleMouseEnter.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        onFocus: this.handleFocus.bind(this),
        onBlur: this.handleBlur.bind(this),
        className: this.context.GENERATECLASSES ? CLASSES : null,
        'data-component': this.context.GENERATEDATAATTRIBUTES ? this.NAMESPACE : null,
        'data-sub-component': this.context.GENERATEDATAATTRIBUTES ? props.subComponent : null
        /** */

      });

      var contextValues = component_objectSpread({}, this.context, this.state, props, (_objectSpread2 = {}, component_defineProperty(_objectSpread2, this.NAMESPACE, component_objectSpread({}, this.state, props, {
        state: component_objectSpread({}, this.state, props),
        context: this.context
      })), component_defineProperty(_objectSpread2, "STYLES", component_objectSpread({}, this.context.STYLES, this.STYLES)), component_defineProperty(_objectSpread2, "STRICT_NAMESPACE", STRICT_NAMESPACE), _objectSpread2));

      return component_React.createElement(ModuleContext.Provider, {
        value: contextValues
      }, html_void_elements.includes(TAG) ? component_React.createElement(TAG, component_extends({
        ref: this.REF
      }, ATTRIBUTES)) : component_React.createElement(TAG, component_extends({
        ref: this.REF
      }, ATTRIBUTES), before && component_React.createElement(Component, {
        name: ":before",
        referer: this.NAMESPACE
      }, before.content), props.content || props.children, after && component_React.createElement(Component, {
        name: ":after",
        referer: this.NAMESPACE
      }, after.content)));
    }
  }]);

  return Component;
}(module_Module);

component_defineProperty(component_Component, "contextType", ModuleContext);


var SubComponent = function SubComponent(props) {
  return component_React.createElement(component_Component, component_extends({
    subComponent: true
  }, props), props.children);
};
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/components/wrapper.jsx
function wrapper_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { wrapper_typeof = function _typeof(obj) { return typeof obj; }; } else { wrapper_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return wrapper_typeof(obj); }

function wrapper_extends() { wrapper_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wrapper_extends.apply(this, arguments); }

function wrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function wrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function wrapper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapper_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapper_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapper_defineProperties(Constructor, staticProps); return Constructor; }

function wrapper_possibleConstructorReturn(self, call) { if (call && (wrapper_typeof(call) === "object" || typeof call === "function")) { return call; } return wrapper_assertThisInitialized(self); }

function wrapper_getPrototypeOf(o) { wrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return wrapper_getPrototypeOf(o); }

function wrapper_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function wrapper_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) wrapper_setPrototypeOf(subClass, superClass); }

function wrapper_setPrototypeOf(o, p) { wrapper_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return wrapper_setPrototypeOf(o, p); }

if (typeof wrapper_React === 'undefined') {
  var wrapper_React = __webpack_require__(0);
}

var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  wrapper_inherits(Wrapper, _React$Component);

  function Wrapper(props) {
    var _this;

    wrapper_classCallCheck(this, Wrapper);

    _this = wrapper_possibleConstructorReturn(this, wrapper_getPrototypeOf(Wrapper).call(this, props));
    _this.state = {};
    _this.applyStyles = _this.applyStyles.bind(wrapper_assertThisInitialized(_this));
    return _this;
  }

  wrapper_createClass(Wrapper, [{
    key: "applyStyles",
    value: function applyStyles(styles) {
      if (JSON.stringify(styles) !== JSON.stringify(this.state.styles)) {
        this.setState({
          styles: styles
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _PROPS;

      var NAMESPACE = this.props.name || 'wrapper';
      var CHILD = this.props.children.length ? this.props.children[0] : this.props.children;
      var MODULE = this.props.module || CHILD.props.name || CHILD.type.name;
      var PROPS = (_PROPS = {}, wrapper_defineProperty(_PROPS, MODULE, true), wrapper_defineProperty(_PROPS, "styles", this.state.styles), wrapper_defineProperty(_PROPS, "setWrapperStyles", this.applyStyles), wrapper_defineProperty(_PROPS, "permeable", true), _PROPS);
      return wrapper_React.createElement(Module, wrapper_extends({
        name: NAMESPACE
      }, this.props, PROPS), this.props.children);
    }
  }]);

  return Wrapper;
}(wrapper_React.Component);


var Group = function Group(props) {
  return wrapper_React.createElement(Wrapper, wrapper_extends({
    name: "group"
  }, props), props.children);
};
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/hooks/useTheme.js


/* harmony default export */ var useTheme = (function () {
  var _React$useContext = React.useContext(UIContext),
      theme = _React$useContext.theme;

  return evalTheme(theme);
});
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/hooks/useConfig.js

/* harmony default export */ var useConfig = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var evaluatedConfig = typeof config === 'function' ? config(theme) : config;
  var themeConfig = theme.modules && theme.modules[evaluatedConfig.name] || {};
  return deepMergeObjects(evaluatedConfig, themeConfig);
});
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/hooks/useUtils.js

/* harmony default export */ var useUtils = (function () {
  var _React$useContext = React.useContext(UIContext),
      utils = _React$useContext.utils;

  return utils;
});
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/components/styled.jsx
function styled_extends() { styled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return styled_extends.apply(this, arguments); }



if (typeof styled_React === 'undefined') {
  var styled_React = __webpack_require__(0);
}

var styled_styled = function styled(name, props) {
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';
  return styled_React.createElement(component_Component, styled_extends({
    name: name,
    tag: tag
  }, props), props.children);
};

/* harmony default export */ var components_styled = (styled_styled);
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/index.js










// CONCATENATED MODULE: ./src/Container.js
function Container_extends() { Container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Container_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



if (typeof Container_React === 'undefined') {
  var Container_React = __webpack_require__(0);
}

/* harmony default export */ var Container = (function (_ref) {
  var globals = _ref.globals,
      modules = _ref.modules,
      theme = _ref.theme,
      utils = _ref.utils,
      options = _ref.options,
      callback = _ref.callback,
      element = _ref.element,
      props = _objectWithoutProperties(_ref, ["globals", "modules", "theme", "utils", "options", "callback", "element"]);

  Object.assign(window, globals);
  init({
    modules: modules,
    theme: theme,
    utils: utils,
    options: options,
    callback: callback
  });
  var Tag = element || typeof Provider !== 'undefined' ? Provider : 'div';
  var render = props.render || props.children;
  return Container_React.createElement(Tag, Container_extends({
    theme: theme,
    utils: utils
  }, props), typeof render === 'function' ? render({
    modules: modules,
    options: options,
    theme: theme,
    utils: utils
  }) : render);
});
// CONCATENATED MODULE: ./src/deepMergeObjects.js
function deepMergeObjects_deepMergeObjects() {
  if (Object({"SYNERGY":true}).ONE_NEXUS) {
    var _ONE_NEXUS;

    return (_ONE_NEXUS = ONE_NEXUS).deepextend.apply(_ONE_NEXUS, arguments);
  } else if (typeof ONE_NEXUS !== 'undefined' && typeof ONE_NEXUS.deepextend === 'function') {
    var _ONE_NEXUS2;

    return (_ONE_NEXUS2 = ONE_NEXUS).deepextend.apply(_ONE_NEXUS2, arguments);
  } else {
    return __webpack_require__(2).apply(void 0, arguments);
  }
}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return src_Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return src_Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return src_Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return src_Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubComponent", function() { return src_SubComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return src_Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return src_useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConfig", function() { return src_useConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return src_useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalTheme", function() { return src_evalTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* concated harmony reexport Container */__webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var src_Synergy = window.Synergy || {};
Object.assign(src_Synergy, src_namespaceObject, {
  deepextend: deepMergeObjects_deepMergeObjects,
  init: init,
  minWidth: function minWidth(query) {
    return window.matchMedia("(min-width: ".concat(query)).matches;
  },
  maxWidth: function maxWidth(query) {
    return window.matchMedia("(max-width: ".concat(query)).matches;
  }
});
var src_Module = src_Synergy.Module,
    src_Wrapper = src_Synergy.Wrapper,
    src_Group = src_Synergy.Group,
    src_Component = src_Synergy.Component,
    src_SubComponent = src_Synergy.SubComponent,
    src_Provider = src_Synergy.Provider,
    src_useTheme = src_Synergy.useTheme,
    src_useConfig = src_Synergy.useConfig,
    src_useUtils = src_Synergy.useUtils,
    src_evalTheme = src_Synergy.evalTheme;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Synergy);

function init(_ref) {
  var modules = _ref.modules,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      utils = _ref.utils,
      callback = _ref.callback;
  var defaults = {
    attachLucidComponentsToWindow: true,
    attachModulesToWindow: true,
    attachThemeToWindow: false,
    attachUtilsToWindow: false,
    attachSynergyToWindow: true
  };
  options = src_objectSpread({}, defaults, options);
  Object.assign(src_Synergy, options);

  if (options.attachLucidComponentsToWindow) {
    Object.assign(window, {
      Module: src_Module,
      Wrapper: src_Wrapper,
      Group: src_Group,
      Component: src_Component,
      SubComponent: src_SubComponent,
      Provider: src_Provider
    });
  }

  if (options.attachModulesToWindow) {
    Object.assign(window, modules);
  }

  if (options.attachThemeToWindow) {
    window.theme = theme;
  }

  if (options.attachUtilsToWindow) {
    window.utils = utils;
  }

  if (options.attachSynergyToWindow) {
    window.Synergy = src_Synergy;
  }

  if (typeof callback === 'function') {
    callback({
      modules: modules,
      options: options,
      theme: theme,
      utils: utils
    });
  }

  return {
    modules: modules,
    options: options,
    theme: theme,
    utils: utils
  };
}

/***/ })
/******/ ]);