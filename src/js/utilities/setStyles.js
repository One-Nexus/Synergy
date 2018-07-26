/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} theme 
 * @param {*} scope 
 */
export default function setStyles(element, styles, globals, theme) {

    const values = (typeof styles === 'object') ? styles : styles(element, globals);

    for (let [key, value] of Object.entries(values)) {
        const subComponent = element.querySelectorAll(`[class*="_${key}"]`);

        if (typeof value === 'function' || typeof value === 'object') {
            if (key.indexOf('modifier(') > -1) {
                const modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if (element.modifier(modifier)) {
                    setStyles(element, value);
                }
            }
            else if (element.component(key)) {
                element.component(key, _component => {
                    if (typeof value === 'object') {
                        setStyles(_component, value);
                    } 
                    else if (typeof value === 'function') {
                        setStyles(_component, value(_component));
                    }
                });
            }
            else if (subComponent.length) {
                [...subComponent].forEach(query => setStyles(query, value));
            }
            else {

            }
        }

        else {
            // @TODO test if `key` is known CSS property
            element.style[key] = value;
        }

    }

    if (theme) setStyles(element, theme, globals);
}