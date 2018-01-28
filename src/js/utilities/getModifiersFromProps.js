import getBlacklistedModifiers from './getBlacklistedModifiers';

/**
 * @param {*} props 
 * @param {*} blacklist 
 */
export default function getModifiersFromProps(props, blacklist = getBlacklistedModifiers()) {
    const modifiers = [];

    for (var prop in props) {
        const [key, value] = [prop, props[prop]];

        if (typeof value === 'boolean' && value) {
            if (blacklist.indexOf(key) < 0) {
                modifiers.push(key);
            }
        }
    }

    return modifiers;
}