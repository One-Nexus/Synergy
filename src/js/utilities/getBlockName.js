import * as Synergy from '../synergy';

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @function getBlockName
 * 
 * @param {*} block
 * @param {String} module
 */
export function getBlockName(block, module) {
    let blockName;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className, module);
            }
        });
    }

    return blockName;
}