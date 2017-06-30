/**
 * Attempt to retrieve possible module name from query
 * 
 * @access private
 * 
 * @param {String} query
 * @param {Object} config
 */
export function getBlockName(query, config) {
    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
    }
    
    else if (typeof query === 'object' && typeof query[1] === 'string') {
        return query[1];
    }
    
    else if (config && config.module && 'name' in config.module) {
        return config[Object.keys(config)[0]].name;
    }
    
    else if (query instanceof HTMLElement) {
        if (typeof Element.prototype.closest !== 'undefined' && query.closest('[data-module]')) {
            return query.closest('[data-module]').getAttribute('data-module');
        } 
        
        else if (query.classList.length === 1) {
            return query.classList[0].split(/-(.+)/)[0];
        } 
        
        else if (query.id) {
            return query.id;
        }
    }
}