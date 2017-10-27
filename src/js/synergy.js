///****************************************************************
/// Synergy - https://github.com/esr360/Synergy
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Export global config
import * as global from './config.json';

export { global };

// Vendor
//*****************************************************************

import deepextend from 'deep-extend';

export { deepextend };

// Tools & Utilities
//*****************************************************************

// Utilities
import {
    getBlockName,
    getComponents,
    getDomNodes,
    getGlue,
    getModifiers,
    getModuleName,
    isValidSelector,
    stripModifiers
} from './utilities';

// Tools
import { component, modifier } from './tools';

export {
    getBlockName,
    getComponents,
    getDomNodes,
    getGlue,
    getModifiers,
    getModuleName,
    isValidSelector,
    stripModifiers,
    component, modifier
};

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
export default function Synergy(els, callback, config, custom, parser) {

    const componentGlue = getGlue('component', custom);
    const modifierGlue  = getGlue('modifier', custom);
    const moduleName    = getModuleName(els, config);
    const domNodes      = getDomNodes(els, moduleName, modifierGlue);
    const components    = getComponents(domNodes, moduleName, componentGlue);
    const modifiers     = getModifiers(domNodes, moduleName, modifierGlue);

    // Merge default/custom options
    let options = config ? deepextend(
        config[Object.keys(config)[0]], custom
    ) : custom;

    // Parse values using custom parser
    if (typeof parser === 'function') {
        options = parser(options);
    } else if (parser && typeof parser.parse === 'function') {
        options = parser.parse(options);
    }

  if (domNodes instanceof NodeList) {
    domNodes.forEach(el => el.setAttribute('data-module', moduleName));
  } else if (domNodes instanceof HTMLElement) {
    domNodes.setAttribute('data-module', moduleName);
  }

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = (query, operator, element = domNodes) => modifier({
        target: element,
        module: moduleName,
        modifiers: modifiers,
        query: query,
        operator: operator,
        glue: modifierGlue
    });

    exports.component = (query, operator, element = domNodes) => component({
        target: element,
        module: moduleName,
        components: components,
        query: query,
        operator: operator,
        componentGlue: componentGlue,
        modifierGlue: modifierGlue
    });

    if (callback) {
        if (domNodes instanceof HTMLElement) {
            return callback(domNodes, options, exports);
        } else {
            domNodes.forEach(el => callback(el, options, exports));
        }
    }

    return exports;
};
