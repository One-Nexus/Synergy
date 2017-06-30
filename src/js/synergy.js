///****************************************************************
/// Synergy
///****************************************************************

// Utilities
import { getBlockName    } from './utilities/getBlockName';
import { blockPart       } from './utilities/blockPart';
import { isValidSelector } from './utilities/isValidSelector';

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
 * 
 * @example synergy('foo').query // returns NodeList
 * @example synergy('#foo').query // returns NodeList
 * @example synergy(document.getElementById('foo')).query // returns HTMLElement 
 * @example synergy('foo', el => callback(el)) // pass each found element to `callback()`
 * @example synergy('foo', (el, options) => callback(el, options), {default}, {custom}) 
 */
const synergy = function(els, callback, config, custom) {

    const block = getBlockName(els, config);

    // Force 'els' into a NodeList || HTMLElement
    if (typeof els === 'string') {
        if (isValidSelector(els) && document.querySelectorAll(els).length) {
            els = document.querySelectorAll(els);
        } else {
            els = document.querySelectorAll(`.${block}, [class*="${block}-"]`);
        }
    } else if (typeof els === 'object') {
        if ((els[0] instanceof NodeList) || (els[0] instanceof HTMLElement)) {
            els = els[0];
        } else if (typeof els[0] === 'string') {
            els = document.querySelectorAll(`.${els[0]}, [class*="${els[0]}-"]`);
        }
    }

    if (els) {
        if (els instanceof NodeList) {
            els.forEach(el => el.setAttribute('data-module', block));
        } else if (els instanceof HTMLElement) {
            els.setAttribute('data-module', block);
        }
    }

    // Merge default/custom options
    const options = config ? Object.assign(
        config[Object.keys(config)[0]], custom
    ) : custom;

    /** Elements found by the Synergy query */
    exports.query = els;

    /**
     * @param {String} modifier
     * @param {String} [operator]
     */
    exports.modifier = (modifier, operator, element = els) => {
        return blockPart(block, modifier, 'modifier', operator, '-', element);
    };

    /**
     * @param {String} component
     * @param {String} [operator]
     */
    exports.component = (component, operator, element = els) => {
        return blockPart(block, component, 'component', operator, '_', element);
    };

    if (callback) {
        if (els instanceof HTMLElement) {
            return callback(els, options, exports);
        } else {
            els.forEach(el => callback(el, options, exports));
        }
    }

    return exports;
};

export default synergy;