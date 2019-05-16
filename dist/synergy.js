(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNamespace; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getNamespace(query, strict, config) {
  config = Object.assign(this || {}, config || {});
  var _config = config,
      namespace = _config.namespace,
      modifierGlue = _config.modifierGlue,
      componentGlue = _config.componentGlue;

  if (query instanceof HTMLElement) {
    if (query.hasAttribute('data-module')) {
      return query.getAttribute('data-module');
    }

    if (query.classList.length) {
      var targetClass;

      if (namespace) {
        targetClass = [].slice.call(query.classList).filter(function (className) {
          return className.indexOf(namespace) === 0;
        })[0];
      }

      if (!namespace || !targetClass) {
        targetClass = query.classList[0];
      }

      if (strict) {
        return targetClass.split(modifierGlue)[0];
      }

      return targetClass.split(modifierGlue)[0].split(componentGlue)[0];
    }

    if (namespace) {
      return namespace;
    }
  }

  if (typeof query === 'string' && query.match("^[a-zA-Z0-9_-]+$")) {
    return query;
  }

  if (query && _typeof(query) === 'object' && query.name) {
    return query.name;
  }

  if (query && query.constructor === Array) {
    return query[1];
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModuleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_getHtmlProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _utilities_getModifiersFromProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _utilities_generateClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _utilities_renderModifiers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _utilities_refHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // spoof env process to assist bundle size

if (typeof process === 'undefined') window.process = {
  env: {}
};
/**
 * Used for generating unique module ID's
 */

var increment = 1;
/**
 * Create a context object
 */

var ModuleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

/**
 * Render a Synergy module
 *
 * @extends React.Component
 */

var Module =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Module, _React$Component);

  function Module(props) {
    var _this;

    _classCallCheck(this, Module);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Module).call(this, props));
    increment++;
    var Synergy = window.Synergy || {};
    var ui = props.ui || window.ui;
    var modifierGlue = props.modifierGlue || Synergy.modifierGlue || '-';
    var componentGlue = props.componentGlue || Synergy.componentGlue || '_';
    var propModifiers = Object(_utilities_renderModifiers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_utilities_getModifiersFromProps__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(props, Synergy.CssClassProps), modifierGlue);
    var passedModifiers = Object(_utilities_renderModifiers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(props.modifiers, modifierGlue);
    var modifiers = propModifiers + passedModifiers;
    var classes = props.className ? props.className : '';
    var styleParser = props.styleParser || Synergy.styleParser;
    var multipleClasses = false;

    if (typeof Synergy.multipleClasses !== 'undefined') {
      multipleClasses = Synergy.multipleClasses;
    }

    if (typeof props.multipleClasses !== 'undefined') {
      multipleClasses = props.multipleClasses;
    }

    _this.config = props.config || {};

    if (window[props.name]) {
      _this.config = Module.config(window[props.name].config, _this.config);
    }

    _this.namespace = _this.config.name || props.name;

    _this.ref = function (node) {
      return Object(_utilities_refHandler__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(node, props, styleParser, true, ui, _this.config);
    };

    _this.id = (props.before || props.after) && !props.id ? "synergy-module-".concat(increment) : props.id;
    _this.tag = props.tag || (html_tags__WEBPACK_IMPORTED_MODULE_2___default.a.includes(_this.namespace) ? _this.namespace : 'div');
    _this.classNames = Object(_utilities_generateClasses__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
      props: props,
      namespace: _this.namespace,
      modifiers: modifiers,
      classes: classes,
      modifierGlue: modifierGlue,
      componentGlue: componentGlue,
      multipleClasses: multipleClasses
    });
    if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(function (prop) {
      if (Object.keys(props).includes(prop)) {
        _this.classNames = _this.classNames + ' ' + prop;
      }
    });
    _this.contextValue = {
      ui: ui,
      styleParser: styleParser,
      modifierGlue: modifierGlue,
      componentGlue: componentGlue,
      multipleClasses: multipleClasses,
      module: _this.namespace,
      props: _this.props,
      config: _this.config
    };
    return _this;
  }

  _createClass(Module, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _module = Synergy.modules ? Synergy.modules[this.namespace] : null;

      if (_module && _module.methods) {
        if (_module.methods.init) {
          _module.methods.init(react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this), this.config);
        }
      }
    }
  }, {
    key: "getEventHandlers",
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModuleContext.Provider, {
        value: this.contextValue
      }, this.props.before && this.props.before(function () {
        return document.getElementById(_this2.id);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.tag, _extends({
        id: this.id,
        className: this.classNames,
        "data-module": this.namespace,
        ref: this.ref
      }, Object(_utilities_getHtmlProps__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this.props), this.getDataAttributes(this.props), this.getEventHandlers(this.props), this.props.componentProps), this.props.children), this.props.after && this.props.after(function () {
        return document.getElementById(_this2.id);
      }));
    }
  }]);

  return Module;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Module, "config", function () {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  // `process` and `require` are exploited to help reduce bundle size
  if (true) {
    var _Synergy;

    return (_Synergy = Synergy).config.apply(_Synergy, [{}].concat(params));
  } else { var _Synergy2; }
});

_defineProperty(Module, "child", function (props) {
  var childProps = Object.assign({}, props);
  delete childProps.children;
  var config = props.config || {};

  if (window[props.name]) {
    config = Module.config(window[props.name].config, config);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      context: childProps,
      config: config
    });
  });
});


var Wrapper =
/*#__PURE__*/
function (_Module) {
  _inherits(Wrapper, _Module);

  function Wrapper(props) {
    var _this3;

    _classCallCheck(this, Wrapper);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).call(this, props));
    _this3.module = props.module;
    _this3.namespace = props.name || 'wrapper';

    if (!_this3.module) {
      if (props.children.length) {
        _this3.module = props.children[0].type.name.toLowerCase();
      } else {
        _this3.module = props.children.type.name.toLowerCase();
      }
    }

    _this3.dynamicProps = _defineProperty({}, _this3.module, true);
    return _this3;
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Module, _extends({
        name: this.namespace
      }, this.dynamicProps, this.props), this.props.children);
    }
  }]);

  return Wrapper;
}(Module);
var Group =
/*#__PURE__*/
function (_Module2) {
  _inherits(Group, _Module2);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, _getPrototypeOf(Group).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, _extends({
        name: "group"
      }, this.props), this.props.children);
    }
  }]);

  return Group;
}(Module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderModifiers; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @param {*} modifiers 
 */
function renderModifiers(modifiers, modifierGlue) {
  if (modifiers && _typeof(modifiers) === 'object' && modifiers.length) {
    return (modifierGlue + modifiers).replace(/,/g, modifierGlue);
  }

  return '';
}

/***/ }),
/* 4 */
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

    if (firstLetter === firstLetter.toUpperCase()) {
      continue;
    }

    if (prop === 'subComponent') {
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@onenexus/squery/src/utilities/getNamespace.js
var getNamespace = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/utilities/isSafeElement.js
function isSafeElement(node, namespace, _ref) {
  var modifierGlue = _ref.modifierGlue;

  if (node instanceof NodeList || node instanceof Array) {
    return node.every(function (node) {
      return isSafeElement(node, namespace, {
        modifierGlue: modifierGlue
      });
    });
  }

  var matchedClasses = [].slice.call(node.classList).filter(function (className) {
    var conditions = [className === namespace, className.indexOf(namespace + modifierGlue) === 0];
    return conditions.some(function (condition) {
      return !!condition;
    });
  });
  return matchedClasses.length === 1 ? matchedClasses[0] : false;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/addModifier.js


function addModifier(node, modifier, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return node.forEach(function (node) {
      return addModifier(node, modifier, config);
    });
  }

  var _config = config,
      modifierGlue = _config.modifierGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, true, config);
  var safeNamespace = isSafeElement(node, namespace, config);

  if (modifier.constructor === Array) {
    modifier = modifier.join(modifierGlue);
  }

  if (safeNamespace && !config.multipleClasses) {
    node.classList.replace(safeNamespace, safeNamespace + modifierGlue + modifier);
  } else {
    node.classList.add(namespace + modifierGlue + modifier);
  }

  if (node.repaint) {
    node.repaint();
  }

  return node;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/parent.js

function parent_parent(node, query, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).map(function (node) {
      return parent_parent(node, query, config);
    });
  }

  var _config = config,
      componentGlue = _config.componentGlue,
      modifierGlue = _config.modifierGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  var $query = query || namespace;

  if ($query !== namespace) {
    $query = namespace + componentGlue + $query;
  }

  var parentComponent = $query && node.closest(".".concat($query, ", [class*='").concat($query + modifierGlue, "']"));

  if (parentComponent) {
    return parentComponent;
  }

  namespace = config.namespace || Object(getNamespace["a" /* default */])(node, true, config);

  if (namespace && namespace.indexOf(query > -1)) {
    $query = namespace.substring(0, namespace.indexOf(query) + query.length);
  }

  var parentSubComponent = $query && node.closest(".".concat($query, ", [class*='").concat($query + modifierGlue, "']"));

  if (parentSubComponent) {
    return parentSubComponent;
  }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/utilities/filterElements.js


function filterElements(node, elements, subComponent, config) {
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, subComponent, config);
  var sourceParent = parent_parent(node, namespace, config);
  if (!sourceParent) return elements;
  elements = [].slice.call(elements).filter(function (element) {
    var targetParent = parent_parent(element, namespace, config);

    if (!targetParent) {
      return true;
    }

    return targetParent === sourceParent;
  });
  return elements;
}
// EXTERNAL MODULE: ./node_modules/@onenexus/squery/src/utilities/isValidSelector.js
var isValidSelector = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getComponents.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function getComponents(node, componentName, config) {
  config = Object.assign(this || {}, config || {});
  if (componentName && !Object(isValidSelector["a" /* default */])(componentName)) return [];

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).reduce(function (matches, node) {
      return matches.concat([].slice.call(getComponents(node, componentName, config)));
    }, []);
  }

  var _config = config,
      subComponent = _config.subComponent,
      modifierGlue = _config.modifierGlue,
      componentGlue = _config.componentGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, subComponent, config);
  var components;

  if (!componentName) {
    components = node.querySelectorAll("[class*='".concat(namespace + componentGlue, "']"));
  } else {
    var query = namespace + componentGlue + componentName;
    components = node.querySelectorAll(".".concat(query, ", [class*='").concat(query + modifierGlue, "']"));
  }

  components = [].slice.call(components).filter(function (element) {
    var sourceNamespace = Object(getNamespace["a" /* default */])(node, true, _objectSpread({}, config, {
      namespace: namespace
    }));
    var targetNamespace = Object(getNamespace["a" /* default */])(element, true, _objectSpread({}, config, {
      namespace: namespace
    }));
    var sourceDepth = (sourceNamespace.match(new RegExp(componentGlue, 'g')) || []).length;
    var targetDepth = (targetNamespace.match(new RegExp(componentGlue, 'g')) || []).length; // Special condition: if no componentName passed and we want sub-components,
    // find ALL child sub-components, as parent modules cannot have direct
    // descendant sub-components

    if (subComponent && !componentName && sourceNamespace.indexOf(componentGlue) === -1) {
      return true;
    }

    if (subComponent && !sourceDepth) {
      return false;
    }

    if (subComponent || !sourceDepth) {
      sourceDepth++;
    }

    var modifierCriteria = true;
    var targetClass = [].slice.call(element.classList).filter(function (className) {
      return className.indexOf(namespace) === 0;
    })[0];

    if (config.modifier) {
      modifierCriteria = targetClass.indexOf(config.modifier) > -1;
    }

    if (!subComponent && sourceDepth > 1) {
      if (targetClass.split(componentGlue).length - 1 > 1) {
        return false;
      }

      return modifierCriteria;
    }

    return modifierCriteria && targetDepth === sourceDepth;
  });
  components = filterElements(node, components, subComponent, config);
  return components;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getComponent.js

/**
 * @TODO allow this API
 * const [title, content] = panel.getComponent(['title', 'content']);
 */

function getComponent(node, componentName, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).map(function (node) {
      return getComponent(node, componentName, config);
    });
  }

  ;
  return getComponents(node, componentName, config)[0];
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/setComponent.js

function setComponent(node, componentName, namespace, replace, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return node.forEach(function (node) {
      return setComponent(node, componentName, namespace, replace, config);
    });
  }

  if (!namespace && !replace) {
    replace = config.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  }

  namespace = namespace || config.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  node.classList.add(namespace + config.componentGlue + componentName);
  node.setAttribute('data-component', componentName);
  replace && node.classList.remove(replace);
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/unsetComponent.js

function unsetComponent(node, componentName, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return node.forEach(function (node) {
      return unsetComponent(node, componentName, config);
    });
  }

  var _config = config,
      componentGlue = _config.componentGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  return [].slice.call(node.classList).forEach(function (className) {
    var isAComponent = className.split(componentGlue).length - 1 === 1;
    var isMatch = className.indexOf(namespace + componentGlue + componentName) === 0;

    if (isAComponent && isMatch) {
      node.classList.remove(className);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/isComponent.js

function isComponent(node, componentName, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).every(function (node) {
      return isComponent(node, componentName, config);
    });
  }

  var _config = config,
      componentGlue = _config.componentGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  return [].slice.call(node.classList).some(function (className) {
    if (config.subComponent) {
      var isASubComponent = className.split(componentGlue).length - 1 > 1;

      var _isMatch = className.indexOf(componentName) === className.length - componentName.length;

      return isASubComponent && _isMatch;
    }

    var isAComponent = className.split(componentGlue).length - 1 === 1;
    var query = namespace + componentGlue + componentName;
    var isMatch = query.indexOf(componentGlue + componentName) > -1;
    return className.indexOf(query) === 0 && isAComponent && isMatch;
  });
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/component.js





function component_component(node, componentName, operator, config) {
  config = Object.assign(this || {}, config || {});

  if (!componentName && !operator) {
    return (config.getSubComponents || getComponents)(node, false, config);
  }

  if (!operator || operator === 'find') {
    return (config.getSubComponents || getComponents)(node, componentName, config);
  }

  if (operator === 'first') {
    return (config.getSubComponent || getComponent)(node, componentName, config);
  }

  if (operator === 'is') {
    return isComponent(node, componentName, config);
  }

  if (operator === 'set') {
    //@TODO setSubComponent
    return setComponent(node, componentName, null, null, config);
  }

  if (operator === 'unset') {
    //@TODO unsetSubComponent
    return unsetComponent(node, componentName, config);
  }

  if (typeof operator === 'function') {
    return getComponents(node, componentName, config).forEach(function (node) {
      return operator(node);
    });
  }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getModules.js
function getModules(node, moduleName, config) {
  config = Object.assign(this || {}, config || {});
  var _config = config,
      modifierGlue = _config.modifierGlue;

  if (node instanceof NodeList || node instanceof Array) {
    var matchedModules = [].slice.call(node).reduce(function (matches, node) {
      var modules = [].slice.call(getModules(node, moduleName, config));
      matches = matches.filter(function (match) {
        return modules.every(function (module) {
          return module !== match;
        });
      });
      return matches.concat(modules);
    }, []);
    return matchedModules;
  }

  var potentialModules = node.querySelectorAll(".".concat(moduleName, ", [class*=\"").concat(moduleName + modifierGlue, "\"]"));
  var modules = [].slice.call(potentialModules).filter(function (potentialModule) {
    return [].slice.call(potentialModule.classList).some(function (className) {
      return className.indexOf(moduleName) === 0;
    });
  });
  return modules;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/hasModifier.js

function hasModifier(node, modifier, config) {
  config = Object.assign(this || {}, config || {});
  if (!modifier) return;

  if (modifier.constructor === Array) {
    return modifier.every(function (modifier) {
      return hasModifier(node, modifier, config);
    });
  }

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).every(function (node) {
      return hasModifier(node, modifier, config);
    });
  }

  var _config = config,
      modifierGlue = _config.modifierGlue;
  var namespace = config.namespace || node.namespace || Object(getNamespace["a" /* default */])(node, false, config);
  return [].slice.call(node.classList).some(function (className) {
    var matchIndex = className.indexOf(modifierGlue + modifier);
    var namespaceMatch = className.indexOf(namespace) === 0;
    var isModifierTest1 = className.indexOf(modifierGlue + modifier + modifierGlue) > -1;
    var isModifierTest2 = matchIndex > -1 && matchIndex === className.length - modifier.length - modifierGlue.length;
    return namespaceMatch && (isModifierTest1 || isModifierTest2);
  });
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/find.js
function find_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { find_defineProperty(target, key, source[key]); }); } return target; }

function find_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function find(node, query, config) {
  config = Object.assign(this || {}, config || {});

  if (_typeof(query) === 'object') {
    if (node instanceof NodeList || node instanceof Array) {
      return [].slice.call(node).reduce(function (matches, node) {
        return matches.concat(getQueryFromObject(node, query, config));
      }, []);
    }

    return getQueryFromObject(node, query, config);
  }

  if (typeof query === 'string') {
    var modules = getModules(node, query, config);

    if (modules.length) {
      return modules;
    }

    var components = getComponents(node, query, config);

    if (components.length) {
      return components;
    }
  }
}

function getQueryFromObject(node, query, config) {
  config = Object.assign(this || {}, config || {});
  var module = query.module,
      component = query.component,
      modifier = query.modifier;
  var matches = [];

  if (module) {
    if (component) {
      matches = getComponents(node, component, find_objectSpread({}, config, {
        namespace: module,
        modifier: modifier
      }));
    } else {
      matches = getModules(node, module, config);
    }
  } else if (component) {
    matches = getComponents(node, component, find_objectSpread({}, config, {
      modifier: modifier
    }));
  }

  if (modifier) {
    matches = [].slice.call(matches).filter(function (match) {
      return hasModifier(match, modifier, config);
    });
  }

  return matches;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getModifiers.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function getModifiers(node, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    var _modifiers = [].slice.call(node).reduce(function (matches, node) {
      return matches.concat(getModifiers(node, config));
    }, []); // remove duplicates


    _modifiers = _toConsumableArray(new Set(_modifiers));
    return _modifiers;
  }

  var _config = config,
      namespace = _config.namespace,
      modifierGlue = _config.modifierGlue;
  var targetClass = [].slice.call(node.classList).filter(function (className) {
    return className.indexOf(namespace || Object(getNamespace["a" /* default */])(node, false, config)) === 0;
  })[0];
  var modifiers = targetClass.split(modifierGlue).slice(1);
  return modifiers;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getSubComponents.js

function getSubComponents(node, subComponentName, config) {
  config = Object.assign(this || {}, config || {});
  config.subComponent = true;
  return getComponents(node, subComponentName, config);
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/getSubComponent.js

function getSubComponent(node, componentName, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return [].slice.call(node).map(function (node) {
      return getSubComponent(node, componentName, config);
    });
  }

  ;
  return getSubComponents(node, componentName, config)[0];
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/isModule.js
function isModule(node, moduleName, config) {
  config = Object.assign(this || {}, config || {});
  var DOMNodes = !(node instanceof NodeList || node instanceof Array) ? [node] : node;
  return [].slice.call(DOMNodes).every(function (node) {
    return node.matches(".".concat(moduleName, ", [class*=\"").concat(moduleName + config.modifierGlue, "\"]"));
  });
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/is.js
function is_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { is_typeof = function _typeof(obj) { return typeof obj; }; } else { is_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return is_typeof(obj); }





function is(node, query, config) {
  config = Object.assign(this || {}, config || {});
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, false, config);

  if (is_typeof(query) === 'object') {
    var module = query.module,
        component = query.component,
        modifier = query.modifier;

    if (module) {
      if (component) {
        var namespaceMatch = namespace === module;
        var componentMatch = isComponent(node, component, config);

        if (modifier) {
          return namespaceMatch && componentMatch && hasModifier(node, modifier, config);
        }

        return namespaceMatch && componentMatch;
      }

      if (modifier) {
        return isModule(node, module, config) && hasModifier(node, modifier, config);
      }

      return isModule(node, module, config);
    }

    if (component) {
      if (modifier) {
        return isComponent(node, component, config) && hasModifier(node, modifier, config);
      }

      return isComponent(node, component, config);
    }

    if (modifier) {
      return hasModifier(node, modifier, config);
    }
  }

  if (typeof query === 'string') {
    if (isModule(node, query, config)) {
      return isModule(node, query, config);
    }

    if (isComponent(node, query, config)) {
      return isComponent(node, query, config);
    }

    if (hasModifier(node, query, config)) {
      return hasModifier(node, query, config);
    }
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/removeModifier.js

function removeModifier(node, modifier, config) {
  config = Object.assign(this || {}, config || {});

  if (modifier.constructor === Array) {
    return modifier.forEach(function (_modifier) {
      return removeModifier(node, _modifier, config);
    });
  }

  if (node instanceof NodeList || node instanceof Array) {
    return node.forEach(function (node) {
      return removeModifier(node, modifier, config);
    });
  }

  var _config = config,
      modifierGlue = _config.modifierGlue;
  var namespace = config.namespace || Object(getNamespace["a" /* default */])(node, true, config);
  [].slice.call(node.classList).forEach(function (className) {
    var moduleMatch = className.indexOf(namespace + modifierGlue) === 0;
    var modifierMatch = className.indexOf(modifierGlue + modifier) > -1;
    var newClass = className.replace(new RegExp(modifierGlue + modifier, 'g'), '');

    if (moduleMatch && modifierMatch) {
      node.classList.replace(className, newClass);
    }
  });

  if (node.repaint) {
    node.repaint();
  }

  return node;
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/toggleModifier.js



function toggleModifier(node, modifier, config) {
  config = Object.assign(this || {}, config || {});

  if (node instanceof NodeList || node instanceof Array) {
    return node.forEach(function (node) {
      return toggleModifier(node, modifier, config);
    });
  }

  if (hasModifier(node, modifier, config)) {
    return removeModifier(node, modifier, config);
  } else {
    return addModifier(node, modifier, config);
  }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/modifier.js





function modifier_modifier(node, modifier, operator, config) {
  config = Object.assign(this || {}, config || {});

  if (!operator && !modifier) {
    return getModifiers(node, config);
  }

  if (!operator || operator === 'is') {
    return hasModifier(node, modifier, config);
  }

  if (operator === 'set' || operator === 'add') {
    return addModifier(node, modifier, config);
  }

  if (operator === 'unset' || operator === 'remove') {
    return removeModifier(node, modifier, config);
  }

  if (operator === 'toggle') {
    return toggleModifier(node, modifier, config);
  }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/module.js


function module_module(node, moduleName, operator, config) {
  config = Object.assign(this || {}, config || {});

  if (!operator || operator === 'find') {
    return getModules(node, moduleName, config);
  }

  if (operator === 'is') {
    return isModule(node, moduleName, config);
  }

  if (typeof operator === 'function') {
    return getModules(node, moduleName, config).forEach(function (node) {
      return operator(node);
    });
  }
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/subComponent.js



function subComponent_subComponent(node, subComponentName, operator, config) {
  config = Object.assign(this || {}, config || {});
  config.subComponent = true;
  config.getSubComponent = getSubComponent;
  config.getSubComponents = getSubComponents;
  return component_component(node, subComponentName, operator, config);
}
// CONCATENATED MODULE: ./node_modules/@onenexus/squery/src/api/index.js
/* concated harmony reexport add */__webpack_require__.d(__webpack_exports__, "add", function() { return addModifier; });
/* concated harmony reexport addModifier */__webpack_require__.d(__webpack_exports__, "addModifier", function() { return addModifier; });
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return component_component; });
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return component_component; });
/* concated harmony reexport find */__webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* concated harmony reexport getComponent */__webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* concated harmony reexport getComponents */__webpack_require__.d(__webpack_exports__, "getComponents", function() { return getComponents; });
/* concated harmony reexport getModifiers */__webpack_require__.d(__webpack_exports__, "getModifiers", function() { return getModifiers; });
/* concated harmony reexport getModules */__webpack_require__.d(__webpack_exports__, "getModules", function() { return getModules; });
/* concated harmony reexport getSubComponent */__webpack_require__.d(__webpack_exports__, "getSubComponent", function() { return getSubComponent; });
/* concated harmony reexport getSubComponents */__webpack_require__.d(__webpack_exports__, "getSubComponents", function() { return getSubComponents; });
/* concated harmony reexport has */__webpack_require__.d(__webpack_exports__, "has", function() { return hasModifier; });
/* concated harmony reexport hasModifier */__webpack_require__.d(__webpack_exports__, "hasModifier", function() { return hasModifier; });
/* concated harmony reexport is */__webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* concated harmony reexport isComponent */__webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* concated harmony reexport isModule */__webpack_require__.d(__webpack_exports__, "isModule", function() { return isModule; });
/* concated harmony reexport modifier */__webpack_require__.d(__webpack_exports__, "modifier", function() { return modifier_modifier; });
/* concated harmony reexport module */__webpack_require__.d(__webpack_exports__, "module", function() { return module_module; });
/* concated harmony reexport modules */__webpack_require__.d(__webpack_exports__, "modules", function() { return module_module; });
/* concated harmony reexport parent */__webpack_require__.d(__webpack_exports__, "parent", function() { return parent_parent; });
/* concated harmony reexport remove */__webpack_require__.d(__webpack_exports__, "remove", function() { return removeModifier; });
/* concated harmony reexport removeModifier */__webpack_require__.d(__webpack_exports__, "removeModifier", function() { return removeModifier; });
/* concated harmony reexport setComponent */__webpack_require__.d(__webpack_exports__, "setComponent", function() { return setComponent; });
/* concated harmony reexport subComponent */__webpack_require__.d(__webpack_exports__, "subComponent", function() { return subComponent_subComponent; });
/* concated harmony reexport subComponents */__webpack_require__.d(__webpack_exports__, "subComponents", function() { return subComponent_subComponent; });
/* concated harmony reexport toggle */__webpack_require__.d(__webpack_exports__, "toggle", function() { return toggleModifier; });
/* concated harmony reexport toggleModifier */__webpack_require__.d(__webpack_exports__, "toggleModifier", function() { return toggleModifier; });
/* concated harmony reexport toggleModifiers */__webpack_require__.d(__webpack_exports__, "toggleModifiers", function() { return toggleModifier; });
/* concated harmony reexport unsetComponent */__webpack_require__.d(__webpack_exports__, "unsetComponent", function() { return unsetComponent; });
// addModifier
 // component

 // find

 // getComponent

 // getComponents

 // getModifiers

 // getModules

 // getSubComponent

 // getSubComponents

 // hasModifier

 // is

 // isComponent

 // isModule

 // modifier

 // module

 // parent

 // removeModifier

 // setComponent

 // subComponent

 // toggleModifier

 // unsetComponent



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(20);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHtmlProps; });
/* harmony import */ var html_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var html_attributes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_attributes__WEBPACK_IMPORTED_MODULE_0__);

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
    } else if (prop.indexOf('html') === 0) {
      HtmlProps[prop] = props[prop];
    } else if (Object.values(html_attributes__WEBPACK_IMPORTED_MODULE_0___default.a).includes(prop)) {
      HtmlProps[prop] = props[prop];
    }
  }

  ;
  return HtmlProps;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateClasses; });
/**
 * Generate CSS classes for a module
 */
function generateClasses(_ref) {
  var props = _ref.props,
      namespace = _ref.namespace,
      modifiers = _ref.modifiers,
      classes = _ref.classes,
      modifierGlue = _ref.modifierGlue,
      componentGlue = _ref.componentGlue,
      multipleClasses = _ref.multipleClasses;
  var classNames = []; // Get modules from props

  Object.entries(props).forEach(function (prop) {
    var key = prop[0];
    var value = prop[1];
    var firstLetter = key[0];

    if (firstLetter === firstLetter.toUpperCase()) {
      var module = key.toLowerCase();

      if (multipleClasses) {
        classNames.push(module);

        if (value.constructor === Array) {
          value.forEach(function (modifier) {
            classNames.push(module + modifierGlue + modifier);
          });
        } else if (typeof value === 'string') {
          classNames.push(module + modifierGlue + value);
        }
      } else {
        var propModifiers = '';

        if (value.constructor === Array) {
          propModifiers = modifierGlue + value.join(modifierGlue);
        } else if (typeof value === 'string') {
          propModifiers = modifierGlue + value;
        }

        classNames.push(module + propModifiers);
      }
    }
  }); // if (namespace.indexOf(componentGlue > 0)) {
  //     if (props.name instanceof Array) {
  //         // @TODO
  //     }
  // }

  if (multipleClasses) {
    // @TODO refactor the whole thing because we are splitting
    // what was originally unsplit to begin with
    modifiers.split(modifierGlue).forEach(function (modifier) {
      var className;

      if (modifier) {
        className = namespace + modifierGlue + modifier;
      } else {
        className = namespace;
      }

      classNames.push(className);
    });
  } else {
    classNames.push(namespace + modifiers);
  }

  classes = classNames.join(' ') + (classes ? ' ' + classes : '');
  return classes;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return refHandler; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Handle the ref callback on the rendered React component
 */
function refHandler(node, props, styleParser, parentModule, ui, config) {
  if (node && node instanceof HTMLElement) {
    Object.assign(node, {
      isFirstChild: node === node.parentNode.firstChild,
      isLastChild: node === node.parentNode.lastChild
    });

    if (parentModule && window[props.name] && window[props.name].defaults) {
      node.config = config;
    }

    if (styleParser) {
      if (props.styles) {
        if (props.styles.constructor === Array) {
          styleParser.apply(void 0, [node].concat(_toConsumableArray(props.styles)));
        } else {
          styleParser(node, props.styles, config, ui);
        }
      } else if (props.name && window[props.name]) {
        if (window[props.name] && window[props.name].layout) {
          styleParser(node, window[props.name].layout, config, ui);
        }
      }

      Object.keys(props).forEach(function (prop) {
        var fistLetter = prop[0];

        if (fistLetter === fistLetter.toUpperCase()) {
          if (window[prop] && window[prop].layout && window[prop].config) {
            node.namespace = node.namespace || prop;
            styleParser(node, window[prop].layout, window[prop].config, ui);
          }
        }
      });
    }

    if (props.init) {
      props.init(node);
    } else if (window[props.name] && window[props.name].init) {
      window[props.name].init(node);
    }
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidSelector; });
function isValidSelector(selector) {
  if (!selector || typeof selector !== 'string') return false;
  var stub = document.createElement('br');
  stub.textContent = 'Hello!';

  try {
    selector && stub.querySelector(selector);
  } catch (e) {
    return false;
  }

  return true;
}

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _utilities_getConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _utilities_getDOMNodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _utilities_getNamespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // spoof env process to assist bundle size

if (typeof process === 'undefined') window.process = {
  env: {}
};
/** */

function sQuery(SynergyQuery, callback, defaults, custom, parser) {
  var Synergy = window.Synergy || {};
  sQuery.config = sQuery.config || {};
  var methods = {};
  var config = Object(_utilities_getConfig__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(defaults, custom, parser);
  var modifierGlue = config.modifierGlue || Synergy.modifierGlue || '-';
  var componentGlue = config.componentGlue || Synergy.componentGlue || '_';
  var multipleClasses = config.multipleClasses || Synergy.multipleClasses || false;
  var namespace = Object(_utilities_getNamespace__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SynergyQuery, false, {
    componentGlue: componentGlue,
    modifierGlue: modifierGlue
  });
  var DOMNodes = Object(_utilities_getDOMNodes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SynergyQuery);

  var _arr = Object.entries(_api__WEBPACK_IMPORTED_MODULE_4__);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        method = _arr$_i[1];

    if (sQuery.config.methods && sQuery.config.methods[key]) {
      key = sQuery.config.methods[key];
    }

    var internalConfig = {
      namespace: namespace,
      componentGlue: componentGlue,
      modifierGlue: modifierGlue,
      multipleClasses: multipleClasses
    };

    if (DOMNodes) {
      methods[key] = method.bind(internalConfig, DOMNodes);
    } else {
      methods[key] = method.bind(internalConfig);
    }
  }

  if (typeof callback === 'function') {
    DOMNodes.forEach(function (node) {
      return callback(node, config);
    });
  }

  return Object.assign(methods, {
    namespace: namespace,
    nodes: DOMNodes,
    node: DOMNodes ? DOMNodes[0] : null
  });
}

sQuery.init = _utilities_init__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];

var _arr2 = Object.entries(_api__WEBPACK_IMPORTED_MODULE_4__);

for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
  var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
      key = _arr2$_i[0],
      method = _arr2$_i[1];

  sQuery[key] = method;
}

if (typeof window !== 'undefined') {
  window.sQuery = sQuery;
}

/* harmony default export */ __webpack_exports__["a"] = (sQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConfig; });
/**
 * @param {*} defaults 
 * @param {*} custom 
 * @param {*} parser 
 */
function getConfig(defaults, custom, parser) {
  var extendedConfig; // `process` and `require` are exploited to help reduce bundle size

  if (true) {
    extendedConfig = Synergy.config(defaults, custom);
  } else {}

  if (typeof parser === 'function') {
    return parser(extendedConfig);
  }

  return extendedConfig;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDomNodes; });
/* harmony import */ var _isValidSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Find matching DOM nodes against passed Synergy query
 * 
 * @param {*} query 
 */

function getDomNodes(query) {
  if (query instanceof NodeList) {
    return query;
  }

  if (query instanceof HTMLElement) {
    return [query];
  }

  if (query instanceof Array) {
    return getDomNodes(query[0]);
  }

  if (Object(_isValidSelector__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(query) && document.querySelectorAll(query).length) {
    return document.querySelectorAll(query);
  }

  if (_typeof(query) === 'object' && query.name) {
    return getDomNodes(query.name);
  }

  if (typeof query === 'string' && query.match("^[a-zA-Z0-9_-]+$")) {
    return document.querySelectorAll(".".concat(query, ", [class*=\"").concat(query, "-\"]"));
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function init(custom) {
  var options = Object.assign({
    elementProto: true,
    nodeListProto: true,
    preset: 'Synergy',
    Synergy: true,
    alterMethodName: ['sQuery']
  }, custom);
  options.alterMethodName = options.alterMethodName || [];
  var PRESETS = {
    BEM: ['__', '--', 'block', 'element', 'modifier', true],
    Synergy: ['_', '-', 'module', 'component', 'modifier', false]
  };

  var _slice$call = [].slice.call(PRESETS[options.preset]),
      _slice$call2 = _slicedToArray(_slice$call, 6),
      componentGlue = _slice$call2[0],
      modifierGlue = _slice$call2[1],
      moduleNamespace = _slice$call2[2],
      componentNamespace = _slice$call2[3],
      modifierNamespace = _slice$call2[4],
      multipleClasses = _slice$call2[5];

  componentGlue = options.componentGlue || componentGlue;
  modifierGlue = options.modifierGlue || modifierGlue;
  multipleClasses = typeof options.multipleClasses === 'undefined' ? multipleClasses : options.multipleClasses;

  if (options.Synergy) {
    window.Synergy = window.Synergy || {};
    Object.assign(window.Synergy, {
      componentGlue: componentGlue,
      modifierGlue: modifierGlue,
      multipleClasses: multipleClasses
    });
  }

  var methods = {};

  var _arr2 = Object.entries(_api__WEBPACK_IMPORTED_MODULE_0__);

  var _loop = function _loop() {
    var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
        key = _arr2$_i[0],
        method = _arr2$_i[1];

    var methodName = key,
        newMethodName = void 0;

    if (options.alterMethodName.length) {
      var moduleUpperCase = moduleNamespace[0].toUpperCase() + moduleNamespace.substring(1);
      var componentUpperCase = componentNamespace[0].toUpperCase() + componentNamespace.substring(1);
      var modifierUpperCase = modifierNamespace[0].toUpperCase() + modifierNamespace.substring(1);

      if (methodName.indexOf('module') > -1) {
        newMethodName = methodName.replace(new RegExp('module', 'g'), moduleNamespace);
      }

      if (methodName.indexOf('Module') > -1) {
        newMethodName = methodName.replace(new RegExp('Module', 'g'), moduleUpperCase);
      }

      if (methodName.indexOf('component') > -1) {
        newMethodName = methodName.replace(new RegExp('component', 'g'), componentNamespace);
      }

      if (methodName.indexOf('Component') > -1) {
        newMethodName = methodName.replace(new RegExp('Component', 'g'), componentUpperCase);
      } // @TODO do modifier renames


      if (options.preset !== 'Synergy' && sQuery && options.alterMethodName.includes('sQuery')) {
        sQuery[newMethodName] = function (node) {
          var _this;

          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          return (_this = this(node))[methodName].apply(_this, params);
        };
      }

      methods[methodName] = newMethodName || methodName;
    }

    if (options.elementProto) {
      methodName = options.alterMethodName.includes('elementProto') ? newMethodName : methodName;

      if (typeof document.body[methodName] === 'undefined') {
        Element.prototype[methodName] = function () {
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }

          return method.bind({
            componentGlue: componentGlue,
            modifierGlue: modifierGlue,
            multipleClasses: multipleClasses
          }).apply(void 0, [this].concat(params));
        };
      }
    }

    if (options.nodeListProto) {
      methodName = options.alterMethodName.includes('nodeListProto') ? newMethodName : methodName;

      NodeList.prototype[methodName] = function () {
        for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          params[_key3] = arguments[_key3];
        }

        return method.bind({
          componentGlue: componentGlue,
          modifierGlue: modifierGlue,
          multipleClasses: multipleClasses
        }).apply(void 0, [this].concat(params));
      };
    }
  };

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    _loop();
  }

  if (typeof sQuery !== 'undefined') {
    sQuery.config = Object.assign(options, {
      methods: methods
    });
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polymorph; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// `process` and `require` are exploited to help reduce bundle size
if (typeof process === 'undefined') window.process = {
  env: {}
};
function polymorph(element, styles) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var globals = arguments.length > 3 ? arguments[3] : undefined;
  var Synergy = window.Synergy || {};
  var sQuery = window.sQuery;

  if (false) {}

  var modifierGlue = config.modifierGlue || Synergy.modifierGlue || '-';
  var componentGlue = config.componentGlue || Synergy.componentGlue || '_';
  var CONFIG = {
    componentGlue: componentGlue,
    modifierGlue: modifierGlue
  };
  var STYLESHEET = styles;

  if (typeof styles === 'function') {
    STYLESHEET = styles(element, config, globals);
  }

  if (styles.constructor === Array) {
    STYLESHEET = styles.map(function (style) {
      return typeof style === 'function' ? style(element, config, globals) : style;
    });
  }

  if (STYLESHEET.constructor === Array) {
    if (STYLESHEET.every(function (value) {
      return value && value.constructor === Object;
    })) {
      STYLESHEET.forEach(function (value) {
        return handleStyleSheet(element, value, CONFIG);
      });
    }
  } else {
    handleStyleSheet(element, STYLESHEET, CONFIG);
  }

  element.repaint();
}
/**
 * 
 */

function handleStyleSheet(element, stylesheet, config) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (!element.polymorph) {
    var WRAPPER_ELEMENT = [].slice.call(element.parentNode.classList).some(function (className) {
      return className.indexOf('group') === 0 || className.indexOf('wrapper') === 0;
    }) && element.parentNode;
    element.polymorph = {
      rules: [],
      COMPONENTS: sQuery.getComponents.bind(_objectSpread({}, config))(element),
      SUB_COMPONENTS: sQuery.getSubComponents.bind(_objectSpread({}, config))(element)
    };
    var _element$polymorph = element.polymorph,
        COMPONENTS = _element$polymorph.COMPONENTS,
        SUB_COMPONENTS = _element$polymorph.SUB_COMPONENTS;

    element.repaint = function (disableDependentElements) {
      var allDependentElements = [];

      if (WRAPPER_ELEMENT && WRAPPER_ELEMENT.repaint) {
        WRAPPER_ELEMENT.repaint(true);
      }

      [element].concat(_toConsumableArray(COMPONENTS), _toConsumableArray(SUB_COMPONENTS)).forEach(function (el) {
        if (el.polymorph) {
          el.polymorph.rules.forEach(function (rule) {
            if (rule.context.every(function (ruleContext) {
              if (ruleContext.value === 'hover') {
                return ruleContext.source.polymorph.isHovered;
              }

              if (ruleContext.value === 'focus') {
                return ruleContext.source.polymorph.isFocused;
              }

              return sQuery.hasModifier.bind(_objectSpread({}, config))(ruleContext.source, ruleContext.value);
            })) {
              var _allDependentElements;

              var dependentElements = doStyles(el, rule.styles) || [];
              dependentElements.length && (_allDependentElements = allDependentElements).push.apply(_allDependentElements, _toConsumableArray(dependentElements));
            }
          });

          if (allDependentElements.includes(el)) {
            allDependentElements.filter(function (item) {
              return item !== el;
            });
          }
        }
      });

      if (!disableDependentElements && allDependentElements.length) {
        allDependentElements = allDependentElements.filter(function (item, pos) {
          return allDependentElements.indexOf(item) == pos;
        });
        allDependentElements.forEach(function (el) {
          return el.repaint && el.repaint(true);
        });
      }
    };
  }

  element.polymorph.rules = element.polymorph.rules.concat({
    context: context,
    styles: stylesheet
  });

  if (typeof stylesheet === 'function') {
    stylesheet = stylesheet(element);
  }

  if (!stylesheet) return;
  Object.entries(stylesheet).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var COMPONENTS = sQuery.getComponents.bind(_objectSpread({}, config))(element, key);
    var SUB_COMPONENTS = sQuery.getSubComponents.bind(_objectSpread({}, config))(element, key); //Handle case where desired element for styles to be applied is manually controlled

    if (value instanceof Array && value[0]) {
      if (value[0] instanceof HTMLElement) {
        handleStyleSheet(value[0], value[1], config, context);
      }

      if (value[0] instanceof NodeList) {
        value[0].forEach(function (el) {
          return handleStyleSheet(el, value[1], config, context);
        });
      }

      return;
    } // Smart handle `components`


    if (COMPONENTS.length) {
      if (value.disableCascade) {
        COMPONENTS = COMPONENTS.filter(function (component) {
          return COMPONENTS.every(function (_component) {
            return component.contains(_component);
          });
        });
      }

      return COMPONENTS.forEach(function (component) {
        return handleStyleSheet(component, value, config, context);
      });
    } // Smart handle `sub-components`


    if (SUB_COMPONENTS.length) {
      if (value.disableCascade) {
        SUB_COMPONENTS = SUB_COMPONENTS.filter(function (subComponent) {
          var componentName = _toConsumableArray(element.classList).reduce(function ($, currentValue) {
            if (currentValue.indexOf(config.componentGlue) > 1) {
              var glueLength = config.componentGlue.length;
              var nameStart = currentValue.lastIndexOf(config.componentGlue) + glueLength;
              currentValue = currentValue.substring(nameStart, currentValue.length);
              return currentValue.substring(0, currentValue.indexOf(config.modifierGlue));
            }
          }, []);

          var parentSubComponent = sQuery.parent.bind(_objectSpread({}, config))(subComponent, componentName);
          return element === parentSubComponent;
        });
      }

      return SUB_COMPONENTS.forEach(function (component) {
        return handleStyleSheet(component, value, config, context);
      });
    } // Handle `sub-components`


    if (key.indexOf('subComponent(') > -1) {
      var subComponent = key.replace('subComponent(', '').replace(/\)/g, '');
      var subComponents = sQuery.getSubComponents.bind(_objectSpread({}, config))(element, subComponent);
      return subComponents.forEach(function (component) {
        return handleStyleSheet(component, value, config, context);
      });
    } // Handle `modifiers`


    if (key.indexOf('modifier(') > -1) {
      var modifier = key.replace('modifier(', '').replace(/\)/g, '');
      return handleStyleSheet(element, value, config, context.concat({
        source: element,
        value: modifier
      }));
    } // Handle `hover` interaction


    if (key === ':hover') {
      handleStyleSheet(element, value, config, context.concat({
        source: element,
        value: 'hover'
      }));
      element.addEventListener('mouseenter', function (event) {
        element.polymorph.isHovered = true;
        element.repaint();
      });
      element.addEventListener('mouseleave', function (event) {
        element.polymorph.isHovered = false;
        element.repaint();
      });
      return;
    } // Handle `focus` interaction


    if (key === ':focus') {
      handleStyleSheet(element, value, config, context.concat({
        source: element,
        value: 'focus'
      }));
      element.addEventListener('focus', function (event) {
        element.polymorph.isFocused = true;
        element.repaint();
      });
      element.addEventListener('blur', function (event) {
        element.polymorph.isFocused = false;
        element.repaint();
      });
      return;
    } // Handle Group/Wrapper elements


    if (key === 'group' || key === 'wrapper') {
      var wrapper = element.parentNode;
      return wrapper.classList.forEach(function (className) {
        if (className.indexOf('group') === 0 || className.indexOf('wrapper') === 0) {
          handleStyleSheet(wrapper, value, config, context);
        }
      });
    }
  });
  element.polymorph.rules.sort(function (a, b) {
    if (!a.context.length && !b.context.length) {
      return 0;
    }

    if (a.context.length && !b.context.length) {
      return 1;
    }

    if (!a.context.length && b.context.length) {
      return -1;
    }

    if (a.context.some(function (c) {
      return c.value === 'hover';
    }) && b.context.some(function (c) {
      return c.value === 'hover';
    })) {
      return 0;
    }

    if (b.context.some(function (c) {
      return c.value === 'hover';
    })) {
      return -1;
    }

    return 0;
  });
}
/**
 * 
 */


function doStyles(el, styles) {
  if (typeof styles === 'function') {
    styles = styles(el);
  }

  if (!styles) return;
  Object.entries(styles).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    if (typeof value === 'function') {
      try {
        return el.style[key] = value(el.style[key]);
      } catch (error) {
        return error;
      }
    } // https://stackoverflow.com/questions/55867116


    if (!isNaN(key)) {
      return;
    }

    return el.style[key] = value;
  });
  var dependentElements = Object.values(styles).reduce(function (accumulator, currentValue) {
    if (currentValue instanceof Array && currentValue[0]) {
      if (currentValue[0] instanceof NodeList || currentValue[0] instanceof Array) {
        return accumulator.concat.apply(accumulator, _toConsumableArray(currentValue[0]));
      }

      return accumulator.concat(currentValue[0]);
    }

    return accumulator;
  }, []);
  return dependentElements;
}
/**
 * Wrapper for sQuery `hasModifier()`
 */


polymorph.modifier = function (element, modifier, modifierGlue, componentGlue) {
  var Synergy = window.Synergy || {};
  modifierGlue = modifierGlue || Synergy.modifierGlue || '-';
  componentGlue = componentGlue || Synergy.componentGlue || '_';
  return sQuery.hasModifier.bind({
    modifierGlue: modifierGlue,
    componentGlue: componentGlue
  })(element, modifier);
};
/**
 * Attach to Window
 */


if (typeof window !== 'undefined') {
  window.polymorph = polymorph;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module) {

module.exports = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "default", function() { return src; });
__webpack_require__.d(src_namespaceObject, "Module", function() { return src_module["d" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Wrapper", function() { return src_module["c" /* Wrapper */]; });
__webpack_require__.d(src_namespaceObject, "Group", function() { return src_module["a" /* Group */]; });
__webpack_require__.d(src_namespaceObject, "Component", function() { return component_Component; });
__webpack_require__.d(src_namespaceObject, "SubComponent", function() { return component_SubComponent; });
__webpack_require__.d(src_namespaceObject, "BEM", function() { return BEM; });

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/module.jsx
var src_module = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/html-tags/index.js
var html_tags = __webpack_require__(6);
var html_tags_default = /*#__PURE__*/__webpack_require__.n(html_tags);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/getHtmlProps.js
var getHtmlProps = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/getModifiersFromProps.js
var getModifiersFromProps = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/generateClasses.js
var generateClasses = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/renderModifiers.js
var renderModifiers = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@onenexus/lucid/src/utilities/refHandler.js
var refHandler = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/component.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ComponentContext = external_react_default.a.createContext();
/**
 * Render a Synergy component
 */

var component_Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "getEventHandlers",
    value: function getEventHandlers(properties) {
      var _this = this;

      var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (properties.constructor === Array) {
        properties.forEach(function (group) {
          return _this.getEventHandlers(group, handlers);
        });
      } else for (var key in properties) {
        var value = properties[key];

        if (Object.keys(window).includes(key.toLowerCase())) {
          if (typeof value === 'function') {
            handlers[key] = value;
          }
        }
      }

      return handlers;
    }
  }, {
    key: "renderTag",
    value: function renderTag(props, context, subComponent) {
      var modifierGlue = context.modifierGlue,
          componentGlue = context.componentGlue;
      var module = props.module || context.module;
      var propModifiers = Object(renderModifiers["a" /* default */])(Object(getModifiersFromProps["a" /* default */])(props, Synergy.CssClassProps), modifierGlue);
      var getContextModifiers = Object(getModifiersFromProps["a" /* default */])(context.props && context.props[props.name], Synergy.CssClassProps);
      var contextModifiers = Object(renderModifiers["a" /* default */])(getContextModifiers, modifierGlue);
      var passedModifiers = Object(renderModifiers["a" /* default */])(props.modifiers, modifierGlue);
      var modifiers = propModifiers + passedModifiers + contextModifiers;
      var eventHandlers = this.getEventHandlers([props, context.config[props.name] ? context.config[props.name] : {}]);
      var Tag = props.href && 'a' || props.component || props.tag || (html_tags_default.a.includes(props.name) ? props.name : 'div');

      var ref = function ref(node) {
        return Object(refHandler["a" /* default */])(node, props, context.styleParser, false, context.ui);
      };

      var contextValues = {
        component: context.component
      }; // if (props.name instanceof Array) {
      //     @TODO
      // }

      var namespace;

      if (subComponent) {
        contextValues.subComponent = [].concat(_toConsumableArray(context.subComponent || []), [props.name]);
        var subComponents = contextValues.subComponent.length ? contextValues.subComponent.join(componentGlue) : '';
        namespace = "".concat(module + componentGlue + (context.component || props.name) + componentGlue + subComponents);
      } else {
        contextValues.component = props.name;
        namespace = module + componentGlue + props.name;
      }

      var classes = Object(generateClasses["a" /* default */])({
        props: props,
        namespace: namespace,
        modifiers: modifiers,
        classes: props.className ? props.className : '',
        modifierGlue: modifierGlue,
        componentGlue: componentGlue,
        multipleClasses: context.multipleClasses
      });
      return external_react_default.a.createElement(ComponentContext.Provider, {
        value: contextValues
      }, external_react_default.a.createElement(Tag, _extends({}, Object(getHtmlProps["a" /* default */])(props), eventHandlers, {
        ref: ref,
        className: classes,
        "data-component": props.name.constructor === Array ? props.name[0] : props.name
      }, this.props.componentProps), props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(src_module["b" /* ModuleContext */].Consumer, null, function (context) {
        if (_this2.props.subComponent) {
          return external_react_default.a.createElement(ComponentContext.Consumer, null, function (componentContext) {
            return _this2.renderTag(_this2.props, _objectSpread({}, context, componentContext), true);
          });
        }

        return _this2.renderTag(_this2.props, context);
      });
    }
  }]);

  return Component;
}(external_react_default.a.Component);


var component_SubComponent = function SubComponent(props) {
  return external_react_default.a.createElement(component_Component, _extends({
    subComponent: true
  }, props), props.children);
};
// CONCATENATED MODULE: ./node_modules/@onenexus/lucid/src/index.js


var BEM = {
  Block: src_module["d" /* default */],
  Element: component_Component,
  SubElement: component_SubComponent
};
/* harmony default export */ var src = ({
  Module: src_module["d" /* default */],
  Component: component_Component,
  SubComponent: component_SubComponent
});

// EXTERNAL MODULE: ./node_modules/@onenexus/squery/src/squery.js
var squery = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@onenexus/polymorph/src/polymorph.js
var polymorph = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/deep-extend/lib/deep-extend.js
var deep_extend = __webpack_require__(19);
var deep_extend_default = /*#__PURE__*/__webpack_require__.n(deep_extend);

// CONCATENATED MODULE: ./src/synergy.js
function synergy_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { synergy_typeof = function _typeof(obj) { return typeof obj; }; } else { synergy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return synergy_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function synergy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { synergy_defineProperty(target, key, source[key]); }); } return target; }

function synergy_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as lucid from '../../../Lucid/Lucid/src';
// import sQuery from '../../../sQuery/sQuery/src/squery';
// import polymorph from '../../../Polymorph/Polymorph/src/polymorph';
// import * as lucid from '../../../Lucid/Lucid/dist/lucid';
// import polymorph from '../../../Polymorph/Polymorph/dist/polymorph';
// import sQuery from '../../../sQuery/sQuery/dist/squery';





if (typeof window !== 'undefined') {
  // Attach Synergy tools to global object
  Object.assign(window, synergy_objectSpread({
    Synergy: window.Synergy || {}
  }, src_namespaceObject)); // Declare global Synergy properties

  Object.assign(Synergy, {
    styleParser: polymorph["a" /* default */],
    // config: (...params) => deepextend({}, ...params),
    config: deep_extend_default.a,
    theme: synergy_theme
  });
}
/**
 * Synergy Theme
 */


function synergy_theme(modules, theme, globals, trump) {
  if (typeof theme === 'function') {
    theme = theme(globals);
  }

  Synergy.config(globals, Synergy.config(theme, trump));
  squery["a" /* default */].init({
    modifierGlue: theme['modifier-glue'],
    componentGlue: theme['component-glue']
  });
  Synergy.CssClassProps = theme['css-class-props'];
  Object.values(modules).forEach(function (MODULE) {
    if (MODULE.defaults) {
      var evaluatedConfig = evalConfig(theme.modules[MODULE.name]);
      window[MODULE.name] = Object.assign(MODULE, {
        config: Synergy.config(MODULE.defaults(globals), evaluatedConfig)
      });
    }
  });

  if (typeof globals.foundation === 'function') {
    globals.foundation(globals);
  }

  delete globals.modules, window.ui = globals;
}
/**
 * Evaluate module config properties
 */


function evalConfig(config) {
  if (!config) return;
  Object.entries(config).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

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