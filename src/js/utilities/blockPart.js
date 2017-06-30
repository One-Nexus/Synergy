/**
 * Get or set a component or modifier on a block
 * 
 * @access private
 * 
 * @param {String} part
 * @param {String} type
 * @param {String} operator
 * @param {String} glue
 * @param {HTMLElement} element
 */
export function blockPart(block, part, type, operator, glue, element) {
    if (part) {
        const namespace = block + glue + part;

        if (operator === 'add' || operator === 'set') {
            element.classList.add(namespace);
            return;
        } else if (operator === 'remove' || operator === 'unset') {
            element.classList.remove(namespace);
            return;
        }

        let selector;

        if (type == 'component') {
            selector = `.${namespace}, [class*="${namespace}-"]`;
        } else if (type == 'modifier') {
            selector = `[class*="${block}-"][class*="-${part}"]`;
        }

        if (!element.length) {
            if (element.matches(`[class*="${glue}${part}"]`)) {
                return true;
            }

            const parts = element.querySelectorAll(selector);

            if (parts.length !== 0) {
                return parts;
            }

            return false;
        }

        return document.querySelectorAll(selector);
    } else {
        part = [];

        const classes = element.classList.value.split(' ');

        classes.forEach(function(item) {
            const isPart = item.includes(block) && item.includes(glue);

            if (isPart) {
                if (type === 'component') {
                    item = item.split('-')[0];
                    item = item.split(/[_ ]+/).pop();
                    if (item !== block) {
                        part.push(item);
                    }
                } else if (type === 'modifier') {
                    let parts = item.replace(item.split(/-(.+)/)[0], '').split(glue);

                    parts = parts.filter(Boolean);

                    if (parts.length === 1) {
                        parts = parts[0];
                        part.push(parts);
                    } else {
                        parts.forEach(function(el) {
                            part.push(el);
                        });
                    }
                }
            }
        });

        if (part.length !== 0) {
            return part;
        }

        return false;
    }
}