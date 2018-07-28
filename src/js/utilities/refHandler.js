/**
 * Handle the ref callback on the rendered React component
 * 
 * @param {HTMLElement} node - the DOM element of the rendered React component
 * @param {Object} props - the props of the React component
 */
export default function refHandler(node, props) {

    // if (node instanceof HTMLElement) {
    //     node.addEventListener('stylesdidmount', event => {
    //         console.log(node, event);
    //     });
    // }

    if (props.init) {
        props.init(node);
    }

    if (props.styles) {
        props.styles(node);
    }
}