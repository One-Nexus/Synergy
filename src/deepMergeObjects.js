export default function deepMergeObjects(...params) {
  if (process.env.ONE_NEXUS) {
    return ONE_NEXUS.deepextend(...params);
  } 
  else if (typeof ONE_NEXUS !== 'undefined' && typeof ONE_NEXUS.deepextend === 'function') {
    return ONE_NEXUS.deepextend(...params);
  } 
  else {
    return require('deep-extend')(...params);
  }
}