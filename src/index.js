// import * as lucid from '@onenexus/lucid/src';
import * as lucid from '../../../Lucid/Lucid/src';
import Container from './Container';
import deepextend from './deepMergeObjects';

const Synergy = window.Synergy || {};

Object.assign(Synergy, lucid, {
  deepextend: deepextend,
  init: init,
  minWidth: (query) => window.matchMedia(`(min-width: ${query}`).matches,
  maxWidth: (query) => window.matchMedia(`(max-width: ${query}`).matches
});

const { 
  Module, 
  Wrapper, 
  Group, 
  Component, 
  SubComponent, 
  Provider, 
  useTheme, 
  useConfig, 
  useModuleContext,
  useUtils, 
  evalTheme,
} = Synergy;

export { 
  Container, 
  Module, 
  Wrapper, 
  Group, 
  Component, 
  SubComponent, 
  Provider, 
  useTheme, 
  useConfig,
  useModuleContext, 
  useUtils, 
  evalTheme, 
  init 
}

export default Synergy;

function init({ modules, options = {}, theme = {}, utils, callback }) {
  const defaults = {
    attachLucidComponentsToWindow: true,
    attachModulesToWindow: true,
    attachThemeToWindow: false,
    attachUtilsToWindow: false,
    attachSynergyToWindow: true
  }

  options = { ...defaults, ...options }

  Object.assign(Synergy, options);

  if (options.attachLucidComponentsToWindow) {
    Object.assign(window, {
      Module,
      Wrapper,
      Group,
      Component,
      SubComponent,
      Provider,
    });
  }

  if (options.attachModulesToWindow) {
    Object.assign(window, modules);
  }

  if (options.attachThemeToWindow) {
    window.theme = theme;
  }

  if (options.attachUtilsToWindow) {
    window.utils = utils;
  }

  if (options.attachSynergyToWindow) {
    window.Synergy = Synergy;
  }

  if (typeof callback === 'function') {
    callback({ modules, options, theme, utils });
  }

  return { modules, options, theme, utils }
}