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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getModuleNamespace;
/**
 * Get the Module name from a Synergy query
 * 
 * @param {*} query 
 * @param {Bool} strict
 */
function getModuleNamespace(query, componentGlue, modifierGlue) {
    var strict = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
    }

    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object' && 'name' in query) {
        return query.name;
    }

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
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponents;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function getComponents() {
    var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var _this = this;

    var modifier = arguments[1];
    var namespace = arguments[2];

    return [].concat(_toConsumableArray(this.DOMNodes)).reduce(function (matches, node) {
        namespace = namespace || _this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue, 'strict');

        var query = namespace + (componentName ? _this.componentGlue + componentName : '');

        return matches.concat.apply(matches, _toConsumableArray([].concat(_toConsumableArray(node.querySelectorAll('[class*="' + query + '"]'))).filter(function (component) {
            return [].concat(_toConsumableArray(component.classList)).some(function (className) {
                var isComponent = className.split(_this.componentGlue).length - 1 === 1;
                var isQueryMatch = className.indexOf(query) === 0;

                if (modifier) {
                    return isQueryMatch && isComponent && className.indexOf(modifier) > -1;
                } else {
                    return isQueryMatch && isComponent;
                }
            });
        })));
    }, []);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModuleNamespace;
/**
 * Get the Module name from a Synergy query/DOM element
 * 
 * @param {*} query - query from which to retrieve a namespace
 * @param {String} componentGlue
 * @param {String} modifierGlue
 * @param {Bool} strict - return the root module name, excluding components
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
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isComponent;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function isComponent(componentName) {
    var _this = this;

    return [].concat(_toConsumableArray(this.DOMNodes)).every(function (node) {
        return [].concat(_toConsumableArray(node.classList)).some(function (className) {
            var isAComponent = className.split(_this.componentGlue).length - 1 === 1;
            var query = _this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue);
            var isMatch = query.indexOf(_this.componentGlue + componentName) > -1;

            return className.indexOf(query) === 0 && isAComponent && isMatch;
        });
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getSubComponts;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} subComponentName 
 */
function getSubComponts(subComponentName) {
    var _this = this;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var modifier = arguments[2];

    return [].concat(_toConsumableArray(this.DOMNodes)).reduce(function (matches, node) {
        var namespace = _this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue);

        if (context.length) {
            namespace = [namespace].concat(context, [subComponentName]).join(_this.componentGlue);
        }

        var depth = namespace.split(_this.componentGlue).length - 1;

        return matches.concat.apply(matches, _toConsumableArray([].concat(_toConsumableArray(node.querySelectorAll('[class*="' + namespace + '"]'))).filter(function (subComponent) {
            return [].concat(_toConsumableArray(subComponent.classList)).some(function (className) {
                var namespaceMatch = void 0;

                if (modifier) {
                    namespaceMatch = className.indexOf(namespace) === 0 && className.indexOf(modifier) > -1;
                } else {
                    namespaceMatch = className.indexOf(namespace) === 0;
                }

                var depthMatch = className.split(_this.componentGlue).length - 1 === (context.length ? depth : depth + 1);

                return namespaceMatch && depthMatch;
            });
        })));
    }, []);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasModifier;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

        return [].concat(_toConsumableArray(this.DOMNodes)).every(function (node) {
            return [].concat(_toConsumableArray(node.classList)).some(function (className) {
                var matchIndex = className.indexOf(_this.modifierGlue + modifier);
                var namespaceMatch = className.indexOf(_this.namespace || (0, _getModuleNamespace2.default)(node, _this.modifierGlue, _this.componentGlue)) === 0;
                var isModifierTest1 = className.indexOf(_this.modifierGlue + modifier + _this.modifierGlue) > -1;
                var isModifierTest2 = matchIndex > -1 && matchIndex === className.length - modifier.length - 1;

                return namespaceMatch && (isModifierTest1 || isModifierTest2);
            });
        });
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(21);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHtmlProps;

var _htmlAttributes = __webpack_require__(23);

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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addModifier = __webpack_require__(14);

Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_addModifier).default;
    }
});
Object.defineProperty(exports, 'addModifier', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_addModifier).default;
    }
});

var _component = __webpack_require__(36);

Object.defineProperty(exports, 'component', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_component).default;
    }
});
Object.defineProperty(exports, 'components', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_component).default;
    }
});

var _find = __webpack_require__(37);

Object.defineProperty(exports, 'find', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_find).default;
    }
});

var _getComponent = __webpack_require__(39);

Object.defineProperty(exports, 'getComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getComponent).default;
    }
});

var _getComponents = __webpack_require__(1);

Object.defineProperty(exports, 'getComponents', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getComponents).default;
    }
});

var _getModifiers = __webpack_require__(40);

Object.defineProperty(exports, 'getModifiers', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getModifiers).default;
    }
});

var _getSubComponent = __webpack_require__(41);

Object.defineProperty(exports, 'getSubComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getSubComponent).default;
    }
});

var _getSubComponents = __webpack_require__(5);

Object.defineProperty(exports, 'getSubComponents', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_getSubComponents).default;
    }
});

var _hasModifier = __webpack_require__(6);

Object.defineProperty(exports, 'has', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_hasModifier).default;
    }
});
Object.defineProperty(exports, 'hasModifier', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_hasModifier).default;
    }
});

var _is = __webpack_require__(42);

Object.defineProperty(exports, 'is', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_is).default;
    }
});

var _isComponent = __webpack_require__(4);

Object.defineProperty(exports, 'isComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_isComponent).default;
    }
});

var _modifier = __webpack_require__(44);

Object.defineProperty(exports, 'modifier', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_modifier).default;
    }
});

var _removeModifier = __webpack_require__(15);

Object.defineProperty(exports, 'removeModifier', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_removeModifier).default;
    }
});

var _parent = __webpack_require__(45);

Object.defineProperty(exports, 'parent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_parent).default;
    }
});

var _parentComponent = __webpack_require__(46);

Object.defineProperty(exports, 'parentComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_parentComponent).default;
    }
});

var _setComponent = __webpack_require__(47);

Object.defineProperty(exports, 'setComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_setComponent).default;
    }
});

var _subComponent = __webpack_require__(48);

Object.defineProperty(exports, 'subComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_subComponent).default;
    }
});
Object.defineProperty(exports, 'subComponents', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_subComponent).default;
    }
});

var _unsetComponent = __webpack_require__(49);

Object.defineProperty(exports, 'unsetComponent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_unsetComponent).default;
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addModifier;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {(String|Array)} modifier 
 */
function addModifier(modifier) {
    var _this = this;

    this.DOMNodes.forEach(function (node) {
        if (modifier.constructor === Array) {
            modifier = modifier.join(_this.modifierGlue);
        }

        node.classList.add((_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue)) + _this.modifierGlue + modifier);
    });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeModifier;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {(String|Array)} modifier 
 */
function removeModifier(modifier) {
    var _this = this;

    this.DOMNodes.forEach(function (node) {
        if (modifier.constructor === Array) {
            return modifier.forEach(function (_modifier) {
                removeModifier.bind(Object.assign(_this, { DOMNodes: [node] }))(_modifier);
            });
        }

        [].concat(_toConsumableArray(node.classList)).forEach(function (className) {
            var moduleMatch = className.indexOf((_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue)) + _this.modifierGlue) === 0;
            var modifierMatch = className.indexOf(_this.modifierGlue + modifier) > -1;
            var newClass = className.replace(new RegExp(_this.modifierGlue + modifier, 'g'), '');

            if (moduleMatch && modifierMatch) {
                node.classList.remove(className);
                node.classList.add(newClass);
            }
        });
    });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _src = __webpack_require__(17);

var lucid = _interopRequireWildcard(_src);

var _polymorph = __webpack_require__(27);

var _polymorph2 = _interopRequireDefault(_polymorph);

var _squery = __webpack_require__(30);

var _squery2 = _interopRequireDefault(_squery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

_squery2.default.init();

Object.assign(window, lucid, { sQuery: _squery2.default });

window.Synergy.styleParser = _polymorph2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synergize = __webpack_require__(18);

Object.defineProperty(exports, 'Synergize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_synergize).default;
  }
});

var _module = __webpack_require__(19);

Object.defineProperty(exports, 'Module', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_module).default;
  }
});
Object.defineProperty(exports, 'Wrapper', {
  enumerable: true,
  get: function get() {
    return _module.Wrapper;
  }
});
Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _module.Group;
  }
});

var _component = __webpack_require__(25);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
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

            return Object.entries(props).some(function (prop) {
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Group = exports.Wrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(8);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _deepExtend = __webpack_require__(22);

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _getHtmlProps = __webpack_require__(9);

var _getHtmlProps2 = _interopRequireDefault(_getHtmlProps);

var _getModifiersFromProps = __webpack_require__(10);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _getModulesFromProps = __webpack_require__(11);

var _getModulesFromProps2 = _interopRequireDefault(_getModulesFromProps);

var _renderModifiers = __webpack_require__(12);

var _renderModifiers2 = _interopRequireDefault(_renderModifiers);

var _refHandler = __webpack_require__(24);

var _refHandler2 = _interopRequireDefault(_refHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

        var styleParser = props.styleParser || Synergy.styleParser;

        _this.tag = props.component || props.tag || (_htmlTags2.default.includes(props.name) ? props.name : 'div');
        _this.propModifiers = (0, _renderModifiers2.default)((0, _getModifiersFromProps2.default)(props, Synergy.CssClassProps));
        _this.passedModifiers = (0, _renderModifiers2.default)(props.modifiers);
        _this.modifiers = _this.propModifiers + _this.passedModifiers;
        _this.classes = props.className ? ' ' + props.className : '';
        _this.classNames = (0, _getModulesFromProps2.default)(props, props.name + _this.modifiers + _this.classes);
        _this.id = (props.before || props.after) && !props.id ? 'synergy-module-' + increment : props.id;
        _this.ref = function (node) {
            return (0, _refHandler2.default)(node, props, styleParser);
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


Module.config = _deepExtend2.default;

Module.childContextTypes = {
    module: _propTypes2.default.string,
    modifiers: _propTypes2.default.array,
    config: _propTypes2.default.object,
    props: _propTypes2.default.object
};

var Wrapper = exports.Wrapper = function (_Module) {
    _inherits(Wrapper, _Module);

    function Wrapper(props, context) {
        _classCallCheck(this, Wrapper);

        var _this3 = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props, context));

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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Module,
                _extends({ name: this.namespace }, this.dynamicProps, this.props),
                this.props.children
            );
        }
    }]);

    return Wrapper;
}(Module);

var Group = exports.Group = function (_Module2) {
    _inherits(Group, _Module2);

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
}(Module);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]

/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = refHandler;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Handle the ref callback on the rendered React component
 * 
 * @param {HTMLElement} node - the DOM element of the rendered React component
 * @param {Object} props - the props of the React component
 * @param {*} styleParser 
 */
function refHandler(node, props, styleParser) {
    if (node) {
        if (props.styles && styleParser) {
            styleParser.apply(undefined, [node].concat(_toConsumableArray(props.styles)));
        }

        if (props.init) {
            props.init(node);
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
exports.SubComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlTags = __webpack_require__(8);

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _getHtmlProps = __webpack_require__(9);

var _getHtmlProps2 = _interopRequireDefault(_getHtmlProps);

var _getModifiersFromProps = __webpack_require__(10);

var _getModifiersFromProps2 = _interopRequireDefault(_getModifiersFromProps);

var _getModulesFromProps = __webpack_require__(11);

var _getModulesFromProps2 = _interopRequireDefault(_getModulesFromProps);

var _getParam = __webpack_require__(26);

var _getParam2 = _interopRequireDefault(_getParam);

var _renderModifiers = __webpack_require__(12);

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

/***/ }),
/* 26 */
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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = polymorph;

var _hasModifier = __webpack_require__(28);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

var _getComponents = __webpack_require__(29);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _getModuleNamespace = __webpack_require__(3);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} config 
 * @param {*} parentElement 
 */
function polymorph(element, styles, config, globals, parentElement) {
    // attach repaint methods to parent element
    if (!parentElement && !element.repaint) {
        element.repaint = function () {
            element.style.cssText = null;

            polymorph(element, styles, config, globals);

            element.dispatchEvent(new Event('moduledidrepaint'));
        };
    }

    if (styles.constructor === Array) {
        return styles.forEach(function (stylesheet) {
            return polymorph(element, stylesheet, config, globals, parentElement);
        });
    }

    var values = (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object' ? styles : styles(element, config, globals);

    if (values.constructor === Array) {
        if (values.every(function (value) {
            return value.constructor == Object;
        })) {
            values.forEach(function (value) {
                return polymorph(element, value, false, globals);
            });
        }
    }

    // initialise data interface
    element.data = element.data || { states: [] };

    // determine parent element
    parentElement = parentElement || element;

    var componentGlue = config && config.componentGlue || window.Synergy && Synergy.componentGlue || '_';
    var modifierGlue = config && config.modifierGlue || window.Synergy && Synergy.modifierGlue || '-';

    var _loop = function _loop(key, value) {
        var subComponent = [].concat(_toConsumableArray(element.querySelectorAll('[class*="' + (componentGlue + key) + '"]'))).filter(function (subComponent) {
            return [].concat(_toConsumableArray(subComponent.classList)).some(function (className) {
                return className.indexOf((0, _getModuleNamespace2.default)(parentElement, componentGlue, modifierGlue)) === 0;
            });
        });

        if (typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (key.indexOf('modifier(') > -1) {
                var modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if ((0, _hasModifier2.default)({ element: element, modifier: modifier, modifierGlue: modifierGlue, componentGlue: componentGlue })) {
                    polymorph(element, value, false, globals, parentElement);
                }
            } else if (key === 'group' || key === 'wrapper') {
                // @TODO this currently runs for each item in the group/wrapper,
                // should ideally run just once per group/wrapper
                element.parentNode.classList.forEach(function (className) {
                    if (className.indexOf('group') === 0 || className.indexOf('wrapper') === 0) {
                        // apply styles to wrapper/group element
                        polymorph(element.parentNode, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value : value(element.parentNode), false, globals, parentElement);

                        // apply styles to child modules
                        polymorph(element, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value : value(element)[element.getAttribute('data-module')], false, globals, parentElement);
                    }
                });

                return {
                    v: void 0
                };
            }

            // if target element contains child components matching `key`
            else if ((0, _getComponents2.default)({ element: element, componentName: key, componentGlue: componentGlue }).length) {
                    (0, _getComponents2.default)({ element: element, componentName: key, componentGlue: componentGlue }).forEach(function (_component) {
                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                            polymorph(_component, value, false, globals, parentElement);
                        } else if (typeof value === 'function') {
                            polymorph(_component, value(_component), false, globals, parentElement);
                        }
                    });
                } else if (subComponent.length) {
                    [].concat(_toConsumableArray(subComponent)).forEach(function (query) {
                        return polymorph(query, value, false, globals, parentElement);
                    });
                } else if (key === ':hover') {
                    var hoverState = JSON.stringify(value);

                    if (!element.data.states.includes(hoverState)) {
                        element.data.states.push(hoverState);

                        element.addEventListener('mouseenter', function mouseEnter() {
                            polymorph(element, value, false, globals, parentElement);

                            element.removeEventListener('mouseenter', mouseEnter);
                        }, false);

                        element.addEventListener('mouseleave', function mouseLeave() {
                            element.removeEventListener('mouseleave', mouseLeave);

                            element.data.states = element.data.states.filter(function (item) {
                                return item !== hoverState;
                            });

                            parentElement.repaint();
                        }, false);
                    }
                } else if (value instanceof Array) {
                    if (value[0] instanceof HTMLElement) {
                        polymorph(value[0], value[1], false, globals, parentElement);
                    }
                } else if (typeof value === 'function') {
                    element.style[key] = value(element.style[key]);
                } else {
                    // @TODO handle condition (what is it?)
                }
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

            var _ret = _loop(key, value);

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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

    if (element === parentElement && config !== false) {
        element.dispatchEvent(new Event('stylesdidmount'));
    }
}

polymorph.modifier = _hasModifier2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasModifier;

var _getModuleNamespace = __webpack_require__(3);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hasModifier(_ref) {
    var element = _ref.element,
        modifier = _ref.modifier,
        modifierGlue = _ref.modifierGlue,
        componentGlue = _ref.componentGlue,
        namespace = _ref.namespace;

    return [].concat(_toConsumableArray(element.classList)).some(function (className) {
        var matchIndex = className.indexOf(modifierGlue + modifier);
        var namespaceMatch = className.indexOf(namespace || (0, _getModuleNamespace2.default)(element, modifierGlue, componentGlue)) === 0;
        var isModifierTest1 = className.indexOf(modifierGlue + modifier + modifierGlue) > -1;
        var isModifierTest2 = matchIndex > -1 && matchIndex === className.length - modifier.length - 1;

        return namespaceMatch && (isModifierTest1 || isModifierTest2);
    });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponents;

var _getModuleNamespace = __webpack_require__(3);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function getComponents(_ref) {
    var _ref2;

    var element = _ref.element,
        _ref$componentName = _ref.componentName,
        componentName = _ref$componentName === undefined ? '' : _ref$componentName,
        modifier = _ref.modifier,
        namespace = _ref.namespace,
        componentGlue = _ref.componentGlue,
        modifierGlue = _ref.modifierGlue;

    var query = (namespace || (0, _getModuleNamespace2.default)(element, componentGlue, modifierGlue, 'strict')) + (componentName ? componentGlue + componentName : '');

    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray([].concat(_toConsumableArray(element.querySelectorAll('[class*="' + query + '"]'))).filter(function (component) {
        return [].concat(_toConsumableArray(component.classList)).some(function (className) {
            var isComponent = className.split(componentGlue).length - 1 === 1;
            var isQueryMatch = className.indexOf(query) === 0;

            if (modifier) {
                return isQueryMatch && isComponent && className.indexOf(modifier) > -1;
            } else {
                return isQueryMatch && isComponent;
            }
        });
    })));
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = sQuery;

var _getConfig = __webpack_require__(31);

var _getConfig2 = _interopRequireDefault(_getConfig);

var _getDomNodes = __webpack_require__(33);

var _getDomNodes2 = _interopRequireDefault(_getDomNodes);

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

var _init = __webpack_require__(35);

var _init2 = _interopRequireDefault(_init);

var _api = __webpack_require__(13);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} SynergyQuery
 * @param {Function} [callback]
 * @param {Object} [defaults]
 * @param {Object} [custom]
 * @param {Object} [parser]
 */
function sQuery(SynergyQuery, callback, defaults, custom, parser) {
    var methods = {};
    var config = (0, _getConfig2.default)(defaults, custom, parser);

    var componentGlue = config.componentGlue || window.Synergy && Synergy.componentGlue || '_';
    var modifierGlue = config.modifierGlue || window.Synergy && Synergy.modifierGlue || '-';

    var namespace = (0, _getModuleNamespace2.default)(SynergyQuery, componentGlue, modifierGlue);
    var DOMNodes = (0, _getDomNodes2.default)(SynergyQuery);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(API)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var method = _ref2[1];

            methods[key] = method.bind({ namespace: namespace, DOMNodes: DOMNodes, componentGlue: componentGlue, modifierGlue: modifierGlue });
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

    if (typeof callback === 'function') {
        DOMNodes.forEach(function (node) {
            return callback(node, config);
        });
    }

    return Object.assign(methods, {
        namespace: namespace,
        DOMNodes: DOMNodes,
        DOMNode: DOMNodes ? DOMNodes[0] : null
    });
}

sQuery.init = _init2.default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getConfig;

var _deepExtend = __webpack_require__(32);

var _deepExtend2 = _interopRequireDefault(_deepExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} defaults 
 * @param {*} custom 
 * @param {*} parser 
 */
function getConfig(defaults, custom, parser) {
    var extendedConfig = (0, _deepExtend2.default)(defaults, custom);

    if (typeof parser === 'function') {
        return parser(extendedConfig);
    }

    return extendedConfig;
}

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getDomNodes;

var _isValidSelector = __webpack_require__(34);

var _isValidSelector2 = _interopRequireDefault(_isValidSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    if ((0, _isValidSelector2.default)(query) && document.querySelectorAll(query).length) {
        return document.querySelectorAll(query);
    }

    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object' && query.name) {
        return getDomNodes(query.name);
    }

    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return document.querySelectorAll('.' + query + ', [class*="' + query + '-"]');
    }
}

/***/ }),
/* 34 */
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
 * 
 * @returns {Bool}
 * 
 * @example isValidSelector('[data-foo-bar]') // returns true
 * @example isValidSelector(4) // returns false
 */
function isValidSelector(selector) {
    if (!selector || typeof selector !== 'string') return false;

    var stub = document.createElement('br');

    try {
        selector && stub.querySelector(selector);
    } catch (e) {
        return false;
    }

    return true;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = init;

var _api = __webpack_require__(13);

var API = _interopRequireWildcard(_api);

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init(custom) {
    var options = Object.assign({
        elementProto: true,
        nodeListProto: true,
        preset: 'Synergy',
        attachToWindow: true,
        alterMethodName: true
    }, custom);

    var PRESETS = {
        BEM: ['__', '--', 'block', 'element', 'modifier'],
        Synergy: ['_', '-', 'module', 'component', 'modifier']
    };

    var _ref = [].concat(_toConsumableArray(PRESETS[options.preset])),
        componentGlue = _ref[0],
        modifierGlue = _ref[1],
        moduleNamespace = _ref[2],
        componentNamespace = _ref[3],
        modifierNamespace = _ref[4];

    if (options.componentGlue) componentGlue = options.componentGlue;
    if (options.modifierGlue) modifierGlue = options.modifierGlue;

    if (options.elementProto || options.nodeListProto) {
        var _loop = function _loop(key, method) {
            var methodName = key;

            if (options.alterMethodName) {
                var moduleUpperCase = moduleNamespace[0].toUpperCase() + moduleNamespace.substring(1);
                var componentUpperCase = componentNamespace[0].toUpperCase() + componentNamespace.substring(1);
                var modifierUpperCase = modifierNamespace[0].toUpperCase() + modifierNamespace.substring(1);

                if (methodName.toLowerCase().indexOf('module') > -1) {
                    methodName = methodName.replace(new RegExp('module', 'g'), moduleNamespace);
                }

                if (methodName.toLowerCase().indexOf('Module') > -1) {
                    methodName = methodName.replace(new RegExp('Module', 'g'), moduleUpperCase);
                }

                if (methodName.indexOf('component') > -1) {
                    methodName = methodName.replace(new RegExp('component', 'g'), componentNamespace);
                }

                if (methodName.indexOf('Component') > -1) {
                    methodName = methodName.replace(new RegExp('Component', 'g'), componentUpperCase);
                }

                if (methodName.toLowerCase().indexOf('modifier') > -1) {
                    methodName = methodName.replace(new RegExp('modifier', 'g'), modifierNamespace);
                }

                if (methodName.toLowerCase().indexOf('Modifier') > -1) {
                    methodName = methodName.replace(new RegExp('Modifier', 'g'), modifierUpperCase);
                }
            }

            if (typeof document.body[methodName] === 'undefined') {
                if (options.elementProto) {
                    Element.prototype[methodName] = function () {
                        return method.bind({
                            namespace: (0, _getModuleNamespace2.default)(this, componentGlue, modifierGlue), DOMNodes: [this], componentGlue: componentGlue, modifierGlue: modifierGlue
                        }).apply(undefined, arguments);
                    };
                }

                if (options.nodeListProto) {
                    NodeList.prototype[methodName] = function () {
                        return method.bind({
                            namespace: (0, _getModuleNamespace2.default)(this[0], componentGlue, modifierGlue), DOMNodes: this, componentGlue: componentGlue, modifierGlue: modifierGlue
                        }).apply(undefined, arguments);
                    };
                }
            }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(API)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref2 = _step.value;

                var _ref3 = _slicedToArray(_ref2, 2);

                var key = _ref3[0];
                var method = _ref3[1];

                _loop(key, method);
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
    }

    if (options.attachToWindow) {
        window.Synergy = window.Synergy || {};

        Object.assign(Synergy, { componentGlue: componentGlue, modifierGlue: modifierGlue });
    }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = component;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

var _getComponents = __webpack_require__(1);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _isComponent = __webpack_require__(4);

var _isComponent2 = _interopRequireDefault(_isComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String} componentName 
 * @param {(('find'|'is'|'set'|'unset')|Function)} operator 
 */
function component(componentName, operator) {
    var _this = this;

    if (!componentName && !operator) {
        return _getComponents2.default.bind(this)();
    }

    if (!operator || operator === 'find') {
        return _getComponents2.default.bind(this)(componentName);
    }

    if (operator === 'is') {
        return _isComponent2.default.bind(this)(componentName);
    }

    if (operator === 'set') {
        this.DOMNodes.forEach(function (node) {
            node.classList.add(_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue) + _this.componentGlue + componentName);
        });
    }

    if (operator === 'unset') {
        this.DOMNodes.forEach(function (node) {
            return node.classList.remove(_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue));
        });
    }

    if (typeof operator === 'function') {
        _getComponents2.default.bind(this)(componentName).forEach(function (node) {
            return operator(node);
        });
    }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = find;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

var _getModules = __webpack_require__(38);

var _getModules2 = _interopRequireDefault(_getModules);

var _getComponents = __webpack_require__(1);

var _getComponents2 = _interopRequireDefault(_getComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} query 
 */
function find(query) {
    var _this = this;

    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
        var matches = [];

        this.DOMNodes.forEach(function (node) {
            if (query.module) {
                if (query.component) {
                    return matches.push.apply(matches, _toConsumableArray(_getComponents2.default.bind(_this)(query.component, query.modifier, query.module)));
                }

                return matches.push.apply(matches, _toConsumableArray(node.querySelectorAll('.' + query.module + ', [class*="' + (query.module + query.modifierGlue) + '"]')));
            }

            if (query.component) {
                var components = _getComponents2.default.bind(_this)(query.component);

                if (query.modifier) {
                    return matches.push.apply(matches, _toConsumableArray(components.filter(function (component) {
                        return [].concat(_toConsumableArray(component.classList)).some(function (className) {
                            var isNamespace = className.indexOf(_this.namespace || (0, _getModuleNamespace2.default)(component, _this.componentGlue, _this.modifierGlue)) === 0;
                            var hasModifier = className.indexOf(query.modifier) > -1;

                            return isNamespace && hasModifier;
                        });
                    })));
                }

                return matches.push.apply(matches, _toConsumableArray(components));
            }

            if (query.modifier) {
                return;
            }
        });

        return matches;
    }

    if (typeof query === 'string') {
        if (_getComponents2.default.bind(this)(query).length) {
            return _getComponents2.default.bind(this)(query);
        }

        if ((0, _getModules2.default)(this, query).length) {
            return (0, _getModules2.default)(this, query);
        }
    }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModules;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} target 
 * @param {*} moduleName 
 */
function getModules(target, moduleName) {
    return [].concat(_toConsumableArray(target.DOMNodes)).reduce(function (matches, node) {
        return matches.concat.apply(matches, _toConsumableArray(node.querySelectorAll("." + moduleName + ", [class*=\"" + (moduleName + target.modifierGlue) + "\"]")));
    }, []);
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponent;

var _getComponents = __webpack_require__(1);

var _getComponents2 = _interopRequireDefault(_getComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function getComponent(componentName) {
    var _this = this;

    return [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
        return _getComponents2.default.bind(Object.assign(_this, { DOMNodes: [node] }))(componentName)[0];
    });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModifiers;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function getModifiers() {
    var _this = this,
        _ref;

    var matches = [];

    // @TODO return a single array rather than an array of arrays
    this.DOMNodes.forEach(function (node) {
        matches.push.apply(matches, _toConsumableArray([].concat(_toConsumableArray(node.classList)).filter(function (className) {
            return className.indexOf(_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue)) === 0;
        }).map(function (target) {
            return target.split(_this.modifierGlue).slice(1);
        })));
    });

    return (_ref = []).concat.apply(_ref, matches);
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponent;

var _getSubComponents = __webpack_require__(5);

var _getSubComponents2 = _interopRequireDefault(_getSubComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} subComponentName 
 */
function getComponent(subComponentName) {
    var _this = this;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return [].concat(_toConsumableArray(this.DOMNodes)).map(function () {
        return _getSubComponents2.default.bind(_this)(subComponentName, context)[0];
    });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = is;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

var _isModule = __webpack_require__(43);

var _isModule2 = _interopRequireDefault(_isModule);

var _isComponent = __webpack_require__(4);

var _isComponent2 = _interopRequireDefault(_isComponent);

var _hasModifier = __webpack_require__(6);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} query 
 */
function is(query) {
    var _this = this;

    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
        if (query.module) {
            if (query.component) {
                var isModuleNamespace = [].concat(_toConsumableArray(this.DOMNodes)).every(function (node) {
                    return (_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue, true)) === query.module;
                });

                if (query.modifier) {
                    return isModuleNamespace && _isComponent2.default.bind(this)(query.component) && _hasModifier2.default.bind(this)(query.modifier);
                }

                return isModuleNamespace && _isComponent2.default.bind(this)(query.component);
            }

            return (0, _isModule2.default)(this, query.module);
        }

        if (query.component) {
            if (query.modifier) {
                return _isComponent2.default.bind(this)(query.component) && _hasModifier2.default.bind(this)(query.modifier);
            }

            return _isComponent2.default.bind(this)(query.component);
        }

        if (query.modifier) {
            return _hasModifier2.default.bind(this)(query.modifier);
        }
    }

    if (typeof query === 'string') {
        if ((0, _isModule2.default)(this, query)) {
            return (0, _isModule2.default)(this, query);
        }

        if (_isComponent2.default.bind(this)(query)) {
            return _isComponent2.default.bind(this)(query);
        }

        if (_hasModifier2.default.bind(this)(query)) {
            return _hasModifier2.default.bind(this)(query);
        }
    }

    return false;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isModule;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} target 
 * @param {*} moduleName 
 */
function isModule(target, moduleName) {
    return [].concat(_toConsumableArray(target.DOMNodes)).every(function (node) {
        return node.matches("." + moduleName + ", [class*=\"" + (moduleName + target.modifierGlue) + "\"]");
    });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modifier;

var _hasModifier = __webpack_require__(6);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

var _addModifier = __webpack_require__(14);

var _addModifier2 = _interopRequireDefault(_addModifier);

var _removeModifier = __webpack_require__(15);

var _removeModifier2 = _interopRequireDefault(_removeModifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String} modifier 
 * @param {(('is'|'set'|'unset')|Function)} operator 
 */
function modifier(modifier, operator) {
    if (!operator || operator === 'is') {
        return _hasModifier2.default.bind(this)(modifier);
    }

    if (operator === 'set') {
        return _addModifier2.default.bind(this)(modifier);
    }

    if (operator === 'unset') {
        return _removeModifier2.default.bind(this)(modifier);
    }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parent;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {(String|'module'|'component')} query 
 */
function parent(query) {
    if (query === 'module') {
        return [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
            return node.parentNode.closest('[data-module]');
        });
    }

    if (query === 'component') {
        return [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
            return node.parentNode.closest('[data-component]');
        });
    }

    if (typeof query === 'string') {
        var moduleMatch = [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
            return node.parentNode.closest('[data-module="' + query + '"]');
        });
        var componentMatch = [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
            return node.parentNode.closest('[data-component="' + query + '"]');
        });

        return moduleMatch[0] ? moduleMatch : componentMatch;
    }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parentComponent;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function parentComponent(componentName) {
  return [].concat(_toConsumableArray(this.DOMNodes)).map(function (node) {
    return node.parentNode.closest("[data-component=\"" + componentName + "\"]");
  });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setComponent;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} componentName 
 */
function setComponent(componentName) {
    var _this = this;

    this.DOMNodes.forEach(function (node) {
        var namespace = _this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue);

        node.classList.remove(namespace);
        node.classList.add(namespace + _this.componentGlue + componentName);
    });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = subComponent;

var _getSubComponents = __webpack_require__(5);

var _getSubComponents2 = _interopRequireDefault(_getSubComponents);

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {String} componentName 
 * @param {(('find'|'is')|Function)} operator 
 */
function subComponent(subComponentName, operator) {
    var _this = this;

    if (!subComponentName && !operator) {
        return _getSubComponents2.default.bind(this)();
    }

    if (!operator || operator === 'find') {
        return _getSubComponents2.default.bind(this)(subComponentName);
    }

    if (operator === 'is') {
        return [].concat(_toConsumableArray(this.DOMNodes)).every(function (node) {
            var query = _this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue);
            var isMatch = query.indexOf(subComponentName) === query.length - subComponentName.length;

            return [].concat(_toConsumableArray(node.classList)).some(function (className) {
                return className.indexOf(query) > -1 && isMatch;
            });
        });
    }

    if (typeof operator === 'function') {
        _getSubComponents2.default.bind(this)(subComponentName).forEach(function (node) {
            return operator(node);
        });
    }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unsetComponent;

var _getModuleNamespace = __webpack_require__(0);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function unsetComponent(componentName) {
    var _this = this;

    return [].concat(_toConsumableArray(this.DOMNodes)).forEach(function (node) {
        return [].concat(_toConsumableArray(node.classList)).forEach(function (className) {
            var isAComponent = className.split(_this.componentGlue).length - 1 === 1;
            var isMatch = className.indexOf((_this.namespace || (0, _getModuleNamespace2.default)(node, _this.componentGlue, _this.modifierGlue)) + _this.componentGlue + componentName) === 0;

            if (isAComponent && isMatch) {
                node.classList.remove(className);
            }
        });
    });
}

/***/ })
/******/ ]);