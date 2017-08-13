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

    const target = (options.target instanceof HTMLElement) ? options.target : options.target[0];
    const namespace = Synergy.getBlockName(target, options.module) + '-' + options.query;
    const modifiers = Synergy.getModifiers(target, options.module);
    const selector = `.${namespace}, [class*="${namespace}-"]`;
    const querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            const childModifier = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleModifier(options.module, target, options.query, 'set');
                } 
                else if (options.operator === 'unset') {
                    return toggleModifier(options.module, target, options.query, 'unset');
                }
                else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childModifier.length !== 0) return childModifier;

            let matchesQuery = false;

            const query = (modifiers !== options.modifiers) ? [options.query] : options.modifiers;

            modifiers.forEach(modifier => {
                query.forEach(queryModifier => {
                    if (queryModifier === modifier) {
                        matchesQuery = true;

                        return matchesQuery;
                    }
                });
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return (querySelector.length === 0) ? false : querySelector;
        }
    }
    
    return modifiers;
}

/**
 * Toggle a modifier on a module
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleModifier(moduleName, target, query, operator) {
    return Array.prototype.forEach.call(target.classList, className => {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);
            target.classList.add(
                (operator === 'set') ? `${className}-${query}` : className.replace('-' + query, '')
            );
        }
    });
}