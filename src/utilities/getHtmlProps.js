import HTMLAttributes from 'html-attributes';

/**
 * Get element HTML attributes from props
 * @param {*} props 
 */
export default function getHtmlProps(props) {
    let HtmlProps = {};

    for (let prop in props) {
        if (prop === 'name') {
            continue;
        }
        else if (prop === 'modifiers') {
            continue;
        }
        else if (prop === 'tag') {
            continue;
        }  
        else if (prop === 'elementname') {
            HtmlProps.name = props[prop];
        }
        else if (Object.values(HTMLAttributes).includes(prop)) {
            HtmlProps[prop] = props[prop];
        }
    };

    return HtmlProps;
}