import deepMergeObjects from './deepMergeObjects';

export default function mergeThemes(...themes) {
  let THEME = {};

  [...themes].forEach(theme => {
    if (typeof theme === 'function') {
      THEME = deepMergeObjects(THEME, theme(THEME) || {});
    } else {
      THEME = deepMergeObjects(THEME, theme || {});
    }
  });

  return THEME;
}