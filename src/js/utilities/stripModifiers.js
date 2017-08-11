import * as Synergy from '../synergy';

/**
 * Strip any modifiers from a block name
 * 
 * @param {String} block
 */
export function stripModifiers(block) {

    block = block.split('-');

    return block[0];
}