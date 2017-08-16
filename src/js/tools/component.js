import * as Synergy from '../synergy';

/**
 * Component
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.components
 * @param {*} options.query
 * @param {*} options.operator
 */
export function component(options) {

    const target = (options.target instanceof HTMLElement) ? options.target : options.target[0];
    const namespace = Synergy.getModuleName(target) + '_' + options.query;
    const components = Synergy.getComponents(target, options.module);
    const selector = `.${namespace}, [class*="${namespace}-"]`;
    const querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {
    
            const childComponent = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleComponent(options.module, target, options.query, 'set');
                } 
                else if (options.operator === 'unset') {
                    return toggleComponent(options.module, target, options.query, 'unset');
                }
                else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childComponent.length !== 0 && !options.target instanceof NodeList) {
                return childComponent
            };

            let matchesQuery = false;

            components.forEach(component => {
                if (options.query === component) {
                    matchesQuery = true;

                    return matchesQuery;
                }
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return (querySelector.length === 0) ? false : querySelector;
        }
    }
    
    return components;
}

/**
 * Toggle a component on a module
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleComponent(moduleName, target, query, operator) {
    return Array.prototype.forEach.call(target.classList, className => {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);
            target.classList.add(
                (operator === 'set') ? `${className}_${query}` : className.replace('_' + query, '')
            );
        }
    });
}