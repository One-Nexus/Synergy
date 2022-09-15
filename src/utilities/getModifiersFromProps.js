/**
 * @param {*} props 
 * @param {*} blacklist 
 */
export default function getModifiersFromProps(props, blacklist = []) {
  const modifiers = [];

  for (var prop in props) {
    const [key, value] = [prop, props[prop]];
    const firstLetter = prop[0];

    if (prop === 'isSubComponent') {
      continue;
    }

    if (prop === 'isComponent') {
      continue;
    }

    // @TODO add these (with above subComponent) to whitelist array instead
    if (prop === 'permeable') {
      continue;
    }

    if (blacklist.indexOf(key) < 0) {
      // assume prop to be name of module
      if (firstLetter === firstLetter.toUpperCase()) {
        modifiers.push(key);
      }

      if (typeof value === 'boolean' && value) {
        modifiers.push(key);
      }
    }
  }

  return modifiers;
}