/**
 * Get glue
 * 
 * @param {String} type - ['component'|'modifier]
 * @param {Object} custom
 * @param {string} glue
 */
export function getGlue(type, custom, glue) {
    let defaultGlue = (type === 'modifier') ? '-' : '_';

    if (custom && custom.modifierGlue) {
        glue  = custom[type + 'Glue'].replace(/'/g,'');
    }
    else if (window.APPUI && window.APPUI.global && window.APPUI.global[type + '-glue']) {
        glue  = window.APPUI.global[type + '-glue'].replace(/'/g,'');
    }
    else {
        glue = global[type + '-glue']  || defaultGlue;
    }

    return glue;
}