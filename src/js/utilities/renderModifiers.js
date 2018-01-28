/**
 * @param {*} modifiers 
 */
export default function renderModifiers(modifiers) {
    if (modifiers && typeof modifiers === 'object' && modifiers.length) {
        return ('-' + modifiers).replace(/,/g, '-');
    }

    return '';
}