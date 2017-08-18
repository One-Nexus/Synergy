import * as Synergy from '../synergy';

/**
 * Strip any modifiers from a block name
 * 
 * @function stripModifiers
 * 
 * @param {String} block
 * @param {String} module
 */
export function stripModifiers(block, module) {
    // remove module name from block
    block = block.replace(module,'');
    // remove modifiers from block
    block = block.split('-')[0];
    // merge module + remaining block
    block = module + block;

    return block;
}