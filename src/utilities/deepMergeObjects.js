export default function deepMergeObjects(...params) {
  if (typeof process !== "undefined" && process.env.SYNERGY) {
    return Synergy.deepextend(...params);
  } 
  else if (typeof Synergy !== 'undefined' && typeof Synergy.deepextend === 'function') {
    return Synergy.deepextend(...params);
  } 
  else {
    return require('deepmerge')(...params);
  }
}