/**
 * Attempt to retrieve possible module name from query
 * 
 * @param {String|Object|HTMLElement} query - query to retrieve module name
 * @param {Object} [config] - object to retrieve module name
 * 
 * @example getBlockName('foo') // returns 'foo'
 * @example getBlockName(document.getElementById('.foo')) // returns 'foo'
 * @example getBlockName(document.querySelector('.foo')) // returns 'foo'
 * @example getBlockName([document.getElementById('.foo'), 'bar']) // returns 'bar'
 * @example getBlockName(document.getElementById('.foo'), {foo: {name: 'bar'}}) // returns 'bar'
 */
export function getModuleName(query, config) {
    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
    }
    else if (typeof query === 'object' && typeof query[1] === 'string') {
        return query[1];
    }
    else if (config && config[Object.keys(config)[0]].name) {
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