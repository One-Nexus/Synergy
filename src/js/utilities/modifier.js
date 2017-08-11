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
    const namespace = Synergy.getModuleName(target) + '-' + options.query;
    const modifiers = Synergy.getModifiers(target, options.module);
    const selector = `.${namespace}, [class*="${namespace}-"]`;
    const querySelector = document.querySelectorAll(selector);
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