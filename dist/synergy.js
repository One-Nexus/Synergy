(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__16__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getModuleNamespace; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Get the Module name from a Synergy query
 * 
 * @param {*} query 
 * @param {Bool} strict
 */
function getModuleNamespace(query, componentGlue, modifierGlue) {
  var strict = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (query instanceof HTMLElement) {
    if (query.hasAttribute('data-module')) {
      return query.getAttribute('data-module');
    }

    if (query.classList.length) {
      if (strict) {
        return query.classList[0].split(modifierGlue)[0].split(componentGlue)[0];
      }

      return query.classList[0].split(modifierGlue)[0];
    }
  }

  if (typeof query === 'string' && query.match("^[a-zA-Z0-9_-]+$")) {
    return query;
  }

  if (_typeof(query) === 'object' && 'name' in query) {
    return query.name;
  }

  if (query && query.constructor === Array) {
    return query[1];
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/utilities/getModuleNamespace.js
var getModuleNamespace = __webpack_require__(0);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/addModifier.js

/**
 * @param {(String|Array)} modifier 
 */

function addModifier(modifier) {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return this.DOMNodes.forEach(function (node) {
      return addModifier.bind(Object.assign(_this, {
        DOMNodes: node
      }))(modifier);
    });
  }

  if (modifier.constructor === Array) {
    modifier = modifier.join(this.modifierGlue);
  }

  var namespace = this.namespace || Object(getModuleNamespace["a" /* default */])(this.DOMNodes, this.componentGlue, this.modifierGlue);
  this.DOMNodes.classList.add(namespace + this.modifierGlue + modifier);
  return this.DOMNodes;
}
// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/getComponents.js
var getComponents = __webpack_require__(3);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/isComponent.js

/**
 * @param {*} componentName 
 */

function isComponent(componentName) {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).every(function (DOMNodes) {
      return isComponent.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))(componentName);
    });
  }

  return Array.prototype.slice.call(this.DOMNodes.classList).some(function (className) {
    var isAComponent = className.split(_this.componentGlue).length - 1 === 1;
    var query = (_this.namespace || Object(getModuleNamespace["a" /* default */])(_this.DOMNodes, _this.componentGlue, _this.modifierGlue, 'strict')) + _this.componentGlue + componentName;
    var isMatch = query.indexOf(_this.componentGlue + componentName) > -1;
    return className.indexOf(query) === 0 && isAComponent && isMatch;
  });
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/component.js



/**
 * @param {String} componentName 
 * @param {(('find'|'is'|'set'|'unset')|Function)} operator 
 */

function component_component(componentName, operator) {
  var _this = this;

  var namespace = function namespace(node) {
    return _this.namespace || Object(getModuleNamespace["a" /* default */])(node, _this.componentGlue, _this.modifierGlue, 'strict');
  };

  if (!componentName && !operator) {
    return getComponents["default"].bind(this)();
  }

  if (!operator || operator === 'find') {
    return getComponents["default"].bind(this)(componentName);
  }

  if (operator === 'is') {
    return isComponent.bind(this)(componentName);
  }

  if (operator === 'set') {
    if (this.DOMNodes instanceof NodeList) {
      this.DOMNodes.forEach(function (node) {
        return node.classList.add(namespace(node) + _this.componentGlue + componentName);
      });
    } else {
      this.DOMNodes.classList.add(namespace(this.DOMNodes) + this.componentGlue + componentName);
    }
  }

  if (operator === 'unset') {
    if (this.DOMNodes instanceof NodeList) {
      this.DOMNodes.forEach(function (node) {
        return node.classList.remove(namespace(node) + _this.componentGlue + componentName);
      });
    } else {
      this.DOMNodes.classList.remove(namespace(this.DOMNodes) + this.componentGlue + componentName);
    }
  }

  if (typeof operator === 'function') {
    getComponents["default"].bind(this)(componentName).forEach(function (node) {
      return operator(node);
    });
  }
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/utilities/getModules.js
/**
 * @param {*} target 
 * @param {*} moduleName 
 */
function getModules(target, moduleName) {
  if (target.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).reduce(function (matches, node) {
      return matches.concat(Array.prototype.slice.call(node.querySelectorAll(".".concat(moduleName, ", [class*=\"").concat(moduleName + target.modifierGlue, "\"]"))));
    }, []);
  }

  return target.DOMNodes.querySelectorAll(".".concat(moduleName, ", [class*=\"").concat(moduleName + target.modifierGlue, "\"]"));
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/find.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * @param {*} query 
 */

function find(query) {
  var _this = this;

  if (_typeof(query) === 'object') {
    if (this.DOMNodes instanceof NodeList) {
      return Array.prototype.slice.call(this.DOMNodes).reduce(function (matches, node) {
        return matches.concat(getQueryFromObject.bind(_this)(query, node));
      }, []);
    }

    return getQueryFromObject.bind(this)(query, this.DOMNodes);
  }

  if (typeof query === 'string') {
    var components = getComponents["default"].bind(this)(query);

    if (components.length) {
      return components;
    }

    if (getModules(this, query).length) {
      return getModules(this, query);
    }
  }
}
/**
 * @param {Object} query 
 * @param {HTMLElement} node 
 */

function getQueryFromObject(query, node) {
  var _this2 = this;

  var matches = [];

  if (query.module) {
    if (query.component) {
      return matches.concat(Array.prototype.slice.call(getComponents["default"].bind(this)(query.component, query.modifier, query.module)));
    }

    return matches.concat(Array.prototype.slice.call(node.querySelectorAll(".".concat(query.module, ", [class*=\"").concat(query.module + query.modifierGlue, "\"]"))));
  }

  if (query.component) {
    var components = getComponents["default"].bind(this)(query.component);

    if (query.modifier) {
      return matches.concat(Array.prototype.slice.call(components.filter(function (component) {
        return Array.prototype.slice.call(component.classList).some(function (className) {
          var isNamespace = className.indexOf(_this2.namespace || Object(getModuleNamespace["a" /* default */])(component, _this2.componentGlue, _this2.modifierGlue)) === 0;
          var hasModifier = className.indexOf(query.modifier) > -1;
          return isNamespace && hasModifier;
        });
      })));
    }

    return matches.concat(Array.prototype.slice.call(components));
  }

  if (query.modifier) {
    return;
  }
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/getComponent.js

/**
 * @TODO allow this API
 * const [title, content] = panel.getComponent(['title', 'content']);
 */

/**
 * @param {*} componentName 
 */

function getComponent(componentName) {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).map(function (DOMNodes) {
      return getComponent.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))(componentName);
    });
  }

  ;
  return getComponents["default"].bind(this)(componentName)[0];
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/getModifiers.js

/**
 * @param {*} componentName 
 */

function getModifiers() {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).reduce(function (matches, DOMNodes) {
      return matches.concat(getModifiers.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))());
    }, []);
  }

  return Array.prototype.slice.call(this.DOMNodes.classList).filter(function (className) {
    return className.indexOf(_this.namespace || Object(getModuleNamespace["a" /* default */])(_this.DOMNodes, _this.componentGlue, _this.modifierGlue)) === 0;
  }).map(function (target) {
    return target.split(_this.modifierGlue).slice(1);
  })[0];
}
// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/getSubComponents.js
var getSubComponents = __webpack_require__(5);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/getSubComponent.js

/**
 * @param {*} subComponentName 
 */

function getSubComponent_getComponent(subComponentName) {
  var _this = this;

  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).map(function () {
      return getSubComponents["default"].bind(_this)(subComponentName, context)[0];
    });
  }

  return getSubComponents["default"].bind(this)(subComponentName, context)[0];
}
// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/hasModifier.js
var api_hasModifier = __webpack_require__(4);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/utilities/isModule.js
/**
 * @param {*} target 
 * @param {*} moduleName 
 */
function isModule(target, moduleName) {
  var DOMNodes = !(target.DOMNodes instanceof NodeList) ? [target.DOMNodes] : target.DOMNodes;
  return Array.prototype.slice.call(DOMNodes).every(function (node) {
    return node.matches(".".concat(moduleName, ", [class*=\"").concat(moduleName + target.modifierGlue, "\"]"));
  });
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/is.js
function is_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { is_typeof = function _typeof(obj) { return typeof obj; }; } else { is_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return is_typeof(obj); }





/**
 * @param {*} query 
 */

function is(query) {
  var _this = this;

  var DOMNodes = !(this.DOMNodes instanceof NodeList) ? [this.DOMNodes] : this.DOMNodes;

  if (is_typeof(query) === 'object') {
    if (query.module) {
      if (query.component) {
        var isModuleNamespace = Array.prototype.slice.call(DOMNodes).every(function (node) {
          return (_this.namespace || Object(getModuleNamespace["a" /* default */])(node, _this.componentGlue, _this.modifierGlue, true)) === query.module;
        });

        if (query.modifier) {
          return isModuleNamespace && isComponent.bind(this)(query.component) && api_hasModifier["default"].bind(this)(query.modifier);
        }

        return isModuleNamespace && isComponent.bind(this)(query.component);
      }

      return isModule(this, query.module);
    }

    if (query.component) {
      if (query.modifier) {
        return isComponent.bind(this)(query.component) && api_hasModifier["default"].bind(this)(query.modifier);
      }

      return isComponent.bind(this)(query.component);
    }

    if (query.modifier) {
      return api_hasModifier["default"].bind(this)(query.modifier);
    }
  }

  if (typeof query === 'string') {
    if (isModule(this, query)) {
      return isModule(this, query);
    }

    if (isComponent.bind(this)(query)) {
      return isComponent.bind(this)(query);
    }

    if (api_hasModifier["default"].bind(this)(query)) {
      return api_hasModifier["default"].bind(this)(query);
    }
  }

  return false;
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/removeModifier.js

/**
 * @param {(String|Array)} modifier 
 */

function removeModifier(modifier) {
  var _this = this;

  if (modifier.constructor === Array) {
    return modifier.forEach(function (_modifier) {
      removeModifier.bind(Object.assign(_this))(_modifier);
    });
  }

  if (this.DOMNodes instanceof NodeList) {
    return this.DOMNodes.forEach(function (node) {
      return removeModifier.bind(Object.assign(_this, {
        DOMNodes: node
      }))(modifier);
    });
  }

  var node = this.DOMNodes;
  Array.prototype.slice.call(node.classList).forEach(function (className) {
    var moduleMatch = className.indexOf((_this.namespace || Object(getModuleNamespace["a" /* default */])(node, _this.componentGlue, _this.modifierGlue)) + _this.modifierGlue) === 0;
    var modifierMatch = className.indexOf(_this.modifierGlue + modifier) > -1;
    var newClass = className.replace(new RegExp(_this.modifierGlue + modifier, 'g'), '');

    if (moduleMatch && modifierMatch) {
      node.classList.remove(className);
      node.classList.add(newClass);
    }
  });
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/modifier.js



/**
 * @param {String} modifier 
 * @param {(('is'|'set'|'unset')|Function)} operator 
 */

function modifier_modifier(modifier, operator) {
  if (!operator || operator === 'is') {
    return api_hasModifier["default"].bind(this)(modifier);
  }

  if (operator === 'set' || operator === 'add') {
    return addModifier.bind(this)(modifier);
  }

  if (operator === 'unset' || operator === 'remove') {
    return removeModifier.bind(this)(modifier);
  }

  if (operator === 'toggle') {// @TODO
  }
}
// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/parent.js
var api_parent = __webpack_require__(9);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/parentComponent.js
/**
 * @param {*} componentName 
 */
function parentComponent(componentName) {
  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).map(function (node) {
      return node.parentNode.closest("[data-component=\"".concat(componentName, "\"]"));
    });
  }

  return this.DOMNodes.parentNode.closest("[data-component=\"".concat(componentName, "\"]"));
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/setComponent.js

/**
 * @param {*} componentName 
 */

function setComponent(componentName, namespace, replace) {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return this.DOMNodes.forEach(function (DOMNodes) {
      return setComponent.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))(componentName);
    });
  }

  if (!namespace && !replace) {
    replace = this.namespace || Object(getModuleNamespace["a" /* default */])(this.DOMNodes, this.componentGlue, this.modifierGlue);
  }

  namespace = namespace || this.namespace || Object(getModuleNamespace["a" /* default */])(this.DOMNodes, this.componentGlue, this.modifierGlue);
  this.DOMNodes.classList.add(namespace + this.componentGlue + componentName);
  this.DOMNodes.setAttribute('data-component', componentName);
  replace && this.DOMNodes.classList.remove(replace);
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/subComponent.js


/**
 * @param {String} componentName 
 * @param {(('find'|'is')|Function)} operator 
 */

function subComponent(subComponentName, operator) {
  var _this = this;

  if (!subComponentName && !operator) {
    return getSubComponents["default"].bind(this)();
  }

  if (!operator || operator === 'find') {
    return getSubComponents["default"].bind(this)(subComponentName);
  }

  if (operator === 'is') {
    if (this.DOMNodes instanceof NodeList) {
      return Array.prototype.slice.call(this.DOMNodes).every(function (node) {
        return subComponent_is.bind(_this)(node, subComponentName);
      });
    }

    return subComponent_is.bind(this)(this.DOMNodes, subComponentName);
  }

  if (typeof operator === 'function') {
    getSubComponents["default"].bind(this)(subComponentName).forEach(function (node) {
      return operator(node);
    });
  }
}
/**
 * @param {HTMLElement} node 
 * @param {String} subComponentName 
 */

function subComponent_is(node, subComponentName) {
  var query = this.namespace || Object(getModuleNamespace["a" /* default */])(node, this.componentGlue, this.modifierGlue);
  var isMatch = query.indexOf(subComponentName) === query.length - subComponentName.length;
  return Array.prototype.slice.call(node.classList).some(function (className) {
    return className.indexOf(query) > -1 && isMatch;
  });
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/unsetComponent.js

/**
 * @param {*} componentName 
 */

function unsetComponent(componentName) {
  var _this = this;

  if (this.DOMNodes instanceof NodeList) {
    return this.DOMNodes.forEach(function (DOMNodes) {
      return unsetComponent.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))(componentName);
    });
  }

  return Array.prototype.slice.call(this.DOMNodes.classList).forEach(function (className) {
    var isAComponent = className.split(_this.componentGlue).length - 1 === 1;
    var isMatch = className.indexOf((_this.namespace || Object(getModuleNamespace["a" /* default */])(_this.DOMNodes, _this.componentGlue, _this.modifierGlue)) + _this.componentGlue + componentName) === 0;

    if (isAComponent && isMatch) {
      _this.DOMNodes.classList.remove(className);
    }
  });
}
// CONCATENATED MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/api/index.js
/* concated harmony reexport add */__webpack_require__.d(__webpack_exports__, "add", function() { return addModifier; });
/* concated harmony reexport addModifier */__webpack_require__.d(__webpack_exports__, "addModifier", function() { return addModifier; });
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return component_component; });
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return component_component; });
/* concated harmony reexport find */__webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* concated harmony reexport getComponent */__webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* concated harmony reexport getComponents */__webpack_require__.d(__webpack_exports__, "getComponents", function() { return getComponents["default"]; });
/* concated harmony reexport getModifiers */__webpack_require__.d(__webpack_exports__, "getModifiers", function() { return getModifiers; });
/* concated harmony reexport getSubComponent */__webpack_require__.d(__webpack_exports__, "getSubComponent", function() { return getSubComponent_getComponent; });
/* concated harmony reexport getSubComponents */__webpack_require__.d(__webpack_exports__, "getSubComponents", function() { return getSubComponents["default"]; });
/* concated harmony reexport has */__webpack_require__.d(__webpack_exports__, "has", function() { return api_hasModifier["default"]; });
/* concated harmony reexport hasModifier */__webpack_require__.d(__webpack_exports__, "hasModifier", function() { return api_hasModifier["default"]; });
/* concated harmony reexport is */__webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* concated harmony reexport isComponent */__webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* concated harmony reexport modifier */__webpack_require__.d(__webpack_exports__, "modifier", function() { return modifier_modifier; });
/* concated harmony reexport removeModifier */__webpack_require__.d(__webpack_exports__, "removeModifier", function() { return removeModifier; });
/* concated harmony reexport parent */__webpack_require__.d(__webpack_exports__, "parent", function() { return api_parent["default"]; });
/* concated harmony reexport parentComponent */__webpack_require__.d(__webpack_exports__, "parentComponent", function() { return parentComponent; });
/* concated harmony reexport setComponent */__webpack_require__.d(__webpack_exports__, "setComponent", function() { return setComponent; });
/* concated harmony reexport subComponent */__webpack_require__.d(__webpack_exports__, "subComponent", function() { return subComponent; });
/* concated harmony reexport subComponents */__webpack_require__.d(__webpack_exports__, "subComponents", function() { return subComponent; });
/* concated harmony reexport unsetComponent */__webpack_require__.d(__webpack_exports__, "unsetComponent", function() { return unsetComponent; });



















/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComponents; });
/* harmony import */ var _utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utilities_isValidSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



/**
 * @param {*} componentName 
 */

function getComponents() {
  var _this = this;

  var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var modifier = arguments.length > 1 ? arguments[1] : undefined;
  var namespace = arguments.length > 2 ? arguments[2] : undefined;
  if (componentName && !Object(_utilities_isValidSelector__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(componentName)) return [];

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).reduce(function (matches, node) {
      return matches.concat(Array.prototype.slice.call(getComponents.bind(Object.assign(_this, {
        DOMNodes: node
      }))(componentName, modifier, namespace)));
    }, []);
  }

  if (componentName.indexOf('modifier(') === 0) return;
  namespace = namespace || this.namespace || Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this.DOMNodes, this.componentGlue, this.modifierGlue, 'strict');
  var query = namespace + (componentName ? this.componentGlue + componentName : '');
  var selector = ".".concat(query, ", [class*=\"").concat(query + this.modifierGlue, "\"]");

  if (!componentName) {
    selector = "[class*=\"".concat(query + this.componentGlue, "\"]");
  }

  var subComponents = Array.prototype.slice.call(this.DOMNodes.querySelectorAll(selector)).filter(function (component) {
    var parentModule = _parent__WEBPACK_IMPORTED_MODULE_2__["default"].bind(Object.assign(_this, {
      DOMNodes: component
    }))(namespace);
    var parentElementIsModule = _this.parentElement ? _this.parentElement.matches(".".concat(namespace, ", [class*=\"").concat(namespace, "-\"]")) : false;

    if (parentElementIsModule && _this.parentElement !== parentModule) {
      return false;
    }

    return Array.prototype.slice.call(component.classList).some(function (className) {
      var isComponent = className.split(_this.componentGlue).length - 1 === 1;
      var isQueryMatch = className.indexOf(query) === 0;

      if (modifier) {
        return isQueryMatch && isComponent && className.indexOf(modifier) > -1;
      } else {
        return isQueryMatch && isComponent;
      }
    });
  }); // console.log(subComponents)

  return subComponents;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasModifier; });
/* harmony import */ var _utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * @param {*} modifier 
 */

function hasModifier(modifier) {
  var _this = this;

  if (modifier) {
    if (modifier.constructor === Array) {
      return modifier.every(function (_modifier) {
        return hasModifier.bind(_this)(_modifier);
      });
    }

    if (this.DOMNodes instanceof NodeList) {
      return Array.prototype.slice.call(this.DOMNodes).every(function (DOMNodes) {
        return hasModifier.bind(Object.assign(_this, {
          DOMNodes: DOMNodes
        }))(modifier);
      });
    }

    var node = this.DOMNodes;
    return Array.prototype.slice.call(node.classList).some(function (className) {
      var namespace = _this.namespace || node.namespace || Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node, _this.modifierGlue, _this.componentGlue);
      var matchIndex = className.indexOf(_this.modifierGlue + modifier);
      var namespaceMatch = className.indexOf(namespace) === 0;
      var isModifierTest1 = className.indexOf(_this.modifierGlue + modifier + _this.modifierGlue) > -1;
      var isModifierTest2 = matchIndex > -1 && matchIndex === className.length - modifier.length - _this.modifierGlue.length;
      return namespaceMatch && (isModifierTest1 || isModifierTest2);
    });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSubComponents; });
/* harmony import */ var _utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utilities_isValidSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/**
 * @param {*} subComponentName 
 */

function getSubComponents(subComponentName) {
  var _this = this;

  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var modifier = arguments.length > 2 ? arguments[2] : undefined;
  if (subComponentName && !Object(_utilities_isValidSelector__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subComponentName)) return [];

  if (this.DOMNodes instanceof NodeList) {
    return Array.prototype.slice.call(this.DOMNodes).reduce(function (matches, DOMNodes) {
      return matches.concat(Array.prototype.slice.call(getSubComponents.bind(Object.assign(_this, {
        DOMNodes: DOMNodes
      }))(subComponentName, context, modifier)));
    }, []);
  }

  var namespace = this.namespace || Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this.DOMNodes, this.componentGlue, this.modifierGlue) || '';
  var depth = namespace.split(this.componentGlue).length - 1;

  if (context.length) {
    namespace = [namespace].concat(context, [subComponentName]).join(this.componentGlue);
  } else if (subComponentName) {
    namespace = namespace + this.componentGlue + subComponentName;
  }

  var selector = ".".concat(namespace, ", [class*=\"").concat(namespace + this.modifierGlue, "\"]");

  if (!subComponentName) {
    selector = "[class*=\"".concat(namespace + this.componentGlue, "\"]");
  }

  return Array.prototype.slice.call(this.DOMNodes.querySelectorAll(selector)).filter(function (subComponent) {
    return Array.prototype.slice.call(subComponent.classList).some(function (className) {
      if ((className.match(new RegExp(_this.componentGlue, 'g')) || []).length < 2) {
        return false;
      }

      var namespaceMatch;

      if (modifier) {
        namespaceMatch = className.indexOf(namespace) === 0 && className.indexOf(modifier) > -1;
      } else {
        namespaceMatch = className.indexOf(namespace) === 0;
      }

      var depthMatch = className.split(_this.componentGlue).length - 1 === (context.length ? depth : depth + 1);
      return depth ? namespaceMatch && depthMatch : namespaceMatch;
    });
  });
}

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModuleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_getHtmlProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _utilities_getModifiersFromProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _utilities_generateClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _utilities_renderModifiers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _utilities_refHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
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
    var classes = props.className ? ' ' + props.className : '';
    var styleParser = props.styleParser || Synergy.styleParser;
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
    _this.classNames = Object(_utilities_generateClasses__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(props, _this.namespace + modifiers + classes, modifierGlue);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidSelector; });
/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @param {String} selector - the selector to test for validity
 * 
 * @returns {Bool}
 * 
 * @example isValidSelector('[data-foo-bar]') // returns true
 * @example isValidSelector(4) // returns false
 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parent; });
/* harmony import */ var _utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * @param {(String|'module'|'component')} query 
 */

function parent(query, namespace) {
  var _this = this;

  if (query === 'module') {
    return _toConsumableArray(this.DOMNodes).map(function (node) {
      return node.parentNode.closest('[data-module]');
    });
  }

  if (query === 'component') {
    return _toConsumableArray(this.DOMNodes).map(function (node) {
      return node.parentNode.closest('[data-component]');
    });
  }

  if (query && typeof query === 'string') {
    var moduleMatch = function moduleMatch() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.DOMNodes;
      var parentModule;

      if (nodes instanceof NodeList) {
        return _toConsumableArray(nodes).map(function (node) {
          return moduleMatch(node);
        });
      }

      parentModule = nodes.parentNode.closest("[data-module=\"".concat(query, "\"]"));

      if (parentModule) {
        return parentModule;
      }

      parentModule = nodes.closest(".".concat(query, ", [class*=\"").concat(query + _this.modifierGlue, "\"]"));

      if (parentModule && Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(parentModule, _this.componentGlue, _this.modifierGlue, 'strict') === query) {
        return parentModule;
      }
    };

    var componentMatch = function componentMatch() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.DOMNodes;
      namespace = namespace || Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nodes, _this.componentGlue, _this.modifierGlue, 'strict');
      var parentModule, selector;

      if (nodes instanceof NodeList) {
        return _toConsumableArray(nodes).map(function (node) {
          return componentMatch(node);
        });
      }

      parentModule = nodes.parentNode.closest("[data-component=\"".concat(query, "\"]"));

      if (parentModule) {
        return parentModule;
      }

      parentModule = nodes.parentNode.closest(".".concat(namespace + _this.componentGlue + query));

      if (parentModule) {
        return parentModule;
      }

      selector = "[class*=\"".concat(namespace + _this.componentGlue, "\"][class*=\"").concat(_this.componentGlue + query, "\"]");
      parentModule = nodes.parentNode.closest(selector);

      if (parentModule) {
        return parentModule;
      }
    };

    if (this.DOMNodes instanceof HTMLElement) {
      return moduleMatch() || componentMatch();
    }

    return moduleMatch()[0] ? moduleMatch() : componentMatch();
  }
}

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(26);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHtmlProps; });
/* harmony import */ var html_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateClasses; });
/**
 * Generate CSS classes for a module
 */
function generateClasses(props, classes, modifierGlue) {
  // Get modules from props
  Object.entries(props).forEach(function (prop) {
    var firstLetter = prop[0][0];

    if (firstLetter === firstLetter.toUpperCase()) {
      var module = prop[0].toLowerCase();
      var modifiers = '';

      if (prop[1].constructor === Array) {
        modifiers = modifierGlue + prop[1].join(modifierGlue);
      } else if (typeof prop[1] === 'string') {
        modifiers = modifierGlue + prop[1];
      }

      classes = classes + ' ' + module + modifiers;
    }
  });
  return classes;
}

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polymorph; });
/* harmony import */ var _utilities_isValidCssProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _utilities_stringifyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var sQuery = typeof window !== 'undefined' && window.sQuery; // `process` and `require` are exploited to help reduce bundle size

if (!sQuery || typeof process !== 'undefined' && !true) {
  sQuery = {
    getComponents: __webpack_require__(3).default,
    getSubComponents: __webpack_require__(5).default,
    hasModifier: __webpack_require__(4).default,
    parent: __webpack_require__(9).default
  };
}
/**
 * Set a module's styles on a DOM element instance
 */


function polymorph(element) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var globals = arguments.length > 3 ? arguments[3] : undefined;
  var parentElement = arguments.length > 4 ? arguments[4] : undefined;
  var specificity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var Synergy = window.Synergy || {};
  var modifierGlue = config.modifierGlue || Synergy.modifierGlue || '-';
  var componentGlue = config.componentGlue || Synergy.componentGlue || '_';
  var values = _typeof(styles) === 'object' ? styles : styles(element, config, globals);
  /**
   * Setup `repaint` method on parent element
   */

  if (!parentElement && !element.repaint) {
    element.repaint = function (custom) {
      /**
       * Merge default + custom options
       */
      var options = Object.assign({
        clean: false
      }, custom);
      /**
       * Get child components
       */

      var components = sQuery.getComponents.bind({
        DOMNodes: element,
        componentGlue: componentGlue,
        modifierGlue: modifierGlue,
        parentElement: element
      })();
      /**
       * Get child sub-components
       */

      var subComponents = sQuery.getSubComponents.bind({
        DOMNodes: element,
        componentGlue: componentGlue,
        modifierGlue: modifierGlue,
        parentElement: element
      })();
      /**
       * Remove styles that were not added by polymorph
       */

      if (options.clean) {
        element.style.cssText = null;
        components.forEach(function (component) {
          return component.style.cssText = null;
        });
      }
      /**
       * Clean parent element/module
       */


      element.data && Object.keys(element.data.properties).forEach(function (property) {
        element.style[property] = null;
      });
      element.data.properties = {};
      /**
       * Clean child components
       */

      components.forEach(function (component) {
        component.data && Object.keys(component.data.properties).forEach(function (property) {
          component.style[property] = null;
        });
        component.data = null;
      });
      /**
       * Clean child sub-components
       */

      subComponents.forEach(function (component) {
        component.data && Object.keys(component.data.properties).forEach(function (property) {
          component.style[property] = null;
        });
        component.data = null;
      });
      /**
       * Repaint the module
       */

      polymorph(element, styles, config, globals);

      if (element.repaint.states.length) {
        element.repaint.states.forEach(function (style) {
          return style();
        });
      }

      element.dispatchEvent(new Event('moduledidrepaint'));
    };

    element.repaint.states = [];
  }
  /**
   * Handle array of top-level rule sets/stylesheets
   */


  if (styles.constructor === Array) {
    return styles.forEach(function (stylesheet) {
      return polymorph(element, stylesheet, config, globals, parentElement, specificity);
    });
  }
  /**
   * Handle array of object values for cascading effect
   */


  if (values.constructor === Array) {
    if (values.every(function (value) {
      return value.constructor == Object;
    })) {
      values.forEach(function (value) {
        return polymorph(element, value, false, globals);
      });
    }
  }
  /**
   * Initialise data interface
   */


  element.data = element.data || {
    states: [],
    properties: {}
  };
  /**
   * Determine the parent element/module
   */

  parentElement = parentElement || element;
  /**
   * Loop through rule set
   */

  var _arr = Object.entries(values);

  var _loop = function _loop() {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    var matchedComponents = sQuery.getComponents.bind({
      DOMNodes: element,
      componentGlue: componentGlue,
      modifierGlue: modifierGlue,
      parentElement: parentElement
    })(key);
    var matchedSubComponents = sQuery.getSubComponents.bind({
      DOMNodes: element,
      componentGlue: componentGlue,
      modifierGlue: modifierGlue,
      parentElement: parentElement
    })(key);
    /**
     * Handle object of CSS properties / function that will return an object
     * of CSS properties
     */

    if (typeof value === 'function' || _typeof(value) === 'object') {
      /**
       * Handle case where desired element for styles to be applied needs to be
       * manually controlled
       */
      if (value instanceof Array) {
        if (value[0] instanceof HTMLElement) {
          polymorph(value[0], value[1], false, globals, parentElement, specificity);
        }

        if (value[0] instanceof NodeList) {
          value[0].forEach(function (node) {
            return polymorph(node, value[1], false, globals, parentElement, specificity);
          });
        }
      }
      /**
       * Handle `modifiers`
       */
      else if (key.indexOf('modifier(') > -1) {
          var modifier = key.replace('modifier(', '').replace(/\)/g, '');

          if (sQuery.hasModifier.bind({
            DOMNodes: element,
            componentGlue: componentGlue,
            modifierGlue: modifierGlue
          })(modifier)) {
            specificity++;
            polymorph(element, value, false, globals, parentElement, specificity);
          }
        }
        /**
         * Smart handle `components`
         */
        else if (matchedComponents.length) {
            matchedComponents.forEach(function (_component) {
              if (_typeof(value) === 'object') {
                polymorph(_component, value, false, globals, parentElement);
              } else if (typeof value === 'function') {
                polymorph(_component, value(_component), false, globals, parentElement);
              }
            });
          }
          /**
           * Handle `sub-components`
           */
          else if (key.indexOf('subComponent(') > -1) {
              var subComponent = key.replace('subComponent(', '').replace(/\)/g, '');
              var subComponents = sQuery.getSubComponents.bind({
                DOMNodes: element,
                componentGlue: componentGlue,
                modifierGlue: modifierGlue,
                parentElement: parentElement
              })(subComponent);

              if (subComponents.length) {
                subComponents.forEach(function (_component) {
                  if (_typeof(value) === 'object') {
                    polymorph(_component, value, false, globals, parentElement);
                  } else if (typeof value === 'function') {
                    polymorph(_component, value(_component), false, globals, parentElement);
                  }
                });
              }

              return {
                v: void 0
              };
            }
            /**
             * Smart handle `sub-components`
             */
            else if (matchedSubComponents.length) {
                if (value.disableCascade) {
                  matchedSubComponents = matchedSubComponents.filter(function (subComponent) {
                    if (!element.getAttribute('data-component')) {
                      console.warn("".concat(element, " does not have data-component attribute so disableCascade option in ").concat(value, " may not reliably work"));
                    }

                    var componentName = element.getAttribute('data-component') || _toConsumableArray(element.classList).reduce(function (accumulator, currentValue) {
                      if (currentValue.indexOf(componentGlue) > 1) {
                        currentValue = currentValue.substring(currentValue.lastIndexOf(componentGlue) + 1, currentValue.length);
                        return currentValue.substring(0, currentValue.indexOf(modifierGlue));
                      }
                    }, []);

                    var parentSubComponent = sQuery.parent.bind({
                      DOMNodes: subComponent,
                      modifierGlue: modifierGlue,
                      componentGlue: componentGlue
                    })(componentName);
                    return element === parentSubComponent;
                  });
                }

                matchedSubComponents.forEach(function (_component) {
                  if (_typeof(value) === 'object') {
                    polymorph(_component, value, false, globals, parentElement);
                  } else if (typeof value === 'function') {
                    polymorph(_component, value(_component), false, globals, parentElement);
                  }
                });
              }
              /**
               * Handle module `group` and `wrapper`
               */
              else if (key === 'group' || key === 'wrapper') {
                  // @TODO this currently runs for each item in the group/wrapper,
                  // should ideally run just once per group/wrapper
                  element.parentNode.classList.forEach(function (className) {
                    if (className.indexOf('group') === 0 || className.indexOf('wrapper') === 0) {
                      var wrapperValues = _typeof(value) === 'object' ? value : value(element.parentNode);
                      var childValues = _typeof(value) === 'object' ? value : value(element); // apply styles to wrapper/group element

                      polymorph(element.parentNode, wrapperValues, false, globals, parentElement); // apply styles to child modules

                      polymorph(element, childValues, false, globals, parentElement);
                    }
                  });
                  return {
                    v: void 0
                  };
                }
                /**
                 * Handle `hover` interaction
                 */
                else if (key === ':hover') {
                    var stringifiedState = Object(_utilities_stringifyState__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(values);
                    var isHoverState = parentElement.data.states.some(function (state) {
                      return state.type === 'mouseover' && state.element === element && state.value === stringifiedState;
                    });

                    if (!isHoverState) {
                      parentElement.data.states.push({
                        type: 'mouseover',
                        element: element,
                        value: stringifiedState
                      });
                      element.addEventListener('mouseover', function mouseover() {
                        element.removeEventListener('mouseover', mouseover);
                        parentElement.repaint.states.push(function () {
                          return polymorph(element, value, false, globals, parentElement);
                        });
                        polymorph(element, value, false, globals, parentElement);
                      }, false);
                      element.addEventListener('mouseout', function mouseout() {
                        element.removeEventListener('mouseout', mouseout);
                        parentElement.data.states = parentElement.data.states.filter(function (state) {
                          return !(state.type === 'mouseover' && state.element === element && state.value === stringifiedState);
                        });
                        parentElement.repaint.states = [];
                        parentElement.repaint();
                      }, false);
                    }
                  }
                  /**
                   * Handle `focus` interaction
                   */
                  else if (key === ':focus') {
                      // handleState(parentElement, element, ['focus', 'blur'], value, globals);
                      var isFocusState = parentElement.data.states.some(function (state) {
                        return state.type === 'focus' && state.element === element;
                      });

                      if (!isFocusState) {
                        parentElement.data.states.push({
                          type: 'focus',
                          element: element
                        });
                        element.addEventListener('focus', function focus() {
                          element.removeEventListener('focus', focus);
                          polymorph(element, value, false, globals, parentElement);
                        }, true);
                        element.addEventListener('blur', function blur() {
                          element.removeEventListener('blur', blur);
                          parentElement.data.states = parentElement.data.states.filter(function (state) {
                            return !(state.type === 'focus' && state.element === element);
                          });
                          parentElement.repaint();
                        }, true);
                      }
                    }
                    /**
                     * Handle `before` pseudo element
                     */
                    // else if (key === ':before') {
                    //     console.log(value);
                    // }

                    /**
                     * Handle case where CSS `value` to be applied to `element` is a function
                     */
                    else if (typeof value === 'function') {
                        if (!element.data.properties[key] || element.data.properties[key].specificity < specificity) {
                          if (Object(_utilities_isValidCssProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(key)) {
                            element.style[key] = value(element.style[key]);
                            element.data.properties[key] = {
                              value: value(element.style[key]),
                              specificity: specificity
                            };
                          }
                        } else {// @TODO handle condition (what is it?)
                        }
                      } else {// @TODO handle condition (what is it?)
                        }
    }
    /**
     * Handle CSS property
     */
    else {
        var props = element.data.properties;

        if (!props[key] || !props[key].specificity || props[key].specificity < specificity) {
          element.style[key] = value;
          props[key] = {
            value: value,
            specificity: specificity
          };
        }
      }
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  }
  /**
   * Dispatch initial event when styles first mount
   */


  if (element === parentElement && config !== false) {
    element.dispatchEvent(new Event('stylesdidmount'));
  }
}
/**
 * Wrapper for sQuery `hasModifier()`
 */

polymorph.modifier = function (element, modifier, modifierGlue, componentGlue) {
  var Synergy = window.Synergy || {};
  modifierGlue = modifierGlue || Synergy.modifierGlue || '-';
  componentGlue = componentGlue || Synergy.componentGlue || '_';
  return sQuery.hasModifier.bind({
    DOMNodes: element,
    modifierGlue: modifierGlue,
    componentGlue: componentGlue
  })(modifier);
};
/**
 * Attach to Window
 */


if (typeof window !== 'undefined') {
  window.polymorph = polymorph;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidCssProperty; });
/**
 * Determine if a string is a valid CSS property
 * 
 * @param {String} query
 */
function isValidCssProperty(query) {
  var el = document.createElement('div');
  el.style[query] = 'initial';
  return !!el.style.cssText;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Stringify a polymorph state
 * 
 * @see https://stackoverflow.com/a/48254637/2253888
 * 
 * @param {Object} state 
 */
/* harmony default export */ __webpack_exports__["a"] = (function (state) {
  var cache = new Set();
  return JSON.stringify(state, function (key, value) {
    // Do not attempt to serialize DOM elements as the bloat causes browser to crash
    if (value instanceof HTMLElement) {
      value = '[HTMLElement]';
    }

    if (_typeof(value) === 'object' && value !== null) {
      if (cache.has(value)) {
        // Circular reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value));
        } catch (err) {
          // discard key if value cannot be deduped
          return;
        }
      } // Store value in our set


      cache.add(value);
    }

    return value;
  });
});
;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sQuery; });
/* harmony import */ var _utilities_getConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _utilities_getDomNodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // spoof env process to assist bundle size

if (typeof process === 'undefined') window.process = {
  env: {}
};
/**
 * @param {*} SynergyQuery
 * @param {Function} [callback]
 * @param {Object} [defaults]
 * @param {Object} [custom]
 * @param {Object} [parser]
 */

function sQuery(SynergyQuery, callback, defaults, custom, parser) {
  var Synergy = window.Synergy || {};
  var methods = {};
  var config = Object(_utilities_getConfig__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(defaults, custom, parser);
  var modifierGlue = config.modifierGlue || Synergy.modifierGlue || '-';
  var componentGlue = config.componentGlue || Synergy.componentGlue || '_';
  var namespace = Object(_utilities_getModuleNamespace__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SynergyQuery, componentGlue, modifierGlue);
  var DOMNodes = Object(_utilities_getDomNodes__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SynergyQuery);

  var _arr = Object.entries(_api__WEBPACK_IMPORTED_MODULE_4__);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        method = _arr$_i[1];

    methods[key] = method.bind({
      namespace: namespace,
      DOMNodes: DOMNodes,
      componentGlue: componentGlue,
      modifierGlue: modifierGlue
    });
  }

  if (typeof callback === 'function') {
    if (DOMNodes instanceof NodeList) {
      DOMNodes.forEach(function (node) {
        return callback(node, config);
      });
    } else {
      callback(node, DOMNodes);
    }
  }

  return Object.assign(methods, {
    namespace: namespace,
    DOMNodes: DOMNodes,
    DOMNode: DOMNodes ? DOMNodes[0] : null
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDomNodes; });
/* harmony import */ var _isValidSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
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
    return query;
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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
    BEM: ['__', '--', 'block', 'element', 'modifier'],
    Synergy: ['_', '-', 'module', 'component', 'modifier']
  };

  var _Array$prototype$slic = Array.prototype.slice.call(PRESETS[options.preset]),
      _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 5),
      componentGlue = _Array$prototype$slic2[0],
      modifierGlue = _Array$prototype$slic2[1],
      moduleNamespace = _Array$prototype$slic2[2],
      componentNamespace = _Array$prototype$slic2[3],
      modifierNamespace = _Array$prototype$slic2[4];

  componentGlue = options.componentGlue || componentGlue;
  modifierGlue = options.modifierGlue || modifierGlue;

  if (options.Synergy) {
    window.Synergy = window.Synergy || {};
    Object.assign(window.Synergy, {
      componentGlue: componentGlue,
      modifierGlue: modifierGlue
    });
  }

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

      if (methodName.toLowerCase().indexOf('module') > -1) {
        newMethodName = methodName.replace(new RegExp('module', 'g'), moduleNamespace);
      }

      if (methodName.toLowerCase().indexOf('Module') > -1) {
        newMethodName = methodName.replace(new RegExp('Module', 'g'), moduleUpperCase);
      }

      if (methodName.indexOf('component') > -1) {
        newMethodName = methodName.replace(new RegExp('component', 'g'), componentNamespace);
      }

      if (methodName.indexOf('Component') > -1) {
        newMethodName = methodName.replace(new RegExp('Component', 'g'), componentUpperCase);
      }

      if (methodName.toLowerCase().indexOf('modifier') > -1) {
        newMethodName = methodName.replace(new RegExp('modifier', 'g'), modifierNamespace);
      }

      if (methodName.toLowerCase().indexOf('Modifier') > -1) {
        newMethodName = methodName.replace(new RegExp('Modifier', 'g'), modifierUpperCase);
      }

      if (options.preset !== 'Synergy' && sQuery && options.alterMethodName.includes('sQuery')) {
        sQuery[newMethodName] = function (node) {
          var _this;

          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          return (_this = this(node))[methodName].apply(_this, params);
        };
      }
    }

    if (options.elementProto) {
      methodName = options.alterMethodName.includes('elementProto') ? newMethodName : methodName;

      if (typeof document.body[methodName] === 'undefined') {
        Element.prototype[methodName] = function () {
          return method.bind({
            DOMNodes: this,
            parentElement: this,
            componentGlue: componentGlue,
            modifierGlue: modifierGlue
          }).apply(void 0, arguments);
        };
      }
    }

    if (options.nodeListProto) {
      methodName = options.alterMethodName.includes('nodeListProto') ? newMethodName : methodName;

      NodeList.prototype[methodName] = function () {
        return method.bind({
          DOMNodes: this,
          parentElement: this,
          componentGlue: componentGlue,
          modifierGlue: modifierGlue
        }).apply(void 0, arguments);
      };
    }
  };

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    _loop();
  }
}

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module) {

module.exports = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "Module", function() { return src_module["d" /* default */]; });
__webpack_require__.d(src_namespaceObject, "Wrapper", function() { return src_module["c" /* Wrapper */]; });
__webpack_require__.d(src_namespaceObject, "Group", function() { return src_module["a" /* Group */]; });
__webpack_require__.d(src_namespaceObject, "Component", function() { return component_Component; });
__webpack_require__.d(src_namespaceObject, "SubComponent", function() { return component_SubComponent; });

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/module.jsx
var src_module = __webpack_require__(7);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/node_modules/html-tags/index.js
var html_tags = __webpack_require__(11);
var html_tags_default = /*#__PURE__*/__webpack_require__.n(html_tags);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/utilities/getHtmlProps.js
var getHtmlProps = __webpack_require__(12);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/utilities/getModifiersFromProps.js
var getModifiersFromProps = __webpack_require__(10);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/utilities/generateClasses.js
var generateClasses = __webpack_require__(13);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/utilities/renderModifiers.js
var renderModifiers = __webpack_require__(6);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/utilities/refHandler.js
var refHandler = __webpack_require__(14);

// CONCATENATED MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/component.jsx
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
      var classes = Object(generateClasses["a" /* default */])(props, props.className ? ' ' + props.className : '', modifierGlue);
      var modifiers = propModifiers + passedModifiers + contextModifiers;
      var eventHandlers = this.getEventHandlers([props, context.config[props.name] ? context.config[props.name] : {}]);
      var Tag = props.href && 'a' || props.component || props.tag || (html_tags_default.a.includes(props.name) ? props.name : 'div');

      var ref = function ref(node) {
        return Object(refHandler["a" /* default */])(node, props, context.styleParser, false, context.ui);
      };

      var selector = '';

      if (props.name instanceof Array) {
        props.name.forEach(function (name) {
          return selector = (selector ? selector + ' ' : '') + "".concat(module + componentGlue + name + modifiers);
        });
        selector = selector + classes;
      } else {
        selector = "".concat(module + componentGlue + props.name + modifiers) + classes;
      }

      var contextValues = {
        component: context.component
      };

      if (subComponent) {
        contextValues.subComponent = [].concat(_toConsumableArray(context.subComponent || []), [props.name]);
        var subComponents = contextValues.subComponent.length ? contextValues.subComponent.join(componentGlue) : '';
        var namespace = "".concat((context.component || props.name) + componentGlue + subComponents);
        selector = "".concat(module + componentGlue + namespace + modifiers + classes);
      } else {
        contextValues.component = props.name;
      }

      return external_react_default.a.createElement(ComponentContext.Provider, {
        value: contextValues
      }, external_react_default.a.createElement(Tag, _extends({}, Object(getHtmlProps["a" /* default */])(props), eventHandlers, {
        ref: ref,
        className: selector,
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
// CONCATENATED MODULE: /Users/reede/Documents/Projects/Lucid/Lucid/src/index.js


// EXTERNAL MODULE: /Users/reede/Documents/Projects/Polymorph/Polymorph/src/polymorph.js
var polymorph = __webpack_require__(18);

// EXTERNAL MODULE: /Users/reede/Documents/Projects/sQuery/sQuery/src/squery.js
var squery = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/deep-extend/lib/deep-extend.js
var deep_extend = __webpack_require__(25);
var deep_extend_default = /*#__PURE__*/__webpack_require__.n(deep_extend);

// CONCATENATED MODULE: ./src/synergy.js
function synergy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { synergy_defineProperty(target, key, source[key]); }); } return target; }

function synergy_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import * as lucid from '../../../Lucid/Lucid/dist/lucid';
// import polymorph from '../../../Polymorph/Polymorph/dist/polymorph';
// import sQuery from '../../../sQuery/sQuery/dist/squery';
// @TODO sQuery.init needs to be called upon importing this file...



if (typeof window !== 'undefined') {
  // Attach Synergy tools to global object
  Object.assign(window, synergy_objectSpread({
    Synergy: window.Synergy || {}
  }, src_namespaceObject)); // Declare global Synergy properties

  Object.assign(Synergy, {
    styleParser: polymorph["a" /* default */],
    config: function config() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return deep_extend_default.a.apply(void 0, [{}].concat(params));
    },
    theme: synergy_theme
  });
}
/**
 * Synergy Theme
 * 
 * @param {*} modules
 * @param {*} globals
 * @param {*} theme
 */


function synergy_theme(modules, theme, globals) {
  window.ui = Synergy.config(globals, theme);
  delete window.ui.modules;
  squery["a" /* default */].init({
    modifierGlue: theme['modifier-glue'],
    componentGlue: theme['component-glue']
  });
  Synergy.CssClassProps = theme['css-class-props'];
  Object.values(modules).forEach(function (MODULE) {
    return MODULE.defaults && (window[MODULE.name] = Object.assign(MODULE, {
      config: Module.config(MODULE.defaults(ui), theme.modules[MODULE.name])
    }));
  });

  if (typeof ui.foundation === 'function') {
    ui.foundation(ui);
  }
}

/***/ })
/******/ ]);
});