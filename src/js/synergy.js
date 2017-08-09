///****************************************************************
/// Synergy
///****************************************************************

// Utilities
import { getComponents   } from './utilities/getComponents';
import { getDomNodes     } from './utilities/getDomNodes';
import { getModuleName   } from './utilities/getModuleName';
import { blockPart       } from './utilities/blockPart';
import { isValidSelector } from './utilities/isValidSelector';

export {
    getComponents, getDomNodes, getModuleName, blockPart, isValidSelector
}

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

    const module     = getModuleName(els, config);
    const domNodes   = getDomNodes(els, module);
    const components = getComponents(domNodes, module);

    // Merge default/custom options
    const options = config ? Object.assign(
        config[Object.keys(config)[0]], custom
    ) : custom;

    if (domNodes) {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(el => el.setAttribute('data-module', module));
        } else if (domNodes instanceof HTMLElement) {
            domNodes.setAttribute('data-module', module);
        }
    }

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = (modifier, operator, element = domNodes) => {
        return blockPart(module, modifier, 'modifier', operator, '-', element);
    };

    exports.component = (component, operator, element = domNodes) => {
        return blockPart(module, component, 'component', operator, '_', element);
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