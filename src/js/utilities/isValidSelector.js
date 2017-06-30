/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @access private
 * 
 * @param {String} selector - the selector to test for validity
 */
export function isValidSelector(selector) {
    var stub = document.createElement('br');
    
    try { stub.querySelector(selector) } catch(e) { return false }

    return true;
}