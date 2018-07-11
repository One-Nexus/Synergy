import * as Synergy from '../synergy';

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @param {*} block
 * @param {String} module
 */
export default function getBlockName(block, module, modifierGlue) {
    let blockName = module;

    if (block instanceof HTMLElement) {
        [...block.classList].every(className => {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className, module, modifierGlue);

                return false;
            }
        });
    }

    return blockName;
}