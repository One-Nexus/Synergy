import * as Synergy from '../synergy';

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
export function getComponents(block, module, glue) {
    let components;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                components = className.split(glue).slice(1);
            }
        });
    }

    return components;
}