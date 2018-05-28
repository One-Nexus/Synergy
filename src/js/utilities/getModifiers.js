import * as Synergy from '../synergy';

/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
export default function getModifiers(block, module, glue) {
    let modifiers = [];

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                modifiers.push(className.split(glue).slice(1));
            }
        });
    }

    return [].concat.apply([], modifiers);
}