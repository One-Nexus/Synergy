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

export { default as deepextend } from 'deep-extend';

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
    stripModifiers,
    getOptions,
    setDomNodeAttributes
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
    component,
    modifier
};

// React Components
//*****************************************************************

export { default as Module } from './components/module.jsx';
export { default as Component } from './components/component.jsx';

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
    const module        = getModuleName(els, config);
    const domNodes      = getDomNodes(els, module, modifierGlue);
    const components    = getComponents(domNodes, module, componentGlue);
    const modifiers     = getModifiers(domNodes, module, modifierGlue);
    const options       = getOptions({ config, parser, custom });

    setDomNodeAttributes({domNodes, module});

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = (query, operator, target = domNodes) => modifier({
      glue: modifierGlue,
      target,
      module,
      modifiers,
      query,
      operator
    });

    exports.component = (query, operator, target = domNodes) => component({
      target,
      module,
      components,
      query,
      operator,
      componentGlue,
      modifierGlue
    });

    if (callback) {
        if (domNodes instanceof HTMLElement) {
            return callback(domNodes, options, exports);
        } else {
            domNodes.forEach(el => callback(el, options, exports));
        }
    }

    return exports;
}