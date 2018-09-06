import polymorph from '../../../../Polymorph/src/polymorph';

/**
 * Handle the ref callback on the rendered React component
 * 
 * @param {HTMLElement} node - the DOM element of the rendered React component
 * @param {Object} props - the props of the React component
 */
export default function refHandler(node, props) {
    if (node) {
        if (props.styles) {
            polymorph(node, ...props.styles)
        }

        if (props.init) {
            props.init(node);
        }
    }
}