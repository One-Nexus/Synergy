import * as lucid from '@onenexus/lucid/src';
import deepextend from 'deep-extend';

const Synergy = window.Synergy || {};

Object.assign(Synergy, {
  config: deepextend,
  init: init
});

export default Synergy;

export function init({ modules, config = {}, theme = {}, callback }) {
  const defaults = {
    attachLucidToWindow: true,
    attachModulesToWindow: true,
    attachThemeToWindow: true,
    attachSynergyToWindow: true,
    handleModuleConfig: true
  }

  config = { ...defaults, ...config }

  Object.assign(Synergy, config);

  if (config.attachLucidToWindow) {
    Object.assign(window, lucid);
  }

  if (config.attachModulesToWindow) {
    Object.values(modules).forEach(MODULE => {
      const namespace = (MODULE.defaultProps && MODULE.defaultProps.name) || MODULE.name;

      if (config.handleModuleConfig) {
        let defaultConfig = MODULE.config || {};
    
        if (typeof defaultConfig === 'function') {
          defaultConfig = defaultConfig(theme);
        }

        const themeConfig = theme.modules && evalConfig(theme.modules[namespace], theme);

        Object.assign(MODULE, {
          config: deepextend(defaultConfig, themeConfig)
        });
      }

      window[namespace] = MODULE;
    });
  }

  if (config.attachThemeToWindow) {
    window.theme = theme;
  }

  if (config.attachSynergyToWindow) {
    window.Synergy = Synergy;
  }

  if (typeof callback === 'function') {
    callback({ modules, config, theme });
  }
}

/**
 * Evaluate module config properties
 */
function evalConfig(config, theme) {
  if (!config) {
    return;
  }

  Object.entries(config).forEach(([key, value]) => {
    if (typeof value === 'object') {
      return evalConfig(value, theme);
    }
    else {
      return (typeof value === 'function') ? config[key] = value(theme) : false;
    }
  });

  return config;
}