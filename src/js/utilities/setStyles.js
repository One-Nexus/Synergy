/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} theme 
 * @param {*} scope 
 */
export default function setStyles(element, styles, globals, theme, parentElement) {

    const values = (typeof styles === 'object') ? styles : styles(element, globals);

    // initialise data interface
    element.data = element.data || { eventListeners: [], importantStyles: [] };

    // determine parent element
    parentElement = parentElement || element;

    // attach theme and repaint methods to parent element
    if (element === parentElement) {
        parentElement.data.theme = element.data.theme || theme;
        parentElement.data.repaint = element.data.repaint || styles(element, globals);
    }

    for (let [key, value] of Object.entries(values)) {
        const subComponent = element.querySelectorAll(`[class*="_${key}"]`);

        if (typeof value === 'function' || typeof value === 'object') {
            if (key.indexOf('modifier(') > -1) {
                const modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if (element.modifier(modifier)) {
                    setStyles(element, value, globals, false, parentElement);
                }
            }

            else if (element.component(key)) {
                element.component(key, _component => {
                    if (typeof value === 'object') {
                        setStyles(_component, value, globals, false, parentElement);
                    } 
                    else if (typeof value === 'function') {
                        setStyles(_component, value(_component), globals, false, parentElement);
                    }
                });
            }

            else if (subComponent.length) {
                [...subComponent].forEach(query => setStyles(query, value, globals, false, parentElement));
            }

            else if (key === ':hover') {
                if (!element.data.eventListeners.includes('mouseenter')) {
                    element.data.eventListeners.push('mouseenter');

                    element.addEventListener('mouseenter', function mouseEnter() {
                        console.log('foo');
                        setStyles(element, value, globals, false, parentElement);

                        element.removeEventListener('mouseenter', mouseEnter);
                    }, false);

                    element.addEventListener('mouseleave', function mouseLeave() {
                        element.removeEventListener('mouseleave', mouseLeave);

                        element.data.eventListeners = element.data.eventListeners.filter(item => item !== 'mouseenter');

                        setStyles(parentElement, parentElement.data.repaint, globals, parentElement.data.theme);
                    }, false);
                }
            }

            else if (value instanceof Array) {
                if (value[0] === 'important' && value[1] !== false) {
                    // console.log(element, key, value)
                }
            }

            else {

            }
        }

        else {
            element.style[key] = value;
        }
    }

    if (typeof theme === 'object') setStyles(element, theme, globals);

}