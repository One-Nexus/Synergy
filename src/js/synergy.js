///****************************************************************
/// Synergy
///****************************************************************

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
 */
const Synergy = function(els, callback, config, custom) {

    const moduleName = getModuleName(els, config);
    const domNodes   = getDomNodes(els, moduleName);
    const components = getComponents(domNodes, moduleName);
    const modifiers  = getModifiers(domNodes, moduleName);

    // Merge default/custom options
    const options = config ? Object.assign(
        config[Object.keys(config)[0]], custom
    ) : custom;

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
            operator: operator
        });
    };

    exports.component = (query, operator, element = domNodes) => {
        return component({
            target: element,
            module: moduleName,
            components: components,
            query: query,
            operator: operator
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