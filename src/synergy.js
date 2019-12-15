import * as lucid from '@onenexus/lucid/src';
import deepextend from 'deep-extend';
import Container from './Container';

const Synergy = window.Synergy || {};

Object.assign(Synergy, {
  config: deepextend,
  init: init
});

export default Synergy;

export { Container }

export function init({ modules, options = {}, theme = {}, callback }) {
  const defaults = {
    attachLucidToWindow: true,
    attachModulesToWindow: true,
    attachThemeToWindow: true,
    attachSynergyToWindow: true,
    handleModuleConfig: true
  }

  options = { ...defaults, ...options }

  Object.assign(Synergy, options);

  if (options.attachLucidToWindow) {
    Object.assign(window, lucid);
  }

  if (options.attachModulesToWindow) {
    Object.values(modules).forEach(MODULE => {
      const namespace = (MODULE.defaultProps && MODULE.defaultProps.name) || MODULE.name;

      if (options.handleModuleConfig) {
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

  if (options.attachThemeToWindow) {
    window.theme = theme;
  }

  if (options.attachSynergyToWindow) {
    window.Synergy = Synergy;
  }

  if (typeof callback === 'function') {
    callback({ modules, options, theme });
  }
}

// Evaluate module config properties
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