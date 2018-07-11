/**
 * setDomNodeAttributes
 *
 * @param domNodes
 * @param module
 */
export default function setDomNodeAttributes({ domNodes, module } = {}) {
    if (domNodes instanceof NodeList) {
        domNodes.forEach(el => {
            if (!el.hasAttribute('data-module')) {
                el.setAttribute('data-module', module);
            }
        });
    } else if (domNodes instanceof HTMLElement) {
        if (!domNodes.hasAttribute('data-module')) {
            domNodes.setAttribute('data-module', module);
        }
    }
}