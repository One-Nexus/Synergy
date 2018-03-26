/**
 * Parents
 * 
 * @see https://gist.github.com/ziggi/2f15832b57398649ee9b
 * 
 * @param {HTMLElement} elem
 * @param {String} selector
 */
export default function parents(elem, selector) {
    var elements = [];
    var ishaveselector = selector !== undefined;

    while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue;
        }
 
        if (!ishaveselector || elem.matches(selector)) {
            elements.push(elem);
        }
    }
 
    return elements;
}