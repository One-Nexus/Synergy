/**
 * Synergy Module
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Function} callback
 * @param {Object} config
 */
const synergy = function(els, callback, custom, config) {

    let block;

    if (typeof els === 'string') {
        block = els; 
        els = document.querySelectorAll(`.${block}, [class*="${block}-"]`);
    } else if (config) {
        block = config[Object.keys(config)[0]].name;
    }

    if (els.length) {
        els.forEach(el => {
            el.setAttribute('data-module', block);
        });
    } else {
        els.setAttribute('data-module', block);
    }

    function blockPart(part, type, set, glue, element = els) {
        if (part) {
            const namespace = block + glue + part;

            if (set) {
                return element.classList.add(namespace);
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

            let classes = element.classList.value.split(' ');

            classes.forEach(function(item) {
                const isPart = item.includes(block + glue);
                if (isPart) {
                    let parts = item.replace(block + glue, '').split(glue);

                    if (parts.length === 1) {
                        parts = parts[0];
                    }

                    part.push(parts);
                }
            });

            return part;
        }
    }

    exports.query = els;

    exports.modifier = function(modifier, set, element = els) {
        return blockPart(modifier, 'modifier', set, '-', element);
    };

    exports.component = function(component, set, element = els) {
        return blockPart(component, 'component', set, '_', element);
    };

    if (callback) {
        const options = config ? Object.assign(
            config[Object.keys(config)[0]], custom
        ) : custom;

        Array.prototype.forEach.call(els, function(el, index) {
            return callback(el, options, exports);
        });
    }

    return exports;
};

export default synergy;

Element.prototype.component = function(component, set) {
    return exports.component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return exports.modifier(modifier, set, this);
};