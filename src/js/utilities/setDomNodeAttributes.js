/**
 * setDomNodeAttributes
 *
 * @param domNodes
 * @param module
 */
export default function setDomNodeAttributes({ domNodes, module } = {}) {
    if (domNodes instanceof NodeList) {
        domNodes.forEach(el => el.setAttribute('data-module', module));
    } else if (domNodes instanceof HTMLElement) {
        domNodes.setAttribute('data-module', module);
    }
}
