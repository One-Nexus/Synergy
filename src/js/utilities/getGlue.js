import { global } from '../synergy';
/**
 * Get glue
 * 
 * @param {String} type - [{'component'|'modifier'}]
 * @param {Object} custom
 * @param {string} glue
 */
export default function getGlue(type, custom, glue) {

    if (custom && custom[type + 'Glue']) {
        glue = custom[type + 'Glue'].replace(/'/g,'');
    }
    else if ((typeof Synergy !== 'undefined') && Synergy.config && Synergy.config[type + '-glue']) {
        glue = Synergy.config[type + '-glue'];
    }
    else if (global && global[type + '-glue']) {
        glue = global[type + '-glue'];
    }

    return glue;
}