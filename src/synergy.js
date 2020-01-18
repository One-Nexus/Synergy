import * as lucid from '@onenexus/lucid/src';
import deepextend from 'deep-extend';
import Container from './Container';

const Synergy = window.Synergy || {};

Object.assign(Synergy, {
  config: deepextend,
  init: init,
  minWidth: (query) => window.matchMedia(`(min-width: ${query}`).matches,
  maxWidth: (query) => window.matchMedia(`(max-width: ${query}`).matches
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
    Object.assign(window, modules);
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

  return { modules, options, theme }
}