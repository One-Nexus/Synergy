import * as lucid from '@onenexus/lucid/src';
import deepextend from 'deep-extend';

if (typeof window !== 'undefined') {
  Object.assign(window, {
    Synergy: window.Synergy || {},
    ...lucid
  });

  Object.assign(Synergy, {
    config: deepextend,
    init: init
  });
}

/**
 * Synergy Theme
 */
function init({ modules, theme = {}, globals = {}, app = {}, handleConfig }) {
  if (typeof theme === 'function') {
    theme = theme(globals);
  }

  if (theme.theme) {
    theme = theme.theme;
  }

  if (app.Synergy && !app.options) {
    app.options = app.Synergy;
  }

  Object.assign(Synergy, app.options);

  Synergy.config(globals, Synergy.config(theme, app.theme));

  Object.values(modules).forEach(MODULE => {
    const namespace = (MODULE.defaultProps && MODULE.defaultProps.name) || MODULE.name;

    if (handleConfig) {
      let defaultConfig = MODULE.config || {};
  
      if (typeof defaultConfig === 'function') {
        defaultConfig = defaultConfig(globals);
      }

      const themeConfig = theme.modules && evalConfig(theme.modules[namespace]);

      Object.assign(MODULE, {
        config: Synergy.config(defaultConfig, themeConfig)
      });
    }

    window[namespace] = MODULE;
  });

  if (typeof globals.foundation === 'function') {
    globals.foundation(globals);
  }

  delete globals.modules, window.theme = globals;
}

/**
 * Evaluate module config properties
 */
function evalConfig(config) {
  if (!config) return;

  Object.entries(config).forEach(([key, value]) => {
    if (typeof value === 'object') {
      return evalConfig(value);
    } else {
      if (typeof value !== 'function') return;

      return config[key] = value();
    }
  });

  return config;
}