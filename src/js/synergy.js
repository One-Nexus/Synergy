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
import { getBlockName    } from './utilities/getBlockName';
import { getComponents   } from './utilities/getComponents';
import { getDomNodes     } from './utilities/getDomNodes';
import { getModifiers    } from './utilities/getModifiers';
import { getModuleName   } from './utilities/getModuleName';
import { isValidSelector } from './utilities/isValidSelector';
import { stripModifiers  } from './utilities/stripModifiers';

// Tools
import { component } from './tools/component';
import { modifier  } from './tools/modifier';

export {
    getBlockName, getComponents, getDomNodes, getModifiers, getModuleName, 
    isValidSelector, stripModifiers, component, modifier
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
const Synergy = function(els, callback, config, custom, parser) {

    let componentGlue, modifierGlue;

    // @TODO create getGlue() function
    if (custom && custom.componentGlue && custom.modifierGlue) {
        componentGlue = custom.componentGlue.replace(/'/g,'');
        modifierGlue  = custom.modifierGlue.replace(/'/g,'');
    }
    else if (
        window.APPUI && window.APPUI.global && 
        window.APPUI.global['component-glue'] && 
        window.APPUI.global['modifier-glue']
    ) {
        componentGlue = window.APPUI.global['component-glue'].replace(/'/g,'');
        modifierGlue  = window.APPUI.global['modifier-glue'].replace(/'/g,'');
    }
    else {
        componentGlue = global['modifier-glue']  || '_';
        modifierGlue  = global['component-glue'] || '-';
    }

    const moduleName = getModuleName(els, config);
    const domNodes   = getDomNodes(els, moduleName, modifierGlue);
    const components = getComponents(domNodes, moduleName, componentGlue);
    const modifiers  = getModifiers(domNodes, moduleName, modifierGlue);

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

    if (domNodes) {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(el => el.setAttribute('data-module', moduleName));
        } else if (domNodes instanceof HTMLElement) {
            domNodes.setAttribute('data-module', moduleName);
        }
    }

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = (query, operator, element = domNodes) => {
        return modifier({
            target: element,
            module: moduleName,
            modifiers: modifiers,
            query: query,
            operator: operator,
            glue: modifierGlue
        });
    };

    exports.component = (query, operator, element = domNodes) => {
        return component({
            target: element,
            module: moduleName,
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
            domNodes.forEach(el => callback(el, options, exports));
        }
    }

    return exports;
};

export default Synergy;