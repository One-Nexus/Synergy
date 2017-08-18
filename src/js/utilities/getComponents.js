import * as Synergy from '../synergy';

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @function getComponents
 * 
 * @param {*} block
 * @param {String} module
 */
export function getComponents(block, module) {
    let components;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, className => {
            if (className.indexOf(module) === 0) {
                components = className.split('_').slice(1);
            }
        });
    }

    return components;
}