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
    if (!Synergy.getComponents) {
        console.warn('Synergy:component - Synergy is missing `getComponents()`');
    }

    const namespace;
    const selector = `.${namespace}, [class*="${namespace}-"]`;
    const childComponent = options.target.querySelectorAll(selector);

    if (options.query) {

        if (options.operator) {
            return;
        }

        if (options.target instanceof HTMLElement) {
            const components = Synergy.getComponents(options.target, options.module);
            let matchesQuery = false;

            components.forEach(component => {
                options.components.forEach(queryComponent => {
                    if (queryComponent === component) return matchesQuery = true;
                });
            });

            return matchesQuery;
        }

        if (childComponent.length !== 0) return childComponent;

        return document.querySelectorAll(selector);
    }
    
    else {

    }

}