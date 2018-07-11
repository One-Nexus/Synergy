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
export default function component(options) {
    // setup constants
    const target = (options.target instanceof HTMLElement) ? options.target : options.target[0];
    const namespace = (options.module || Synergy.getModuleName(target)) + options.componentGlue + options.query;
    const components = Synergy.getComponents(target, options.module, options.componentGlue);
    const selector = `.${namespace}, [class*="${namespace}${options.modifierGlue}"]`;
    const querySelector = document.querySelectorAll(selector);
    const moduleSelector = `.${options.module}, [class*="${options.module}${options.modifierGlue}"]`;
    const childComponent = Synergy.getChildrenWithoutSelector(target, selector, moduleSelector);

    if (options.query && target instanceof HTMLElement) {
        // add/remove a component
        if (typeof options.operator === 'string') {
            if (options.operator === 'set') {
                return toggleComponent(options.module, target, options.query, 'set', options.componentGlue);
            } 
            else if (options.operator === 'unset') {
                return toggleComponent(options.module, target, options.query, 'unset', options.componentGlue);
            }
            else if (options.operator === 'add' || options.operator === 'remove') {
                return target.classList[options.operator](namespace);
            }
        }

        // get children components
        if (childComponent.length !== 0 && !(options.target instanceof NodeList)) {
            if (typeof options.operator === 'function') {
                childComponent.forEach(el => options.operator(el));
            }

            return childComponent;
        }

        // determine if element is specified component
        let matchesQuery = false;

        if (components) {
            components.forEach(component => {
                if (options.query === component) {
                    matchesQuery = true;

                    return matchesQuery;
                }
            });
        }

        if (matchesQuery || options.operator == 'isset') return matchesQuery;

        // get all specified components from document 
        return (querySelector.length === 0) ? false : querySelector;
    }
    
    // determine the component name of current element
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
function toggleComponent(moduleName, target, query, operator, glue) {
    return Array.prototype.forEach.call(target.classList, className => {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);

            target.classList.add(
                (operator === 'set') ? `${className}${glue}${query}` : className.replace(glue + query, '')
            );
        }
    });
}