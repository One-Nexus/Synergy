import deepextend from '../utilities/deepMergeObjects';
import useTheme from './useTheme';

export default (config = {}, theme = useTheme(), props) => {
  let CONFIG = config;

  if (config.config && !props) {
    CONFIG = config.config, props = { ...config };
  }

  if (props) {
    delete props.children;
  }

  const evaluatedConfig = (typeof CONFIG === 'function') ? CONFIG(theme) : CONFIG;
  const themeConfig = (theme.modules && theme.modules[evaluatedConfig.name]) || {};

  return deepextend(evaluatedConfig || {}, themeConfig || {}, props || {});
}