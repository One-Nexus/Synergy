///****************************************************************
/// Synergy
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Utilities
import { getBlockName    } from './utilities/getBlockName';
import { blockPart       } from './utilities/blockPart';
import { isValidSelector } from './utilities/isValidSelector';

/**
 * Synergy Module
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} [els]
 * @param {Object} [custom]
 * @param {Function} [callback]
 * @param {Object} [config]
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
    } else if (typeof els === 'object' && ((els[0] instanceof NodeList) || (els[0] instanceof HTMLElement))) {
        els = els[0];
    } else if (typeof els === 'object' && typeof els[0] === 'string') {
        els = document.querySelectorAll(`.${els[0]}, [class*="${els[0]}-"]`);
    }

    if (els) {
        if (els instanceof NodeList) {
            els.forEach(el => {
                el.setAttribute('data-module', block);
            });
        } else if (els instanceof HTMLElement) {
            els.setAttribute('data-module', block);
        }
    }

    // Merge default/custom options
    const options = config ? Object.assign(
        config[Object.keys(config)[0]], custom
    ) : custom;

    exports.query = els;

    exports.modifier = function(modifier, operator, element = els) {
        return blockPart(block, modifier, 'modifier', operator, '-', element);
    };

    exports.component = function(component, operator, element = els) {
        return blockPart(block, component, 'component', operator, '_', element);
    };

    if (callback) {
        if (els instanceof HTMLElement) {
            return callback(els, options, exports);
        } else {
            Array.prototype.forEach.call(els, function(el, index) {
                return callback(el, options, exports);
            });
        }
    }

    return exports;
};

export default synergy;