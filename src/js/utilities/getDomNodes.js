import * as Synergy from '../synergy';

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} query
 * @param {String} module
 */
export default function getDomNodes(query, module, modifierGlue) {

    if (query === null) return false;

    if (typeof query === 'undefined') return module;

    if (query instanceof HTMLElement || query instanceof NodeList ) return query;

    if (typeof query === 'string') {
        if (Synergy.isValidSelector(query) && document.querySelectorAll(query).length && query !== module) {
            return document.querySelectorAll(query);
        }
        else {
            return document.querySelectorAll(`.${module}, [class*="${module}${modifierGlue}"]`);
        }
    }

    if (query.constructor === Array) return getDomNodes(query[0], query[1], modifierGlue);
    
    if (typeof query === 'object') {
        return document.querySelectorAll(`.${module}, [class*="${module}${modifierGlue}"]`);
    }

    return query;
}