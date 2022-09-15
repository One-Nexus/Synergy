export default function evalTheme(theme, core = theme) {
  if (!theme) return;
  if (Array.isArray(theme)) return theme;

  let result = {}

  Object.entries(theme).forEach((entry) => {
    const key = entry[0]; 
    const value = entry[1];

    if (typeof value === 'object') {
      result[key] = evalTheme(value, core);
    }
    else {
      if (typeof value === 'function') {
        result[key] = value(core);
      } else {
        result[key] = value;
      }
    }
  });

  return result;
}