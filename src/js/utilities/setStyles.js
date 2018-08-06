import Synergy from '../synergy';

/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} theme 
 * @param {*} parentElement 
 */
export default function setStyles(element, styles, globals, theme, parentElement) {

    // console.log(element, styles);
    const values = (typeof styles === 'object') ? styles : styles(element, theme, globals);
    const importantValues = values => values.forEach(value => value.element.style[value.style[0]] = value.style[1]);

    const stylesDidMount   = new Event('stylesdidmount');
    const moduleDidRepaint = new Event('moduledidrepaint');

    // initialise data interface
    element.data = element.data || { eventListeners: [], importantStyles: [] };

    // determine parent element
    parentElement = parentElement || element;

    // attach theme and repaint methods to parent element
    if (element === parentElement && theme !== false) {
        parentElement.repaint = () => {
            setStyles(parentElement, styles(element, theme, globals), globals, false);

            if (theme) {
                setStyles(parentElement, theme, globals, false);
            }

            importantValues(parentElement.data.importantStyles);

            parentElement.dispatchEvent(moduleDidRepaint);
        };
    }

    for (let [key, value] of Object.entries(values)) {
        const subComponent = element.querySelectorAll(`[class*="_${key}"]`);

        if (typeof value === 'function' || typeof value === 'object') {
            if (key.indexOf('modifier(') > -1) {
                const modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if (Synergy(element).modifier(modifier)) {
                    setStyles(element, value, globals, false, parentElement);
                }
            }

            else if (Synergy(element).component(key)) {
                Synergy(element).component(key, _component => {
                    if (typeof value === 'object') {
                        setStyles(_component, value, globals, false, parentElement);
                    } 
                    else if (typeof value === 'function') {
                        // @TODO getParameterNames(value), pass to `value(...)`

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
                        setStyles(element, value, globals, false, parentElement);

                        element.removeEventListener('mouseenter', mouseEnter);
                    }, false);

                    element.addEventListener('mouseleave', function mouseLeave() {
                        element.removeEventListener('mouseleave', mouseLeave);

                        element.data.eventListeners = element.data.eventListeners.filter(item => item !== 'mouseenter');

                        parentElement.repaint();
                    }, false);
                }
            }

            else if (value instanceof Array) {
                if (value[0] === 'important' && value[1] !== false) {
                    let alreadyContains = false;

                    if (parentElement.data.importantStyles.length) {
                        parentElement.data.importantStyles.forEach(style => {
                            if (style.element === element && (style.style.toString() === [key, value[1]].toString())) {
                                alreadyContains = true;
                            }
                        });
                    }

                    if (!alreadyContains) {
                        parentElement.data.importantStyles.push({ element, style: [key, value[1]] })
                    }
                }
            }

            else if (typeof value === 'function') {
                element.style[key] = value(element.style[key]);
            }

            else {

            }
        }

        else {
            element.style[key] = value;
        }
    }

    if (typeof theme === 'object') {
        setStyles(element, theme, globals, false);
    }

    if (element === parentElement && theme !== false) {
        importantValues(parentElement.data.importantStyles);

        element.dispatchEvent(stylesDidMount);
    }
}