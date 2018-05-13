import * as Synergy from '../synergy';

/**
 * Modifier
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.modifiers
 * @param {*} options.query
 * @param {*} options.operator
 */
export function modifier(options) {
    // setup constants
    const target = (options.target instanceof HTMLElement) ? options.target : options.target[0];
    const namespace = Synergy.getBlockName(target, options.module, options.glue) + options.glue + options.query;
    const modifiers = Synergy.getModifiers(target, options.module, options.glue);
    const selector = `.${namespace}, [class*="${namespace}${options.glue}"]`;
    const querySelector = document.querySelectorAll(selector);
    const moduleSelector = `.${options.module}, [class*="${options.module}${options.glue}"]`;
    const childModifier = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);
    const query = (modifiers !== options.modifiers) ? [options.query] : options.modifiers;

    if ((typeof options.query !== 'undefined') && target instanceof HTMLElement) {
        // add/remove a modifier
        if (options.operator) {
            if (options.operator === 'set') {
                return toggleModifier(options.module, target, options.query, 'set', options.glue);
            } 
            else if (options.operator === 'unset') {
                return toggleModifier(options.module, target, options.query, 'unset', options.glue);
            }
            else if (options.operator === 'add' || options.operator === 'remove') {
                return target.classList[options.operator](namespace);
            }
        }

        // get children with modifier
        if (childModifier.length !== 0) return childModifier;

        // determine if element has modifier
        let matchesQuery = false;

        modifiers.forEach(modifier => {
            query.forEach(queryModifier => {
                if (queryModifier === modifier) return matchesQuery = true;
            });
        });

        if (matchesQuery || options.operator == 'isset') return matchesQuery;

        // @TODO get all components with modifier from document
        // return (querySelector.length === 0) ? false : querySelector;

        return false;
    }
    
    // get modifiers on element
    return (modifiers.length > 0) ? modifiers : false;
}

/**
 * Toggle a modifier on a module
 * 
 * @function toggleModifier
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleModifier(moduleName, target, query, operator, glue) {
    return Array.prototype.forEach.call(target.classList, className => {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);

            target.classList.add(
                (operator === 'set') ? className + glue + query : className.replace(glue + query, '')
            );
        }
    });
}