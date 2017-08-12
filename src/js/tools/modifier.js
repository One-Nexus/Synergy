import * as Synergy from '../synergy';

/**
 * Component
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
    const childComponent = target.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleModifier(options.module, target, options.query, 'set');
                } 
                else if (options.operator === 'unset') {
                    return toggleModifier(options.module, target, options.query, 'unset');
                }
                else {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childComponent.length !== 0) return childComponent;

            let matchesQuery = false;

            modifiers.forEach(component => {
                options.modifiers.forEach(queryComponent => {
                    if (queryComponent === component) return matchesQuery = true;
                });
            });

            if (matchesQuery) return matchesQuery

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
    return target.classList.forEach(className => {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className)
            target.classList.add(
                (operator === 'set') ? `${className}-${query}` : className.replace('-' + query, '')
            );
        }
    });
}