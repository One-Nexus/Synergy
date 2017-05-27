
/**
 * Synergy Module
 * 
 * @access public
 * @param {(String|Object)} els
 * @param {Object} custom
 * @param {Function} callback
 * @param {Object} config
 */
const $module = function(els, callback, custom, config) {

    let block;

    if (config) {
        block = config[Object.keys(config)[0]].name;
    }

    if (typeof(els) === 'string') {
        block = els;
        els = document.querySelector('.' + els + ', [class*="' + els + '-"]');
    }

    if (els.length) {
        Array.prototype.forEach.call(els, function(el, index) {
            el.setAttribute('data-module', block);
        });
    } else {
        els.setAttribute('data-module', block);
    }

    exports.modifier = function(modifier, el) {
        if (modifier) {
            el.className += modifier;
        } else {
            return 'i_am_modifier';
        }
    };

    exports.component = function(component, element = els) {
        if (component) {
            const selector = block + '_' + component;

            if (element.matches('[class*="' + selector + '"]')) {
                return true;
            }

            let componentExists = element.querySelector('.' + selector + ', [class*="' + selector + '-"]');

            if (componentExists) {
                return componentExists;
            }

            return false;
        } else {
            var classes = element.classList['value'].split(' ');

            classes.forEach(function(value) {
                let isComponent = value.includes(block + '_');
                if (isComponent) {
                    console.log(value.split(block + '_')[1]);
                }
            });

            return element.classList;
        }
    };

    if (config && callback) {
        const options = Object.assign(config[Object.keys(config)[0]], custom);

        Array.prototype.forEach.call(els, function(el, index) {
            return callback(el, options, exports);
        });
    }

    return exports;
};

Element.prototype.component = function(component) {
    return exports.component(component, this);
};

module.exports = $module;