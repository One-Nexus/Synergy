import * as Synergy from '../synergy';

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} query
 * @param {String} module
 */
export function getDomNodes(query, module, modifierGlue) {
    let domNodes;

    if (typeof query === 'string') {
        if (Synergy.isValidSelector(query) && document.querySelectorAll(query).length && query !== module) {
            domNodes = document.querySelectorAll(query);
        }
        else {
            domNodes = document.querySelectorAll(`.${module}, [class*="${module}${modifierGlue}"]`);
        }
    } 
    
    else if (typeof query === 'object') {
        if (query[0] instanceof NodeList || query[0] instanceof HTMLElement) {
            domNodes = query[0];
        } 
        else if (typeof query[0] === 'string') {
            domNodes = document.querySelectorAll(`.${query[0]}, [class*="${query[0]}${modifierGlue}"]`);
        }
    }

    return domNodes || query;
}