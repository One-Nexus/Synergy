import deepextend from 'deep-extend'

/**
 * getOptions
 *
 * Merge default/custom options
 *
 * @param {Object} [config] - config to use when calling the function
 * @param {Object} [custom] - custom config to use in callback
 * @param {Object} [parser] - custom parser to use for configuration
 * @returns {*}
 */
export function getOptions ({ config = {}, parser, custom = {} } = {}) {
  const configKey = Object.keys(config)[0];
  const extendedConfig = configKey ? deepextend(config[configKey], custom) : custom;

  if (typeof parser === 'function') {
    return parser(extendedConfig);
  }

  if (parser && typeof parser.parse === 'function') {
    return parser.parse(extendedConfig);
  }

  return extendedConfig;
}
