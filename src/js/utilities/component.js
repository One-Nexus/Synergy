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
    const childComponent = target.querySelectorAll(selector);

    const operator = () => {
        if (options.operator === 'set' || options.operator === 'unset') {
            return (options.operator === 'set') ? 'add' : 'remove';
        } else {
            return options.operator;
        }
    }

    if (options.query) {

        if (target instanceof HTMLElement) {

            if (operator()) {
                return target.classList[operator()](namespace);
            }

            if (childComponent.length !== 0) return childComponent;

            let matchesQuery = false;

            components.forEach(component => {
                options.components.forEach(queryComponent => {
                    if (queryComponent === component) return matchesQuery = true;
                });
            });

            return matchesQuery || document.querySelectorAll(selector);
        }
    }
    
    return components;
}