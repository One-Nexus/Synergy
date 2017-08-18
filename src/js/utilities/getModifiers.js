import * as Synergy from '../synergy';

/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
export function getModifiers(block, module) {
    let modifiers;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                modifiers = className.split('-').slice(1);
            }
        });
    }

    return modifiers;
}