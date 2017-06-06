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
const synergy = function(els, callback, config, custom) {

    const block = getBlockName();

    function getBlockName() {
        if (typeof els === 'string') {
            return els;
        } else if (config && config.module && 'name' in config.module) {
            return config[Object.keys(config)[0]].name;
        } else if (typeof els === 'object' && typeof els[1] === 'string') {
            return els[1];
        } else if (els instanceof HTMLElement) {
            if (typeof Element.prototype.closest !== 'undefined' && els.closest('[data-module]')) {
                return els.closest('[data-module]').getAttribute('data-module');
            } else if (els.classList.length === 1) {
                return els.classList[0].split(/-(.+)/)[0];
            } else if (els.id) {
                return els.id;
            }
        }
    }

    // Force 'els' into a NodeList || HTMLElement
    if (typeof els === 'string') {
        els = document.querySelectorAll(`.${block}, [class*="${block}-"]`);
    } else if (typeof els === 'object' && ((els[0] instanceof NodeList) || (els[0] instanceof HTMLElement))) {
        els = els[0];
    }

    if (els) {
        if (els instanceof NodeList) {
            els.forEach(el => {
                el.setAttribute('data-module', block);
            });
        } else if (els instanceof HTMLElement) {
            els.setAttribute('data-module', block);
        }
    }

    function blockPart(part, type, set, glue, element = els) {
        if (part) {
            const namespace = block + glue + part;

            if (set) {
                element.classList.remove(block);
                element.classList.add(namespace);
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

    // Merge default/custom options
    const options = config ? Object.assign(
        config[Object.keys(config)[0]], custom
    ) : custom;

    exports.query = els;

    exports.modifier = function(modifier, set, element = els) {
        return blockPart(modifier, 'modifier', set, '-', element);
    };

    exports.component = function(component, set, element = els) {
        return blockPart(component, 'component', set, '_', element);
    };


    if (callback) {
        Array.prototype.forEach.call(els, function(el, index) {
            return callback(el, options, exports);
        });
    }

    return exports;
};

export default synergy;