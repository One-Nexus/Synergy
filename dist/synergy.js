(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Module; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_evalConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _utilities_getModifiersFromProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _utilities_mergeThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/** spoof env process to assist bundle size */

if (typeof process === 'undefined') window.process = {
  env: {}
  /** Used for generating unique module ID's */

};
var increment = 1;
/** Create a context object */

var ModuleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
/** Render a Synergy module */

var Module =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Module, _React$Component);

  function Module(props, context) {
    var _this;

    _classCallCheck(this, Module);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Module).call(this, props));
    increment++;
    var Synergy = window.Synergy || {};
    _this.REF = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.DATA = props.styles;
    _this.THEME = Object(_utilities_mergeThemes__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(context, window.theme, props.theme);
    var LUCIDDEFAULTS = {
      generateClasses: true,
      generateDataAttributes: true
    };
    var THEMECONFIG = _this.THEME.modules && Object(_utilities_evalConfig__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this.THEME.modules[props.name]);
    var DEFAULTS = props.config;

    if (window.Synergy) {
      var SYNERGY_MODULE = window[props.name] || {};
      var config = SYNERGY_MODULE.config,
          styles = SYNERGY_MODULE.styles;
      if (config) DEFAULTS = config;
      if (styles) _this.DATA = styles;
    }

    DEFAULTS = typeof DEFAULTS === 'function' ? DEFAULTS(_this.THEME) : DEFAULTS;
    _this.CONFIG = Module.config(LUCIDDEFAULTS, DEFAULTS, THEMECONFIG);
    _this.ID = props.id || "module-".concat(increment);
    _this.NAMESPACE = _this.CONFIG.name || props.name || props.tag || _this.ID;
    _this.TAG = props.href && 'a' || props.component || props.tag || 'div';
    _this.MODIFIERGLUE = props.modifierGlue || _this.CONFIG.modifierGlue || Synergy.modifierGlue || '--';
    _this.COMPONENTGLUE = props.componentGlue || _this.CONFIG.componentGlue || Synergy.componentGlue || '__';
    _this.SINGLECLASS = props.singleClass || _this.CONFIG.singleClass || false;
    _this.GENERATECLASSES = props.generateClasses || _this.CONFIG.generateClasses;
    _this.GENERATEDATAATTRIBUTES = props.generateDataAttributes || _this.CONFIG.generateDataAttributes;
    _this.state = {
      isHovered: false,
      isFirstChild: false,
      isLastChild: false,
      before: null,
      after: null
    };
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
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$theme = _ref.theme,
          theme = _ref$theme === void 0 ? this.THEME : _ref$theme,
          _ref$config = _ref.config,
          config = _ref$config === void 0 ? this.CONFIG : _ref$config,
          _ref$context = _ref.context,
          context = _ref$context === void 0 ? this.context : _ref$context;

      return {
        theme: theme,
        config: config,
        context: context,
        state: _objectSpread({}, this.state, this.props),
        element: this.REF.current
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

      if (typeof styles === 'function') {
        styles = styles(options);
      }

      if (styles instanceof Array) {
        return styles.forEach(function (style) {
          return _this2.paint(node, style, options);
        });
      }

      Object.entries(styles).forEach(function (style) {
        var key = style[0];
        var value = style[1];

        if ((key === ':hover' || key === 'is-hovered') && options.state.isHovered) {
          return _this2.paint(node, value, options);
        }

        if (key.indexOf('with-') === 0 && options.context[key.replace('with-', '')]) {
          return _this2.paint(node, value, options.context[key.replace('with-', '')]);
        }

        if (key.indexOf('is-') === 0) {
          if (options[key.replace('is-', '')] || options.state[key.replace('is-', '')]) {
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
    }
  }, {
    key: "setStyleStates",
    value: function setStyleStates() {
      var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      if (!this.REF.current) return;
      var _ref2 = [this.REF.current, this.REF.current.parentNode],
          CURRENT = _ref2[0],
          PARENT = _ref2[1];
      var _ref3 = [prevState.isFirstChild, CURRENT === PARENT.firstChild],
          prevIsFirstChild = _ref3[0],
          isFirstChild = _ref3[1];
      var _ref4 = [prevState.isLastChild, CURRENT === PARENT.lastChild],
          prevIsLastChild = _ref4[0],
          isLastChild = _ref4[1];
      var _ref5 = [prevState.before, this.STYLES[':before']],
          prevBefore = _ref5[0],
          before = _ref5[1];
      var _ref6 = [prevState.after, this.STYLES[':after']],
          prevAfter = _ref6[0],
          after = _ref6[1];

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

      if (JSON.stringify(prevBefore) !== JSON.stringify(before)) {
        this.setState({
          before: before
        });
      }

      if (JSON.stringify(prevAfter) !== JSON.stringify(after)) {
        this.setState({
          after: after
        });
      }
    }
    /** Event Handlers */

  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(event) {
      this.props.onMouseEnter && this.props.onMouseEnter(event);
      this.setState({
        isHovered: true
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(event) {
      this.props.onMouseLeave && this.props.onMouseLeave(event);
      this.setState({
        isHovered: false
      });
    }
    /** Lifecycle Methods */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.REF.current) {
        this.setStyleStates();
        this.paint(this.REF.current, this.DATA, this.stylesConfig());
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.setStyleStates(prevState);
      this.paint(this.REF.current, this.DATA, this.stylesConfig());
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var MODIFIERGLUE = this.MODIFIERGLUE,
          COMPONENTGLUE = this.COMPONENTGLUE,
          SINGLECLASS = this.SINGLECLASS,
          GENERATECLASSES = this.GENERATECLASSES,
          GENERATEDATAATTRIBUTES = this.GENERATEDATAATTRIBUTES;
      /** */

      var _ref7 = [props.className ? props.className + ' ' : '', this.NAMESPACE, []],
          CLASSES = _ref7[0],
          SELECTOR = _ref7[1],
          MODIFIERS = _ref7[2];
      MODIFIERS.push(props.modifiers);
      MODIFIERS = MODIFIERS.concat(Object(_utilities_getModifiersFromProps__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props));
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

      var _this$state = this.state,
          before = _this$state.before,
          after = _this$state.after;

      var ATTRIBUTES = _objectSpread({}, this.getDataAttributes(props), this.getEventHandlers(props), props.attributes, {
        onMouseEnter: this.handleMouseEnter.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        className: GENERATECLASSES ? CLASSES : null,
        'data-module': GENERATEDATAATTRIBUTES ? this.NAMESPACE : null
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModuleContext.Consumer, null, function (moduleContext) {
        var _objectSpread2;

        _this3.DATA = _this3.DATA || props.styles;
        _this3.STYLES = _this3.getStyles(_this3.DATA, _this3.stylesConfig({
          context: moduleContext
        }));
        var WRAPPERSTYLES = _this3.STYLES.wrapper || _this3.STYLES.group;

        if (WRAPPERSTYLES && moduleContext.setWrapperStyles) {
          moduleContext.setWrapperStyles(WRAPPERSTYLES);
        }
        /** */


        var contextValues = _objectSpread({}, moduleContext, _this3.state, props, (_objectSpread2 = {
          THEME: _this3.THEME,
          CONFIG: _this3.CONFIG,
          STYLES: _objectSpread({}, moduleContext.STYLES, _this3.STYLES),
          MODIFIERGLUE: MODIFIERGLUE,
          COMPONENTGLUE: COMPONENTGLUE,
          SINGLECLASS: SINGLECLASS,
          GENERATECLASSES: GENERATECLASSES,
          GENERATEDATAATTRIBUTES: GENERATEDATAATTRIBUTES
        }, _defineProperty(_objectSpread2, _this3.NAMESPACE, _objectSpread({}, _this3.state, props)), _defineProperty(_objectSpread2, "NAMESPACE", _this3.NAMESPACE), _defineProperty(_objectSpread2, "SETWRAPPERSTYLES", _this3.props.setWrapperStyles), _objectSpread2));

        var content = props.content || props.render || props.children;

        if (typeof content === 'function') {
          content = content({
            theme: _this3.THEME,
            config: _this3.CONFIG,
            context: contextValues
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModuleContext.Provider, {
          value: contextValues
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_this3.TAG, _extends({
          id: props.id ? _this3.ID : null,
          ref: _this3.REF
        }, ATTRIBUTES), before && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
          name: ":before"
        }, before.content), content, after && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
          name: ":after"
        }, after.content)));
      });
    }
    /** Static Methods/Properties */

  }]);

  return Module;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Module, "contextType", _provider__WEBPACK_IMPORTED_MODULE_4__[/* ThemeContext */ "a"]);

_defineProperty(Module, "config", function () {
  if (true) {
    var _Synergy;

    return (_Synergy = Synergy).config.apply(_Synergy, arguments);
  } else { var _Synergy2; }
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
/* harmony default export */ __webpack_exports__["b"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeContext.Provider, {
    value: props.theme
  }, props.children);
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getModifiersFromProps; });
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
    }

    if (typeof value === 'boolean' && value) {
      if (blacklist.indexOf(key) < 0) {
        modifiers.push(key);
      }
    }
  }

  return modifiers;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return evalConfig; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function evalConfig(THEME) {
  if (!THEME) return;
  Object.entries(THEME).forEach(function (entry) {
    var key = entry[0];
    var value = entry[1];

    if (_typeof(value) === 'object') {
      return evalConfig(value);
    }

    if (typeof value === 'function') {
      THEME[key] = value(THEME);
    }
  });
  return THEME;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeThemes; });
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
/** */

function deepMergeObjects() {
  if (true) {
    var _Synergy;

    return (_Synergy = Synergy).config.apply(_Synergy, arguments);
  } else { var _Synergy2; }
}

/***/ }),
/* 6 */
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isSpecificValue(val) {
  return val instanceof Buffer || val instanceof Date || val instanceof RegExp ? true : false;
}

function cloneSpecificValue(val) {
  if (val instanceof Buffer) {
    var x = Buffer.alloc ? Buffer.alloc(val.length) : new Buffer(val.length);
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
    if (_typeof(item) === 'object' && item !== null) {
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


var deepExtend = module.exports = function ()
/*obj_1, [obj_2], [obj_N]*/
{
  if (arguments.length < 1 || _typeof(arguments[0]) !== 'object') {
    return false;
  }

  if (arguments.length < 2) {
    return arguments[0];
  }

  var target = arguments[0]; // convert arguments to array and cut off target object

  var args = Array.prototype.slice.call(arguments, 1);
  var val, src, clone;
  args.forEach(function (obj) {
    // skip argument if isn't an object, is null, or is an array
    if (_typeof(obj) !== 'object' || obj === null || Array.isArray(obj)) {
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
      } else if (_typeof(val) !== 'object' || val === null) {
        target[key] = val;
        return; // just clone arrays (and recursive clone objects inside)
      } else if (Array.isArray(val)) {
        target[key] = deepCloneArray(val);
        return; // custom cloning and overwrite for specific objects
      } else if (isSpecificValue(val)) {
        target[key] = cloneSpecificValue(val);
        return; // overwrite by new value if source isn't object or array
      } else if (_typeof(src) !== 'object' || src === null || Array.isArray(src)) {
        target[key] = deepExtend({}, val);
        return; // source value and new value is objects both, extending...
      } else {
        target[key] = deepExtend(src, val);
        return;
      }
    });
  });
  return target;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "Module", function() { return src_module["b" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Wrapper", function() { return wrapper_Wrapper; });
__webpack_require__.d(src_namespaceObject, "Group", function() { return wrapper_Group; });
__webpack_require__.d(src_namespaceObject, "Component", function() { return component_Component; });
__webpack_require__.d(src_namespaceObject, "SubComponent", function() { return component_SubComponent; });
__webpack_require__.d(src_namespaceObject, "Provider", function() { return provider["b" /* default */]; });
__webpack_require__.d(src_namespaceObject, "styled", function() { return src_styled; });

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/module.jsx
var src_module = __webpack_require__(1);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/getModifiersFromProps.js
var getModifiersFromProps = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/component.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Render a Synergy component
 */

var component_Component =
/*#__PURE__*/
function (_Module) {
  _inherits(Component, _Module);

  function Component(props) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props));
    _this.REF = external_react_default.a.createRef();
    _this.NAMESPACE = props.name || props.tag;
    return _this;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var _objectSpread2;

      /** */
      this.DATA = this.context.STYLES[this.NAMESPACE];
      this.STYLES = this.getStyles(this.DATA, this.stylesConfig({
        theme: this.context.THEME,
        config: this.context.CONFIG
      }));
      var props = this.props;
      var _this$context = this.context,
          MODIFIERGLUE = _this$context.MODIFIERGLUE,
          COMPONENTGLUE = _this$context.COMPONENTGLUE;
      var STRICT_NAMESPACE = (this.context.STRICT_NAMESPACE || this.context.NAMESPACE) + COMPONENTGLUE + this.NAMESPACE;
      var TAG = props.href && 'a' || props.component || props.tag || 'div';
      /** */

      var CLASSES = props.className ? props.className + ' ' : '',
          MODIFIERS = [];
      var SELECTOR = props.subComponent ? STRICT_NAMESPACE : this.context.NAMESPACE + COMPONENTGLUE + this.NAMESPACE;
      MODIFIERS.push(props.modifiers);
      MODIFIERS = MODIFIERS.concat(Object(getModifiersFromProps["a" /* default */])(props));
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

      var _this$state = this.state,
          before = _this$state.before,
          after = _this$state.after;

      var ATTRIBUTES = _objectSpread({}, this.getDataAttributes(props), this.getEventHandlers(props), props.attributes, {
        onMouseEnter: this.handleMouseEnter.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        className: this.context.GENERATECLASSES ? CLASSES : null,
        'data-component': this.context.GENERATEDATAATTRIBUTES ? this.NAMESPACE : null,
        'data-sub-component': this.context.GENERATEDATAATTRIBUTES ? props.subComponent : null
        /** */

      });

      var contextValues = _objectSpread({}, this.context, this.state, props, (_objectSpread2 = {}, _defineProperty(_objectSpread2, this.NAMESPACE, _objectSpread({}, this.state, props, {
        state: _objectSpread({}, this.state, props),
        context: this.context
      })), _defineProperty(_objectSpread2, "STYLES", _objectSpread({}, this.context.STYLES, this.STYLES)), _defineProperty(_objectSpread2, "STRICT_NAMESPACE", STRICT_NAMESPACE), _objectSpread2));

      return external_react_default.a.createElement(src_module["a" /* ModuleContext */].Provider, {
        value: contextValues
      }, external_react_default.a.createElement(TAG, _extends({
        ref: this.REF
      }, ATTRIBUTES), before && external_react_default.a.createElement(Component, {
        name: ":before"
      }, before.content), props.content || props.children, after && external_react_default.a.createElement(Component, {
        name: ":after"
      }, after.content)));
    }
  }]);

  return Component;
}(src_module["b" /* default */]);

_defineProperty(component_Component, "contextType", src_module["a" /* ModuleContext */]);


var component_SubComponent = function SubComponent(props) {
  return external_react_default.a.createElement(component_Component, _extends({
    subComponent: true
  }, props), props.children);
};
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/wrapper.jsx
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



var wrapper_Wrapper =
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
      var PROPS = (_PROPS = {}, wrapper_defineProperty(_PROPS, MODULE, true), wrapper_defineProperty(_PROPS, "styles", this.state.styles), wrapper_defineProperty(_PROPS, "setWrapperStyles", this.applyStyles), _PROPS);
      return external_react_default.a.createElement(Module, wrapper_extends({
        name: NAMESPACE
      }, this.props, PROPS), this.props.children);
    }
  }]);

  return Wrapper;
}(external_react_default.a.Component);


var wrapper_Group = function Group(props) {
  return external_react_default.a.createElement(wrapper_Wrapper, wrapper_extends({
    name: "group"
  }, props), props.children);
};
// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/provider.jsx
var provider = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/styled.js
function styled_extends() { styled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return styled_extends.apply(this, arguments); }



var styled_styled = function styled(name, props) {
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';
  return React.createElement(component_Component, styled_extends({
    name: name,
    tag: tag
  }, props), props.children);
};

/* harmony default export */ var src_styled = (styled_styled);
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/index.js






// EXTERNAL MODULE: ./node_modules/deep-extend/lib/deep-extend.js
var deep_extend = __webpack_require__(6);
var deep_extend_default = /*#__PURE__*/__webpack_require__.n(deep_extend);

// CONCATENATED MODULE: ./src/synergy.js
function synergy_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { synergy_typeof = function _typeof(obj) { return typeof obj; }; } else { synergy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return synergy_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function synergy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { synergy_defineProperty(target, key, source[key]); }); } return target; }

function synergy_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




if (typeof window !== 'undefined') {
  Object.assign(window, synergy_objectSpread({
    Synergy: window.Synergy || {}
  }, src_namespaceObject));
  Object.assign(Synergy, {
    config: deep_extend_default.a,
    init: init
  });
}
/**
 * Synergy Theme
 */


function init(_ref) {
  var modules = _ref.modules,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$globals = _ref.globals,
      globals = _ref$globals === void 0 ? {} : _ref$globals,
      _ref$app = _ref.app,
      app = _ref$app === void 0 ? {} : _ref$app,
      handleConfig = _ref.handleConfig;

  if (typeof theme === 'function') {
    theme = theme(globals);
  }

  if (theme.theme) {
    theme = theme.theme;
  }

  if (app.Synergy && !app.options) {
    app.options = app.Synergy;
  }

  Object.assign(Synergy, app.options);
  Synergy.config(globals, Synergy.config(theme, app.theme));
  Object.values(modules).forEach(function (MODULE) {
    var namespace = MODULE.defaultProps && MODULE.defaultProps.name || MODULE.name;

    if (handleConfig) {
      var defaultConfig = MODULE.config || {};

      if (typeof defaultConfig === 'function') {
        defaultConfig = defaultConfig(globals);
      }

      var themeConfig = theme.modules && evalConfig(theme.modules[namespace]);
      Object.assign(MODULE, {
        config: Synergy.config(defaultConfig, themeConfig)
      });
    }

    window[namespace] = MODULE;
  });

  if (typeof globals.foundation === 'function') {
    globals.foundation(globals);
  }

  delete globals.modules, window.theme = globals;
}
/**
 * Evaluate module config properties
 */


function evalConfig(config) {
  if (!config) return;
  Object.entries(config).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    if (synergy_typeof(value) === 'object') {
      return evalConfig(value);
    } else {
      if (typeof value !== 'function') return;
      return config[key] = value();
    }
  });
  return config;
}

/***/ })
/******/ ]);
});