/**
 * @param {*} props 
 * @param {*} blacklist 
 */
export default function getModifiersFromProps(props, blacklist = []) {
    const modifiers = [];

    for (var prop in props) {
        const [key, value] = [prop, props[prop]];

        // if prop is name of module, do not include in list
        if (prop[0] === prop[0].toUpperCase()) {
            continue;
        }

        if (typeof value === 'boolean' && value) {
            if (blacklist && blacklist.indexOf(key) < 0) {
                modifiers.push(key);
            }
        }
    }

    return modifiers;
}