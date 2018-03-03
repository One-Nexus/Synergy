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

    // remove modifiers from components
    if (components) {
        components = components.map(component => component.split('-')[0]);
    }

    return components;
}