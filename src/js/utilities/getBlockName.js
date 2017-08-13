import * as Synergy from '../synergy';

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @param {*} block
 * @param {String} module
 */
export function getBlockName(block, module) {
    let blockName;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className);
            }
        });
    }

    return blockName;
}