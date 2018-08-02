/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 * @param {String} glue
 * @param {String} scope
 * 
 * @todo make scope accept an array of scopes
 */
export default function getModifiers(block, module, glue, scope) {
    let modifiers = [];

    if (block instanceof HTMLElement) {
        block.classList.forEach(className => {
            if (className.indexOf(module) === 0) {
                // safely determine if className contains modifier
                if (scope && ((className.indexOf(scope) === className.length - scope.length) || className.indexOf(`${scope}-`) > -1)) {
                    className = className.replace(`-${scope}`, '');
                    modifiers.push(scope);
                }

                modifiers.push(className.split(glue).slice(1));
            }
        });
    }

    return [].concat.apply([], modifiers);
}